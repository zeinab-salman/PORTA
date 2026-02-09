import React from "react";
import "./FeaturedPortfolioSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import PortfolioCardComponent from "../PortfolioCardComponent/PortfolioCardComponent";
import img2 from "../../../public/Images/peopleb.jpg";
import img1 from "../../../public/Images/peoplea.jpg";
import img3 from "../../../public/Images/peoplec.jpg";
import img4 from "../../../public/Images/peopled.jpg";
import img5 from "../../../public/Images/peoplee.jpg";
import img6 from "../../../public/Images/peoplef.jpg";

import { motion } from "framer-motion";
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
      <motion.div className="cards-featured-div  flex justify-center items-center  py-10 flex-wrap w-full ">
        <PortfolioCardComponent
          person="Alexandra Chen "
          img={img1}
          job="Senior Product Designer "
          skills={["UI/UX Design", "Figma", "Prototyping  "]}
        />
        <PortfolioCardComponent
          person="Marcus Williams"
          img={img2}
          job="Full-Stack Engineer "
          skills={["Node.js", "react", "TypeScript"]}
        />
        <PortfolioCardComponent
          person="Sophia Rodriguez  "
          img={img3}
          job=" Creative Director "
          skills={["Brand Strategy", " Art Direction", " Motion Design"]}
        />
        <PortfolioCardComponent
          person=" James Park"
          img={img4}
          job=" Chemist"
          skills={["Laboratory Techniques", "QC", "Lab Safety"]}
        />
        <PortfolioCardComponent
          person="Emma Thompson "
          img={img5}
          job=" Data Scientist"
          skills={["Python", "TensorFlow", "PyTorch "]}
        />
        <PortfolioCardComponent
          person="David Kim"
          img={img6}
          job="Architect"
          skills={["AutoCAD", "Revit", "BIM"]}
        />
      </motion.div>
    </section>
  );
}
