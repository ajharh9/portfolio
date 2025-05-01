import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 pt-20">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Profile Image */}
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEDq57F0J3EJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678467414125?e=1751500800&v=beta&t=7qT4ABvZD-y-wuFKQwqyGpX3ysxwBqCp8vXB4iVf05k"
                    alt="Azhar Hussain"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-xl hover:scale-105 transition-all"
                />

                {/* Intro Text */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold">Azhar Hussain</h1>
                    <p className="text-xl mt-2 text-gray-300">Product Developer | Optimizing WealthTech Systems</p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Product Developer with <span className="font-semibold text-white">2.5+ years of experience</span> building scalable financial modules at EdgeVerve (Finacle). 
                        Proficient in <span className="font-semibold text-white">Java, C++, Spring Boot, REST APIs, PL/SQL</span> and automation. 
                        Passionate about high-performance system design, workflow automation, and third-party integrations in the wealth management domain.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a href="https://www.linkedin.com/in/azhar-hussain-304017204/" target="_blank" rel="noopener noreferrer">
                            <img src="./images/linkedIn.png" alt="LinkedIn" className="w-6 hover:scale-125 transition" />
                        </a>
                        <a href="https://github.com/ajharh9" target="_blank" rel="noopener noreferrer">
                            <img src="./images/github.png" alt="GitHub" className="w-6 hover:scale-125 transition" />
                        </a>
                        <a href="https://leetcode.com/u/ajharh999/" target="_blank" rel="noopener noreferrer">
                            <img src="./images/LeetCode.png" alt="LeetCode" className="w-6 hover:scale-125 transition" />
                        </a>
                        <a
                            href="mailto:ajharh09@gmail.com"
                            className="ml-4 text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition"
                        >
                            ajharh09@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">About Me</h2>
                <p className="text-gray-300 leading-loose">
                    I’m a detail-oriented and performance-focused developer working at the intersection of finance and tech.
                    I’ve contributed to high-impact modules in WealthTech products — including portfolio management, market data ingestion, and advisory systems.
                </p>
                <p className="mt-4 text-gray-300 leading-loose">
                    My experience spans building RESTful microservices in Spring Boot, optimizing C++ batch processes using multithreading and memory-efficient data structures, and integrating third-party APIs for risk and compliance workflows.
                </p>
                <p className="mt-4 text-gray-300 leading-loose">
                    I thrive in fast-paced environments, constantly optimizing and automating systems to improve reliability and reduce latency.
                    When I’m not coding, I explore DevOps practices and work on personal projects to sharpen my full-stack skills.
                </p>
            </div>
        </div>
    );
};

export default HomePage;


// import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

// const HomePage = () => {
//     const location = useLocation();
//     const getButtonStyle = (path) => {
//         if (location.pathname === '/' && path === '/about-me') {
//             return "bg-customBtn";
//         }
//         return location.pathname === path
//             ? "bg-customBtn shadow-lg" // Active button with slight elevation
//             : "text-customText bg-white hover:bg-gray-200 transition-all"; // Inactive button with smooth hover effect
//     };

//     return (
//         <div className="bg-customGray-light pt-16 text-customText">
//             {/* Header Section */}
//             <div className="bg-customGray-dark h-auto p-5 flex flex-col lg:flex-row text-center lg:text-left items-center lg:items-start">
//                 {/* Profile Image */}
//                 <img 
//                     alt="Azhar Hussain"
//                     src="https://media.licdn.com/dms/image/v2/D4D03AQEDq57F0J3EJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678467414125?e=1751500800&v=beta&t=7qT4ABvZD-y-wuFKQwqyGpX3ysxwBqCp8vXB4iVf05k"
//                     className="m-10 h-32 md:h-40 rounded-full shadow-2xl shadow-black cursor-pointer transition-all hover:scale-105"
//                 />

//                 {/* Text Content */}
//                 <div className="px-5 md:px-10">
//                     <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                         Building Tomorrow’s Scalable & Automated Solutions
//                     </h1>

//                     <div className="py-5 mx-5 md:mx-10 text-center lg:text-start">
//                         <p className="font-semibold italic py-2">
//                             Hi, I'm Azhar Hussain, a passionate Full Stack Developer and DevOps Enthusiast.
//                         </p>
//                         <p>
//                             I specialize in building scalable applications and automating workflows using modern technologies like 
//                             <span className="font-semibold italic"> React, Spring Boot, Docker, and Kubernetes</span>.  
//                             Explore my portfolio to see how I turn ideas into impactful solutions.
//                         </p>
//                     </div>

//                     {/* Navigation Links */}
//                     <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mx-5 md:mx-10">
//                         <ul className="list-none flex flex-col md:flex-row justify-evenly gap-5 md:gap-10 font-bold text-white">
//                             <NavLink to="/about-me">
//                                 <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/about-me")}`}>
//                                     About Me
//                                 </li>
//                             </NavLink>
//                             <NavLink to="/skills">
//                                 <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/skills")}`}>
//                                     Skills
//                                 </li>
//                             </NavLink>
//                             <NavLink to="/projects">
//                                 <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/projects")}`}>
//                                     Projects
//                                 </li>
//                             </NavLink>
//                         </ul>

//                         {/* Social Media Links */}
//                         <div className="list-none flex justify-evenly gap-5 mt-5 lg:mt-0">
//                             <Link target="_blank" to="https://www.linkedin.com/in/azhar-hussain-304017204/">
//                                 <img className="shadow-black w-6 hover:w-8 transition-all" alt="LinkedIn" src="./images/linkedIn.png" />
//                             </Link>
//                             <Link target="_blank" to="https://github.com/ajharh9">
//                                 <img className="shadow-black w-6 hover:w-8 transition-all" alt="GitHub" src="./images/github.png" />
//                             </Link>
//                             <Link target="_blank" to="https://leetcode.com/u/ajharh999/">
//                                 <img className="shadow-black w-6 hover:w-8 transition-all" alt="LeetCode" src="./images/LeetCode.png" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Nested Routes */}
//             <Outlet />
//         </div>
//     );
// };

// export default HomePage;
