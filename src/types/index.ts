// Type definitions for the portfolio project

import type { ComponentType } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: 'Live' | 'Development' | 'Planning';
  github: string;
  demo: string;
  image: string;
  features: string[];
  impact: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: ComponentType<{ className?: string }>;
}

export interface SkillsData {
  blockchain: Skill[];
  web3: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credential: string;
  icon: ComponentType<{ className?: string }>;
}

export interface CryptoPrice {
  price: number;
  change24h: number;
  marketCap: number;
  volume: number;
}

export interface CryptoPrices {
  bitcoin: CryptoPrice;
  ethereum: CryptoPrice;
  solana: CryptoPrice;
}

export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
