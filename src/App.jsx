import { useState } from "react";
import {BrowserRouter as Router, Routes,Route, Navigate,useLocation,} from "react-router-dom";

// User Pages
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ProductListing from "./ProductListing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Admin Pages
import Sidebar from "./admin/Components/Sidebar";
import Topbar from "./admin/Components/Topbar";
import Dashboard from "./admin/Pages/Dashboard";
import Login from "./admin/Pages/Login";
import Setting from "./admin/Pages/Setting";
import User from "./admin/Pages/User";
import Productlist from "./admin/Pages/Productlist";

// ✅ Protected Route Component
const RequireAuth = ({ isAuthenticated, children }) => {
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} replace />
  );
};

// ✅ User Layout
function UserLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productListing/:id" element={<ProductListing />} />
      </Routes>
      <Footer />
    </>
  );
}

// ✅ Admin Layout
function AdminLayout({ onLogout }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar onLogout={onLogout} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/user" element={<User />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </div>
    </div>
  );
}

// ✅ Main App Component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Admin Layout - Protected */}
        <Route
          path="/admin/*"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <AdminLayout onLogout={handleLogout} />
            </RequireAuth>
          }
        />

        {/* Public User */}
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
