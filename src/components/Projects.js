import { data } from "../constants/Constants";
import { useEffect } from "react";
import "../styles.css";
import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projectsOuterContainer">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsContainer">
        {data?.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
