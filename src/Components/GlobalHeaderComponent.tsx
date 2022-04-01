import React from "react";
import { GlobalTitleStyle, GlobalDescStyle } from "./StyledComponents";
import { Col } from "react-bootstrap";

interface Props {
  title: string;
  cryptodata?: string;
}

export const GlobalHeaderComponent = (props: Props) => {
  return (
    <Col xs={"auto"} className="header_container">
      <GlobalTitleStyle>{props.title}</GlobalTitleStyle>
      <GlobalDescStyle>{props.cryptodata}</GlobalDescStyle>
    </Col>
  );
};
