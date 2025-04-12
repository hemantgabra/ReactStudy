import { React, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OfferPrice(carouselOffer) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  //   useEffect(() => {
  //     JSON.stringify(carouselOffer);
  //   }, []);
  //   let myImgData = JSON.stringify(carouselOffer);
  //   console.log("firstdata", myImgData);
  //     console.log("secondata", carouselOffer);

  return (
    <div className="bg-white my-10">
      <div className="text-2xl font-semibold pl-5 pt-2 pb-10"> 499 Only</div>
      <Slider {...settings}>
        {carouselOffer?.carouselOffer?.some((items) => items.price <= 499) &&
          carouselOffer.carouselOffer.map(
            (items) =>
              items.price <= 499 && (
                <div
                  key={items.id}
                  className="flex justify-center px-10 w-full"
                >
                  <img src={items.image} />
                  <p>{items.name}</p>
                  <p>{items.price}</p>
                </div>
              )
          )}
      </Slider>
    </div>
  );
}

export default OfferPrice;
