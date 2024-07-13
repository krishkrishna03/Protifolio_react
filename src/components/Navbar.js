import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="animated-navbar">
      <Navbar.Brand href="#home" className="animated-brand">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto animated-nav-links">
          <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link">About</Nav.Link>
          <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
