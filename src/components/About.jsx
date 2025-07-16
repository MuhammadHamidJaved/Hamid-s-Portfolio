import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold">About Me</h2>
            <p className="lead text-muted">Get to know more about my journey and expertise</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">
                  <i className="fas fa-graduation-cap text-primary me-2"></i>
                  Computer Science Student
                </h3>
                <p>
                  Currently pursuing Computer Science at NUCES (FAST), Batch 2026. Specializing in 
                  Machine Learning, AI, and Software Engineering with hands-on experience in 
                  building intelligent systems and full-stack applications.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">
                  <i className="fas fa-briefcase text-primary me-2"></i>
                  Software Development Intern
                </h3>
                <p>
                  Currently interning at Analyzinn Solutions, gaining valuable industry experience 
                  in software development. Working with modern technologies including React, Node.js, 
                  and professional development practices in a collaborative environment.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">My Journey</h3>
                <p className="mb-3">
                  I'm a dedicated Computer Science student at NUCES (FAST) who believes in the power of 
                  technology to transform lives. Currently interning at Analyzinn Solutions, I combine 
                  academic learning with practical industry experience. My journey bridges machine learning 
                  research with real-world software development.
                </p>
                <p className="mb-0">
                  When I'm not coding or studying algorithms, you'll find me exploring new 
                  technologies, building personal projects like AI chatbots and finance apps, and constantly 
                  learning through online courses and tutorials to stay updated with the latest trends.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
