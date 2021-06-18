import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutOuterContainer">
    <div className="aboutContainer">
      <div className="aboutContentContainer">
        <h1 className="aboutTitle">About Me</h1>
        <p>
          Hello it's me,{" "}
          <strong>
            <i>Sergen</i>
          </strong>,
          and I'm a self-taught web developer. The photo is not mine though, I got that from the internet.</p><br/>

          <p>I got myself<strong> a degree in Psychology</strong> and then I went on and got myself <strong>a Master's degree</strong> so I could work in tech companies.</p>
        <p>But little did I know, that wasn't going to be enough for me, personally, <strong>I had to learn how to code.</strong></p>
        <p></p>
        <Link to="/contact">For any enquiries</Link>
        <div className="aboutResources">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://www.freecodecamp.org/learn" target="_blank" t>FreeCodeCamp</a></li>
            <li><a href="https://www.youtube.com/freecodecamp" target="_blank">Countless Youtube Videos</a></li>
            <li><a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a></li>
          </ul>
        </div>
      </div>
      <div className="aboutImageContainer">
        <img src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
      </div>
    </div>
    </div>
  );
};

export default About;
