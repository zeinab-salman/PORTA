import "./PortfolioFilter.css"
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const PortfolioFilter = ({ categories, activeCategory, onFilter }) => {
    return (
        <div className="filter-buttons flex justify-center items-center ">
            <ButtonComponent
               
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => onFilter("all")}
            
                text="All"
                type={`collection-btn ${activeCategory === "all" ? "active" : ""} `}
           />

            {categories.map((cat,index) => (
                <ButtonComponent
                    key={index}
                    onClick={() => onFilter(cat)}
                    text={cat}
                    type={`collection-btn ${activeCategory === cat ? "active" : ""} `}
                />
            ))}
        </div>
    );
};

export default PortfolioFilter;