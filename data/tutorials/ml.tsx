
import React from 'react';
import { Database } from 'lucide-react';
import { Category } from './types';
import { ML_PART1_TOPICS } from './ml-part1';
import { ML_PART2_TOPICS } from './ml-part2';
import { ML_PART3_TOPICS } from './ml-part3';
import { ML_PART4_TOPICS } from './ml-part4';
import { ML_PART5_TOPICS } from './ml-part5';
import { ML_PART6_TOPICS } from './ml-part6';
import { ML_PART7_TOPICS } from './ml-part7';

export const ML_CATEGORIES: Category[] = [
  {
    id: 'ml-ds',
    title: 'ML & Data Science',
    icon: <Database size={24} />,
    color: 'text-teal-600 bg-teal-50',
    description: 'A complete journey from Data Science basics to Advanced Machine Learning, Deep Learning, MLOps, and Cloud AI.',
    topics: [
      ...ML_PART1_TOPICS,
      ...ML_PART2_TOPICS,
      ...ML_PART3_TOPICS,
      ...ML_PART4_TOPICS,
      ...ML_PART5_TOPICS,
      ...ML_PART6_TOPICS,
      ...ML_PART7_TOPICS
    ]
  }
];
