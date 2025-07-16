import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Resume = () => {
  // Download resume function
  const handleDownloadResume = () => {
    try {
      const resumeUrl = '/Muhammad_Hamid_Javed_Resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Muhammad_Hamid_Javed_Resume.pdf';
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Show success message
      console.log('Resume download initiated');
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/Muhammad_Hamid_Javed_Resume.pdf', '_blank');
    }
  };

  const education = [
    {
      degree: "BS (Computer Science)",
      institution: "FAST NUCES, Lahore",
      period: "July 2022 – Present",
      description: "Currently pursuing Computer Science with focus on Machine Learning, Software Engineering, and Data Structures & Algorithms.",
      grade: "CGPA: 3.38 / 4.0"
    },
    {
      degree: "Intermediate",
      institution: "Government College University, Lahore",
      period: "2020 – 2022",
      description: "Pre-engineering studies with strong foundation in Mathematics, Physics, and Chemistry.",
      grade: "Percentage: 90.27%"
    },
    {
      degree: "Matriculation",
      institution: "Qazi Grammar Boys High School, Lahore",
      period: "2018 – 2020",
      description: "Secondary education with excellent academic performance and strong foundation in core subjects.",
      grade: "Percentage: 93.90%"
    }
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Analyzinn Solutions",
      period: "2024 - Present",
      description: "Working on software development projects and gaining hands-on experience in modern web technologies and business solutions.",
      achievements: [
        "Developed web applications using React and Node.js",
        "Collaborated with senior developers on client projects",
        "Gained experience in professional software development practices"
      ]
    },
    {
      title: "ML Student & Self-Directed Learner",
      company: "Personal Projects & Studies",
      period: "2022 - Present",
      description: "Intensive study and practice in machine learning, web development, and mobile app development.",
      achievements: [
        "Built multiple full-stack applications using modern technologies",
        "Developed AI-powered applications including chatbots and analysis tools",
        "Mastered multiple programming languages and frameworks"
      ]
    }
  ];

  const certifications = [
    {
      name: "Software Engineer Intern",
      issuer: "Analyzinn Solutions",
      date: "2024",
      credentialId: "Internship Certificate"
    },
    {
      name: "Softec Participation Certificate",
      issuer: "FAST University",
      date: "2024",
      credentialId: "Participation Award"
    },
    {
      name: "Dean's List Award",
      issuer: "FAST NUCES, Lahore",
      date: "2023-2024",
      credentialId: "Academic Excellence (x2)"
    },
    {
      name: "Kotlin Course",
      issuer: "Online Platform",
      date: "2023",
      credentialId: "Programming Certification"
    }
  ];

  const projects = [
    {
      name: "Medical Chatbot",
      technologies: ["Python", "Streamlit", "Google Gemini AI", "Pinecone", "RAG", "LangChain"],
      description: "AI-powered medical chatbot using RAG architecture with Google Gemini AI and Pinecone vector store for comprehensive medical assistance.",
      highlights: ["RAG Architecture", "PDF Document Processing", "Conversational AI", "Medical Knowledge Base"]
    },
    {
      name: "AI Resume Analyzer",
      technologies: ["Python", "Streamlit", "Machine Learning", "OpenAI API", "Scikit-learn", "Pandas"],
      description: "Sophisticated ML-powered resume analysis platform with multiple trained models for scoring and experience prediction.",
      highlights: ["ML Scoring Models", "Admin Dashboard", "Cover Letter Generation", "Data Analytics"]
    },
    {
      name: "Life Expectancy Prediction Model",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy", "GridSearchCV"],
      description: "Comprehensive ML project using WHO health statistics to predict life expectancy with multiple regression models and optimization.",
      highlights: ["Multiple ML Models", "GridSearchCV Optimization", "Interactive Web Interface", "Performance Analysis"]
    },
    {
      name: "Facial Emotion Recognition",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Computer Vision"],
      description: "Deep learning project for detecting emotions from facial expressions using CNN with real-time webcam integration.",
      highlights: ["CNN Architecture", "Real-time Detection", "67% Accuracy", "7 Emotion Classes"]
    },
    {
      name: "BudgetBuddy - Finance Management App",
      technologies: ["Kotlin", "Android", "Firebase", "Firestore", "MPAndroidChart", "FCM"],
      description: "Comprehensive Android personal finance management app with expense tracking, budget alerts, and visual analytics.",
      highlights: ["Multi-Currency Support", "Real-time Notifications", "Visual Analytics", "Budget Alerts"]
    },
    {
      name: "Streamify",
      technologies: ["Django", "Next.js", "PostgreSQL", "WebSocket", "JWT", "Cloudinary", "TMDB API"],
      description: "Full-stack streaming platform with social media features, real-time communication, and movie streaming using Django backend and Next.js frontend.",
      highlights: ["Movie streaming with multiple servers", "Real-time WebSocket communication", "Social media features (posts, comments)", "JWT authentication", "TMDB API integration"]
    },
    {
      name: "Ticket Management System",
      technologies: ["React", "Node.js", "Express", "SQL Server", "JavaScript", "Bootstrap", "RESTful API"],
      description: "Comprehensive multi-service booking platform supporting movies, transportation, tours, and events with full-stack architecture and database management.",
      highlights: ["Multi-service booking system (movies, buses, trains, flights)", "User authentication and role management", "SQL Server database with stored procedures", "RESTful API design", "Real-time booking management"]
    },
    {
      name: "Social Network App",
      technologies: ["C++", "Object-Oriented Programming", "File I/O", "Data Structures", "Polymorphism"],
      description: "Console-based social networking application demonstrating advanced OOP concepts with comprehensive user management and social interaction features.",
      highlights: ["User friend management system", "Page likes and timeline functionality", "Post creation, commenting, and liking system", "Memory sharing features", "File-based data persistence", "Advanced C++ OOP implementation"]
    }
  ];

  return (
    <section id="resume" className="pb-5" style={{ paddingTop: '100px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold">Resume</h2>
            <p className="lead text-muted">My educational background, experience, and achievements</p>
            <Button 
              variant="outline-primary" 
              size="lg" 
              onClick={handleDownloadResume}
              className="mb-4"
            >
              <i className="fas fa-download me-2"></i>
              Download PDF Resume
            </Button>
          </Col>
        </Row>

        {/* Education */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="mb-4">
              <i className="fas fa-graduation-cap text-primary me-2"></i>
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-sm mb-3">
                <Card.Body className="p-4">
                  <Row>
                    <Col lg={8}>
                      <h5 className="mb-1">{edu.degree}</h5>
                      <h6 className="text-muted mb-2">{edu.institution}</h6>
                      {edu.grade && (
                        <div className="mb-2">
                          <Badge bg="success" className="me-2">{edu.grade}</Badge>
                        </div>
                      )}
                      <p className="mb-0">{edu.description}</p>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                      <Badge bg="primary" className="p-2">{edu.period}</Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* Experience */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="mb-4">
              <i className="fas fa-briefcase text-primary me-2"></i>
              Experience
            </h3>
            {experience.map((exp, index) => (
              <Card key={index} className="border-0 shadow-sm mb-4">
                <Card.Body className="p-4">
                  <Row>
                    <Col lg={8}>
                      <h5 className="mb-1">{exp.title}</h5>
                      <h6 className="text-muted mb-2">{exp.company}</h6>
                      <p className="mb-3">{exp.description}</p>
                      <ul className="list-unstyled">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="mb-1">
                            <i className="fas fa-check text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                      <Badge bg="success" className="p-2">{exp.period}</Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* Projects */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="mb-4">
              <i className="fas fa-code text-primary me-2"></i>
              Key Projects
            </h3>
            <Row>
              {projects.map((project, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="p-4">
                      <h5 className="mb-3">{project.name}</h5>
                      <p className="text-muted mb-3">{project.description}</p>
                      
                      <div className="mb-3">
                        <h6 className="small fw-bold mb-2">Technologies:</h6>
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            bg="light" 
                            text="dark" 
                            className="me-1 mb-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <h6 className="small fw-bold mb-2">Key Highlights:</h6>
                        <ul className="list-unstyled small">
                          {project.highlights.map((highlight, hlIndex) => (
                            <li key={hlIndex} className="mb-1">
                              <i className="fas fa-star text-warning me-2"></i>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Certifications */}
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">
              <i className="fas fa-certificate text-primary me-2"></i>
              Certifications
            </h3>
            <Row>
              {certifications.map((cert, index) => (
                <Col lg={6} className="mb-3" key={index}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <i className="fas fa-award fa-2x text-warning"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">{cert.name}</h6>
                          <p className="text-muted mb-1">{cert.issuer}</p>
                          <small className="text-muted">
                            <i className="fas fa-calendar me-1"></i>
                            {cert.date} • ID: {cert.credentialId}
                          </small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
