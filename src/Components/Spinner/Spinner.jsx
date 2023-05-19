import React from 'react';
import "./Spinner.scss";
import { Link } from 'react-router-dom';

export default function Spinner() {

    const generateCircleText = () => {
        const text = "open to work • open to work • ";
        return text.split("").map((char, i) => {
          const isDot = (i === 13 || i === 28) ? "active" : "";
          const style = {
            transform: `rotate(${(i + 1) * (360 / text.length)}deg)`
          };
          return (
            <span key={i} className={isDot} style={style} data={i}>{char}</span>
          );
        });
      };
    
      return (
        <Link to="/contact">
          <div className="spinner">
              {generateCircleText()}
          </div>
        </Link>
      );
};
