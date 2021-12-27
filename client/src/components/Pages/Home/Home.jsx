import React from "react";
import { block } from "bem-cn";
import Carousel from "react-bootstrap/Carousel";
import carouselItems from "./consts";
import "./home.scss";

const classname = block("home");

function Home() {
  return (
    <Carousel className={classname("carousel")}>
      {carouselItems.map((carouselItem) => (
        <Carousel.Item className={classname("carousel-item")} key={carouselItem.className}>
          <div className={classname(carouselItem.className)} />
          <Carousel.Caption>
            <h3 className={classname("carousel-item__header")}>{carouselItem.header}</h3>
            <p className={classname("carousel-item__description")}>{carouselItem.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Home;
