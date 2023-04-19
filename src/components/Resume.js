import React from 'react';
import CV from '../static/CV2.pdf';

const Resume = () => {
  return (
    <a href={CV} to="/resume" target="_blank" className="resume">
      Resume
    </a>
  );
};

export default Resume;
