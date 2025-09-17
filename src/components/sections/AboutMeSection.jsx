// src/components/sections/AboutMeSection.jsx
import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-[#3C4555] text-left mb-10">
        Sobre mim
      </h2>
      <div className="p-10 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Um parágrafo ou dois sobre quem você é, suas paixões, etc...</p>
      </div>
    </section>
  );
};

export default AboutMeSection;