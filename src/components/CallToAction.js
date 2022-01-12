import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const CallToAction = () => {
  return (
    <div className="CallToActionOuterContainer">
      <div className="overlay"></div>
      <div className="CallToActionContent">
        <h1>Let's build something cool together!</h1>
        <button className="callToActionButton">
          <Link to="/Contact">
            Let's Talk!
            <span>
              <BsArrowRight size="25px" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
