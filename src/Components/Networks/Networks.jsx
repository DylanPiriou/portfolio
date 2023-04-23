import React from 'react';
import "./Networks.scss";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Networks() {
    return (
        <div className="networks">
            <a href="">
                <TfiArrowTopRight className="arrow" />
                <span>MAIL</span>
            </a>
            <a href="">
                <TfiArrowTopRight className="arrow" />
                <span>GITHUB</span>
            </a>
            <a href="">
                <TfiArrowTopRight className="arrow" />
                <span>LINKEDIN</span>
            </a>
        </div>
    )
}
