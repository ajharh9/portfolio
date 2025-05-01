import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaTools, FaUserTie } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="pt-16 pb-20 bg-gray-100 min-h-screen px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A product developer specializing in enterprise financial systems, backend optimization, and API integrations.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard
          icon={<FaRocket className="text-blue-500 text-4xl mb-4" />}
          title="Career Highlights"
          points={[
            "Optimized wealth management modules, cutting batch execution time by 67%.",
            "Integrated secure APIs for real-time financial data syncing.",
            "Developed scalable solutions using C++, Java, and Spring Boot.",
          ]}
        />
        <InfoCard
          icon={<FaTools className="text-green-500 text-4xl mb-4" />}
          title="My Mission"
          points={[
            "Building high-performance backend systems with security, efficiency, and scalability.",
            "Enhancing financial workflows through process automation.",
            "Driving technical excellence with modern frameworks and best practices.",
          ]}
        />
        <InfoCard
          icon={<FaUserTie className="text-purple-500 text-4xl mb-4" />}
          title="Professional Expertise"
          points={[
            "Backend – Java, C++, Spring Boot, Hibernate.",
            "Database – PostgreSQL, MySQL, Oracle PL/SQL.",
            "API & Security – REST APIs, OAuth, Spring Security.",
          ]}
        />
      </div>

      {/* CTA */}
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

const InfoCard = ({ icon, title, points }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition-all">
    {icon}
    <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
    {points.map((point, i) => (
      <p key={i} className="text-gray-600 text-sm">{point}</p>
    ))}
  </div>
);

export default AboutPage;
