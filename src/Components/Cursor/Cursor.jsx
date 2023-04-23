import React, { useState, useEffect } from "react";
import "./Cursor.scss";
import { TfiArrowLeft } from "react-icons/tfi";
import { TfiArrowTopRight } from "react-icons/tfi";
import { TfiArrowRight } from "react-icons/tfi";
import { GiBread } from "react-icons/gi"

export default function Cursor({ left, right, text }) {
  // Gestion des coordonnées du pointer personnalisé
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({
        x: e.pageX - 50,
        y: e.pageY - 50,
      });
    });
  }, []);

  return (
    <button className="cursor" style={{ left: pos.x, top: pos.y }}>
      {left ? <TfiArrowLeft className="icon" /> : 
      right ? <TfiArrowRight className="icon" /> : 
      text ? <GiBread className="icon"/> :
      <TfiArrowTopRight className="icon" />}
    </button>
  );
}
