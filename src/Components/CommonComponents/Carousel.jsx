import { React, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(carouselImg) {
  const settings = {
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
    <div className="slider-container w-full5263 py-6 px-4 mb-4 bg-[#f1f2f4]" >
      <div className="mx-5 bg-[white] pb-7">
        <Slider {...settings}>
          {carouselImg.carouselImg.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}
export default Carousel;
