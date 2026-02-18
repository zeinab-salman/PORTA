import React from "react";
import "./PortfolioCardComponent.css";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import SkillComponent from "../../Components/SkillComponent/SkillComponent";
import { FaEye } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { itemVariants } from "../ContainerVarient/ContainerVarient";
import { Link } from "react-router-dom";
export default function PortfolioCardComponent({
  img,
  person,
  job,
  skills,
  id,
}) {
  return (
    <motion.div
      className="portfolio-card mb-8 py-10 px-8 w-auto  flex flex-col justify-center items-center rounded-2xl text-white gap-2   "
      variants={itemVariants}
    >
      <Link
        to={`/Collections/${id}`}
        className="Link  w-auto  flex flex-col justify-center items-center"
      >
        <img
          src={img}
          alt={`${person} image`}
          className="w-30 h-30 rounded-full"
        />
        <h3 className="text-center">{person}</h3>
        <h5>{job}</h5>
        <div className="flex justify-center items-center gap-2 flex-wrap py-4">
          {skills.slice(0, 3).map((skill, id) => {
            return <SkillComponent key={id} skill={skill} />;
          })}
        </div>
        <div className="card-btns flex justify-center items-center gap-[8%] ">
          <ButtonComponent
            text="Contact"
            icon={MdEmail}
            typeclass="btn-2"
            padding="px-[35%] py-3 "
          />
          <ButtonComponent
            text="View"
            icon={FaEye}
            typeclass="btn-1"
            padding="px-[35%] py-3"
          />
        </div>
      </Link>
    </motion.div>
  );
}
