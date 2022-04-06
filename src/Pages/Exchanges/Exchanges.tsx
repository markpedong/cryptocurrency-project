import { FC, useEffect, useState } from "react";
import { Container, Row, Col, Collapse, Table } from "react-bootstrap";
import { RiArrowDownSFill, RiMore2Fill } from "react-icons/ri";
import "../../Styles/Exchanges.scss";
import axios from "axios";

type TFiatSupported = {
  name: string;
  symbol: string;
};

type TExchanges = {
  currencies: number;
  fiats: TFiatSupported[];
  id: string;
  image: string;
  markets: number;
  name: string;
  reported_rank: number;
  trade_volume_24h_btc: number;
  trust_score: number;
  trust_score_rank: number;
  volume_24h: number;
};

type TPaprikaVolume = {
  USD: {
    adjusted_volume_7d: number;
    adjusted_volume_24h: number;
  };
};

interface TMergedExchanges extends TExchanges {
  adjusted_rank: number;
  description: string;
  quotes: TPaprikaVolume;
  sessions_per_month: number;
}

export const Exchanges = () => {
  const [open, setOpen] = useState(false);
  const [exchanges, setExchanges] = useState<TMergedExchanges[]>([]);
  const [btc, setBtc] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoints = [
          "https://api.coinpaprika.com/v1/exchanges",
          "https://api.coingecko.com/api/v3/exchanges",
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        ];

        await axios
          .all(endpoints.map((endpoint) => axios.get(endpoint)))
          .then((res) => {
            const { data: data_paprika } = res[0];
            const { data: data_cg } = res[1];
            const { bitcoin } = res[2].data;

            const filteredData = data_paprika.filter(
              (exchange: TMergedExchanges) => {
                return exchange.reported_rank !== null;
              }
            );

            const concatData = data_cg.concat(filteredData);

            //sort data by trust_score_rank
            const sortedData = concatData.sort(
              (a: TMergedExchanges, b: TMergedExchanges) => {
                return a.trust_score_rank - b.trust_score_rank;
              }
            );

            setExchanges(sortedData);
            setBtc(bitcoin.usd);
          });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const mergeDuplicates = (data: TMergedExchanges[]) => {
    const mergedData = data.reduce(
      (acc: TMergedExchanges[], curr: TMergedExchanges) => {
        const existing = acc.find((a) => a.name == curr.name);
        if (existing) {
          const index = acc.indexOf(existing);
          acc[index] = {
            ...existing,
            ...curr,
          };
        } else {
          acc.push(curr);
        }
        return acc;
      },
      []
    );

    return mergedData;
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Container className="currency_exchange_container">
            <p className="exchange_header">
              {" "}
              Top Cryptocurrency Spot Exchanges
            </p>

            <p className="exchange_desc">
              BlockDetails get the data from certain API including
              CoinmarketCap, Coingecko and Coinpaprika. It ranks and scores
              exchanges based on traffic, liquidity, trading volumes, and
              confidence in the legitimacy of trading volumes reported.{" "}
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
          </Container>
          <Collapse in={open}>
            <Container id="collase_container">
              <p>
                BlockDetails track 306 spot exchanges with a total 24h volume of
                $268.91B.
              </p>
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
                    <p className="header_end">Monthly Visits</p>
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
                {mergeDuplicates(exchanges).map(
                  (exchange: TMergedExchanges, index: number) => {
                    // prettier-ignore
                    const data = {
                      rank: exchange.adjusted_rank,
                      currency: exchange.currencies,
                      fiats: exchange.fiats,
                      id: exchange.id,
                      image: exchange.image,
                      market: exchange.markets,
                      name: exchange.name,
                      vol24h: exchange.quotes === undefined ? "-" : exchange.quotes.USD.adjusted_volume_24h,
                      vol7d: exchange.quotes === undefined ? "-" : exchange.quotes.USD.adjusted_volume_7d ,
                      volSub: exchange.trade_volume_24h_btc,
                      trust_score: exchange.trust_score,
                      trust_score_rank: exchange.trust_score_rank,
                      sessions_per_month: exchange.sessions_per_month === undefined ? "-" : exchange.sessions_per_month,
                    };

                    return (
                      <tr className="crypto_main" key={index}>
                        <td></td>
                        <td>
                          <div className="justify-content-start">
                            <p className="crypto_number">
                              {data.trust_score_rank}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-start">
                            <img className="exchange_img" src={data.image} />
                            <p className="crypto_name">{data.name}</p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end">
                            <p className="crypto_score">{data.trust_score}</p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase">
                            <p className="crypto_digits">
                              {/* need to find solution for this!! */}
                              {/* {
                                (data.vol24h = "-"
                                  ? data.volSub * btc
                                  : data.vol24h)
                              } */}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase">
                            <p className="crypto_digits">{data.vol7d}</p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase">
                            <p className="crypto_digits">
                              {data.sessions_per_month}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase">
                            <p className="crypto_digits">
                              {data.market === undefined ? "-" : data.market}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase">
                            <p className="crypto_digits"></p>
                          </div>
                        </td>
                        <td>
                          <div className="justify-content-end text-uppercase fiat_supported">
                            <div className="justify-content-end fiat_container">
                              {data.fiats === undefined
                                ? "-"
                                : data.fiats
                                    .map((fiat, index) => {
                                      return (
                                        <p
                                          className="crypto_digits me-1"
                                          key={index}
                                        >
                                          {fiat.symbol}
                                        </p>
                                      );
                                    })
                                    .slice(0, 3)}
                            </div>
                            <div className="fiat_more_container justify-content-end">
                              {" "}
                              {data.fiats === undefined ||
                              data.fiats.length === 0 ? (
                                "-"
                              ) : (
                                <p>and +{data.fiats.length} more</p>
                              )}
                            </div>
                          </div>
                        </td>

                        <td></td>
                      </tr>
                    );
                  }
                )}

                {/*
                data.fiats === undefined
                              ? "-"
                              : data.fiats.map((fiat, index) => {
                                  return (
                                    <p className="crypto_digits" key={index}>
                                      {fiat.symbol}
                                    </p>
                                  );
                                })

                                
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
                
                   */}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
