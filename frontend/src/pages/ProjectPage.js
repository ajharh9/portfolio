import React from 'react';
import projectList from '../data/ProjectList';

const ProjectPage = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-4 md:px-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in-up">
          Explore some of the exciting projects I’ve worked on, showcasing expertise in frontend, backend, and DevOps technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col"
            style={{ height: '500px' }}
          >
            {/* Content Wrapper */}
            <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
              {/* Project Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {project.name}
              </h2>

              {/* Project Description */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Technologies Used */}
              <h3 className="text-lg font-semibold text-gray-800">Technologies:</h3>
              <ul className="list-disc ml-6 text-gray-600 mb-4 space-y-1">
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>

              {/* Key Features */}
              <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            <div className="p-6">
              <div className="flex items-center justify-center space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg mb-4">
          Want to know more? Feel free to reach out!
        </p>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all"
          onClick={() => (window.location.href = '/contact')}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
