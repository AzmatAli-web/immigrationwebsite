import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="main-navbar sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo-container">
            <svg className="logo-icon" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 5L30 15L40 12L35 22L45 28L35 32L38 42L28 35L22 45L18 35L8 40L12 28L5 22L15 18L12 8L22 12L25 5Z" fill="#8B0000"/>
              <path d="M25 15L28 22L35 20L30 26L35 32L28 30L25 37L22 30L15 32L20 26L15 20L22 22L25 15Z" fill="white"/>
            </svg>
            <div className="logo-text">
              <span className="logo-title">THE WAY</span>
              <span className="logo-subtitle">IMMIGRATION</span>
              <span className="logo-tagline">Regulated Canadian Immigration Consultants</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#immigrate">Canada Immigration</Nav.Link>
            <Nav.Link href="#family">Family Sponsorship</Nav.Link>
            <Nav.Link href="#citizenship">Canadian Citizenship</Nav.Link>
            <NavDropdown title="Study" id="study-dropdown">
              <NavDropdown.Item href="#student-visa">Student Visa Canada</NavDropdown.Item>
              <NavDropdown.Item href="#study-permit">Study Permit</NavDropdown.Item>
              <NavDropdown.Item href="#post-grad">Post-Graduation Work Permit</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Work" id="work-dropdown">
              <NavDropdown.Item href="#work-permit">Work Permit</NavDropdown.Item>
              <NavDropdown.Item href="#lmia">LMIA</NavDropdown.Item>
              <NavDropdown.Item href="#express-entry">Express Entry</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Invest" id="invest-dropdown">
              <NavDropdown.Item href="#business">Business Immigration</NavDropdown.Item>
              <NavDropdown.Item href="#start-up">Start-Up Visa</NavDropdown.Item>
              <NavDropdown.Item href="#self-employed">Self-Employed</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#visit">Visit</Nav.Link>
            <NavDropdown title="Locations" id="locations-dropdown">
              <NavDropdown.Item href="#calgary">Calgary Office</NavDropdown.Item>
              <NavDropdown.Item href="#canmore">Canmore Office</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <a href="#consultation" className="book-consultation-btn">
            Book a Consultation
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
