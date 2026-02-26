import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p><a href="mailto:info@thewayimmigration.ca">info@thewayimmigration.ca</a></p>
              <p><a href="tel:+14032656641">+1 (403) 265-6641</a></p>
            </div>
            <div className="mb-3">
              <h3>How Can We Help You?</h3>
              <ul>
                <li><a href="#consultation">Consultation</a></li>
                <li><a href="#filemanagement">File Management</a></li>
                <li><a href="#filereview">File Review</a></li>
              </ul>
            </div>
            <div className="mb-3">
              <h3>Immigration Information</h3>
              <ul>
                <li><a href="#blog">Immigration Blog</a></li>
              </ul>
            </div>
            <a href="#consultation" className="book-consultation-footer">
              Book A Consultation
            </a>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h3>Program Options</h3>
            <ul>
              <li><a href="#express-entry">Express Entry</a></li>
              <li><a href="#pnp">Provincial Nominee Programs</a></li>
              <li><a href="#family">Family Sponsorship Canada</a></li>
              <li><a href="#citizenship">Canadian Citizenship</a></li>
              <li><a href="#permanent-residency">Permanent Residency</a></li>
              <li><a href="#student-visa">Student Visa</a></li>
              <li><a href="#work-permit">Work Permit</a></li>
              <li><a href="#visit">Visit</a></li>
              <li><a href="#super-visa">Super Visa</a></li>
              <li><a href="#pnp-programs">PNP Programs</a></li>
            </ul>
            <div className="footer-social">
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h3>About</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <div className="map-container">
              <h4>CALGARY OFFICE</h4>
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Calgary Office Map"
                className="footer-map"
              />
              <p>8 Varsity Estates Cir NW Suite 300, Calgary, AB T3A 2Z3, Canada</p>
              <a href="#calgary" className="map-btn">Calgary Services</a>
            </div>
            <div className="map-container">
              <h4>CANMORE OFFICE</h4>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Canmore Office Map"
                className="footer-map"
              />
              <p>50 Lincoln Park Unit 201, Canmore, AB T1W 3E9, Canada</p>
              <a href="#canmore" className="map-btn">Canmore Services</a>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved | The Way Immigration | In Partnership with{' '}
            <a href="#ccc">CCC</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
