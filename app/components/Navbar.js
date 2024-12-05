"use client"; // Pastikan "use client" ada di file ini

import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-100 fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-teal-700 text-xl font-bold uppercase tracking-wide">
          <Link href="/">Heriyanto Sitorus</Link>
        </div>

        {/* Menu untuk Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="#about"
              onClick={onAboutClick}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={onProjectsClick}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={onContactClick}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Burger Button untuk Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-teal-600 hover:text-amber-600 focus:outline-none transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      <div
        className={`fixed top-0 right-0 bg-gray-100 shadow-md w-1/3 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ height: "auto" }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-teal-600 hover:text-amber-600 focus:outline-none transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-4 py-4">
          <li>
            <Link
              href="#about"
              onClick={() => {
                onAboutClick();
                toggleMenu();
              }}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => {
                onProjectsClick();
                toggleMenu();
              }}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => {
                onContactClick();
                toggleMenu();
              }}
              className="text-teal-600 hover:text-amber-600 hover:underline hover:underline-offset-4 transition duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
