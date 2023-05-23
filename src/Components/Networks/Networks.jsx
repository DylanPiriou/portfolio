import React from 'react';
import "./Networks.scss";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Networks() {
    return (
        <div className="networks">
            <a href="mailto:dylan.piriou@hotmail.com">
                <TfiArrowTopRight className="arrow" />
                <span>MAIL</span>
            </a>
            <a href="https://github.com/DylanPiriou" target="_blank">
                <TfiArrowTopRight className="arrow" />
                <span>GITHUB</span>
            </a>
            <a href="https://www.linkedin.com/in/dylan-piriou-711929265/" target="_blank">
                <TfiArrowTopRight className="arrow" />
                <span>LINKEDIN</span>
            </a>
            <a href="/assets/resume.pdf" download>
                <TfiArrowTopRight className="arrow" />
                <span>RESUME</span>
            </a>
        </div>
    )
}
