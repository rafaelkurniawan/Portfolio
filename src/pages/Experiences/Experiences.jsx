import React from 'react';
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaFigma,
  FaPhp,
  FaVuejs,
} from 'react-icons/fa';

const Experiences = () => {
  return (
    <div id="Experiences" className="p-12 md:p-28">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experiences</h1>
      <div className="flex flex-wrap items-start justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="grid grid-cols-4 gap-8 md:p-12 py-10">
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaHtml5 color="#E34F26" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaCss3 color="#1572B6" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaReact color="#61DAFB" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaJs color="#F7DF1E" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaFigma color="#A259" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaPhp color="#1572B6" size={80} />
            </span>
            <span className="p-3 bg-white flex items-center rounded-3xl">
              <FaVuejs color="#47A248" size={80} />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-3/5">
          <div className="flex gap-12 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-8 items-center">
            <span className="text-white px-2">
              <h2 className="leading-tight">
                <span className="text-2xl md:text-3xl font-semibold">
                  Project Manager
                </span>
                <br /> CV Oase Smart Solusindo
              </h2>
              <p className="text-sm leading-tight font-thin">
                February 2023 - August 2023
              </p>
              <ul className="text-sm mt-6">
                <li>Managed project timelines and deliverables</li>
                <li>Coordinated with cross-functional teams</li>
                <li>Ensured project goals were met</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-12 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-8 items-center">
            <span className="text-white px-2">
              <h2 className="leading-tight">
                <span className="text-2xl md:text-3xl font-semibold">
                  Frontend Developer
                </span>
                <br /> CV Oase Smart Solusindo
              </h2>
              <p className="text-sm leading-tight font-thin">
                January 2022 - January 2023
              </p>
              <ul className="text-sm mt-6">
                <li>Optimized website performance and load times</li>
                <li>
                  Implemented front-end functionality using React JS and Vue JS
                </li>
                <li>
                  Collaborated with backend developers to integrate APIs and
                  services
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-12 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-8 items-center">
            <span className="text-white px-2">
              <h2 className="leading-tight">
                <span className="text-2xl md:text-3xl font-semibold">
                  Frontend Developer
                </span>
                <br /> PT Kode Evolusi Bandgsa
              </h2>
              <p className="text-sm leading-tight font-thin">
                February 2024 - Present
              </p>
              <ul className="text-sm mt-6">
                <li>Optimized website performance and load times</li>
                <li>Implemented front-end functionality using React JS</li>
                <li>
                  Collaborated with backend developers to integrate APIs and
                  services
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-12 bg-slate-950 bg-opacity-60 mt-4 rounded-xl p-8 items-center">
            <span className="text-white px-2">
              <h2 className="leading-tight">
                <span className="text-2xl md:text-3xl font-semibold">
                  UI UX Designer
                </span>
                <br /> Freelance
              </h2>
              <p className="text-sm leading-tight font-thin">
                February 2024 - Present
              </p>
              <ul className="text-sm mt-6">
                <li>Designed user interfaces for web and mobile apps</li>
                <li>Conducted user research and testing</li>
                <li>Collaborated with developers to implement designs</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
