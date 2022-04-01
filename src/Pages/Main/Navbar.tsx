import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa/";
import "../../../Styles/navbarSection.scss";
const logoSrc = require("../../../Images/logo.png");

export const NavbarSection: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container fluid="lg">
        <Navbar.Brand>
          <img src={String(logoSrc)} alt="Logo" />
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
};
