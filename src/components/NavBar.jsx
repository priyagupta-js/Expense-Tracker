import React from "react";
import { Container, Navbar, Nav ,Button} from "react-bootstrap/";
import { NavLink} from "react-router-dom";
function NavBar() {
  return (
    <Navbar sticky="top" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="logo" as={NavLink} to="/">Expense</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
          <Nav.Link as={NavLink} to="/solutions">Solutions</Nav.Link>
          <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
        </Nav>
        <Button variant="primary">Login/Sign up</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
