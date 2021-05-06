import "./Header.css";

export default function Header({ windowDimension }) {

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