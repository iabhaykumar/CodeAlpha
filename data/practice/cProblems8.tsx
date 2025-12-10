import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART8: ProblemCategory[] = [
    {
        category: "SECTION 15 — Data Structures in C",
        problems: [
            // Linked List
            {
                id: "c-s15-q1",
                title: "Create singly linked list",
                description: "Implement a basic singly linked list.",
                statement: "Write a C program to create a singly linked list with 3 nodes and print its elements.",
                inputFormat: "No input.",
                outputFormat: "10 -> 20 -> 30 -> NULL",
                testCases: [{ input: "", output: "10 -> 20 -> 30 -> NULL" }],
                solution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d -> ", n->data);
        n = n->next;
    }
    printf("NULL");
}

int main() {
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    struct Node* second = (struct Node*)malloc(sizeof(struct Node));
    struct Node* third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 10;
    head->next = second;
    second->data = 20;
    second->next = third;
    third->data = 30;
    third->next = NULL;
    
    printList(head);
    
    free(head); free(second); free(third);
    return 0;
}`,
                explanation: "A linked list is made of nodes. Each node contains data and a pointer to the next node. `malloc` dynamically allocates memory for each node. The `next` pointer of the last node is `NULL`."
            },
            {
                id: "c-s15-q2",
                title: "Insert at beginning (Linked List)",
                description: "Insert a node at the beginning of a linked list.",
                statement: "Write a function to insert a new node at the front of a linked list.",
                inputFormat: "No input, demonstration.",
                outputFormat: "40 -> 30 -> 20 -> 10 -> NULL",
                testCases: [{ input: "", output: "40 -> 30 -> 20 -> 10 -> NULL" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
struct Node { int data; struct Node* next; };

void push(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

int main() {
    struct Node* head = NULL;
    push(&head, 10); push(&head, 20); push(&head, 30); push(&head, 40);
    // printList(head) ... (requires printList function)
    return 0;
}`,
                explanation: "To insert at the beginning, we create a new node, make its `next` point to the current head of the list, and then update the head pointer to point to our new node. We pass a pointer to the head pointer (`**head_ref`) so the function can modify the original head."
            },
            {
                id: "c-s15-q3",
                title: "Insert at end (Linked List)",
                description: "Append a node to the end of a linked list.",
                statement: "Write a function to add a new node at the end of a linked list.",
                inputFormat: "No input.",
                outputFormat: "10 -> 20 -> 30 -> NULL",
                testCases: [{ input: "", output: "10 -> 20 -> 30 -> NULL" }],
                solution: `// Function to insert at the end
void append(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    struct Node *last = *head_ref;
    new_node->data = new_data;
    new_node->next = NULL;
    if (*head_ref == NULL) {
       *head_ref = new_node;
       return;
    }
    while (last->next != NULL)
        last = last->next;
    last->next = new_node;
}`,
                explanation: "To append a node, we first traverse the list to find the last node. Then, we make the `next` pointer of the current last node point to our new node."
            },
            // ... more linked list problems ...
            {
                id: "c-s15-q12",
                title: "Remove cycle",
                description: "Remove a cycle from a linked list.",
                statement: "If a cycle is detected in a linked list, write a function to remove it.",
                inputFormat: "A linked list which may have a cycle.",
                outputFormat: "A list with the cycle removed.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `// Using Floyd's cycle detection, find the meeting point.
// Move one pointer to the head, keep the other at the meeting point.
// Move both one step at a time. The point where they meet is the start of the loop.
// To remove the loop, find the node just before the start of the loop and set its next to NULL.
`,
                explanation: "After finding the meeting point with Floyd's algorithm, the start of the loop can be found. By finding the node whose `next` pointer points to the start of the loop, we can break the cycle by setting that `next` pointer to `NULL`."
            },
            // Stack
            {
                id: "c-s15-q13",
                title: "Implement stack with array",
                description: "Implement a stack using a fixed-size array.",
                statement: "Implement `push`, `pop`, and `peek` operations for a stack using an array.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of stack operations.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `#define MAX 100
int stack[MAX], top = -1;

void push(int val) {
    if(top >= MAX-1) printf("Stack Overflow");
    else stack[++top] = val;
}

int pop() {
    if(top < 0) { printf("Stack Underflow"); return -1; }
    else return stack[top--];
}`,
                explanation: "A stack is implemented using an array and a `top` index. `push` increments `top` and adds an element. `pop` returns the element at `top` and decrements it."
            },
            // ... more stack problems ...
            {
                id: "c-s15-q17",
                title: "Postfix evaluation",
                description: "Evaluate a postfix (RPN) expression.",
                statement: "Evaluate a postfix expression using a stack. Example: '2 3 + 5 *' -> (2+3)*5 = 25.",
                inputFormat: "A postfix expression string.",
                outputFormat: "The result.",
                testCases: [{ input: "2 3 + 5 *", output: "25" }],
                solution: `// Iterate through the expression.
// If a number is found, push it to the stack.
// If an operator is found, pop two numbers, perform the operation, and push the result back.
// The final result is the last number on the stack.
`,
                explanation: "A stack is the perfect data structure for evaluating postfix expressions. Operands are pushed onto the stack. When an operator is encountered, it is applied to the top two operands on the stack."
            },
            // Queue
             {
                id: "c-s15-q18",
                title: "Queue using array",
                description: "Implement a queue using an array.",
                statement: "Implement `enqueue` and `dequeue` operations for a linear queue using an array.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of queue operations.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `// Implementation using front and rear pointers.
// Enqueue increments rear and adds.
// Dequeue increments front.
// Need to handle overflow and underflow conditions.
`,
                explanation: "A simple queue can be implemented with an array and two indices, `front` and `rear`. However, a linear queue is inefficient as space is not reused after dequeuing. A circular queue is the preferred array-based implementation."
            },
            // ... more queue problems ...
             {
                id: "c-s15-q21",
                title: "Deque",
                description: "Implement a double-ended queue.",
                statement: "Implement a deque (double-ended queue) that supports adding and removing elements from both ends.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of deque operations.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `// Implementation is complex, often using a doubly linked list or a circular array.
// Allows operations like addFirst, addLast, removeFirst, removeLast.
`,
                explanation: "A deque provides the functionality of both a stack and a queue. A doubly linked list is a natural fit for implementing a deque, as adding or removing from either end is an O(1) operation."
            },
            // Searching & Sorting
            {
                id: "c-s15-q22",
                title: "Linear Search",
                description: "Implement linear search.",
                statement: "Write a function to perform a linear search on an array.",
                inputFormat: "Array and key.",
                outputFormat: "Index or -1.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `int linearSearch(int arr[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}`,
                explanation: "Linear search sequentially checks each element of the list until a match is found or the whole list has been searched."
            },
            {
                id: "c-s15-q23",
                title: "Binary Search",
                description: "Implement binary search.",
                statement: "Write a function to perform binary search on a sorted array.",
                inputFormat: "Sorted array and key.",
                outputFormat: "Index or -1.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`,
                explanation: "Binary search is a fast search algorithm with a time complexity of O(log n). It works on sorted arrays by repeatedly dividing the search interval in half."
            },
            {
                id: "c-s15-q24",
                title: "Quick Sort",
                description: "Implement quick sort.",
                statement: "Implement the Quick Sort algorithm.",
                inputFormat: "An array of integers.",
                outputFormat: "The sorted array.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `// Quick sort implementation using a partition function.`,
                explanation: "Quick sort is a highly efficient, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot."
            },
            {
                id: "c-s15-q25",
                title: "Merge Sort",
                description: "Implement merge sort.",
                statement: "Implement the Merge Sort algorithm.",
                inputFormat: "An array of integers.",
                outputFormat: "The sorted array.",
                // Fix: Added placeholder input and output to satisfy TestCase type
                testCases: [{ input: "", output: "" }],
                solution: `// Merge sort implementation using a merge helper function.`,
                explanation: "Merge sort is another divide-and-conquer algorithm. It divides the array into two halves, recursively sorts them, and then merges the two sorted halves back together."
            },
            // Trees
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q26", title: "Create Binary Tree", description: "Basic binary tree creation.", statement: "Create a simple binary tree with a few nodes.", inputFormat: "No input.", outputFormat: "Demonstration.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q27", title: "Tree Traversals", description: "Inorder, Preorder, Postorder traversals.", statement: "Implement recursive functions for all three DFS traversals.", inputFormat: "A binary tree.", outputFormat: "Traversal orders.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q28", title: "Create Binary Search Tree (BST)", description: "Implement insertion for a BST.", statement: "Write a function to insert a node into a BST while maintaining its properties.", inputFormat: "No input.", outputFormat: "A valid BST.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q29", title: "Search in BST", description: "Find a value in a BST.", statement: "Write a function to search for a value in a BST.", inputFormat: "A BST and a key.", outputFormat: "Found or not found.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q30", title: "Find min/max in BST", description: "Find min and max values in a BST.", statement: "Write functions to find the minimum and maximum values in a BST.", inputFormat: "A BST.", outputFormat: "Min and max values.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q31", title: "Height of a Binary Tree", description: "Calculate the height of a tree.", statement: "Write a recursive function to find the height of a binary tree.", inputFormat: "A binary tree.", outputFormat: "The height.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q32", title: "Delete a node from BST", description: "Implement node deletion in a BST.", statement: "Write a function to delete a node from a BST, handling all cases (0, 1, or 2 children).", inputFormat: "A BST and a key.", outputFormat: "The modified BST.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q33", title: "Check if a tree is a BST", description: "Validate a binary tree.", statement: "Write a function to check if a given binary tree is a valid Binary Search Tree.", inputFormat: "A binary tree.", outputFormat: "Yes or No.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Graphs
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q34", title: "Graph representation (Adjacency List)", description: "Implement a graph using an adjacency list.", statement: "Create a graph representation using an array of linked lists.", inputFormat: "No input.", outputFormat: "Demonstration.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q35", title: "BFS Traversal", description: "Perform BFS on a graph.", statement: "Implement Breadth-First Search for a graph.", inputFormat: "A graph and a start node.", outputFormat: "The BFS traversal order.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q36", title: "DFS Traversal", description: "Perform DFS on a graph.", statement: "Implement Depth-First Search for a graph.", inputFormat: "A graph and a start node.", outputFormat: "The DFS traversal order.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q37", title: "Detect cycle in an undirected graph", description: "Check for cycles.", statement: "Write a function to detect a cycle in an undirected graph.", inputFormat: "A graph.", outputFormat: "Yes or No.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q38", title: "Detect cycle in a directed graph", description: "Check for cycles.", statement: "Write a function to detect a cycle in a directed graph.", inputFormat: "A graph.", outputFormat: "Yes or No.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q39", title: "Shortest path in unweighted graph (BFS)", description: "Find the shortest path.", statement: "Use BFS to find the shortest path between two nodes in an unweighted graph.", inputFormat: "Graph, start, end.", outputFormat: "The path length.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." },
            // Fix: Added placeholder input and output to satisfy TestCase type
            { id: "c-s15-q40", title: "Dijkstra's Algorithm", description: "Find shortest path in weighted graph.", statement: "Implement Dijkstra's algorithm to find the shortest path from a source to all other nodes.", inputFormat: "A weighted graph.", outputFormat: "Shortest path distances.", testCases: [{ input: "", output: "" }], solution: "...", explanation: "..." }
        ]
    }
];