import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutOuterContainer">
    <div className="aboutContainer">
      <div className="aboutContentContainer">
        <h1 className="aboutTitle">About Me</h1>
        <p>
          Hello this is me,{" "}
          <strong>
            <i>Sergen</i>
          </strong>
          . The photo is not mine though, I got that from the internet.
        </p>
        <p>I'm a self-taught web developer. I also make jokes, I think?</p>
      </div>
      <div className="aboutImageContainer">
        <img src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
      </div>
    </div>
    </div>
  );
};

export default About;
