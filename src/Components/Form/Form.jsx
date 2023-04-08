import React from 'react';
import "./Form.scss";
import MainButton from "../../Components/MainButton/MainButton";

export default function Form() {
    const dataBtn = {
        data: "SEND"
      }
  return (
    <form>
        <h3>Drop me a line</h3>
        <div className="input-form">
            <label htmlFor="email">Your email</label>
            <input type="email" name="email" id="mail" />
        </div>
        <div className="input-form">
            <label htmlFor="message">Your message</label>
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
        </div>
        <MainButton dataBtn={dataBtn}/>
    </form>
  )
}
