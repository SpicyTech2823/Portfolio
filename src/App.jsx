import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
const App = () => {

  return (
    <div className="bg-gray-900 scroll-smooth">
      <Navbar />
      <div className="flex flex-col space-y-15"> {/* Add consistent vertical spacing */}
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact /> 
      </div>
      <Footer />
    </div>
  );
};
export default App;
