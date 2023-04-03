import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

export default function Navbar() {
  const burger = useRef();
  const burgerIcon = useRef();
  const closeIcon = useRef();
  const nav = useRef();

  const handleBurger = () => {
    burger.current.classList.toggle("active");
    burgerIcon.current.classList.toggle("active")
    closeIcon.current.classList.toggle("active");
    nav.current.classList.toggle("active");
  }
  return (
    <div className="navbar">
        <div className="navbar-flex">
            <NavLink className="name" to="/">@dylanpiriou/</NavLink>
            <nav ref={nav}>
                <a href="#about">
                  <span data-link="ABOUT">ABOUT</span>
                </a>
                <NavLink to="/projects">
                  <span data-link="PROJECTS">PROJECTS</span>
                </NavLink>
                <NavLink to="/contact">
                  <span data-link="CONTACT">CONTACT</span>
                </NavLink>
            </nav>
            <div className="burger-menu" ref={burger} onClick={() => handleBurger()}>
              <img className="burger-icon" src="/burgermenu.svg" alt="" ref={burgerIcon} />
              <img className="close-icon" src="/cross.svg" alt="" ref={closeIcon} />
            </div>
        </div>
    </div>
  )
}
