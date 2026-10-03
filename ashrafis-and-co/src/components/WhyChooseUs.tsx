import React from 'react';
import { ShieldCheck, MapPin, Award, Clock, FileCheck, Users, CheckCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, TRUST_FACTORS } from '../data/firmData';
import { AshrafiLogo } from './AshrafiLogo';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Practice Authority Banner with Gold Emblem */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <AshrafiLogo size="lg" showAura={true} />
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>End-to-End Tax & Compliance Practice</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Certified Income Tax & GST Practitioners serving businesses, healthcare clinics, agricultural traders, and individuals across Vijayapur and North Karnataka.
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-1.5 shrink-0 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-between sm:justify-center">
            <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400">Vijayapur Office</span>
            <span className="text-sm font-bold text-amber-300">V.D.A Complex, Shop 13</span>
            <span className="text-xs text-slate-400">Pulakeshi Nagar, Managuli Rd</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Trust & Proven Competence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Why Businesses and Professionals Across Vijayapur Depend on Us
          </h2>
          <p className="text-base text-slate-300">
            Tax laws change constantly, and automated software cannot replace verified practitioner oversight. Here is why clients keep their books and filings with Ashrafi's and co.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FACTORS.map((factor, index) => {
            const icons = [
              <MapPin key="map" className="w-6 h-6 text-amber-400" />,
              <FileCheck key="file" className="w-6 h-6 text-emerald-400" />,
              <Award key="award" className="w-6 h-6 text-amber-400" />,
              <Users key="users" className="w-6 h-6 text-cyan-400" />
            ];

            return (
              <div
                key={index}
                className="relative rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-5">
                    {icons[index % icons.length]}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {factor.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {factor.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80">
                  <span className="text-xs font-mono font-medium text-amber-400">
                    {factor.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow: How we work from document handover to acknowledgment */}
        <div className="mt-16 pt-12 border-t border-slate-800/70">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white">
              The 4-Stage Zero-Error Filing Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Every client file undergoes systematic verification before final submission
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 block mb-1">Step 01</span>
              <h4 className="text-sm font-bold text-white mb-1">Document Intake</h4>
              <p className="text-xs text-slate-300">
                Secure digital or in-office collection of invoices, bank records, Form 16, and previous returns.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 block mb-1">Step 02</span>
              <h4 className="text-sm font-bold text-white mb-1">Deep Reconciliation</h4>
              <p className="text-xs text-slate-300">
                Matching ledgers against AIS, TIS, 26AS, and GSTR-2B to uncover unclaimed credits and plug discrepancies.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 block mb-1">Step 03</span>
              <h4 className="text-sm font-bold text-white mb-1">Draft Review & Client Sign-off</h4>
              <p className="text-xs text-slate-300">
                Sharing tax computation with client, highlighting deductions utilized, and validating tax liability.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 block mb-1">Step 04</span>
              <h4 className="text-sm font-bold text-white mb-1">e-Filing & Acknowledgment</h4>
              <p className="text-xs text-slate-300">
                Timely submission on official portal, instantaneous e-verification, and archiving ITR-V / GSTR acknowledgments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
