import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/TopCoins.scss";
import { MoreSpan, TopCoinsHeader } from "./StyledComponents";
import { TopCoinsProps, TopCoins } from "../Types/Type";

export const TopCoinsComp = ({ url, title }: TopCoinsProps) => {
  const [coins, setCoins] = useState<TopCoins>({} as TopCoins);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setCoins(result.data);
    };
    fetchData();
  }, [url]);

  return (
    <div className="topcoins_container">
      <TopCoinsHeader>{title}</TopCoinsHeader>
      <MoreSpan>more</MoreSpan>
      <div className="coins_container">
        {coins.coins &&
          coins.coins
            .map((coin, index) => {
              const cryptoDetails = {
                id: coin.item.id,
                name: coin.item.name,
                symbol: coin.item.symbol,
                thumb: coin.item.thumb,
              };

              return (
                <div key={index} className="top_coins">
                  <p className="coin_index">{index + 1}</p>
                  <img
                    src={String(cryptoDetails.thumb)}
                    alt={cryptoDetails.name}
                  />
                  <p className="coin_name">{cryptoDetails.name}</p>
                  <p className="coin_sym">{cryptoDetails.symbol}</p>
                </div>
              );
            })
            .slice(0, 3)}
      </div>
    </div>
  );
};
