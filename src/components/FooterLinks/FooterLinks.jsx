import "./FooterLinks.css";

export default function FooterLinks(props) {
  const {
    href,
    src,
    alt
  } = props

  return (
    <li>
      <a href={href}>
        <img src={src} alt={alt} className="icon-link"/>
      </a>
    </li>
  )
}