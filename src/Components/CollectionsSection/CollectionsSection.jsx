import "./CollectionsSection.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PortfolioFilter from "../PortfolioFilter/PortfolioFilter";
import { containerVariants } from "../ContainerVarient/ContainerVarient";
import PortfolioCardComponent from "../PortfolioCardComponent/PortfolioCardComponent";
export default function CollectionsSection() {
  const [portfolios, setPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const location = useLocation();
  const normalizeCategory = (cat) => cat.trim().toLowerCase();
  useEffect(() => {
    const stored = localStorage.getItem("all-portfolios");
    if (stored) {
      setPortfolios(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveCategory(location.state.selectedCategory);
    }
  }, [location.state]);
  const categories = [
    ...new Map(
      portfolios.map((item) => [
        normalizeCategory(item.categor),
        item.categor.charAt(0).toUpperCase() +
          item.categor.slice(1).toLowerCase(),
      ]),
    ).values(),
  ];

  const filteredPortfolios =
    activeCategory === "all"
      ? portfolios
      : portfolios.filter(
          (item) =>
            normalizeCategory(item.categor) ===
            normalizeCategory(activeCategory),
        );

  return (
    <section className="collections-sec flex flex-col justify-center items-center py-8 px-10 w-full">
      <PortfolioFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
      />

      <motion.div
        className="portfolios-filter flex justify-center items-center w-full flex-wrap gap-4 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.05 }}
        style={{ listStyle: "none", padding: 0 }}
      >
        {filteredPortfolios.map((portfolio) => (
          <PortfolioCardComponent
            key={portfolio.id}
            id={portfolio.id}
            person={portfolio.person}
            img={portfolio.img}
            job={portfolio.job}
            skills={portfolio.skills}
          />
        ))}
      </motion.div>
    </section>
  );
}
