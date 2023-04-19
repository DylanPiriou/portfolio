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
          <h2>Some infos about me</h2>
          <Networks />
        </div>
        <div className="text-wrapper">
          {Data.map((data) => {
            return (
              <h3>
                <span>{data.titlePart1}</span>
                <br />
                <span>{data.titlePart2}</span>
                <br />
                <span>{data.titlePart3}</span>
              </h3>
            );
          })}
          {Data.map((data) => {
            return (
              <p className="text">
                <span>{data.text1}</span>
                <span>{data.text2}</span>
              </p>
            );
          })}
        </div>
        <Stack />
      </div>
    </section>
  );
}
