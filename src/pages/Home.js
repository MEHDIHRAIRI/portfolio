import React, { useRef } from "react";
import "./Home.css";
import Roll from "react-reveal/Roll";
import { NavBar } from "../components/NavBar";

const Home = () => {
  const span = useRef(null);
  const handleClick = () => {
    span.current.innerHTML = "email copied to clipboard";
    navigator.clipboard.writeText("mehdi.hrairi@esprit.tn");
  };

  return (
    <div className="home-container">
      <NavBar />
      <div className="title-container">
        <div>
          <Roll left>
            <h2 className="title">Mehdi Hrairi</h2>
            <h2 className="subtitle">Web Developer</h2>
          </Roll>
          <button class="custom-btn btn-3" onMouseDown={handleClick}>
            <span ref={span}>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
