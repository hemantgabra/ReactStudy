import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [stuData, setStuData] = useState([]);
  const [loading, setLoadingState] = useState(true);

  useEffect(() => {
    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => response.json())
      .then((data) => setStuData(data))
      .catch((error) => console.error("Error:", error));
    setLoadingState(false);
  }, []);

  return (
    <div className="flex justify-center p-10 gap-10">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        stuData.map((studentData, index) => {
          return (
            <div className="border shadow-lg w-1/2 p-5" key={index}>
              <h1 className="text-5xl">{studentData.userId}</h1>
              <h2>{studentData.title}</h2>
              <p>{studentData.body}</p>
              <a className="hover:underline" href={studentData.link}>
                Link
              </a>
              <h3>{studentData.comment_count}</h3>
            </div>
          );
        })
      )}

      {/* <div>{stuData?.[1]?.title}</div> */}
      {/* <div>{JSON.stringify(stuData)}</div> */}
    </div>
  );
}
export default Home;
