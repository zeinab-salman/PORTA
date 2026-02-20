import React, { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../../Pages/EditPortfolio/PortfolioProvider";
import FormInput from "../../Components/FormInput/FormInput";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { MdSupervisorAccount } from "react-icons/md";

import "./PersonalInformationForm.css";
export default function PersonalInformationForm({ onClose }) {
  const { myPortfolio, savePortfolio } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    person: "",
    job: "",
    email: "",
    img: "",
    bio: "",
    categor: "",
  });

  useEffect(() => {
    if (myPortfolio) {
      setFormData({
        person: myPortfolio.person || "",
        job: myPortfolio.job || "",
        email: myPortfolio.email || "",
        img: myPortfolio.img || "",
        bio: myPortfolio.bio || "",
        categor: myPortfolio.categor || "",
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
        img: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePortfolio(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="personal-form w-120 pt-5 pb-96 px-10 gap-4 flex flex-col justify-center items-center rounded-tl-4xl rounded-bl-4xl "
    >
      <h3>Personal Information</h3>
      <FormInput type="file" onChange={handleImgChange} />
      <FormInput
        type="text"
        name="person"
        placeholder="Full Name"
        value={formData.person}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="job"
        placeholder="Professional Title"
        value={formData.job}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="categor"
        placeholder="category"
        value={formData.categor}
        onChange={handleChange}
      />
      <ButtonComponent
        typeclass="btn-1"
        icon={MdSupervisorAccount}
        text="Save Changes"
        onClick={handleSubmit}
        padding="px-33 py-2 padding-sm"
      />
    </form>
  );
}
