import "../styles.css";
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialTwitter
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footerOuterContainer">
        <div className="contactSocialContainer">
          <a
            href="https://www.linkedin.com/in/sergendemir/"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialLinkedin size="40px" className="icon" />
          </a>
          <a
            href="https://github.com/demirsergen"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialGithub size="40px" className="icon" />
          </a>
          <a
            href="https://twitter.com/sergenddemir"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialTwitter size="40px" className="icon" />
          </a>
      </div>
    </div>
  );
};

export default Footer;
