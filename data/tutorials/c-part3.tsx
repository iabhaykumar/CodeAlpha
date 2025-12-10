
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const C_PART3_TOPICS: Topic[] = [
  // 5. Pointers (The Heart of C)
  {
    id: 'c-pointers-intro',
    title: 'Introduction to Pointers',
    parent: '5. Pointers',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <strong>Pointer</strong> is a variable that stores the <strong>memory address</strong> of another variable as its value. Pointers are one of the most powerful features of C, allowing direct memory manipulation.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Key Operators</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><code>&</code> (Address-of Operator): Returns the memory address of a variable.</li>
            <li><code>*</code> (Dereference Operator): Accesses the value at the address stored in the pointer.</li>
        </ul>
        <CodeBlock language="c" code={`int myAge = 43;     // An int variable
int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge

// Output the value of myAge (43)
printf("%d\n", myAge);

// Output the memory address of myAge (e.g., 0x7ffe5367e044)
printf("%p\n", &myAge);

// Output the memory address of myAge with the pointer (0x7ffe5367e044)
printf("%p\n", ptr);

// Output the value of myAge with the pointer (43) - DEREFERENCING
printf("%d\n", *ptr);`} />
      </>
    )
  },
  {
    id: 'c-pointers-math',
    title: 'Pointer Arithmetic',
    parent: '5. Pointers',
    content: (
      <>
        <p className="mb-4">You can perform arithmetic operations on pointers like `++`, `--`, `+`, `-`. When you increment a pointer, it jumps to the next memory location based on the <strong>size of the data type</strong>.</p>
        <CodeBlock language="c" code={`int myArr[3] = {10, 20, 30};
int *ptr = myArr; // Points to myArr[0]

printf("%d\n", *ptr); // 10

ptr++; // Move to next integer (jumps 4 bytes)
printf("%d\n", *ptr); // 20`} />
      </>
    )
  },
  {
    id: 'c-pointers-arrays',
    title: 'Pointers & Arrays',
    parent: '5. Pointers',
    content: (
      <>
        <p className="mb-4">Arrays and pointers are closely related in C. The name of an array acts as a pointer to the first element of the array.</p>
        <CodeBlock language="c" code={`int myNumbers[4] = {25, 50, 75, 100};

// Access using array index
printf("%d\n", myNumbers[1]); // 50

// Access using pointer arithmetic
printf("%d\n", *(myNumbers + 1)); // 50`} />
      </>
    )
  },
  
  // 6. Memory Management
  {
    id: 'c-memory-dynamic',
    title: 'Dynamic Memory Allocation',
    parent: '6. Memory Management',
    content: (
      <>
        <p className="mb-4">Static memory allocation (arrays) has a fixed size. Dynamic memory allocation allows you to allocate memory at runtime using `malloc()`, `calloc()`, `realloc()`, and `free()` from <code>&lt;stdlib.h&gt;</code>.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">malloc() vs calloc()</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><code>malloc(size)</code>: Allocates a block of memory. Contains garbage values initially.</li>
            <li><code>calloc(n, size)</code>: Allocates n blocks of memory. Initializes all bytes to zero.</li>
        </ul>
        <CodeBlock language="c" code={`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    int n = 5;

    // Dynamically allocate memory using malloc()
    ptr = (int*) malloc(n * sizeof(int));

    if (ptr == NULL) {
        printf("Memory not allocated.\\n");
        exit(0);
    }

    // Use the memory
    for (int i = 0; i < n; ++i) {
        ptr[i] = i + 1;
    }

    // ALWAYS free dynamically allocated memory
    free(ptr);

    return 0;
}`} />
      </>
    )
  }
];
