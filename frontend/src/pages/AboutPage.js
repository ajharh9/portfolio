import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaTools, FaLeaf } from 'react-icons/fa'; // Icons for highlights and fun facts

const AboutPage = () => {
  return (
    <div className="pt-4 pb-20 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen px-4 md:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          About Me
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in-up">
          Discover my journey as a Full Stack Developer and DevOps Enthusiast.
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
              Migrated a product from <span className="font-bold">RHEL8 to RHEL9</span>, optimizing performance and automation.
            </li>
            <li>
              Led the transition from <span className="font-bold">CVS to Git</span>, establishing modern version control workflows.
            </li>
            <li>
              Automated build and deployment processes using <span className="font-bold">Jenkins and Docker</span>.
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
            I believe in <span className="font-bold">continuous learning</span>, collaboration, and delivering high-quality solutions that make a real-world impact. My mission is to bridge the gap between development and operations by building efficient and scalable systems.
          </p>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaLeaf className="text-purple-500 mr-2" />
            Fun Facts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When I’m not coding, you can find me <span className="font-bold">tending to my backyard garden</span> or creating <span className="font-bold">Instagram reels</span> showcasing the beauty of my village.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <Link
          to="/skills"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          Check Out My Skills
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
