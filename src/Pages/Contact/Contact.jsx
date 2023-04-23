import React from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Networks from '../../Components/Networks/Networks';

export default function Contact() {
  const dataBtn = {
    data: "pirioudylan@gmail.com"
  }
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
          <div className="top-wrapper">
            <h1>
              <span><span>Wanna</span></span>
              <br />
              <span><span>be starting</span></span>
              <br />
              <span><span>something ?</span></span>
            </h1>
            <Form/>
          </div>
          <div className="bottom-wrapper">
            <Networks/>
              <div className="text-wrapper">
                <p>Feel free to contact me to discuss your next project, or simply have a chat. Let's work together to create something amazing!</p>
              </div>

          </div>
        </div>

      </div>
    </section>
  )
}
