import React from 'react';
import { Server } from 'lucide-react';
import { Category } from './types';
import { DEVOPS_PART1_TOPICS } from './devops-part1';
import { DEVOPS_PART2_TOPICS } from './devops-part2';
import { DEVOPS_PART3_TOPICS } from './devops-part3';
import { DEVOPS_PART4_TOPICS } from './devops-part4';

export const DEVOPS_CATEGORIES: Category[] = [
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Server size={24} />,
    color: 'text-blue-500 bg-blue-50',
    description: 'The ultimate guide to DevOps: Linux, Docker, Kubernetes, Terraform, Jenkins, and Cloud Architecture.',
    topics: [
      ...DEVOPS_PART1_TOPICS,
      ...DEVOPS_PART2_TOPICS,
      ...DEVOPS_PART3_TOPICS,
      ...DEVOPS_PART4_TOPICS,
    ]
  }
];