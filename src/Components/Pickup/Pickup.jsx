import React from 'react';
import "./Pickup.scss";
import MainButton from '../MainButton/MainButton';

export default function Pickup() {
  const dataBtn = {
    data: "CONTACT ME"
  }
  return (
    <section className="pickup">
      <div className="banner">
        <h2>I turn <span className="crossed">coffee</span> into code, and code into <span className="serif-font">beautiful</span> & <span className="serif-font">powerful</span> websites.</h2>
        <MainButton dataBtn={dataBtn}/>
      </div>
    </section>
  )
}
