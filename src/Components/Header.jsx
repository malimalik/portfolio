import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {console.log(isMenuOpen)}
        <button
          className={"block md:hidden focus:outline-none"}
          onClick={toggleMenu}
        >
          <svg viewBox="0 0 100 80" width="40" height="40" className="mb-2">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>

        {/* Navigation Links (Collapsible) */}
        <ul
          className={`md:relative w-full md:static md:flex md:flex-wrap md:flex-nowrap space-x-4 md:space-x-8 text-white transition duration-300 ease-in-out 
        ${isMenuOpen ? "block bg-gray-800" : "hidden"}`}
          style={{ alignItems: "center" }}
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

        {/* <div className="text-white text-xl font-semibold mt-4 md:mt-0 md:ml-auto"></div> */}
      </div>
    </nav>
  );
};

export default Header;
