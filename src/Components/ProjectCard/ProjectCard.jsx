import "./ProjectCard.scss";
import { NavLink } from 'react-router-dom';
import { TfiArrowRight } from "react-icons/tfi"

export default function ProjectCard({ data, handleHover }) {

  return (
    <NavLink
        className="project-card"
        key={data.id}
        to={`/project/${data.id}`}
        onMouseEnter={() => handleHover(data.cover, data.id)}
    >
      <div className="project-card__wrapper">
        <span className="project-id"><span>0{data.id}</span></span>
        <h3>
            <span className="title">{data.title}</span>
            <div className="arrow-box">
              <TfiArrowRight className="arrow"/>
            </div>
        </h3>
      </div>
    </NavLink>
  )
}
