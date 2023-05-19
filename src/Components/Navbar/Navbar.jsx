import React, { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  // Logique pour récupérer le paramètre dans l'URL
  const location = useLocation();
  const param = location.pathname.split("/").pop();
  const title = !param ? "hello" : param;

  // Logique du burger menu
  const [close, setClose] = useState(true);
  const nav = useRef();

  const handleBurger = () => {
    setClose(!close);
    nav.current.classList.toggle("active");
  };

  return (
    <div className="navbar">
      <div className="navbar-flex">
        <NavLink className="name" to="/">
          <h1>dylanpiriou</h1>/<span className="param">{title}</span>
        </NavLink>
        <nav ref={nav}>
          <NavLink to="/about" activeclassname="active">
            <span data-link="ABOUT">ABOUT</span>
          </NavLink>
          <NavLink to="/projects" activeclassname="active">
            <span data-link="WORK">WORK</span>
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            <span data-link="CONTACT">CONTACT</span>
          </NavLink>
        </nav>
          <div className="burger-menu" onClick={() => handleBurger()}>
            {close ? (
              <div className="open-icon">
                <div className="line" id="line1"></div>
                <div className="line" id="line2"></div>
              </div>
            ) : (
              <div className="close-icon">
                <div className="line" id="line1"></div>
                <div className="line" id="line2"></div>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}
