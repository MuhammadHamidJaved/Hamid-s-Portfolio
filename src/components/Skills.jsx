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
            // Trigger progress bar animations when skills section comes into view
            if (entry.target.classList.contains('skills-section')) {
              setTimeout(() => setAnimatedSkills(true), 500);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const animatedElements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    
    // Also observe the skills section itself
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: "fas fa-robot",
      skills: [
        { name: "Python", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "TensorFlow/Keras", level: 70 },
        { name: "Data Analysis", level: 80 },
        { name: "AI Model Development", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-globe",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 80 },
        { name: "Ant Design", level: 75 }
      ]
    },
    {
      title: "Programming & Mobile",
      icon: "fas fa-mobile-alt",
      skills: [
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 80 },
        { name: "C++", level: 75 },
        { name: "Python", level: 85 },
        { name: "Object-Oriented Programming", level: 85 },
        { name: "Data Structures & Algorithms", level: 80 }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", 
    "Postman", "MySQL Workbench", "Bootstrap", "Ant Design", "RESTful APIs", "Agile Development"
  ];

  return (
    <section id="skills" className="pb-5 skills-section" style={{ paddingTop: '100px' }} ref={skillsRef}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5 animate-on-scroll">
            <h2 className="display-5 fw-bold">Skills & Technologies</h2>
            <p className="lead text-muted">Technologies I work with to bring ideas to life</p>
          </Col>
        </Row>
        
        <Row>
          {skillCategories.map((category, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <Card className={`border-0 shadow-sm h-100 animate-on-scroll stagger-${index + 1}`} style={{animationDelay: `${index * 0.2}s`}}>
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <i className={`${category.icon} fa-3x text-primary mb-2 pulse-animation`} style={{animationDelay: `${index * 0.5}s`}}></i>
                    <h4>{category.title}</h4>
                  </div>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={animatedSkills ? skill.level : 0}
                        variant="success" 
                        className="skills-progress-bar"
                        style={{
                          '--progress-width': `${skill.level}%`,
                          height: '10px',
                          borderRadius: '5px'
                        }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <Card className="border-0 shadow-sm bg-dark text-white">
              <Card.Body className="p-4 text-center">
                <h4 className="mb-3">Tools & Technologies</h4>
                <div className="skills-tools-grid">
                  {tools.map((tool, index) => (
                    <span key={index} className="badge bg-success text-white me-2 mb-2 p-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
