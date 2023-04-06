import React, { useState } from 'react';
import "./ProjectCard.scss";
import { NavLink } from 'react-router-dom';

export default function ProjectCard({ data, handleHover }) {

  return (
    <NavLink
        className="project-card"
        key={data.id}
        to={`/project/${data.id}`} state={{ data }}
        onMouseEnter={() => handleHover(data.cover)}
    >
        <h3 data-id={data.id}>
            {data.title}
            <img src="/arrow-right.svg" alt="img" />
        </h3>
    </NavLink>
  )
}
