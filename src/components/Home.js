import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="homeOuterContainer">
      <Hero />
      <Services />
      <Skills />
    </div>
  );
};

export default Home;
