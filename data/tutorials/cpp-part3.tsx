
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const CPP_PART3_TOPICS: Topic[] = [
  // 4. Advanced Concepts
  {
    id: 'cpp-templates',
    title: 'Templates (Generic Programming)',
    parent: '4. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Templates are the foundation of generic programming, which involves writing code in a way that is independent of any particular type.</p>
        <CodeBlock language="cpp" code={`// Template Function
template <typename T>
T myMax(T x, T y) {
  return (x > y) ? x : y;
}

int main() {
  cout << myMax<int>(3, 7) << endl;        // Call myMax for int
  cout << myMax<double>(3.0, 7.0) << endl; // Call myMax for double
  return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-exceptions',
    title: 'Exception Handling',
    parent: '4. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Exception handling provides a way to transfer control from one part of a program to another. C++ exception handling is built upon three keywords: <code>try</code>, <code>catch</code>, and <code>throw</code>.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

// Function logic separated from error handling
void checkAge(int age) {
    if (age >= 18) {
        cout << "Access granted - you are old enough.\\n";
    } else {
        // Throw an exception (can be int, string, object)
        throw 505;
    }
}

int main() {
    try {
        checkAge(15);
    } 
    catch (int myNum) {
        cout << "Access denied - You must be at least 18 years old.\\n";
        cout << "Error number: " << myNum;
    }
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-pointers-memory',
    title: 'Memory Management (new/delete)',
    parent: '4. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Unlike C (malloc/free), C++ uses `new` and `delete` operators for dynamic memory allocation. It calls the constructor and destructor respectively.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

void manageDynamicMemory() {
    // Allocate memory for an integer on the heap
    int* point = new int; 
    
    // Assign value
    *point = 45;
    
    cout << "Value at allocated memory: " << *point << endl;
    
    // Deallocate memory to prevent leaks
    delete point; 
}

int main() {
    manageDynamicMemory();
    return 0;
}`} />
      </>
    )
  }
];
