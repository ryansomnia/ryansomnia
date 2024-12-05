"use client";  // Menambahkan 'use client' di sini


import React from 'react';
import { FaJava, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import { FaGolang } from 'react-icons/fa6';
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiApachekafka } from 'react-icons/si';

const Stack = () => {
  const skills = [
    { icon: <FaJs />, name: "JavaScript", level: "MID" },
    { icon: <FaNodeJs />, name: "Node.js", level: "MID" },
    { icon: <FaReact />, name: "React Native/JS", level: "Junior" },
    { icon: <SiMysql />, name: "MYSQL", level: "MID" },
    { icon: <SiMicrosoftsqlserver />, name: "SQL Server", level: "MID" },
    { icon: <SiMongodb />, name: "MongoDB", level: "Junior" },
    { icon: <SiApachekafka />, name: "Kafka", level: "MID" },
    { icon: <FaJava />, name: "Java", level: "On Learning" },
    { icon: <FaGolang />, name: "Golang", level: "On Learning" },
    { icon: <RiEnglishInput />, name: "English Language", level: "Low Intermediate" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-teal-700 rounded-full flex justify-center items-center shadow-md transform transition-transform duration-300 hover:scale-110">
                <span className="text-white text-4xl">{skill.icon}</span>
              </div>
              <p className="text-lg font-semibold text-indigo-900 mt-3">{skill.name}</p>
              <span className="text-sm text-indigo-700">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
