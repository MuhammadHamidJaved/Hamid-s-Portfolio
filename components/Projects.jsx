'use client';

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animated');
        });
      },
      { threshold: 0.1 }
    );
    const els = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Medical Chatbot",
      description: "AI-powered medical chatbot using RAG architecture with Google Gemini AI and Pinecone vector store. Features PDF processing, conversational AI, and Streamlit interface.",
      icon: "fas fa-user-md",
      technologies: ["Python", "Gemini AI", "Pinecone", "RAG", "LangChain"],
      github: "https://github.com/MuhammadHamidJaved/medical-chatbot",
      category: "AI & Healthcare"
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      description: "ML-powered resume analysis platform with multiple trained models for scoring and experience prediction. Features cover letter generation via OpenAI API.",
      icon: "fas fa-file-alt",
      technologies: ["Python", "Streamlit", "ML", "OpenAI", "Scikit-learn"],
      github: "https://github.com/MuhammadHamidJaved/AI-Resume-Analyzer",
      category: "AI & Career"
    },
    {
      id: 3,
      title: "BudgetBuddy",
      description: "Android personal finance app with expense tracking, budget alerts, visual analytics, multi-currency support, and Firebase real-time notifications.",
      icon: "fas fa-chart-pie",
      technologies: ["Kotlin", "Android", "Firebase", "MPAndroidChart"],
      github: "https://github.com/MuhammadHamidJaved/BudgetBuddy",
      category: "Mobile App"
    },
    {
      id: 4,
      title: "Streamify",
      description: "Streaming platform with Django backend and Next.js frontend, featuring social media capabilities, real-time communication, and TMDB integration.",
      icon: "fas fa-play-circle",
      technologies: ["Django", "Next.js", "PostgreSQL", "WebSocket"],
      github: "https://github.com/MuhammadHamidJaved/Streamify1",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Ticket Management System",
      description: "Multi-service booking platform for movies, buses, trains, flights, and events with React frontend, Node.js backend, and SQL Server.",
      icon: "fas fa-ticket-alt",
      technologies: ["React", "Node.js", "Express", "SQL Server"],
      github: "https://github.com/MuhammadHamidJaved/Ticket-Management-System",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Life Expectancy Prediction",
      description: "ML project using WHO health statistics with multiple regression models including Random Forest and GridSearchCV optimization.",
      icon: "fas fa-chart-line",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com/MuhammadHamidJaved/Life-Expectancy-Prediction-Model",
      category: "Data Science"
    },
    {
      id: 7,
      title: "Facial Emotion Recognition",
      description: "Deep learning project for detecting emotions from facial expressions using CNN with TensorFlow/Keras and real-time webcam integration.",
      icon: "fas fa-brain",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
      github: "https://github.com/MuhammadHamidJaved/Facial-Emotion-Recognition",
      category: "Computer Vision"
    },
    {
      id: 8,
      title: "Social Network App",
      description: "Console-based social networking application built with C++ demonstrating advanced OOP with user management, posts, and friend connections.",
      icon: "fas fa-users",
      technologies: ["C++", "OOP", "File I/O", "Data Structures"],
      github: "https://github.com/MuhammadHamidJaved/Social-Network-App",
      category: "Desktop App"
    },
    {
      id: 9,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and Bootstrap showcasing projects, skills, and professional experience.",
      icon: "fas fa-globe",
      technologies: ["Next.js", "Bootstrap", "JavaScript", "CSS3"],
      github: "https://github.com/MuhammadHamidJaved",
      category: "Web Dev"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light" ref={projectsRef}>
      <Container>
        <div className="text-center mb-4 animate-on-scroll">
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <p className="lead text-muted">A showcase of my recent work</p>
        </div>
        
        <Row className="g-3">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={project.id}>
              <Card className={`h-100 project-card animate-on-scroll`} style={{ transitionDelay: `${index * 0.04}s` }}>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="project-icon">
                      <i className={`${project.icon}`}></i>
                    </div>
                    <Badge bg="secondary">{project.category}</Badge>
                  </div>
                  
                  <h5 className="card-title mb-2">{project.title}</h5>
                  <p className="card-text mb-3">{project.description}</p>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} bg="light" text="dark" className="me-1 mb-1">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-1"></i> View Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Button 
            variant="outline-primary"
            href="https://github.com/MuhammadHamidJaved"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <i className="fab fa-github me-2"></i> All Projects on GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
