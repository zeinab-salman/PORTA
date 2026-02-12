import React from "react";
import "./HomeHero.css";
import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import { FaPlus } from "react-icons/fa6";
export default function HomeHero() {
  return (
    <>
      <section className=" homeHeroSection flex justify-center items-end w-full relative ">
        <div className="layer w-full absolute"></div>
        <div className="hero-content ">
          <TitleComponent
            title1=" Discover"
            title2=" Talent"
            span1=" Exceptional"
            text="Connect with top-tier professionals. Browse portfolios, find inspiration, and build your own stunning portfolio card."
          />
          <div className=" flex justify-center items-center mt-8 gap-4 flex-wrap mb-15">
            <SearchComponent placeholder="Search by Role name..." />{" "}
            <ButtonComponent
              text="Create Portfolio  "
              type="btn-1"
              icon={FaPlus}
              padding="px-10 py-4"
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
