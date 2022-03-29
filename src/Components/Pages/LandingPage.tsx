import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import TopHeader from "./TopHeader";

interface Props {}

function LandingPage({}: Props) {
  return (
    <Container>
      <Row>
        <TopHeader />
      </Row>
    </Container>
  );
}

export default LandingPage;
