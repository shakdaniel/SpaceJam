import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";
import WarnerLogo from "../assets/Warner_Bros.png";

const Footer = () => (
  <footer>
    <section className="footer-nav">
      <a className="warner" href="https://www.warnerbros.com">
        <img src={WarnerLogo} alt="Warner Bros Logo" />
      </a>
      <ul className="sitemap">
        <li>
          <NavLink to="/privacy">Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms">Terms</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/accessibility">Accessibility</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
        <li>
          <NavLink to="/adchoices">AdChoices</NavLink>
        </li>
        <li>
          <NavLink to="/soundtrack">Soundtrack</NavLink>
        </li>
      </ul>
    </section>
    <p>
      SPACE JAM, characters, names, and all related indicia are trademarks of
      Warner Bros. © 1996
    </p>
  </footer>
);

export default Footer;
