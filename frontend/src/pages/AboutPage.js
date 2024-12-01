// const AboutPage = () => {
//     return <h1>About Us</h1>;
//   };
  
//   export default AboutPage;
  
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        I’m a Full Stack Developer and DevOps Enthusiast with 2 of experience in building scalable applications and automating workflows. I specialize in modern technologies like React, Spring Boot, Docker, and Kubernetes, with a focus on creating efficient, impactful solutions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Career Highlights</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Migrated a product from RHEL8 to RHEL9, optimizing performance and automation.</li>
        <li>Led the transition from CVS to Git, establishing modern version control workflows.</li>
        <li>Automated build and deployment processes using Jenkins and Docker.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">My Mission</h2>
      <p className="text-lg mb-4">
        I believe in continuous learning, collaboration, and delivering high-quality solutions that make a real-world impact. My mission is to bridge the gap between development and operations by building efficient and scalable systems.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Fun Facts</h2>
      <p className="text-lg mb-4">
        When I’m not coding, you can find me tending to my backyard garden or creating Instagram reels showcasing the beauty of my village.
      </p>
      <Link to="/skills" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Check Out My Skills
      </Link>
    </div>
  );
};

export default AboutPage;
