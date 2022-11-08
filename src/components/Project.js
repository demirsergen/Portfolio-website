import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.img} alt="" />
      <div className="projectsInfo">
        <div>
          <h4>
            Project: <span>{project.name}</span>
          </h4>
        </div>
        <div className="tags-container">
          <h4 className="projectsTags">
            Tags:
            {project.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </h4>
        </div>
        <div>
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            View Live
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
  );
};

export default Project;
