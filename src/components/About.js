import profilePic from "../static/images/profile_picture2.JPG";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutOuterContainer">
      <div className="aboutContainer">
        <div className="aboutContentContainer">
          <h1 className="aboutTitle">About Me</h1>
          <p>
            Hello, this is Sergen and I'm a self-taught web developer. I've been
            learning how to code since September 2019. I started with HTML and
            CSS on FreeCodecamp and then moved onto JavaScript and Python. I
            enjoy learning new technologies and concepts.
          </p>
          <br />
          <p>
            I got myself<strong> a degree in Psychology</strong> and then I went
            on and moved to the UK to get my
            <strong> Master's degree in Work Psychology and Business</strong> so
            I could work in HR for tech companies. But little did I know that it
            wasn't going to be enough for me, personally,{" "}
            <strong>I had to learn how to code.</strong>
          </p>
          <br />
          <Link to="/contact">Let's have a chat!</Link>
          <div className="aboutResources">
            <h4>Main Resources I've Used:</h4>
            <ul>
              <li>
                <a href="https://www.freecodecamp.org/learn" target="_blank">
                  FreeCodeCamp
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/freecodecamp" target="_blank">
                  FreeCodeCamp Youtube
                </a>
              </li>
              <li>
                <a href="https://www.codecademy.com/learn" target="_blank">
                  Codecademy
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  W3Schools
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/" target="_blank">
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a href="https://css-tricks.com/" target="_blank">
                  CSS Tricks
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="aboutImageContainer">
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
};

export default About;
