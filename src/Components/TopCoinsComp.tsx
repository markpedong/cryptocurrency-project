import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../Styles/TopCoins.scss";
import { TopCoinsHeader } from "./StyledComponents";

type Props = {
  url: string;
  btcurl: string;
  title: string;
};

type TopCoins = {
  coins: {
    item: {
      id: string;
      name: string;
      price_btc: number;
      symbol: string;
      thumb: string;
    };
  }[];
};

type TopCrypto = {
  id: string;
  name: string;
  price: string;
  volume24H: string;
  symbol: string;
  thumb: string;
}[];

export const TopCoinsComp = ({ url, title, btcurl }: Props) => {
  const [coins, setCoins] = useState<TopCoins>({} as TopCoins);
  const [btc, setBtc] = useState<number>(0 as number);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      const btcresult = await axios(btcurl);

      setBtc(btcresult.data.bitcoin.usd);
      setCoins(result.data);
    };
    fetchData();
  }, [url]);

  return (
    <div className="topcoins_container">
      <TopCoinsHeader>{title}</TopCoinsHeader>
      <div>
        {coins.coins &&
          coins.coins.map((coin, index) => {
            const cryptoDetails = {
              id: coin.item.id,
              name: coin.item.name,
              price: coin.item.price_btc * btc,
              symbol: coin.item.symbol,
              thumb: coin.item.thumb,
            };

            return (
              <div key={index}>
                <img
                  src={String(cryptoDetails.thumb)}
                  alt={cryptoDetails.name}
                />
                <p>{cryptoDetails.symbol}</p>
                <p>{cryptoDetails.name}</p>
                <p>{numeral(cryptoDetails.price).format("$0,0.00000")}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
