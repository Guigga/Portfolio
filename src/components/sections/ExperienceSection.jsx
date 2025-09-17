// src/components/sections/ExperienceSection.jsx
import React from 'react';
import { experiencesData } from '../../data/experiences.jsx';

// --- Card de Experiência (definido aqui dentro para simplificar) ---
const ExperienceCard = ({ icon, title, company, period }) => (
  <div className="flex flex-col items-start text-center">
    {icon}
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-xl font-semibold text-[#3C4555]">{title}</h3>
      <div className="flex flex-col items-start gap-1">
        <p className="text-base text-[#3C4555]">{company}</p>
        {period.includes('atualmente') ? (
          <p className="text-base text-[#3C4555]">
            {period.split('atualmente')[0]}<span className="italic">atualmente</span>
          </p>
        ) : (
          <p className="text-base text-[#3C4555]">{period}</p>
        )}
      </div>
    </div>
  </div>
);

// --- Seção Principal ---
const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-16">
      <h2 className="text-2xl font-bold text-[#3C4555] text-left mb-10">
        Experiência Profissional
      </h2>
      
      <div className="flex flex-col md:flex-row justify-start items-start gap-12 md:gap-20">
        {experiencesData.map((exp, index) => (
          <ExperienceCard
            key={index}
            icon={exp.icon}
            title={exp.title}
            company={exp.company}
            period={exp.period}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;