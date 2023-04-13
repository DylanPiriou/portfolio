import React, { useState } from 'react';
import "./Form.scss";
import MainButton from "../../Components/MainButton/MainButton";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

export default function Form() {
    const dataBtn = {
        data: "HERE WE GO !"
      }

    const [mail, setMail ] = useState("");
    const [message, setMessage] = useState("");

    const handleMail = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setMail(e.target.value)
    }
    const handleMessage = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setMessage(e.target.value);  
    }

  return (
    <form>
        <h3>Drop me a line</h3>
        <div className="input-form">
            <label htmlFor="email">Your email</label>
            <div className="input-wrapper">
                <div className="icon">
                    <AiOutlineUser/>
                </div>
                <input
                type="email"
                name="email"
                id="mail"
                placeholder="johndoe@gmail.com"
                value={mail}
                onChange={(e) => handleMail(e)}
                />
            </div>
        </div>
        <div className="input-form">
            <label htmlFor="message">Your message</label>
            <div className="input-wrapper">
                <div className="icon">
                    <AiOutlineComment/>
                </div>
                <textarea name="message"
                id="message"
                cols="30"
                rows="1"
                placeholder="Hello ! Would you join my team ? :)"
                value={message}
                onChange={(e) => handleMessage(e)}
                >
                </textarea>
            </div>
        </div>
        <MainButton dataBtn={dataBtn}/>
    </form>
  )
}
