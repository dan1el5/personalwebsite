import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="black" variant="dark" expand="md" className="bar">
      <Container>
        <Navbar.Brand as={Link} to="/">D A N &nbsp; G O M E S</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/agency">agency</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/newsletter">newsletter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/devportfolio">developer portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/about">about me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
