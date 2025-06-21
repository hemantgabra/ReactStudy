import { useNavigate } from "react-router-dom";

const Topbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Reset auth state
    navigate("/admin/login"); // Redirect to login
  };

  return (
    <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
