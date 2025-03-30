import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(carouselImg) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselImg.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img
              src={item.image}
              className="w-full h-auto max-w-3xl rounded-lg shadow-lg"
            />
          </div>
        ))}
        {/* <div>1</div>
        <div>2</div> */}
      </Slider>

    </div>
  );
}
export default Carousel;
