import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Medical Chatbot",
      description: "An AI-powered medical chatbot using RAG architecture with Google Gemini AI and Pinecone vector store. Features PDF document processing, conversational AI, and comprehensive medical assistance with a user-friendly Streamlit interface.",
      image: "fas fa-user-md",
      technologies: ["Python", "Streamlit", "Google Gemini AI", "Pinecone", "RAG", "LangChain", "PDF Processing"],
      github: "https://github.com/MuhammadHamidJaved/medical-chatbot",
      category: "AI & Healthcare"
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      description: "A sophisticated ML-powered resume analysis platform with multiple trained models for scoring and experience prediction. Features admin dashboard, cover letter generation using OpenAI API, and comprehensive analytics with Streamlit interface.",
      image: "fas fa-file-alt",
      technologies: ["Python", "Streamlit", "Machine Learning", "OpenAI API", "Scikit-learn", "Pandas", "Data Analytics"],
      github: "https://github.com/MuhammadHamidJaved/AI-Resume-Analyzer",
      category: "AI & Career"
    },
    {
      id: 3,
      title: "BudgetBuddy - Finance Management",
      description: "A comprehensive Android personal finance management app built with Kotlin. Features expense tracking, income management, budget setting with alerts, visual analytics (charts/graphs), multi-currency support, and Firebase integration with real-time notifications.",
      image: "fas fa-chart-pie",
      technologies: ["Kotlin", "Android", "Firebase", "Firestore", "MPAndroidChart", "FCM", "Multi-Currency"],
      github: "https://github.com/MuhammadHamidJaved/BudgetBuddy",
      category: "Mobile Application"
    },
    {
      id: 4,
      title: "Streamify",
      description: "A comprehensive streaming platform with Django backend and Next.js frontend, featuring social media capabilities, real-time communication, and movie streaming with TMDB integration.",
      image: "fas fa-play-circle",
      technologies: ["Django", "Next.js", "PostgreSQL", "WebSocket", "JWT", "Cloudinary", "TMDB API", "Bootstrap"],
      github: "https://github.com/MuhammadHamidJaved/Streamify1",
      category: "Full Stack Platform"
    },
    {
      id: 5,
      title: "Ticket Management System",
      description: "Comprehensive multi-service booking platform with React frontend and Node.js/Express backend. Features booking for movies, buses, trains, flights, car rentals, tours, and events with SQL Server database and role-based user management.",
      image: "fas fa-ticket-alt",
      technologies: ["React", "Node.js", "Express", "SQL Server", "MSSQL", "JavaScript", "Bootstrap", "RESTful API"],
      github: "https://github.com/MuhammadHamidJaved/Ticket-Management-System",
      category: "Full Stack Platform"
    },
    {
      id: 6,
      title: "Life Expectancy Prediction Model",
      description: "A comprehensive machine learning project using WHO health statistics to predict life expectancy. Features multiple regression models including Random Forest, Decision Tree, and Linear Regression with GridSearchCV optimization and interactive Streamlit interface.",
      image: "fas fa-chart-line",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy", "GridSearchCV", "Regression Models"],
      github: "https://github.com/MuhammadHamidJaved/Life-Expectancy-Prediction-Model",
      category: "Data Science & ML"
    },
    {
      id: 7,
      title: "Facial Emotion Recognition",
      description: "A deep learning project for detecting emotions from facial expressions using CNN with TensorFlow/Keras. Features real-time emotion detection, 67% accuracy across 7 emotions, comprehensive data preprocessing, and live webcam integration with OpenCV.",
      image: "fas fa-brain",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Computer Vision", "Deep Learning"],
      github: "https://github.com/MuhammadHamidJaved/Facial-Emotion-Recognition",
      category: "AI & Computer Vision"
    },
    {
      id: 8,
      title: "Social Network App",
      description: "Console-based social networking application built with C++ demonstrating advanced OOP concepts. Features user management, friend connections, page interactions, posting system, comments, likes, and memory sharing functionality.",
      image: "fas fa-users",
      technologies: ["C++", "Object-Oriented Programming", "File I/O", "Data Structures", "Polymorphism", "Memory Management"],
      github: "https://github.com/MuhammadHamidJaved/Social-Network-App",
      category: "Desktop Application"
    },
    {
      id: 9,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Bootstrap showcasing projects, skills, and professional experience.",
      image: "fas fa-globe",
      technologies: ["React", "Bootstrap", "JavaScript", "CSS3", "Responsive"],
      github: "https://github.com/MuhammadHamidJaved",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="pb-5 bg-light" style={{ paddingTop: '100px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold">Featured Projects</h2>
            <p className="lead text-muted">A showcase of my recent work and personal projects</p>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="border-0 shadow-sm h-100 project-card">
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <div className="project-icon">
                      <i className={`${project.image} fa-3x text-primary mb-2`}></i>
                    </div>
                    <Badge bg="secondary" className="mb-2">{project.category}</Badge>
                  </div>
                  
                  <h5 className="card-title mb-3">{project.title}</h5>
                  <p className="card-text text-muted mb-3">{project.description}</p>
                  
                  <div className="technologies mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="light" 
                        text="dark" 
                        className="me-1 mb-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="project-links mt-auto">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-1"></i>
                      View Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-4">
          <Col lg={12} className="text-center">
            <Button 
              variant="outline-primary" 
              size="lg"
              href="https://github.com/MuhammadHamidJaved"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github me-2"></i>
              View All Projects on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
