import React from "react";
import "./Home.css";
import Roll from "react-reveal/Roll";
import { BurgerIcon } from "../components/BurgerIcon";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Roll left>
          <h2 className="title">Mehdi Hrairi</h2>
          <h1 className="subtitle">Web Developer</h1>
          <BurgerIcon />
        </Roll>
      </div>
    </div>
  );
};
export default Home;
