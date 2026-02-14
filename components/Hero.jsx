'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullName = 'Muhammad Hamid Javed';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="min-vh-100 align-items-center py-5">
          <Col lg={7} className="text-center text-lg-start">
            <div className="hero-content">
              <p className={`mb-2 ${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}
                 style={{ fontSize: '0.85rem', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                Associate Software Engineer &amp; ML Student
              </p>
              <h1 className="mb-3">
                <span className="typewriter-text" style={{ color: 'var(--color-accent)' }}>
                  {displayedName}
                  {!isTypingComplete && <span className="cursor">|</span>}
                </span>
              </h1>
              <p className={`lead mb-4 ${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}>
                Associate Software Engineer at DevNuts, working on web and mobile apps. 
                CS student at NUCES (FAST) passionate about Machine Learning and building 
                AI-powered applications that solve real-world problems.
              </p>
              <div className={`d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4 ${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}>
                <span className="badge">
                  <i className="fas fa-graduation-cap me-1"></i> FAST NUCES — 2026
                </span>
                <span className="badge">
                  <i className="fas fa-briefcase me-1"></i> DevNuts
                </span>
                <span className="badge">
                  <i className="fas fa-map-marker-alt me-1"></i> Lahore, PK
                </span>
              </div>
              <div className={`hero-buttons d-flex gap-2 justify-content-center justify-content-lg-start mb-4 ${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}>
                <Button variant="primary" href="#projects">
                  View My Work
                </Button>
                <Button variant="outline-primary" href="#contact">
                  Get In Touch
                </Button>
              </div>
              <div className={`social-links d-flex justify-content-center justify-content-lg-start ${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}>
                <a href="https://github.com/MuhammadHamidJaved" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="mailto:hamidrana1975@gmail.com" className="social-link">
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} className="text-center mt-4 mt-lg-0">
            <div className={`${isTypingComplete ? 'show-subtitle' : 'hide-subtitle'}`}>
              <Image 
                src="/assets/Profile.jpeg"
                alt="Muhammad Hamid Javed"
                width={280}
                height={280}
                className="profile-image img-fluid rounded-circle"
                style={{
                  width: '280px',
                  height: '280px',
                  objectFit: 'cover',
                }}
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
