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
  bitcoindominance: number;
};

type Defi = {
  defi_dominance: number;
  defi_market_cap: number;
  top_coin_defi_dominance: number;
  top_coin_name: string;
  trading_volume_24h: number;
};

type Bitcoin = {
  usd: number;
};

export const GlobalMarketChange = () => {
  const [open, setOpen] = useState(false);
  // prettier-ignore
  const [data, setData] = useState<CryptoDetails>({
      totalmarketcap: "Loading...",
      totalvolume: "Loading...",
      marketcapchange: "Loading...",
      bitcoindominance: "Loading...",
  } as unknown as CryptoDetails);

  const [defi, setDefi] = useState<Defi>({
    defi_dominance: "Loading...",
    defi_market_cap: "Loading...",
    top_coin_defi_dominance: "Loading...",
    top_coin_name: "Loading...",
    trading_volume_24h: "Loading...",
  } as unknown as Defi);

  const [bitcoinprice, setBitcoinPrice] = useState<Bitcoin>({
    usd: "Loading...",
  } as unknown as Bitcoin);

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
        totalmarketcap: numeral(data.total_market_cap.usd).format("$ 0.00 a"),
        totalvolume:  data.total_volume.usd,
        marketcapchange: data.market_cap_change_percentage_24h_usd.toFixed(2),
        bitcoindominance: data.market_cap_percentage.btc,
      };

      // prettier-ignore
      const defiData = {
        defi_dominance: +defi_data.defi_dominance,
        defi_market_cap: +defi_data.defi_market_cap,
        top_coin_defi_dominance: defi_data.top_coin_defi_dominance,
        top_coin_name: defi_data.top_coin_name,
        trading_volume_24h: +defi_data.trading_volume_24h,
      };

      setData(cryptoData);
      setDefi(defiData);
      setBitcoinPrice(bitcoin);

      console.log(bitcoinprice);
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
                <RiArrowDownSFill />
                <p>{data.marketcapchange + "%"}</p>
              </div>
            }
          </div>
        )}
        {data.marketcapchange > 0 ? "increase" : "decrease"}, over the last day.
        <button
          className="readmore_btn"
          onClick={() => {
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
            The total crypto market volume over the last 24 hours is
            {<span>{numeral(data.totalvolume).format("$ 0.00 a")}</span>}. The
            total volume in DeFi is currently
            {numeral(defi.trading_volume_24h).format("$ 0.00 a")}, which is
            {numeral(defi.trading_volume_24h / data.totalvolume).format(
              "0.00%"
            )}
            of the total crypto market 24-hour volume. The total volume in DeFi
            is currently {numeral(defi.trading_volume_24h).format("$ 0.00 a")}{" "}
            for 24-hour volume and the total market cap of DeFi is{" "}
            {numeral(defi.trading_volume_24h).format("$ 0.00 a")} , DeFi
            Dominance is {defi.defi_dominance.toString().slice(0, 5) + "%"}, and
            the Top Coin in DeFi is Currently {defi.top_coin_name} with{" "}
            {defi.top_coin_defi_dominance.toString().slice(0, 5) + "%"} of
            dominance.
          </p>
          <p>
            Bitcoin's price is currently{" "}
            {numeral(bitcoinprice.usd).format("$0,0")}.
          </p>
          <p>
            Bitcoin’s dominance is currently{" "}
            {data.bitcoindominance.toString().slice(0, 5)}%.
          </p>
        </Container>
      </Collapse>
    </Container>
  );
};

// numeral(defi.trading_volume_24h / data.totalvolume).format('0.00%')
