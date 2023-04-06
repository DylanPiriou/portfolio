import React, { useEffect, useState } from 'react';
import "./Projects.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Data from "../../Data/data.json";
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Filters from '../../Components/Filters/Filters';

export default function Projects() {
  const dataTitle = {
    word1: "Selected",
    word2: "works"
  }

  // Fonction qui permet de stocker l'url de l'image survolée dans le state.
  const [imgUrl, setImgUrl] = useState("");
  const handleHover = (img) => {
    setImgUrl(img);
  }

  // Etat pour les filtres. "All" par défaut.
  const [filter, setFilter] = useState("All");

  // Permet d'afficher l'image du premier projet lorsqu'on arrive sur la page.
  useEffect(() => {
    setImgUrl(Data[0].cover)
  }, [])
  
  return (
    <section className="projects">
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
              <div className="img-box" style={{ backgroundImage: `url(${imgUrl})`}}></div>
            </div>
          </div>

        </div>
      </section>
  )
}
