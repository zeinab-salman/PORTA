import React, { useState, useContext } from "react";
import { PortfolioContext } from "../../Pages/EditPortfolio/PortfolioProvider";
import FormInput from "../../Components/FormInput/FormInput";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { FaPlus } from "react-icons/fa6";
import "./AddSkills.css";
import { MdDelete } from "react-icons/md";
import AddProjectAndExperience from "../AddProjectAdnExperience/AddProjectAndExperience";
export default function AddSkillsForm({ onClose }) {
  const { myPortfolio, savePortfolio } = useContext(PortfolioContext); // الحصول على بورتفوليو المستخدم

  const [skill, setSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!skill.trim()) return;

    const existingSkills = myPortfolio?.skills || [];

    if (existingSkills.includes(skill)) {
      return;
    }

    const updatedSkills = [...existingSkills, skill];
    savePortfolio({ skills: updatedSkills });

    setSkill("");
  };
  const handleDeleteAll = () => {
    if (window.confirm("Do you want to delete all skills ?")) {
      savePortfolio({ skills: [] });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="skills-form w-120 pt-10 pb-44 px-10 gap-4 flex flex-col justify-center items-center rounded-tr-4xl rounded-br-4xl"
    >
      <h3>Skills & Expertise</h3>
      <FormInput
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Add a skill"
      />
      <ButtonComponent
        typeclass="btn-1"
        icon={FaPlus}
        text="Add Skill"
        onClick={handleSubmit}
        padding="px-38 py-2"
      />
      <ButtonComponent
        typeclass="btn-1"
        icon={MdDelete}
        text="Delete All"
        onClick={handleDeleteAll}
        padding="  px-38 py-2 flex items-center gap-2  "
      />
      <AddProjectAndExperience />
    </form>
  );
}
