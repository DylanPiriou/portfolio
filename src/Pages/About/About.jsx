import React, { useRef, useEffect } from "react";
import "./About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "../../Components/Stack/Stack";
import Networks from "../../Components/Networks/Networks";
import Data from "../../Data/about.json";
import Cursor from "../../Components/Cursor/Cursor";

export default function About() {
  const title = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollAmount = window.scrollY;
      const newPosition = scrollAmount * .2;
      if(title.current){
        title.current.style.transform = `translateY(${newPosition}px)`;
      }
    })
  }, [title])

  return (
    <section className="about">
      <div className="overlay-transition-1"></div>
      <div className="overlay-transition-2"></div>
      <Cursor />
      <Navbar />
      <div className="about-container">

        <div className="top-container">
          <div className="title-wrapper" ref={title}>
            <h2 tabIndex="0">
              <span><span>I'm Dylan,</span></span>
              <br />
              <span><span>— web developer</span></span>
              <br />
              <span><span>based in France</span></span>
            </h2>
            <span className="subtitle" tabIndex="0">/w 1+ year of experience</span>
          </div>
        </div>

        <div className="text-wrapper">
            <Networks />
          {Data.map((data, index) => {
            return (
              <p className="text" key={`text-${index}`}>
              <span tabIndex="0">{data.text1}</span>
              <br />
              <span tabIndex="0">{data.text2}</span>
              </p>
            );
          })}
        </div>
      </div>
      <Stack/>
    </section>
  );
}
