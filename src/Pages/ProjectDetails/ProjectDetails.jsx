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
import Technos from "../../Components/Technos/Technos";
import Slider from "../../Components/Slider/Slider";

export default function ProjectDetails() {
  // Récupère l'id du projet dans l'URL et vérifie qu'il existe dans le JSON
  const { id } = useParams();
  const project = Data.find((project) => project.id === +id);

  // Navigation entre les projets
  const navigate = useNavigate();
  const prevId = +id - 1;
  const nextId = +id + 1;

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

            {/* <Slider project={project} /> */}

            <div className="title-wrapper">
              <h2 tabIndex="0" key={`title-${id}`}><span>{project.title}</span></h2>
              <p tabIndex="0" key={`subtitle-${id}`}>{project.subtitle}</p>
              <p tabIndex="0" key={`date-${id}`}>— {project.date}</p>
            </div>

            <div className="cover-container">
              <img src={project.cover} alt={project.title} className="project-cover"/>
            </div>

            <div className="content-wrapper">
              <div className="content">
                <p tabIndex="0">{project.description}</p>
                <div className="stack-wrapper">
                  {project.tags.map((tag, index) => {
                    return <Technos key={index} tag={tag} />
                  })}
                </div>
              </div>
            </div>

            <div className="img-project-container">
              {project.slider.map((img, index) => {
                return (
                  <div className="img-project-wrapper" key={index}>
                    <img src={img} alt=""/>
                  </div>
                )
              })}
            </div>

            <div className="calltoaction-container">
              <div className="links-wrapper">
                <h2 tabIndex="0">Want more juicy details about this project?</h2>
                <div className="links">
                  <MainButton dataBtn={dataBtn}/>
                  <a href={project.link} target="_blank" className="github">Look on GitHub<TfiArrowTopRight/></a>
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
