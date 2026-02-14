'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skillsRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            if (entry.target.classList.contains('skills-section')) {
              setTimeout(() => setAnimatedSkills(true), 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: "fas fa-robot",
      skills: [
        { name: "Python", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "NLP", level: 75 },
        { name: "TensorFlow / Keras", level: 70 },
        { name: "Data Analysis", level: 80 },
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-code",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      title: "Programming & Mobile",
      icon: "fas fa-mobile-alt",
      skills: [
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 80 },
        { name: "C++", level: 75 },
        { name: "OOP", level: 85 },
        { name: "DSA", level: 80 },
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", 
    "Postman", "MySQL Workbench", "Bootstrap", "Ant Design", "REST APIs", "Agile"
  ];

  return (
    <section id="skills" className="py-5 skills-section" ref={skillsRef}>
      <Container>
        <div className="text-center mb-4 animate-on-scroll">
          <h2 className="display-5 fw-bold">Skills & Technologies</h2>
          <p className="lead text-muted">Technologies I use to bring ideas to life</p>
        </div>
        
        <Row className="g-3 mb-4">
          {skillCategories.map((category, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className={`h-100 animate-on-scroll stagger-${index + 1}`}>
                <Card.Body className="p-3">
                  <div className="text-center mb-3">
                    <i className={`${category.icon} fa-3x`}></i>
                    <h4>{category.title}</h4>
                  </div>
                  {category.skills.map((skill, i) => (
                    <div key={i} className="mb-2">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={animatedSkills ? skill.level : 0}
                        variant="success" 
                        className="skills-progress-bar"
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="bg-dark text-white animate-on-scroll">
          <Card.Body className="p-4 text-center">
            <h5 className="mb-3" style={{ fontSize: '0.95rem', fontWeight: 600 }}>Tools & Platforms</h5>
            <div className="skills-tools-grid">
              {tools.map((tool, index) => (
                <span key={index} className="badge bg-success mb-1">
                  {tool}
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Skills;
