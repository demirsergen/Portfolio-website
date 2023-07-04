import {
  SiJavascript,
  SiReact,
  SiPython,
  SiMysql,
  SiTypescript,
  SiStyledComponents,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodeDotJs,
} from 'react-icons/si';

import '../styles.css';

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
          <SiPython className="skillIcon" />
          <p>Python</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiNextDotJs className="skillIcon" />
          <p>NextJS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiTypescript className="skillIcon" />
          <p>Typescript</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiMysql className="skillIcon" />
          <p>MySQL</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiSass className="skillIcon" />
          <p>Sass</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiTailwindcss className="skillIcon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiStyledComponents className="skillIcon" />
          <p>Styled Components</p>
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
          <SiNodeDotJs className="skillIcon" />
          <p>Node JS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiHtml5 className="skillIcon" />
          <p>HTML</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiCss3 className="skillIcon" />
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
