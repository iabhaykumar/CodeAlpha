
export interface Internship {
  id: string;
  name: string;
  img: string;
  badge: string;
  category: 'development' | 'ai' | 'business' | 'design' | 'engineering' | 'misc';
  students: string;
  duration: string;
  link: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface VerificationResult {
  status: 'idle' | 'success' | 'error';
  message: string;
}

export interface QuizResult {
  name: string;
  score: number;
  rank: number;
  domain: string;
}

export interface FeedbackItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatar: string;
}

export enum StatsType {
  REGISTRATIONS = 'Registrations',
  PARTICIPANTS = 'Participants',
  SATISFACTION = 'Satisfaction',
  COUNTRIES = 'Countries'
}