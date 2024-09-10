import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 pb-4 md:px-20 fixed top-0 left-0 w-full bg-gray-900 z-50">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${menu ? 'block bg-black' : 'hidden bg-gray-900'} mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-[12px] bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-200 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experiences">
          <li className="text-md transition-all duration-200 p-1 md:p-0">
            Experiences
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-200 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-200 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <List
          size={30}
          className="md:hidden absolute right-10 top-8 transition-all duration-200"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <X
          size={30}
          className="md:hidden absolute right-10 top-8 transition-all duration-200"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;