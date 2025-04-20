import React from "react";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [addressData, setAddressData] = useState([]);
  // const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState(null);
  

useEffect(() => {
  const callData = async () => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setAddressData(response.data);
      console.log(addressData);
    }
    catch(error){
      console.error("Error fetching data:", error);
    }
    
};
callData();
},[]);







  return(
    <div className="container mx-auto px-4 py-8">
    <Card addressPropsData={addressData} />
    </div>
  )

}

export default Contact;
