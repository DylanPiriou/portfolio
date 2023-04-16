import React from "react";
import "./About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "../../Components/Stack/Stack";
import Networks from "../../Components/Networks/Networks";

export default function About() {
  return (
    <section className="about">
      <Navbar />
      <div className="about-container">

        <div className="top-container">
          <h2>Some infos about me</h2>
          <Networks/>
        </div>
          <div className="text-wrapper">
            <p className="text">
              I'm a self-taught front-end web developer with 1 and a half years of
              experience. I have a strong passion for the web and new
              technologies, and I'm always eager to learn new things. In addition
              to my self-study, I obtained a developer certification from
              OpenClassrooms, which is the equivalent of a 2-year degree in web
              application development. My main specialization is in the ReactJS
              framework, and I have a good understanding of the MERN stack in
              general.
            </p>
            <br />
            <p className="text">
              Aside from web development, I'm passionate about history, cinema,
              and travel. I believe that learning about different cultures and
              experiences can help me become a better developer, as it allows me
              to see things from different perspectives. Overall, I'm a cool and
              enthusiastic person who's always looking for new challenges and
              opportunities to grow. If you're looking for a front-end web
              developer who's passionate about their work and loves to learn, look
              no further!
            </p>
          </div>
          <Stack />
      </div>
    </section>
  );
}
