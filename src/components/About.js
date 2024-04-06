import profilePic from '../static/images/profile_picture2.JPG';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            I'm Sergen, a dedicated explorer on a journey to find
            purpose while immersing myself in the dynamic world of
            technology. With a background in psychology and a flair
            for frontend development, I find joy in both my work as a
            health educator and my contributions to nonprofit
            projects. Passionate about leveraging technology for
            positive change, I'm constantly seeking new opportunities
            to learn and grow. Outside of work, you'll often find me
            strumming my guitar, capturing moments through my lens, or
            delving into the intricacies of European football.
          </p>
          <br />
          <Link to="/contact" className="about-link">
            Let's have a chat!
          </Link>
          <div className="aboutResources">
            <h4>Helpful Resources:</h4>
            <ul>
              <li>
                <a
                  href="https://www.freecodecamp.org/learn"
                  target="_blank"
                >
                  FreeCodeCamp
                </a>
              </li>
              <li>
                <a
                  href="https://www.codecademy.com/learn"
                  target="_blank"
                >
                  Codecademy
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  W3Schools
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/"
                  target="_blank"
                >
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
          <img src={profilePic} className="about__profile-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
