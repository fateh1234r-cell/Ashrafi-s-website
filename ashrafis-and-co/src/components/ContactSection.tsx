import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink,
  AlertCircle,
  Navigation,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/firmData';
import { ConsultationFormState } from '../types';
import { AshrafiLogo } from './AshrafiLogo';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ConsultationFormState>({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Income Tax Filing',
    clientType: 'business',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  // Sync if preselectedService updates
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    // Simulate immediate submission
    setTimeout(() => {
      const generatedId = 'ASH-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedRefId(generatedId);
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Ashrafi's and co., I submitted an inquiry.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nService: ${formData.service}\nReference: ${submittedRefId || 'New Inquiry'}\nNotes: ${formData.message || 'Need tax consultation'}`;
    return `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Office & Direct Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Schedule Your Tax Consultation or Visit Our Vijayapur Office
          </h2>
          <p className="text-base text-slate-300">
            Have questions about GST notices, pending ITRs, or starting a business? Reach out to our principal tax consultants directly or visit our office in Pulakeshi Nagar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Office Card with Brand Emblem & Visual Map Illustration */}
            <div className="rounded-2xl bg-slate-950 p-6 sm:p-7 border border-slate-800 space-y-5">
              <div className="flex items-start gap-4">
                <AshrafiLogo size="md" showAura={true} />
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                    Registered Tax Practice
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    Landmark: <span className="text-slate-200">{BUSINESS_INFO.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Stylized Vijayapur Architectural Location Map Visual */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 p-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40"></div>
                
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono text-amber-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>16.8302° N, 75.7100° E</span>
                    </span>
                    <span className="font-semibold text-slate-300">Vijayapur, Karnataka</span>
                  </div>

                  {/* Visual Roadmap Blueprint */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>
                      <span className="font-semibold text-white">Shop No. 13, V.D.A Complex</span>
                      <span className="text-[10px] text-amber-300/80 font-mono">(Destination)</span>
                    </div>
                    <div className="pl-4 border-l-2 border-dashed border-amber-500/50 space-y-1 text-[11px] text-slate-400">
                      <div>Via Pulakeshi Nagar Corridor</div>
                      <div>Main Arterial: Managuli Road, Vijayapur - 586109</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800">
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-slate-950" />
                  <span>Open in Google Maps</span>
                </a>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-md border border-slate-800 transition-colors cursor-pointer"
                >
                  {addressCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{addressCopied ? 'Copied' : 'Copy Full Address'}</span>
                </button>
              </div>
            </div>

            {/* Direct Calling Channels Card */}
            <div className="rounded-2xl bg-slate-950 p-6 sm:p-7 border border-slate-800 space-y-4">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                Direct Contact Lines
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Primary Line</div>
                    <div className="text-sm font-bold text-white font-mono">{BUSINESS_INFO.primaryPhone}</div>
                  </div>
                </a>

                <a
                  href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Secondary Line</div>
                    <div className="text-sm font-bold text-white font-mono">{BUSINESS_INFO.secondaryPhone}</div>
                  </div>
                </a>
              </div>

              {/* Email & WhatsApp Row */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs sm:text-sm text-slate-200 hover:text-emerald-400 truncate"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat with Consultant on WhatsApp</span>
                </a>
              </div>

              {/* Office Hours */}
              <div className="pt-3 border-t border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl shadow-black/30">
              
              {submittedRefId ? (
                <div className="space-y-6 py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                      Inquiry Registered
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your consultation request regarding <strong className="text-emerald-300">{formData.service}</strong> has been received with Reference ID:
                    </p>
                    <div className="inline-block px-4 py-2 bg-slate-900 border border-amber-500/40 rounded-lg text-lg font-mono font-bold text-amber-300 tabular-nums">
                      {submittedRefId}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Our practitioner will call you at <strong className="text-white">{formData.phone}</strong> during your requested preferred slot. For instant confirmation, you can also forward your details via WhatsApp below.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <a
                      href={constructWhatsAppMessage()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmittedRefId(null);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          service: 'Income Tax Filing',
                          clientType: 'business',
                          preferredDate: '',
                          preferredTime: 'Morning (10:00 AM - 1:00 PM)',
                          message: ''
                        });
                      }}
                      className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">
                      Book a Free Preliminary Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out this quick form and our tax practitioner will review your requirements.
                    </p>
                  </div>

                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Patil"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white focus:outline-none focus:ring-1 ${
                          formErrors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-emerald-500 focus:ring-emerald-500'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white focus:outline-none focus:ring-1 ${
                          formErrors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-emerald-500 focus:ring-emerald-500'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Required <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Notice Resolution & Scrutiny">Notice Resolution & Scrutiny</option>
                        <option value="General Tax Consultation">General Tax Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Client Type Segment */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Client Profile
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'business', label: 'Business / Firm' },
                        { id: 'individual', label: 'Salaried Individual' },
                        { id: 'freelancer', label: 'Doctor / Professional' },
                        { id: 'other', label: 'New Startup' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, clientType: item.id as any })}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                            formData.clientType === item.id
                              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Brief Message or Notice Details <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need help with GSTR-3B reconciliation and filing delayed ITR for AY 2024-25"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Privacy note & Submit */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-950/40 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Consultation Callback</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400">
                      Your financial information is strictly confidential. No marketing spam.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
