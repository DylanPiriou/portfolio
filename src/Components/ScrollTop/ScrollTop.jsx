import React, { useEffect, useState } from "react";
import "./ScrollTop.scss";
import { TfiArrowUp } from "react-icons/tfi";

export default function ScrollTop() {
  // Gestion de l'event au clique
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  Gestion de l'apparation du bouton en fonction du scroll
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      scrollPos > 1000 ? setVisible(true) : setVisible(false);
    });
  }, []);

  return (
    <>
      {visible && (
        <button className="scrollTop" tabIndex="0" onClick={() => handleClick()}>
          <TfiArrowUp className="arrow" />
        </button>
      )}
    </>
  );
}
