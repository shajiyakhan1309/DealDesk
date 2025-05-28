import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconText, setIconText] = useState("dark_mode");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <h1>DealDesk</h1>
  
      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink onClick={() => setMenuOpen(false)} className={(e) => (e.isActive ? "orange" : "")} to="/">Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} className={(e) => (e.isActive ? "orange" : "")} to="/contact">Contact</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} className={(e) => (e.isActive ? "orange" : "")} to="/aboutUs">About Us</NavLink>
      </div>
  
      {/* Hamburger and toggle at the end */}
      <div className="nav-actions">
        <span className="material-symbols-outlined" onClick={toggleDarkMode}>
          {iconText}
        </span>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default Navbar;
