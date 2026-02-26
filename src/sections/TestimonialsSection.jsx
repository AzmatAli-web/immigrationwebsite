import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: 'Worked Tirelessly',
      quote: 'Fran worked tirelessly to help me achieve my goal which I had from the day I started working abroad to have a better future together with my family. I am very thankful to her and The Way Immigration for all their hard work and support throughout my immigration process.',
      author: 'Washburn & Family',
      location: 'Jamaica',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      title: 'Would Highly Recommend',
      quote: 'Our Complicated Case was handled in a very professional and efficient way by Fran. So reliable and I have been recommending their services to anyone who needs help with their immigration issues!',
      author: 'Rufus, Marie & Family',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <Container>
        <h2>We've Helped Thousands Like You Immigrate to Canada</h2>
        <p className="intro">
          We are licensed Canadian immigration consultants, with decades of experience and one of the highest approval rates in the industry. We are ready to assist you with understanding your immigration options, or any Canada immigration matters, including work permits, student permits, visitor visas, Express Entry, family sponsorship, citizenship, business immigration and hiring foreign workers.
        </p>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={6} key={index} className="mb-4">
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="#testimonials" className="read-more-link">
            Read More Success Stories
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
