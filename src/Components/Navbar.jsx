import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-14 flex items-center justify-between px-5 text-white">
      <span className="logo text-xl font-bold">
        
        <span>Password</span>
        <span className="text-blue-400">Manager</span>
      </span>
    </nav>
  );
};

export default Navbar;
