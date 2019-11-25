import React from "react";
import "./SearchBar.css";

function SearchBar({ value, handleChange }) {
  function onHandleChange(e) {
    handleChange(e.target.value);
  }

  function onHandleReset() {
    handleChange("");
  }

  return (
    <div className="search-bar">
      <input value={value} onChange={onHandleChange} className="search-bar__input" />
      <button type="button" onClick={onHandleReset} className="search-bar__reset-button">
        RESET
      </button>
    </div>
  );
}

export { SearchBar };
