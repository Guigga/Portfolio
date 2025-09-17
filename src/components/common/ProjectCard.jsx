// src/components/common/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: project.bgColor }}>
      <div 
        className={`flex flex-col items-end gap-10 lg:gap-0 
                    ${project.layout === 'image-left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        <div className="w-full lg:w-1/2 flex flex-col space-y-8 text-white text-center lg:text-left p-8 md:p-12 lg:p-20">
          <div>

            <p className="text-xl italic">{project.tag}</p>
            <h3 className="text-4xl md:text-5xl font-medium mt-2">{project.title}</h3>
            <p className="text-xl mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">{project.description}</p>
          </div>
          <div className="mt-auto pt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FAFAFA] text-[#27527B] font-semibold text-lg md:text-xl px-12 py-4 rounded-2xl border border-[#27527B] transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Acesse o projeto
            </a>
          </div>
        </div>

        {/* 3. O bloco da imagem NÃO tem padding, ficando colado nas bordas */}
        <div className="w-full lg:w-1/2 h-full">
          <img
            src={project.imageSrc}
            alt={`Demonstração do projeto ${project.title}`}
            className="rounded-b-2xl lg:rounded-none w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;