import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Carousel from "./Components/CommonComponents/Carousel";
import allCarouselData from "./Data/AllCarousel.json";
import allCategoryData from "./Data/AllCategory.json";
import Smartphones from "./Components/CommonComponents/Smartphones";
import OfferPrice from "./Components/CommonComponents/OfferPrice";
import gridData from "./Data/GridCategory.json";
import Gridbox from "./Components/CommonComponents/Gridbox";
// import OfferPrice from "./Components/CommonComponents/OfferPrice";

function Home() {
  const [catonedata, setCatonedata] = useState([]);
  const [catTwodata, setCatTwodata] = useState([]);
  const [catThreedata, setCatThreedata] = useState([]);


  // const [stuData, setStuData] = useState([]);
  // const [loading, setLoadingState] = useState(true);

  // useEffect(() => {
  //   fetch("https://dummy-json.mock.beeceptor.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setStuData(data))
  //     .catch((error) => console.error("Error:", error));
  //   setLoadingState(false);
  // }, []);


  useEffect(() => {
    const catOne = gridData.gridCategory[0].FestiveData;
    const catTwo = gridData.gridCategory[1].SummerData;
    //const catThree = allCategoryData.allCategory[0].electronicsData[0].catThree;
    setCatonedata(catOne);
    setCatTwodata(catTwo);
    //setCatThreedata(catThree);
  }
  , []);

  return (
    <div>
      <div className="bg-[#f1f2f4] px-20">
        <Category />
        <Carousel carouselImg={allCarouselData.allCarousel} />
        <OfferPrice carouselOffer={allCategoryData.allCategory} />
        <Smartphones
          phonesImg={
            allCategoryData.allCategory[3].electronicsData[8].smartphones
          }
        />
<div className="flex">
  
        <Gridbox grid_deal={catonedata}/>
        <Gridbox grid_deal={catTwodata}/>

        {/* <Gridbox grid_deal={gridData.gridCategory}/> */}
        {/* <Gridbox grid_deal={gridData.gridCategory[1].SummerData}/> */}
        </div>

      </div>
    </div>
  );
}
export default Home;
