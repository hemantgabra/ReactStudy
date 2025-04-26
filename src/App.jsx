import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const fruits = ["apple", "banana", "cherry", 'date'];
  console.log('slice', fruits.slice(1, 3))
  console.log('original after slice', fruits)
  

  const veggies = ['potato', 'tomato', 'carrot', 'onion'];
  console.log('Splice', veggies.splice(1, 2, 'kale'));
  console.log('original after splice', veggies)

    
    

  

  return (
    <div>
      <div><Header /></div>
      

      

      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div><Footer/></div>
    </div>
  );
}

export default App;
