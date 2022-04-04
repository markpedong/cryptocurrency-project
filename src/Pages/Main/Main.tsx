import { FC } from "react";
import { Crypto } from "./Crypto";
import { GlobalHeader } from "./GlobalHeader";
import { GlobalMarketChange } from "./GlobalMarketChange";
import { NavbarSec } from "./Navbar";
import TopCoins from "./TopCoins";
import { TopCrypto } from "./TopCrypto";

const Main: FC = () => {
  return (
    <div className="section_container">
      <GlobalHeader />
      <NavbarSec />
      <TopCrypto />
      <GlobalMarketChange />
      <TopCoins />
      <Crypto />
    </div>
  );
};

export default Main;
