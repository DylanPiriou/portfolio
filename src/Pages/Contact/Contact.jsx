import React from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Networks from '../../Components/Networks/Networks';

export default function Contact() {
  return (
    <section className="contact">
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
