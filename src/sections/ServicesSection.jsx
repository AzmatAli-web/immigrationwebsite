import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesSection = () => {
  const services = [
    {
      title: 'Express Entry',
      link: '#express-entry'
    },
    {
      title: 'Family Sponsorship',
      link: '#family-sponsorship'
    },
    {
      title: 'Permanent Residency',
      link: '#permanent-residency'
    },
    {
      title: 'Canadian Citizenship',
      link: '#citizenship'
    }
  ];

  return (
    <section className="services-section" id="services">
      <Container>
        <h2>Canadian Immigration Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="service-card">
                <h3>{service.title}</h3>
                <a href={service.link} className="service-btn">
                  Learn More
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
