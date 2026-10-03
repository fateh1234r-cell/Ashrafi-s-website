import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/firmData';
import { AshrafiLogo } from './AshrafiLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand & Taglines (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AshrafiLogo size="sm" />
              <span className="text-lg font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline} — {BUSINESS_INFO.secondaryTagline}. Providing dependable Income Tax, GST, TDS, and corporate compliance services across Vijayapur and Karnataka.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong>Practice Specialty:</strong> {BUSINESS_INFO.specialty}</div>
              <div><strong>Office:</strong> {BUSINESS_INFO.address}</div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Practices & Services
            </div>
            <ul className="space-y-2">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Consultation & Contact
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:+91${BUSINESS_INFO.primaryPhone}`} className="hover:text-white transition-colors">
                  +91 {BUSINESS_INFO.primaryPhone}
                </a>
                <span className="text-slate-600">/</span>
                <a href={`tel:+91${BUSINESS_INFO.secondaryPhone}`} className="hover:text-white transition-colors">
                  +91 {BUSINESS_INFO.secondaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Shop no-13, V.D.A Complex, Pulakeshi Nagar, Managuli Road, Vijayapur-586109</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Hours: {BUSINESS_INFO.workingHours}
            </div>
          </div>

        </div>

        {/* Disclaimer & Legal Notice */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Professional Disclaimer:</strong> Ashrafi's and co. is a professional tax and GST consultancy firm based in Vijayapur, Karnataka. All tax advice, return computations, and representations are executed in compliance with the provisions of the Income Tax Act, 1961, the Central Goods and Services Tax (CGST) Act, 2017, and associated rules as notified by the Ministry of Finance, Government of India.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div>
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#services" className="hover:text-slate-300">Services</a>
              <span>·</span>
              <a href="#toolkit" className="hover:text-slate-300">Tax Tools</a>
              <span>·</span>
              <a href="#contact" className="hover:text-slate-300">Office Location</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
