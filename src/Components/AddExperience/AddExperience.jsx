import React, { useState, useContext } from "react";
import { PortfolioContext } from "../../Pages/EditPortfolio/PortfolioProvider";
import FormInput from "../../Components/FormInput/FormInput";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { FaPlus } from "react-icons/fa6";
import "./AddExperience.css";
import { MdDelete } from "react-icons/md";
export default function AddExperience({ onClose }) {
  const { myPortfolio, savePortfolio } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    period1: "",
    period2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteAll = () => {
    if (window.confirm("Do you want to delete all experiences?")) {
      savePortfolio({ experiences: [] });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.role ||
      !formData.company ||
      !formData.period1 ||
      !formData.period2
    ) {
      alert("please fill all fields");
      return;
    }

    const newExperience = {
      id: Date.now(),
      role: formData.role,
      company: formData.company,
      period1: formData.period1,
      period2: formData.period2,
    };

    const updatedExperiences = [
      ...(myPortfolio.experiences || []),
      newExperience,
    ];

   
    savePortfolio({ experiences: updatedExperiences });

 
    setFormData({
      role: "",
      company: "",
      period1: "",
      period2: "",
    });

    if (onClose) onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="experience-form w-120 py-8 px-10 gap-4 flex flex-col justify-center items-center"
    >
      <h3>Add New Experience</h3>

      <FormInput
        type="text"
        name="role"
        placeholder="Your Role"
        value={formData.role}
        onChange={handleChange}
      />

      <FormInput
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />

      <FormInput
        type="text"
        name="period1"
        placeholder="Start Year"
        value={formData.period1}
        onChange={handleChange}
      />

      <FormInput
        type="text"
        name="period2"
        placeholder="End Year"
        value={formData.period2}
        onChange={handleChange}
      />
      <ButtonComponent
        typeclass="btn-1"
        icon={FaPlus}
        text="Add Experience"
        onClick={handleSubmit}
        padding="  px-33 py-2 flex items-center gap-2  "
        type="submit"
      />
       <ButtonComponent
        typeclass="btn-1"
        icon={MdDelete}
        text="Delete All"
        onClick={handleDeleteAll}
        padding="  px-38 py-2 flex items-center gap-2  "
      
      />
    </form>
  );
}
