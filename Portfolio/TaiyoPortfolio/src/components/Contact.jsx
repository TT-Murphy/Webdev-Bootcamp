import useReveal from '../hooks/useReveal'
import './Contact.css'

// CUSTOMIZE: replace the `href` values. Add more objects to show more links.
// `icon` is the SVG path data for a 24x24 icon.
const contactLinks = [
  {
    label: 'Email',
    text: 'taiyo.e.murphy@gmail.com',
    href: 'mailto:taiyo.e.murphy@gmail.com',
    icon: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.5 2v.4l7.5 5.1 7.5-5.1V7h-15Z',
  },
  {
    label: 'GitHub',
    text: 'github.com/TT-Murphy',
    href: 'https://github.com/TT-Murphy',
    icon: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/Taiyo-Murphy',
    href: 'https://www.linkedin.com/in/Taiyo-Murphy',
    icon: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z',
  },
]

function Contact() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="contact" className="section contact">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Contact</h2>
        <p className="contact-message">
          I am always open to new opportunities, collaborations, or just a chat about tech. Feel free
          to reach out!
        </p>

        <ul className="contact-links">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
                  <path d={link.icon} />
                </svg>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.text}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
