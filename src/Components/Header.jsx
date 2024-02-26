import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Freelancing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              The Real World
            </a>
          </li>
        </ul>

        {/* Brand */}
        <div className="text-white text-xl font-semibold mt-4 md:mt-0 md:ml-auto">
          Ali Malik Portfolio
        </div>
      </div>
    </nav>
  );
};

export default Header;
