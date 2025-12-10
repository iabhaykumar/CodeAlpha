
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const CPP_PART1_TOPICS: Topic[] = [
  // 1. Basics
  {
    id: 'cpp-intro',
    title: 'Introduction to C++',
    parent: '1. C++ Basics',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          C++ is a cross-platform language that can be used to create high-performance applications. It was developed by Bjarne Stroustrup as an extension to the C language. It gives programmers a high level of control over system resources and memory.
        </p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

// Reusable function to print a greeting
void printGreeting(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    printGreeting("CodeAlpha");
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-io',
    title: 'Input/Output (cin/cout)',
    parent: '1. C++ Basics',
    content: (
      <>
        <p className="mb-4">C++ uses `cout` (character output) to print text and `cin` (character input) to read text.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><code>cout</code> uses the insertion operator <code>&lt;&lt;</code></li>
            <li><code>cin</code> uses the extraction operator <code>&gt;&gt;</code></li>
        </ul>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

// Function to handle user interaction
void processUserInput() {
    int x;
    cout << "Type a number: "; 
    cin >> x; // Get user input
    cout << "Your number is: " << x << endl;
}

int main() {
    processUserInput();
    return 0;
}`} />
      </>
    )
  },
  
  // 2. Functions & References
  {
    id: 'cpp-functions',
    title: 'Functions & Overloading',
    parent: '2. Functions',
    content: (
      <>
        <p className="mb-4"><strong>Function Overloading</strong> allows multiple functions to have the same name with different parameters.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

// Function to add integers
int add(int x, int y) {
  return x + y;
}

// Overloaded function to add doubles
double add(double x, double y) {
  return x + y;
}

int main() {
  int myNum1 = add(8, 5);
  double myNum2 = add(4.3, 6.26);
  
  cout << "Int: " << myNum1 << "\\n";
  cout << "Double: " << myNum2 << "\\n";
  return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-references',
    title: 'References',
    parent: '2. Functions',
    content: (
      <>
        <p className="mb-4">A reference variable is a "reference" to an existing variable, created with the `&` operator. It allows functions to modify the original variable.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

// Function taking a reference parameter
// This modifies the ORIGINAL string passed to it
void updateMeal(string &mealRef) {
    mealRef = "Burger";
}

int main() {
    string food = "Pizza";
    cout << "Before: " << food << "\\n"; // Outputs Pizza
    
    updateMeal(food);
    
    cout << "After: " << food << "\\n";  // Outputs Burger
    return 0;
}`} />
      </>
    )
  }
];
