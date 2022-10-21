import React from "react";
import CV from "../static/CV.pdf";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <li to="/resume">
      <a href={CV} target="_blank">
        Resume
      </a>
    </li>
  );
};

export default Resume;
