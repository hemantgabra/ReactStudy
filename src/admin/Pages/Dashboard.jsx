import { useState, useEffect } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({ sales: 0, orders: 0, users: 0 });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({ sales: 1200, orders: 320, users: 150 });
    }, 1000);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow rounded">📊 Sales: ${stats.sales}</div>
      <div className="bg-white p-6 shadow rounded">🛒 Orders: {stats.orders}</div>
      <div className="bg-white p-6 shadow rounded">👥 Users: {stats.users}</div>
    </div>
  );
};

export default Dashboard;
