import React, { useState } from 'react';
import "./Projects.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Data from "../../Data/data.json";
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
  const dataTitle = {
    word1: "Selected",
    word2: "works"
  }

  const [imgUrl, setImgUrl] = useState("");
  const handleHover = (img) => {
    setImgUrl(img);
  }
  const [filter, setFilter] = useState("All");
  
  return (
    <section className="projects">
      {/* <Navbar/> */}
        <div className="projects-grid">
          <Navbar/>
          <div className="top-container">
            <h2>Selected Projects</h2>
            <ul className="filter-btns__wrapper">
              <div className="filter-btn" onClick={() => setFilter("All")}>
                <label htmlFor="All">All</label>
                <input
                type="radio"
                name="All"
                value="All"
                checked={filter === "All"}
                onChange={() => setFilter("All")}
                />
              </div>
              <div className="filter-btn" onClick={() => setFilter("Frontend")}>
              <label htmlFor="Frontend">Frontend</label>
                <input
                type="radio"
                name="Frontend"
                value="Frontend"
                checked={filter === "Frontend"}
                onChange={() => setFilter("Frontend")}
                />
              </div>
              <div className="filter-btn" onClick={() => setFilter("Backend")}>
              <label htmlFor="Backend">Backend</label>
                <input
                type="radio"
                name="Backend"
                value="Backend"
                checked={filter === "Backend"}
                onChange={() => setFilter("Backend")}
                />
              </div>
            </ul>
          </div>

          <div className="projects-container">
            <div className="titles-container">
              <div className="titles-wrapper">
                {Data && Data.map(data => {
                  if(filter === "All" || filter === data.stack){
                    return <ProjectCard data={data} handleHover={handleHover} />
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
