import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {} from "react-router-dom";

function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
                <Form inline>
                    <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    />
                </Form>
            </Nav>
            <Nav>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                <NavDropdown id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;