import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaTools, FaLaptopCode } from 'react-icons/fa'; // Icons for highlights and fun facts

const AboutPage = () => {
  return (
    <div className="pt-4 pb-20 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          About Me
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in-up">
          Passionate Backend Developer, optimizing enterprise financial modules and designing scalable systems.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Career Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaRocket className="text-blue-500 mr-2" />
            Career Highlights
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              Developed and optimized **financial modules** for wealth products including bonds, equities, and insurance.
            </li>
            <li>
              Designed **REST APIs** enabling secure integration with market data providers and compliance platforms.
            </li>
            <li>
              Reduced batch job execution time **by 67%** by implementing efficient **C++ multithreading** and caching techniques.
            </li>
          </ul>
        </div>

        {/* Right Column: My Mission */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaTools className="text-green-500 mr-2" />
            My Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I strive to build **high-performance, scalable backends** using **Spring Boot, Java, and C++**.  
            Whether it's optimizing batch processes or designing secure REST APIs, my goal is to create systems that drive efficiency and innovation.
          </p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* E-commerce Backend Project */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaLaptopCode className="text-purple-500 mr-2" />
            E-Commerce Backend
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Designed a **secure and scalable** backend system for an **e-commerce platform** using **Spring Boot, JPA, and Spring Security**.  
            Implemented **user authentication, product management, and order processing APIs**, ensuring seamless transactions.
          </p>
        </div>

        {/* Swiggy Clone Project */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaLaptopCode className="text-blue-500 mr-2" />
            Swiggy Clone (Full-Stack)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed a **food delivery platform** inspired by Swiggy, using **React, TailwindCSS, and Spring Boot**.  
            Implemented **restaurant listings, cart management, authentication, and order tracking**, ensuring a **responsive and scalable** user experience.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          Explore My Projects
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
