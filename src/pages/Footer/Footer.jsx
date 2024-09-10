import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-12 md:px-28 bg-[#465697] text-white">
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl flex flex-col gap-4">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          rafaellkurniawann@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          Rafael Kurniawan Albyseptra Pratama
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          rafaelkurniawan
        </li>
      </ul>
    </div>
  );
};

export default Footer;