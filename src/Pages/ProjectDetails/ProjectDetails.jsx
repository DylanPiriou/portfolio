import React, { useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.scss";
import Data from "../../Data/projects.json";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar/Navbar";
import MainButton from "../../Components/MainButton/MainButton";
import { TfiArrowTopRight } from "react-icons/tfi";
import ScrollTop from "../../Components/ScrollTop/ScrollTop";
import PrevNext from "../../Components/PrevNext/PrevNext";

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
      window.scrollTo(0, 0);
    }
  };

  // Données pour le bouton
  const dataBtn = {
    data: "LET'S TALK",
    destination: "/contact"
  }

  // Modification de la vitesse du scroll pour img
  const img = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollAmount = window.scrollY;
      const newPosition = scrollAmount * .3;
      if(img.current){
        img.current.style.transform = `translateY(${newPosition}px)`;
      }
    })
  }, [img])

  return (
    <>
      {project ? (
        <section className="projectDetails">
          <div key={`overlay1-${id}`} className="overlay-transition-1"></div>
          <div key={`overlay2-${id}`} className="overlay-transition-2"></div>
          <Navbar />
          <div className="project-container">
            <div className="img-box">
              <img src={project.cover} alt="" className="mainImg" ref={img} />
            </div>
            <div className="title-wrapper">
              <h2 key={`title-${id}`}><span>{project.title}</span></h2>
              <p key={`subtitle-${id}`}>{project.subtitle}</p>
              <p key={`date-${id}`}>— {project.date}</p>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <p>{project.description}</p>
                <div className="stack-wrapper">
                  {project.tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>
                  })}
                </div>
              </div>
            </div>
            <div className="bottom-container">
              <div className="links-wrapper">
                <h2>Want more juicy details about this project?</h2>
                <div className="links">
                  <MainButton dataBtn={dataBtn}/>
                  <a href="#" className="github">Look on GitHub<TfiArrowTopRight/></a>
                </div>
              </div>
              <PrevNext prevProject={prevProject} nextProject={nextProject} handlePrev={() => handlePrev()} handleNext={() => handleNext()}/>
            </div>
          </div>
          <ScrollTop/>
        </section>
      ) : (
        <NotFound/>
      )}
    </>
  );
}
