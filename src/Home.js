import React from "react";
import StudentData from "./Components/StudentData";
import {
    useEffect,
    useState
} from "react";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummy-json.mock.beeceptor.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
               
            
            .catch(error => console.log(error));
    }, []);







    return (
        <div>
         {/* {data.length > 0 ? (
            data.map((studentdata, index) => {
                return(
                    <div key={index}>
                        <h1>{studentdata.title}</h1>
                    </div>
                )
            })
         ) : (<h2>Loading....</h2>)} */}
<StudentData studentPropsdata={data} />
        </div>
     );
}
export default Home;