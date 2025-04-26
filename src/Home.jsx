import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Carousel from "./Components/CommonComponents/Carousel";
import allCarouselData from "./Data/AllCarousel.json";
import allCategoryData from "./Data/AllCategory.json";
import MoreDemanded from "./Components/CommonComponents/MoreDemanded";
// import Smartphones from "./Components/CommonComponents/Smartphones";
// import OfferPrice from "./Components/CommonComponents/OfferPrice";
// import gridData from "./Data/GridCategory.json";
import Gridbox from "./Components/CommonComponents/Gridbox";

function Home() {
  const [catonedata, setCatonedata] = useState([]);
  const [catTwodata, setCatTwodata] = useState([]);
  const [catThreedata, setCatThreedata] = useState([]);


  // const [stuData, setStuData] = useState([]);
  // const [  , setLoadingState] = useState(true);
  
  // useEffect(() => {
  //   fetch("https://dummy-json.mock.beeceptor.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setStuData(data))
  //     .catch((error) => console.error("Error:", error));
  //   setLoadingState(false);
  // }, []);


  useEffect(() => {
    const catOne = allCategoryData.allCategory[2].fashionData[0].FestiveData;
    const catTwo = allCategoryData.allCategory[2].fashionData[1].SummerData;
    setCatonedata(catOne);
    setCatTwodata(catTwo);
  }, 
  []);

  return (
    <div>
      <div className="bg-[#f1f2f4] px-20">
        <Category />
        <Carousel carouselImg={allCarouselData.allCarousel} />
        <MoreDemanded phonesImg={allCategoryData.allCategory} />
        {/* <MoreDemanded
          phonesImg={
            allCategoryData.allCategory[3].electronicsData[8].smartphones
          }
        /> */}
        <div className="flex gap-6">

          <Gridbox grid_deal={catonedata} />
          <Gridbox grid_deal={catTwodata} />


          {/* This is simple way for static data */}

          {/* <Gridbox grid_deal={gridData.gridCategory[1].SummerData}/> */}

          {/* This is simple way for static data */}
        </div>

      </div>
    </div>
  );
}
export default Home;
