import React from "react";
import "./Hero.css"; // Include a CSS file for styling
// import img1 from "night.jpg";
// import img1 from "../assets/night.jpg"; // Adjust path as needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="carousel">
        <div className="carousel-slide">
          <img src="" alt="Image 1" />
        </div>
        <div className="carousel-slide">
          <img src="https://via.placeholder.com/1366x768" alt="Image 2" />
        </div>
        <div className="carousel-slide">
          <img src="https://via.placeholder.com/1366x768" alt="Image 3" />
        </div>
      </div>
      <div className="hero-content">
        <h1>NIRWANA STAYS</h1>
        <p>Sleep Under The Stars And Wake Up To Stunning Lake Views.</p>
        <p>
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          Pawna Camping
        </p>
        <button className="hero-btn">Book Now</button>
      </div>
    </section>
  );
};

export default Hero;
