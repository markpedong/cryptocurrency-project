import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Styles/Crypto.scss";
import { RiArrowDownSFill, RiArrowUpSFill, RiMore2Fill } from "react-icons/ri";
import { CDigits } from "../../Components/StyledComponents";
export const Crypto = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCrypto(res.data);
      });
  }, []);

  console.log(crypto);
  return (
    <Container className="table_main">
      <Table borderless className="table_container">
        <thead className="thead">
          <tr className="tr_container">
            <th>
              <p className="header"></p>
            </th>
            <th>
              <p className="header">#</p>
            </th>
            <th>
              <p className="header">Name</p>
            </th>
            <th>
              <p className="header text-end">Price</p>
            </th>
            <th>
              <p className="header text-end">Price 24h%</p>
            </th>
            <th>
              <p className="header text-end">Market Cap</p>
            </th>
            <th>
              <p className="header text-end">M.Cap 24h%</p>
            </th>
            <th>
              <p className="header text-end">Volume(24h)</p>
            </th>
            <th>
              <p className="header text-end">Circulating Supply</p>
            </th>
            <th>
              <p className="header text-end">Max Supply</p>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="crypto_main">
            <td></td>
            <td>
              <div className="justify-content-start">
                <p className="crypto_number">1</p>
              </div>
            </td>
            <td>
              <div className="justify-content-start">
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
                <p className="crypto_name">Bitcoin</p>
                <p className="crypto_sym">BTC</p>
              </div>
            </td>
            <td>
              <div className="justify-content-end">
                <CDigits>$46,658.38</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end" style={{ color: "#16c784" }}>
                <RiArrowUpSFill />
                <CDigits>1.28%</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end">
                <CDigits>$885,633,866,521</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end" style={{ color: "#16c784" }}>
                <RiArrowUpSFill />
                <CDigits>1.28%</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end">
                <CDigits>$31,184,248,479</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end">
                <CDigits>19,003,050 BTC</CDigits>
              </div>
            </td>
            <td>
              <div className="justify-content-end">
                <CDigits>21,000,000 BTC</CDigits>
              </div>
            </td>
            <td>
              <RiMore2Fill />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
