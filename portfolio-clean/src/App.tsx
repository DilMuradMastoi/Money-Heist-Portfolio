/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeSection from './sections/HomeSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ResumeSection from './sections/ResumeSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  // IntersectionObserver for scroll-spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'skills',
      'services',
      'projects',
      'resume',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050607] text-[#F5F5F5] selection:bg-[#E50924] selection:text-white relative">
      {/* Subtle Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* Main Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection onNavigate={handleNavigate} />
        <ProjectsSection onNavigate={handleNavigate} />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onScrollTop={handleScrollTop} />

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
