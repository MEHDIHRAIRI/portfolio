import React from "react";
import "./Projects2.css";
import { Card } from "../components/Card";
const posts = [
  {
    id: 0,
    content: {
      title: "Blitz Education Platform",
      image:
        "https://i.postimg.cc/qRK5ZZtM/Capture-d-cran-2021-12-21-141638.png",
      content: "React, NodeJs, MongoDB, ExpressJs, Tensorflow",
      github: "https://github.com/MEHDIHRAIRI/Elite-devs-Blitz-Chatbot",
    },
  },
  {
    id: 1,
    content: {
      title: "Kisalu",
      image:
        "https://i.postimg.cc/JhQnBmcj/Capture-d-cran-2021-12-21-143553.png",
      content: "Nx, Ionic, GraphQl, DynamoDB, Amazon AppSync & Amplify",
      github: "https://github.com/MEHDIHRAIRI/kisalu-Aws-React-Nx-GraphQl",
    },
  },
];
export const Projects2 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {posts.map((e) => (
        <Card
          image={e.content.image}
          title={e.content.title}
          content={e.content.content}
          github={e.content.github}
          website={e.content.website}
        />
      ))}
    </div>
  );
};
