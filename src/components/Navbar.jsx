"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Resume from "./Resume";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-950 dark:text-gray-200 border-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center ">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-500 poppins-regular cursor-pointer pt-1">
          <a href="#home">Pritesh Mishra</a>
          <span className="text-gray-600">.</span>
        </h1>

        <div className="flex items-center gap-10 py-1">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-600 font-semibold text-lg dark:text-gray-200">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            {/* <li><a href="#resume" className="hover:text-blue-500">Resume</a></li> */}
            {/* <Resume/> */}
          </ul>

          <div className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer pb-2 px-3 py-3 hidden md:inline-block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-6 md:hidden">
          <div className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer  px-3 py-3 block md:hidden">
            <ThemeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-blue-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-semibold text-lg">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            {/* <li><a href="#resume" onClick={closeMenu} className="hover:text-blue-500">Resume</a></li> */}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
