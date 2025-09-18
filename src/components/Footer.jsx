import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Your Name</h3>
            <p>Professional services to help your business thrive.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Home</button></li>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="footer-link">About</button></li>
              <li><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Services</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>your.email@example.com</p>
            <p>(555) 123-4567</p>
            <p>Your City, State</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
