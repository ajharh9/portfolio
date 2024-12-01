import React from 'react';
import projectList from '../data/ProjectList';


const ProjectPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-lg mb-6">
        Here are some of the projects I’ve worked on, showcasing my expertise in frontend, backend, and DevOps technologies.
      </p>

      {projectList.map((project, index) => (
        <div key={index} className="border p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <h3 className="text-lg font-semibold">Technologies Used:</h3>
          <ul className="list-disc ml-6 mb-4">
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold">Key Features:</h3>
          <ul className="list-disc ml-6 mb-4">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                GitHub Repository
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <p className="text-gray-600">Want to know more? Feel free to reach out!</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600"
          onClick={() => window.location.href = '/contact'}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
