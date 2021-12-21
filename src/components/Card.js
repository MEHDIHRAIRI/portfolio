import React from "react";
import "./card.css";

export const Card = ({ image, title, content }) => {
  return (
    <div className="card-body">
      <div class="card-wrapper">
        <div className="card-img">
          <img src={image} alt="images" />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <div>{content}</div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
