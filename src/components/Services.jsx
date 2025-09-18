import './Services.css'

function Services() {
  const services = [
    {
      title: "Consulting",
      description: "Strategic guidance to help your business grow and optimize operations.",
      icon: "💼"
    },
    {
      title: "Development",
      description: "Custom solutions built with modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Design",
      description: "Beautiful, user-friendly designs that enhance your brand and user experience.",
      icon: "🎨"
    },
    {
      title: "Support",
      description: "Ongoing maintenance and support to keep your systems running smoothly.",
      icon: "🔧"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Comprehensive solutions for your business needs</p>
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
