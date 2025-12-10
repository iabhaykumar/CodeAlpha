
import React from 'react';
import { Github } from 'lucide-react';
import { Category } from './types';
import { GITHUB_PART1_TOPICS } from './github-part1';
import { GITHUB_PART2_TOPICS } from './github-part2';
import { GITHUB_PART3_TOPICS } from './github-part3';
import { GITHUB_PART4_TOPICS } from './github-part4';
import { GITHUB_PART5_TOPICS } from './github-part5';

export const GITHUB_CATEGORIES: Category[] = [
  {
    id: 'github',
    title: 'GitHub',
    icon: <Github size={24} />,
    color: 'text-slate-800 bg-slate-100',
    description: 'Master the world\'s leading software development platform. From basic Git commands to advanced CI/CD pipelines, collaboration workflows, and AI tools.',
    topics: [
      ...GITHUB_PART1_TOPICS,
      ...GITHUB_PART2_TOPICS,
      ...GITHUB_PART3_TOPICS,
      ...GITHUB_PART4_TOPICS,
      ...GITHUB_PART5_TOPICS,
    ]
  }
];
