import './Hero.css'

// CUSTOMIZE: name, tagline, intro text, and the photo at public/me.JPEG
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1>Taiyo E. Murphy</h1>
          <p className="hero-tagline">Computer Science Undergraduate | Web Developer</p>
          <p className="hero-intro">
            I am a freshman computer science undergraduate at UMD with a strong
             interest in web development, data science, and artificial intelligence.
          </p>
          <div className="hero-buttons">
            {/* Plain anchors: the browser + CSS handle the smooth scrolling */}
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/me.JPEG" alt="Portrait of Taiyo Murphy" />
        </div>
      </div>
    </section>
  )
}

export default Hero
