import "./Projects.css";
import Project from "../../components/Project/Project";
import { projectData } from "../../services/projectData.js";

export default function Projects() {
  const projectJSX = projectData.map((project, index) =>
    <Project
      key={index}
      image={project.image}
      alt={project.alt}
      title={project.title}
      description={project.description}
      site={project.site}
      github={project.github}
    />
  )
  
  return (
    <section>
      <h2>
        <span id="projects"> &nbsp; </span>
        Projects
      </h2>
      <p>Examples of recent projects that I've worked on:</p>
      <div className="projects-div">
        {projectJSX}
      </div>
    </section>
  )
}