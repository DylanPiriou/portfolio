import React from 'react';
import "./Home.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Header/>
      <Footer/>
      <img className="hero-illustration" src="/dylanpro.svg" alt="dylan piriou" />
    </div>
  )
}
