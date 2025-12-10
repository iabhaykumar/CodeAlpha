import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const C_PART2_TOPICS: Topic[] = [
  // 3. Functions
  {
    id: 'c-functions',
    title: 'Functions & Recursion',
    parent: '3. Functions',
    content: (
      <>
        <p className="mb-4">A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.</p>
        <CodeBlock language="c" code={`// Function declaration
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 10); // Function call
    printf("Result is: %d", result);
    return 0;
}`} />
      <h3 className="text-xl font-bold mt-6 mb-2">Recursion</h3>
      <p className="mb-4">Recursion is the process of making a function call itself.</p>
      <CodeBlock language="c" code={`int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`} />
      </>
    )
  },
  {
    id: 'c-scope',
    title: 'Scope (Local vs Global)',
    parent: '3. Functions',
    content: (
      <>
        <p className="mb-4">Scope refers to the visibility of variables.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Local Variables:</strong> Declared inside a function. Can only be used inside that function.</li>
            <li><strong>Global Variables:</strong> Declared outside all functions. Can be accessed by any function.</li>
        </ul>
      </>
    )
  },

  // 4. Arrays & Strings
  {
    id: 'c-arrays',
    title: 'Arrays (1D & 2D)',
    parent: '4. Arrays & Strings',
    content: (
      <>
        <p className="mb-4">Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</p>
        <CodeBlock language="c" code={`// 1D Array
int myNumbers[] = {25, 50, 75, 100};
printf("%d", myNumbers[0]); // Outputs 25

// 2D Array (Matrix)
int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };
printf("%d", matrix[0][2]); // Outputs 2`} />
      </>
    )
  },
  {
    id: 'c-strings',
    title: 'Strings',
    parent: '4. Arrays & Strings',
    content: (
      <>
        <p className="mb-4">Strings in C are actually arrays of characters terminated by a null character `\0`.</p>
        <CodeBlock language="c" code={`char greetings[] = "Hello World!";
printf("%s", greetings);

// String Functions (<string.h>)
#include <string.h>

char str1[] = "Code";
char str2[] = "Alpha";

// Concatenate
strcat(str1, str2); // str1 becomes "CodeAlpha"

// Copy
strcpy(str2, str1); 

// Length
printf("%d", strlen(str1));`} />
      </>
    )
  },
];