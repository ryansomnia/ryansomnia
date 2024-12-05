"use client";  // Menambahkan 'use client' di sini


import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 via-blue-800 to-teal-600 text-white py-16 flex justify-center items-center">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <img
            src="head.jpg"
            alt="Heriyanto Sitorus"
            className="w-44 h-44 mt-12 rounded-lg object-cover border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-white mb-4">
              Heriyanto Sitorus
            </h1>
            <p className="text-lg italic text-gray-300 mb-6">
              “Experienced Software Engineer and experienced in developing applications both
              within the company and freelance projects. I have passion in programming, especially
              in stacks such as Node.js, React, SQL, and Kafka but it is possible to learn other
              things.”
            </p>
            <h2 className="text-2xl font-medium bg-gray-100 text-indigo-900 px-6 py-2 rounded-full shadow-md">
              Software Developer
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
