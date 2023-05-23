import React from 'react';
import "./NotFound.scss";
import Navbar from '../../Components/Navbar/Navbar';
import MainButton from '../../Components/MainButton/MainButton';

export default function NotFound() {
  const dataBtn = {
    data: "GO HOME →",
    destination: "/"
  }
  return (
    <div className="notfound">
      <Navbar/>
      <div className="content-container">
        <h2 tabIndex="0">404</h2>
        <p tabIndex="0">Oops... Something went wrong</p>
        <MainButton dataBtn={dataBtn} />
      </div>
    </div>
  )
}
