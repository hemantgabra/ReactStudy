import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <div>Header will come here</div>

      <BrowserRouter>
        <div className="sm:bg-red-500">
          <div className="flex justify-between sm:flex-col md:flex-row p-5">
            <div className="bg-blue-500">Logo</div>
            <div className="bg-green-500">
              <nav className="flex shadow-lg p-3 justify-center items-center text-2xl gap-4">
                <Link to="/">Home</Link> |<Link to="/aboutus">About</Link> |
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
