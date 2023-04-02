import React from 'react';
import "./Contact.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Form from '../../Components/Form/Form';
import Footer from "../../Components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar/>
      <div className="contact">
        <div className="contact-flex">
          <div className="img-box"></div>
          <div className="form-box">
            <Form/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
