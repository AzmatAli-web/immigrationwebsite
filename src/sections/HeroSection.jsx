import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="hero-content">
              <h1>Canadian Immigration</h1>
              <p>Easier. Faster. Better.</p>
              <a href="#services" className="learn-more-btn">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
