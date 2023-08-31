import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Copa Mundial Femenina de la FIFA 2023</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown title="Home" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Services
            </Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MyNavbar;


