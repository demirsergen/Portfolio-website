import { Link } from 'react-router-dom';
import { GrCompass } from 'react-icons/gr';
import '../styles.css';
// import Resume from "./Resume";

const Header = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <div className="headerContainer">
        <div className="brand" onClick={scrollUp}>
          <Link to="/">
            <GrCompass size="45px" />
          </Link>
        </div>
        <ul className="navLinks">
          <Link to="/" onClick={scrollUp}>
            Home
          </Link>
          <Link to="projects" onClick={scrollUp}>
            Projects
          </Link>

          <Link to="about" onClick={scrollUp}>
            About
          </Link>

          <Link to="blog" onClick={scrollUp}>
            Blog
          </Link>

          <Link to="contact" onClick={scrollUp}>
            Contact
          </Link>
          {/* <Resume /> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
