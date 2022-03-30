import React from "react";
import { Col, Container } from "react-bootstrap";
import "../../../Styles/TopCryptoDetails.scss";
import {
  CryptoHeaderDetailsStyle,
  CryptoDescDetailsStyle,
} from "../../../Styles/StyledComponents";

interface Props {
  image: string;
  name: string;
  description: string;
}

export const TopCryptoDetailsComponent = (props: Props) => {
  return (
    // prettier-ignore
    <Col className="top_cryto_details_container">
      <img className="top_crypto_details__img" src={props.image} alt={props.name}/>
      <Container className="top_crypto_description_container">
        <CryptoHeaderDetailsStyle>{props.name}</CryptoHeaderDetailsStyle>
        <CryptoDescDetailsStyle>{props.description}</CryptoDescDetailsStyle>
      </Container>
    </Col>
  );
};
