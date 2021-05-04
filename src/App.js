import './App.css';
import AboutMe from "./sections/AboutMe/AboutMe";
import ContactMe from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
