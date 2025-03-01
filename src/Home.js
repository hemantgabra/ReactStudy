import React from "react";
import { useEffect, useState } from "react";


// async function fetchData() {
//   try {
//     let response = await fetch("https://dummy-json.mock.beeceptor.com/posts");
//     let json = await response.json();
//     console.log("Fetched Data:", json);
//     newData = json;
//     return json;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData().then((newData) => {
//   console.log("latestData", newData);
// });





function Home() {
    const[stuData, setStuData]= useState([]);




    useEffect(() =>{
        fetch('https://dummy-json.mock.beeceptor.com/posts')
        .then(response => response.json())
        .then(data => setStuData(data))
        .catch(error => console.error('Error:', error));
    },[])



    return (
        <div className="flex justify-center p-10 gap-10">
{stuData && stuData.map((studentData, index) => {
                return (
                    
                        <div className="border shadow-lg w-1/2 p-5" key={index}>
                        <h1 className="text-5xl">{studentData.userId}</h1>
                        <h2>{studentData.title}</h2>
                        <p>{studentData.body}</p>
                        <a className="hover:underline" href={studentData.link}>Link</a>
                        <h3>{studentData.comment_count}</h3>
                        </div>
                    
                );
            })}
{/* <div>{stuData?.[0]}</div> */}
        </div>
    );
}
export default Home;