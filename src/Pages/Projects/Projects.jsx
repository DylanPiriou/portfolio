import React, { useEffect, useState } from "react";
import "./Projects.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Data from "../../Data/projects.json";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Filters from "../../Components/Filters/Filters";
import { NavLink } from "react-router-dom";
import Cursor from "../../Components/Cursor/Cursor";

export default function Projects() {
  // State pour l'URL de l'image
  const [imgUrl, setImgUrl] = useState("");
  // State pour l'id du projet
  const [projectId, setProjectId] = useState();

  // Fonction qui permet de stocker dans le state l'url de l'image et l'id du projet survolé
  const handleHover = (img, id) => {
    setImgUrl(img);
    setProjectId(id);
  };

  // Création du chemin dynamique au clique sur l'image
  const currentProject = Data.find((project) => project.id === projectId);
  const projectLink = currentProject ? `/project/${projectId}` : "#";

  // Permet d'afficher le premier projet lorsqu'on arrive sur la page
  useEffect(() => {
    setImgUrl(Data[0].cover);
    setProjectId(Data[0].id);
  }, []);

  // ----------- FILTER & SEARCH PART ------------ //

  // State pour les filtres. "All" par défaut.
  const [filter, setFilter] = useState("All");
  // State pour le système de recherche
  const [search, setSearch] = useState("");

  // Fonction qui permet de stocker ce qu'on écrit  dans le state search
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
      <div className="overlay-transition-1"></div>
      <div className="overlay-transition-2"></div>
        <Navbar />
      <div className="projects-grid">
        <div className="navbar-container"></div>
        <div className="top-container">
          <h2 tabIndex="0">Selected Projects</h2>
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
          <div className="img-container">
            <NavLink to={projectLink}>
              <img src={imgUrl} alt="project" />
            </NavLink>
          </div>
          <Cursor text={"CLICK"}/>
        </div>
      </div>
    </section>
  );
}
