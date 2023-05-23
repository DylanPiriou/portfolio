import React, { useEffect, useState } from 'react';
import "./Home.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Img from "/assets/dylanpro.svg";
import Loader from '../../Components/Loader/Loader';

export default function Home() {
  // Animation à l'apparition de la page
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, [loaded])

  return (
    <>
      {loaded ? (
        <div className="home">
        <Navbar/>
        <Header/>
        <Footer/>
        <img className="hero-illustration" src={Img} alt="dylan piriou" />
        </div>
      ) : (
        <div className="home">
          <Loader/>
        </div>
      )}
    </>
  )
}
