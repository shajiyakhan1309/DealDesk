import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconText, setIconText] = useState("dark_mode");

  useEffect(() => {
    // Set default (light mode) styles on first load
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
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  return (
    <div className="nav">
      <nav>
       <h1>DealDeskk</h1>
        <NavLink className ={(e)=>{return e.isActive?"orange":""}} to="/">Home</NavLink>
        <NavLink className ={(e)=>{return e.isActive?"orange":""}} to="/contact">Contact</NavLink>
        <NavLink className ={(e)=>{return e.isActive?"orange":""}} to="/aboutUs">About Us</NavLink>
       
      </nav>

      <span className="material-symbols-outlined" onClick={toggleDarkMode}>
        {iconText}
      </span>
    </div>
  );
};

export default Navbar;
