import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col lg={6} className="mb-3 mb-lg-0">
            <h5 className="mb-2">Muhammad Hamid Javed</h5>
            <p className="mb-0 text-muted">
              ML Student & Full Stack Developer
            </p>
            <p className="small text-muted">
              Building the future with AI and innovative web solutions
            </p>
          </Col>
          
          <Col lg={3} className="mb-3 mb-lg-0">
            <h6 className="mb-2">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#skills" className="text-muted text-decoration-none">Skills</a></li>
              <li><a href="#resume" className="text-muted text-decoration-none">Resume</a></li>
              <li><a href="#projects" className="text-muted text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={3}>
            <h6 className="mb-2">Connect</h6>
            <div className="contact-info mb-2">
              <p className="small text-muted mb-1">
                <i className="fas fa-phone me-2"></i>
                +92 321 1418038
              </p>
              <p className="small text-muted mb-2">
                <i className="fas fa-envelope me-2"></i>
                hamidrana1975@gmail.com
              </p>
            </div>
            <div className="social-links">
              <a 
                href="https://github.com/MuhammadHamidJaved" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted me-3"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted me-3"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a 
                href="mailto:hamidrana1975@gmail.com" 
                className="text-muted"
              >
                <i className="fas fa-envelope fa-lg"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row>
          <Col lg={12} className="text-center">
            <p className="mb-0 text-muted small">
              © {currentYear} Muhammad Hamid Javed. All rights reserved. 
              Built with React & Bootstrap.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
