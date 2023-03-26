import React from 'react';
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Intro from '../../Components/Intro/Intro';
import Navbar from '../../Components/Navbar/Navbar';
import Pickup from '../../Components/Pickup/Pickup';
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Header/>
      <Intro/>
      <Pickup/>
      <About/>
    </div>
  )
}
