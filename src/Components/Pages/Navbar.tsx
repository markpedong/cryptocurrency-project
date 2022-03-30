import React from "react";
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";

type Props = {};

function NavbarSection({}: Props) {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarSection;
