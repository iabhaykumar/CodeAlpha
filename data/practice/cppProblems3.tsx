import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART3: ProblemCategory[] = [
    {
        category: "SECTION 5 — Loops",
        problems: [
            // 25 problems
            { id: "cpp-s5-q1", title: "Print 1 to N", description: "Use a for loop.", ...placeholderProblem},
            { id: "cpp-s5-q2", title: "Sum of 1 to N", description: "Sum numbers with a loop.", ...placeholderProblem},
            { id: "cpp-s5-q3", title: "Factorial", description: "Calculate N!", ...placeholderProblem},
            { id: "cpp-s5-q4", title: "Count Digits", description: "Count digits in an integer.", ...placeholderProblem},
            { id: "cpp-s5-q5", title: "Reverse a Number", description: "Reverse digits of an integer.", ...placeholderProblem},
            { id: "cpp-s5-q6", title: "Palindrome Number", description: "Check if a number is a palindrome.", ...placeholderProblem},
            { id: "cpp-s5-q7", title: "Armstrong Number", description: "Check for an Armstrong number.", ...placeholderProblem},
            { id: "cpp-s5-q8", title: "Strong Number", description: "Check for a Strong number.", ...placeholderProblem},
            { id: "cpp-s5-q9", title: "Sum of Digits", description: "Find the sum of a number's digits.", ...placeholderProblem},
            { id: "cpp-s5-q10", title: "Product of Digits", description: "Find the product of a number's digits.", ...placeholderProblem},
            { id: "cpp-s5-q11", title: "Fibonacci Series", description: "Generate the Fibonacci series.", ...placeholderProblem},
            { id: "cpp-s5-q12", title: "Print Even Numbers", description: "Print evens in a range.", ...placeholderProblem},
            { id: "cpp-s5-q13", title: "Print Odd Numbers", description: "Print odds in a range.", ...placeholderProblem},
            { id: "cpp-s5-q14", title: "Power Calculation", description: "Calculate power using a loop.", ...placeholderProblem},
            { id: "cpp-s5-q15", title: "Prime Number Check", description: "Check if a number is prime.", ...placeholderProblem},
            { id: "cpp-s5-q16", title: "Print Primes in Range", description: "Find primes in a range.", ...placeholderProblem},
            { id: "cpp-s5-q17", title: "GCD of Two Numbers", description: "Find the GCD.", ...placeholderProblem},
            { id: "cpp-s5-q18", title: "LCM of Two Numbers", description: "Find the LCM.", ...placeholderProblem},
            { id: "cpp-s5-q19", title: "Decimal to Binary", description: "Convert decimal to binary.", ...placeholderProblem},
            { id: "cpp-s5-q20", title: "Binary to Decimal", description: "Convert binary to decimal.", ...placeholderProblem},
            { id: "cpp-s5-q21", title: "Perfect Number", description: "Check for a perfect number.", ...placeholderProblem},
            { id: "cpp-s5-q22", title: "Automorphic Number", description: "Check for an automorphic number.", ...placeholderProblem},
            { id: "cpp-s5-q23", title: "Harshad Number", description: "Check for a Harshad number.", ...placeholderProblem},
            { id: "cpp-s5-q24", title: "Abundant Number", description: "Check for an abundant number.", ...placeholderProblem},
            { id: "cpp-s5-q25", title: "Friendly Pair", description: "Check if two numbers are a friendly pair.", ...placeholderProblem}
        ]
    },
    {
        category: "SECTION 6 — Pattern Printing",
        problems: [
            // 25 problems
            { id: "cpp-s6-q1", title: "Square Star Pattern", description: "Print a square of stars.", ...placeholderProblem},
            { id: "cpp-s6-q2", title: "Rectangle Star Pattern", description: "Print a rectangle of stars.", ...placeholderProblem},
            { id: "cpp-s6-q3", title: "Right Triangle Star Pattern", description: "Print a right-angled triangle.", ...placeholderProblem},
            { id: "cpp-s6-q4", title: "Inverted Right Triangle", description: "Print an inverted right triangle.", ...placeholderProblem},
            { id: "cpp-s6-q5", title: "Mirrored Right Triangle", description: "Print a right-aligned triangle.", ...placeholderProblem},
            { id: "cpp-s6-q6", title: "Floyd's Triangle", description: "Print Floyd's Triangle.", ...placeholderProblem},
            { id: "cpp-s6-q7", title: "Pascal's Triangle", description: "Print Pascal's Triangle.", ...placeholderProblem},
            { id: "cpp-s6-q8", title: "Number Pyramid", description: "Print a pyramid of numbers.", ...placeholderProblem},
            { id: "cpp-s6-q9", title: "Inverted Number Pyramid", description: "Print an inverted number pyramid.", ...placeholderProblem},
            { id: "cpp-s6-q10", title: "Diamond Star Pattern", description: "Print a diamond of stars.", ...placeholderProblem},
            { id: "cpp-s6-q11", title: "Alphabet Triangle", description: "Print a triangle of alphabets.", ...placeholderProblem},
            { id: "cpp-s6-q12", title: "Alphabet Pyramid", description: "Print a pyramid of alphabets.", ...placeholderProblem},
            { id: "cpp-s6-q13", title: "Hollow Square Pattern", description: "Print a hollow square.", ...placeholderProblem},
            { id: "cpp-s6-q14", title: "Hollow Diamond Pattern", description: "Print a hollow diamond.", ...placeholderProblem},
            { id: "cpp-s6-q15", title: "Butterfly Pattern", description: "Print a butterfly pattern.", ...placeholderProblem},
            { id: "cpp-s6-q16", title: "Zig-Zag Pattern", description: "Print a zig-zag pattern.", ...placeholderProblem},
            { id: "cpp-s6-q17", title: "Sandglass Pattern", description: "Print a sandglass pattern.", ...placeholderProblem},
            { id: "cpp-s6-q18", title: "Binary Triangle", description: "Print a triangle of 0s and 1s.", ...placeholderProblem},
            { id: "cpp-s6-q19", title: "Hollow Pyramid", description: "Print a hollow pyramid.", ...placeholderProblem},
            { id: "cpp-s6-q20", title: "Heart Pattern", description: "Print a heart pattern.", ...placeholderProblem},
            { id: "cpp-s6-q21", title: "Palindromic Number Triangle", description: "Print a palindromic number triangle.", ...placeholderProblem},
            { id: "cpp-s6-q22", title: "Double Triangle Pattern", description: "Print two adjacent triangles.", ...placeholderProblem},
            { id: "cpp-s6-q23", title: "X Pattern", description: "Print an X pattern.", ...placeholderProblem},
            { id: "cpp-s6-q24", title: "Plus Pattern", description: "Print a plus pattern.", ...placeholderProblem},
            { id: "cpp-s6-q25", title: "Hollow Rectangle Pattern", description: "Print a hollow rectangle.", ...placeholderProblem}
        ]
    }
];
