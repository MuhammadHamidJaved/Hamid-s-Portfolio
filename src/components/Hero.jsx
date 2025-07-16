import React, { useState } from 'react';
import image from '../../public/assets/Profile.jpeg'; // Adjust the path as necessary
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  const profileImageUrl = image; 
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col lg={8} className="text-center text-lg-start">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Muhammad Hamid Javed</span>
              </h1>
              <h2 className="h3 mb-4 text-muted">
                ML Student at NUCES (FAST) • Intern at Analyzinn Solutions
              </h2>
              <p className="lead mb-4">
                Computer Science student passionate about Machine Learning and Full Stack Development. 
                Currently interning at Analyzinn Solutions and building innovative AI-powered applications 
                that solve real-world problems.
              </p>
              <div className="profile-info mb-4">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                  <span className="badge bg-light text-dark me-2 mb-2 p-2">
                    <i className="fas fa-graduation-cap me-1"></i>
                    NUCES (FAST) - Batch 2026
                  </span>
                  <span className="badge bg-light text-dark me-2 mb-2 p-2">
                    <i className="fas fa-building me-1"></i>
                    Intern at Analyzinn Solutions
                  </span>
                  <span className="badge bg-light text-dark mb-2 p-2">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    Lahore, Pakistan
                  </span>
                </div>
              </div>
              <div className="hero-buttons mb-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="#projects" 
                  className="me-3 mb-2"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  href="#contact"
                  className="mb-2"
                >
                  Get In Touch
                </Button>
              </div>
              <div className="social-links">
                <a 
                  href="https://github.com/MuhammadHamidJaved" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link me-3"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link me-3"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a 
                  href="mailto:hamid@example.com" 
                  className="social-link"
                >
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <div className="hero-image">
              {!imageError ? (
                <img 
                  src={profileImageUrl}
                  alt="Muhammad Hamid Javed - Profile"
                  className="profile-image img-fluid rounded-circle shadow-lg"
                  onError={handleImageError}
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    border: '4px solid #20c997'
                  }}
                />
              ) : (
                <div className="profile-placeholder">
                  <i className="fas fa-user fa-5x text-primary"></i>
                  <p className="mt-3 text-muted">Add your profile image to /src/assets/profile.jpg</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
