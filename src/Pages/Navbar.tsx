import { FC } from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa/";
import "../Styles/Navbar.scss";
import { Link } from "react-router-dom";

const logoSrc = require("../Images/logo.png");

export const NavbarSec: FC = () => {
  return (
    <Navbar expand="lg">
      <Container fluid="lg">
        <Navbar.Brand>
          <img src={String(logoSrc)} alt="Logo" />
          <p>blockdetails</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="toggler-icon top-bar" />
          <span className="toggler-icon middle-bar" />
          <span className="toggler-icon bottom-bar" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* prettier-ignore */}
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">Coins</Link>
            <Link className="nav-link" to="/exchanges">Exchanges</Link>
            <Link className="nav-link" to="/">NFT</Link>
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
