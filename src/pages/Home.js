import React from "react";
import "./Home.css";
import Roll from "react-reveal/Roll";
import { NavBar } from "../components/NavBar";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="title-container">
        <div>
          <Roll left>
            <h2 className="title">Mehdi Hrairi</h2>
            <h1 className="subtitle">Web Developer</h1>
          </Roll>
        </div>
      </div>
    </div>
  );
};
export default Home;
