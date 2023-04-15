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

  // Permet d'afficher l'image du premier projet lorsqu'on arrive sur la page.
  useEffect(() => {
    setImgUrl(Data[0].cover)
  }, [])

  // Etat pour les filtres. "All" par défaut.
  const [filter, setFilter] = useState("All");

  // Etat pour la recherche
  const [search, setSearch] = useState("");
  const handleSearch = e => {
    setSearch(e.target.value);
  }
  const filteredData = Data.filter(data => {
    if(filter === "All" || filter === data.stack){
        return data.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    }
  })


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
            <Filters filter={filter} setFilter={setFilter} search={search} handleSearch={handleSearch} />
          </div>
          <div className="projects-container">
            <div className="titles-container">
              <div className="titles-wrapper">
                {filteredData.length > 0 ? (
                  filteredData.map(data => {
                  return <ProjectCard key={data.id} data={data} handleHover={handleHover} />
                })) : (
                  <small>No data found. Search by tags.</small>
                )}
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
