import React from 'react';
import "./MainButton.scss";

export default function MainButton({ dataBtn }) {
  return (
    <button className="main-btn">
        <span data-btn={dataBtn.data}>{dataBtn.data}</span>
    </button>
  )
}
