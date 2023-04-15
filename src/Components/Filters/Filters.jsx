import React, { useEffect, useRef, useState } from "react";
import "./Filters.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Filters({ filter, setFilter, search, handleSearch }) {
  const [clicked, setClicked] = useState(false);

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
      <div className="search-box" onClick={() => setClicked(true)}>
        {clicked ? (
          <div className="search-wrapper">
            <div className="icon-box">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="Search by stack"
              value={search}
              onChange={handleSearch}
            />
          </div>
        ) : (
          <AiOutlineSearch data-tooltip-id="my-tooltip-inline" data-tooltip-content="Search projects by stack" />
        )}
      </div>
      <Tooltip
        id="my-tooltip-inline"
        place="bottom"
        className="tooltip"
      />
    </ul>
  );
}
