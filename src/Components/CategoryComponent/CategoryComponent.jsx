import React from "react";
import "./CategoryComponent.css";
import { motion } from "framer-motion";
import { DiEnvato } from "react-icons/di";
export default function CategoryComponent({ icon: Icon, category }) {
  return (
    <div className="category-component flex flex-col justify-center items-center px-25 py-15 rounded-lg text-6xl gap-4 mb-4">
      <Icon />
      <p>{category}</p>
    </div>
  );
}
