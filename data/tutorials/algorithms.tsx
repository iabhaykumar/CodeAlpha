
import React from 'react';
import { Cpu } from 'lucide-react';
import { Category } from './types';
import { ALGORITHMS_PART1_TOPICS } from './algorithms-part1';
import { ALGORITHMS_PART2_TOPICS } from './algorithms-part2';
import { ALGORITHMS_PART3_TOPICS } from './algorithms-part3';
import { ALGORITHMS_PART4_TOPICS } from './algorithms-part4';

export const ALGORITHMS_CATEGORIES: Category[] = [
  {
    id: 'algo',
    title: 'Algorithms',
    icon: <Cpu size={24} />,
    color: 'text-orange-600 bg-orange-50',
    description: 'A complete and rigorous curriculum covering everything from basic sorting to advanced graph theory and machine learning algorithms.',
    topics: [
      ...ALGORITHMS_PART1_TOPICS,
      ...ALGORITHMS_PART2_TOPICS,
      ...ALGORITHMS_PART3_TOPICS,
      ...ALGORITHMS_PART4_TOPICS
    ]
  }
];
