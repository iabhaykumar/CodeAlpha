import React from 'react';

export interface Topic {
  id: string;
  title: string;
  parent?: string;
  content: React.ReactNode;
}

export interface Category {
  id: string;
  title: string;
  icon?: React.ReactNode;
  description?: string;
  color?: string;
  topics: Topic[];
}