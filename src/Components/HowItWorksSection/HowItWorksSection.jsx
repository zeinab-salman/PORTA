import React from "react";
import "./HowItWorksSection.css";
import HowItWorkCard from "../../Components/HowItWorksCard/HowItWorksCard";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import TitleComponent from "../TitleComponent/TitleComponent";
export default function HowItWorksSection() {
  return (
    <section className="how-works-section flex flex-col justify-center items-center py-8 px-10 w-full">
      <div className="w-full flex justify-start items-start">
        <TitleComponent title11="How it " span2=" Works" type22="sec-title" />
      </div>
      <div className="w-full flex justify-center items-center gap-[2%] py-15 flex-wrap">
        <HowItWorkCard
          id="1"
          title="Discover & Filter"
          text="Browse through thousands of portfolios using advanced search."
          icon={FaSearch}
        />
        <HowItWorkCard
          id="2"
          title="Connect & Collaborate"
          text=" Browse through thousands of portfolios using advanced search.  "
          icon={FaStar}
        />
        <HowItWorkCard
          id="3"
          title="Create & Innovate"
          text="Browse through thousands of portfolios using advanced search."
          icon={FaHandshake}
        />
      </div>
    </section>
  );
}
