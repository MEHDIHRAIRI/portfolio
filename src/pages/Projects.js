import React from "react";
import { Card } from "../components/Card";
import "./Projects.css";
const posts = [
  {
    id: 0,
    content: {
      title: "Portfolio",
      image:
        "https://i.postimg.cc/PrwLxWgs/Capture-d-cran-2021-12-21-140047.png",
      content: "Grow some echinacea",
      github: "https://github.com/MEHDIHRAIRI/portfolio",
      website: "https://epic-dijkstra-455a35.netlify.app/",
    },
  },
  {
    id: 1,
    content: {
      title: "Seed",
      image:
        "https://i.postimg.cc/4dkSSPbR/Capture-d-cran-2021-12-20-223841.png",
      content: "Worth a visit",
      github: "https://github.com/MEHDIHRAIRI/Seed_Tunisia-React-Node-Mongo",
      website: "https://ecstatic-lamarr-8b5220.netlify.app/",
    },
  },
];
export const Projects = () => {
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
