"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 poppins-regular cursor-pointer">
         <a href="#home">Pritesh Mishra</a><span className="text-gray-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-semibold text-lg">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-semibold text-lg">
            <li><a href="#home" onClick={closeMenu} className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="hover:text-blue-500">About</a></li>
            <li><a href="#skills" onClick={closeMenu} className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-500">Projects</a></li>
            <li><a href="#resume" onClick={closeMenu} className="hover:text-blue-500">Resume</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
