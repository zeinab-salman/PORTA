import React, { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../../Pages/EditPortfolio/PortfolioProvider";
import FormInput from "../../Components/FormInput/FormInput";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { MdSupervisorAccount } from "react-icons/md";
import "./SocialLinksForm.css";
import AddExperience from "../../Components/AddExperience/AddExperience"
export default function SocialLinksForm({ onClose }) {
  const { myPortfolio, savePortfolio } = useContext(PortfolioContext); 

  const [formData, setFormData] = useState({
    twitter: "",
    linkedin: "",
    github: "",
    personalwebsite: "",
  });

  useEffect(() => {
    if (myPortfolio) {
      setFormData({
        twitter: myPortfolio.twitter || "",
        linkedin: myPortfolio.linkedin || "",
        github: myPortfolio.github || "",
        personalwebsite: myPortfolio.personalwebsite || "",
      });
    }
  }, [myPortfolio]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePortfolio(formData); 

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="social-form w-120  pt-10 px-10 gap-4 flex flex-col justify-center items-center "
    >
      <h3>Social Links</h3>

      <FormInput
        type="text"
        name="twitter"
        placeholder="Twitter URL"
        value={formData.twitter}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={formData.linkedin}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={formData.github}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="personalwebsite"
        placeholder="Website URL"
        value={formData.personalwebsite}
        onChange={handleChange}
      />

      <ButtonComponent
        typeclass="btn-1"
        text="Save Changes"
        icon={MdSupervisorAccount}
        onClick={handleSubmit}
        padding="px-33 py-2"
      />
      <AddExperience/>
    </form>
  );
}
