import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART7: ProblemCategory[] = [
    {
        category: "SECTION 13 — Structures & Classes (OOP)",
        problems: [
            // 25 problems
            { id: "cpp-s13-q1", title: "Struct for student info", description: "Use a struct for student data.", ...placeholderProblem},
            { id: "cpp-s13-q2", title: "Class for student info", description: "Use a class for student data.", ...placeholderProblem},
            { id: "cpp-s13-q3", title: "Struct vs Class", description: "Compare struct and class.", ...placeholderProblem},
            { id: "cpp-s13-q4", title: "Add two complex numbers", description: "Add complex numbers with a class.", ...placeholderProblem},
            { id: "cpp-s13-q5", title: "Time addition", description: "Add two time values.", ...placeholderProblem},
            { id: "cpp-s13-q6", title: "Date validation", description: "Validate a date in a class.", ...placeholderProblem},
            { id: "cpp-s13-q7", title: "Nested classes", description: "Demonstrate a nested class.", ...placeholderProblem},
            { id: "cpp-s13-q8", title: "Object pointer", description: "Use pointers to objects.", ...placeholderProblem},
            { id: "cpp-s13-q9", title: "Employee payroll", description: "Employee class for payroll.", ...placeholderProblem},
            { id: "cpp-s13-q10", title: "Library management", description: "Book and Library classes.", ...placeholderProblem},
            { id: "cpp-s13-q11", title: "Bank account system", description: "BankAccount class.", ...placeholderProblem},
            { id: "cpp-s13-q12", title: "Matrix class", description: "Represent a matrix with a class.", ...placeholderProblem},
            { id: "cpp-s13-q13", title: "Linked list node class", description: "Define a Node class.", ...placeholderProblem},
            { id: "cpp-s13-q14", title: "Union example", description: "Demonstrate a union.", ...placeholderProblem},
            { id: "cpp-s13-q15", title: "Size of struct vs union", description: "Compare memory sizes.", ...placeholderProblem},
            { id: "cpp-s13-q16", title: "Sort vector of objects", description: "Sort objects by a member.", ...placeholderProblem},
            { id: "cpp-s13-q17", title: "Search vector of objects", description: "Search for an object.", ...placeholderProblem},
            { id: "cpp-s13-q18", title: "Constructor and Destructor", description: "Demonstrate constructor/destructor.", ...placeholderProblem},
            { id: "cpp-s13-q19", title: "Copy Constructor", description: "Implement a copy constructor.", ...placeholderProblem},
            { id: "cpp-s13-q20", title: "Operator Overloading", description: "Overload an operator for a class.", ...placeholderProblem},
            { id: "cpp-s13-q21", title: "Friend function", description: "Demonstrate a friend function.", ...placeholderProblem},
            { id: "cpp-s13-q22", title: "Friend class", description: "Demonstrate a friend class.", ...placeholderProblem},
            { id: "cpp-s13-q23", title: "Static members", description: "Use static members and methods.", ...placeholderProblem},
            { id: "cpp-s13-q24", title: "Abstract class", description: "Use an abstract class.", ...placeholderProblem},
            { id: "cpp-s13-q25", title: "Virtual functions", description: "Demonstrate virtual functions.", ...placeholderProblem}
        ]
    },
    {
        category: "SECTION 14 — File Handling",
        problems: [
            // 25 problems
            { id: "cpp-s14-q1", title: "Write to file", description: "Write text to a file.", ...placeholderProblem},
            { id: "cpp-s14-q2", title: "Read from file", description: "Read content from a file.", ...placeholderProblem},
            { id: "cpp-s14-q3", title: "Append to file", description: "Add content to the end of a file.", ...placeholderProblem},
            { id: "cpp-s14-q4", title: "Count characters", description: "Count characters in a file.", ...placeholderProblem},
            { id: "cpp-s14-q5", title: "Count lines", description: "Count lines in a file.", ...placeholderProblem},
            { id: "cpp-s14-q6", title: "Count words", description: "Count words in a file.", ...placeholderProblem},
            { id: "cpp-s14-q7", title: "File copy program", description: "Copy one file to another.", ...placeholderProblem},
            { id: "cpp-s14-q8", title: "Merge two files", description: "Merge two files.", ...placeholderProblem},
            { id: "cpp-s14-q9", title: "Remove blank lines", description: "Remove blank lines from a file.", ...placeholderProblem},
            { id: "cpp-s14-q10", title: "Remove duplicate lines", description: "Remove duplicate lines.", ...placeholderProblem},
            { id: "cpp-s14-q11", title: "Replace word in file", description: "Replace a word in a file.", ...placeholderProblem},
            { id: "cpp-s14-q12", title: "File statistics", description: "Get file metadata.", ...placeholderProblem},
            { id: "cpp-s14-q13", title: "Binary file write", description: "Write binary data.", ...placeholderProblem},
            { id: "cpp-s14-q14", title: "Binary file read", description: "Read binary data.", ...placeholderProblem},
            { id: "cpp-s14-q15", title: "Student record file", description: "A simple file database.", ...placeholderProblem},
            { id: "cpp-s14-q16", title: "Random access file", description: "Read a specific record.", ...placeholderProblem},
            { id: "cpp-s14-q17", title: "Check file exists", description: "Check if a file exists.", ...placeholderProblem},
            { id: "cpp-s14-q18", title: "Delete file", description: "Delete a file.", ...placeholderProblem},
            { id: "cpp-s14-q19", title: "Insert text at position", description: "Insert text at an offset.", ...placeholderProblem},
            { id: "cpp-s14-q20", title: "Encryption & decryption", description: "Simple XOR encryption.", ...placeholderProblem},
            { id: "cpp-s14-q21", title: "Reverse file content", description: "Reverse a file's content.", ...placeholderProblem},
            { id: "cpp-s14-q22", title: "Compare two files", description: "Compare files byte by byte.", ...placeholderProblem},
            { id: "cpp-s14-q23", title: "Sort lines of file", description: "Sort lines alphabetically.", ...placeholderProblem},
            { id: "cpp-s14-q24", title: "Word frequency in file", description: "Count word frequency.", ...placeholderProblem},
            { id: "cpp-s14-q25", title: "Logging system", description: "A simple logging system.", ...placeholderProblem}
        ]
    }
];
