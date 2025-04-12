import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategoryImg({ catImg = [] }) {

  const catsetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="relative bg-white py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Top Offers</h2>

      <Slider  {...catsetting}>
        {catImg.map((item) => (
          <div key={item.id} className="flex flex-col items-center px-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-[10rem] mb-2 object-contain"
            />
            <p className="text-sm text-center">{item.name}</p>
            <p className="font-semibold text-center text-green-600">
              {item.discount}
            </p>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

export default CategoryImg;
