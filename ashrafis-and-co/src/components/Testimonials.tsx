import React from 'react';
import { Quote, Building, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/firmData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Client Proof & Local Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Trusted by Vijayapur’s Traders, Professionals & Clinic Directors
          </h2>
          <p className="text-base text-slate-300">
            Real outcomes from local enterprises who rely on Ashrafi's and co. for stress-free tax filings and audit readiness.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-emerald-400 font-medium">{item.serviceUsed}</span>
                  <span className="font-mono tabular-nums text-emerald-400 font-semibold">{item.metric}</span>
                </div>

                <Quote className="w-8 h-8 text-slate-700" />

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {item.designation}, {item.businessName}
                </div>
                <div className="text-[11px] text-emerald-400/80 mt-1">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
