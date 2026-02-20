import React from "react";
import "./CategoryComponent.css";
import { Link } from "react-router-dom";
export default function CategoryComponent({ icon: Icon, category }) {
  return (
    <Link
      to={`/Collections`}
      state={{ selectedCategory: `${category}` }}
      className="category-component flex flex-col justify-center items-center px-25 py-15 rounded-lg text-6xl  mb-4 "
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <Icon />
        <p>{category}</p>
      </div>
    </Link>
  );
}
