import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Carousel from "./Components/CommonComponents/Carousel";

function Home() {
  // const [stuData, setStuData] = useState([]);
  // const [loading, setLoadingState] = useState(true);

  // useEffect(() => {
  //   fetch("https://dummy-json.mock.beeceptor.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setStuData(data))
  //     .catch((error) => console.error("Error:", error));
  //   setLoadingState(false);
  // }, []);

  return (
    <div>
      <div>
        <Category />
        <Carousel/>
      </div>
    </div>
  );
}
export default Home;
