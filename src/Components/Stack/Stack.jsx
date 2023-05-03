import React from "react";
import "./Stack.scss";
import Data from "../../Data/stack.json";
import { RxPlus } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Cursor from "../../Components/Cursor/Cursor";

export default function Stack() {
  return (
    <div className="stack-container">
      <NavLink to="/projects" className="stack-flex">
        <div className="stack">
          <div className="technos-box">
            <div className="txt-box">
              <div className="txt-wrapper" tabIndex="0">
                {Data[0].stack1.map((item, index) => {
                  return <p key={`stack1-${index}`}>{item}</p>;
                })}
                {Data[0].stack1.map((item, index) => {
                  return <p key={`stack1b-${index}`}>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper" tabIndex="0">
                {Data[0].stack2.map((item, index) => {
                  return <p key={`stack2-${index}`}>{item}</p>;
                })}
                {Data[0].stack2.map((item, index) => {
                  return <p key={`stack2b-${index}`}>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper" tabIndex="0">
                {Data[0].stack3.map((item, index) => {
                  return <p key={`stack3-${index}`}>{item}</p>;
                })}
                {Data[0].stack3.map((item, index) => {
                  return <p key={`stack3b-${index}`}>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
        <div className="stack">
          <div className="technos-box">
          <div className="txt-box">
              <div className="txt-wrapper" tabIndex="0">
                {Data[0].stack4.map((item, index) => {
                  return <p key={`stack4-${index}`}>{item}</p>;
                })}
                {Data[0].stack4.map((item, index) => {
                  return <p key={`stack4b-${index}`}>{item}</p>;
                })}
              </div>
            </div>
          </div>
          <RxPlus />
        </div>
      </NavLink>
      <Cursor/>
    </div>
  );
}
