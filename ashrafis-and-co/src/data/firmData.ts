import { ServiceItem, TestimonialItem, TaxDeadlineItem, DocumentChecklistCategory } from '../types';

export const BUSINESS_INFO = {
  name: "Ashrafi's and co.",
  tagline: "Your trusted tax consultants",
  secondaryTagline: "End-to-End Tax & Compliance Solutions",
  specialty: "Income Tax & GST Practitioner",
  address: "V.D.A Complex Shop no-13, Pulakeshi Nagar, Managuli Road, Vijayapur-586109",
  shortAddress: "Pulakeshi Nagar, Managuli Road, Vijayapur, Karnataka 586109",
  landmark: "V.D.A Complex, Shop No. 13",
  primaryPhone: "7676558282",
  secondaryPhone: "6362614155",
  email: "ashrafisandco@gmail.com",
  workingHours: "Monday – Saturday: 9:30 AM to 8:00 PM (Sunday by appointment)",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Managuli+Road+Vijayapur+Karnataka+586109",
  whatsappUrl: "https://wa.me/917676558282?text=Hello%20Ashrafi's%20and%20co.,%20I%20would%20like%20to%20consult%20regarding%20tax%20filing%20and%20compliance.",
  foundedNote: "Serving Vijayapur, Bagalkot, and North Karnataka businesses with integrity and compliance precision."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "tds-filing",
    title: "TDS Filing & Reconciliation",
    subtitle: "Form 24Q, 26Q & Certificate Generation",
    description: "Accurate calculation, deduction, and timely filing of Tax Deducted at Source statements to avoid penalty interest and late fees under Section 234E.",
    iconName: "Receipt",
    tag: "Statutory Filing",
    deliverables: [
      "Form 24Q (Salary TDS) & 26Q (Non-Salary TDS)",
      "Form 16 & Form 16A generation and distribution",
      "Challan 281 verification & TRACES portal reconciliation",
      "Correction statements for PAN rectification & challan mismatches"
    ],
    keyBenefit: "Zero notice risk under 200A and instant TRACES certificate issuance."
  },
  {
    id: "income-tax-filing",
    title: "Income Tax Filing",
    subtitle: "Personal, Professional & Corporate Returns",
    description: "Personal and corporate tax returns preparation and filing to maximize legitimate deductions, eliminate clerical errors, and ensure 100% compliance.",
    iconName: "Calculator",
    tag: "Core Specialty",
    deliverables: [
      "ITR-1 through ITR-7 filings for individuals, HUF, LLPs, and companies",
      "AIS, TIS, and Form 26AS comprehensive matching before e-verification",
      "Capital gains computation (real estate, shares, mutual funds)",
      "Presumptive taxation filing under Sections 44AD, 44ADA, and 44AE"
    ],
    keyBenefit: "Maximum tax savings with complete audit-trail verification."
  },
  {
    id: "gst-registration-returns",
    title: "GST Registration & Returns",
    subtitle: "End-to-End Goods & Services Tax Management",
    description: "Seamless new GST registration along with regular monthly, quarterly, and annual return filings with rigorous Input Tax Credit (ITC) reconciliation.",
    iconName: "FileCheck2",
    tag: "Monthly Compliance",
    deliverables: [
      "New GSTIN registration & amendment of business particulars",
      "Monthly GSTR-1 (sales) and GSTR-3B (tax payment) filings",
      "GSTR-2B vs purchase register reconciliation to secure 100% ITC",
      "Annual returns (GSTR-9) and reconciliation statements (GSTR-9C)"
    ],
    keyBenefit: "Prevention of blocked ITC and zero late fees through disciplined scheduling."
  },
  {
    id: "business-registration",
    title: "Business Registration",
    subtitle: "Entity Formation & Statutory Licenses",
    description: "Navigating legal entity setup such as sole proprietorships, partnership firms, LLPs, or private companies with complete statutory documentation.",
    iconName: "Building2",
    tag: "New Ventures",
    deliverables: [
      "Partnership deed drafting and firm registration",
      "MSME / Udyam registration for government subsidy access",
      "Shop & Commercial Establishment Act license (Karnataka)",
      "PAN, TAN, and current bank account resolution documentation"
    ],
    keyBenefit: "Ready-to-operate entity structure setup in fastest turnaround time."
  },
  {
    id: "audit-compliance",
    title: "Audit & Compliance",
    subtitle: "Scrutiny Defense & Health Checks",
    description: "Internal and statutory audit preparation, Income Tax Scrutiny notice handling under Section 143/148, and proactive compliance health checks.",
    iconName: "ShieldCheck",
    tag: "Notice Resolution",
    deliverables: [
      "Tax Audit Report assistance under Section 44AB",
      "Drafting replies to Income Tax & GST show-cause notices",
      "Faceless assessment paper book and electronic submission support",
      "Internal financial controls & ledger clean-up before bank loans"
    ],
    keyBenefit: "Direct practitioner representation with proven procedural expertise."
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    subtitle: "Tax Optimization & Cash Flow Planning",
    description: "Strategic guidance for tax efficiency, working capital discipline, cash flow management, and capital structuring for growing commercial enterprises.",
    iconName: "TrendingUp",
    tag: "Strategic Growth",
    deliverables: [
      "Advance tax forecasting to prevent interest under 234B & 234C",
      "Project report preparation for SME working capital & term loans",
      "Depreciation and capital expenditure tax planning",
      "Business succession and family asset tax structuring"
    ],
    keyBenefit: "Prudent financial foresight that protects margins and liquidity."
  }
];

