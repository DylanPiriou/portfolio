import React, { useRef } from 'react';
import "./Header.scss";
import MainButton from '../MainButton/MainButton';

export default function Header() {
  const dataBtn = {
    data: "DISCOVER MY WORK →"
  }
  return (
    <header>
        <h1>
            <span>Lets build the</span>
            <br />
            <span>web together</span>
        </h1>
        <p><strong>Dylan Piriou</strong> - French web front-end developer</p>
        <MainButton dataBtn={dataBtn}/>
    </header>
  )
}
