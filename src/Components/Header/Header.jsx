import React, { useRef } from 'react';
import "./Header.scss";
import MainButton from '../MainButton/MainButton';

export default function Header() {
  const dataBtn = {
    data: "DISCOVER MY WORK →"
  }
  return (
    <header>
      <div className="title-container">
        <h1>
            <span>Lets <span className="serif-font">build</span> the</span>
            <br />
            <span><span className="serif-font">web</span> together</span>
        </h1>
        <p className="subtitle"><strong>Dylan Piriou</strong> - French web front-end developer</p>
        <div className="btn-box">
          <MainButton dataBtn={dataBtn}/>
        </div>
      </div>
        <p className="intro">As a front-end web developer, I combine creativity and technical skill to design and develop visually stunning and highly functional web applications.</p>
    </header>
  )
}
