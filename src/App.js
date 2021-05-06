import './App.css';
import AboutMe from "./sections/AboutMe/AboutMe";
import ContactMe from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import { useState, useEffect } from "react";

function App() {
  // windowDimension will be used in most sections to facilitate responsive design
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <div className="App">
      <Navbar windowDimension={windowDimension}/>
      <Header windowDimension={windowDimension}/>
      <AboutMe windowDimension={windowDimension}/>
      <Projects windowDimension={windowDimension}/>
      <ContactMe windowDimension={windowDimension}/>
      <Footer />
    </div>
  );
}

export default App;
