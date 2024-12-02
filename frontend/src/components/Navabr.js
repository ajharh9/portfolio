import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-gradient-to-r from-customGray via-gray-200 to-gray-400 text-customText shadow-lg">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-blue-400 transition-all">
            🌟 Portfolio
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl focus:outline-none"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition-all text-lg flex items-center"
            >
              🏡 Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-all text-lg flex items-center"
            >
              📩 Contact Me
            </Link>
          </li>
        </ul>

        {/* Toggle Button */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition-all">
          ⚫⚪ Toggle
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-4 md:hidden bg-gray-800 py-4">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition-all text-lg flex items-center"
            >
              🏡 Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-all text-lg flex items-center"
            >
              📩 Contact Me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//       <nav 
//         className='fixed z-50 w-full flex justify-between gap-3 px-8 py-2 bg-customGray font-semibold text-customText'
//       >
//         <ul className=' list-none flex justify-between gap-8'>
//           <li>
//             <Link to="/" className=" ">🏡 Home</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="">📩 Contact Me</Link>
//           </li>
//         </ul>
//         <div>
//           <button 
//             className="px-3 py-0.5 rounded-xl border border-blue-950 hover:bg-white">
//             Toggle ⚫⚪
//           </button>
//         </div>
//       </nav>
//   );
// };

// export default Navbar;
