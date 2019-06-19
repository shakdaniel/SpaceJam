import React from "react";
import Poster from "../../assets/Poster.jpg";

import "./Overview.css";

const Overview = () => (
  <section className="overview">
    <h2>Overview</h2>
    <article>
      <img src={Poster} alt="space jam poster" />
      <p>
        Swackhammer, owner of the amusement park planet Moron Mountain is
        desperate get new attractions and he decides that the Looney Tune
        characters would be perfect. He sends his diminutive underlings to get
        them to him, whether Bugs Bunny and Co. want to go or not. Well armed
        for their size, Bugs Bunny is forced to trick them into agreeing to a
        competition to determine their freedom. Taking advantage of their puny
        and stubby legged foes, the gang selects basketball for the surest
        chance of winning. However, the Nerdlucks turn the tables and steal the
        talents of leading professional basketball stars to become massive
        basketball bruisers known as the Monstars. In desperation, Bugs Bunny
        calls on the aid of Michael Jordan, the Babe Ruth of basketball, to help
        them have a chance at winning their freedom.
      </p>
    </article>
    <ul>
      <li>
        <h3>Released</h3>
        <p>15 November 1996</p>
      </li>
      <li>
        <h3>Runtime</h3>
        <p>1hr 28min</p>
      </li>
      <li>
        <h3>Rating</h3>
        <p>PG</p>
      </li>
      <li>
        <h3>Director</h3>
        <p>Joe Pytka</p>
      </li>
      <li>
        <h3>Writers</h3>
        <p>Leo Benvenuti, Steve Rudnick, Timothy Harris, Herschel Weingrod</p>
      </li>
      <li>
        <h3>Released</h3>
        <p>Ivan Reitman, Joe Medjuck, Daniel Goldberg</p>
      </li>
    </ul>
  </section>
);

export default Overview;
