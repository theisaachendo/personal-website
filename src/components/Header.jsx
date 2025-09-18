import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h2>Your Name</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="nav-link">Services</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
