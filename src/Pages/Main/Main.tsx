import { FC } from "react";
import { GlobalHeader } from "./GlobalHeader";
import { NavbarSec } from "./Navbar";
import TopCoins from "./TopCoins";
import { TopCrypto } from "./TopCrypto";

const Main: FC = () => {
  return (
    <div className="section_container">
      <GlobalHeader />
      <NavbarSec />
      <TopCrypto />
      <TopCoins />
    </div>
  );
};

export default Main;
