import {MdLaptop,MdSettings} from "react-icons/md";
import {FaMobile } from "react-icons/fa";
import "../styles.css";

const Services = () => {
    return (
        <div className="servicesOuterContainer">
            <h1 className="servicesTitle">Specialities</h1>
            <div className="servicesContainer">
                <div className="service">
                    <div><MdLaptop size="50px"/></div>
                    <h3>Web Development</h3>
                    <p>Building the web using modern tools like React that are blazing fast.</p>
                </div>
                <div className="service">
                    <div><MdSettings size="50px"/></div>
                    <h3>UI/UX Design</h3>
                    <p>Building responsive and easy to use modern websites.</p>
                </div>
                <div className="service">
                    <div><FaMobile size="50px"/></div>
                    <h3>Mobile App Development</h3>
                    <p>Building simple, cross-platform mobile apps with React Native.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;
