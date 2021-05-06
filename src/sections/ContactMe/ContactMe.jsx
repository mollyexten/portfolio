import "./ContactMe.css";
import ContactLinks from "../../components/ContactLinks/ContactLinks";
import Popup from "../../components/Popup/Popup";
import { linkData } from "../../services/linkData.js";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe({windowDimension}) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })
  const { user_name, user_email, message } = formData
  // State for managing the popup component:
  const [isOpen, setIsOpen] = useState(true)
  
  // Map out contact links and store in linksJSX
  const linksJSX = linkData.map((link, index) => (
    <ContactLinks
      key={index}
      name={link.name}
      href={link.href}
      url={link.url}
    />
  ));
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function sendEmail(e) {
    e.preventDefault();
    togglePopup();
    emailjs.send("mollys_gmail", "mollys_contact_form", {
      to_name: "Molly",
      from_name: user_name,
      message: message,
      reply_to: user_email,
      }, "user_ER9zyJqoooGRy5N5pQwmV")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    )
    handleReset()
  }

  // Function for clearing the form after use:
  const handleReset = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: ""
    })
  }
  // Function for managing the popup component:
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const isDesktop = windowDimension >= 720;
  
  return (
    <>
      <h2>
        <span id="contact-me"> &nbsp; </span>
      </h2>
      <section className="contact-me">
        {isDesktop ? (
          <img
            src="/assets/contact-desktop.jpg"
            alt="contact-background"
            className="contact-background"
          />
        ) : (
          <img
            src="/assets/contact-tablet-mobile.jpg"
            alt="contact-background"
            className="contact-background"
          />
        )}
        <div className="contact-container">
          <h2 className="contact-header">Contact me</h2>
          <div className="contact-content">
            <ul className="contact-links">{linksJSX}</ul>
            <form
              className="contact-form"
              onSubmit={(e) => (sendEmail(e))}
            >
              <input
                type="hidden"
                name="contact_number"
              />
              <input
                type="text"
                name="user_name"
                placeholder="name"
                value={user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                placeholder="email"
                value={user_email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="message"
                rows="6"
                value={message}
                onChange={handleChange}
              />
              <input
                type="submit"
                value="send"
                className="send-button"
              />
            </form>
            {isOpen && (
              <Popup
                togglePopup={togglePopup}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
