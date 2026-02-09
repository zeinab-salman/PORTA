import React from "react";
import "./SkillComponent.css";
export default function SkillComponent({ skill }) {
  return (
    <div className="skill-com flex justify-center items-center  py-1 px-3 rounded-full ">
      <p>{skill}</p>
    </div>
  );
}
