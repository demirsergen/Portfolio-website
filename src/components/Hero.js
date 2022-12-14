import '../styles.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import vector1 from '../static/assets/vector1.svg';
import vector2 from '../static/assets/vector2.svg';
import vector3 from '../static/assets/vector3.svg';

const Hero = () => {
  return (
    <div className="heroOuterContainer">
      <div className="heroContentContainer">
        <div className="heroContent">
          <h2>
            <span>Hello, it's me</span>
            <br />
            <span className="nameSpan">Sergen.</span>
            <br />
          </h2>
          <p>
            I am a Frontend Web Developer and I use modern
            technologies to create cool things for the web.
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
                Let's Connect!
                <span>
                  <BsArrowRight size="25px" />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <img src={vector3} alt="" className="hero__vector3" />
    </div>
  );
};

export default Hero;
