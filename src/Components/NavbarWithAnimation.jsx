import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black px-4 w-full flex items-center justify-between py-3">
      {/* Logo Section */}
      <div className="text-white text-2xl font-bold">JOE</div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="text-white md:hidden"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Navbar Links */}
      <div
        className={`absolute top-14 left-0 max-md:w-full bg-black text-center md:flex md:static md:w-auto md:bg-transparent ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row md:gap-6 p-3 md:p-0">
          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg relative group px-3 py-2"
            >
              {item}
              {/* Underline Hover Animation */}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
