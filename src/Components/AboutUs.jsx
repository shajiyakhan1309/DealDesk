import React from 'react';
import './AboutUs.css'; 

const AboutSection = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">
        <span role="img" aria-label="calculator">🧮</span> About DealDesk
      </h2>

      <p className="about-text">
      DealDesk is your simple tool for important business math. 
        Made with React to help everyone understand their finances better!
      </p>

      <div className="features-box">
        <h3>What's Special:</h3>
        <ul className="features-list">
          <li>✅ Easy profit/loss calculator</li>
          <li>✅ EBITDA made simple</li>
          <li>✅ Works on phone & computer</li>
          <li>✅ No complicated spreadsheets</li>
        </ul>
      </div>

      <div className="why-box">
        <h3>Why You'll Love It:</h3>
        <p>
          Perfect for small businesses, students learning finance, 
          or anyone who wants to manage money smarter!
        </p>
      </div>

      <div className="credit">
        <p>Made with ❤️ using React</p>
      </div>
    </div>
  );
};

export default AboutSection;