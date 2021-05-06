import "./Footer.css";
import FooterLinks from "../../components/FooterLinks/FooterLinks";
import { linkData } from "../../services/linkData.js"

export default function Footer() {
  const iconsJSX = linkData.map((link, index) =>
    <FooterLinks
      key={index}
      href={link.href}
      src={link.src}
      alt={link.alt}
    />
  )
  return (  
    <footer>
      <p className="footer-copyright">
        ©2021 Molly Exten
      </p>
      <div className="footer-icon-div">
        <ul className="footer-links">
          {iconsJSX}
        </ul>
      </div>
    </footer>
  )
}