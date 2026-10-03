import React, { useState } from 'react';
import { 
  Calculator, 
  FileText, 
  Calendar, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  ArrowRight, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { TAX_DEADLINES, DOCUMENT_CHECKLISTS, BUSINESS_INFO } from '../data/firmData';

interface TaxToolkitProps {
  onOpenConsultation: (service?: string) => void;
}

export const TaxToolkit: React.FC<TaxToolkitProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'checklist' | 'deadlines'>('calculator');

  // Income Tax Calculator State
  const [annualIncome, setAnnualIncome] = useState<number>(950000);
  const [deductions80C, setDeductions80C] = useState<number>(150000);
  const [healthInsurance80D, setHealthInsurance80D] = useState<number>(25000);
  const [homeLoanInterest, setHomeLoanInterest] = useState<number>(0);
  const [isSalaried, setIsSalaried] = useState<boolean>(true);

  // Checklist State
  const [activeChecklistCategory, setActiveChecklistCategory] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Deadline Filter State
  const [deadlineFilter, setDeadlineFilter] = useState<'ALL' | 'GST' | 'ITR' | 'TDS' | 'ADVANCE_TAX'>('ALL');

  // Tax computation logic under Indian IT Act (Current Assessment Year)
  // New Regime (Budget FY 2024-25 / AY 2025-26)
  const calculateNewRegime = () => {
    const stdDeduction = isSalaried ? 75000 : 0;
    const taxableIncome = Math.max(0, annualIncome - stdDeduction);

    let tax = 0;
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 700000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 400000 * 0.05 + (taxableIncome - 700000) * 0.10;
    } else if (taxableIncome <= 1200000) {
      tax = 400000 * 0.05 + 300000 * 0.10 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 400000 * 0.05 + 300000 * 0.10 + 200000 * 0.15 + (taxableIncome - 1200000) * 0.20;
    } else {
      tax = 400000 * 0.05 + 300000 * 0.10 + 200000 * 0.15 + 300000 * 0.20 + (taxableIncome - 1500000) * 0.30;
    }

    // Section 87A Rebate: if taxable income <= 7,00,000, tax becomes zero (rebate up to ₹25,000)
    // Plus marginal relief applies
    if (taxableIncome <= 700000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return {
      taxableIncome,
      baseTax: tax,
      cess,
      totalTax: Math.round(tax + cess),
      standardDeduction: stdDeduction
    };
  };

  // Old Regime
  const calculateOldRegime = () => {
    const stdDeduction = isSalaried ? 50000 : 0;
    const totalDeductions = stdDeduction + Math.min(150000, deductions80C) + Math.min(75000, healthInsurance80D) + Math.min(200000, homeLoanInterest);
    const taxableIncome = Math.max(0, annualIncome - totalDeductions);

    let tax = 0;
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 250000 * 0.05 + (taxableIncome - 500000) * 0.20;
    } else {
      tax = 250000 * 0.05 + 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
    }

    // Section 87A Rebate: if taxable income <= 5,00,000, rebate up to ₹12,500
    if (taxableIncome <= 500000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return {
      taxableIncome,
      baseTax: tax,
      cess,
      totalTax: Math.round(tax + cess),
      deductions: totalDeductions
    };
  };

  const newRegimeRes = calculateNewRegime();
  const oldRegimeRes = calculateOldRegime();
  const taxDifference = oldRegimeRes.totalTax - newRegimeRes.totalTax;

  const toggleChecklistItem = (itemText: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  const handleCopyChecklist = () => {
    const category = DOCUMENT_CHECKLISTS[activeChecklistCategory];
    const textToCopy = `Ashrafi's and co. - ${category.title} Document Checklist:\n` +
      category.items.map((item, idx) => `${idx + 1}. [${checkedItems[item] ? 'x' : ' '}] ${item}`).join('\n') +
      `\n\nAshrafi's and co. - V.D.A Complex Shop no-13, Pulakeshi Nagar, Managuli Road, Vijayapur (Phone: 7676558282 / 6362614155)`;
    
    navigator.clipboard.writeText(textToCopy);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const filteredDeadlines = deadlineFilter === 'ALL'
    ? TAX_DEADLINES
    : TAX_DEADLINES.filter(d => d.category === deadlineFilter);

  return (
    <section id="toolkit" className="py-20 md:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              Client Utilities & Compliance Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Tax Estimator, Document Checklist & Calendar
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Interactive tools designed to give you clarity on your tax slab, required documentation, and upcoming statutory filing dates.
            </p>
          </div>

          {/* Segmented Control for 3 Tabs (Interactive buttons) */}
          <div className="inline-flex p-1.5 bg-slate-950 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tax Regime Comparison
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'checklist'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Document Checklist
            </button>
            <button
              onClick={() => setActiveTab('deadlines')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'deadlines'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Statutory Deadlines
            </button>
          </div>
        </div>

        {/* Tab 1: Tax Regime Comparison */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <span>Estimate Your Tax (FY 2024-25 / AY 2025-26)</span>
                </h3>
                <span className="text-xs text-slate-400">Quick Preview</span>
              </div>

              {/* Annual Gross Income */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label htmlFor="gross-income" className="font-medium text-slate-300">
                    Annual Gross Income (₹)
                  </label>
                  <span className="font-mono font-bold text-white tabular-nums">
                    ₹{annualIncome.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="gross-income"
                  type="range"
                  min="300000"
                  max="3500000"
                  step="25000"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>₹3 Lakh</span>
                  <span>₹15 Lakh</span>
                  <span>₹35 Lakh</span>
                </div>
              </div>

              {/* Salaried Checkbox */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div>
                  <div className="text-sm font-medium text-white">Salaried Employee</div>
                  <div className="text-xs text-slate-400">
                    Eligible for ₹75,000 (New) / ₹50,000 (Old) Standard Deduction
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isSalaried}
                  onChange={(e) => setIsSalaried(e.target.checked)}
                  className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
                />
              </div>

              {/* Old Regime Deductions Section */}
              <div className="pt-2 border-t border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Deductions for Old Regime Consideration
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">
                      Section 80C (PPF, ELSS, LIC)
                    </label>
                    <input
                      type="number"
                      max="150000"
                      value={deductions80C}
                      onChange={(e) => setDeductions80C(Math.min(150000, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    />
                    <span className="text-[10px] text-slate-400">Max limit: ₹1,50,000</span>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">
                      Section 80D (Health Insurance)
                    </label>
                    <input
                      type="number"
                      max="75000"
                      value={healthInsurance80D}
                      onChange={(e) => setHealthInsurance80D(Math.min(75000, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    />
                    <span className="text-[10px] text-slate-400">Self + Parents</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">
                    Home Loan Interest - Section 24(b)
                  </label>
                  <input
                    type="number"
                    max="200000"
                    value={homeLoanInterest}
                    onChange={(e) => setHomeLoanInterest(Math.min(200000, Number(e.target.value)))}
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter interest paid up to ₹2,00,000"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-400 italic">
                * Note: Estimator illustrates baseline rates. Capital gains, HRA calculations, and 80CCD additions can be precisely structured by our practitioners.
              </div>
            </div>

            {/* Results Comparison Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* New Regime Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  newRegimeRes.totalTax <= oldRegimeRes.totalTax
                    ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-950/40'
                    : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-semibold text-emerald-400 uppercase">Default Option</div>
                      <h4 className="text-lg font-bold text-white">New Tax Regime</h4>
                    </div>
                    {newRegimeRes.totalTax <= oldRegimeRes.totalTax && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800/80 px-2 py-0.5 rounded">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 mb-6">
                    <div className="flex justify-between">
                      <span>Standard Deduction:</span>
                      <span className="font-mono text-white tabular-nums">₹{newRegimeRes.standardDeduction.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxable Income:</span>
                      <span className="font-mono text-white tabular-nums">₹{newRegimeRes.taxableIncome.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health & Edu Cess (4%):</span>
                      <span className="font-mono text-white tabular-nums">₹{Math.round(newRegimeRes.cess).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-xs text-slate-400">Total Estimated Tax</div>
                    <div className="text-2xl font-bold font-mono text-amber-300 tabular-nums">
                      ₹{newRegimeRes.totalTax.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Old Regime Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  oldRegimeRes.totalTax < newRegimeRes.totalTax
                    ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-950/40'
                    : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase">Optional</div>
                      <h4 className="text-lg font-bold text-white">Old Tax Regime</h4>
                    </div>
                    {oldRegimeRes.totalTax < newRegimeRes.totalTax && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800/80 px-2 py-0.5 rounded">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 mb-6">
                    <div className="flex justify-between">
                      <span>Total Deductions Claimed:</span>
                      <span className="font-mono text-white tabular-nums">₹{oldRegimeRes.deductions.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxable Income:</span>
                      <span className="font-mono text-white tabular-nums">₹{oldRegimeRes.taxableIncome.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health & Edu Cess (4%):</span>
                      <span className="font-mono text-white tabular-nums">₹{Math.round(oldRegimeRes.cess).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-xs text-slate-400">Total Estimated Tax</div>
                    <div className="text-2xl font-bold font-mono text-slate-200 tabular-nums">
                      ₹{oldRegimeRes.totalTax.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommendation Callout */}
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Practitioner Verdict</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {taxDifference > 0 ? (
                    <>
                      Under your income details, the <strong className="text-emerald-300">New Tax Regime</strong> saves you{' '}
                      <strong className="text-emerald-400 font-mono">₹{Math.abs(taxDifference).toLocaleString('en-IN')}</strong> in taxes without locking money into investments.
                    </>
                  ) : taxDifference < 0 ? (
                    <>
                      With your investments and home loan deductions, the <strong className="text-emerald-300">Old Tax Regime</strong> saves you{' '}
                      <strong className="text-emerald-400 font-mono">₹{Math.abs(taxDifference).toLocaleString('en-IN')}</strong> in taxes.
                    </>
                  ) : (
                    <>Both regimes yield identical tax liability for your entered figures.</>
                  )}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation('Income Tax Regime Review')}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                  >
                    <span>Have our practitioners verify your exact Form 16</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Document Checklist */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              {DOCUMENT_CHECKLISTS.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveChecklistCategory(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeChecklistCategory === idx
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {DOCUMENT_CHECKLISTS[activeChecklistCategory].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {DOCUMENT_CHECKLISTS[activeChecklistCategory].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyChecklist}
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg cursor-pointer transition-colors"
                  >
                    {copiedNotification ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copy Checklist</span>
                      </>
                    )}
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-lg transition-colors"
                  >
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DOCUMENT_CHECKLISTS[activeChecklistCategory].items.map((item, idx) => {
                  const isChecked = !!checkedItems[item];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklistItem(item)}
                      className={`flex items-start gap-3 p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-600/50 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm ${isChecked ? 'line-through text-slate-400' : ''}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span>Bring original PAN and Aadhaar or share password-protected digital copies via email.</span>
                <span className="text-emerald-400 font-medium">Confidential & 100% Secure Storage</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Statutory Deadlines */}
        {activeTab === 'deadlines' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 mr-2">Filter by:</span>
              {(['ALL', 'GST', 'ITR', 'TDS', 'ADVANCE_TAX'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setDeadlineFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    deadlineFilter === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.replace('_', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDeadlines.map((deadline, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-emerald-400 font-medium mb-1">
                      <span>{deadline.category} · {deadline.period}</span>
                      <span className="font-mono text-slate-400">{deadline.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {deadline.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {deadline.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => onOpenConsultation(`${deadline.title} Filing`)}
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Set compliance reminder with us</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
