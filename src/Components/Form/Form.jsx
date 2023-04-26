import React, { useEffect, useRef, useState } from "react";
import "./Form.scss";
import MainButton from "../../Components/MainButton/MainButton";

export default function Form() {
  const dataBtn = {
    data: "HERE WE GO !",
  };

  //   Gestion de la logique d'affichage du formulaire
  const [inputValue, setInputValue] = useState("");
  const [txtAreaValue, setTxtAreaValue] = useState("");
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleChangeTxtArea = (e) => {
    setTxtAreaValue(e.target.value);
  };

  return (
    <form>
      <div className="input-form">
        <div className="input-wrapper">
          <label htmlFor="email" className={inputValue ? "up" : "down"}>
            Your email address
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
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
            required
            onChange={(e) => handleChangeTxtArea(e)}
          ></textarea>
        </div>
      </div>
      <MainButton dataBtn={dataBtn} />
    </form>
  );
}
