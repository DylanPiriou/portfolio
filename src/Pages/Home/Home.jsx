import React, { useEffect, useRef } from 'react';
import "./Home.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Img from "/dylanpro.svg";
import gsap from "gsap";

export default function Home() {
  // Animation à l'apparition de la page
  const home = useRef();
  useEffect(() => {
    gsap.fromTo(home.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    })
  }, [])
  return (
    <div className="home" ref={home}>
      <Navbar/>
      <Header/>
      <Footer/>
      <img className="hero-illustration" src={Img} alt="dylan piriou" />
    </div>
  )
}
