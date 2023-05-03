import React, { useRef, useState } from "react";
import "./Form.scss";
import MainButton from "../../Components/MainButton/MainButton";
import emailjs from "@emailjs/browser";

export default function Form() {
  // const dataBtn = {
  //   data: "HERE WE GO !",
  // };

  //   Gestion de la logique d'affichage du formulaire
  const [inputValue, setInputValue] = useState("");
  const [txtAreaValue, setTxtAreaValue] = useState("");

  const form = useRef();
  const message = useRef();
  const handleEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(inputValue)) {
      message.current.textContent = "Please enter a valid email address.";
      message.current.style.color = "red";
      setTimeout(() => {
        message.current.textContent = "";
      }, 2000);
      return;
    }

    emailjs.sendForm("service_sr7v9re", "template_7j9d53n", form.current, "2YQteyuQrxdcU3Uz3")
      .then(() => {
          message.current.textContent = "Mail sent successfully !";
          message.current.style.color = "#ceff1d";
          setTimeout(() => {
            message.current.textContent = "";
          }, 2000);
          setInputValue("");
          setTxtAreaValue("");
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form ref={form} onSubmit={(e) => handleEmail(e)}>
        <div className="input-wrapper">
          <label htmlFor="email" className={inputValue ? "up" : "down"}>
            Your email address
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            value={inputValue}
            required
            autoComplete="off"
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="message" className={txtAreaValue ? "up" : "down"}>
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            rows="1"
            value={txtAreaValue}
            required
            onChange={e => setTxtAreaValue(e.target.value)}
          ></textarea>
        </div>
        <input type="submit"/>
        <span className="message" ref={message}></span>
    </form>
  );
}
