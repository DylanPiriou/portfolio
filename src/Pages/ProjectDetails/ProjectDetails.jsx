import React, { useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.scss";
import Data from "../../Data/projects.json";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar/Navbar";
import MainButton from "../../Components/MainButton/MainButton";
import { TfiArrowTopRight } from "react-icons/tfi";
import Cursor from "../../Components/Cursor/Cursor";



export default function ProjectDetails() {
  // Récupère l'id du projet dans l'URL et vérifie qu'il existe dans le JSON
  const { id } = useParams();
  const project = Data.find((project) => project.id === +id);

  // Navigation entre les projets
  const navigate = useNavigate();
  const prevId = parseInt(id, 10) - 1;
  const nextId = parseInt(id, 10) + 1;

  // Gestion des projets suivants et précédents
  const prevProject =
    prevId === 0
      ? Data[Data.length - 1]
      : Data.find((project) => project.id === prevId);

  const nextProject =
    nextId > Data.length
      ? Data[0]
      : Data.find((project) => project.id === nextId);

  // Gestion des évènements pour rediriger vers les projets suviants ou précédents
  const handlePrev = () => {
    if (prevId === 0) {
      navigate(`/project/${Data.length}`);
      window.scrollTo(0, 0);
    } else {
      navigate(`/project/${prevId}`);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (nextId > Data.length) {
      navigate("/project/1");
      window.scrollTo(0, 0);
    } else {
      navigate(`/project/${nextId}`);
      window.scrollTo(0, 0);
    }
  };

  const dataBtn = {
    data: "LET'S TALK",
    destination: "/contact"
  }

  // const [modal, setModal] = useState(false);
  // const [imgUrl, setImgUrl] = useState();

  // const handleClick = img => {
  //   setImgUrl(img);
  //   setModal(!modal);
  // }

  const img = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollAmount = window.scrollY;
      const newPosition = scrollAmount * .5;
      if(img.current){
        img.current.style.transform = `translateY(${newPosition}px)`;
      }
    })
  }, [img])

  return (
    <>
      {project ? (
        <section className="projectDetails">
          <div key={`a-${id}`} className="overlay-transition-1"></div>
          <div key={`b-${id}`} className="overlay-transition-2"></div>
          <Navbar />
          <div className="project-container">
            <img src={project.cover} alt="" ref={img} />
            <div className="title-wrapper">
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
              <span>— {project.date}</span>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <p>{project.description}</p>
                <div className="stack-wrapper">
                  {project.tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>
                  })}
                </div>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={project.cover} alt="" />
            </div>
            <div className="img-wrapper">
              <img src={project.cover} alt="" />
            </div>
            <div className="links-wrapper">
              <h2>Want more juicy details on this project?</h2>
              <div className="links">
                <MainButton dataBtn={dataBtn}/>
                <a href="#" className="github">Look on GitHub<TfiArrowTopRight/></a>
              </div>
            </div>
            <div className="prevnext-wrapper">
              <div className="btn" data-img={prevProject.cover} onClick={() => handlePrev()}>
                <span>Previous project</span>
                {prevProject.title}
                <Cursor left="left" />
              </div>
              <div className="line"></div>
              <div className="btn" data-img={nextProject.cover} onClick={() => handleNext()}>
                <span>Next project</span>
                {nextProject.title}
                <Cursor right="right" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NotFound/>
      )}
    </>
  );
}
