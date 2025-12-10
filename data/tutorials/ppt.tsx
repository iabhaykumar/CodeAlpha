
import React from 'react';
import { MonitorPlay } from 'lucide-react';
import { Category } from './types';
import { PPT_PART1_TOPICS } from './ppt-part1';
import { PPT_PART2_TOPICS } from './ppt-part2';
import { PPT_PART3_TOPICS } from './ppt-part3';
import { PPT_PART4_TOPICS } from './ppt-part4';

export const PPT_CATEGORIES: Category[] = [
  {
    id: 'ms-ppt',
    title: 'Microsoft PowerPoint 2021',
    icon: <MonitorPlay size={24} />,
    color: 'text-orange-600 bg-orange-50',
    description: 'Create impactful presentations. Learn slide design, the Morph transition, animation mastery, and professional delivery techniques.',
    topics: [
      ...PPT_PART1_TOPICS,
      ...PPT_PART2_TOPICS,
      ...PPT_PART3_TOPICS,
      ...PPT_PART4_TOPICS,
    ]
  }
];
