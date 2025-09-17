// src/components/sections/HeroSection.jsx

import React from 'react';

// Renomeamos o componente para seguir nosso padrão
const HeroSection = () => {
  return (
    // Container principal: define o layout flexível e responsivo
    // Removi o container que centralizava, pois nosso layout principal fará isso.
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24 py-10">
      
      {/* Bloco de conteúdo de texto */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#3C4555] leading-tight">
          Product Designer - UI UX
        </h1>
        
        {/* Textos de descrição */}
        <div className="mt-6 space-y-2">
          <p className="text-xl md:text-2xl text-[#5B6270]">
            Apaixonado por tecnologia e inovação
          </p>
          <p className="text-xl md:text-2xl text-[#5B6270]">
            Curioso em tudo que possa agregar a experiência do usuário
          </p>
          <p className="text-xl md:text-2xl text-[#5B6270]">
            Satisfação em transformar ideias em um produto de qualidade
          </p>
        </div>
        
        {/* Botão Currículo com efeitos de hover */}
        <a 
          href="https://drive.google.com/file/d/1F4MWbtUEIuzSqj30wrq1p3JYGp1HS0Px/view" 
          id="botao-curriculo"
          target="_blank" 
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center justify-center gap-3 bg-[#27527B] border border-[#27527B] rounded-[20px] px-12 py-4 transition-all duration-200 ease-in-out hover:bg-[#FAFAFA] hover:shadow-[3px_5px_0px_#27527B] hover:-translate-x-1 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          {/* Ícone SVG do Currículo */}
          <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200">
            <path d="M0 1.9C0 1.39609 0.210714 0.912816 0.585786 0.556497C0.960859 0.200178 1.46957 0 2 0H10C10.2652 5.38055e-05 10.5195 0.100178 10.707 0.27835L15.707 5.02835C15.8946 5.20647 15.9999 5.44806 16 5.7V17.1C16 17.6039 15.7893 18.0872 15.4142 18.4435C15.0391 18.7998 14.5304 19 14 19H2C1.46957 19 0.960859 18.7998 0.585786 18.4435C0.210714 18.0872 0 17.6039 0 17.1V1.9ZM13.586 5.7L10 2.2933V5.7H13.586ZM8 1.9H2V17.1H14V7.6H9C8.73478 7.6 8.48043 7.49991 8.29289 7.32175C8.10536 7.14359 8 6.90196 8 6.65V1.9ZM4 10.45C4 10.198 4.10536 9.95641 4.29289 9.77825C4.48043 9.60009 4.73478 9.5 5 9.5H11C11.2652 9.5 11.5196 9.60009 11.7071 9.77825C11.8946 9.95641 12 10.198 12 10.45C12 10.702 11.8946 10.9436 11.7071 11.1218C11.5196 11.2999 11.2652 11.4 11 11.4H5C4.73478 11.4 4.48043 11.2999 4.29289 11.1218C4.10536 10.9436 4 10.702 4 10.45ZM4 14.25C4 13.998 4.10536 13.7564 4.29289 13.5782C4.48043 13.4001 4.73478 13.3 5 13.3H11C11.2652 13.3 11.5196 13.4001 11.7071 13.5782C11.8946 13.7564 12 13.998 12 14.25C12 14.502 11.8946 14.7436 11.7071 14.9218C11.5196 15.0999 11.2652 15.2 11 15.2H5C4.73478 15.2 4.48043 15.0999 4.29289 14.9218C4.10536 14.7436 4 14.502 4 14.25Z" 
            className="fill-[#FAFAFA] group-hover:fill-[#27527B] transition-colors duration-200"
          />
        </svg>
        
        {/* Texto do Botão */}
        <span className="text-xl font-semibold text-[#FAFAFA] group-hover:text-[#27527B] transition-colors duration-200">
          Currículo
        </span>
      </a>
    </div>
      
      {/* Imagem do Perfil */}
      <div className="flex-shrink-0">
        <img
          src="src/assets/Photo Profile.png"
          alt="Foto do Product Designer"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
        />
      </div>

    </section>
  );
};

export default HeroSection;