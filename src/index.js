import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
// import App from './App';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Services from "./Services";
import "./css/main.css";


<head>

<meta charset="utf-8" /> 
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

<title>Villa Agency - Real Estate HTML5 Template</title>

    {/* <!-- Bootstrap core CSS --> */}
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    
</head>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <nav className="shadow font-weight-bold text-lg gap-3 flex justify-content-center">
        <Link to="/">Home</Link> |
        <Link to="/aboutus">About</Link> |
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
