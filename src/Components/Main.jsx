import React, { useRef } from "react";
import "./Main.css";

const Main = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.9; // scroll ~90% of viewport width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container1">
      <button className="arrow left" onClick={() => scroll("left")}>&#8249;</button>

      <div className="main" ref={scrollRef}>
        <img src="Valuation.jpg" alt="Valuation info" />
        <img src="Ebitda.jpg" alt="Ebitda info" />
        <img src="Equity.jpg" alt="Equity" />
        <img src="Revenue.jpg" alt="Revenue" />
        <img src="Profit.jpg" alt="Profit" />
        <img src="Loss.jpg" alt="Loss" />
        <img src="Turnover.jpg" alt="Turnover" />
        <img src="ROI.jpg" alt="ROI" />
        <img src="MarketShare.jpg" alt="MarketShare" />
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>&#8250;</button>
    </div>
  );
};

export default Main;
