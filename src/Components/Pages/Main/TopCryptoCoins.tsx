import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TopCryptoCoinsComponents } from "./TopCryptoCoinsComponents";

export const TopCryptoCoins: FC = () => {
  return (
    <Container>
      <Row className="header_row">
        <Col>
          <TopCryptoCoinsComponents />
        </Col>
      </Row>
    </Container>
  );
};
