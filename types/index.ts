export interface NavItem {
  title: string;
  href: string;
  isButton?: boolean;
  children?: NavItem[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Card {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface SpeakingTopic {
  title: string;
  description: string;
  audience: string;
}
