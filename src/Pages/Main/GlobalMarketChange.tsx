import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Container, Button, Collapse } from "react-bootstrap";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { GlobalMarketHeader } from "../../Components/StyledComponents";
import "../../Styles/GlobalMarket.scss";

type CryptoDetails = {
  totalmarketcap: number;
  totalvolume: number;
  marketcapchange: number;
};

export const GlobalMarketChange = () => {
  const [open, setOpen] = useState(false);
  // prettier-ignore
  const [data, setData] = useState<CryptoDetails>({
          totalmarketcap: "Loading...",
          totalvolume: "Loading...",
          marketcapchange: "Loading...",
      } as unknown as CryptoDetails);

  useEffect(() => {
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=0e52f42f-5991-43e5-9f51-e3e61eba7626",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "0e52f42f-5991-43e5-9f51-e3e61eba7626",
          },
        }
      )
      .then((res) => {
        // const { data } = res.data;

        console.log(res);

        // prettier-ignore
        // const cryptoData = {
        // totalmarketcap: numeral(data.total_market_cap.usd).format("$ 0.00 a"),
        // totalvolume:  numeral(data.total_volume.usd).format("$ 0.00 a"),
        // marketcapchange: data.market_cap_change_percentage_24h_usd.toFixed(2),
        //};

        // setData(cryptoData);
        // console.log(cryptoData);
      });
  }, []);

  return (
    <Container className="global_container">
      {/*  <GlobalMarketHeader>Today's Cryptocurrency Market Cap</GlobalMarketHeader>
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
               <RiArrowDownSFill />
               <p>{data.marketcapchange + "%"}</p>
             </div>
           }
         </div>
       )}
       {data.marketcapchange > 0 ? "increase" : "decrease"}, over the last day.
       <button
         className="readmore_btn"
         onClick={(e) => {
           setOpen(!open);
         }}
         aria-controls="collase_container"
         aria-expanded={open}
       >
         read more
       </button>
     </Container>
     <Collapse in={open}>
       <Container id="collase_container">
         <p>
           The total crypto market volume over the last 24 hours is ₱6.38T,
           which makes a 10.39% decrease. The total volume in DeFi is currently
           ₱1.07T, 16.69% of the total crypto market 24-hour volume. The volume
           of all stable coins is now ₱5.23T, which is 81.89% of the total
           crypto market 24-hour volume. Bitcoin's price is currently
           ₱2,402,330.92. Bitcoin’s dominance is currently 40.96%, a decrease
           of 0.36% over the day.
         </p>
         <p>Bitcoin's price is currently ₱2,402,330.92.</p>
         <p>
           Bitcoin’s dominance is currently 40.96%, a decrease of 0.36% over
           the day.
         </p>
       </Container>
     </Collapse> */}
    </Container>
  );
};
