import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/navbar.scss";
import { HeaderDesc, HeaderTitle } from "../Styles/MainHeaderStyle";
import axios from "axios";
const numeral = require("numeral");

const TopHeader: FC = () => {
  //create a state for the data from the api
  const [data, setData] = useState({
    totalcrypto: "Loading...",
    markets: "Loading...",
    totalmarketcap: "Loading...",
    volume24H: "Loading...",
    btcdominance: "Loading...",
    ethdominance: "Loading...",
  });

  useLayoutEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      const { data } = res.data;

      // prettier-ignore
      const cryptoData = {
        totalcrypto: numeral(data.active_cryptocurrencies).format("0,0"),
        markets: data.markets,
        totalmarketcap: numeral(data.total_market_cap.usd).format("$0,0.00"),
        volume24H: numeral(data.total_volume.usd).format("$0,0.00"),
        btcdominance: parseFloat( data.market_cap_percentage.btc).toFixed(2) + "%",
        ethdominance: parseFloat( data.market_cap_percentage.eth).toFixed(2) + "%",
      };

      setData(cryptoData);
    });
  }, []);

  return (
    <Container fluid>
      <Row className="header_row">
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Cryptos:</HeaderTitle>
          <HeaderDesc>{data.totalcrypto}</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Exchanges:</HeaderTitle>
          <HeaderDesc>{data.markets}</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Market Cap:</HeaderTitle>
          <HeaderDesc>{data.totalmarketcap}</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>24h Vol:</HeaderTitle>
          <HeaderDesc>{data.volume24H}</HeaderDesc>
        </Col>
        <Col xs={"auto"} className="header_container">
          <HeaderTitle>Dominance:</HeaderTitle>
          <HeaderDesc>BTC: {data.btcdominance}</HeaderDesc>
          <HeaderDesc>ETH: {data.ethdominance}</HeaderDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeader;
