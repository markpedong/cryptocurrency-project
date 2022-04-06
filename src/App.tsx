import Main from "./Pages/Main/Main";
import "./Styles/Main.scss";
import { Footer } from "./Pages/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { Exchanges } from "./Pages/Exchanges/Exchanges";
import { GlobalHeader } from "./Pages/Crypto/GlobalHeader";
import { NavbarSec } from "./Pages/Crypto/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader />
        <NavbarSec />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
