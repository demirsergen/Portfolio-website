import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Footer />
      </div>
    </Router>
  );
}
