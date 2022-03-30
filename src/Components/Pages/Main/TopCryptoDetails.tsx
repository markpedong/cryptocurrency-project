import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import TopCryptoDetailsData from "../../../Data/TopCryptoDetails.json";
import "../../../Styles/TopCryptoDetails.scss";
import { TopCryptoDetailsComponent } from "./TopCryptoDetailsComponent";

export const TopCryptoDetails = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow() {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow() {
    return <div style={{ display: "none" }} />;
  }

  return (
    <Container className="topcryptodetails_container">
      <Row>
        <Slider {...settings}>
          {TopCryptoDetailsData.map((crypto, index) => {
            return (
              <TopCryptoDetailsComponent
                key={index}
                name={crypto.name}
                description={crypto.description}
                image={crypto.image}
              />
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};
