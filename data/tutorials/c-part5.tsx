
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const C_PART5_TOPICS: Topic[] = [
  // 10. Advanced Memory Management
  {
    id: 'c-dynamic-arrays-malloc',
    title: 'Dynamic Arrays (malloc)',
    parent: '10. Advanced Memory',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A standard array (e.g., <code>int arr[10];</code>) has a fixed size determined at compile time. But what if you don't know how many elements you need until the program runs?
        </p>
        <p className="mb-4">
          This is where <strong>Dynamic Memory Allocation</strong> comes in. You can ask the user for a size <code>n</code>, allocate exactly that much memory using <code>malloc()</code>, treat the pointer like an array, and then release the memory with <code>free()</code>.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Step-by-Step Guide</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Declare a Pointer:</strong> This will act as the "name" of your array.</li>
            <li><strong>Get Size:</strong> Ask the user how many elements they want.</li>
            <li><strong>Allocate:</strong> Use <code>malloc(n * sizeof(int))</code> to reserve bytes.</li>
            <li><strong>Verify:</strong> Check if the pointer is <code>NULL</code> (allocation failed).</li>
            <li><strong>Use:</strong> Access elements using <code>ptr[i]</code> syntax.</li>
            <li><strong>Free:</strong> Return memory to the system using <code>free(ptr)</code>.</li>
        </ol>

        <CodeBlock language="c" code={`#include <stdio.h>
#include <stdlib.h> // Required for malloc and free

int main() {
    int n, i;
    int *arr; // 1. Declare pointer

    // 2. Get the size from the user
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    // 3. Dynamically allocate memory using malloc()
    // n * sizeof(int) calculates total bytes needed
    arr = (int*) malloc(n * sizeof(int));

    // 4. Check for successful allocation
    if (arr == NULL) {
        printf("Memory allocation failed! System out of memory.\\n");
        return 1; // Exit program
    }

    // 5. Initialize the array (Treat pointer like an array)
    printf("Enter %d integers:\\n", n);
    for (i = 0; i < n; i++) {
        // We can use array notation [] on pointers!
        scanf("%d", &arr[i]);
    }

    // Display the array
    printf("The elements are: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    // 6. IMPORTANT: Free the allocated memory
    free(arr);
    printf("Memory successfully freed.\\n");

    return 0;
}`} />
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <h4 className="font-bold text-yellow-900 mb-1">Memory Leaks</h4>
            <p className="text-yellow-800 text-sm">
                If you forget to call <code>free(arr)</code>, the memory remains occupied even after your program stops using it (until the program terminates). In long-running servers or games, this causes "Memory Leaks" which eventually crash the system.
            </p>
        </div>
      </>
    )
  }
];
