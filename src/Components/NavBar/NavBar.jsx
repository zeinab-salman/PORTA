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
      className="menu-nav flex justify-between items-center w-full h-24 "
      onClick={toggleNav}
    >
      <img src={logo} className="w-60" />

      <ul
        className={` w-full h-full flex justify-center items-center gap-4 text-white   ${navOpen ? "open" : "display-none"}`}
      >
        <li className="li-menu">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="li-menu">
          <NavLink to="/pp">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
