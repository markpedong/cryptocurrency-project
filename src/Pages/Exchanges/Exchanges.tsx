import { FC, useState } from "react";
import { Container, Row, Col, Collapse, Table } from "react-bootstrap";

import { RiArrowDownSFill, RiMore2Fill } from "react-icons/ri";

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
                    <p className="header_end">Price</p>
                  </th>
                  <th>
                    <p className="header_end d-none d-xl-block">Price 24h%</p>
                    <p className="header_end d-xl-none">24h%</p>
                  </th>
                  <th>
                    <p className="header_end d-none d-xl-block">Market Cap</p>
                    <p className="header_end d-xl-none">M. Cap</p>
                  </th>
                  <th>
                    <p className="header_end d-none d-xl-block">M.Cap 24h%</p>
                    <p className="header_end d-xl-none">24h%</p>
                  </th>
                  <th>
                    <p className="header_end">Volume(24h)</p>
                  </th>
                  <th>
                    <p className="header_end d-none d-xl-block ">
                      Circulating Supply
                    </p>
                    <p className="header_end d-xl-none c-supply">C. Supply</p>
                  </th>
                  <th>
                    <p className="header_end m-supply">Max Supply</p>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Container>
          ;
        </Col>
      </Row>
    </Container>
  );
};
