import "./ContactMe.css";
import ContactLinks from "../../components/ContactLinks/ContactLinks"
import { linkData } from "../../services/linkData.js";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

export default function ContactMe() {
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

  const isDesktop = windowDimension >= 720;
  
  const linksJSX = linkData.map((link, index) =>
    <ContactLinks
      key={index}
      name={link.name}
      href={link.href}
      url={link.url}
    />
  )
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('mollys_gmail', 'mollys_contact_form', e.target, 'user_ER9zyJqoooGRy5N5pQwmV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <section id="contact-me">
      {isDesktop ? (
        <img src="/assets/contact-desktop.jpg" alt="contact-background" className="contact-background" />
      ) : (
        <img src="/assets/contact-tablet-mobile.jpg" alt="contact-background" className="contact-background" />
      )}
      <div className="contact-container">
        <h2 className="contact-header">
          Contact me
        </h2>
        <div className="contact-content">
          <ul className="contact-links">
            {linksJSX}
          </ul>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <input type="text" name="user_name" placeholder="name" />
            <input type="email" name="user_email" placeholder="email"/>
            <textarea name="message" placeholder="message" rows="6" />
            <input type="submit" value="send" className="send-button"/>
          </form>
        </div>
      </div>
    </section>
  )
}