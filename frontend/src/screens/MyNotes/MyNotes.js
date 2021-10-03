import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNotes() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
            <Link to='/'>MyNotes</Link>
        </Navbar.Brand>
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
                <Nav.Link>
                    <Link to="/mynotes">Dropdown</Link>                
                </Nav.Link>
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

export default MyNotes;