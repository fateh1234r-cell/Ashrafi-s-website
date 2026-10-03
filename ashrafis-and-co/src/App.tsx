/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TaxToolkit } from './components/TaxToolkit';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Income Tax Filing');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsConsultationModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Smooth scroll down to contact section or open modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-emerald-500 selection:text-white pb-14 sm:pb-0">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 6 Services Grid */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Why Choose Us & Filing Workflow */}
        <WhyChooseUs />

        {/* Interactive Tax Toolkit: Estimator, Document Checklist, Deadlines */}
        <TaxToolkit onOpenConsultation={handleOpenConsultation} />

        {/* Attributable Client Testimonials */}
        <Testimonials />

        {/* Contact & Location Section with Interactive Form */}
        <ContactSection preselectedService={selectedService} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewports (strictly ≤15% height) */}
      <FloatingMobileBar onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
