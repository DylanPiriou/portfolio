import React, { useState } from "react";
import "./Filters.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Filters({ filter, setFilter, search, setSearch, handleSearch }) {
  // State pour l'apparition de l'input de recherche
  const [clicked, setClicked] = useState(false);
  // Logique pour supprimer la recherche au clique de la croix
  const handleDelete = () => {
    setSearch("");
  }

  return (
    <ul className="filter-btns__wrapper">
      <div className="filter-btn" onClick={() => setFilter("All")}>
        <label htmlFor="All" tabIndex="0">All</label>
        <input
          type="radio"
          name="All"
          value="All"
          checked={filter === "All"}
          onChange={() => setFilter("All")}
        />
      </div>
      <div className="filter-btn" onClick={() => setFilter("Frontend")}>
        <label htmlFor="Frontend" tabIndex="0">Frontend</label>
        <input
          type="radio"
          name="Frontend"
          value="Frontend"
          checked={filter === "Frontend"}
          onChange={() => setFilter("Frontend")}
        />
      </div>
      <div className="filter-btn" onClick={() => setFilter("Backend")}>
        <label htmlFor="Backend" tabIndex="0">Backend</label>
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
            <div className="icon-box" tabIndex="0">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              placeholder="Search by tool"
              value={search}
              onChange={handleSearch}
            />
            {search.length > 0 ? (
            <div className="cross-box" onClick={() => handleDelete()}>
              <RxCross2/>
            </div>

            ) : (
              null
            )}
          </div>
        ) : (
          <AiOutlineSearch data-tooltip-id="my-tooltip-inline" data-tooltip-content="Search projects by stack" />
        )}
      </div>
    </ul>
  );
}
