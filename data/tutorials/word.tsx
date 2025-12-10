import React from 'react';
import { FileText } from 'lucide-react';
import { Category } from './types';
import { WORD_PART1_TOPICS } from './word-part1';
import { WORD_PART2_TOPICS } from './word-part2';
import { WORD_PART3_TOPICS } from './word-part3';
import { WORD_PART4_TOPICS } from './word-part4';

export const WORD_CATEGORIES: Category[] = [
  {
    id: 'ms-word',
    title: 'Microsoft Word 2021',
    icon: <FileText size={24} />,
    color: 'text-blue-600 bg-blue-50',
    description: 'The ultimate guide to Microsoft Word 2021. From basic document creation to advanced macros, mail merge, and every shortcut key you need to know.',
    topics: [
      ...WORD_PART1_TOPICS,
      ...WORD_PART2_TOPICS,
      ...WORD_PART3_TOPICS,
      ...WORD_PART4_TOPICS,
    ]
  }
];