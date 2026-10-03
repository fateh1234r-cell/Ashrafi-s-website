export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  keyBenefit: string;
  tag: string;
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  clientType: 'individual' | 'business' | 'freelancer' | 'other';
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  businessName: string;
  location: string;
  quote: string;
  serviceUsed: string;
  metric: string;
}

export interface TaxDeadlineItem {
  date: string;
  title: string;
  description: string;
  category: 'ITR' | 'GST' | 'TDS' | 'ADVANCE_TAX';
  period: string;
}

export interface DocumentChecklistCategory {
  title: string;
  subtitle: string;
  items: string[];
}
