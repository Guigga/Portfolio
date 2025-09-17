// src/components/sections/ProjectsSection.jsx

import React from 'react';
import { projectsData } from '../../data/projects.js'; // 1. Importa os dados
import ProjectCard from '../common/ProjectCard.jsx';    // 2. Importa o "molde"

const ProjectsSection = () => {
  return (
    <section id="projetos" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3C4555] text-left mb-10">
          Meus projetos
        </h2>
        
        {/* 3. Mapeia os dados e cria um card para cada projeto */}
        <div className="space-y-16">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;