import React from 'react';
import "./Technos.scss";

export default function Technos({ tag }) {
  return (
    <span className="techno-btn" tabIndex="0">{tag}</span>
  )
}
