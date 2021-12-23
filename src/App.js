import React, { useState, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import { Projects } from "./pages/Projects";
import { Projects2 } from "./pages/Projects2";
import { ContactForm } from "./pages/ContactForm";
import { Dream } from "./pages/Dream";

function App() {
  const home = useRef(null);
  const dream = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const contact = useRef(null);

  const [index, setIndex] = useState(0);
  const [sections] = useState([home, dream, project1, project2, contact]);
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
    if (index < 4) {
      setIndex(index + 1);
      window.scrollTo({
        behavior: "smooth",
        top: sections[index + 1].current.offsetTop,
      });
    } else {
      setIndex(4);
      window.scrollTo({
        behavior: "smooth",
        top: sections[4].current.offsetTop,
      });
    }
  };
  return (
    <div class="App" className="app">
      <ReactScrollWheelHandler upHandler={scrollUp} downHandler={scrollDown}>
        <div className="app-container" ref={home}>
          <Home />
        </div>
        <div className="app-container" ref={dream}>
          <Dream />
        </div>
        <div ref={project1} className="app-container">
          <Projects />
        </div>
        <div ref={project2} className="app-container">
          <Projects2 />
        </div>
        <div ref={contact} className="app-container">
          <ContactForm />
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
}

export default App;
