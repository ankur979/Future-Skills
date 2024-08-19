import React from "react";

const Header = () => {
  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between pl-8 pr-8 py-3 bg-black text-white">
      <div className="flex items-center mb-2 sm:mb-0">
        <span className="font-bold text-xl">Abstract</span>
        <span className="mx-3 sm:inline">|</span>
        <span className="text-sm sm:text-base">Help Center</span>
      </div>
      <button className="border border-white py-1 px-4 rounded hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
        Submit a request
      </button>
    </nav>
  );
};

export default Header;
