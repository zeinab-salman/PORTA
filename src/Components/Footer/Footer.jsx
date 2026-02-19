import React from "react";
import "./Footer.css";
import img1 from "../../../public/Images/logo22.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="footer flex justify-center items-center px-10 py-8 w-full gap-[15%] flex-wrap ">
      <div className="text-6xl develop-text pb-10 text-center">
        <h3>
          Developed By <a href="https://algo-code.com">AlgoCode.</a>
        </h3>{" "}
      </div>
      <div className="flex flex-col justify-center items-start gap-1 text-white pb-10">
        <a href="#">
          <img src={img1} alt="logo" className="w-100 h-20 object-cover " />
        </a>
      </div>
      <div className="icons-footer flex flex-col justify-center items-center gap-2 text-6xl pb-10">
        <h2>Contact Us</h2>
        <div className="flex justify-center items-center">
          <a className=" cursor-pointer" href="#">
            {" "}
            <FaFacebookSquare />
          </a>
          <a className=" cursor-pointer" href="#">
            {" "}
            <FaInstagramSquare />
          </a>
          <a className=" cursor-pointer" href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
