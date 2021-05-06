import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    // "resize" is a Javascript event that gets triggered when the window is resized
    window.addEventListener("resize", handleResize);
    /* Since windowDimension has already occurred in the first useEffect, 
    this cleanup will run before the side effect above */
    return () => window.removeEventListener("resize", handleResize);
    // If this screen re-renders, the cleanup will run again before the side effect
    // It will also run on un-mount
  }, []);

  const isDesktop = windowDimension >= 720;
  return (
    <header id="home">
      {isDesktop ? (
        <img
          src="../../assets/header-desktop.jpg"
          alt="header-background"
          className="header-background"
        />
      ) : (
        <img
          src="../../assets/header-tablet-mobile.jpg"
          alt="header-background"
          className="header-background"
        />
      )}
        <h1 className="header-text">
          Hi, I'm Molly, and I'm a full stack developer.
        </h1>
    </header>
  )
}