import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <div className="banner__container">
            <img
              className="banner__image"
              src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner__container">
            <img
              className="banner__image"
              src="https://i.imgur.com/LB4xLZF.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner__container">
            <img
              className="banner__image"
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner__container">
            <img
              className="banner__image"
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
