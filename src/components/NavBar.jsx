import React from "react";
import { Container, Navbar, Nav ,Button} from "react-bootstrap/";
import { NavLink} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="logo" as={NavLink} to="/">Expense</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#0f9ffa",}} /> */}
        </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
          <Nav.Link as={NavLink} to="/solutions">Solutions</Nav.Link>
          <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
        </Nav>
        <Button variant="primary">Login/Sign up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
