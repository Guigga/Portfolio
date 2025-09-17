// src/components/sections/ProjectsSection.jsx

import React from 'react';
import { projectsData } from '../../data/projects.js'; // 1. Importa os dados
import ProjectCard from '../common/ProjectCard.jsx';    // 2. Importa o "molde"

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-12 md:py-20">
      <h2 className="text-2xl font-bold text-[#3C4555] text-left mb-10">
        Meus projetos
      </h2>      
      <div className="space-y-16">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;