import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Container>
        <Row className="align-items-center">
          <Col md={3} className="d-none d-md-block">
            <a href="#corporate" className="for-companies-btn">
              For Canadian Companies
            </a>
          </Col>
          <Col md={9} className="text-end">
            <div className="nav-links d-none d-md-inline">
              <a href="#about" className="nav-link d-inline-block">About Us</a>
              <a href="#blog" className="nav-link d-inline-block">Blog</a>
              <a href="#testimonials" className="nav-link d-inline-block">Testimonials</a>
              <a href="#contact" className="nav-link d-inline-block">Contact Us</a>
            </div>
            <a href="tel:4032656641" className="phone-link">
              (403) 265-6641
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
