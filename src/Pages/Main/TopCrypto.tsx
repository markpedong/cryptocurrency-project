import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CryptoDetails from "../../Data/cryptodetails.json";
import "../../Styles/TopCrypto.scss";

const TopCrypto = () => {
  type TCrypto = {
    className?: any;
    style?: any;
    onClick?: any;
  };

  function PrevArrow(props: TCrypto) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props: TCrypto) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          dots: true,
          infinite: false,
          swipe: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          infinite: false,
          swipe: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container className="topcrypto_container">
      <Row>
        <Slider {...settings}>
          {CryptoDetails.map((crypto, index) => {
            return (
              <div className="crypto_container" key={index}>
                <img
                  className="crypto_image"
                  src={crypto.image}
                  alt={crypto.name}
                />
                <div className="crypto_description">
                  <p>{crypto.name}</p>
                  <p className="crypto_desc">{crypto.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};

export default TopCrypto;
