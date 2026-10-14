import { useEffect, useState } from 'react'
import './Navbar.css'

// CUSTOMIZE: `id` must match the id of the section it scrolls to.
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume / CV' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  // State: is the mobile menu open? Which section is currently on screen?
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Watch each section and mark the one near the middle of the screen as active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <nav className="navbar-inner container" aria-label="Main navigation">
        <a href="#home" className="navbar-logo">
          TM
        </a>

        {/* Event handler: clicking toggles the menu state */}
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
        </button>

        <ul id="nav-links" className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {/* Rendering an array: one <li> per entry in `links` (key helps React track items) */}
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'active' : ''}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
