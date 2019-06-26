import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./data";

const SubNav = () => (
  <ul className="subnav">
    {Data.articles.map(item => (
      <li key={item.id}>
        <NavLink to={`/technology/${item.slug}`}>{item.link}</NavLink>
      </li>
    ))}
  </ul>
);

export default SubNav;
