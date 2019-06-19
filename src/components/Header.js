import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/Logo.svg";

const Header = () => (
  <header>
    <NavLink className="logo" exact to="/">
      <img src={Logo} alt="Space Jam Logo" />
    </NavLink>
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/technology">Technology</NavLink>
    </nav>
  </header>
);

export default Header;
