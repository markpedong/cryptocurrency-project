import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarSection from "./Navbar";
import TopHeader from "./TopHeader";

interface Props {}

function LandingPage({}: Props) {
  return (
    <Container>
      <Row>
        <TopHeader />
        <NavbarSection />
      </Row>
    </Container>
  );
}

export default LandingPage;
