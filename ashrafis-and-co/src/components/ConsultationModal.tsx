import React, { useState } from 'react';
import { X, Calendar, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/firmData';
import { AshrafiLogo } from './AshrafiLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Income Tax Filing');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  React.useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = 'ASH-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 600);
  };

  const handleClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 p-6 sm:p-7 shadow-2xl text-slate-100 space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Appointment Request Sent!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our tax practitioner will reach out to you shortly at <span className="text-white font-semibold">{phone}</span> to confirm your slot for <span className="text-emerald-300 font-semibold">{service}</span>.
            </p>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
              Reference Code: <span className="font-mono text-amber-400 font-bold">{submittedRef}</span>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(`Hello Ashrafi's and co., I requested a consultation for ${service} (Ref: ${submittedRef}). Name: ${fullName}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <AshrafiLogo size="sm" />
                <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                  Ashrafi's and co. · Vijayapur
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Visit our office at V.D.A Complex, Pulakeshi Nagar, or request an in-depth telephone consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Patil"
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit phone number"
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Notice Resolution & Scrutiny">Notice Resolution & Scrutiny</option>
                  <option value="General Financial Advice">General Financial Advice</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-950/40 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Consultation Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Prefer immediate call?</span>
              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
