import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavbarSection } from "./Navbar";
import { TopHeader } from "./CryptoDetailHeader";
import { TopCryptoDetails } from "./TopCryptoDetailContainer";
import { TopCryptoCoins } from "./TopCryptoCoins";

function LandingPage() {
  return (
    <Container fluid>
      <Row>
        <TopHeader />
        <NavbarSection />
        <TopCryptoDetails />
        <TopCryptoCoins />
      </Row>
    </Container>
  );
}

export default LandingPage;
