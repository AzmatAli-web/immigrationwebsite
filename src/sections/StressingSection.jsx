import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StressingSection = () => {
  return (
    <section className="stressing-section">
      <Row className="stressing-row g-0">
        <Col lg={6} className="stressing-image-col">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Immigration Consultant" 
            className="stressing-image"
          />
        </Col>
        <Col lg={6} className="stressing-content-col">
          <div className="stressing-content">
            <h2>Are You Stressing About Immigration to Canada?</h2>
            <p>Let us help.</p>
            <p>We have decades of experience & thousands of approvals.</p>
            <p className="highlight">Your Future is Secure with Us</p>
            <a href="#start" className="start-now-btn">
              Start Now
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StressingSection;
