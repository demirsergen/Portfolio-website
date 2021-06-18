import { data } from "../constants/Constants";
import "../styles.css";

const Projects = () => {
  return (
    <div className="projectsOuterContainer">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsContainer">
        {data.map((project, index) => (
          <div key={index} className="project">
            <img src={project.img} alt="" />
            <div className="projectsInfo">
              <div>
                <h3>
                  Project: <span>{project.name}</span>
                </h3>
              </div>
              <div className="s">
                <h3 className="projectsTags">
                  Tags:
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </h3>
              </div>
              <div>
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  View Project
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