export const TRUST_FACTORS = [
  {
    title: "Local Vijayapur Authority",
    description: "Centrally located at V.D.A Complex on Managuli Road. We understand local commerce, trade cycles, mandi businesses, and retail requirements firsthand.",
    metric: "Shop 13, V.D.A Complex"
  },
  {
    title: "Strict Accuracy & Zero-Penalty Focus",
    description: "Every return undergoes exhaustive multi-point reconciliation with AIS, TIS, 26AS, and GSTR-2B before portal submission.",
    metric: "100% Reconciled"
  },
  {
    title: "Certified Professional Practitioners",
    description: "Direct handling by dedicated Income Tax & GST practitioners who stay abreast of every Finance Bill amendment and GST Council notification.",
    metric: "Qualified Practice"
  },
  {
    title: "Direct One-on-One Accessibility",
    description: "No generic call centers or bureaucratic runarounds. Speak directly with your consultant on phone, WhatsApp, or at our office.",
    metric: "Direct Direct Access"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Basavaraj Kulkarni",
    designation: "Proprietor",
    businessName: "Kulkarni Hardware & Building Supplies",
    location: "Vijayapur",
    quote: "Ashrafi's and co. streamlined our monthly GST returns and rectified two quarters of unmatched Input Tax Credit that saved us over ₹1.8 Lakhs in working capital.",
    serviceUsed: "GST Returns & ITC Reconciliation",
    metric: "₹1.8L ITC Reclaimed"
  },
  {
    id: "test-2",
    name: "Dr. Farhan Inamdar",
    designation: "Consultant Surgeon & Clinic Director",
    businessName: "Inamdar Healthcare Center",
    location: "Pulakeshi Nagar, Vijayapur",
    quote: "Filing personal and clinic income tax was stressful until I handed it over to Ashrafi's and co. They handled our presumptive taxation and advance tax forecasting flawlessly.",
    serviceUsed: "Income Tax & Advance Tax Planning",
    metric: "100% Timely ITR"
  },
  {
    id: "test-3",
    name: "Mohammad Shafi Patel",
    designation: "Managing Partner",
    businessName: "Patel Agro Trading Co.",
    location: "APMC Yard, Vijayapur",
    quote: "From partnership registration and Udyam certification to quarterly TDS filings, their responsiveness is unmatched. Whenever we have a tax query, they are just a phone call away.",
    serviceUsed: "Business Setup & TDS Compliance",
    metric: "Full-Cycle Compliance"
  }
];

export const TAX_DEADLINES: TaxDeadlineItem[] = [
  {
    date: "11th of every month",
    title: "GSTR-1 Return",
    description: "Monthly outward supply statement for regular registered taxpayers with turnover > ₹5 Crores or non-QRMP.",
    category: "GST",
    period: "Monthly"
  },
  {
    date: "20th of every month",
    title: "GSTR-3B Summary Return",
    description: "Monthly summary return along with payment of net tax liability after setting off available Input Tax Credit.",
    category: "GST",
    period: "Monthly"
  },
  {
    date: "7th of every month",
    title: "TDS Payment Deposit",
    description: "Deadline to deposit Tax Deducted at Source (TDS) for deductions made during previous month via Challan 281.",
    category: "TDS",
    period: "Monthly"
  },
  {
    date: "31st July",
    title: "ITR Filing (Non-Audit)",
    description: "Mandatory due date for individuals, salaried employees, HUFs, and businesses not requiring tax audit.",
    category: "ITR",
    period: "Annual"
  },
  {
    date: "31st October",
    title: "ITR Filing (Tax Audit Cases)",
    description: "Due date for corporate entities, working partners of audited firms, and entities subject to Section 44AB audit.",
    category: "ITR",
    period: "Annual"
  },
  {
    date: "15th June / Sep / Dec / Mar",
    title: "Advance Tax Installments",
    description: "Quarterly installments for taxpayers whose estimated tax liability exceeds ₹10,000 in a financial year.",
    category: "ADVANCE_TAX",
    period: "Quarterly"
  }
];

