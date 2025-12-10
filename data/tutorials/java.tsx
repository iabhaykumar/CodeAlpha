import React from 'react';
import { Code2 } from 'lucide-react';
import { Category } from './types';
import { JAVA_PART1_TOPICS } from './java-part1';
import { JAVA_PART2_TOPICS } from './java-part2';
import { JAVA_PART3_TOPICS } from './java-part3';
import { JAVA_PART4_TOPICS } from './java-part4';

export const JAVA_CATEGORIES: Category[] = [
  {
    id: 'java',
    title: 'Java',
    icon: <Code2 size={24} />,
    color: 'text-red-600 bg-red-50',
    description: 'A comprehensive Java roadmap for 2025, covering everything from core fundamentals and OOP to advanced topics like virtual threads, Spring Boot, and AI integration.',
    topics: [
      ...JAVA_PART1_TOPICS,
      ...JAVA_PART2_TOPICS,
      ...JAVA_PART3_TOPICS,
      ...JAVA_PART4_TOPICS,
    ]
  }
];
