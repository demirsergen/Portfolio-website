import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";

const Home = () => {
  return (
    <div className="homeOuterContainer">
      <Hero />
      <Services />
      <Skills />
      {/* <SoftSkills /> */}
    </div>
  );
};

export default Home;
