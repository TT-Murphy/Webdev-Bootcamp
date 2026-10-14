import './ProjectCard.css'

// Props: the parent passes a `project` object; we destructure the fields we need.
function ProjectCard({ project }) {
  const { name, image, description, technologies, github, demo } = project

  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={`Screenshot of ${name}`} />
      </div>

      <div className="project-body">
        <h3>{name}</h3>
        <p>{description}</p>

        <ul className="project-tech" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-links">
          {/* Conditional rendering: only show a link if the URL is not empty */}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
