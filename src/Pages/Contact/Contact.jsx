import React from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Networks from '../../Components/Networks/Networks';

export default function Contact() {
  return (
    <section className="contact">
      <div className="overlay-transition-1"></div>
      <div className="overlay-transition-2"></div>
      <Navbar/>
      {/* <div className="top-container">
        <h2>Keep in touch</h2>
        <div className="networks-container">
          <Networks/>
        </div>
      </div> */}
      <div className="content-container">
        <div className="content-wrapper">
          <h2>
            <span><span>Wanna</span></span>
            <br />
            <span><span>be starting</span></span>
            <br />
            <span><span>something ?</span></span>
          </h2>
          <a href="#">pirioudylan@gmail.com</a>
          <p>Feel free to contact me to discuss your next project, or simply have a chat. Let's work together to create something amazing!</p>
        </div>
        <div className="form-wrapper">
          {/* <div className="img-box">
            <img src="/phone.jpg" alt="" />
          </div> */}
          <Form/>
        </div>
      </div>
    </section>
  )
}
