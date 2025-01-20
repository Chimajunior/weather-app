import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Weather Guide</h1>
      {/* Optional Dark Mode Toggle */}
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow">
        Toggle Mode
      </button>
    </header>
  );
}

export default Header;
