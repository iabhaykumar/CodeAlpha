import React from 'react';
import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART8: ProblemCategory[] = [
    {
        category: "SECTION 15 — Data Structures in C++",
        problems: [
            // 40 problems
            // Linked List
            { id: "cpp-s15-q1", title: "Create singly linked list", description: "Implement a basic SLL.", ...placeholderProblem},
            { id: "cpp-s15-q2", title: "Insert at beginning (SLL)", description: "Insert at the head.", ...placeholderProblem},
            { id: "cpp-s15-q3", title: "Insert at end (SLL)", description: "Append a node.", ...placeholderProblem},
            { id: "cpp-s15-q4", title: "Delete a node (SLL)", description: "Delete a node by key.", ...placeholderProblem},
            { id: "cpp-s15-q5", title: "Search in SLL", description: "Search for a value.", ...placeholderProblem},
            { id: "cpp-s15-q6", title: "Reverse a SLL", description: "Reverse the list.", ...placeholderProblem},
            { id: "cpp-s15-q7", title: "Middle of SLL", description: "Find the middle element.", ...placeholderProblem},
            { id: "cpp-s15-q8", title: "Detect cycle (SLL)", description: "Detect a cycle.", ...placeholderProblem},
            { id: "cpp-s15-q9", title: "Create doubly linked list", description: "Implement a basic DLL.", ...placeholderProblem},
            { id: "cpp-s15-q10", title: "Create circular linked list", description: "Implement a basic CLL.", ...placeholderProblem},

            // Stack
            { id: "cpp-s15-q11", title: "Stack using vector", description: "Implement a stack with a vector.", ...placeholderProblem},
            { id: "cpp-s15-q12", title: "Stack using std::stack", description: "Use the STL stack.", ...placeholderProblem},
            { id: "cpp-s15-q13", title: "Infix to Postfix", description: "Convert infix to postfix.", ...placeholderProblem},
            { id: "cpp-s15-q14", title: "Postfix evaluation", description: "Evaluate a postfix expression.", ...placeholderProblem},
            { id: "cpp-s15-q15", title: "Balanced parentheses", description: "Check for balanced brackets.", ...placeholderProblem},

            // Queue
            { id: "cpp-s15-q16", title: "Queue using vector", description: "Implement a queue with a vector.", ...placeholderProblem},
            { id: "cpp-s15-q17", title: "Queue using std::queue", description: "Use the STL queue.", ...placeholderProblem},
            { id: "cpp-s15-q18", title: "Circular Queue", description: "Implement a circular queue.", ...placeholderProblem},
            { id: "cpp-s15-q19", title: "Priority Queue (std::priority_queue)", description: "Use a priority queue.", ...placeholderProblem},
            { id: "cpp-s15-q20", title: "Deque (std::deque)", description: "Use a double-ended queue.", ...placeholderProblem},

            // Trees
            { id: "cpp-s15-q21", title: "Create Binary Tree", description: "Basic binary tree creation.", ...placeholderProblem},
            { id: "cpp-s15-q22", title: "Tree Traversals (DFS)", description: "Inorder, Preorder, Postorder.", ...placeholderProblem},
            { id: "cpp-s15-q23", title: "Level Order Traversal (BFS)", description: "Tree traversal by level.", ...placeholderProblem},
            { id: "cpp-s15-q24", title: "Create Binary Search Tree (BST)", description: "Implement BST insertion.", ...placeholderProblem},
            { id: "cpp-s15-q25", title: "Search in BST", description: "Find a value in a BST.", ...placeholderProblem},
            { id: "cpp-s15-q26", title: "Find min/max in BST", description: "Find min and max in a BST.", ...placeholderProblem},
            { id: "cpp-s15-q27", title: "Height of a Binary Tree", description: "Calculate tree height.", ...placeholderProblem},
            { id: "cpp-s15-q28", title: "Delete a node from BST", description: "Implement BST deletion.", ...placeholderProblem},
            { id: "cpp-s15-q29", title: "Check if a tree is a BST", description: "Validate a binary tree.", ...placeholderProblem},
            { id: "cpp-s15-q30", title: "Lowest Common Ancestor (LCA)", description: "Find the LCA in a BST.", ...placeholderProblem},

            // Graphs
            { id: "cpp-s15-q31", title: "Graph (Adjacency List)", description: "Implement a graph.", ...placeholderProblem},
            { id: "cpp-s15-q32", title: "BFS Traversal", description: "Perform BFS on a graph.", ...placeholderProblem},
            { id: "cpp-s15-q33", title: "DFS Traversal", description: "Perform DFS on a graph.", ...placeholderProblem},
            { id: "cpp-s15-q34", title: "Detect cycle (undirected)", description: "Check for cycles.", ...placeholderProblem},
            { id: "cpp-s15-q35", title: "Detect cycle (directed)", description: "Check for cycles.", ...placeholderProblem},
            { id: "cpp-s15-q36", title: "Shortest path (BFS)", description: "Find shortest path in unweighted graph.", ...placeholderProblem},
            { id: "cpp-s15-q37", title: "Dijkstra's Algorithm", description: "Find shortest path in weighted graph.", ...placeholderProblem},
            { id: "cpp-s15-q38", title: "Topological Sort", description: "Sort a DAG.", ...placeholderProblem},
            { id: "cpp-s15-q39", title: "Prim's Algorithm (MST)", description: "Find Minimum Spanning Tree.", ...placeholderProblem},
            { id: "cpp-s15-q40", title: "Kruskal's Algorithm (MST)", description: "Find Minimum Spanning Tree.", ...placeholderProblem}
        ]
    }
];
