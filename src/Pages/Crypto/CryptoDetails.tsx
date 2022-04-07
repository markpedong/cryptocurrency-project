import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../Hooks/useContext";
import { ICryptoExtraDetails } from "../../Types/Interface";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import "../../Styles/CryptoDetails.scss";
import numeral from "numeral";
export const CryptoDetails: FC = () => {
  let { id } = useParams();
  const [crypto, setCrypto] = useState<ICryptoExtraDetails>(
    {} as ICryptoExtraDetails
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
          )
          .then((res) => {
            setCrypto(res.data);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  console.log(crypto);

  return (
    <Container className="cryptodetails_container">
      <Col className="category_header">
        <p>Cryptocurrencies</p>
        <MdOutlineKeyboardArrowRight />
        <p>Coins</p>
        <MdOutlineKeyboardArrowRight />
        <p>{crypto.name}</p>
      </Col>

      <Col className="name_price_container">
        <Row>
          <Col>
            <Col className="name_price">
              <img
                className="crypto_img"
                src={crypto.image?.large}
                alt="crypto"
              />
              <p className="name_crypto">{crypto.name}</p>
              <p className="symbol_crypto">{crypto.symbol}</p>
            </Col>

            <Col className="rank_container">
              <p className="rank_number">Rank #{crypto.market_cap_rank}</p>
              <p className="neutral_coin">Coin</p>
            </Col>
          </Col>
          <Col>
            <p className="price_header">
              {crypto.name} Price
              <span className="text-uppercase">({crypto.symbol})</span>
            </p>
            <div className="price_container">
              <p>
                {numeral(crypto.market_data?.current_price.usd).format(
                  "$ 0,0[.]00"
                )}
              </p>
              {crypto.market_data?.price_change_percentage_24h < 0 ? (
                <p
                  className="price_percentage"
                  style={{ backgroundColor: "#ea3943" }}
                >
                  <span className="price_percentage_span">
                    {numeral(
                      crypto.market_data?.price_change_percentage_24h
                    ).format("0,0.00")}
                  </span>
                  %
                </p>
              ) : (
                <p
                  className="price_percentage"
                  style={{ backgroundColor: "#16c784" }}
                >
                  <span className="price_percentage_span">
                    {numeral(
                      crypto.market_data?.price_change_percentage_24h
                    ).format("0,0.00")}
                  </span>
                  %
                </p>
              )}
            </div>
            <div className="price_low_high">
              <p>
                Low:{" "}
                <span className="price_low_high_span">
                  {numeral(crypto.market_data?.low_24h.usd).format(
                    "$ 0,0[.]00"
                  )}
                </span>
              </p>
              <p>
                High:
                <span className="price_low_high_span">
                  {numeral(crypto.market_data?.high_24h.usd).format(
                    "$ 0,0[.]00"
                  )}
                </span>
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col lg={4}></Col>
          <Col lg={8}>
            <Row>
              <Col>
                <p className="market_header">Market Cap:</p>
                <p className="market_percentage">
                  {numeral(crypto.market_data?.market_cap.usd).format(
                    "$ 0,0[.]00"
                  )}
                </p>

                {crypto.market_data?.market_cap_change_percentage_24h < 0 ? (
                  <p className="market_span" style={{ color: "#ea3943" }}>
                    {numeral(
                      crypto.market_data?.market_cap_change_percentage_24h
                    ).format("0,0.00")}
                  </p>
                ) : (
                  <p className="market_span" style={{ color: "#16c784" }}>
                    {numeral(
                      crypto.market_data?.market_cap_change_percentage_24h
                    ).format("0,0.00")}
                  </p>
                )}
              </Col>
              <Col>
                <p className="market_header">Fully Diluted Market Cap:</p>
                <p className="market_percentage">
                  {numeral(
                    crypto.market_data?.fully_diluted_valuation.usd
                  ).format("$ 0,0[.]00")}
                </p>

                {crypto.market_data?.market_cap_change_percentage_24h < 0 ? (
                  <p className="market_span" style={{ color: "#ea3943" }}>
                    {numeral(
                      crypto.market_data?.market_cap_change_percentage_24h +
                        0.01
                    ).format("0,0.00")}
                  </p>
                ) : (
                  <p className="market_span" style={{ color: "#16c784" }}>
                    {numeral(
                      crypto.market_data?.market_cap_change_percentage_24h +
                        0.01
                    ).format("0,0.00")}
                  </p>
                )}
              </Col>
              <Col>
                <p className="market_header">
                  Volume <span className="volume_span">24h</span>
                </p>
                <p className="market_percentage">
                  {numeral(crypto.market_data?.total_volume.usd).format(
                    "$ 0,0[.]00"
                  )}
                </p>
              </Col>
              <Col>
                <p className="market_header">Fully Diluted Market Cap:</p>
                <p className="market_percentage">
                  {numeral(crypto.market_data?.circulating_supply).format(
                    "0,0[.]00"
                  )}
                  <span className="circulating_supply">{crypto.symbol}</span>
                </p>
                <div className="market_supply">
                  <p className="">Max Supply </p>
                  <span className="market_supply_span text-end">
                    {numeral(crypto.market_data?.max_supply).format("0,0[.]00")}
                  </span>
                </div>
                <div className="market_supply">
                  <p className="">Total Supply </p>
                  <span className="market_supply_span text-end">
                    {numeral(crypto.market_data?.circulating_supply).format(
                      "0,0[.]00"
                    )}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
