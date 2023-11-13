import React from "react";
import { useState } from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";

const HomeMainCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-align-center"
      >
        <Carousel.Item>
          <img
            className="carousel-image img-fluid"
            src="https://i1.adis.ws/i/canon/pca---wildlife-photography---wildlife-tips-intro-page-shutterstock_760566388_94cf75c81a874ceab4a474493862d708?$media-collection-full-dt$"
            alt="slide 1"
          />
          <Carousel.Caption className="carousel-text-to-left">
            <h3>FOXY FOX</h3>
            <p>I dont know, something</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" carousel-image img-fluid"
            src="https://i1.adis.ws/i/canon/eos-r7-sample-08-get-inspired-tips_fbf54c6ec3814d889961c40f78bbef66?$media-collection-full-dt$"
            alt="slide 2"
          />
          <Carousel.Caption className="carousel-text-to-left">
            <h3>Image 2</h3>
            <p>I dont know, something</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image img-fluid"
            src="https://i1.adis.ws/i/canon/infobank-exposure-compensation-1a_5b89e93f96ec402aa2552a4f96241ecb?$media-collection-full-dt$"
            alt="slide 3"
          />
          <Carousel.Caption className="carousel-text-to-left">
            <h3>Image 3</h3>
            <p>I dont know, something</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeMainCarousel;
