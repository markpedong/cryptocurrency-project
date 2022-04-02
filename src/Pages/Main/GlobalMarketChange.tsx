import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GlobalMarketHeader } from "../../Components/StyledComponents";

type CryptoDetails = {
  totalmarketcap: number;
};

export const GlobalMarketChange = () => {
  // prettier-ignore
  const [data, setData] = useState<CryptoDetails>({
          totalmarketcap: "Loading...",
      } as unknown as CryptoDetails);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      const { data } = res.data;

      // prettier-ignore
      const cryptoData = {
        totalmarketcap: numeral(data.total_market_cap.usd).format("$0,0.00")
      };

      setData(cryptoData);
    });
  }, []);

  return (
    <Container>
      <GlobalMarketHeader>GlobalMarketChange</GlobalMarketHeader>
    </Container>
  );
};
