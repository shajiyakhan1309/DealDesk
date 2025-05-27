import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconText, setIconText] = useState("dark_mode");

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }, []);

  const toggleDarkMode = () => {
    if (!isDarkMode) {
      document.body.style.backgroundColor = "black";
      setIconText("light_mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setIconText("dark_mode");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="nav">
      <h1>DealDesk</h1>

      <div className="nav-links">
        <NavLink className={(e) => (e.isActive ? "orange" : "")} to="/">Home</NavLink>
        <NavLink className={(e) => (e.isActive ? "orange" : "")} to="/contact">Contact</NavLink>
        <NavLink className={(e) => (e.isActive ? "orange" : "")} to="/aboutUs">About Us</NavLink>
      <span className="material-symbols-outlined" onClick={toggleDarkMode}>
        {iconText}
      </span>
      </div>

    </div>
  );
};

export default Navbar;
