import React from "react";
import "./Stack.scss";
import Data from "../../Data/stack.json";
import { RxPlus } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function Stack() {
  return (
    <div className="stack-container">
      <NavLink to="/projects" className="stack-flex">
        <div className="stack">
          <div className="technos-box">
            <div className="txt-box">
              <div className="txt-wrapper">
                {Data[0].stack1.map((item) => {
                  return <p>{item}</p>;
                })}
                {Data[0].stack1.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper">
                {Data[0].stack2.map((item) => {
                  return <p>{item}</p>;
                })}
                {Data[0].stack2.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper">
                {Data[0].stack3.map((item) => {
                  return <p>{item}</p>;
                })}
                {Data[0].stack3.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper">
                {Data[0].stack4.map((item) => {
                  return <p>{item}</p>;
                })}
                {Data[0].stack4.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
      </NavLink>
      <h3>STACK</h3>
    </div>
  );
}