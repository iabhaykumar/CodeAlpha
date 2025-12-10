import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART6: ProblemCategory[] = [
    {
        category: "SECTION 11 — Pointers",
        problems: [
            // 30 problems
            { id: "cpp-s11-q1", title: "Pointer basics", description: "Demonstrate pointer usage.", ...placeholderProblem},
            { id: "cpp-s11-q2", title: "Pointer arithmetic", description: "Demonstrate pointer arithmetic.", ...placeholderProblem},
            { id: "cpp-s11-q3", title: "Pointer to vector", description: "Iterate a vector using a pointer.", ...placeholderProblem},
            { id: "cpp-s11-q4", title: "Pointer to function", description: "Call a function via pointer.", ...placeholderProblem},
            { id: "cpp-s11-q5", title: "Returning pointer", description: "Return a pointer from a function.", ...placeholderProblem},
            { id: "cpp-s11-q6", title: "Swap using pointers", description: "Swap numbers with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q7", title: "Reverse vector using pointers", description: "Reverse a vector with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q8", title: "Copy vector using pointers", description: "Copy a vector with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q9", title: "String length using pointers", description: "Find string length with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q10", title: "String reverse using pointers", description: "Reverse a string with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q11", title: "Double pointer usage", description: "Modify a pointer via a double pointer.", ...placeholderProblem},
            { id: "cpp-s11-q12", title: "Pointer to object", description: "Use the arrow operator on an object pointer.", ...placeholderProblem},
            { id: "cpp-s11-q13", title: "Pointer to pointer", description: "Demonstrate a pointer to a pointer.", ...placeholderProblem},
            { id: "cpp-s11-q14", title: "Dynamic vector allocation", description: "Allocate a vector on the heap.", ...placeholderProblem},
            { id: "cpp-s11-q15", title: "Dangling pointer demo", description: "Show a dangling pointer.", ...placeholderProblem},
            { id: "cpp-s11-q16", title: "nullptr handling", description: "Check for nullptr.", ...placeholderProblem},
            { id: "cpp-s11-q17", title: "Vector of pointers", description: "Use a vector of pointers to objects.", ...placeholderProblem},
            { id: "cpp-s11-q18", title: "Function pointer vector", description: "Use a vector of function pointers.", ...placeholderProblem},
            { id: "cpp-s11-q19", title: "Generic pointer (void*)", description: "Use a void pointer.", ...placeholderProblem},
            { id: "cpp-s11-q20", title: "Pointer to constant", description: "Use `const` with pointers.", ...placeholderProblem},
            { id: "cpp-s11-q21", title: "Constant pointer", description: "Use a constant pointer.", ...placeholderProblem},
            { id: "cpp-s11-q22", title: "Pointer to 2D array", description: "Pass a 2D array to a function.", ...placeholderProblem},
            { id: "cpp-s11-q23", title: "this pointer", description: "Demonstrate the `this` pointer in a class.", ...placeholderProblem},
            { id: "cpp-s11-q24", title: "unique_ptr", description: "Use `std::unique_ptr` for exclusive ownership.", ...placeholderProblem},
            { id: "cpp-s11-q25", title: "shared_ptr", description: "Use `std::shared_ptr` for shared ownership.", ...placeholderProblem},
            { id: "cpp-s11-q26", title: "weak_ptr", description: "Use `std::weak_ptr` to break circular references.", ...placeholderProblem},
            { id: "cpp-s11-q27", title: "make_unique and make_shared", description: "Use factory functions for smart pointers.", ...placeholderProblem},
            { id: "cpp-s11-q28", title: "Pass by pointer vs reference", description: "Compare passing arguments by pointer and reference.", ...placeholderProblem},
            { id: "cpp-s11-q29", title: "Iterators as pointers", description: "Use iterators from STL containers.", ...placeholderProblem},
            { id: "cpp-s11-q30", title: "Function pointers vs std::function", description: "Compare C-style function pointers and `std::function`.", ...placeholderProblem}
        ]
    },
    {
        category: "SECTION 12 — Dynamic Memory",
        problems: [
            // 15 problems
            { id: "cpp-s12-q1", title: "new/delete usage", description: "Allocate and deallocate a single variable.", ...placeholderProblem},
            { id: "cpp-s12-q2", title: "new[]/delete[] usage", description: "Allocate and deallocate a dynamic array.", ...placeholderProblem},
            { id: "cpp-s12-q3", title: "Dynamic 1D vector input", description: "Create a dynamic vector.", ...placeholderProblem},
            { id: "cpp-s12-q4", title: "Dynamic 2D allocation", description: "Allocate a 2D array dynamically.", ...placeholderProblem},
            { id: "cpp-s12-q5", title: "Free 2D dynamic array", description: "Correctly free a 2D array.", ...placeholderProblem},
            { id: "cpp-s12-q6", title: "Dynamic object creation", description: "Allocate an object on the heap.", ...placeholderProblem},
            { id: "cpp-s12-q7", title: "Dynamic array of objects", description: "Allocate an array of objects.", ...placeholderProblem},
            { id: "cpp-s12-q8", title: "Memory leak demo", description: "Create a memory leak.", ...placeholderProblem},
            { id: "cpp-s12-q9", title: "Smart pointers and RAII", description: "Demonstrate RAII with smart pointers.", ...placeholderProblem},
            { id: "cpp-s12-q10", title: "new (nothrow)", description: "Use the nothrow version of new.", ...placeholderProblem},
            { id: "cpp-s12-q11", title: "Custom new/delete operators", description: "Overload new and delete for a class.", ...placeholderProblem},
            { id: "cpp-s12-q12", title: "Placement new", description: "Use placement new.", ...placeholderProblem},
            { id: "cpp-s12-q13", title: "Dynamic multidimensional array", description: "Allocate a 3D array.", ...placeholderProblem},
            { id: "cpp-s12-q14", title: "std::vector vs dynamic array", description: "Compare vector and raw dynamic arrays.", ...placeholderProblem},
            { id: "cpp-s12-q15", title: "Dynamic memory in constructor", description: "Manage memory within a class.", ...placeholderProblem}
        ]
    }
];
