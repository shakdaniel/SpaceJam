import React from "react";
import SpaceJamLogo from "../../assets/Logo.svg";
import TrailerImg from "../../assets/Trailer.jpg";

import "./BuyTrailer.css";

const Buy = () => (
  <section className="BuyTrailer">
    <span className="buy">
      <img src={SpaceJamLogo} alt="space jam logo" />
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
    </span>
    <span className="trailer">
      <h2>Official Trailer</h2>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={TrailerImg} alt="Space Jam Official Trailer Thumbnail" />
      </a>
    </span>
  </section>
);

export default Buy;
