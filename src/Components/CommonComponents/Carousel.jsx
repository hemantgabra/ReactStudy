import { React, useEffect } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function AutoPlay(carouselImg) {
  const settings  = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    // autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };

  // useEffect(()=>{(JSON.stringify(carouselImg))},[]);
  // let myImgData = JSON.stringify(carouselImg);
  // console.log("firstdata", myImgData);
  // console.log("secondata", carouselImg)
  return (
    <div className="slider-container w-full5263 py-6  mb-4 bg-[#f1f2f4]">
      <div className=" bg-[white] pb-7">
        <Slider {...settings}>
          {carouselImg.carouselImg.map((item) => (
            <div key={item.id}>
              <img src={item.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
