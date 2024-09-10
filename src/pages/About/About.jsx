import React from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react';
import Avatar from '../../assets/AvatarAbout.png';

const About = () => {
  return (
    <div className='text-white md"flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-35 rounded-lg p-12'>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex justify-centeR">
            <img
              className="md:h-[650px] md:w-[650px]"
              src={Avatar}
              alt="About Image"
            />
          </div>
          <ul className="w-full md:w-1/2">
            <div className="flex gap-3 py-4">
              <PaperPlaneRight size={30} className="mt-2" />
              <span className="w-full">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-md md:text-lg leading-tight">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere consectetur ab vero magnam a voluptas eius porro
                  eligendi eum, quas inventore numquam error. Quia molestias
                  nemo blanditiis eveniet magni debitis!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <PaperPlaneRight size={30} className="mt-2" />
              <span className="w-full">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  UI UX Designer
                </h1>
                <p className="text-md md:text-lg leading-tight">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere consectetur ab vero magnam a voluptas eius porro
                  eligendi eum, quas inventore numquam error. Quia molestias
                  nemo blanditiis eveniet magni debitis!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <PaperPlaneRight size={30} className="mt-2" />
              <span className="w-full">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  Project Manager
                </h1>
                <p className="text-md md:text-lg leading-tight">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere consectetur ab vero magnam a voluptas eius porro
                  eligendi eum, quas inventore numquam error. Quia molestias
                  nemo blanditiis eveniet magni debitis!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
