import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// routing
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="black" variant="dark" className="bar">
        <Container>
          <Navbar.Brand as={Link} to="/">DG</Navbar.Brand>
          <Nav>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/">home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/about">about</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/skills">skills</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/projects">projects</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/contact">contact</Nav.Link>
            </Nav.Item>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;