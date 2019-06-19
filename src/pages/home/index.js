import React, { Fragment } from "react";
import Hero from "./Hero";
import BuyTrailer from "./BuyTrailer";
import Overview from "./Overview";
import Posters from "./Posters";

const HomePage = () => (
  <Fragment>
    <Hero />
    <BuyTrailer />
    <Overview />
    <Posters />
  </Fragment>
);

export default HomePage;
