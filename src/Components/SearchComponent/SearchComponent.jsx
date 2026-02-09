import React from "react";
import "./SearchComponent.css";
import { FaSearch } from "react-icons/fa";
export default function SearchComponent({
  searchTerm,
  setSearchTerm,
  placeholder,
}) {
  return (
    <div className="search-div flex justify-center items-center text-gray-400 py-1 pl-2  pr-22 gap-2 rounded-sm">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input p-2"
      />
    </div>
  );
}
