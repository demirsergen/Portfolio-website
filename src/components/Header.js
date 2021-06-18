import { Link, Switch } from "react-router-dom";
import { GrCompass } from "react-icons/gr";
import "../styles.css";

const Header = () => {
  return (
    <Switch>
      <div className="headerContainer">
        <div className="brand">
          <Link to="/">
          <GrCompass size="40px" />
          <h2>Sergen Demir</h2>
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </Switch>
  );
};

export default Header;
