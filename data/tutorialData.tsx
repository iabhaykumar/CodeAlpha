
import { Category, Topic } from './tutorials/types';
import { DATA_STRUCTURES_CATEGORIES } from './tutorials/datastructures';
import { ALGORITHMS_CATEGORIES } from './tutorials/algorithms';
import { JAVASCRIPT_CATEGORIES } from './tutorials/javascript';
import { PYTHON_CATEGORIES } from './tutorials/python';
import { JAVA_CATEGORIES } from './tutorials/java';
import { C_CATEGORIES } from './tutorials/c';
import { CPP_CATEGORIES } from './tutorials/cpp';
import { PHP_CATEGORIES } from './tutorials/php';
import { ML_CATEGORIES } from './tutorials/ml';
import { DEVOPS_CATEGORIES } from './tutorials/devops';
import { WORD_CATEGORIES } from './tutorials/word';
import { EXCEL_CATEGORIES } from './tutorials/excel';
import { PPT_CATEGORIES } from './tutorials/ppt';
import { VSCODE_CATEGORIES } from './tutorials/vscode';
import { GITHUB_CATEGORIES } from './tutorials/github';

// Export types for consumption by components
export type { Category, Topic };

// Aggregate all categories into the main tree
export const TUTORIAL_TREE: Category[] = [
  ...DATA_STRUCTURES_CATEGORIES,
  ...ALGORITHMS_CATEGORIES,
  ...JAVASCRIPT_CATEGORIES,
  ...PYTHON_CATEGORIES,
  ...JAVA_CATEGORIES,
  ...C_CATEGORIES,
  ...CPP_CATEGORIES,
  ...PHP_CATEGORIES,
  ...ML_CATEGORIES,
  ...DEVOPS_CATEGORIES,
  ...WORD_CATEGORIES,
  ...EXCEL_CATEGORIES,
  ...PPT_CATEGORIES,
  ...VSCODE_CATEGORIES,
  ...GITHUB_CATEGORIES
];
