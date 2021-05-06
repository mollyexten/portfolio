import "./Popup.css";

export default function Popup({ togglePopup }) {
  return (
    <div className="popup-cover">
      <div className="popup-box">
        <p className="popup-message">Your message has been sent!</p>
        <button className="popup-button" onClick={togglePopup}>
          OK
        </button>
      </div>
    </div>
  )
}