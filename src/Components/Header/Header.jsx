import React, { useEffect, useRef, useState } from 'react';
import "./Header.scss";
import MainButton from '../MainButton/MainButton';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const dataBtn = {
    data: "DISCOVER MY WORK →"
  }

  // Séparation des lettres des trois textes
  const textes = ["Lets", "build the web", "together"];
  const splitText = textes.map(txt => txt.split("").map(letter => letter === " " ? "\u00A0" : letter));

  


  return (
    <header>
      <div className="title-container">
        <NavLink to="/contact">
        <h1>
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
        </h1>
        </NavLink>
        {/* <p className="subtitle"><strong>Dylan Piriou</strong> - French web front-end developer</p> */}
        <MainButton dataBtn={dataBtn}/>
      </div>
        {/* <p className="intro">As a front-end web developer, I combine creativity and technical skill to design and develop visually stunning and highly functional web applications.</p> */}
    </header>
  )
}
