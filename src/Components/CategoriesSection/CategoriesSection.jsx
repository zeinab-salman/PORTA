import React from "react";
import "./CategoriesSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import CategoryComponent from "../../Components/CategoryComponent/CategoryComponent";
import { FaCode } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { BsBuildingsFill } from "react-icons/bs";
export default function CategoriesSection() {
  return (
    <section className="categories-section flex flex-col justify-center items-center py-8 px-10 w-full">
      <div className="w-full flex justify-start items-start">
        <TitleComponent
          title11="Discover By Featured"
          span2=" Category"
          type22="sec-title"
        />
      </div>
      <div className="categories-div flex justify-center items-center py-3 w-full flex-wrap gap-[4%]">
        <CategoryComponent icon={BsBuildingsFill} category="Architecture" />
        <CategoryComponent icon={FaCode} category="Programming" />
        <CategoryComponent icon={GiChemicalDrop} category="Chemistry" />
        <CategoryComponent icon={MdDataExploration} category="Data Science" />
      </div>
    </section>
  );
}
