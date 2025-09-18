import './Hero.css'
import Galaxy from './Galaxy'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          transparent={true}
        />
      </div>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Website <span className="highlight">Brought to Life</span>
            </h1>
            <p className="hero-subtitle">
              Leading full-stack developers specializing in SaaS and AI platforms, 
              delivering affordable and reliable website development services.
            </p>
            <div className="hero-buttons">
              <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">
                See our work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
