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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hamidrana1975@gmail.com",
      link: "mailto:hamidrana1975@gmail.com"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "MuhammadHamidJaved",
      link: "https://github.com/MuhammadHamidJaved"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Muhammad Hamid Javed",
      link: "https://www.linkedin.com/in/muhammad-hamid-javed-6aa8412b1/"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Pakistan",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="pb-5" style={{ paddingTop: '100px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold">Get In Touch</h2>
            <p className="lead text-muted">
              Let's discuss your next project or collaboration opportunity
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={8} className="mb-4">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Send Me a Message</h4>
                
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or idea..."
                    />
                  </Form.Group>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-100">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Contact Information</h4>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item mb-3 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <div className="contact-icon me-3">
                        <i className={`${info.icon} fa-lg text-primary`}></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{info.title}</h6>
                        <a 
                          href={info.link} 
                          className="text-decoration-none"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-3 bg-success text-white rounded text-center">
                  <h6 className="mb-2">
                    <i className="fas fa-clock me-2"></i>
                    Response Time
                  </h6>
                  <p className="mb-0 small">
                    I typically respond within 24 hours
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
