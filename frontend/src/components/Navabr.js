import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav 
        className='fixed w-full flex justify-between gap-3 px-8 py-2 bg-customGray font-semibold text-customText'
      >
        <ul className=' list-none flex justify-between gap-8'>
          <li>
            <Link to="/" className=" ">🏡 Home</Link>
          </li>
          <li>
            <Link to="/contact" className="">📩 Contact Me</Link>
          </li>
        </ul>
        <div>
          <button 
            className="px-3 py-0.5 rounded-xl border border-blue-950 hover:bg-white">
            Toggle ⚫⚪
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
