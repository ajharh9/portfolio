import { Outlet, NavLink, useLocation, Link } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();

    // Function to determine active button styles
    const getButtonStyle = (path) => {
        if (location.pathname === '/' && path === '/about-me') {
            return "bg-customBtn";
        }
        return location.pathname === path
            ? "bg-customBtn shadow-lg"  // Active button style
            : "text-customText bg-white hover:bg-gray-200 transition-all";  // Inactive button style
    };

    return (
        <div className="bg-customGray-light pt-16 text-customText">
            {/* Header Section */}
            <div className="bg-customGray-dark h-auto p-5 flex flex-col lg:flex-row text-center lg:text-left items-center lg:items-start">
                {/* Profile Image */}
                <img
                    alt="Azhar Hussain - Product Developer"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEDq57F0J3EJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678467414125?e=1751500800&v=beta&t=7qT4ABvZD-y-wuFKQwqyGpX3ysxwBqCp8vXB4iVf05k"
                    className="m-10 h-32 md:h-40 rounded-full shadow-2xl shadow-black cursor-pointer transition-all hover:scale-105"
                />

                {/* Text Content */}
                <div className="px-5 md:px-10">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Product Developer | Building Scalable & High-Performance Solutions
                    </h1>

                    <div className="py-5 mx-5 md:mx-10 text-center lg:text-start">
                        <p className="font-semibold italic py-2">
                            Hi, I'm Azhar Hussain, a passionate Product Developer with 2.5+ years of experience.
                        </p>
                        <p>
                            I specialize in building and optimizing financial modules for investment products, leveraging technologies like 
                            <span className="font-semibold italic"> Java, C++, Spring Boot, REST APIs, Oracle PL/SQL, Python, and Shell scripting</span>.
                            With a focus on high-performance system design and transaction workflow automation, I thrive on creating 
                            efficient solutions that drive business success.
                        </p>
                        <p className="py-2">
                            My key strengths lie in designing scalable systems, enhancing existing processes, and optimizing performance, ensuring 
                            smooth operations in wealth management solutions.
                        </p>
                        <p>
                            Currently, I am further enhancing my knowledge in <span className="font-semibold italic">Cloud-Native Development, Microservices, and DevOps Practices</span>. 
                            I am constantly learning and evolving to keep up with new trends and technologies.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mx-5 md:mx-10">
                        <ul className="list-none flex flex-col md:flex-row justify-evenly gap-5 md:gap-10 font-bold text-white">
                            <NavLink to="/about-me">
                                <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/about-me")}`}>
                                    About Me
                                </li>
                            </NavLink>
                            <NavLink to="/skills">
                                <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/skills")}`}>
                                    Skills
                                </li>
                            </NavLink>
                            <NavLink to="/projects">
                                <li className={`cursor-pointer py-2 px-5 rounded-full ${getButtonStyle("/projects")}`}>
                                    Projects
                                </li>
                            </NavLink>
                        </ul>

                        {/* Social Media Links */}
                        <div className="list-none flex justify-evenly gap-5 mt-5 lg:mt-0">
                            <Link target="_blank" to="https://www.linkedin.com/in/azhar-hussain-304017204/">
                                <img className="shadow-black w-6 hover:w-8 transition-all" alt="LinkedIn Profile" src="./images/linkedIn.png" />
                            </Link>
                            <Link target="_blank" to="https://github.com/ajharh9">
                                <img className="shadow-black w-6 hover:w-8 transition-all" alt="GitHub Profile" src="./images/github.png" />
                            </Link>
                            <Link target="_blank" to="https://leetcode.com/u/ajharh999/">
                                <img className="shadow-black w-6 hover:w-8 transition-all" alt="LeetCode Profile" src="./images/LeetCode.png" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nested Routes */}
            <Outlet />
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
