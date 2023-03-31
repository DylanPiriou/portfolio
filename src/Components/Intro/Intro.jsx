import React from 'react';
import "./Intro.scss";

export default function Intro() {
  return (
    <section className="intro-container">
        <div className="intro-flex">
            <div className="intro-content">
                <h2>
                    I am a <span className="serif-font">french</span> front-end
                    <br />
                    <span className="serif-font">web</span> developer 
                    <br />
                    specializing in <span className="colored-font">React.js</span>
                </h2>
            </div>
            <div className="intro-img">
                <img src="/main-hero.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}
