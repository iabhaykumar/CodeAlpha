import React from 'react';
import { Server } from 'lucide-react';
import { Category } from './types';
import { PHP_PART1_TOPICS } from './php-part1';
import { PHP_PART2_TOPICS } from './php-part2';
import { PHP_PART3_TOPICS } from './php-part3';
import { PHP_PART4_TOPICS } from './php-part4';

export const PHP_CATEGORIES: Category[] = [
  {
    id: 'php',
    title: 'PHP',
    icon: <Server size={24} />,
    color: 'text-indigo-600 bg-indigo-50',
    description: 'A complete guide to PHP, from fundamentals to building modern, secure, and high-performance web applications for 2025.',
    topics: [
      ...PHP_PART1_TOPICS,
      ...PHP_PART2_TOPICS,
      ...PHP_PART3_TOPICS,
      ...PHP_PART4_TOPICS,
    ]
  }
];
