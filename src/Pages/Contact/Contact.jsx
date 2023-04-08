import React from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Footer from "../../Components/Footer/Footer";

export default function Contact() {
  return (
    <section className="contact">
      <Navbar/>
      <div className="top-container">
        <h2>Keep in touch</h2>
        <div className="networks-container">
          <a href="">MAIL</a>
          <a href="">MOBILE</a>
          <a href="">LINKEDIN</a>
          <a href="">GITHUB</a>
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
