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
            <span>@dylanpiriou/</span>
            <nav ref={nav}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/projects">PROJECTS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </nav>
            <div className="burger-menu" ref={burger} onClick={() => handleBurger()}>
              <img className="burger-icon" src="/public/burgermenu.svg" alt="" ref={burgerIcon} />
              <img className="close-icon" src="/public/cross.svg" alt="" ref={closeIcon} />
            </div>
        </div>
    </div>
  )
}
