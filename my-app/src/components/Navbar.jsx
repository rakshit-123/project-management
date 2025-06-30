import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow flex justify-between items-center">
    <h1 className="font-bold text-xl">PM Dashboard</h1>
    <div className="space-x-4">
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
      <Link to="/settings" className="hover:underline">
        Settings
      </Link>
    </div>
  </nav>
);

export default Navbar;
