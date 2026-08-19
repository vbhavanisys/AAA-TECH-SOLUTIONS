import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import AboutPreview from '../../components/home/AboutPreview/AboutPreview';
import ServicesPreview from '../../components/home/ServicesPreview/ServicesPreview';
import CoursesPreview from '../../components/home/CoursesPreview/CoursesPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs/WhyChooseUs';
import ProjectsPreview from '../../components/home/ProjectsPreview/ProjectsPreview';
import WorkingApproach from '../../components/home/WorkingApproach/WorkingApproach';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <div className="home-page-view">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CoursesPreview />
      <WhyChooseUs />
      <ProjectsPreview />
      <WorkingApproach />
      <FinalCTA />
    </div>
  );
}
