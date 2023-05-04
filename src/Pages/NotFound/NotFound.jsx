import React from 'react';
import "./NotFound.scss";
import { NavLink } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';

export default function NotFound() {
  return (
    <div className="notfound">
      <Navbar/>
      <div className="content-container">
        <h2 tabIndex="0">404</h2>
        <p tabIndex="0">Oops... Something went wrong 😅</p>
        <NavLink to="/">Go back home</NavLink>
      </div>
    </div>
  )
}
