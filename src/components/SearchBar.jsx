import React from "react";

function SearchBar({ city, onCityChange, onSearch }) {
  return (
    <div className="flex space-x-4 w-full max-w-md mx-auto my-6">
      <input
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Enter city name"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
