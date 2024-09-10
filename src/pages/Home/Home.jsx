import React from 'react';
import Button from '../../components/Button';
import Avatar from '../../assets/AvatarIMG.jpg';
import TextChange from '../../components/TextChange';

const Home = () => {
  return (
    <div className="flex w-full justify-between items-start text-white p-12 md:p-28">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold fles leading-normal tracking-tighter mb-4 md:mb-8" style={{ minHeight: '72px' }}>
        <TextChange texts={['Hello, I\'m Rafael Kurniawan', 'Welcome to my portfolio', 'Hope you like it']} />
        </h1>
        <p className="text-sm md:text-2xl tracking-tighter mb-4 md:mb-8">
          Hi, I'm Rafael Kurniawan, a Frontend Developer and UI/UX Designer
          based in Indonesia. I specialize in creating intuitive and responsive
          user interfaces, ensuring seamless user experiences across web and
          mobile platforms.
        </p>
        <Button>Contact Me</Button>
      </div>
      <div className="md:w-2/4 md:pt-10 flex justify-end items-end">
        <img className="w-2/5 block" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
