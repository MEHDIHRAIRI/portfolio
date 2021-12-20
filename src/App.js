import React, { useState, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const [index, setIndex] = useState(0);
  const [sections, setSections] = useState([home, about, contact]);
  const scrollUp = () => {
    if (index > 0) {
      setIndex(index - 1);
      window.scrollTo({
        behavior: "smooth",
        top: sections[index - 1].current.offsetTop,
      });
    } else {
      setIndex(0);
      window.scrollTo({
        behavior: "smooth",
        top: sections[0].current.offsetTop,
      });
    }
  };
  const scrollDown = () => {
    if (index < 2) {
      setIndex(index + 1);
      window.scrollTo({
        behavior: "smooth",
        top: sections[index + 1].current.offsetTop,
      });
    } else {
      setIndex(2);
      window.scrollTo({
        behavior: "smooth",
        top: sections[2].current.offsetTop,
      });
    }
  };
  return (
    <div class="App">
      <ReactScrollWheelHandler upHandler={scrollUp} downHandler={scrollDown}>
        <div ref={home}>
          <Home />
        </div>
        <div
          ref={about}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
          }}
        ></div>
        <div
          ref={contact}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
          }}
        ></div>
      </ReactScrollWheelHandler>
    </div>
  );
}

export default App;
