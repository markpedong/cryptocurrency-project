import React from "react";
import {
  HeaderDescStyle,
  HeaderTitleStyle,
} from "../../Styles/StyledComponents";
import { Col } from "react-bootstrap";

interface Props {
  title: string;
  cryptodata?: string;
}

export const HeaderDetails = (props: Props) => {
  return (
    <Col xs={"auto"} className="header_container">
      <HeaderTitleStyle>{props.title}</HeaderTitleStyle>
      <HeaderDescStyle>{props.cryptodata}</HeaderDescStyle>
    </Col>
  );
};
