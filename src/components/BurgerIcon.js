import React, { useState } from "react";
import "./BurgerIcon.css";
export const BurgerIcon = () => {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div class="plates">
        <div
          className={isActive ? "plate plate5" : "plate plate5 active"}
          onClick={toggleClass}
        >
          <svg
            class="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path class="line line1" d="M 30,35 H 70 " />
            <path class="line line2" d="M 50,50 H 30 L 34,32" />
            <path class="line line3" d="M 50,50 H 70 L 66,68" />
            <path class="line line4" d="M 30,65 H 70 " />
          </svg>
          <svg
            class="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path class="line" d="M 34,32 L 66,68" />
            <path class="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </div>
  );
};
