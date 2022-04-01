import { GlobalHeaderStyled, GlobalDescStyled } from "./StyledComponents";
import { Col } from "react-bootstrap";
import { IGlobalHeader } from "../Types/Interface";

export const GlobalHeaderComp = ({ title, cryptodata }: IGlobalHeader) => {
  return (
    <Col xs={"auto"} className="header_container">
      <GlobalHeaderStyled>{title}</GlobalHeaderStyled>
      <GlobalDescStyled>{cryptodata}</GlobalDescStyled>
    </Col>
  );
};
