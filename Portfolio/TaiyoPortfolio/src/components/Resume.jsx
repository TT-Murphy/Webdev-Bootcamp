import useReveal from '../hooks/useReveal'
import { education, experience, achievements } from '../data/experience'
import './Resume.css'

// A small reusable piece: renders one titled list of entries.
// Props: `title` (heading text) and `items` (array from src/data/experience.js).
function ResumeGroup({ title, items }) {
  return (
    <div className="resume-group">
      <h3>{title}</h3>
      <ul className="timeline">
        {items.map((item) => (
          <li key={item.id}>
            <span className="timeline-period">{item.period}</span>
            <h4>{item.title}</h4>
            <p className="timeline-place">{item.place}</p>
            <p>{item.details}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// CUSTOMIZE: intro text below, entries in src/data/experience.js, and public/resume.pdf
function Resume() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="resume" className="section resume">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Resume / CV</h2>

        <p className="resume-intro">
          Download my 
          resume for more detail about my experience and current work:
        </p>

        <div className="resume-buttons">
          <a href="/Taiyo_Murphy_Resume_Refined.pdf" download className="btn">
            Download Resume
          </a>
          <a href="/Taiyo_Murphy_Resume_Refined.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Preview Resume
          </a>
        </div>

        <div className="resume-groups">
          <ResumeGroup title="Education" items={education} />
          <ResumeGroup title="Experience" items={experience} />
          <ResumeGroup title="Achievements" items={achievements} />
        </div>
      </div>
    </section>
  )
}

export default Resume
