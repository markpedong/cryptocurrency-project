import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TopCoinsComp } from "../../Components/TopCoinsComp";

const TopCoins = () => {
  return (
    <Container>
      <Row>
        <Col>
          <TopCoinsComp
            url="https://api.coingecko.com/api/v3/search/trending"
            title="🔥Trending"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TopCoins;
