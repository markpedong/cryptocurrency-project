import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/Crypto.scss";
import { CryptoHeader } from "../../Components/StyledComponents";
import axios from "axios";
import { useEffect, useState } from "react";

export const Crypto = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCrypto(res.data);
      });
  }, []);

  console.log(crypto);

  return (
    <Container className="main_crypto">
      <Row>
        <Col>
          <CryptoHeader>#</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader>Name</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader>Price</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader>24h %</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader> Market Cap</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader> Volume(24h)</CryptoHeader>
        </Col>
        <Col>
          <CryptoHeader> Circulating Supply</CryptoHeader>
        </Col>
      </Row>
    </Container>
  );
};
