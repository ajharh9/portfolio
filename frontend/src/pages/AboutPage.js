const AboutMePage = () => {
    return (
        <div className="bg-customGray-light text-customText pt-16 px-5 md:px-10">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="py-4">
                <p>
                    I am a Product Developer with 2.5 years of experience at <strong>EdgeVerve</strong>, specializing in building and optimizing financial modules for investment products. Over the years, I have worked on various projects involving technologies like <span className="font-semibold italic">C++, Java, Spring Boot, REST APIs, Python, and Shell scripting</span>.
                </p>

                <p className="py-2">
                    My journey in tech started during my BTech in Electronics & Communication Engineering, where I discovered my passion for coding and problem-solving. This passion led me to develop expertise in creating scalable and efficient systems, automating workflows, and working with microservices architecture.
                </p>

                <p className="py-2">
                    In my current role, I build and optimize wealth management solutions that cater to diverse investment portfolios, including equities, bonds, mutual funds, and more. I work closely with cross-functional teams to integrate third-party APIs and optimize the performance of the systems I work on.
                </p>

                <p className="py-2">
                    I am passionate about learning and growing in the fields of <span className="font-semibold italic">Cloud-Native Development, Microservices, and DevOps Practices</span>. I continuously seek new challenges that allow me to push my boundaries and expand my knowledge in modern development practices.
                </p>

                <p className="py-2">
                    My key strengths include:
                    <ul className="list-disc pl-6">
                        <li><strong>System Optimization</strong>: Refactoring legacy systems to enhance performance and reduce resource consumption.</li>
                        <li><strong>API Development & Integrations</strong>: Designing and integrating secure and efficient REST APIs for smooth system interactions.</li>
                        <li><strong>Automation</strong>: Automating workflows to reduce manual intervention and streamline operational processes.</li>
                    </ul>
                </p>

                <p className="py-2">
                    I am always eager to connect with like-minded professionals and contribute to impactful projects. If you're looking for someone who thrives in building high-performance systems, let's connect!
                </p>
            </div>
        </div>
    );
};

export default AboutMePage;

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
