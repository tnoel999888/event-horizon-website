import "./home.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselItems from "./consts";

function Home() {
  return (
    <Carousel className="carousel">
      {carouselItems.map((carouselItem) => (
        <Carousel.Item className="carousel-item">
          <div className={carouselItem.className} />
          <Carousel.Caption>
            <h3 className="carousel-item__header">{carouselItem.header}</h3>
            <p className="carousel-item__description">{carouselItem.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Home;
