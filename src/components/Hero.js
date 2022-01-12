import "../styles.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import heroImage from "../static/images/hero_image.jpeg";

const Hero = () => {
  return (
    <div className="heroOuterContainer">
      <div className="heroContentContainer">
        <div className="heroContent">
          <h2>
            <span>Hi,</span>
            <br /> this is <span className="nameSpan">Sergen</span>.<br />{" "}
            Welcome to my portfolio website.
          </h2>
          <p>
            I am a self-taught web developer and I use modern technologies to
            create cool things for the web.
          </p>
          <div className="heroButtonsContainer">
            <button className="viewProjectsButton">
              <Link to="/projects">
                View Projects
                <span>
                  <BsArrowRight size="25px" />
                </span>
              </Link>
            </button>
            <button className="connectButton">
              <Link to="/contact">
                Let's Talk!
                <span>
                  <BsArrowRight size="25px" />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
