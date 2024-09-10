import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ProjectCard = ({ title, main, image, buttons }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-xl">
      <div className="flex-grow">
        <img
          className="p-4 w-[272px] h-[182px] object-cover"
          src={image}
          alt={title}
        />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      </div>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className="text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={() => window.open(button.link, '_blank')}
          >
            {button.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectCard;
