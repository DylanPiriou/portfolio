import React from 'react';
import "./Filters.scss";

export default function Filters({ filter, setFilter }) {
  return (
    <ul className="filter-btns__wrapper">
        <div className="filter-btn" onClick={() => setFilter("All")}>
            <label htmlFor="All">All</label>
            <input
            type="radio"
            name="All"
            value="All"
            checked={filter === "All"}
            onChange={() => setFilter("All")}
            />
        </div>
        <div className="filter-btn" onClick={() => setFilter("Frontend")}>
            <label htmlFor="Frontend">Frontend</label>
            <input
            type="radio"
            name="Frontend"
            value="Frontend"
            checked={filter === "Frontend"}
            onChange={() => setFilter("Frontend")}
            />
        </div>
        <div className="filter-btn" onClick={() => setFilter("Backend")}>
            <label htmlFor="Backend">Backend</label>
            <input
            type="radio"
            name="Backend"
            value="Backend"
            checked={filter === "Backend"}
            onChange={() => setFilter("Backend")}
            />
        </div>
    </ul>
  )
}
