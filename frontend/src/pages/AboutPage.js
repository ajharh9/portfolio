import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 pb-20 pt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">👨‍💻 About Me</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hello, I’m <span className="font-semibold text-gray-800">Azhar Hussain</span>, a passionate and results-driven Product Developer with over <span className="font-semibold text-gray-800">2.5+ years of experience</span> specializing in backend technologies, financial systems, and performance optimization.
          </p>
        </div>

        {/* Summary Section */}
        <section className="mb-16 px-6 py-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">🛠️ My Journey</h2>
          <p className="text-lg text-gray-700">
            I thrive on solving complex problems in the finance domain, working with advanced tools like <span className="font-semibold text-gray-800">C++, Java, Spring Boot</span>, and <span className="font-semibold text-gray-800">Oracle PL/SQL</span>. I design and optimize backend systems, develop microservices, and integrate external APIs to streamline workflows and enhance user experience.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Passionate about clean code, performance tuning, and building scalable solutions, I am driven to create impactful and efficient systems that contribute to business success.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">⚙️ My Technical Toolbox</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-lg text-gray-700">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
              <p>Java, C++, Python, SQL</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
              <p>Spring Boot, Spring MVC, Hibernate, JPA</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
              <p>React, HTML, CSS</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
              <p>Oracle, PostgreSQL, MySQL</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">DevOps & Tools</h3>
              <p>Git, Maven, Jenkins, Docker, Postman, Jira</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Systems & APIs</h3>
              <p>Linux, Shell Scripting, REST APIs</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">💼 Professional Experience</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Product Developer @ Infosys Finacle (EdgeVerve)</h3>
            <p className="text-gray-600">Jan 2023 – Present | Hyderabad, Telangana</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              <li>Designed and enhanced wealth modules for mutual funds, bonds, insurance, and IPOs.</li>
              <li>Built microservices using Spring Boot to streamline advisory and customer workflows.</li>
              <li>Optimized legacy C++ batch processes with STL, multithreading, and caching techniques.</li>
              <li>Integrated external APIs for market data, compliance checks, and risk profiling.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">🎓 Education</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="font-medium text-gray-800">B.Tech in Electronics & Communication Engineering</p>
            <p className="text-gray-600">Heritage Institute of Technology, Kolkata</p>
            <p className="text-gray-600">2018 – 2022 | CGPA: 8.67 / 10</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;




// const AboutPage = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 px-6 pb-20 pt-5">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-6 border-b border-gray-400 pb-2">👨‍💻 About Me</h1>

//                 {/* Summary Section */}
//                 <section className="mb-10">
//                     <p className="leading-relaxed text-lg text-gray-800">
//                         Hey there! I’m <span className="font-semibold text-gray-900">Azhar Hussain</span>, a passionate Product Developer with <span className="font-semibold text-gray-900">2.5+ years of experience</span> at EdgeVerve (Infosys Finacle). I thrive on solving complex problems in the finance domain, working across backend systems using <span className="font-semibold text-gray-900">C++, Java, Spring Boot</span>, and <span className="font-semibold text-gray-900">Oracle PL/SQL</span>.
//                     </p>
//                     <p className="mt-4 leading-relaxed text-gray-800">
//                         My focus lies in developing and optimizing modules related to portfolio management, market integrations, and advisory workflows. I'm driven by a deep interest in performance tuning, clean code practices, and building scalable backend solutions.
//                     </p>
//                 </section>

//                 {/* Skills Section */}
//                 <section className="mb-10">
//                     <h2 className="text-2xl font-semibold mb-4">⚙️ Technical Skills</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
//                         <div><span className="font-semibold text-gray-900">Languages:</span> Java, C++, Python, SQL</div>
//                         <div><span className="font-semibold text-gray-900">Backend:</span> Spring Boot, Spring MVC, Hibernate, JPA</div>
//                         <div><span className="font-semibold text-gray-900">Frontend:</span> React, HTML, CSS (Basic)</div>
//                         <div><span className="font-semibold text-gray-900">Databases:</span> Oracle, PostgreSQL, MySQL</div>
//                         <div><span className="font-semibold text-gray-900">DevOps & Tools:</span> Git, Maven, Jenkins, Docker, Postman, Jira</div>
//                         <div><span className="font-semibold text-gray-900">Systems & APIs:</span> Linux, Shell Scripting, REST APIs</div>
//                     </div>
//                 </section>

//                 {/* Experience Section */}
//                 <section className="mb-10">
//                     <h2 className="text-2xl font-semibold mb-4">💼 Professional Experience</h2>
//                     <div className="bg-white p-4 rounded-xl shadow text-sm text-gray-800">
//                         <h3 className="text-lg font-semibold text-gray-900">Product Developer @ Infosys Finacle (EdgeVerve)</h3>
//                         <p className="text-sm text-gray-600">Jan 2023 – Present | Hyderabad, Telangana</p>
//                         <ul className="mt-2 list-disc list-inside space-y-1">
//                             <li>Designed and enhanced wealth modules for mutual funds, bonds, insurance, and IPOs.</li>
//                             <li>Built microservices using Spring Boot to streamline advisory and customer workflows.</li>
//                             <li>Optimized legacy C++ batch processes with STL, multithreading, and caching techniques.</li>
//                             <li>Integrated external APIs for market data, compliance checks, and risk profiling.</li>
//                         </ul>
//                     </div>
//                 </section>

//                 {/* Education Section */}
//                 <section>
//                     <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
//                     <div className="bg-white p-4 rounded-xl shadow text-sm text-gray-800">
//                         <p className="font-medium text-gray-900">B.Tech in Electronics & Communication Engineering</p>
//                         <p>Heritage Institute of Technology, Kolkata</p>
//                         <p>2018 – 2022 | CGPA: 8.67 / 10</p>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default AboutPage;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaRocket, FaTools, FaUserTie } from 'react-icons/fa';

// const AboutPage = () => {
//   return (
//     <div className="pt-16 pb-20 bg-gray-100 min-h-screen px-4 md:px-8">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Me</h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           A product developer specializing in enterprise financial systems, backend optimization, and API integrations.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//         <InfoCard
//           icon={<FaRocket className="text-blue-500 text-4xl mb-4" />}
//           title="Career Highlights"
//           points={[
//             "Optimized wealth management modules, cutting batch execution time by 67%.",
//             "Integrated secure APIs for real-time financial data syncing.",
//             "Developed scalable solutions using C++, Java, and Spring Boot.",
//           ]}
//         />
//         <InfoCard
//           icon={<FaTools className="text-green-500 text-4xl mb-4" />}
//           title="My Mission"
//           points={[
//             "Building high-performance backend systems with security, efficiency, and scalability.",
//             "Enhancing financial workflows through process automation.",
//             "Driving technical excellence with modern frameworks and best practices.",
//           ]}
//         />
//         <InfoCard
//           icon={<FaUserTie className="text-purple-500 text-4xl mb-4" />}
//           title="Professional Expertise"
//           points={[
//             "Backend – Java, C++, Spring Boot, Hibernate.",
//             "Database – PostgreSQL, MySQL, Oracle PL/SQL.",
//             "API & Security – REST APIs, OAuth, Spring Security.",
//           ]}
//         />
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <Link
//           to="/skills"
//           className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all"
//         >
//           Explore My Skills
//         </Link>
//       </div>
//     </div>
//   );
// };

// const InfoCard = ({ icon, title, points }) => (
//   <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition-all">
//     {icon}
//     <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
//     {points.map((point, i) => (
//       <p key={i} className="text-gray-600 text-sm">{point}</p>
//     ))}
//   </div>
// );

// export default AboutPage;
