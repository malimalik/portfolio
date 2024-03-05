import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        {/* Collapsible Button (Visible on mobile only) */}
        {console.log(isMenuOpen)}
        <button
          className={`block md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
            isMenuOpen ? "bg-gray-700" : ""
          }`}
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM4 9h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation Links (Collapsible) */}
        <ul
          className={`md:relative w-full md:static md:flex md:flex-wrap md:flex-nowrap space-x-4 md:space-x-8 text-white transition duration-300 ease-in-out 
          ${
            isMenuOpen ? "block bg-gray-800" : "hidden"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>

        <div className="text-white text-xl font-semibold mt-4 md:mt-0 md:ml-auto"></div>
      </div>
    </nav>
  );
};

export default Header;
