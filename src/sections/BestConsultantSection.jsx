import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BestConsultantSection = () => {
  return (
    <section className="best-consultant-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h2>
              Best Immigration Consultant{' '}
              <a href="#calgary" className="location-link">Calgary</a>
              {' & '}
              <a href="#canmore" className="location-link">Canmore</a>
            </h2>
            <p>Your Journey to Canada Just Got Easier</p>
            <p>Work With Us for Simple and Successful Immigration</p>
          </Col>
          <Col lg={4} className="text-end">
            <svg className="rcic-logo" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#000" strokeWidth="2"/>
              <path d="M40 15 L45 30 L60 30 L48 40 L53 55 L40 45 L27 55 L32 40 L20 30 L35 30 Z" fill="#000"/>
              <text x="85" y="35" fontSize="24" fontWeight="bold" fill="#000">RCIC</text>
              <text x="85" y="55" fontSize="10" fill="#000">Regulated Canadian</text>
              <text x="85" y="67" fontSize="10" fill="#000">Immigration Consultant</text>
            </svg>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestConsultantSection;
