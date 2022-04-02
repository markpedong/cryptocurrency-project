import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import {
  GlobalMarketHeader,
  GlobalMarketDesc,
  GlobalSpanStyled,
} from "../../Components/StyledComponents";
import "../../Styles/GlobalMarket.scss";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

type CryptoDetails = {
  totalmarketcap: number;
  marketcapchange: number;
};

export const GlobalMarketChange = () => {
  // prettier-ignore
  const [data, setData] = useState<CryptoDetails>({
          totalmarketcap: "Loading...",
          marketcapchange: "Loading...",
      } as unknown as CryptoDetails);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      const { data } = res.data;

      // prettier-ignore
      const cryptoData = {
        totalmarketcap: numeral(data.total_market_cap.usd).format("$ 0.00 a"),
        marketcapchange: data.market_cap_change_percentage_24h_usd.toFixed(2),
      };

      setData(cryptoData);

      console.log(cryptoData);
    });
  }, []);

  return (
    <Container className="global_container">
      <GlobalMarketHeader>Today's Cryptocurrency Market Cap</GlobalMarketHeader>
      <Container className="global_description_container">
        The global crypto market cap is
        {data.marketcapchange > 0 ? (
          <div className="global_span">
            {data.totalmarketcap}.
            {
              <div className="global_desc_span">
                <RiArrowUpSFill />
                <p>{data.marketcapchange + "%"}</p>
              </div>
            }
          </div>
        ) : (
          <div className="global_span">
            {data.totalmarketcap}.
            {
              <div className="global_desc_span" style={{ color: "#ea3943" }}>
                <RiArrowUpSFill />
                <p>{data.marketcapchange + "%"}</p>
              </div>
            }
          </div>
        )}
        {data.marketcapchange > 0 ? "increase" : "decrease"}, over the last day.
        {/* <button>readmore</button> */}
      </Container>
    </Container>
  );
};
