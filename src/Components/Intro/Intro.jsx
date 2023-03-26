import React from 'react';
import "./Intro.scss";

export default function Intro() {
  return (
    <section className="intro-container">
        <div className="intro-flex">
            <div className="intro-content">
                <h2>
                    I am a french front-end
                    <br />
                    web developer 
                    <br />
                    specializing in React.js
                </h2>
            </div>
            <div className="intro-img">
                <img src="/main-hero.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}
