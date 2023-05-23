import React, { useEffect, useRef } from "react";
import "./Header.scss";
import MainButton from "../MainButton/MainButton";
import { getCurrentYear } from "../../utils/getCurrentYear";
import Spinner from "../Spinner/Spinner";

export default function Header() {
  // Paramètres pour le bouton
  const dataBtn = {
    data: "DISCOVER MY WORK →",
    destination: "/projects",
  };

  // Séparation des lettres des trois textes
  const textes = ["let's", "build the web", "together"];
  const splitText = textes.map((txt) =>
    txt.split("").map((letter) => (letter === " " ? "\u00A0" : letter))
  );

  // Translate du titre en fonction de la position du curseur
  const header = useRef();
  const title = useRef();
  useEffect(() => {
    header.current.addEventListener("mousemove", (e) => {
      let rotateX = -(window.innerHeight / 2 - e.pageY) / 50;
      let rotateY = (window.innerWidth / 2 - e.pageX) / 50;
      title.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    header.current.addEventListener("mouseleave", () => {
      title.current.style.transform = "";
    });
  }, []);

  return (
    <header ref={header}>
      <div className="title-container">
        <Spinner/>
        <h2 tabIndex="0" ref={title}>
          <span className="text-wrapper">
            {splitText[0].map((letter, index) => {
              return <span className="letter" key={index}><span id="first"><span>{letter}</span></span></span>;
            })}
            <div className="subtitle">
              <p>
                As a front-end web developer, I combine creativity and technical
                skill to design and develop visually stunning and highly
                functional web applications.
              </p>
            </div>
          </span>
          <span className="text-wrapper">
            {splitText[1].map((letter, index) => {
              return <span className="letter" key={index}><span id="second"><span>{letter}</span></span></span>;
            })}
          </span>
          <span className="text-wrapper">
            <div className="subtitle">
              <p>Welcome to my {getCurrentYear()} portfolio</p>
            </div>
            {splitText[2].map((letter, index) => {
              return <span className="letter" key={index}><span id="third"><span>{letter}</span></span></span>
            })}
          </span>
        </h2>
        <MainButton dataBtn={dataBtn} />
      </div>
    </header>
  );
}
