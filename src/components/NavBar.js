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
          <Navbar.Brand as={Link} to="/">D A N &nbsp; G O M E S</Navbar.Brand>
          <Nav>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/newsletter">newsletter</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/resources">resources</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/devportfolio">developer portfolio</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="links" as={Link} to="/about">about</Nav.Link>
            </Nav.Item>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;