import ImageCarousel from './ImageCarousel'
import useReveal from '../hooks/useReveal'
import skills from '../data/skills'
import './About.css'

// CUSTOMIZE: the biography text below, plus src/data/skills.js and src/data/carouselImages.js
function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="about" className="section about">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I was born and raised in the DC area, and at a young age I participated
              in FLL (First Lego League) competitions, which sparked my interest in robotics 
              and Python programming.
            </p>
            <p>
              Outside of coding I enjoy Swimming, Drawing, and Sports photography. 
            </p>

            <h3>Skills &amp; Technologies</h3>
            <ul className="skills">
              {/* .map() turns each string in the skills array into a list item */}
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <ImageCarousel />
        </div>
      </div>
    </section>
  )
}

export default About
