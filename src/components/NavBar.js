import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      className="col-12 fixed-top"
      expand="sm"
      bg="light"
      variant="light"
      style={{ zindex: 499 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/thiago-azevedo">
          <img
            alt="iniciais do nome T A"
            src={ logo }
            width="50"
            className="d-inline-block align-top"
          />{' '}
        Thiago.Azevedo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/servicos">Serviços</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contatos</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Sociais" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">e-mail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">whatsApp</NavDropdown.Item>
              <NavDropdown.Item href="http://www.linkedin.com" target="_blank">LinkDin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://www.istagram.com" target="_blank">Instagram</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}