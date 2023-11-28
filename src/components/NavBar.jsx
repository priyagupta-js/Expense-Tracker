import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap/";
import { NavLink} from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
          <Nav.Link as={NavLink} to="/solutions">Solutions</Nav.Link>
          <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
