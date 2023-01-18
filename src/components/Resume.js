import React from 'react';
import CV from '../static/CV1.pdf';

const Resume = () => {
  return (
    <li to="/resume" className="resume">
      <a href={CV} target="_blank">
        Resume
      </a>
    </li>
  );
};

export default Resume;
