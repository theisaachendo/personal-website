import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to My Business
          </h1>
          <p className="hero-subtitle">
            Professional services tailored to meet your needs. 
            Let's work together to achieve your goals.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">
              Get Started
            </button>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <p>Your Image Here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
