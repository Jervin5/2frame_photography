import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  src: string;
  title: string;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}