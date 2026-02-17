import React, { createContext, useState, useEffect, useContext } from "react";
import { PortfoliosData } from "../../Components/Data/PortfoliosData";
import { AuthContext } from "../Register/AuthProvider";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [portfolios, setPortfolios] = useState(() => {
    const saved = localStorage.getItem("all-portfolios");
    return saved ? JSON.parse(saved) : PortfoliosData;
  });

  useEffect(() => {
    localStorage.setItem("all-portfolios", JSON.stringify(portfolios));
  }, [portfolios]);

  const myPortfolio = portfolios.find((p) => p.userId === user?.id) || {
    id: Date.now(),
    userId: user?.id,
    person: "",
    job: "",
    categor: "",
    email: "",
    img: "",
    bio: "",
    twitter: "",
    linkedin: "",
    github: "",
    personalwebsite: "",
    skills: [],
    experiences: [],
  };

  const savePortfolio = (updatedData) => {
    if (!user) return;

    setPortfolios((prev) => {
      const index = prev.findIndex((p) => p.userId === user.id);

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          person: updatedData.person ?? updated[index].person,
          job: updatedData.job ?? updated[index].job,
          categor: updatedData.categor ?? updated[index].categor,
          email: updatedData.email ?? updated[index].email,
          img: updatedData.img ?? updated[index].img,
          bio: updatedData.bio ?? updated[index].bio,
          twitter: updatedData.twitter ?? updated[index].twitter,
          linkedin: updatedData.linkedin ?? updated[index].linkedin,
          github: updatedData.github ?? updated[index].github,
          personalwebsite:
            updatedData.personalwebsite ?? updated[index].personalwebsite,
          skills: updatedData.skills ?? updated[index].skills,
          experiences: updatedData.experiences ?? updated[index].experiences,
          projectTitle: updatedData.projectTitle ?? updated[index].projectTitle,
          projectLink: updatedData.projectLink ?? updated[index].projectLink,
          projectImg: updatedData.projectImg ?? updated[index].projectImg,
        };
        return updated;
      }

      const newPortfolio = {
        id: Date.now(),
        userId: user.id,
        person: updatedData.person || "",
        job: updatedData.job || "",
        categor:updatedData.categor || "",
        email: updatedData.email || "",
        img: updatedData.img || "",
        bio: updatedData.bio || "",
        twitter: updatedData.twitter || "",
        linkedin: updatedData.linkedin || "",
        github: updatedData.github || "",
        personalwebsite: updatedData.personalwebsite || "",
        skills: updatedData.skills || [],
        experiences: updatedData.experiences || [],
        projectTitle: updatedData.projectTitle || "",
        projectLink: updatedData.projectLink || "",
        projectImg: updatedData.projectImg || "",
      };
      return [...prev, newPortfolio];
    });
  };

  return (
    <PortfolioContext.Provider value={{ myPortfolio, savePortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};
