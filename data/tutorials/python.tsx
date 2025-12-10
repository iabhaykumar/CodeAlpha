import React from 'react';
import { Terminal } from 'lucide-react';
import { Category } from './types';
import { PYTHON_PART1_TOPICS } from './python-part1';
import { PYTHON_PART2_TOPICS } from './python-part2';
import { PYTHON_PART3_TOPICS } from './python-part3';
import { PYTHON_PART4_TOPICS } from './python-part4';

export const PYTHON_CATEGORIES: Category[] = [
  {
    id: 'python',
    title: 'Python',
    icon: <Terminal size={24} />,
    color: 'text-yellow-600 bg-yellow-50',
    description: 'The complete Python roadmap, from absolute basics to advanced topics like AI, web development, and modern best practices for 2025.',
    topics: [
      ...PYTHON_PART1_TOPICS,
      ...PYTHON_PART2_TOPICS,
      ...PYTHON_PART3_TOPICS,
      ...PYTHON_PART4_TOPICS,
    ]
  }
];