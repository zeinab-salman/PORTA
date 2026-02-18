import React, { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../../Pages/EditPortfolio/PortfolioProvider";
import FormInput from "../../Components/FormInput/FormInput";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { MdSupervisorAccount } from "react-icons/md";
import "./AddProjectAndExperience.css";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
export default function AddProjectAndExperience({ onClose }) {
  const { myPortfolio, savePortfolio } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    projectTitle: "",
    projectLink: "",
  });

  useEffect(() => {
    if (myPortfolio) {
      setFormData({
        projectTitle: myPortfolio.projectTitle || "",
        projectLink: myPortfolio.projectLink || "",
      });
    }
  }, [myPortfolio]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        projectImg: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePortfolio(formData);
  };
  const handleDeleteAll = () => {
    if (window.confirm("Do you want to delete all skills ?")) {
      savePortfolio({ projectTitle: "", projectLink: "", projectImg: "" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="project-form w-120 py-8 px-10 gap-4 flex flex-col justify-center items-center "
    >
      <h3>Add New Project</h3>

      <FormInput
        type="text"
        name="projectTitle"
        placeholder="Project Title"
        value={formData.projectTitle}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="projectLink"
        placeholder="https://..."
        value={formData.projectLink}
        onChange={handleChange}
      />

    
      <FormInput type="file" onChange={handleImgChange} />
      <ButtonComponent
        typeclass="btn-1"
        icon={FaPlus}
        text="Add Project"
        onClick={handleSubmit}
        padding="px-36 py-2 padding-sm"
      />
      <ButtonComponent
        typeclass="btn-1"
        icon={MdDelete}
        text="Delete All"
        onClick={handleDeleteAll}
        padding="  px-38 py-2 flex items-center gap-2 padding-sm "
      />
    </form>
  );
}
