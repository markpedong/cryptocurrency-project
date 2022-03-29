import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderDetails } from "../Styles/MainHeaderStyle";

type Props = {};

const TopHeader = ({}: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <HeaderDetails>Crypto</HeaderDetails>
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeader;
