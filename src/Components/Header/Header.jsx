import React from 'react';
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
        <img src="/public/main-hero.jpg" alt="" />
    </header>
  )
}
