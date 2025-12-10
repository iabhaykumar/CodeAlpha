import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART4: ProblemCategory[] = [
    {
        category: "SECTION 7 — Arrays (std::vector)",
        problems: [
            // 25 problems
            { id: "cpp-s7-q1", title: "Find largest element", description: "Find the largest element in a vector.", ...placeholderProblem},
            { id: "cpp-s7-q2", title: "Find smallest element", description: "Find the smallest element.", ...placeholderProblem},
            { id: "cpp-s7-q3", title: "Sum of elements", description: "Find the sum of all elements.", ...placeholderProblem},
            { id: "cpp-s7-q4", title: "Reverse a vector", description: "Reverse the elements.", ...placeholderProblem},
            { id: "cpp-s7-q5", title: "Copy vector", description: "Copy one vector to another.", ...placeholderProblem},
            { id: "cpp-s7-q6", title: "Remove duplicates", description: "Remove duplicates from a vector.", ...placeholderProblem},
            { id: "cpp-s7-q7", title: "Merge two sorted vectors", description: "Merge two sorted vectors.", ...placeholderProblem},
            { id: "cpp-s7-q8", title: "Count occurrences", description: "Count an element's frequency.", ...placeholderProblem},
            { id: "cpp-s7-q9", title: "Find second largest", description: "Find the second largest element.", ...placeholderProblem},
            { id: "cpp-s7-q10", title: "Find second smallest", description: "Find the second smallest element.", ...placeholderProblem},
            { id: "cpp-s7-q11", title: "Rotate left by K", description: "Rotate a vector left.", ...placeholderProblem},
            { id: "cpp-s7-q12", title: "Rotate right by K", description: "Rotate a vector right.", ...placeholderProblem},
            { id: "cpp-s7-q13", title: "Insert element at position", description: "Insert an element.", ...placeholderProblem},
            { id: "cpp-s7-q14", title: "Delete element at position", description: "Delete an element.", ...placeholderProblem},
            { id: "cpp-s7-q15", title: "Sort vector (std::sort)", description: "Sort using the standard library.", ...placeholderProblem},
            { id: "cpp-s7-q16", title: "Frequency of elements", description: "Count frequency of all elements.", ...placeholderProblem},
            { id: "cpp-s7-q17", title: "Find missing number", description: "Find the missing number in a range.", ...placeholderProblem},
            { id: "cpp-s7-q18", title: "Move zeros to end", description: "Move all zeros to the end.", ...placeholderProblem},
            { id: "cpp-s7-q19", title: "Pair sum equal to given value", description: "Find a pair that sums to a target.", ...placeholderProblem},
            { id: "cpp-s7-q20", title: "Check if vector sorted", description: "Check if a vector is sorted.", ...placeholderProblem},
            { id: "cpp-s7-q21", title: "Find unique elements", description: "Find all unique elements.", ...placeholderProblem},
            { id: "cpp-s7-q22", title: "Largest element index", description: "Find the index of the largest element.", ...placeholderProblem},
            { id: "cpp-s7-q23", title: "Kadane's Algorithm", description: "Find the maximum subarray sum.", ...placeholderProblem},
            { id: "cpp-s7-q24", title: "Dutch National Flag Problem", description: "Sort an array of 0s, 1s, and 2s.", ...placeholderProblem},
            { id: "cpp-s7-q25", title: "Sliding Window Maximum", description: "Find the maximum in each window of size K.", ...placeholderProblem}
        ]
    },
    {
        category: "SECTION 8 — 2D Arrays / Matrix",
        problems: [
            // 25 problems
             { id: "cpp-s8-q1", title: "Add two matrices", description: "Perform matrix addition.", ...placeholderProblem},
             { id: "cpp-s8-q2", title: "Subtract two matrices", description: "Perform matrix subtraction.", ...placeholderProblem},
             { id: "cpp-s8-q3", title: "Multiply matrices", description: "Perform matrix multiplication.", ...placeholderProblem},
             { id: "cpp-s8-q4", title: "Scalar multiplication", description: "Multiply a matrix by a scalar.", ...placeholderProblem},
             { id: "cpp-s8-q5", title: "Transpose matrix", description: "Find the transpose.", ...placeholderProblem},
             { id: "cpp-s8-q6", title: "Check symmetric matrix", description: "Check if a matrix is symmetric.", ...placeholderProblem},
             { id: "cpp-s8-q7", title: "Upper triangular matrix", description: "Check if matrix is upper triangular.", ...placeholderProblem},
             { id: "cpp-s8-q8", title: "Lower triangular matrix", description: "Check if matrix is lower triangular.", ...placeholderProblem},
             { id: "cpp-s8-q9", title: "Diagonal sum", description: "Sum of the main diagonal.", ...placeholderProblem},
             { id: "cpp-s8-q10", title: "Anti-diagonal sum", description: "Sum of the anti-diagonal.", ...placeholderProblem},
             { id: "cpp-s8-q11", title: "Sum of all elements", description: "Sum all elements in a matrix.", ...placeholderProblem},
             { id: "cpp-s8-q12", title: "Count zeros", description: "Count zero elements.", ...placeholderProblem},
             { id: "cpp-s8-q13", title: "Find max in matrix", description: "Find the maximum element.", ...placeholderProblem},
             { id: "cpp-s8-q14", title: "Find min in matrix", description: "Find the minimum element.", ...placeholderProblem},
             { id: "cpp-s8-q15", title: "Rotate matrix 90°", description: "Rotate a matrix 90 degrees.", ...placeholderProblem},
             { id: "cpp-s8-q16", title: "Rotate matrix 180°", description: "Rotate a matrix 180 degrees.", ...placeholderProblem},
             { id: "cpp-s8-q17", title: "Rotate matrix 270°", description: "Rotate a matrix 270 degrees.", ...placeholderProblem},
             { id: "cpp-s8-q18", title: "Spiral printing", description: "Print a matrix in spiral order.", ...placeholderProblem},
             { id: "cpp-s8-q19", title: "Boundary elements", description: "Print the boundary elements.", ...placeholderProblem},
             { id: "cpp-s8-q20", title: "Check sparse matrix", description: "Check if a matrix is sparse.", ...placeholderProblem},
             { id: "cpp-s8-q21", title: "Replace row with max", description: "Replace each row with its max element.", ...placeholderProblem},
             { id: "cpp-s8-q22", title: "Replace column with min", description: "Replace each column with its min element.", ...placeholderProblem},
             { id: "cpp-s8-q23", title: "Reverse rows", description: "Reverse the order of rows.", ...placeholderProblem},
             { id: "cpp-s8-q24", title: "Reverse columns", description: "Reverse the order of columns.", ...placeholderProblem},
             { id: "cpp-s8-q25", title: "Matrix determinant (3x3)", description: "Calculate the determinant of a 3x3 matrix.", ...placeholderProblem}
        ]
    }
];
