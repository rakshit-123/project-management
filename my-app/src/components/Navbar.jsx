import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-purple-600 p-6 shadow-lg flex justify-between items-center">
    <h1 className="font-black text-3xl tracking-wider text-white">
      ProjectFlow
    </h1>
    <div className="flex gap-[20px]">
      <Link
        to="/dashboard"
        className="text-xl font-bold text-black hover:text-black transition-colors duration-300"
      >
        Dashboard
      </Link>
      <Link
        to="/settings"
        className="text-xl font-bold text-black hover:text-black transition-colors duration-300"
      >
        Settings
      </Link>
    </div>
  </nav>
);

export default Navbar;
