import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";

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
      </div>
    </div>
  );
}
export default Home;
