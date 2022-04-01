import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import "../../../Styles/TopCryptoDetails.scss";
import {
  CryptoHeaderDetailsStyle,
  CryptoDescDetailsStyle,
} from "../../Components/StyledComponents";
import axios from "axios";
import { useFetchAPI } from "../../Hooks/useFetchAPI";
import TopCryptoDetails from "../../Data/TopCryptoDetails.json";

console.log(TopCryptoDetails);
interface Props {
  image: string;
  name: string;
  description: string;
}

export const TopCryptoDetailsComponent = () => {
  // prettier-ignore
  // const {data, loading, error} = useFetch();

  // if (loading) return <div>Loading...</div>;

  // if (error) console.log(error);

  // console.log(data)

  return (
    <div>
      <p>
        test
      </p>
    </div>
  );
};

// const [data, setData] = useState({
//   totalcrypto: "Loading...",
//   markets: "Loading...",
//   totalmarketcap: "Loading...",
//   volume24H: "Loading...",
//   btcdominance: "Loading...",
//   ethdominance: "Loading...",
// });

// useEffect(() => {
//   axios
//     .get(
//       "https://cryptopanic.com/api/v1/posts/?auth_token=d977f2394295525856d2add495ed9a94661d5d4f&public=true"
//     )
//     .then((res) => {
//       console.log(res);
//     });
// }, []);

// prettier-ignore
// <Col className="top_cryto_details_container">
//   <img className="top_crypto_details__img" src={props.image} alt={props.name}/>
//   <Container className="top_crypto_description_container">
//     <CryptoHeaderDetailsStyle>{props.name}</CryptoHeaderDetailsStyle>
//     <CryptoDescDetailsStyle>{props.description}</CryptoDescDetailsStyle>
//   </Container>
// </Col>
