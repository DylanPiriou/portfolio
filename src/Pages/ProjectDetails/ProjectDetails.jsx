import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ProjectDetails.scss";
import Data from "../../Data/data.json";
import NotFound from "../NotFound/NotFound";
import Navbar from '../../Components/Navbar/Navbar';
import MainButton from '../../Components/MainButton/MainButton';

export default function ProjectDetails() {
  // Récupère l'id du projet dans l'URL et vérifie qu'il existe dans le JSON
  const { id } = useParams();
  const project = Data.find(project => project.id === +id)

  // Navigation entre les projets
  const navigate = useNavigate();
  const prevId = parseInt(id, 10) - 1;
  const nextId = parseInt(id, 10) + 1;

  // Projet précédent
  const handlePrev = () => {
    if(prevId === 0){
      return navigate(`/project/${Data.length}`)
    }
      return navigate(`/project/${prevId}`)
  }

  // Projet suivant
  const handleNext = () => {
    if(nextId === Data.length + 1){
      return navigate("/project/1")
    }
      return navigate(`/project/${nextId}`)
  }

  // Paramètres pour le bouton
  const dataBtn = {
    data: "SAY HELLO →",
    destination: "/contact"
  }

  return (
    <>
    {project ? (
      <section className="projectDetails">
        <Navbar/>
        <div className="project-wrapper">
          <div className="project-img">
            <img src={project.cover} alt="" />
          </div>

          <div className="project-data">

            <div className="project-title">
              <h2>{project.title}</h2>
              <div className="arrow-flex">
                <div className="arrow-box">
                  <img src="/left-arrow.svg" alt="" className="left-arrow" id="left-arrow" onClick={() => handlePrev()} />
                </div>
                <div className="arrow-box">
                  <img src="/right-arrow.svg" alt="" className="right-arrow" id="right-arrow" onClick={() => handleNext()} />
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map(tag => {
                  return <li>{tag}</li>
                })}
              </ul>
              <MainButton dataBtn={dataBtn}/>
            </div>

          </div>

        </div>
      </section>
    ) : (
      <NotFound/>
    )}
    </>
  )
}
