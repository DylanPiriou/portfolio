import React from "react";
import "./PrevNext.scss";
import Cursor from "../../Components/Cursor/Cursor";

export default function PrevNext({ prevProject, nextProject, handlePrev, handleNext }) {
    return (
        <div className="prevnext">
            <div
                className="btn"
                data-img={prevProject.cover}
                onClick={handlePrev}
            >
                <span>Previous project</span>
                {prevProject.title}
                <Cursor left="left" />
            </div>
            <div className="line"></div>
            <div
                className="btn"
                data-img={nextProject.cover}
                onClick={handleNext}
            >
                <span>Next project</span>
                {nextProject.title}
                <Cursor right="right" />
            </div>
        </div>
    );
}
