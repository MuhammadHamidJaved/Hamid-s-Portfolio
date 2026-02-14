'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const highlights = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'CS Student',
      text: 'Pursuing Computer Science at NUCES (FAST), Batch 2026. Focused on Machine Learning, AI, and Software Engineering.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Industry Experience',
      text: 'Associate Software Engineer at DevNuts since August 2025 — developing web apps and assisting on mobile applications with modern tech stacks.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Builder & Learner',
      text: 'Passionate about bridging ML research with real-world software — from AI chatbots and finance apps to full-stack platforms.'
    }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold">About Me</h2>
          <p className="lead text-muted">A brief look at my journey and what drives me</p>
        </div>
        <Row className="g-3">
          {highlights.map((item, i) => (
            <Col md={4} key={i}>
              <Card className="h-100">
                <Card.Body className="p-4">
                  <i className={`${item.icon} fa-lg mb-3 d-block`} style={{ color: 'var(--color-accent)' }}></i>
                  <h5 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.title}</h5>
                  <p className="mb-0" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
