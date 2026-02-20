import React, { useEffect, useState } from "react";
import "./UserPortfolioComponent.css";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SkillComponent from "../SkillComponent/SkillComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import { FaExternalLinkAlt } from "react-icons/fa";
import img from "../../../public/Images/project2.jpg"
export default function UserPortfolioComponent() {
  const { id } = useParams();
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("all-portfolios");
    if (stored) {
      setPortfolios(JSON.parse(stored));
    }
  }, []);
  const portfolio = portfolios.find((p) => p.id === Number(id));
  if (!portfolio) {
    return (
      <section className="min-h-lvh flex justify-center items-center text-white w-full">
        <p>Data loading</p>
      </section>
    );
  }
  return (
    <section className="user-portfolio flex flex-col justify-center items-center min-h-lvh text-white w-full py-40">
      <div className="portfolio-div glass-effect flex flex-col justify-center items-start gap-4 lg:px-20 py-20 lg:w-[70%] md:w-[95%] sm:w-[95%] md:px-10  sm:px-10">
        <img
          src={portfolio.img}
          alt={portfolio.person}
          className="w-40 h-40 rounded-full object-cover"
        />
        <h2 className="text-yellow-500">{portfolio.person}</h2>
        <p>{portfolio.job}</p>

        <div className="flex justify-between items-center w-full flex-wrap gap-5">
          <div className="flex justify-center items-center text-yellow-500 gap-2 text-4xl flex-wrap">
            <a href={portfolio.twitter} className="cursor-pointer">
              <FaTwitterSquare />
            </a>
            <a href={portfolio.github} className="cursor-pointer">
              <FaGithub />
            </a>
            <a href={portfolio.linkedin} className="cursor-pointer">
              <FaLinkedin />
            </a>
            <a href={portfolio.personalwebsite} className="cursor-pointer">
              <FaExternalLinkAlt />
            </a>
          </div>

          <ButtonComponent
            text="Contact"
            icon={MdOutlineEmail}
            typeclass="btn-1"
            padding="px-[5%] py-3"
          />
        </div>
        <div className="glass-effect px-10 py-10 mt-6 w-full">
          <p>
            {portfolio.bio || "Building scalable systems that power millions."}
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-yellow-500">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2 glass-effect px-10 py-10 mt-4 w-full">
            {portfolio.skills.map((skill) => (
              <SkillComponent key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-yellow-500">Experience</h3>
          <div className="Experience-com flex flex-col justify-center items-start glass-effect px-10 py-10 mt-4 w-full">
            {portfolio.experiences?.map((experience) => (
              <ExperienceComponent
                key={experience.id}
                role={experience.role}
                company={experience.company}
                period1={experience.period1}
                period2={experience.period2}
              />
            ))|| "No Experiences, add one to improve your portfolio."}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-yellow-500">Featured Projects</h3>
          <div className="glass-effect px-10 py-10 mt-4 gap-4  flex flex-col justify-center items-start ">
            <img
              alt="project-1"
              src={portfolio.projectImg || img}
              className="w-50 h-50 object-cover rounded-lg"
            />
            <div>
              <h4 className="">
                {" "}
                {portfolio.projectTitle || "no project available."}
              </h4>
              <a
                href={portfolio.projectLink}
                className="text-yellow-500 text-2xl"
              >
                [Repo Link]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
