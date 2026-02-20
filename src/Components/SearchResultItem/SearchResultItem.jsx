import React from "react";
import "./SearchResultItem.css";
import { Link } from "react-router-dom";
export default function SearchResultItem({ img, person, job, skills, id }) {
  return (
    <Link to={`/Collections/${id}`}>
      <div className="search-result-item w-full flex justify-center items-center px-15 py-10 ">
        <ul className="flex justify-start items-center text-yellow-500 gap-5 w-full flex-wrap ">
          <li className="search-li rounded-full p-1">
            <img
              src={img}
              alt={`${person}`}
              width={30}
              className="rounded-full"
            />
          </li>
          <li className="search-li rounded-full p-1">{person}</li>
          <li className="search-li rounded-full p-1">{job}</li>
        </ul>
      </div>
    </Link>
  );
}
