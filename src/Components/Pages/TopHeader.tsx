import React from "react";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import { HeaderTitle, HeaderDesc } from "../../Styles/MainHeaderStyle";
import { FaMoon, FaCaretDown } from "react-icons/fa";
import "../../Styles/header.scss";

type Props = {};

const TopHeader = ({}: Props) => {
  return (
    <Container fluid>
      <Row className="header_row">
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Cryptos:</HeaderTitle>
          <HeaderDesc>18,542</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Exchanges:</HeaderTitle>
          <HeaderDesc>484</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Market Cap:</HeaderTitle>
          <HeaderDesc>₱112,319,194,629,451</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>24h Vol:</HeaderTitle>
          <HeaderDesc>₱6,289,330,421,958</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Dominance:</HeaderTitle>
          <HeaderDesc>BTC: 41.9%</HeaderDesc>
          <HeaderDesc>ETH: 19.1%</HeaderDesc>
        </Col>
        <Col className="header_darkmode">
          <FaMoon />
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeader;
