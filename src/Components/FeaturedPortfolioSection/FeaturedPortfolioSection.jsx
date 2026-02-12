import React from "react";
import "./FeaturedPortfolioSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import PortfolioCardComponent from "../PortfolioCardComponent/PortfolioCardComponent";
import { PortfoliosData } from "../Data/PortfoliosData";
import { motion } from "framer-motion";
import {containerVariants,itemVariants} from "../ContainerVarient/ContainerVarient"
export default function FeaturedPortfolioSection() {
  return (
    <section className="featured-portfolio-section px-10 py-8 flex flex-col justify-center items-center w-full ">
      <div className="w-full flex justify-start items-start">
        <TitleComponent
          title11="Featured "
          span2="Portfolio"
          type22="sec-title"
        />
      </div>
      <motion.div className="cards-featured-div  flex justify-center items-center  py-10 flex-wrap w-full "
       variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ listStyle: "none", padding: 0 }}
      >
        {PortfoliosData.slice(0,6).map((portfolio, id) => (
        
          <PortfolioCardComponent
            
            key={id}
            person={portfolio.person}
            img={portfolio.img}
            id={portfolio.id}
            job={portfolio.job}
            skills={portfolio.skills}
          />
        ))}
     </motion.div>
    </section>
  );
}
