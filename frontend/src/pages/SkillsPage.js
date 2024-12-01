import React from 'react';
import { Link } from 'react-router-dom';
const SkillsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">My Skills</h1>
      <p className="text-lg mb-4">
        Over the years, I have honed my expertise in various technologies and tools to deliver scalable and efficient solutions. Here’s an overview of my core competencies:
      </p>

      <h2 className="text-2xl font-semibold mb-2">Frontend Development</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, React Router</li>
        <li>Tailwind CSS, Bootstrap</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Java, Spring Boot</li>
        <li>Node.js (basic knowledge)</li>
        <li>API Development (RESTful APIs)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">DevOps & Tools</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Docker, Kubernetes</li>
        <li>Git, GitLab, Jenkins</li>
        <li>Oracle, MySQL</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Programming Languages</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Python, Java, C++</li>
        <li>JavaScript</li>
        <li>Shell Scripting</li>
      </ul>

      <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Explore My Projects
      </Link>
    </div>
  );
};

export default SkillsPage;
