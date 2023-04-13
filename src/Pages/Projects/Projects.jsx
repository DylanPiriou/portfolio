import React, { useEffect, useState, useRef } from 'react';
import "./Projects.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Data from "../../Data/data.json";
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Filters from '../../Components/Filters/Filters';
import { gsap } from "gsap";

export default function Projects() {
  // Fonction qui permet de stocker l'url de l'image survolée dans le state.
  const [imgUrl, setImgUrl] = useState("");
  const handleHover = (img) => {
    setImgUrl(img);
  }

  // URL de l'image = state
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`
  }

  // Etat pour les filtres. "All" par défaut.
  const [filter, setFilter] = useState("All");

  // Permet d'afficher l'image du premier projet lorsqu'on arrive sur la page.
  useEffect(() => {
    setImgUrl(Data[0].cover)
  }, [])

  // Animation à l'apparition de la page
  const projects = useRef();
  useEffect(() => {
    gsap.fromTo(projects.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    })
  }, [])
  
  return (
    <section className="projects" ref={projects}>
        <div className="projects-grid">
          <Navbar/>
          <div className="top-container">
            <h2>Selected Projects</h2>
            <Filters filter={filter} setFilter={setFilter} />
          </div>

          <div className="projects-container">
            <div className="titles-container">
              <div className="titles-wrapper">
                {Data && Data.map(data => {
                  if(filter === "All" || filter === data.stack){
                    return <ProjectCard key={data.id} data={data} handleHover={handleHover} />
                  }
                })}
              </div>
            </div>
            <div className="img-container">
              <div className="img-box" style={imgStyle}></div>
            </div>
          </div>

        </div>
      </section>
  )
}
