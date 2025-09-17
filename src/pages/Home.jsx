// src/pages/Home.jsx

import HeroSection from '../components/sections/HeroSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import EducationSection from '../components/sections/EducationSection.jsx';
import AboutMeSection from '../components/sections/AboutMeSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutMeSection />
      <ContactSection />
    </>
  );
};

export default Home;