export const DOCUMENT_CHECKLISTS: DocumentChecklistCategory[] = [
  {
    title: "Salaried Individuals (ITR-1 / ITR-2)",
    subtitle: "Documents required for personal income tax return",
    items: [
      "PAN Card & Aadhaar Card (Must be linked)",
      "Form 16 (Part A & Part B) from employer",
      "Bank Account Statements (All active accounts for the FY)",
      "Housing Loan interest certificate (if claiming Section 24b)",
      "Proof of tax-saving investments (80C, 80D Mediclaim, NPS)",
      "Capital gains statements from Zerodha/Groww/CAMS (if trading)"
    ]
  },
  {
    title: "Business & Professionals (ITR-3 / ITR-4)",
    subtitle: "Documents for traders, contractors, doctors, and firms",
    items: [
      "Annual Sales/Turnover summary and Gross Receipts",
      "Bank Statements with narration for business transactions",
      "Form 26AS, AIS (Annual Information Statement) & TIS",
      "Depreciation schedule & asset purchase tax invoices",
      "Cash sales and cash deposit ledgers",
      "Details of advance tax paid and self-assessment tax challans"
    ]
  },
  {
    title: "GST Registration & Regular Filing",
    subtitle: "Prerequisites for new GSTIN and monthly filings",
    items: [
      "PAN Card of applicant or business entity",
      "Proof of business address (Electricity bill / Rental agreement with NOC)",
      "Cancelled bank cheque or bank statement showing IFSC & account name",
      "Aadhaar card and photo of promoter/authorized signatory",
      "Purchase tax invoices with valid HSN/SAC codes for ITC claim",
      "Sales register with customer GSTIN and state codes"
    ]
  }
];

export const FAQS = [
  {
    question: "Where is Ashrafi's and co. located in Vijayapur?",
    answer: "Our office is centrally located at Shop no-13, V.D.A Complex, Pulakeshi Nagar, Managuli Road, Vijayapur-586109. You can visit us during office hours (9:30 AM to 8:00 PM) or call 7676558282 / 6362614155 to schedule a consultation."
  },
  {
    question: "Who is required to register under GST?",
    answer: "Any business selling goods with an annual turnover exceeding ₹40 Lakhs (₹20 Lakhs for services in regular states) must register for GST. Voluntary registration is also beneficial for interstate supply, claiming Input Tax Credit, and participating in tenders."
  },
  {
    question: "What is the penalty if I miss the ITR filing deadline of July 31st?",
    answer: "Filing after the deadline attracts a late fee under Section 234F (up to ₹5,000 for income above ₹5 Lakhs, and ₹1,000 for income up to ₹5 Lakhs). Additionally, penal interest under Section 234A is charged at 1% per month on unpaid tax liability, and business losses cannot be carried forward."
  },
  {
    question: "Do I need to file an Income Tax Return if my income is below the taxable limit?",
    answer: "Yes, filing a Nil or basic return is strongly recommended if you want to claim TDS refunds, apply for home or business loans, obtain visas, or carry forward capital losses. It also serves as an authentic proof of financial standing."
  },
  {
    question: "How does Ashrafi's and co. handle Income Tax or GST scrutiny notices?",
    answer: "We perform an in-depth review of the notice, verify the department's query against your filed accounts and bank statements, draft formal legal submissions with supporting documentary evidence, and represent your case through the official e-Proceedings portal."
  },
  {
    question: "Can I consult Ashrafi's and co. remotely or via WhatsApp?",
    answer: "Absolutely. While many clients visit our Managuli Road office, we also provide end-to-end remote service via phone (7676558282 / 6362614155), WhatsApp, and email (ashrafisandco@gmail.com). You can securely share documents digitally."
  }
];
