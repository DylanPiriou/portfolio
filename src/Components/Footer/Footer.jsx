import React from 'react';
import "./Footer.scss";
import { getCurrentYear } from '../../utils/getCurrentYear';

export default function Footer() {
  return (
    <footer>
        <div className="footer-wrapper">
          <span>{getCurrentYear()}/</span>
          <div className="footer-flex">
            <p>portfolio.</p>
            <small>all rights reserved.</small>
          </div>
        </div>
    </footer>
  )
}