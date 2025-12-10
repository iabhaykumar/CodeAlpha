
import React from 'react';
import { Code2 } from 'lucide-react';
import { Category } from './types';
import { VSCODE_PART1_TOPICS } from './vscode-part1';
import { VSCODE_PART2_TOPICS } from './vscode-part2';
import { VSCODE_PART3_TOPICS } from './vscode-part3';
import { VSCODE_PART4_TOPICS } from './vscode-part4';
import { VSCODE_PART5_TOPICS } from './vscode-part5';
import { VSCODE_PART6_TOPICS } from './vscode-part6';

export const VSCODE_CATEGORIES: Category[] = [
  {
    id: 'vscode',
    title: 'Visual Studio Code',
    icon: <Code2 size={24} />,
    color: 'text-blue-500 bg-blue-50',
    description: 'The definitive guide to VS Code. From interface mastery to advanced debugging, remote development, and power user shortcuts.',
    topics: [
      ...VSCODE_PART1_TOPICS,
      ...VSCODE_PART2_TOPICS,
      ...VSCODE_PART3_TOPICS,
      ...VSCODE_PART4_TOPICS,
      ...VSCODE_PART5_TOPICS,
      ...VSCODE_PART6_TOPICS,
    ]
  }
];
