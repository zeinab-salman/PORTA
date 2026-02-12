import React from "react";
import "./CollectionsSection.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PortfolioFilter from "../PortfolioFilter/PortfolioFilter";
import { PortfoliosData } from "../Data/PortfoliosData";
import {
  containerVariants,
  itemVariants,
} from "../ContainerVarient/ContainerVarient";
import PortfolioCardComponent from "../PortfolioCardComponent/PortfolioCardComponent";
export default function CollectionsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveCategory(location.state.selectedCategory);
    }
  }, [location.state]);
  const categories = [...new Set(PortfoliosData.map((item) => item.categor))];

  const filteredPortfolios =
    activeCategory === "all"
      ? PortfoliosData
      : PortfoliosData.filter((item) => item.categor === activeCategory);
  const ID = self.crypto.randomUUID();
  return (
    <section className="collections-sec flex flex-col justify-center items-center py-8 px-10 w-full ">
      <PortfolioFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
      />
      <motion.div
        className="portfolios-filter flex justify-center items-center w-full flex-wrap gap-4 py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ listStyle: "none", padding: 0 }}
        key={ID}
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
        ))}{" "}
      </motion.div>
    </section>
  );
}
