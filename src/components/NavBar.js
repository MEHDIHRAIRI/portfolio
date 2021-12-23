import React from "react";
import "./NavBar.css";
import { SocialIcon } from "react-social-icons";
export const NavBar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <SocialIcon
            url="https://www.linkedin.com/in/mahdi-hrairi-b79469b4"
            bgColor="white"
            fgColor="black"
            style={{ width: "30px", height: "30px" }}
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            target="_blank"
            url="https://github.com/MEHDIHRAIRI"
            bgColor="white"
            fgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
        <li>
          <a className="resume-button" href="../../mehdihrairicv.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
