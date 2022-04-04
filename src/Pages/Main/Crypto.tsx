import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Styles/Crypto.scss";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const Crypto = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCrypto(res.data);
      });
  }, []);

  return (
    <Container>
      <Table borderless>
        <thead className="thead">
          <tr className="tr">
            <th className="header">
              <span>#</span>
            </th>
            <th className="header">
              <span>Name</span>
            </th>
            <th className="header">
              <span>Price</span>
            </th>
            <th className="header">
              <span>24h %</span>
            </th>
            <th className="header">
              <span>Market Cap</span>
            </th>
            <th className="header">
              <span>Volume(24h)</span>
            </th>
            <th className="header">
              <span>Circulating Supply</span>
            </th>
            {/* <th id="header">24h %</th>
            <th id="header">Market Cap</th>
            <th id="header">Volume(24h)</th>
            <th id="header">Circulating Supply</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="breakword">
              <p className="wordbreak">
                Mark12333333333333333333333333333333333333333333333333
              </p>
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

{
  /* <Container className="main_crypto">
      <Row>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader>#</CryptoHeader>
            <RiArrowUpSFill />
          </Container>
          <Container></Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader>Name</CryptoHeader>
          </Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader>Price</CryptoHeader>
          </Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader>24h %</CryptoHeader>
          </Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader> Market Cap</CryptoHeader>
          </Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader> Volume(24h)</CryptoHeader>
          </Container>
        </Col>
        <Col xs={"auto"} id="header_col">
          <Container id="header">
            <CryptoHeader> Circulating Supply</CryptoHeader>
          </Container>
        </Col>
      </Row>
    </Container> */
}
