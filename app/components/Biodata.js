"use client"; // Menambahkan 'use client' di sini
import Image from 'next/image';

import React from 'react';

const BioData = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
        <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
          {/* Photo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/bio.png" // Pastikan path gambar benar
              alt="Heriyanto's Activity"
              width={320} // Tambahkan width
              height={384} // Tambahkan height
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">My Resume</h1>
            <p className="text-xl font-light text-gray-600 mb-6">as Software Developer</p>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">Education</h2>
              <p className="text-gray-800">
                <strong>Bachelor of Computer Science (S1 Ilmu Komputer)</strong>
              </p>
            </div>

            {/* Freelance Projects */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">Freelance Projects</h2>
              <p className="text-gray-800 mb-2">
                <strong>QR Web for Hospital Project:</strong> Created a web for handling PCR test
                documents and generating a QR code for proof of completion.
              </p>
              <p className="text-gray-800">
                <strong>Private School Landing Page in Bogor:</strong> Developed a landing page with
                an admin panel for content management.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                Work Experience at PT Asuransi BRI Life
              </h2>
              <p className="text-gray-800 mb-2">
                <strong>Software Engineer (August 2020 - Present)</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>WA Corporate:</strong> Verified customer policy data with BRI Life as Host
                  and Qiscus as Client.
                </li>
                <li>
                  <strong>Contact Center:</strong> Created Restful APIs for IVR, Welcome Call, and
                  Profiling Data.
                </li>
                <li>
                  <strong>My Access:</strong> Managed Registration, Login, and Policy Detail services.
                </li>
                <li>
                  <strong>Notification Center:</strong> Handled API notifications using Kafka
                  technology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioData;
