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
            Lets
            <br />
            build the <span className="serif">web</span>
            <br />
            <span class="colored">together</span>
        </h1>
        <MainButton dataBtn={dataBtn}/>
        <div className="main-hero">
          <img src="/main-hero.jpg" alt="" />
        </div>
        <img className="dots" src="/Group2.svg" alt="" />
    </header>
  )
}
