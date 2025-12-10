
import React from 'react';
import { Terminal } from 'lucide-react';
import { Category } from './types';
import { C_PART1_TOPICS } from './c-part1';
import { C_PART2_TOPICS } from './c-part2';
import { C_PART3_TOPICS } from './c-part3';
import { C_PART4_TOPICS } from './c-part4';
import { C_PART5_TOPICS } from './c-part5';

export const C_CATEGORIES: Category[] = [
  {
    id: 'c',
    title: 'C Programming',
    icon: <Terminal size={24} />,
    color: 'text-blue-700 bg-blue-50',
    description: 'The mother of all modern languages. From low-level memory management to building complex systems.',
    topics: [
      ...C_PART1_TOPICS,
      ...C_PART2_TOPICS,
      ...C_PART3_TOPICS,
      ...C_PART4_TOPICS,
      ...C_PART5_TOPICS,
    ]
  }
];
