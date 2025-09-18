import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind the business</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              With years of experience in the industry, I'm passionate about delivering 
              exceptional results for my clients. My approach combines technical expertise 
              with a deep understanding of what businesses need to succeed.
            </p>
            <p>
              I believe in building long-term relationships and providing personalized 
              solutions that drive real value. Let's discuss how I can help you achieve 
              your objectives.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-placeholder">
              <p>Professional Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
