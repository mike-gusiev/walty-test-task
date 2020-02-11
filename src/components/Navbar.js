import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand>Walty Photos</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/photos">
          Photos
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
