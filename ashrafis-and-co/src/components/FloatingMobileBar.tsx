import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/firmData';

interface FloatingMobileBarProps {
  onOpenConsultation: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold active:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-semibold active:bg-emerald-900"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold active:bg-emerald-700 cursor-pointer shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Book Slot</span>
        </button>
      </div>
    </div>
  );
};
