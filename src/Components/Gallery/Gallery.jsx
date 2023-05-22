import React from "react";
import "./Gallery.scss";

export default function Gallery({ project }) {
  return (
    <div className="img-project-container">
      {project.slider ? (
        project.slider.map((img, index) => {
          return (
            <div className="img-project-wrapper" key={index}>
              <img src={img} alt={project.title} />
            </div>
          );
        })
      ) : (
        <video src={project.video} alt={project.title} controls />
      )}
    </div>
  );
}
