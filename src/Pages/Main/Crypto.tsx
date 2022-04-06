import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Styles/Crypto.scss";
import { RiArrowDownSFill, RiArrowUpSFill, RiMore2Fill } from "react-icons/ri";
import { TCryptoMain } from "../../Types/Interface";
import numeral from "numeral";
export const Crypto = () => {
  const [cryptoData, setCrypto] = useState<TCryptoMain[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((res) => {
            setCrypto(res.data);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="table_main">
      <Table borderless className="table_container">
        <thead className="thead">
          {/* prettier-ignore */}
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
              <p className="header_end d-none d-xl-block ">Circulating Supply</p>
              <p className="header_end d-xl-none c-supply">C. Supply</p>
            </th>
            <th>
              <p className="header_end m-supply">Max Supply</p>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, index) => {
            const crypto = {
              csupply: numeral(coin.circulating_supply).format("0.00a"),
              cprice: coin.current_price,
              id: coin.id,
              image: coin.image,
              mcap: numeral(coin.market_cap).format("$0.00a"),
              mcap_per: coin.market_cap_change_percentage_24h,
              mcap_rank: coin.market_cap_rank,
              msupply: coin.max_supply,
              name: coin.name,
              pchange: coin.price_change_percentage_24h,
              symbol: coin.symbol,
              tsupply: coin.total_supply,
              tvolume: numeral(coin.total_volume).format("$0.00a"),
            };

            return (
              <tr className="crypto_main" key={index}>
                <td></td>
                {/* Market Cap rank */}
                <td>
                  <div className="justify-content-start">
                    <p className="crypto_number">{crypto.mcap_rank}</p>
                  </div>
                </td>
                {/* Name and Symbol */}
                <td>
                  <div className="justify-content-start">
                    <img src={crypto.image} />
                    <p className="crypto_name">{crypto.name}</p>
                    <p className="crypto_sym">{crypto.symbol}</p>
                  </div>
                </td>
                {/* Current Price */}
                <td>
                  <div className="justify-content-end">
                    <p className="crypto_digits">
                      {crypto.cprice < 1
                        ? numeral(crypto.cprice).format("$0.00000000")
                        : numeral(crypto.cprice).format("$0,0.00")}
                    </p>
                  </div>
                </td>
                {/* Price Change */}
                <td>
                  <div
                    className="justify-content-end"
                    style={
                      crypto.pchange > 0
                        ? { color: "#16c784" }
                        : { color: "#ea3943" }
                    }
                  >
                    {crypto.pchange > 0 ? (
                      <RiArrowUpSFill />
                    ) : (
                      <RiArrowDownSFill />
                    )}
                    <p className="crypto_digits">
                      {crypto.pchange.toFixed(2)}%
                    </p>
                  </div>
                </td>
                {/* MarketCap */}
                <td>
                  <div className="justify-content-end text-uppercase">
                    <p className="crypto_digits">{crypto.mcap}</p>
                  </div>
                </td>
                {/* MarketCap Change */}
                <td>
                  <div
                    className="justify-content-end"
                    style={
                      crypto.mcap_per > 0
                        ? { color: "#16c784" }
                        : { color: "#ea3943" }
                    }
                  >
                    {crypto.mcap_per > 0 ? (
                      <RiArrowUpSFill />
                    ) : (
                      <RiArrowDownSFill />
                    )}
                    <p className="crypto_digits">
                      {crypto.mcap_per.toFixed(2)}%
                    </p>
                  </div>
                </td>
                {/* Volume */}
                <td>
                  <div className="justify-content-end text-uppercase">
                    <p className="crypto_digits">{crypto.tvolume}</p>
                  </div>
                </td>
                {/* Circulating Supply */}
                <td>
                  <div className="justify-content-end text-uppercase">
                    <p className="crypto_digits">
                      {crypto.csupply} {crypto.symbol}
                    </p>
                  </div>
                </td>
                {/* Max Supply */}
                <td>
                  <div className="justify-content-end text-uppercase">
                    <p className="crypto_digits">
                      {crypto.msupply
                        ? numeral(crypto.msupply).format("0.0a") +
                          " " +
                          crypto.symbol
                        : crypto.tsupply === null
                        ? "--"
                        : numeral(crypto.tsupply).format("0.0a") +
                          " " +
                          crypto.symbol}
                    </p>
                  </div>
                </td>
                {/* See More */}
                <td>
                  <div>
                    <RiMore2Fill className="fs-5" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
