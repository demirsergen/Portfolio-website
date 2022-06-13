import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path=":slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
