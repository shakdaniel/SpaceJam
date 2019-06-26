import React from "react";
import Data from "./data";
import GreenScreen from "../../assets/cartoon-world.jpg";

const TechPage = ({ slug }) => {
  const item = Data.articles.find(obj => {
    return obj.slug === slug;
  });

  return (
    <article>
      <h2>{item.title}</h2>
      <img src={GreenScreen} alt={item.title} />
      <section dangerouslySetInnerHTML={{ __html: item.content }} />
    </article>
  );
};

export default TechPage;
