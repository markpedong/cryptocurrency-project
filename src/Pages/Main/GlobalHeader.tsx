import axios from "axios";
import numeral from "numeral";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalHeaderComp } from "../../Components/GlobalHeaderComp";
import { CryptoDetails } from "../../Types/Type";

export const GlobalHeader: FC = () => {
  // prettier-ignore
  const [data, setData] = useState<CryptoDetails>({
      totalcrypto: "Loading...",
      markets: "Loading...",
      totalmarketcap: "Loading...",
      volume24H: "Loading...",
      btcdominance: "Loading...",
      ethdominance: "Loading...",
    } as CryptoDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://api.coingecko.com/api/v3/global")
          .then((res) => {
            const { data } = res.data;

            // prettier-ignore
            const cryptoData = {
                  totalcrypto: data.active_cryptocurrencies,
                  markets: data.markets,
                  totalmarketcap: numeral(data.total_market_cap.usd).format("$0,0.00"),
                  volume24H: numeral(data.total_volume.usd).format("$0,0.00"),
                  btcdominance: parseFloat( data.market_cap_percentage.btc).toFixed(2) + "%",
                  ethdominance: parseFloat( data.market_cap_percentage.eth).toFixed(2) + "%",
                };

            setData(cryptoData);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    // prettier-ignore
    <Container >
      <Row xs={"auto"} className="header_row">
      <Col className="header_col">
          <GlobalHeaderComp title="Cryptos:" cryptodata={data?.totalcrypto} />
          <GlobalHeaderComp title="Exchanges:" cryptodata={data?.markets} />
          <GlobalHeaderComp title="Market Cap:" cryptodata={data?.totalmarketcap} />
          <GlobalHeaderComp title="24h Vol:" cryptodata={data?.volume24H} />
        </Col>
        <Col className="header_col">
          <GlobalHeaderComp title="Dominance:" />
          <GlobalHeaderComp title="BTC:" cryptodata={data?.btcdominance} />
          <GlobalHeaderComp title="ETH:" cryptodata={data?.ethdominance} />
        </Col>
      </Row>
    </Container>
  );
};

// axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
//   const { data } = res.data;

//   // prettier-ignore
//   const cryptoData = {
//       totalcrypto: data.active_cryptocurrencies,
//       markets: data.markets,
//       totalmarketcap: numeral(data.total_market_cap.usd).format("$0,0.00"),
//       volume24H: numeral(data.total_volume.usd).format("$0,0.00"),
//       btcdominance: parseFloat( data.market_cap_percentage.btc).toFixed(2) + "%",
//       ethdominance: parseFloat( data.market_cap_percentage.eth).toFixed(2) + "%",
//     };

//   setData(cryptoData);
