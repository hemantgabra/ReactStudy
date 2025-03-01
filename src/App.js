//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";




function App() {
  return (
    <div className="App">
      <div>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/aboutus">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
     
    </div>
  );
}

export default App;
