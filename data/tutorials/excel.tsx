
import React from 'react';
import { Table2 } from 'lucide-react';
import { Category } from './types';
import { EXCEL_PART1_TOPICS } from './excel-part1';
import { EXCEL_PART2_TOPICS } from './excel-part2';
import { EXCEL_PART3_TOPICS } from './excel-part3';
import { EXCEL_PART4_TOPICS } from './excel-part4';

export const EXCEL_CATEGORIES: Category[] = [
  {
    id: 'ms-excel',
    title: 'Microsoft Excel 2021',
    icon: <Table2 size={24} />,
    color: 'text-green-600 bg-green-50',
    description: 'Master spreadsheets from basics to advanced. Learn formulas, Pivot Tables, Data Visualization, and automation with macros.',
    topics: [
      ...EXCEL_PART1_TOPICS,
      ...EXCEL_PART2_TOPICS,
      ...EXCEL_PART3_TOPICS,
      ...EXCEL_PART4_TOPICS,
    ]
  }
];
