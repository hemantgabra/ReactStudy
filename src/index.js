import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
// import App from './App';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/flex-slider.css";
import "./css/fontawesome.css";
import "./css/owl.css";
import "./css/templatemo-villa-agency.css";


<head>

<meta charset="utf-8" /> 
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

<title>Villa Agency - Real Estate HTML5 Template</title>

    {/* <!-- Bootstrap core CSS --> */}
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    {/* <!-- Additional CSS Files --> */}
    {/* <link rel="stylesheet" href="./css/fontawesome.css" />
    <link rel="stylesheet" href="./css/templatemo-villa-agency.css" />
    <link rel="stylesheet" href="./css/owl.css" />
    <link rel="stylesheet" href="./css/animate.css" /> 
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/> */}
</head>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Home</Link> |
        <Link to="/aboutus">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
);
