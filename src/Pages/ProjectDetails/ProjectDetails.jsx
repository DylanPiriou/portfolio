import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ProjectDetails.scss";
import Data from "../../Data/projects.json";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar/Navbar";
import MainButton from "../../Components/MainButton/MainButton";
import { TfiArrowTopRight } from "react-icons/tfi";
import ScrollTop from "../../Components/ScrollTop/ScrollTop";
import PrevNext from "../../Components/PrevNext/PrevNext";
import Technos from "../../Components/Technos/Technos";

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
      handleNavigate(`/project/${Data.length}`);
    } else {
      handleNavigate(`/project/${prevId}`);
    }
  };

  const handleNext = () => {
    if (nextId > Data.length) {
      handleNavigate("/project/1");
    } else {
      handleNavigate(`/project/${nextId}`);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  // Données pour le bouton
  const dataBtn = {
    data: "LET'S TALK",
    destination: "/contact"
  }

  // Gestion du titre du document
  const location = useLocation();
  const name = location.pathname;
  if(name === `/project/${id}`){
    document.title = `${project?.title} — Dylan Piriou`
  } 

  return (
    <>
      {project ? (
        <section className="projectDetails">
          <div key={`overlay1-${id}`} className="overlay-transition-1"></div>
          <div key={`overlay2-${id}`} className="overlay-transition-2"></div>
          <Navbar />
          <div className="project-container">
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
              {project.slider ? project.slider.map((img, index) => {
                return (
                  <div className="img-project-wrapper" key={index}>
                    <img src={img} alt=""/>
                  </div>
                )
              }) : (
                    <video src={project.video} alt={project.title} controls/>
              )}
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
