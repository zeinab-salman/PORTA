import React from "react";
import "./NavBar.css";
import logo from "../../../public/Images/logo2.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { useAuth } from "../../Pages/Register/AuthProvider";
export default function NavBar() {
  const { user, logout } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="menu-nav  flex justify-between items-center w-full h-24 px-10 fixed">
      <a href="#">
        <img src={logo} className="w-50 h-50 object-cover" />
      </a>

      <ul
        className={`w-[40%]h-full flex justify-center items-center gap-5 text-white   ${navOpen ? "open " : "display-none"}`}
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
        {user ? (
          <>
            <li className="li-menu">
              <NavLink to="/EditProfile">Portfolio</NavLink>
            </li>
            <li className="li-menu">
              <button className="log-out-btn" onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        ) : (
          <h2></h2>
        )}
      </ul>
      <FiAlignCenter
        className="text-yellow-500 text-4xl display-none-icon cursor-pointer"
        onClick={toggleNav}
      />
    </nav>
  );
}
