import React from "react";
import Slider from "react-slick"; // Add this import if using react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function topOffers({topOffer}){

    const offersettings = {
        dots: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
      };

    return(
       
            <div className=" bg-white my-10">
            <div className="text-2xl font-semibold pl-5 pt-2 pb-10">
              Top Offers
            </div>
            <Slider {...offersettings}>
              {topOffer.map((item) => (
                <div key={item.id} className="flex justify-center px-10 w-full">
                  <img src={item.image} className="h-[10rem] mb-5" />
                  <p className="text-sm text-center">{item.name}</p>
                  <p className="font-semibold text-center">₹{item.price}</p>
                </div>
              ))}
            </Slider>
          </div>
        );
    
}
export default topOffers;


