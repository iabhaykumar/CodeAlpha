import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART5: ProblemCategory[] = [
    {
        category: "SECTION 9 — Strings (std::string)",
        problems: [
            // 30 problems
             { id: "cpp-s9-q1", title: "String length", description: "Find string length.", ...placeholderProblem},
             { id: "cpp-s9-q2", title: "Reverse string", description: "Reverse a string.", ...placeholderProblem},
             { id: "cpp-s9-q3", title: "Check palindrome", description: "Check if a string is a palindrome.", ...placeholderProblem},
             { id: "cpp-s9-q4", title: "Count vowels", description: "Count vowels.", ...placeholderProblem},
             { id: "cpp-s9-q5", title: "Count consonants", description: "Count consonants.", ...placeholderProblem},
             { id: "cpp-s9-q6", title: "Count words", description: "Count words in a sentence.", ...placeholderProblem},
             { id: "cpp-s9-q7", title: "Remove spaces", description: "Remove all spaces.", ...placeholderProblem},
             { id: "cpp-s9-q8", title: "Remove vowels", description: "Remove all vowels.", ...placeholderProblem},
             { id: "cpp-s9-q9", title: "Remove special characters", description: "Remove non-alphanumeric characters.", ...placeholderProblem},
             { id: "cpp-s9-q10", title: "Frequency of characters", description: "Count character frequency.", ...placeholderProblem},
             { id: "cpp-s9-q11", title: "Most frequent character", description: "Find the most frequent character.", ...placeholderProblem},
             { id: "cpp-s9-q12", title: "Compare strings", description: "Compare two strings.", ...placeholderProblem},
             { id: "cpp-s9-q13", title: "Copy string", description: "Copy one string to another.", ...placeholderProblem},
             { id: "cpp-s9-q14", title: "Convert to uppercase", description: "Convert to uppercase.", ...placeholderProblem},
             { id: "cpp-s9-q15", title: "Convert to lowercase", description: "Convert to lowercase.", ...placeholderProblem},
             { id: "cpp-s9-q16", title: "Toggle case", description: "Toggle character case.", ...placeholderProblem},
             { id: "cpp-s9-q17", title: "Anagram check", description: "Check for anagrams.", ...placeholderProblem},
             { id: "cpp-s9-q18", title: "Find substring", description: "Find a substring.", ...placeholderProblem},
             { id: "cpp-s9-q19", title: "Replace substring", description: "Replace a substring.", ...placeholderProblem},
             { id: "cpp-s9-q20", title: "Remove duplicate characters", description: "Remove duplicate characters.", ...placeholderProblem},
             { id: "cpp-s9-q21", title: "Count letters, digits, spaces", description: "Count character types.", ...placeholderProblem},
             { id: "cpp-s9-q22", title: "Check rotation", description: "Check if one string is a rotation of another.", ...placeholderProblem},
             { id: "cpp-s9-q23", title: "Longest word", description: "Find the longest word in a sentence.", ...placeholderProblem},
             { id: "cpp-s9-q24", title: "Reverse each word", description: "Reverse each word in a sentence.", ...placeholderProblem},
             { id: "cpp-s9-q25", title: "Count repeated words", description: "Count word frequency.", ...placeholderProblem},
             { id: "cpp-s9-q26", title: "Split string", description: "Split a string by a delimiter.", ...placeholderProblem},
             { id: "cpp-s9-q27", title: "Trim string", description: "Remove leading/trailing whitespace.", ...placeholderProblem},
             { id: "cpp-s9-q28", title: "Compress string (RLE)", description: "Run-Length Encoding.", ...placeholderProblem},
             { id: "cpp-s9-q29", title: "Expand RLE", description: "Expand Run-Length Encoded string.", ...placeholderProblem},
             { id: "cpp-s9-q30", title: "Convert string to integer", description: "Convert string to int.", ...placeholderProblem}
        ]
    },
    {
        category: "SECTION 10 — Functions",
        problems: [
            // 20 problems
             { id: "cpp-s10-q1", title: "Add numbers", description: "Function to add two numbers.", ...placeholderProblem},
             { id: "cpp-s10-q2", title: "Factorial function", description: "Function to find factorial.", ...placeholderProblem},
             { id: "cpp-s10-q3", title: "Prime check function", description: "Function to check for prime.", ...placeholderProblem},
             { id: "cpp-s10-q4", title: "Reverse number function", description: "Function to reverse a number.", ...placeholderProblem},
             { id: "cpp-s10-q5", title: "Power function", description: "Function to calculate power.", ...placeholderProblem},
             { id: "cpp-s10-q6", title: "Swap using function", description: "Swap using pass-by-reference.", ...placeholderProblem},
             { id: "cpp-s10-q7", title: "GCD function", description: "Function to find GCD.", ...placeholderProblem},
             { id: "cpp-s10-q8", title: "LCM function", description: "Function to find LCM.", ...placeholderProblem},
             { id: "cpp-s10-q9", title: "Fibonacci function", description: "Function for nth Fibonacci number.", ...placeholderProblem},
             { id: "cpp-s10-q10", title: "Vector sum", description: "Function to sum a vector.", ...placeholderProblem},
             { id: "cpp-s10-q11", title: "Max of vector", description: "Function to find max of a vector.", ...placeholderProblem},
             { id: "cpp-s10-q12", title: "Min of vector", description: "Function to find min of a vector.", ...placeholderProblem},
             { id: "cpp-s10-q13", title: "String copy", description: "Function to copy a string.", ...placeholderProblem},
             { id: "cpp-s10-q14", title: "Palindrome function", description: "Function to check palindrome.", ...placeholderProblem},
             { id: "cpp-s10-q15", title: "Function overloading", description: "Demonstrate function overloading.", ...placeholderProblem},
             { id: "cpp-s10-q16", title: "Default arguments", description: "Use default arguments.", ...placeholderProblem},
             { id: "cpp-s10-q17", title: "Inline functions", description: "Demonstrate inline functions.", ...placeholderProblem},
             { id: "cpp-s10-q18", title: "Function templates", description: "Create a generic function template.", ...placeholderProblem},
             { id: "cpp-s10-q19", title: "Static variables in functions", description: "Demonstrate static local variables.", ...placeholderProblem},
             { id: "cpp-s10-q20", title: "Lambda functions", description: "Use C++ lambda functions.", ...placeholderProblem}
        ]
    }
];
