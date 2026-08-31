import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import AboutPreview from '../../components/home/AboutPreview/AboutPreview';
import ServicesPreview from '../../components/home/ServicesPreview/ServicesPreview';
import CoursesPreview from '../../components/home/CoursesPreview/CoursesPreview';
import PricingSection from '../../components/home/PricingSection/PricingSection';
import WhyChooseUs from '../../components/home/WhyChooseUs/WhyChooseUs';
import ProjectsPreview from '../../components/home/ProjectsPreview/ProjectsPreview';
import WorkingApproach from '../../components/home/WorkingApproach/WorkingApproach';
import ReviewsSection from '../../components/home/ReviewsSection/ReviewsSection';
import FinalCTA from '../../components/home/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <div className="home-page-view">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CoursesPreview />
      <PricingSection />
      <WhyChooseUs />
      <ProjectsPreview />
      <WorkingApproach />
      <ReviewsSection />
      <FinalCTA />
    </div>
  );
}
