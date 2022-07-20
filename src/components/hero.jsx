import React from "react";
import PhotoGrid from "../assets/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <img src={PhotoGrid} className="hero--image" />
      <div className="hero--text">
        <h1 className="hero--title">Online Experiences</h1>
        <h3 className="hero--description">
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home
        </h3>
      </div>
    </div>
  );
}

export default Hero;
