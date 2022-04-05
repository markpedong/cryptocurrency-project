import { FC, useState } from "react";
import { Container, Row, Col, Collapse, Table } from "react-bootstrap";
import { RiArrowDownSFill, RiMore2Fill } from "react-icons/ri";
import "../../Styles/Exchanges.scss";

export const Exchanges: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <p> Top Cryptocurrency Spot Exchanges</p>

          <p>
            CoinMarketCap ranks and scores exchanges based on traffic,
            liquidity, trading volumes, and confidence in the legitimacy of
            trading volumes reported.{" "}
            <button
              className="readmore_btn"
              aria-controls="collase_container"
              aria-expanded={open}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              read more
            </button>
          </p>
        </Col>
        <Col>
          <Collapse in={open}>
            <Container id="collase_container">
              <p>test</p>
            </Container>
          </Collapse>
        </Col>
        <Col xs={12}>
          <Container className="table_main">
            <Table borderless className="table_container">
              <thead className="thead">
                <tr className="tr_container">
                  <th></th>
                  <th>
                    <p className="header">#</p>
                  </th>
                  <th>
                    <p className="header name_header">Name</p>
                  </th>
                  <th>
                    <p className="header_end">Trust Score</p>
                  </th>
                  <th>
                    <p className="header_end">Volume (24h)</p>
                  </th>
                  <th>
                    <p className="header_end">Volume (7d)</p>
                  </th>
                  <th>
                    <p className="header_end">#Markets</p>
                  </th>
                  <th>
                    <p className="header_end">#Coins</p>
                  </th>
                  <th>
                    <p className="header_end">Fiat Supported</p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="crypto_main">
                  <td></td>
                  <td>
                    <div className="justify-content-start">
                      <p className="crypto_number">1</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-start">
                      <img
                        className="exchange_img"
                        src="https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"
                      />
                      <p className="crypto_name">Binance</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end">
                      <p className="crypto_score">9.9</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end text-uppercase">
                      <p className="crypto_digits">$21,343,854,585</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end text-uppercase">
                      <p className="crypto_digits">$153,060,819,000</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end text-uppercase">
                      <p className="crypto_digits">253</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end text-uppercase">
                      <p className="crypto_digits">500</p>
                    </div>
                  </td>
                  <td>
                    <div className="justify-content-end text-uppercase fiat_supported">
                      <div className="justify-content-end fiat_container">
                        <p className="crypto_digits">AED,</p>
                        <p className="crypto_digits">ARS,</p>
                        <p className="crypto_digits">USD</p>
                      </div>
                      <div className="fiat_more_container justify-content-end">
                        <p>and +43 more</p>
                      </div>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
