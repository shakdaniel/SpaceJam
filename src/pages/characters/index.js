import React from "react";
import "./Character.css";
import MJ from "../../assets/MJ.jpg";

const CharactersPage = () => (
  <section className="characters">
    <h1 className="space-gradient">Meet the charaters</h1>
    <section className="character-list">
      <h2>Humans</h2>
      <ul>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
      </ul>
      <h2>Looney Tunes</h2>
      <ul>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
        <li>
          <img src={MJ} alt="mj" />
          <p>Name</p>
        </li>
      </ul>
    </section>
  </section>
);

export default CharactersPage;
