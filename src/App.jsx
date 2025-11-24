import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-gray-900 scroll-smooth">
      <Navbar />
      <div className="flex flex-col space-y-15"> {/* Add consistent vertical spacing */}
        <div data-aos="zoom-in-up">
          <Home />
        </div>
        <div data-aos="zoom-in-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="zoom-in-up">
          <Project />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
        
      </div>
      <Footer />
    </div>
  );
};
export default App;
