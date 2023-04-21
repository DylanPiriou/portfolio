import React from "react";
import "./About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "../../Components/Stack/Stack";
import Networks from "../../Components/Networks/Networks";
import Data from "../../Data/about.json";

export default function About() {
  return (
    <section className="about">
      <div className="overlay-transition-1"></div>
      <div className="overlay-transition-2"></div>
      <Navbar />
      <div className="about-container">

        <header className="top-container">
          <div className="title-wrapper">
            <h2>
              <span>I'm Dylan, a</span>
              <br />
              <span>web developer</span>
              <br />
              <span>based in France</span>
            </h2>
            <Networks />
          </div>
        </header>

        <div className="text-wrapper">
          {Data.map((data, index) => {
            return (
              <p className="text" key={`text-${index}`}>
              <span>{data.text1}</span>
              <br />
              <span>{data.text2}</span>
              </p>
            );
          })}
        </div>
        <Stack/>
      </div>
    </section>
  );
}
