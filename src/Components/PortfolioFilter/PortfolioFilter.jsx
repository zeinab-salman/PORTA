import "./PortfolioFilter.css";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { BiSolidCollection } from "react-icons/bi";
const PortfolioFilter = ({ categories, activeCategory, onFilter }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const toggleMore = () => {
    setMoreOpen(!moreOpen);
  };

  return (
    <div className="filter-buttons flex justify-center items-center w-full flex-wrap gap-[5%] ">
      <ButtonComponent
        onClick={() => onFilter("all")}
        text="ALL"
        typeclass={`btn-3 ${activeCategory === "all" ? "active1" : ""} `}
        icon={BiSolidCollection}
        padding="px-5 py-4 mb-10"
      />
      {moreOpen
        ? categories.map((cat, index) => (
            <ButtonComponent
              key={index}
              onClick={() => onFilter(cat)}
              text={cat}
              typeclass={`btn-3 ${activeCategory === cat ? "active1" : ""} `}
              icon={BiSolidCollection}
              padding="px-5 py-4 mb-10"
            />
          ))
        : categories
            .slice(0, 5)
            .map((cat, index) => (
              <ButtonComponent
                key={index}
                onClick={() => onFilter(cat)}
                text={cat}
                typeclass={`btn-3 ${activeCategory === cat ? "active1" : ""} `}
                icon={BiSolidCollection}
                padding="px-5 py-4 mb-10"
              />
            ))}
      <ButtonComponent
        onClick={toggleMore}
        text={moreOpen ? "Show Less" : "Show More ..."}
        typeclass={`btn-3 ${activeCategory === "ALL" ? "active1" : ""} `}
        icon={BiSolidCollection}
        padding="px-5 py-4 mb-10"
      />
    </div>
  );
};
export default PortfolioFilter;
