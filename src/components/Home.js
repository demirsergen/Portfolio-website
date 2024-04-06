import { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import Skills from './Skills';
import CallToAction from './CallToAction';
import PopularProjects from './PopularProjects';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homeOuterContainer">
      <Hero />
      <Skills />
      {/* <PopularProjects /> */}
      <Services />
      <CallToAction />
    </div>
  );
};

export default Home;
