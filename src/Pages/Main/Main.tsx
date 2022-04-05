import { FC } from "react";
import { Crypto } from "./Crypto";
import { GlobalMarketChange } from "./GlobalMarketChange";
import TopCoins from "./TopCoins";
import { TopCrypto } from "./TopCrypto";

const Main: FC = () => {
  return (
    <div className="section_container">
      <TopCrypto />
      <GlobalMarketChange />
      <TopCoins />
      <Crypto />
    </div>
  );
};

export default Main;
