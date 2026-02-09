import React from "react";
import "./TitleComponent.css";
export default function TitleComponent({
  title1,
  title2,
  text,
  type,
  span1,
  span2,
  line,
  type2,
  title11,
  title22,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={`title-text text-center text-5xl ${type2}`}>
        {title1}
        <span id="text-span">{span1}</span>
        {title2}
      </h1>
      <h2 className={`title-text text-center text-5xl ${type2}`}>
        {title11}
        <span id="text-span">{span2}</span>
        {title22}
      </h2>
      <div className={line}></div>
      <p className={`${type} text-center text-gray-400 w-3/4 mt-4`}>{text}</p>
    </div>
  );
}
