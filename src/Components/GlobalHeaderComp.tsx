import { GlobalHeaderStyled, GlobalDescStyled } from "./StyledComponents";
import { Col } from "react-bootstrap";

interface Props {
  title: string;
  cryptodata?: string;
}

export const GlobalHeaderComp = (props: Props) => {
  return (
    <Col xs={"auto"} className="header_container">
      <GlobalHeaderStyled>{props.title}</GlobalHeaderStyled>
      <GlobalDescStyled>{props.cryptodata}</GlobalDescStyled>
    </Col>
  );
};
