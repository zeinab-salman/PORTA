import React from "react";
import "./NavBar.css";
import logo from "../../../public/Images/logo2.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setMenuOpen(!navOpen);
  };

  return (
    <nav
      className="menu-nav  flex justify-between items-center w-full h-24 px-10 fixed"
      onClick={toggleNav}
    >
      <img src={logo} className="w-50 h-50 object-cover" />

      <ul
        className={`w-1/3 h-full flex justify-between items-center gap-4 text-white   ${navOpen ? "open" : "display-none"}`}
      >
        <li className="li-menu">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="li-menu">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="li-menu">
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li className="li-menu">
          <NavLink to="/Collections">Collections</NavLink>
        </li>
        <li className="li-menu">
          <NavLink to="/MyProfile">My Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  );
}
