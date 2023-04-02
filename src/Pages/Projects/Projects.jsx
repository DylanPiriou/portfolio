import React from 'react';
import "./Projects.scss";
import Navbar from '../../Components/Navbar/Navbar';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Components/Footer/Footer';

export default function Projects() {
  const dataTitle = {
    word1: "Selected",
    word2: "works"
  }
  return (
    <>
      <Navbar/>
      <section className="projects">
        <PageTitle dataTitle={dataTitle}/>
        <div className="flex-cards">
          <div className="card">llllllll</div>
          <div className="card">kkkkkkkkk</div>
          <div className="card">jjjjjjjjj</div>
          <div className="card">hhhhhhhhhh</div>
          <div className="card">gggggggggg</div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
