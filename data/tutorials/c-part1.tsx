import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const C_PART1_TOPICS: Topic[] = [
  // 1. Basics
  {
    id: 'c-intro',
    title: 'Introduction to C',
    parent: '1. C Basics',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          C is a powerful general-purpose programming language. It is fast, portable, and available on all platforms. If you are new to programming, C is a good choice to start your programming journey as it helps you understand the internal architecture of a computer and how memory is stored and retrieved.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Why Learn C?</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Foundation:</strong> C is the base for many languages like C++, Java, and Python.</li>
          <li><strong>Speed:</strong> C is very close to assembly language, making it incredibly fast.</li>
          <li><strong>OS Development:</strong> Major Operating Systems like Windows, UNIX, and Linux are written in C.</li>
        </ul>
        <CodeBlock language="c" code={`#include <stdio.h> // Header file for Input/Output

int main() {
    // printf() displays the string inside quotation
    printf("Hello, CodeAlpha Students!");
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'c-variables',
    title: 'Variables & Data Types',
    parent: '1. C Basics',
    content: (
      <>
        <p className="mb-4">Variables are containers for storing data values. In C, there are different types of variables (defined with different keywords).</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>int:</strong> integers (whole numbers), e.g., 100, -5</li>
          <li><strong>float:</strong> floating point numbers, e.g., 19.99</li>
          <li><strong>char:</strong> single character, e.g., 'a', 'B'</li>
          <li><strong>double:</strong> double-precision floating point numbers (more decimal places)</li>
        </ul>
        <CodeBlock language="c" code={`int myNum = 15;
float myFloatNum = 5.99;
char myLetter = 'D';

printf("%d\n", myNum);
printf("%f\n", myFloatNum);
printf("%c\n", myLetter);`} />
      </>
    )
  },
  {
    id: 'c-io',
    title: 'Input/Output (printf/scanf)',
    parent: '1. C Basics',
    content: (
      <>
        <p className="mb-4">In C, `printf()` is used for output and `scanf()` is used for input.</p>
        <h3 className="text-xl font-bold mt-4 mb-2">Format Specifiers</h3>
        <p className="mb-4">Format specifiers define the type of data to be printed or read.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 font-mono text-sm">
            <li>%d - Integer</li>
            <li>%f - Float</li>
            <li>%c - Character</li>
            <li>%s - String</li>
            <li>%lf - Double</li>
        </ul>
        <CodeBlock language="c" code={`#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
    
    // &age is the address of the variable age
    scanf("%d", &age); 
    
    printf("Your age is: %d", age);
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'c-operators',
    title: 'Operators',
    parent: '1. C Basics',
    content: (
      <>
        <p className="mb-4">Operators are used to perform operations on variables and values.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
  <li>
    <strong>Arithmetic:</strong>
    <code> + </code>, <code> - </code>, <code> * </code>, <code> / </code>, 
    <code> % </code> (Modulus/Remainder)
  </li>

  <li>
    <strong>Relational:</strong>
    <code> == </code>, <code> != </code>, <code> &gt; </code>, <code> &lt; </code>, 
    <code> &gt;= </code>, <code> &lt;= </code>
  </li>

  <li>
    <strong>Logical:</strong>
    <code> && </code> (AND), <code> || </code> (OR), <code> ! </code> (NOT)
  </li>

  <li>
    <strong>Increment/Decrement:</strong>
    <code> ++ </code>, <code> -- </code>
  </li>
</ul>

        <CodeBlock language="c" code={`int x = 10;
int y = 3;
printf("%d", x % y); // Output: 1 (Remainder of 10/3)

x++; // x becomes 11`} />
      </>
    )
  },

  // 2. Control Flow
  {
    id: 'c-if-else',
    title: 'if...else & Switch',
    parent: '2. Control Flow',
    content: (
      <>
        <p className="mb-4">Conditional statements are used to perform different actions based on different conditions.</p>
        <CodeBlock language="c" code={`int time = 20;
if (time < 18) {
  printf("Good day.");
} else {
  printf("Good evening.");
}

// Switch Statement
int day = 4;
switch (day) {
  case 1: printf("Monday"); break;
  case 2: printf("Tuesday"); break;
  // ...
  default: printf("Weekend");
}`} />
      </>
    )
  },
  {
    id: 'c-loops',
    title: 'Loops (for, while, do-while)',
    parent: '2. Control Flow',
    content: (
      <>
        <p className="mb-4">Loops can execute a block of code as long as a specified condition is reached.</p>
        <h3 className="text-xl font-bold mt-4 mb-2">For Loop</h3>
        <CodeBlock language="c" code={`int i;
for (i = 0; i < 5; i++) {
  printf("%d\n", i);
}`} />
        <h3 className="text-xl font-bold mt-4 mb-2">While Loop</h3>
        <CodeBlock language="c" code={`int i = 0;
while (i < 5) {
  printf("%d\n", i);
  i++;
}`} />
        <h3 className="text-xl font-bold mt-4 mb-2">Do-While Loop</h3>
        <p>Executed at least once even if the condition is false.</p>
        <CodeBlock language="c" code={`int i = 0;
do {
  printf("%d\n", i);
  i++;
} while (i < 5);`} />
      </>
    )
  },
];