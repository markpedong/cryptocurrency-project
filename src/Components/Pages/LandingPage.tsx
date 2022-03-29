import React from "react";
import { Col, Container } from "react-bootstrap";
import TopHeader from "./TopHeader";

interface Props {}

function LandingPage({}: Props) {
  return (
    <Container>
      <Col>
        <TopHeader />
      </Col>
    </Container>
  );
}

export default LandingPage;
