import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Header() {
    return <div>
        <h1>Header</h1>
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
        </BrowserRouter>
        
        
    </div>;
}

export default Header;