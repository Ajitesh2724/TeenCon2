export interface EventItem {
  id: string;
  title: string;
  description: string;
  category: 'Conference' | 'MUN' | 'Talk Show' | 'Run' | 'Debate';
  image: string;
  color: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}
