import "./Navbar.css";
import NavLinks from "../../components/NavLinks/NavLinks";
import Hamburger from "../../components/Hamburger/Hamburger";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  const isMobile = windowDimension <= 640;

  return (
    <nav>
      {isMobile ? (
        <div className="mobile-nav">
          <h1 className="mobile-nav-header">molly exten</h1>
          <Hamburger className="hamburger-image" handleClick={handleClick} />
          <ul
            className="hamburger-dropdown"
            style={{ display: hamburger && visible ? "grid" : "none" }}
            onClick={handleClick}
          >
            <li className="hamburger-close">✕</li>
            <li className="mobile-nav-link home-link">
              <a href="#home">home</a>
            </li>
            <li className="mobile-nav-link about-link">
              <a href="#about-me">about me</a>
            </li>
            <li className="mobile-nav-link projects-link">
              <a href="#projects">projects</a>
            </li>
            <li className="mobile-nav-link contact-link">
              <a href="#contact-me">contact</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="desktop-nav">
          <h1 className="desktop-nav-header">molly exten</h1>
          <ul className="desktop-console">
            <li className="desktop-nav-link">
              <a href="#home">home</a>
            </li>
            <li className="desktop-nav-link">
              <a href="#about-me">about me</a>
            </li>
            <li className="desktop-nav-link">
              <a href="#projects">projects</a>
            </li>
            <li className="desktop-nav-link">
              <a href="#contact-me">contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
