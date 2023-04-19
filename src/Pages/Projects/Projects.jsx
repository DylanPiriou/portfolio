import React, { useEffect, useState, useRef } from "react";
import "./Projects.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Data from "../../Data/data.json";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Filters from "../../Components/Filters/Filters";
import { NavLink } from "react-router-dom";
import Cursor from "../../Components/Cursor/Cursor";

export default function Projects() {
  const [imgUrl, setImgUrl] = useState("");
  const [projectId, setProjectId] = useState();

  // Fonction qui permet de stocker l'url et l'id de l'image survolée dans le state
  const handleHover = (img, id) => {
    setImgUrl(img);
    setProjectId(id);
  };

  // URL de l'image = state
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`,
  };

  // Création du chemin dynamique au clique sur l'image
  const currentProject = Data.find((project) => project.id === projectId);
  const projectLink = currentProject ? `/project/${projectId}` : "#";

  // Permet d'afficher l'image du premier projet lorsqu'on arrive sur la page.
  useEffect(() => {
    setImgUrl(Data[0].cover);
    setProjectId(Data[0].id);
  }, []);

  // Etat pour les filtres. "All" par défaut.
  const [filter, setFilter] = useState("All");

  // Etat pour la recherche
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Logique de filtre pour la recherche
  const filteredData = Data.filter((data) => {
    if (filter === "All" || filter === data.stack) {
      return data.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <section className="projects">
      <div className="projects-grid">
        <Navbar />
        <div className="top-container">
          <h2>Selected Projects</h2>
          <Filters
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
        <div className="projects-container">
          <div className="titles-container">
            <div className="titles-wrapper">
              {filteredData.length > 0 ? (
                filteredData.map((data) => {
                  return (
                    <ProjectCard
                      key={data.id}
                      data={data}
                      handleHover={handleHover}
                    />
                  );
                })
              ) : (
                <small>No projects found.</small>
              )}
            </div>
          </div>
          <div
            className="img-container">
            <NavLink to={projectLink}>
              <div className="img-box" style={imgStyle}>
              </div>
            </NavLink>
            <Cursor/>
          </div>
        </div>
      </div>
    </section>
  );
}
