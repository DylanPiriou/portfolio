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
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleChangeTxtArea = (e) => {
    setTxtAreaValue(e.target.value);
  };

  const form = useRef();
  const message = useRef();
  const handleEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sr7v9re", "template_7j9d53n", form.current, "2YQteyuQrxdcU3Uz3")
      .then((result) => {
        console.log(result)
          message.current.textContent = "Mail sent successfully !";
          setTimeout(() => {
            message.current.textContent = "";
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form ref={form} onSubmit={(e) => handleEmail(e)}>
      <div className="input-form">
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
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      </div>
      <div className="input-form">
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
            onChange={(e) => handleChangeTxtArea(e)}
          ></textarea>
        </div>
        <span className="message" ref={message}></span>
      </div>
      <input type="submit"/>
      {/* <MainButton dataBtn={dataBtn} /> */}
    </form>
  );
}
