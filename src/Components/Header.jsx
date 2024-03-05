import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 text-white">
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
