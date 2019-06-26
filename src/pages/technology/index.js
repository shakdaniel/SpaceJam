import React from "react";
import SubNav from "./SubNav";
import TechPage from "./TechPage";
import "./Technology.css";

const TechnologyPage = ({ slug }) => (
  <section className="technology">
    <h1 className="space-gradient">Tech Notes</h1>
    <section className="technology-container">
      <SubNav />
      <TechPage slug={slug} />
    </section>
  </section>
);

export default TechnologyPage;
