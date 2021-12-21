import React, { useRef } from "react";
import "./Home.css";
import Roll from "react-reveal/Roll";
import { NavBar } from "../components/NavBar";

const Home = () => {
  const span = useRef(null);
  console.log(span);
  const handleClick = () => {
    span.current.innerHTML = "email copied to clipboard";
    navigator.clipboard.writeText("mehdi.hrairi@esprit.tn");
  };

  return (
    <div
      className="home-container"
      style={{
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minheight: "100vh",
      }}
    >
      <NavBar />
      <div className="title-container">
        <div>
          <Roll left>
            <h2 className="title">Mehdi Hrairi</h2>
            <h1 className="subtitle">Web Developer</h1>
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
