import React from 'react';
import projectList from '../data/ProjectList';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectPage = () => {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-4 md:px-10">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          Explore some of my latest work in backend development, optimization, and full-stack apps.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="p-6 overflow-y-auto flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">Technologies:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">Key Features:</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg mb-4">
          Want to know more or work together?
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all inline-block"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;

// import React from 'react';
// import projectList from '../data/ProjectList';

// const ProjectPage = () => {
//   return (
//     <div className="pt-16 pb-20 bg-gray-100 min-h-screen px-4 md:px-8">
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-gray-800 mb-4">My Projects</h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Explore some of my latest projects in backend development, system optimization, and full-stack applications.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col"
//             style={{ height: '500px' }}
//           >
//             <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.name}</h2>
//               <p className="text-gray-600 mb-4">{project.description}</p>

//               <h3 className="text-lg font-semibold text-gray-800">Technologies:</h3>
//               <ul className="list-disc ml-6 text-gray-600 mb-4 space-y-1">
//                 {project.technologies.map((tech, idx) => (
//                   <li key={idx}>{tech}</li>
//                 ))}
//               </ul>

//               <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
//               <ul className="list-disc ml-6 text-gray-600 space-y-1">
//                 {project.features.map((feature, idx) => (
//                   <li key={idx}>{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="p-6">
//               <div className="flex justify-center space-x-4">
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
//                   >
//                     GitHub
//                   </a>
//                 )}
//                 {project.liveDemo && (
//                   <a
//                     href={project.liveDemo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-16">
//         <p className="text-gray-600 text-lg mb-4">
//           Want to know more? Feel free to reach out!
//         </p>
//         <a
//           href="/contact"
//           className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all inline-block"
//         >
//           Contact Me
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;
