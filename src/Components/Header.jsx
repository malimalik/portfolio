import React from "react";
const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
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
        <div className="text-white text-xl font-semibold">Ali Malik Portfolio</div>
      </div>
    </nav>
  );
};

export default Header;
