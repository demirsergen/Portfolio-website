import { MdLaptop, MdSettings } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import "../styles.css";

const Services = () => {
  return (
    <div className="servicesOuterContainer">
      <h1 className="servicesTitle">Interests</h1>

      <div className="servicesContainer">
        <div className="service">
          <div>
            <MdLaptop size="50px" />
          </div>
          <h4>Web Development</h4>
          <p>
            Building the web using modern tools like React that are blazing
            fast.
          </p>
        </div>
        <div className="service">
          <div>
            <MdSettings size="50px" />
          </div>
          <h4>UI/UX Design</h4>
          <p>Building responsive and easy to use modern websites.</p>
        </div>
        <div className="service">
          <div>
            <FaMobile size="50px" />
          </div>
          <h4>Mobile App Development</h4>
          <p>Building simple, cross-platform mobile apps with React Native.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
