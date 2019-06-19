import React from "react";
import MainImage from "../../assets/Main.png";
import "./Hero.css";

const Hero = () => (
  <section className="hero space-gradient">
    <h1 className="title">Get ready to jam!</h1>
    <section className="hero-section">
      <span>
        Michael
        <br />
        <strong>Jordan</strong>
      </span>
      <img src={MainImage} alt="Michael Jordan and Bugs Bunny" />
      <span>
        Bugs
        <br />
        <strong>Bunny</strong>
      </span>
    </section>
    {/* <div className="circles" /> */}
  </section>
);

export default Hero;
