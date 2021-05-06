import "./ContactLinks.css";

export default function ContactLinks(props) {
  const {
    name,
    href,
    url
  } = props
  return (
          <li className="contact-info-link">{ name }: &nbsp;
            <br className="link-new-line"/><span> 
              <a href={href} target="_blank" className="contact-url">{url}</a>
            </span >
          </li >
)
}