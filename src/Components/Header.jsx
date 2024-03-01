import React from "react";

const Header = (props) => {
  const handleNavLinkClick = (page) => {
    props.onNavLinkClick(page);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={() => handleNavLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={() => handleNavLinkClick('about')}
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={() => handleNavLinkClick('freelancing')}
            >
              Freelancing
            </a>
          </li> */}
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={() => handleNavLinkClick('resume')}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={() => handleNavLinkClick('work')}
            >
              Work
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
