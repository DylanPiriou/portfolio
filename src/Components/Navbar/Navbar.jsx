import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-flex">
            <span>@dylanpiriou/</span>
            <nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/projects">PROJECTS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </nav>
        </div>
    </div>
  )
}
