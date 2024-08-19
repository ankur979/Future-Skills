import React from "react";

const SearchSection = () => {
  return (
    <section className="bg-[#e3e3f5] h-auto sm:h-72 flex justify-center items-center py-8 px-4 sm:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">How can we help?</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-3 pl-5 pr-12 w-full sm:w-96 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-lg sm:text-xl">
            &#8594;
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
