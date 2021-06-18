import "../styles.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import heroImage from '../static/images/hero_image.jpeg';



const Hero = () => {
  return (
    <div className="heroOuterContainer">
      <div className="heroContentContainer">
        <div className="heroContent">
          <h2>
            <span>Hello,</span><br/> this is <span className='nameSpan'>Sergen</span>.<br/> Welcome to my portfolio website.
          </h2>
          <p>
            I am a self-taught web developer and I use modern technologies to
            create cool things on the web.
          </p>
          <div className="heroButtonsContainer">
          <button className="viewProjectsButton">
            <Link to="/projects">View Projects<span><BsArrowRight size="25px"/></span></Link>
          </button>
          <button className="connectButton">
            <Link to="/contact">Get in touch!<span><BsArrowRight size="25px"/></span></Link>
          </button>
          </div>
        </div>
        {/* <div className="imageContainer">
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
            alt=""
          />
        </div> */}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
