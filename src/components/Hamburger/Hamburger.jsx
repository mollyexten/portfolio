import "./Hamburger.css";

export default function Hamburger({ handleClick }) {
  return (
    <svg
    viewBox="0 0 200 130"
    width="40"
    height="35"
    className="hamburger"
    onClick={handleClick}
  >
    <rect width="200" height="25" fill="#555664"></rect>
    <rect y="50" width="200" height="25" fill="#555664"></rect>
    <rect y="100" width="200" height="25" fill="#555664"></rect>
  </svg>
  )
}