import React from "react";
import "./HomeHero.css";
import { useState, useEffect } from "react";
import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
export default function HomeHero() {
  const [portfolios, setPortfolios] = useState(() => {
    const saved = localStorage.getItem("all-portfolios");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("all-portfolios", JSON.stringify(portfolios));
  }, [portfolios]);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredPortfolios = portfolios.filter((portfolio) => {
    const matchesName = portfolio.job
      ?.toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());

    return matchesName;
  });

  return (
    <>
      <section className="homeHeroSection flex justify-center items-end w-full relative ">
        <div className="layer w-full absolute"></div>
        <div className="hero-content ">
          <TitleComponent
            title1=" Discover"
            title2=" Talent"
            span1=" Exceptional"
            text="Connect with top-tier professionals, Browse portfolios."
          />
          <div className="search-btn-div flex justify-center items-center mt-8 gap-4 flex-wrap mb-15 relative">
            <SearchComponent
              placeholder="Search by Role name..."
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />{" "}
            {searchTerm !== "" && (
              <div className="search-result-sec absolute -right-10 mt-25 z-50 md:right-100 md:-top-10 sm:right-70 sm:-top-10 ">
                {filteredPortfolios.length === 0 ? (
                  <p className="not-found-text no-portfolio py-20 px-40 text-yellow-500">
                    No portfolios found.
                  </p>
                ) : (
                  filteredPortfolios.map((portfolio, id) => (
                    <SearchResultItem
                      key={id}
                      id={portfolio.id}
                      person={portfolio.person}
                      img={portfolio.img}
                      job={portfolio.job}
                    />
                  ))
                )}
              </div>
            )}
            <Link to="/Login">
              <ButtonComponent
                text="Create Portfolio  "
                typeclass="btn-1"
                icon={FaPlus}
                padding="px-11 py-4"
              />
            </Link>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
