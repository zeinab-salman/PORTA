import React from "react";
import "./PortfolioCardComponent.css";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import SkillComponent from "../../Components/SkillComponent/SkillComponent";
import { FaEye } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function PortfolioCardComponent({ img, person, job, skills }) {
  return (
    <div className="portfolio-card mb-8 py-10 px-8 w-auto  flex flex-col justify-center items-center rounded-2xl text-white gap-2  ">
      <img
        src={img}
        alt={`${person} image`}
        className="w-30 h-30 rounded-full"
      />
      <h3>{person}</h3>
      <h5>{job}</h5>
      <div className="flex justify-center items-center gap-2 flex-wrap py-4">
        {skills.map((skill, id) => {
          return <SkillComponent key={id} skill={skill} />;
        })}
      </div>
      <div className="flex justify-center items-center gap-[8%]">
        <ButtonComponent
          text="Contact"
          icon={MdEmail}
          type="btn-2"
          padding="px-[35%] py-3"
        />
        <ButtonComponent
          text="View"
          icon={FaEye}
          type="btn-1"
          padding="px-[35%] py-3"
        />
      </div>
    </div>
  );
}
