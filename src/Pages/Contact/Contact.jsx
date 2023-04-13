import React, { useEffect, useRef } from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Footer from "../../Components/Footer/Footer";
import Networks from '../../Components/Networks/Networks';
import { gsap } from "gsap";

export default function Contact() {
  // Animation à l'apparition de la page
  const contact = useRef();
  useEffect(() => {
    gsap.fromTo(contact.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    })
  }, [])
  return (
    <section className="contact" ref={contact}>
      <Navbar/>
      <div className="top-container">
        <h2>Keep in touch</h2>
        <div className="networks-container">
          <Networks/>
        </div>
      </div>
      <div className="form-container">
        <div className="img-box">
          <img src="/phone.jpg" alt="" />
        </div>
        <Form/>
      </div>
    </section>
  )
}
