import React from 'react';
import "./Form.scss";
import MainButton from "../../Components/MainButton/MainButton";

export default function Form() {
    const dataBtn = {
        data: "SEND"
      }
  return (
    <form>
        <div className="input-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" />
        </div>
        <div className="input-form">
            <label htmlFor="mail">E-mail address</label>
            <input type="email" name="" id="mail" />
        </div>
        <div className="input-form">
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols="30" rows="5"></textarea>
        </div>
        <MainButton dataBtn={dataBtn}/>
    </form>
  )
}
