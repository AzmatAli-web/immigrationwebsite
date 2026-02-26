import React from 'react';
import { Container } from 'react-bootstrap';

const CTASection = () => {
  return (
    <section className="cta-section">
      <Container>
        <h2>Are You Ready</h2>
        <h3>To Find The Way</h3>
        <h3>To Successful Immigration?</h3>
        <p>It all starts with a one-on-one consultation with a Canadian immigration expert.</p>
        <a href="#consultation" className="cta-start-btn">
          Start Now
        </a>
        <p>Or call us at</p>
        <a href="tel:4032656641" className="cta-phone">
          (403) 265-6641
        </a>
      </Container>
    </section>
  );
};

export default CTASection;
