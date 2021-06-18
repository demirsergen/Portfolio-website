import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiReact, SiStyledComponents, SiFigma, SiVisualstudio, SiGatsby} from "react-icons/si";
import { FaSass, FaNode, FaMobile } from "react-icons/fa";

import "../styles.css";

const Skills = () => {
  return (
    <div className="skillsOuterContainer">
      <h1 className="skillsTitle">Tech Stack</h1>
      <div className="stackIconsContainer">
        <ImHtmlFive className="skillIcon" />
        <ImCss3 className="skillIcon" />
        <SiJavascript className="skillIcon" />
        <FaSass className="skillIcon" />
        <SiReact className="skillIcon" />
        <SiGatsby className="skillIcon" />
        <SiStyledComponents className="skillIcon" />
        <FaNode className="skillIcon" />
        <SiFigma className="skillIcon" />
        <SiVisualstudio className="skillIcon" />
      </div>
    </div>
  );
};

export default Skills;
