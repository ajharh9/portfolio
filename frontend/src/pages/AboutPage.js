import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaTools, FaUserTie } from 'react-icons/fa'; // Icons for sections

const AboutPage = () => {
  return (
    <div className="pt-16 pb-20 bg-gray-100 min-h-screen px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          About Me
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in-up max-w-3xl mx-auto">
          A product developer specializing in enterprise financial systems, backend optimization, and API integrations.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Career Highlights */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-all">
          <div className="flex justify-center mb-4">
            <FaRocket className="text-blue-500 text-4xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Career Highlights</h2>
          <p className="text-gray-600">Optimized wealth management modules, cutting batch execution time by 67 percent.</p>
          <p className="text-gray-600">Integrated secure APIs for real-time financial data syncing.</p>
          <p className="text-gray-600">Developed scalable solutions using C++, Java, and Spring Boot.</p>
        </div>

        {/* My Mission */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-all">
          <div className="flex justify-center mb-4">
            <FaTools className="text-green-500 text-4xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Mission</h2>
          <p className="text-gray-600">Building high-performance backend systems with a focus on security, efficiency, and scalability.</p>
          <p className="text-gray-600">Enhancing financial workflows through process automation and optimization.</p>
          <p className="text-gray-600">Driving technical excellence with modern frameworks and best practices.</p>
        </div>

        {/* Professional Expertise */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-all">
          <div className="flex justify-center mb-4">
            <FaUserTie className="text-purple-500 text-4xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Professional Expertise</h2>
          <p className="text-gray-600">Backend Development – Java, C++, Spring Boot, Hibernate.</p>
          <p className="text-gray-600">Database Optimization – PostgreSQL, MySQL, Oracle PL/SQL.</p>
          <p className="text-gray-600">API & Security – RESTful APIs, OAuth, Spring Security.</p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <Link
          to="/skills"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          Explore My Skills
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
