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

        <div className="top-container">
          <div className="title-wrapper">
            <h2>
              <span><span>I'm Dylan, a</span></span>
              <br />
              <span><span>web developer</span></span>
              <br />
              <span><span>based in France</span></span>
            </h2>
          </div>
        </div>

        <div className="text-wrapper">
            <Networks />
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
