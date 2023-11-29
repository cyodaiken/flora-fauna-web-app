import React from "react";
import { useState } from "react";
import "./CommunityCarousel.css";
import { Carousel } from "react-bootstrap";

const HomeCommunityCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="justify-content-center text-center">
      <h3 className="mt-4">Community Members of MyEcologist</h3>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-align-center pt-3 pb-3"
      >
        <Carousel.Item>
          <div className="row d-flex justify-content-center m-2">
            <div className="col-8  text-center align-middle">
              <div className="row">
                <div className="justify-content-center text-center">
                  <h3>"Best site ever! part 1"</h3>
                </div>
              </div>
              <div className="community-text row">
                <p className="text-right align-middle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
              <div className="community-text row">
                <p className="text-muted text-right align-middle">
                  Tom Brailey ~ Photographer
                </p>
              </div>
            </div>
            <div className="col-4 community-user-image-div text-center">
              <img
                className="rounded-circle shadow-1-strong"
                src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png"
                alt="avatar"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row d-flex justify-content-center m-2">
            <div className="col-8 text-center align-middle">
              <div className="row">
                <div className="justify-content-center text-center">
                  <h3>"Best site ever! part 2"</h3>
                </div>
              </div>
              <div className=" community-text row">
                <p className="text-right align-middle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
              <div className=" community-text row">
                <p className="text-muted text-right align-middle">
                  Tom Brailey ~ Photographer
                </p>
              </div>
            </div>
            <div className="col-4 community-user-image-div text-center">
              <img
                className="rounded-circle shadow-1-strong"
                src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png"
                alt="avatar"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row d-flex justify-content-center m-2">
            <div className="col-8 text-center align-middle">
              <div className="row">
                <div className="justify-content-center text-center">
                  <h3>"Best site ever! part 3"</h3>
                </div>
              </div>
              <div className=" community-text row">
                <p className="text-right align-middle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
              <div className="community-text row">
                <p className="text-muted text-right align-middle">
                  Tom Brailey ~ Photographer
                </p>
              </div>
            </div>
            <div className="col-4 community-user-image-div text-center">
              <img
                className="rounded-circle shadow-1-strong"
                src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png"
                alt="avatar"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCommunityCarousel;
