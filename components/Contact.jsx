'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowAlert(false), 4000);
  };

  const contactInfo = [
    { icon: "fas fa-envelope", title: "Email", value: "hamidrana1975@gmail.com", link: "mailto:hamidrana1975@gmail.com" },
    { icon: "fab fa-github", title: "GitHub", value: "MuhammadHamidJaved", link: "https://github.com/MuhammadHamidJaved" },
    { icon: "fab fa-linkedin", title: "LinkedIn", value: "Muhammad Hamid Javed", link: "https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/" },
    { icon: "fas fa-map-marker-alt", title: "Location", value: "Lahore, Pakistan", link: "#" }
  ];

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold">Get In Touch</h2>
          <p className="lead text-muted">Let's discuss your next project or collaboration</p>
        </div>

        <Row className="g-3">
          <Col xs={12} lg={7}>
            <Card>
              <Card.Body className="p-4">
                <h5 className="mb-3" style={{ fontSize: '1rem', fontWeight: 600 }}>Send a Message</h5>
                
                {showAlert && (
                  <Alert variant="success" className="py-2" style={{ fontSize: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Thanks! I'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-2">
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-2">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..." />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="w-100">
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={5}>
            <Card>
              <Card.Body className="p-4">
                <h5 className="mb-3" style={{ fontSize: '1rem', fontWeight: 600 }}>Contact Info</h5>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item mb-2 p-3">
                    <div className="d-flex align-items-center">
                      <i className={`${info.icon} me-3`} style={{ color: 'var(--color-accent)', width: '20px', textAlign: 'center' }}></i>
                      <div>
                        <h6 className="mb-0">{info.title}</h6>
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-3 p-3 text-center" style={{ background: 'var(--color-accent)', borderRadius: 'var(--radius-sm)', color: '#fff' }}>
                  <p className="mb-0" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                    <i className="fas fa-clock me-1"></i> Typically respond within 24 hours
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
