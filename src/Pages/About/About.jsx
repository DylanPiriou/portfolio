import React from "react";
import "./About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "../../Components/Stack/Stack";
import Networks from "../../Components/Networks/Networks";
import { getCurrentYear } from "../../utils/getCurrentYear.js";

export default function About() {
  return (
    <section className="about">
      <Navbar />
      <div className="about-container">
        <div className="top-container">
          <h2>Some infos about me</h2>
          <Networks />
        </div>
        <div className="text-wrapper">
          <h3>
            Hello i'm Dylan,
            <br />a {getCurrentYear() - 2000}yo Front-End web developer
            <br />
            based in Nantes, France
          </h3>
          <p className="text">
            <span>
              I'm a <span className="colored">self-taught</span> front-end web
              developer with <span className="colored">1 and a half years</span>{" "}
              of experience. I have a strong passion for the web and new
              technologies, and I'm always eager to learn new things. In
              addition to my self-study, I obtained a developer certification
              from OpenClassrooms, which is the equivalent of a{" "}
              <span className="colored">2-year degree</span> in web application
              development. My main specialization is in the{" "}
              <span className="colored">ReactJS</span> framework, and I have a
              good understanding of the{" "}
              <span className="colored">MERN stack</span> in general.
            </span>
            <span>
              Aside from web development, I'm passionate about{" "}
              <span className="colored">history</span>,{" "}
              <span className="colored">cinema</span>, and{" "}
              <span className="colored">travel</span>. I believe that learning
              about different cultures and experiences can help me become a
              better developer, as it allows me to see things from different
              perspectives. Overall, I'm a cool and enthusiastic person who's
              always{" "}
              <span className="colored">
                looking for new challenges and opportunities to grow
              </span>
              . If you're looking for a front-end web developer who's passionate
              about their work and loves to learn, look no further!
            </span>
          </p>
        </div>
        <Stack />
      </div>
    </section>
  );
}
