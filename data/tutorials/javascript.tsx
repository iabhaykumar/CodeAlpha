import React from 'react';
import { Globe } from 'lucide-react';
import { Category } from './types';
import { JAVASCRIPT_PART1_TOPICS } from './javascript-part1';
import { JAVASCRIPT_PART2_TOPICS } from './javascript-part2';
import { JAVASCRIPT_PART3_TOPICS } from './javascript-part3';
import { JAVASCRIPT_PART4_TOPICS } from './javascript-part4';
import { JAVASCRIPT_PART5_TOPICS } from './javascript-part5';

export const JAVASCRIPT_CATEGORIES: Category[] = [
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: <Globe size={24} />,
    color: 'text-yellow-500 bg-yellow-50',
    description: 'The dynamic language that powers the interactive web, from fundamentals to advanced topics.',
    topics: [
      ...JAVASCRIPT_PART1_TOPICS,
      ...JAVASCRIPT_PART2_TOPICS,
      ...JAVASCRIPT_PART3_TOPICS,
      ...JAVASCRIPT_PART4_TOPICS,
      ...JAVASCRIPT_PART5_TOPICS,
    ],
  },
];