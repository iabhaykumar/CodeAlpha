import React from 'react';
import { Terminal, Code2 } from 'lucide-react';
import { Category } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PROGRAMMING_CATEGORIES: Category[] = [
  {
    id: 'python',
    title: 'Python',
    icon: <Terminal size={24} />,
    color: 'text-yellow-600 bg-yellow-50',
    description: 'Python for Web Dev & Data Science.',
    topics: [
      {
        id: 'py-intro',
        title: 'Introduction',
        parent: 'Basics',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Python Intro</h1>
            <p className="mb-4">Python is a high-level, interpreted programming language known for its readability.</p>
            <CodeBlock language="python" code={`print("Hello, CodeAlpha!")`} />
          </>
        )
      },
      {
        id: 'py-variables',
        title: 'Variables',
        parent: 'Basics',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Variables</h1>
            <CodeBlock language="python" code={`x = 5\ny = "CodeAlpha"`} />
          </>
        )
      }
    ]
  },
  {
    id: 'java',
    title: 'Java',
    icon: <Code2 size={24} />,
    color: 'text-red-600 bg-red-50',
    description: 'Enterprise grade OOP language.',
    topics: [
      {
        id: 'java-intro',
        title: 'Main Method',
        parent: 'Basics',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Java Basics</h1>
            <CodeBlock language="java" code={`public class Main { public static void main(String[] args) { System.out.println("CodeAlpha"); } }`} />
          </>
        )
      }
    ]
  },
  {
    id: 'c',
    title: 'C Programming',
    icon: <Terminal size={24} />,
    color: 'text-blue-700 bg-blue-50',
    description: 'Mother of all languages.',
    topics: [
      {
        id: 'c-intro',
        title: 'C Introduction',
        parent: 'Basics',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">C Introduction</h1>
            <CodeBlock language="c" code={`#include <stdio.h>\nint main() {\n  printf("Hello CodeAlpha!");\n  return 0;\n}`} />
          </>
        )
      }
    ]
  },
  {
    id: 'cpp',
    title: 'C++ Programming',
    icon: <Code2 size={24} />,
    color: 'text-blue-600 bg-blue-50',
    description: 'High performance and OOP.',
    topics: [
      {
        id: 'cpp-intro',
        title: 'C++ Introduction',
        parent: 'Basics',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">C++ Introduction</h1>
            <CodeBlock language="cpp" code={`#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello CodeAlpha!";\n  return 0;\n}`} />
          </>
        )
      }
    ]
  }
];