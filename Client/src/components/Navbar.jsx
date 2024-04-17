import { useState } from "react";
import React from "react";
import "./index.css"


const Navbar = () => {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <p className="">Crack the style code</p>
        {/* Main Navigation Items */}
        <ul className="main-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* Dropdown */}
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#">Dropdown</a>
            {/* Dropdown Content */}
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <a href="/dropdown-item-1">
                    Dropdown Item 1
                  </a>
                </li>
                <li>
                  <a href="/dropdown-item-2">
                    Dropdown Item 2
                  </a>
                </li>
                <li>
                  <a href="/dropdown-item-3">
                    Dropdown Item 3
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
