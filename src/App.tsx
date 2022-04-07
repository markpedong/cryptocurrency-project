import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CryptoContext } from "./Hooks/useContext";
import { CryptoDetails } from "./Pages/Crypto/CryptoDetails";
import { GlobalHeader } from "./Pages/Crypto/GlobalHeader";
import { NavbarSec } from "./Pages/Crypto/Navbar";
import { Exchanges } from "./Pages/Exchanges/Exchanges";
import { Footer } from "./Pages/Footer/Footer";
import Main from "./Pages/Main/Main";
import "./Styles/Main.scss";
import { TCryptoMain } from "./Types/Interface";

function App() {
  //create a state for the array of data and use TCryptoMain as a Type
  const [crypto, setCryptoData] = useState<TCryptoMain[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader />
        <NavbarSec />
        <CryptoContext.Provider value={{ crypto, setCryptoData }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/currencies/:id" element={<CryptoDetails />} />
            <Route path="/exchanges" element={<Exchanges />} />
          </Routes>
        </CryptoContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
