import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experienced <span className="highlight">Full-Stack</span> Developers</h2>
          <p className="section-subtitle">With 200+ projects delivered, we offer fast, reliable web development and unlimited revisions to bring your vision to life.</p>
        </div>
        
        <div className="about-content">
          <div className="about-stats">
            <div className="stat">
              <h3>200+</h3>
              <p>Projects Launched</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
          
          <div className="about-text">
            <h3>200+ Projects Launched</h3>
            <p>
              With over 200 successful projects, we bring experience, creativity, and reliability to every new website. 
              Our team combines technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
            <button className="btn btn-primary">Get started now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
