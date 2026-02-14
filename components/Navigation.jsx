'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          MHJ<span style={{ color: 'var(--color-accent)' }}>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/" className={pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/#skills">Skills</Nav.Link>
            <Nav.Link as={Link} href="/resume" className={pathname === '/resume' ? 'active' : ''}>Resume</Nav.Link>
            <Nav.Link as={Link} href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
