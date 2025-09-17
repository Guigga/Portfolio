// src/data/education.jsx
import React from 'react';

// --- Ícones como Componentes ---
const GoogleIcon = () => (
    <svg width="60" height="60" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... código svg ... */}
    </svg>
);

const FatecIcon = () => (
    <svg width="47" height="64" viewBox="0 0 61 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... código svg ... */}
    </svg>
);

const UfabcIcon = () => (
    <svg width="60" height="56" viewBox="0 0 83 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... código svg ... */}
    </svg>
);


// --- Exportando o Array de Dados ---
export const educationData = [
  {
    icon: <GoogleIcon />,
    institution: 'Coursera',
    course: 'Google UX Design',
    date: 'set de 2025 - atualmente',
  },
  {
    icon: <FatecIcon />,
    institution: 'FATEC São Paulo',
    course: 'Análise e Desenvolvimento de Sistemas',
    date: 'jan de 2025 - dez de 2024',
  },
  {
    icon: <UfabcIcon />,
    institution: 'UFABC',
    course: 'Bacharel em Ciências e Tecnologia',
    date: 'mai de 2017 - dez de 2024',
  },
  // Adicionei o "Eu Capacito" aqui, pois parece ser um curso
  {
    icon: <GoogleIcon />, // Usando o GoogleIcon como placeholder
    institution: 'Eu Capacito',
    course: 'User Experiênce (UX)',
    date: 'dez de 2024',
  },
];