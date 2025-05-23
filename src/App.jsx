import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ProductListing from "./ProductListing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div><Header /></div>




      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
  
            <Route path="/productListing/:id" element={<ProductListing />} />
  
    
        </Routes>
      </BrowserRouter>
      <div><Footer /></div>
    </div>
  );
}

export default App;
