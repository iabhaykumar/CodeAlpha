export interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  id: string; // e.g., "basics-hello-world"
  title: string;
  description: string;
  statement: string;
  inputFormat: string;
  outputFormat: string;
  constraints?: string[];
  testCases: TestCase[];
  solution: string;
  explanation: string;
}

export interface ProblemCategory {
  category: string;
  problems: Problem[];
}
