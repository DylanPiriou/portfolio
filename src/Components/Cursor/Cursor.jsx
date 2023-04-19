import React, { useState, useEffect } from "react";
import "./Cursor.scss";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Cursor() {
  // Gestion des coordonnées du pointer personnalisé
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({
        x: e.clientX - 50,
        y: e.clientY - 50,
      });
    });
  }, []);
  
  return (
    <button className="cursor" style={{ left: pos.x, top: pos.y }}>
      <TfiArrowTopRight className="arrow" />
    </button>
  );
}
