import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png";
import { FaSearch } from "react-icons/fa/";

type Props = {};

function NavbarSection({}: Props) {
  return (
    <Navbar expand="lg">
      <Container className="navbar_container">
        <Navbar.Brand>
          <img src={logo} alt="Logo" />
          <p>blockdetails</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Coins</Nav.Link>
            <Nav.Link>Exchanges</Nav.Link>
            <Nav.Link>NFT</Nav.Link>
            <Form className="d-flex search_container">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <FaSearch className="search_icon" />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
