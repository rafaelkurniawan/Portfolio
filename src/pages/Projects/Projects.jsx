import React from 'react';
import ProjectCard from '../../components/Card';
import { FaGithub, FaFigma } from 'react-icons/fa';
import Cover1 from '../../assets/Cover1.png';
import Cover2 from '../../assets/Cover2.png';
import Cover3 from '../../assets/Cover3.png';
import Cover4 from '../../assets/Cover4.png';

const Projects = () => {
  return (
    <div id="Projects" className="p-12 md:p-28 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          image={Cover1}
          title="Company Profile - Fremantle Indonesia"
          main="This is a blogging website created in Next.js and used some component library."
          buttons={[

            {
              icon: <FaFigma size={20} />,
              link: 'https://figma.com/your-design',
            },
          ]}
        />
        <ProjectCard
          image={Cover2}
          title="Job Portal - DIGITEFA"
          main="This is a YouTube clone created in Next.js and used some component library."
          buttons={[
            {
              icon: <FaFigma size={20} />,
              link: 'https://figma.com/your-design',
            },
          ]}
        />
        <ProjectCard
          image={Cover3}
          title="VRMS - Kodegiri"
          main="This is a Netflix clone created in Next.js and used some component library."
          buttons={[
            {
              icon: <FaGithub size={20} />,
              link: 'https://github.com/your-repo',
            },
            {
              icon: <FaFigma size={20} />,
              link: 'https://figma.com/your-design',
            },
          ]}
        />
        <ProjectCard
          image={Cover4}
          title="SADEWA - Oase"
          main="This is a Netflix clone created in Next.js and used some component library."
          buttons={[
            {
              icon: <FaGithub size={20} />,
              link: 'https://github.com/your-repo',
            },
            {
              icon: <FaFigma size={20} />,
              link: 'https://figma.com/your-design',
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
