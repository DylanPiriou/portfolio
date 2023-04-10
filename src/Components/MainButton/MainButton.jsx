import React from 'react';
import "./MainButton.scss";
import { NavLink } from 'react-router-dom';

export default function MainButton({ dataBtn }) {
  return (
    <NavLink to="/projects">
      <button className="main-btn">
        <span data-btn={dataBtn.data}>{dataBtn.data}</span>
      </button>
    </NavLink>
  )
}
