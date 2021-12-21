import React, { useState, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "animate.css";

import { Projects } from "./pages/Projects";

import VisibilitySensor from "react-visibility-sensor";
import { Projects2 } from "./pages/Projects2";
import { ContactForm } from "./pages/ContactForm";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const [index, setIndex] = useState(0);
  const [sections] = useState([home, about, contact]);
  const [isVisible, setIsVisible] = useState(false);
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
  function onChange(visible) {
    setIsVisible(visible);
  }
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Projects />
        </div>
        <div
          ref={contact}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VisibilitySensor partialVisibility onChange={onChange}>
            <Projects2
              className={
                isVisible ? "animate__animated animate__slideInLeft" : "hidden"
              }
            />
          </VisibilitySensor>
        </div>
        <div
          ref={contact}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VisibilitySensor partialVisibility onChange={onChange}>
            <ContactForm />
          </VisibilitySensor>
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
}

export default App;
