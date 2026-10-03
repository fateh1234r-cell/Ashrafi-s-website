import React from 'react';
import { 
  Receipt, 
  Calculator, 
  FileCheck2, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/firmData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-amber-400" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-amber-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      default:
        return <FileCheck2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Services & Statutory Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Comprehensive Tax & Compliance Services Tailored for Your Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From single-proprietor traders to multi-partner firms and salaried professionals in Vijayapur, we handle statutory deadlines, documentation, and department inquiries with unwavering precision.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-xl bg-slate-950/70 border border-slate-800 p-6 sm:p-7 hover:border-amber-500/50 hover:bg-slate-950/90 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-amber-950/20"
              >
                <div>
                  {/* Top Bar inside card: Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-sm font-mono font-medium text-slate-400">
                      {indexFormatted}.
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-400/90 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-slate-800/60 mt-auto flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-400 font-medium truncate">
                    {service.keyBenefit}
                  </div>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-600 rounded-md border border-emerald-800/60 hover:border-emerald-500 transition-colors whitespace-nowrap cursor-pointer shrink-0"
                    title={`Inquire about ${service.title}`}
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote callout for custom statutory queries */}
        <div className="mt-12 p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Have a special notice, compounding issue, or delayed return?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We handle complex compounding petitions, condonation of delay requests, and past assessment year rectifications.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Special Case / Notice Resolution')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm whitespace-nowrap cursor-pointer transition-colors"
          >
            Request Notice Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
