import React from "react";
import { Card } from "../components/Card";
import "./Projects.css";
const posts = [
  {
    id: 0,
    content: {
      title: "Portfolio",
      image:
        "https://i.postimg.cc/3JFYC4hw/be-your-mern-stack-developer-mongodb-express-react-nodejs.jpg",
      content: "Grow some echinacea",
    },
  },
  {
    id: 1,
    content: {
      title: "Seed",
      image:
        "https://i.postimg.cc/4dkSSPbR/Capture-d-cran-2021-12-20-223841.png",
      content: "Worth a visit",
    },
  },
  {
    id: 2,
    content: {
      title: "Street in Jerusalem",
      image:
        "https://i.postimg.cc/3JFYC4hw/be-your-mern-stack-developer-mongodb-express-react-nodejs.jpg",
      content: "Street in Valley of Refaim",
    },
  },
];
export const Projects = () => {
  return (
    <div className="card-grid-view">
      {posts.map((e) => (
        <Card
          image={e.content.image}
          title={e.content.title}
          content={e.content.content}
        />
      ))}
    </div>
  );
};
