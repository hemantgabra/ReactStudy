import React from "react";
// import { React, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel(carouselImg) {
  const slider = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // useEffect(()=>{alert(JSON.stringify(carouselImg))},[]);

  // let myImgData = JSON.stringify(carouselImg);
  // console.log("firstdata", myImgData);
  // console.log("secondata", carouselImg)
  return (
    <div className="slider-container">
      <Slider {...slider}>
        {carouselImg.carouselImg.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img
              src={item.image}
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
