import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Carousel from "./Components/CommonComponents/Carousel";
import allCarouselData from "./Data/AllCarousel.json";
import allCategoryData from "./Data/AllCategory.json";
import Smartphones from "./Components/CommonComponents/Smartphones";

function Home() {
  // const [stuData, setStuData] = useState([]);
  // const [loading, setLoadingState] = useState(true);

  // useEffect(() => {
  //   fetch("https://dummy-json.mock.beeceptor.com/posts")npm stasrt
  //     .then((response) => response.json())
  //     .then((data) => setStuData(data))
  //     .catch((error) => console.error("Error:", error));
  //   setLoadingState(false);
  // }, []);

  return (
    <div>
      <div className="bg-[#f1f2f4] px-5">
        <Category />
        <Carousel carouselImg={allCarouselData.allCarousel} />
        <Smartphones
          phonesImg={
            allCategoryData.allCategory[3].electronicsData[8].smartphones
          }
        />
      </div>
    </div>
  );
}
export default Home;