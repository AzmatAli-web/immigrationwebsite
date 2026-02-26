import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from './components/TopBar';
import MainNavbar from './components/MainNavbar';
import HeroSection from './sections/HeroSection';
import BestConsultantSection from './sections/BestConsultantSection';
import ServicesSection from './sections/ServicesSection';
import AdditionalServices from './sections/AdditionalServices';
import LicensedSection from './sections/LicensedSection';
import StressingSection from './sections/StressingSection';
import WorkWithUsSection from './sections/WorkWithUsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import BlogSection from './sections/BlogSection';
import ConsultantLawyerSection from './sections/ConsultantLawyerSection';
import CTASection from './sections/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="app">
      <TopBar />
      <MainNavbar />
      <HeroSection />
      <BestConsultantSection />
      <ServicesSection />
      <AdditionalServices />
      <LicensedSection />
      <StressingSection />
      <WorkWithUsSection />
      <TestimonialsSection />
      <BlogSection />
      <ConsultantLawyerSection />
      <CTASection />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
