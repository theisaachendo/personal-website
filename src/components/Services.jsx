import './Services.css'

function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "We deliver complete solutions, from design to development and AI/ML, with a proven track record of creating impactful, high-performing websites.",
      icon: "💻"
    },
    {
      title: "Quick Delivery",
      description: "With over a decade of experience, we deliver innovative, timeless designs with a focus on customer satisfaction and speed.",
      icon: "⚡"
    },
    {
      title: "Unlimited Revisions",
      description: "With unlimited revisions and dedicated support, we ensure your vision and website is brought to life exactly as you imagine.",
      icon: "🔄"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Complete <span className="highlight">Website</span> Development</h2>
          <p className="section-subtitle">We specialize in UI/UX design, front-end and back-end development, and cutting-edge AI/ML solutions.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
