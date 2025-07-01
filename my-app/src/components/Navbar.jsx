import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-[#c7cdea] rounded-[10px] p-1 backdrop-blur-md border-1 border-[#17a2b8] flex justify-between items-center">
    <h1 className="font-white text-3xl tracking-wider text-slate-900 p-2">
      ProjectFlow
    </h1>
    <div className="flex gap-[20px] p-2 m-2">
      <Link
        to="/dashboard"
        className="text-xl font-bold text-white no-underline hover:text-white no-underline transition-colors duration-300"
      >
        Dashboard
      </Link>
      <Link
        to="/settings"
        className="text-xl font-bold text-white no-underline hover:text-white no-underline transition-colors duration-300"
      >
        Settings
      </Link>
    </div>
  </nav>
);

export default Navbar;
