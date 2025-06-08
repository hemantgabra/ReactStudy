import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";


function MoreDemanded({phonesImg}){
//   console.log("sliderImg", phonesImg.length);
 
//  const sliderImg = phonesImg.length;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
    
      const extractAllUnder499 = (data) => {
        const result = [];
    
        data.forEach((category) => {
          // Top-level price check
          if (category.price <= 499) {
            result.push({
              id: category.id,
              name: category.name,
              price: category.price,
              image: category.image || "",
            });
          }
    
          // Loop through all keys and find nested arrays
          Object.keys(category).forEach((key) => {
            const value = category[key];
            if (Array.isArray(value)) {
              value.forEach((item, index) => {
                // Smartphone edge case removed in this JSON
                const numericPrice = parseInt(item.price);
                if (!isNaN(numericPrice) && numericPrice <= 499) {
                  result.push({
                    id: item.id || `${key}-${index}`,
                    name: item.name,
                    price: numericPrice,
                    image: item.image || "",
                  });
                }
              });
            }
          });
        });
    
        return result;
      };
    
      const filteredItems = extractAllUnder499(phonesImg || []);
    
      return (
        <div>       
        <div className="bg-white my-10">
        <div className="text-2xl font-semibold pl-5 pt-2 pb-5">₹499 Only</div>
        <Slider {...settings}>
          
          {filteredItems.map((item) => (
              <Link key={item.id}  to={`/productListing/${item.id}`}
                state={{ productData: item }}
                className=" p-4 rounded hover:shadow-lg transition">

            <div key={item.id} className="flex flex-col items-center px-10 py-2">
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
      </div>
      <div className=" bg-white my-10">
      <div className="text-2xl font-semibold pl-5 pt-2 pb-10">
        Best deals on Smartphones
      </div>
      <Slider {...settings}>

        {phonesImg[3].electronicsData[8].smartphones.map((item) => (
           <Link   key={item.id}
                          to={`/productListing/${item.id}`}
                          state={{ productData: item }}
                          className=" rounded hover:shadow-lg transition">

          <div key={item.id} className="px-8 w-full">
            <img src={item.image} className="h-[10rem] mb-5" />
            <p className="text-sm text-center">{item.name}</p>
            <p className="font-semibold text-center">{item.price}</p>
          </div>

            </Link>
        ))}
      </Slider>
    </div>

</div>
      );
    
}

export default MoreDemanded;
