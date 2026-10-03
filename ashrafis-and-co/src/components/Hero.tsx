import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2, FileText, Sparkles, Building, Landmark, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/firmData';
import { AshrafiLogo } from './AshrafiLogo';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle ambient gradient mesh for architectural depth */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quiet, unboxed metadata line (Zero-pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-amber-400 mb-6 tracking-wide">
          <span className="text-amber-400 font-semibold">{BUSINESS_INFO.specialty}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">V.D.A Complex, Pulakeshi Nagar, Vijayapur</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Timely Statutory Compliance</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Your Trusted Tax Consultants in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                Vijayapur
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              End-to-end Income Tax & GST compliance, error-free TDS filing, business registrations, and audit representation. We safeguard your enterprise from penalties and maximize legitimate savings.
            </p>

            {/* Clear Call-To-Action Dual Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:from-amber-500 rounded-lg shadow-lg shadow-amber-950/40 transition-all hover:translate-y-[-1px] cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 font-medium"
              >
                <Calendar className="w-4 h-4 text-slate-900" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1 text-slate-900" />
              </button>

              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 active:bg-slate-800 border border-slate-700/80 rounded-lg shadow-sm transition-all hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now: {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Quick trust proof indicators */}
            <div className="pt-6 border-t border-slate-800/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Pre-filing AIS & 26AS Match
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  Zero
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Late-Fee Risk Guarantee
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tabular-nums">
                  2 Contacts
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Direct Practitioner Lines
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Compliance Card / Authority Interface with Brand Monogram */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900 to-slate-950 border border-slate-800 p-6 md:p-7 shadow-2xl shadow-black/50 backdrop-blur-sm space-y-6">
              
              {/* Header of card with Official 3D Golden Logo */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3.5">
                  <AshrafiLogo size="lg" showAura={true} />
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                      Verified Practitioner Mark
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      Ashrafi's and co.
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Income Tax & GST Compliance Office
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Reg. Office</span>
                  <span className="text-xs font-semibold text-amber-300">Shop No. 13</span>
                </div>
              </div>

              {/* Service Capabilities Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Income Tax (ITR 1 to 7)</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">AIS/TIS Verified</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">GST Returns & ITC Audit</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">GSTR-1 / 3B / 9</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">TDS Statements & Form 16</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">24Q / 26Q TRACES</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Business Setup & Audit Support</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Proprietor / Firm / LLP</span>
                </div>
              </div>

              {/* Verified Location & Contact Footnote inside card */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate max-w-[210px]">V.D.A Complex, Pulakeshi Nagar</span>
                <span className="text-amber-400 font-medium whitespace-nowrap">Vijayapur 586109</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
