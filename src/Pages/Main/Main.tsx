import { FC } from "react";
import { GlobalHeader } from "./GlobalHeader";
import { NavbarSec } from "./Navbar";
import TopCrypto from "./TopCrypto";

const Main: FC = () => {
  return (
    <div className="section_container">
      <GlobalHeader />
      <NavbarSec />
      <TopCrypto />
    </div>
  );
};

export default Main;
