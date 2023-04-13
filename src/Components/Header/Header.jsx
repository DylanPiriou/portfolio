import React, { useEffect, useRef, useState } from 'react';
import "./Header.scss";
import MainButton from '../MainButton/MainButton';
import { NavLink } from 'react-router-dom';

export default function Header() {
  // Paramètres pour le bouton
  const dataBtn = {
    data: "DISCOVER MY WORK →",
    destination: "/projects"
  }

  // Séparation des lettres des trois textes
  const textes = ["Let's", "build the web", "together"];
  const splitText = textes.map(txt => txt.split("").map(letter => letter === " " ? "\u00A0" : letter));

  // Translate du titre en fonction de la position du curseur
  const header = useRef();
  const title = useRef();
  useEffect(() => {
    header.current.addEventListener("mousemove", e => {
      let rotateX = -(window.innerHeight/2 - e.pageY)/50;
      let rotateY = (window.innerWidth/2 - e.pageX)/50;
      title.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
    });
    header.current.addEventListener("mouseleave", () => {
      title.current.style.transform = "";
    });
  }, [])

  return (
    <header ref={header}>
      <div className="title-container">
        <NavLink to="/contact">
          <h2 ref={title}>
            <span className="text-wrapper">
              {splitText[0].map(letter => {
                return <span className="letter">{letter}</span>
              })}
            </span>
            <span className="text-wrapper">
              {splitText[1].map(letter => {
                return <span className="letter">{letter}</span>
              })}</span>
            <span className="text-wrapper">
              {splitText[2].map(letter => {
                return <span className="letter">{letter}</span>
              })}
            </span>
          </h2>
        </NavLink>
        <MainButton dataBtn={dataBtn}/>
      </div>
    </header>
  )
}
