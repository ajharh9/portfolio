import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa'; // Icons for skill sections

const SkillsPage = () => {
  return (
    <div className="pt-4 pb-20 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          My Skills
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in-up">
          Over the years, I have honed my expertise in various technologies and tools to deliver scalable and efficient solutions. Here’s an overview of my core competencies:
        </p>
      </div>

      {/* Skills Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Development */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaCode className="text-blue-500 mr-2" />
            Frontend Development
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, React Router</li>
            <li>Tailwind CSS, Bootstrap</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaServer className="text-green-500 mr-2" />
            Backend Development
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Java, Spring Boot</li>
            <li>Node.js (basic knowledge)</li>
            <li>API Development (RESTful APIs)</li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaTools className="text-purple-500 mr-2" />
            DevOps & Tools
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Docker, Kubernetes</li>
            <li>Git, GitLab, Jenkins</li>
            <li>Oracle, MySQL</li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaDatabase className="text-red-500 mr-2" />
            Programming Languages
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Python, Java, C++</li>
            <li>JavaScript</li>
            <li>Shell Scripting</li>
          </ul>
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

export default SkillsPage;
