import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function MoreDemanded({ phonesImg, currentOffer }) {

const offerCategory = useSelector((state) => state.offer.offerCategory);
console.log("ShoesData**********", offerCategory);

    // console.log("sliderImg", phonesImg.length);

  //  const sliderImg = phonesImg.length;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };


  return (
    <div>
      <div>test</div>
      <div className="bg-white my-10">
        {!phonesImg? <div className="text-2xl font-semibold pl-5 pt-2 pb-5">₹499 Only</div> : ''}
        {!phonesImg?  
        <Slider {...settings}>
          {currentOffer?.map((item) => (
            console.log("item", item),
            <Link
              key={item.id}
              to={`/productListing/${item.id}`}
              state={{ productData: item }}
              className=" p-4 rounded hover:shadow-lg transition"
            >
              <div
                className="flex flex-col items-center px-10 py-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-green-600 font-semibold text-sm">
                  ₹{item.price}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
        : ''}
        
      </div>
      <div className=" bg-white my-10">
        {!currentOffer? <div className="text-2xl font-semibold pl-5 pt-2 pb-10">Best deals on Smartphones</div> : ''}
        
          {!currentOffer? 
        <Slider {...settings}>
          {phonesImg?.map((data) => (
            <Link
              key={data.id}
              to={`/productListing/${data.id}`}
              state={{ productData: data }}
              className=" rounded hover:shadow-lg transition"
            >
              <div key={data.id} className="px-8 w-full">
                <img src={data.image} className="h-[10rem] mb-5" />
                <p className="text-sm text-center">{data.name}</p>
                <p className="font-semibold text-center">{data.price}</p>
              </div>
            </Link>
          ))}
        </Slider> : ''
        }
      </div>
    </div>
  );
}

export default MoreDemanded;
