import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AdditionalServices = () => {
  const additionalServices = [
    {
      title: 'Student Visa Canada',
      link: '#student-visa'
    },
    {
      title: 'Professional & Skilled Workers',
      link: '#work-permit'
    },
    {
      title: 'Visitor Visa Canada',
      link: '#visitor-visa'
    },
    {
      title: 'Provincial Nominee Programs',
      link: '#pnp'
    }
  ];

  return (
    <section className="additional-services">
      <Container>
        <Row>
          {additionalServices.map((service, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="additional-service-card">
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

export default AdditionalServices;
