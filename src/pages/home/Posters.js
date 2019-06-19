import React from "react";
import Bugs from "../../assets/poster-bugs.gif";
import Lola from "../../assets/poster-lola.gif";
import Daffy from "../../assets/poster-daffy.gif";
import Taz from "../../assets/poster-taz.gif";
import Tweety from "../../assets/poster-tweety.gif";

import "./Posters.css";

const Posters = () => (
  <section className="posters">
    <span>
      <h2>Posters</h2>
    </span>
    <span>
      <img src={Bugs} alt="Bugs" />
      <img src={Lola} alt="Lola" />
      <img src={Daffy} alt="Daffy" />
      <img src={Taz} alt="Taz" />
      <img src={Tweety} alt="Tweety" />
    </span>
  </section>
);

export default Posters;
