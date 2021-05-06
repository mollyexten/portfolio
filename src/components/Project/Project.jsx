import "./Project.css";

export default function Project(props) {
  const {
    image,
    alt,
    title,
    description,
    site,
    github
  } = props
  return (
    <div className="project-card">
      <img src={image} alt={alt} className="project-image"/>
      <article className="project-description">
        <h3>{title}</h3>
        <p className="project-paragraph">{description}</p>
        <div className="project-links">
          <a href={site} className="link-button">link to deployed site</a>
          <a href={github} className="link-button">link to GitHub repo</a>
        </div>
      </article>
    </div>
  )
}