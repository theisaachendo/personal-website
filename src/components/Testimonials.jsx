import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "EVOLVION delivered an exceptional website that perfectly captured our brand vision. The attention to detail and professional approach exceeded our expectations.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      text: "Working with EVOLVION was a game-changer for our business. Their full-stack development expertise and unlimited revisions policy made the entire process seamless.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      text: "The AI/ML integration they implemented has transformed how we interact with our customers. Highly recommend their cutting-edge solutions.",
      avatar: "ER"
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our <span className="highlight">Clients</span> Say</h2>
          <p className="section-subtitle">With hundreds of websites completed, we bring a proven track record of developing websites and delivering exceptional solutions for clients across industries.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
                <div className="quote-icon">"</div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
