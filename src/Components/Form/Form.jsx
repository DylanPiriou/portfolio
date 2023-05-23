import React, { useRef, useState } from "react";
import "./Form.scss";
import emailjs from "@emailjs/browser";

export default function Form() {
  // Gestion de la logique d'affichage du formulaire
  const [inputValue, setInputValue] = useState("");
  const [txtAreaValue, setTxtAreaValue] = useState("");

  const form = useRef();
  const message = useRef();
  
  // Gestion du message envoyé
  const handleMessage = (txt, color) => {
    message.current.textContent = txt;
    message.current.style.color = color;
    setTimeout(() => {
      message.current.textContent = "";
    }, 2000);
  };

  // Fonction qui g-=ère l'envoie de l'email
  const handleEmail = (e) => {
    e.preventDefault();

    // Test le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
      handleMessage("Please enter a valid email address.", "red");
      return;
    }

    // Envoie de l'email
    emailjs
      .sendForm(
        "service_sr7v9re",
        "template_7j9d53n",
        form.current,
        "2YQteyuQrxdcU3Uz3"
      )
      .then(
        () => {
          handleMessage("Mail sent successfully !", "#ceff1d");
          setInputValue("");
          setTxtAreaValue("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          onChange={(e) => setInputValue(e.target.value)}
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
          onChange={(e) => setTxtAreaValue(e.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="HERE WE GO !" class="submit-btn" />
      <span className="message" ref={message}></span>
    </form>
  );
}
