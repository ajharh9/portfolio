const AboutPage = () => {
    return (
        // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-20">
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 border-b border-gray-600 pb-2">👨‍💻 About Me</h1>

                {/* Summary Section */}
                <section className="mb-10">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Hey there! I’m <span className="text-white font-semibold">Azhar Hussain</span>, a passionate Product Developer with <span className="text-white font-semibold">2.5+ years of experience</span> at EdgeVerve (Infosys Finacle). I thrive on solving complex problems in the finance domain, working across backend systems using <span className="text-white font-semibold">C++, Java, Spring Boot</span>, and <span className="text-white font-semibold">Oracle PL/SQL</span>.
                    </p>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        My focus lies in developing and optimizing modules related to portfolio management, market integrations, and advisory workflows. I'm driven by a deep interest in performance tuning, clean code practices, and building scalable backend solutions.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">⚙️ Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
                        <div><span className="text-white">Languages:</span> Java, C++, Python, SQL</div>
                        <div><span className="text-white">Backend:</span> Spring Boot, Spring MVC, Hibernate, JPA</div>
                        <div><span className="text-white">Frontend:</span> React, HTML, CSS (Basic)</div>
                        <div><span className="text-white">Databases:</span> Oracle, PostgreSQL, MySQL</div>
                        <div><span className="text-white">DevOps & Tools:</span> Git, Maven, Jenkins, Docker, Postman, Jira</div>
                        <div><span className="text-white">Systems & APIs:</span> Linux, Shell Scripting, REST APIs</div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">💼 Professional Experience</h2>
                    <div className="bg-gray-800 p-4 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-white">Product Developer @ Infosys Finacle (EdgeVerve)</h3>
                        <p className="text-sm text-gray-400">Jan 2023 – Present | Hyderabad, Telangana</p>
                        <ul className="mt-2 text-gray-300 list-disc list-inside text-sm space-y-1">
                            <li>Designed and enhanced wealth modules for mutual funds, bonds, insurance, and IPOs.</li>
                            <li>Built microservices using Spring Boot to streamline advisory and customer workflows.</li>
                            <li>Optimized legacy C++ batch processes with STL, multithreading, and caching techniques.</li>
                            <li>Integrated external APIs for market data, compliance checks, and risk profiling.</li>
                        </ul>
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
                    <div className="bg-gray-800 p-4 rounded-xl shadow text-sm text-gray-300">
                        <p className="text-white font-medium">B.Tech in Electronics & Communication Engineering</p>
                        <p>Heritage Institute of Technology, Kolkata</p>
                        <p>2018 – 2022 | CGPA: 8.67 / 10</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;



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
