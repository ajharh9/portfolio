import { Outlet,Link,NavLink, useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const getButtonStyle = (path) => {
        // console.log(location.pathname)
        // console.log(path)
        if(location.pathname === '/' && path === '/about-me'){
            return "bg-customBtn";
        }
        return location.pathname === path
          ? "bg-customBtn " // Active button style
          : "text-customText bg-white"; // Inactive button style
      };
    return (
        <div className=" bg-customGray-light pt-16 text-customText ">
            <div className="bg-customGray-dark h-auto p-5 flex  text-center">
                <img 
                        alt='azhar' 
                        src='https://media.licdn.com/dms/image/v2/D4D03AQEDq57F0J3EJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678467414125?e=1738800000&v=beta&t=yqkVXs6lE5aj7jgtgNn1WiNqdhizwVuHmVK3kCcCYFE'
                        className="m-10 h-40 rounded-full shadow-2xl shadow-black cursor-pointer"
                        // className="rounded-full border-4 border-white shadow-lg m-10 h-40"
                />
                <div className="px-10">
                    <h1
                        className="text-5xl font-bold"
                    >
                        Building Tomorrow’s Scalable & Automated Solutions
                    </h1>
                    <div className="py-5 mx-10 text-start ">
                        <p className="font-semibold italic py-2">Hi, I'm Azhar Hussain, a passionate Full Stack Developer and DevOps Enthusiast.</p>
                        <p>I specialize in building scalable applications and automating workflows using modern technologies like 
                            <span className="font-semibold italic"> React, Spring Boot, Docker, and Kubernetes</span>
                            . Explore my portfolio to see how I turn ideas into impactful solutions!
                        </p>
                    </div>
                    <div className="flex justify-between mx-10">
                        <ul className="list-none flex justify-evenly gap-10 font-bold text-white">
                        <NavLink to="/about-me" ><li className={`cursor-pointer py-1 rounded-full w-28 hover:font-semibold ${getButtonStyle("/about-me") }`}>About Me</li></NavLink>
                        <NavLink to="/skills" ><li className={`cursor-pointer py-1 rounded-full w-28 hover:font-semibold ${getButtonStyle("/skills")}`}>Skills</li></NavLink>
                        <NavLink to="/projects" ><li className={`cursor-pointer py-1 rounded-full w-28 hover:font-semibold ${getButtonStyle("/projects")}`}>Projects</li></NavLink>
                            
                        </ul>
                        <div className="list-none flex justify-evenly gap-10">
                            <Link className="" target="_blank" to="https://www.linkedin.com/in/azhar-hussain-304017204/"><p><img className=" shadow-black py-1 w-6 hover:w-5" alt='linkedIn' src='./images/linkedIn.png'/></p></Link>
                            <Link target="_blank" to="https://github.com/ajharh9"><p><img className="shadow-black py-1 w-6 hover:w-5" alt='github' src='./images/github.png'/></p></Link>
                            <Link target="_blank" to="https://leetcode.com/u/ajharh999/"><p><img className="shadow-black py-1 w-6 hover:w-5" alt='leetcode' src='./images/LeetCode.png'/></p></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
        
    )
}

export default HomePage;