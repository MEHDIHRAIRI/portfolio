import React from "react";
import "./card.css";
import { SocialIcon } from "react-social-icons";

export const Card = ({ image, title, content, github, website }) => {
  return (
    <div id="curve" class="card" style={{ margin: "50px" }}>
      <img src={image} style={{ width: "100%", height: "100%" }} alt="" />
      <div class="footer">
        <div class="connections">
          <div
            class="connection"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SocialIcon
              url={github}
              bgColor="white"
              fgColor="black"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div
            class="connection"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <SocialIcon
              url={website}
              bgColor="white"
              fgColor="black"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>

        <div class="info">
          <div class="name">{title}</div>
          <div class="job">{content}</div>
        </div>
      </div>
    </div>
  );
};
