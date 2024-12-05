"use client";  // Menambahkan 'use client' di sini

import Image from 'next/image';

import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Hospital QR Web Project',
      image: 'qr.png',
      stack: ['React', 'Node.js', 'MongoDB', 'QR Code'],
      highlight:
        'A web application that generates PCR test documents with a QR code for hospital verification.',
      link: null,
    },
    // {
    //   title: 'Office Management System',
    //   image: 'https://picsum.photos/id/238/400/300',
    //   stack: ['React', 'SQL', 'Kafka'],
    //   highlight:
    //     'An office management system that automates workflows, reduces paperwork, and tracks employee progress.',
    //   link: 'https://sekolahcerdasbangsa.sch.id',
    // },
    // {
    //   title: 'Church Website',
    //   image: 'https://picsum.photos/id/239/400/300',
    //   stack: ['Vue.js', 'Firebase'],
    //   highlight:
    //     'A church website to share upcoming events, stream services, and manage the community with ease.',
    //   link: 'https://sekolahcerdasbangsa.sch.id',
    // },
    {
      title: 'Sekolah Cerdas Bangsa',
      image: 'webcerdasbangsa.png',
      stack: ['React js', 'Nodejs', 'MySQL'],
      highlight:
        'A landing page for a private school that includes an admin panel for content management.',
      link: 'https://sekolahcerdasbangsa.sch.id',
    },
    {
      title: 'My Access BRILIFE as Backend',
      image: 'myaccess.png',
      stack: ['Nodejs', 'MSSQL', 'JavaScript'],
      highlight:
        'BRI Life MyAccess is a mobile application designed for BRI Life insurance policyholders to access information, conduct transactions, and utilize policy-related services.This application aims to provide convenience, comfort, and security in transactions and services for policyholders.',
      link: 'https://play.google.com/store/apps/details?id=com.brilife.myacces&pcampaignid=web_share',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold text-blue-800 mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-24">
        {projects.map((project, index) => (
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            key={index}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Stack:</strong> {project.stack.join(', ')}
              </p>
              <p className="text-gray-800 mb-4">{project.highlight}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 transition"
                >
                  See My Creation
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
