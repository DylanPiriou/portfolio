import React from 'react';
import Header from '../../Components/Header/Header';
import Intro from '../../Components/Intro/Intro';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Header/>
      <Intro/>
    </div>
  )
}
