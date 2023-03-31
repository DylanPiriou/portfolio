import React from 'react';
import "./MainButton.scss";

export default function MainButton({ dataBtn }) {
  return (
    <button>
        <span data-btn={dataBtn.data}>{dataBtn.data}</span>
    </button>
  )
}
