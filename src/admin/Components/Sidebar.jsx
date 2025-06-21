import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* 🔁 Toggle Button - Always Visible */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
          title="Toggle Sidebar"
        >
          <GiHamburgerMenu />
        </button>
        {isOpen && <span className="text-xl font-bold">Admin Panel</span>}
      </div>

      {/* 🧭 Navigation Links */}
      <ul className="space-y-4 text-[1.2rem]">
        <li>
          <Link
            to="/admin/dashboard"
            className={`flex items-center gap-3 hover:text-yellow-300 ${
              isActive("/admin/dashboard") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            🏠 <span className={`${!isOpen && "hidden"}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/user"
            className={`flex items-center gap-3 hover:text-yellow-300 ${
              isActive("/admin/user") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            👥 <span className={`${!isOpen && "hidden"}`}>Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/setting"
            className={`flex items-center gap-3 hover:text-yellow-300 ${
              isActive("/admin/setting") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            ⚙️ <span className={`${!isOpen && "hidden"}`}>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/productlist"
            className={`flex items-center gap-3 hover:text-yellow-300 ${
              isActive("/admin/productlist") ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            🛒 <span className={`${!isOpen && "hidden"}`}>Product List</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
