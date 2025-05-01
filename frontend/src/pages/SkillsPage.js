import React from 'react';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const SkillsPage = () => {
  return (
    <div className="pt-16 pb-20 bg-gray-100 min-h-screen px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">My Skills</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Technical skillset developed through hands-on experience in product engineering and system design.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard
          icon={<FaCode className="text-indigo-500 text-4xl mb-4" />}
          title="Programming"
          skills={["Java", "C++", "Python", "Shell Scripting"]}
        />
        <SkillCard
          icon={<FaServer className="text-red-500 text-4xl mb-4" />}
          title="Backend"
          skills={["Spring Boot", "Hibernate", "REST APIs", "Microservices"]}
        />
        <SkillCard
          icon={<FaDatabase className="text-yellow-500 text-4xl mb-4" />}
          title="Databases"
          skills={["PostgreSQL", "MySQL", "Oracle PL/SQL"]}
        />
        <SkillCard
          icon={<FaTools className="text-green-500 text-4xl mb-4" />}
          title="DevOps & Tools"
          skills={["Docker", "Kubernetes", "Git", "Jenkins", "Linux"]}
        />
      </div>

      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition-all">
    {icon}
    <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
    <ul className="text-gray-600 text-sm space-y-1">
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillsPage;
