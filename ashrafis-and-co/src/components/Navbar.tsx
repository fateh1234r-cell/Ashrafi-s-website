import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/firmData';
import { AshrafiLogo } from './AshrafiLogo';

interface NavbarProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-slate-950/60 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones - Brand Wordmark, Nav Links, 1-2 Actions */}
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark in display face with official emblem */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <AshrafiLogo size="md" showAura={true} />
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {BUSINESS_INFO.name}
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-emerald-400 transition-colors relative py-1 hover:underline decoration-emerald-400 underline-offset-8"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="hover:text-emerald-400 transition-colors relative py-1 hover:underline decoration-emerald-400 underline-offset-8"
            >
              Why Choose Us
            </a>
            <a
              href="#toolkit"
              className="hover:text-emerald-400 transition-colors relative py-1 hover:underline decoration-emerald-400 underline-offset-8"
            >
              Tax Tools & Checklist
            </a>
            <a
              href="#faqs"
              className="hover:text-emerald-400 transition-colors relative py-1 hover:underline decoration-emerald-400 underline-offset-8"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors relative py-1 hover:underline decoration-emerald-400 underline-offset-8"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Call principal tax consultant"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-900/30 transition-all hover:shadow-emerald-500/20 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Services Offered
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#toolkit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Tax Tools & Checklist
            </a>
            <a
              href="#faqs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Common Questions (FAQs)
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Office Location & Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Person / Online Consultation</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
