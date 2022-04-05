import { FC } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../Styles/Footer.scss";
import coingecko from "../../Images/coingecko.svg";
import coinmarketcap from "../../Images/coinmarketcap.svg";

export const Footer: FC = () => {
  const logoSrc = require("../../Images/logo.png");

  return (
    <Container fluid className="footer_container">
      <Container className="pt-5">
        <Row className="row-cols-2">
          <Col>
            <Col className="footer_title_container">
              <img src={String(logoSrc)} alt="Logo" />
              <p className="footer_title">blockdetails</p>
            </Col>
          </Col>
          <Col className="footer_title_container">
            <Col className="subcontent">
              <p>Quick Links</p>
              <Container className="subcontent_container">
                <p>Coins</p>
                <p>Exchange</p>
                <p>Categories</p>
                <p>NFT</p>
              </Container>
            </Col>
            <Col className="subcontent">
              <p>Socials</p>
              <Container className="subcontent_container">
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Github</p>
                <p>LinkedIn</p>
              </Container>
            </Col>
            <Col className="subcontent">
              <p>Donation</p>
              <Container className="subcontent_container">
                <p>Bitcoin:</p>
                <p>USDT</p>
                <p>BNB</p>
                <p>Other:</p>
              </Container>
            </Col>
          </Col>
          <Col className="copyright_container">
            <p>© 2022 BLOCKDETAILS. All rights reserved</p>
          </Col>
          <Col className="cg_cmc_container">
            <Row className="row-cols-2">
              <Col className="cg_cmc">
                <p>Powered by:</p>
                <img src={coingecko} />
              </Col>
              <Col className="cg_cmc">
                <p>Designed: </p>
                <img src={coinmarketcap} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
