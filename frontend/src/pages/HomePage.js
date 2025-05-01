import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const getButtonStyle = (path) => {
        return location.pathname === path
            ? "bg-blue-600 text-white font-semibold shadow-md" // Active button
            : "text-gray-700 bg-white hover:bg-gray-200"; // Inactive button
    };

    return (
        <div className="bg-gray-100 text-gray-800 pt-16">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-10 px-5 flex flex-col lg:flex-row items-center lg:items-start">
                {/* Profile Image */}
                <img
                    alt="Azhar Hussain"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEDq57F0J3EJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678467414125?e=1751500800&v=beta&t=7qT4ABvZD-y-wuFKQwqyGpX3ysxwBqCp8vXB4iVf05k"
                    className="rounded-full shadow-lg h-32 md:h-40 lg:h-48 mx-auto lg:mx-10"
                />

                {/* Introduction */}
                <div className="mt-6 lg:mt-0 px-5 md:px-10 text-center lg:text-left max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Scaling Innovation Through Technology
                    </h1>
                    <p className="mt-4 text-lg font-light text-gray-300">
                        Hi, I'm Azhar Hussain—a Backend Developer specializing in designing **high-performance enterprise solutions**, automating workflows, and crafting **scalable financial systems**.
                    </p>
                    <p className="mt-2 text-gray-300">
                        I leverage technologies like <span className="font-semibold">Spring Boot, C++, React, Docker, Kubernetes</span> to build robust architectures and optimize processes.
                    </p>
                </div>
            </div>

            {/* Navigation & Social Links */}
            <div className="flex flex-col lg:flex-row justify-between items-center mx-auto py-6 px-5 md:px-10 max-w-6xl">
                {/* Navigation Links */}
                <ul className="flex gap-5 md:gap-10">
                    <NavLink to="/about-me">
                        <li className={`cursor-pointer py-2 px-5 rounded-lg transition-all ${getButtonStyle("/about-me")}`}>
                            About Me
                        </li>
                    </NavLink>
                    <NavLink to="/skills">
                        <li className={`cursor-pointer py-2 px-5 rounded-lg transition-all ${getButtonStyle("/skills")}`}>
                            Skills
                        </li>
                    </NavLink>
                    <NavLink to="/projects">
                        <li className={`cursor-pointer py-2 px-5 rounded-lg transition-all ${getButtonStyle("/projects")}`}>
                            Projects
                        </li>
                    </NavLink>
                </ul>

                {/* Social Links */}
                <div className="flex gap-5 mt-5 lg:mt-0">
                    <Link target="_blank" to="https://www.linkedin.com/in/azhar-hussain-304017204/">
                        <img className="w-6 hover:w-8 transition-all" alt="LinkedIn" src="./images/linkedIn.png" />
                    </Link>
                    <Link target="_blank" to="https://github.com/ajharh9">
                        <img className="w-6 hover:w-8 transition-all" alt="GitHub" src="./images/github.png" />
                    </Link>
                    <Link target="_blank" to="https://leetcode.com/u/ajharh999/">
                        <img className="w-6 hover:w-8 transition-all" alt="LeetCode" src="./images/LeetCode.png" />
                    </Link>
                </div>
            </div>

            {/* Outlet for nested routes */}
            <Outlet />
        </div>
    );
};

export default HomePage;
