import './Footer.css'

// CUSTOMIZE: your name. The year updates automatically.
const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {year} Taiyo Murphy. All rights reserved.</p>
    </footer>
  )
}

export default Footer
