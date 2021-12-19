import React from "react";
import "./NavBar.css";
import { BurgerIcon } from "../components/BurgerIcon";
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
          />
        </li>
        <li>
          <SocialIcon
            url="https://github.com/MEHDIHRAIRI"
            bgColor="white"
            fgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
        </li>
        <li>
          <BurgerIcon />
        </li>
      </ul>
    </div>
  );
};
