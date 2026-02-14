'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="mb-3 mb-lg-0">
            <h5 className="mb-1">
              MHJ<span style={{ color: 'var(--color-accent)' }}>.</span>
            </h5>
            <p className="mb-0 small" style={{ color: '#94a3b8' }}>
              Associate Software Engineer & ML Student
            </p>
          </Col>
          
          <Col lg={4} className="mb-3 mb-lg-0 text-center">
            <div className="d-flex justify-content-center gap-1">
              {[
                { href: 'https://github.com/MuhammadHamidJaved', icon: 'fab fa-github' },
                { href: 'https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/', icon: 'fab fa-linkedin' },
                { href: 'mailto:hamidrana1975@gmail.com', icon: 'fas fa-envelope' }
              ].map((link, i) => (
                <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-muted">
                  <i className={`${link.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </Col>
          
          <Col lg={4} className="text-lg-end text-center">
            <p className="mb-0 small" style={{ color: '#64748b' }}>
              &copy; {currentYear} Muhammad Hamid Javed
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
