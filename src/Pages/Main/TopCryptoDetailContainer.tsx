import { Col, Container, Row } from "react-bootstrap";
import "../../../Styles/TopCryptoDetails.scss";
import { TopCryptoDetailsComponent } from "./TopCryptoDetailsComponent";
import TopCryptoDetailsData from "../../Data/TopCryptoDetails.json";
import { useState } from "react";
import Slider from "react-slick";

export const TopCryptoDetails = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Container className="topcryptodetails_container">
      <Row>
        <Slider {...settings}>
          {/* {TopCryptoDetailsData.map((crypto, index) => {
            return (
              <TopCryptoDetailsComponent
                key={index}
                name={crypto.name}
                description={crypto.description}
                image={crypto.image}
              />
            );
          })} */}
        </Slider>
      </Row>
    </Container>
  );
};
