import ProjectCard from './ProjectCard'
import useReveal from '../hooks/useReveal'
import projects from '../data/projects'
import './Projects.css'

// CUSTOMIZE: edit src/data/projects.js, not this file.
function Projects() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="projects" className="section projects">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {/* .map() creates one <ProjectCard> per project; `project` is passed down as a prop */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
