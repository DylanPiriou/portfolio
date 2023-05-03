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
      <div className="content-container">
          <div className="top-wrapper">
            <h2 tabIndex="0">
              <span><span>Wanna</span></span>
              <br />
              <span><span>— start</span></span>
              <br />
              <span><span>something ?</span></span>
            </h2>
            <Form/>
          </div>
          <div className="bottom-wrapper">
            <Networks/>
              <div className="text-wrapper">
                <p tabIndex="0">Feel free to contact me to discuss your next project, or simply have a chat. Let's work together to create something amazing!</p>
              </div>

          </div>

      </div>
    </section>
  )
}
