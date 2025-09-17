// src/components/sections/EducationSection.jsx
import React from 'react';
import { educationData } from '../../data/education.jsx';

const EducationSection = () => {
  return (
    <section id="educacao" className="py-16">
      <h2 className="text-2xl font-bold text-[#3C4555] text-left mb-10">
        Educação
      </h2>
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {educationData.map((item, index) => (
          <article key={index} className="bg-white p-5 rounded-2xl border border-[#E7E7E7] flex flex-col items-start gap-4 shadow-sm">
            
            {/* NOVO: Div do círculo para o ícone */}
            <div className="w-[72px] h-[72px] rounded-full border border-[#7E848F] flex items-center justify-center p-2 bg-[#F9FAFB]">
              {item.icon}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[20px] text-[#3C4555]">{item.institution}</h3>
              <div className="flex flex-col gap-1">
                <p className="font-normal text-[15px] text-[#3C4555]">{item.course}</p>
                <p className="font-light text-[15px] text-[#3C4555]">{item.date}</p>
              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
};

export default EducationSection;