import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Collapse, Container } from "react-bootstrap";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {
  GlobalDesc,
  GlobalDescSpan,
  GlobalMarketHeader,
  GlobalSpan,
  GlobalSpanStyled,
} from "../../Components/StyledComponents";
import "../../Styles/GlobalMarket.scss";
import { CryptoMarket } from "../../Types/Type";

export const GlobalMarketChange = () => {
  const [open, setOpen] = useState(false);

  const [crypto, setCrypto] = useState<CryptoMarket>({
    cryptomarketcap: "Loading...",
    cryptovolume: "Loading...",
    marketcapchange: "Loading...",
    bitcoindominance: "Loading...",
    defi_dominance: "Loading...",
    coin_percentage: "Loading...",
    coin: "Loading...",
    defi_volume_24h: "Loading...",
    bitcoin: "Loading...",
  } as unknown as CryptoMarket);

  useEffect(() => {
    let endpoints = [
      "https://api.coingecko.com/api/v3/global",
      "https://api.coingecko.com/api/v3/global/decentralized_finance_defi",
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    ];

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      const { data } = res[0].data;
      const { data: defi_data } = res[1].data;
      const { bitcoin } = res[2].data;

      // prettier-ignore
      const cryptoData = {
        cryptomarketcap: data.total_market_cap.usd,
        cryptovolume: data.total_volume.usd,
        marketcapchange: +data.market_cap_change_percentage_24h_usd.toFixed(2),
        bitcoindominance: data.market_cap_percentage.btc / 100,
        defi_dominance: +defi_data.defi_dominance / 100,
        coin_percentage: defi_data.top_coin_defi_dominance / 100,
        coin: defi_data.top_coin_name,
        defi_volume_24h: +defi_data.trading_volume_24h,
        bitcoin: bitcoin.usd,
        defi_volume_percentage:(+defi_data.trading_volume_24h / data.total_volume.usd) * 100, 
      };

      setCrypto(cryptoData);
    });
  }, []);

  return (
    <Container className="global_container">
      <GlobalMarketHeader>Today's Cryptocurrency Market Cap</GlobalMarketHeader>
      {/* prettier-ignore */}
      <Container className="global_description_container">
        The global crypto market cap is
        <GlobalSpanStyled>
          {numeral(crypto.cryptomarketcap).format("($ 0.00 a)")}.
          {
            <GlobalDescSpan style={crypto.marketcapchange > 0 ? { color: "#16c784"} : { color: "#ea3943"} }>
              {crypto.marketcapchange > 0 ? < RiArrowUpSFill /> : < RiArrowDownSFill />}
              <GlobalDesc>{crypto.marketcapchange + "%"}</GlobalDesc>
            </GlobalDescSpan>
          }
        </GlobalSpanStyled>
        {crypto.marketcapchange > 0 ? "increase" : "decrease"}, over the last day.
        <button className="readmore_btn" aria-controls="collase_container" aria-expanded={open}  
          onClick={() => { setOpen(!open)}}> read more
        </button>
      </Container>
      <Collapse in={open}>
        <Container id="collase_container">
          {/* prettier-ignore */}
          <GlobalDesc>
            The total crypto market volume over the last 24 hours is{" "}
            {<GlobalSpan>{numeral(crypto.cryptovolume).format("($ 0.00 a)")}</GlobalSpan>}
            . The total volume in DeFi is currently{" "}
            {<GlobalSpan> {numeral(crypto.defi_volume_24h).format("($ 0.00 a)")}</GlobalSpan>}
            , which is{" "}
            {<GlobalSpan>{numeral(crypto.defi_volume_24h / crypto.cryptovolume).format("0.00%")}</GlobalSpan>}{" "}
            of the total crypto market 24-hour volume. DeFi Dominance is{" "}
            {<GlobalSpan>{numeral(crypto.defi_dominance).format("0.00 %")}{" "}</GlobalSpan>}
            , and the Top Coin in DeFi is Currently{" "}
            {<GlobalSpan>{crypto.coin}</GlobalSpan>} with{" "}
            {<GlobalSpan> {numeral(crypto.coin_percentage).format("0.00 %")}</GlobalSpan>}{" "}
            of dominance.
          </GlobalDesc>
          <GlobalDesc className="mt-3">
            Bitcoin's price is currently{" "}
            <GlobalSpan>{numeral(crypto.bitcoin).format("$0,0")}.</GlobalSpan>
          </GlobalDesc>
          <GlobalDesc>
            Bitcoin’s dominance is currently{" "}
            <GlobalSpan>
              {numeral(crypto.bitcoindominance).format("0.00%")}
            </GlobalSpan>
          </GlobalDesc>
        </Container>
      </Collapse>
    </Container>
  );
};
