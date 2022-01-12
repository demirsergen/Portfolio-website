import "../styles.css";
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialTwitter,
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
          <TiSocialLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/demirsergen"
          rel="noreferrer"
          target="_blank"
        >
          <TiSocialGithub className="icon" />
        </a>
        <a
          href="https://twitter.com/sergenddemir"
          rel="noreferrer"
          target="_blank"
        >
          <TiSocialTwitter className="icon" />
        </a>
      </div>
      <p className="copyright">
        &copy; 2021 Sergen Demir. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
