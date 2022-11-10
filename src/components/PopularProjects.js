import React from "react";
import { data } from "../constants/Constants";
import Project from "./Project";
import { Link } from "react-router-dom";

const PopularProjects = () => {
  const popularProjects = data.slice(0, 3);
  return (
    <div className="popularProjectsOuterContainer">
      <h1 className="popularProjectsTitle">Popular Projects</h1>
      <div className="popularProjectsContainer">
        {popularProjects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
      <button class="popularProjectsButton">
        <Link to="/projects">Click for more...</Link>
      </button>
    </div>
  );
};

export default PopularProjects;
