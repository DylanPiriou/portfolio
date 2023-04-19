import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.scss";
import Data from "../../Data/projects.json";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar/Navbar";
import { TfiArrowTopRight } from "react-icons/tfi";
import MainButton from "../../Components/MainButton/MainButton";

export default function ProjectDetails() {
  // Récupère l'id du projet dans l'URL et vérifie qu'il existe dans le JSON
  const { id } = useParams();
  const project = Data.find((project) => project.id === +id);

  // Navigation entre les projets
  const navigate = useNavigate();
  const prevId = parseInt(id, 10) - 1;
  const nextId = parseInt(id, 10) + 1;

  // Gestion des projets suivants et précédents
  const prevProject =
    prevId === 0
      ? Data[Data.length - 1]
      : Data.find((project) => project.id === prevId);

  const nextProject =
    nextId > Data.length
      ? Data[0]
      : Data.find((project) => project.id === nextId);

  // Gestion des évènements pour rediriger vers les projets suviants ou précédents
  const handlePrev = () => {
    if (prevId === 0) {
      navigate(`/project/${Data.length}`);
      window.scrollTo(0, 0);
    } else {
      navigate(`/project/${prevId}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (nextId > Data.length) {
      navigate("/project/1");
      window.scrollTo(0, 0);
    } else {
      navigate(`/project/${nextId}`);
      window.scrollTo(0, 0);;
    }
  };

  const dataBtn = {
    data: "LET'S TALK",
    destination: "/contact"
  }

  return (
    <>
      {project ? (
        <section className="projectDetails">
          <div className="overlay-transition-1"></div>
          <div className="overlay-transition-2"></div>
          <Navbar />
          <div className="project-container">
            <div className="title-box">
              <div className="title">
                <h2>{project.title}</h2>
                <span>/{project.date}</span>
              </div>
            </div>
            <div className="img-box">
              <img src={project.cover} alt="" />
            </div>
            <div className="stack-box">
              <h3>Built with</h3>
              <div className="stack">
                {project.tags.map((tag) => {
                  return <span>{tag}</span>;
                })}
              </div>
            </div>
            <div className="content-box">
              <h3>About</h3>
              <div className="content">
                <div className="text">
                  <p>{project.subtitle}</p>
                  <br />
                  <p>{project.description}</p>
                </div>
                <div className="btn-wrapper">
                  <MainButton dataBtn={dataBtn}/>
                  <a href="#">See project on github</a>
                </div>
              </div>
            </div>
            <div className="next-box">
                <div className="project" onClick={() => handlePrev()}>
                  <h4>Previous project</h4>
                  <h3>{prevProject.title}</h3>
                  
                </div>
                <div className="project" onClick={() => handleNext()}>
                  <h4>Next project</h4>
                  <h3>{nextProject.title}</h3>
                </div>
            </div>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
}
