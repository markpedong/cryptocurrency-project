import axios from "axios";
import numeral from "numeral";
import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalHeaderComponent } from "../../Components/GlobalHeaderComponent";
import { useFetchAPI } from "../../Hooks/useFetchAPI";
import "../../Styles/Navbar.scss";

const GlobalHeader: FC = () => {
  // prettier-ignore
  const {crypto, loading, error} =  useFetchAPI("https://api.coingecko.com/api/v3/global")

  if (loading) return <div>Loading...</div>;

  if (error) return;

  console.log(crypto);

  return (
    <Container>
      <Row xs={"auto"} className="header_row">
        <Col className="header_col">
          test
          {/* <HeaderDetails title="Cryptos:" cryptodata={data.totalcrypto} />
          <HeaderDetails title="Exchanges:" cryptodata={data.markets} />
          <HeaderDetails title="Market Cap:" cryptodata={data.totalmarketcap} />
          <HeaderDetails title="24h Vol:" cryptodata={data.volume24H} /> */}
        </Col>
        <Col className="header_col">
          test
          {/* <HeaderDetails title="Dominance:" />
          <HeaderDetails title="BTC:" cryptodata={data.btcdominance} />
          <HeaderDetails title="ETH:" cryptodata={data.ethdominance} /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalHeader

//create a state for the data from the api
// const [data, setData] = useState({
//   totalcrypto: "Loading...",
//   markets: "Loading...",
//   totalmarketcap: "Loading...",
//   volume24H: "Loading...",
//   btcdominance: "Loading...",
//   ethdominance: "Loading...",
// });

// prettier-ignore
// const cryptoData = {
//   totalcrypto: data.active_cryptocurrencies,
//   markets: data.markets,
//   totalmarketcap: numeral(data.total_market_cap.usd).format("$0,0.00"),
//   volume24H: numeral(data.total_volume.usd).format("$0,0.00"),
//   btcdominance: parseFloat( data.market_cap_percentage.btc).toFixed(2) + "%",
//   ethdominance: parseFloat( data.market_cap_percentage.eth).toFixed(2) + "%",
// };

// useEffect(() => {
//   axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
//     const { data } = res.data;

//     console.log(data);

//     setData(cryptoData);
//   });
// }, []);
