import "./PortfolioFilter.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { BiSolidCollection } from "react-icons/bi";
const PortfolioFilter = ({ categories, activeCategory, onFilter }) => {
  return (
    <div className="filter-buttons flex justify-around items-center w-full flex-wrap ">
      <ButtonComponent
        className={activeCategory === "all" ? "active1" : ""}
        onClick={() => onFilter("all")}
        icon={BiSolidCollection}
        padding="px-5 py-4 mb-10"
        text="All"
        type={`btn-3 ${activeCategory === "all" ? "active1" : ""} `}
      />

      {categories.map((cat, index) => (
        <ButtonComponent
          key={index}
          onClick={() => onFilter(cat)}
          text={cat}
          type={`btn-3 ${activeCategory === cat ? "active1" : ""} `}
          icon={BiSolidCollection}
          padding="px-5 py-4 mb-10"
        />
      ))}
    </div>
  );
};

export default PortfolioFilter;
