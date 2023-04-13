import React from 'react';
import "./Networks.scss";
import { AiFillPhone } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

export default function Networks() {
  return (
    <div className="networks">
        <a href="#">
            <AiFillPhone/>
        </a>
        <a href="#">
            <AiFillMail/>
        </a>
        <a href="#">
            <AiFillLinkedin/>
        </a>
        <a href="#">
            <AiFillGithub/>
        </a>
    </div>
  )
}
