"use client";  // Menambahkan 'use client' di sini

import React from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactFooter = () => {
  return (
    <div>
 <footer className="bg-gradient-to-r from-gray-800 via-blue-800 to-teal-600 text-white text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-8">
        Feel free to reach out to me through any of the platforms below.
      </p>

      <div className="flex justify-center gap-8 mb-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/heriyanto-sitorus-7018a3111/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-300 transition duration-300"
        >
          <FaLinkedin className="text-4xl mb-2 hover:scale-110 transition-transform" />
          <span className="text-lg">LinkedIn</span>
        </a>
        {/* Email */}
        <a
          href="mailto:heriyantositorus14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-300 transition duration-300"
        >
          <FaEnvelope className="text-4xl mb-2 hover:scale-110 transition-transform" />
          <span className="text-lg">Email</span>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/6287781018141"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-300 transition duration-300"
        >
          <FaWhatsapp className="text-4xl mb-2 hover:scale-110 transition-transform" />
          <span className="text-lg">WhatsApp</span>
        </a>
      </div>

      <div className="border-t border-gray-500 pt-4">
        <p className="text-sm text-gray-300">&copy; 2024 Heriyanto Sitorus. All rights reserved.</p>
      </div>
    </footer>
    </div>
   
  );
};

export default ContactFooter;
