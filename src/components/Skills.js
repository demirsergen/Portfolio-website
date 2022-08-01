import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiStyledComponents,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiNextDotJs,
} from "react-icons/si";

import { FaSass, FaNode } from "react-icons/fa";

import "../styles.css";

const Skills = () => {
  return (
    <div className="skillsOuterContainer">
      <h1 className="skillsTitle">Tech Stack</h1>
      <div className="stackIconsContainer">
        <div className="stackIconsContainer__skill">
          <SiJavascript className="skillIcon" />
          <p>JavaScript</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiReact className="skillIcon" />
          <p>React JS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiNextDotJs className="skillIcon" />
          <p>NextJS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <FaSass className="skillIcon" />
          <p>Sass</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiTailwindcss className="skillIcon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiFirebase className="skillIcon" />
          <p>Firebase</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiRedux className="skillIcon" />
          <p>Redux</p>
        </div>
        <div className="stackIconsContainer__skill">
          <FaNode className="skillIcon" />
          <p>Node JS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
