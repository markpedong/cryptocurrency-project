import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavbarSection } from "./Navbar";
import { TopHeader } from "./TopHeader";
import { TopCryptoDetails } from "./TopCryptoDetails";

function LandingPage() {
  return (
    <Container fluid>
      <Row>
        <TopHeader />
        <NavbarSection />
        <TopCryptoDetails />
      </Row>
    </Container>
  );
}

export default LandingPage;
