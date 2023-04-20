import React, { useEffect, useRef, useState } from 'react';
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
    const [valid, setValid] = useState(false);

    // Gestion du format de l'email à l'aide d'un regex
    useEffect(() => {
        const mailRegex = /^\S+@\S+\.\S+$/;
        mailRegex.test(mail) ? console.log("ok") : console.log("no");
    }, [mail])

  return (
    <form>
        <h3>or... Drop me a line</h3>
        <div className="input-form">
            <label htmlFor="@">Your email</label>
            <div className="input-wrapper">
                <div className="icon">
                    <AiOutlineUser/>
                </div>
                <input
                type="@"
                name="@"
                id="@"
                placeholder="johndoe@gmail.com"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
            </div>
        </div>
        <MainButton dataBtn={dataBtn}/>
    </form>
  )
}
