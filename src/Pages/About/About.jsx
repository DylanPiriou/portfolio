import React from 'react';
import "./About.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Stack from '../../Components/Stack/Stack';

export default function About() {
  return (
    <section className="about">
      <Navbar/>
      <div className="about-container">
        <h3>Hello</h3>
        <p className="intro">As a front-end web developer, I combine creativity and technical skill to design and develop visually stunning and highly functional web applications.</p>
        <br />
        <h3>Here are my tools</h3>
        <Stack/>
      </div>
    </section>
  )
}
