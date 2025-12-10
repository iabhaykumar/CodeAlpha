import React from 'react';
import { Globe, Server, Database } from 'lucide-react';
import { Category } from './types';
import CodeBlock from '../../components/CodeBlock';

export const TECHNOLOGIES_CATEGORIES: Category[] = [
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: <Globe size={24} />,
    color: 'text-yellow-500 bg-yellow-50',
    description: 'Language of the Web.',
    topics: [
        { id: 'js-intro', title: 'JS Intro', parent: 'Basics', content: <><h1>JS</h1><CodeBlock language="javascript" code={`console.log("CodeAlpha");`} /></> }
    ]
  },
  {
    id: 'php',
    title: 'PHP',
    icon: <Server size={24} />,
    color: 'text-indigo-600 bg-indigo-50',
    description: 'Server-side scripting.',
    topics: [
        { id: 'php-intro', title: 'PHP Intro', parent: 'Basics', content: <><h1>PHP</h1><CodeBlock language="php" code={`<?php echo "CodeAlpha"; ?>`} /></> }
    ]
  },
  {
    id: 'ml-ds',
    title: 'ML & Data Science',
    icon: <Database size={24} />,
    color: 'text-teal-600 bg-teal-50',
    description: 'AI, ML, and Data Analysis.',
    topics: [
        { id: 'ml-intro', title: 'ML Intro', parent: 'Basics', content: <><h1>Machine Learning</h1><p>Teaching computers to learn from data.</p></> }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Server size={24} />,
    color: 'text-blue-500 bg-blue-50',
    description: 'CI/CD, Docker, Kubernetes.',
    topics: [
        { id: 'devops-intro', title: 'DevOps Intro', parent: 'Basics', content: <><h1>DevOps</h1><p>Bridging development and operations.</p></> }
    ]
  }
];