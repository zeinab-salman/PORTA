import React from "react";
import "./ExperienceComponent.css";
export default function ExperienceComponent({
  role,
  company,
  period1,
  period2,
}) {
  return (
    <>
      <div>
        <p>Role : {role}</p>
        <p>Company Name : {company}</p>
      </div>
      <p className="text-yellow-500 mb-5">
        {period1} - {period2}
      </p>
    </>
  );
}
