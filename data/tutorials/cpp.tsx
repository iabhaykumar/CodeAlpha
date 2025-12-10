import React from 'react';
import { Code2 } from 'lucide-react';
import { Category } from './types';
import { CPP_PART1_TOPICS } from './cpp-part1';
import { CPP_PART2_TOPICS } from './cpp-part2';
import { CPP_PART3_TOPICS } from './cpp-part3';
import { CPP_PART4_TOPICS } from './cpp-part4';
import { CPP_PART5_TOPICS } from './cpp-part5';

export const CPP_CATEGORIES: Category[] = [
  {
    id: 'cpp',
    title: 'C++ Programming',
    icon: <Code2 size={24} />,
    color: 'text-blue-600 bg-blue-50',
    description: 'High-performance programming with Object-Oriented features and the Standard Template Library (STL).',
    topics: [
      ...CPP_PART1_TOPICS,
      ...CPP_PART2_TOPICS,
      ...CPP_PART3_TOPICS,
      ...CPP_PART4_TOPICS,
      ...CPP_PART5_TOPICS,
    ]
  }
];