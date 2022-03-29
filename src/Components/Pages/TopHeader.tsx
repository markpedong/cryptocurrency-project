import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderTitle, HeaderDesc } from "../../Styles/MainHeaderStyle";
import "../../Styles/header.scss";

type Props = {};

const TopHeader = ({}: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="header_container">
          <HeaderTitle>Cryptos:</HeaderTitle>
          <HeaderDesc>18,542</HeaderDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeader;
