import {useEffect, useState} from "react";
import ServiceCard from './Components/ServicesCard';

function AllServices() {
const [allServices, setAllServices] = useState([]);
const [filterData, setFilterData] = useState([]);

const cType = [
    {name: "Cosmetic"},
    {name: "Hair"}
]



useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        const servicesWithType = data.products.map(item => ({
          ...item,
          type: "api"
        }));

        const staticWithType = cType.map(item => ({
          ...item,
          type: "static"
        }));

        setAllServices(servicesWithType);

        // Merge static + API
        setFilterData([...staticWithType, ...servicesWithType]);
      });
  }, []);


console.log("filterData^^^^^^^^^^^^^^^^", filterData);






    return (
        <div className="container w-full m-auto p-10">
            <ServiceCard data={filterData}/>
            
            
            
        </div>
    )
}
export default AllServices;