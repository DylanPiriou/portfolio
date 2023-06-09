import React from 'react';
import "./Footer.scss";
import { getCurrentYear } from '../../utils/getCurrentYear';

export default function Footer() {
  return (
    <footer>
        <div className="footer-wrapper" tabIndex="0">
          <span>{getCurrentYear()}/</span>
          <div className="footer-flex">
            <small>&nbsp;dylan piriou</small>
            <small>all rights reserved.</small>
          </div>
        </div>
    </footer>
  )
}
