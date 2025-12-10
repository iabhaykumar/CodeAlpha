
import React from 'react';
import { Database } from 'lucide-react';
import { Category } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DATA_STRUCTURES_CATEGORIES: Category[] = [
  {
    id: 'dsa',
    title: 'Data Structures',
    icon: <Database size={24} />,
    color: 'text-purple-600 bg-purple-50',
    description: 'Complete Data Structures roadmap from Arrays to Graphs.',
    topics: [
      {
        id: 'dsa-intro',
        title: 'Introduction',
        parent: '1. Introduction',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Data Structure</strong> is a particular way of organizing data in a computer so that it can be used effectively. It provides a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services.
            </p>
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Why are Data Structures important?</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Efficient Data Management:</strong> They allow for efficient storage, retrieval, and manipulation of data.</li>
                <li><strong>Algorithm Optimization:</strong> The choice of data structure is crucial for designing efficient algorithms. An appropriate data structure can significantly reduce the time and space complexity of an algorithm.</li>
                <li><strong>Real-world Problem Solving:</strong> They are fundamental in solving complex problems in areas like artificial intelligence, operating systems, and computer graphics.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <h4 className="font-bold text-blue-900 mb-1">Analogy from CodeAlpha</h4>
                <p className="text-blue-800 text-sm">Think of a library. If books were unsorted, finding one would take forever. But by organizing them (e.g., by genre, then alphabetically), we create a structure that makes finding a book fast and efficient. Data structures do the same for data in a computer.</p>
            </div>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-slate-200 group">
                <div className="relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80" 
                        alt="Library Analogy for Data Structures" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 font-medium">Organized data enables faster access.</p>
                    </div>
                </div>
                <div className="p-3 bg-slate-50 text-center text-sm text-slate-500 italic border-t border-slate-200">
                    Visualizing Data Structures: Like organizing a chaotic library into efficient sections.
                </div>
            </div>
          </>
        )
      },
      // --- Complexity Analysis ---
      {
        id: 'dsa-analysis',
        title: 'Asymptotic Analysis',
        parent: '2. Complexity Analysis',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              <strong>Asymptotic Analysis</strong> is the technique of estimating the performance of an algorithm as the input size grows without bound. It focuses on the growth rate of the running time or space requirements, ignoring constant factors and lower-order terms.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Three Cases of Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                    <h4 className="font-bold text-green-800 mb-2">Best Case (Ω - Omega)</h4>
                    <p className="text-sm text-green-700">The minimum time required for program execution. Represents the lower bound.</p>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                    <h4 className="font-bold text-yellow-800 mb-2">Average Case (Θ - Theta)</h4>
                    <p className="text-sm text-yellow-700">The average time required, assuming random input. Represents a tight bound.</p>
                </div>
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                    <h4 className="font-bold text-red-800 mb-2">Worst Case (O - Big O)</h4>
                    <p className="text-sm text-red-700">The maximum time required. This is the most common metric used as it guarantees performance.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">CodeAlpha Example: Linear Search</h3>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Linear Search Algorithm Analysis
// Best Case: O(1) -> Element is found at the first index.
// Average Case: O(n) -> Element is found somewhere in the middle.
// Worst Case: O(n) -> Element is at the last index or not present at all.

#include <iostream>
using namespace std;

int search(int arr[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}`} 
            />
          </>
        )
      },
      // --- Arrays ---
      {
        id: 'dsa-array-basics',
        title: 'Array Basics',
        parent: '3. Arrays',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              An <strong>Array</strong> is a fundamental data structure used to store a collection of elements of the same data type in contiguous memory locations. This allows for efficient access to elements using their index.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Visualizing an array in memory
Memory: | 95 | 88 | 76 | 92 | 85 |
Index:    0    1    2    3    4`}
            </pre>
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Key Characteristics</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Homogeneous Elements:</strong> All elements in an array must be of the same data type.</li>
                <li><strong>Fixed Size:</strong> The size of the array is static and determined at compile time.</li>
                <li><strong>Random Access:</strong> Any element can be accessed directly in O(1) time using its index.</li>
                <li><strong>Contiguous Memory:</strong> Elements are stored sequentially in memory, which can improve cache performance.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">CodeAlpha Example: Basic Array</h3>
            <CodeBlock 
              language="cpp" 
              code={`#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: 1D Array of student scores
    int scores[5] = {95, 88, 76, 92, 85};

    // Accessing the third element (index 2)
    cout << "Score of student 3: " << scores[2] << endl; 

    // Updating an element
    scores[2] = 99; 
    cout << "Updated score of student 3: " << scores[2] << endl;

    return 0;
}
/* Output:
Score of student 3: 76
Updated score of student 3: 99
*/`} 
            />
          </>
        )
      },
      {
        id: 'dsa-array-2d',
        title: '2D & Multi-Dimensional Arrays',
        parent: '3. Arrays',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A 2D array can be visualized as a grid or a table with rows and columns. It's essentially an array of arrays, useful for representing matrices or game boards. This concept can be extended to 3D or more dimensions.
            </p>
             <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Visual Representation of matrix[2][3]
//      Col 0  Col 1  Col 2
// Row 0 [  1  ,   2  ,   3  ]
// Row 1 [  4  ,   5  ,   6  ]`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: 2D Array representing a 2x3 matrix
    int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} };

    // Accessing element in the first row, second column
    cout << "Element at [0][1]: " << matrix[0][1] << endl;

    return 0;
}`} 
            />
          </>
        )
      },

      // --- Linked Lists ---
      {
        id: 'dsa-ll-intro',
        title: 'Introduction to Linked Lists',
        parent: '4. Linked Lists',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Linked List</strong> is a linear data structure where elements (nodes) are not stored at contiguous memory locations. Instead, each node contains data and a pointer to the next node in the sequence.
            </p>
             <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// A Linked List is a chain of nodes
[Head]--->[Data|Next]--->[Data|Next]--->[Data|NULL]
  |           |              |              |
[10]----->[20]--------->[30]--------->NULL`}
            </pre>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <h4 className="font-bold text-blue-900 mb-1">Why Linked List over Array?</h4>
                <p className="text-blue-800 text-sm">Arrays have a fixed size. Linked Lists are dynamic; they can grow and shrink during runtime. Insertion and deletion are easier in Linked Lists (O(1)) compared to Arrays (O(n)).</p>
            </div>
          </>
        )
      },
      {
        id: 'dsa-ll-singly',
        title: 'Singly Linked List',
        parent: '4. Linked Lists',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              In a <strong>Singly Linked List</strong>, each node contains two parts: the data and a pointer to the next node. It allows traversal in one direction only.
            </p>
            
            {/* Visual Representation */}
            <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Visual Structure</h4>
              <div className="flex items-center gap-1 min-w-max pb-2">
                {/* Head Pointer */}
                <div className="flex flex-col items-center mr-2">
                  <span className="text-xs font-bold text-purple-600 mb-1">HEAD</span>
                  <div className="h-6 w-0.5 bg-slate-400 relative">
                    <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-b-2 border-r-2 border-slate-400 rotate-45"></div>
                  </div>
                </div>

                {/* Node 1 */}
                <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="font-bold text-lg text-slate-900">10</span>
                  </div>
                  <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-12 h-0.5 bg-slate-800 relative mx-2">
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                </div>

                {/* Node 2 */}
                <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="font-bold text-lg text-slate-900">20</span>
                  </div>
                  <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-12 h-0.5 bg-slate-800 relative mx-2">
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                </div>

                {/* Node 3 (Last) */}
                <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="font-bold text-lg text-slate-900">30</span>
                  </div>
                  <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                    <span className="text-xs font-mono font-bold text-red-500">NULL</span>
                  </div>
                </div>
              </div>
            </div>

            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Node Structure for Singly Linked List
struct Node {
    int data;
    Node* next;
    
    Node(int val) {
        data = val;
        next = NULL; // By default, a new node points to nothing
    }
};`} 
            />
          </>
        )
      },
      {
        id: 'dsa-ll-doubly',
        title: 'Doubly Linked List',
        parent: '4. Linked Lists',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Doubly Linked List (DLL)</strong> contains an extra pointer, typically called <em>prev</em>, together with the <em>next</em> pointer and data. This allows traversal in both forward and backward directions.
            </p>
            
            {/* Visual Representation for DLL */}
            <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Visual Structure</h4>
              <div className="flex items-center gap-1 min-w-max pb-2">
                {/* NULL Pointer Left */}
                <div className="flex flex-col items-center mr-2">
                  <span className="text-xs font-mono font-bold text-red-500">NULL</span>
                </div>

                {/* Left Arrow */}
                <div className="w-8 h-0.5 bg-slate-800 relative">
                  <div className="absolute left-0 -top-1 w-2.5 h-2.5 border-b-2 border-l-2 border-slate-800 rotate-45"></div>
                </div>

                {/* Node 1 */}
                <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-40">
                  <div className="w-1/3 p-2 text-center border-r-2 border-slate-800 bg-orange-50">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Prev</span>
                    <div className="w-2 h-2 bg-slate-800 rounded-full mx-auto"></div>
                  </div>
                  <div className="w-1/3 p-2 text-center border-r-2 border-slate-800">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="font-bold text-lg text-slate-900">10</span>
                  </div>
                  <div className="w-1/3 p-2 text-center bg-blue-50">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Next</span>
                    <div className="w-2 h-2 bg-slate-800 rounded-full mx-auto"></div>
                  </div>
                </div>

                {/* Bidirectional Arrow */}
                <div className="w-12 h-0.5 bg-slate-800 relative mx-2">
                  <div className="absolute left-0 -top-1 w-2.5 h-2.5 border-b-2 border-l-2 border-slate-800 rotate-45"></div>
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                </div>

                {/* Node 2 */}
                <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-40">
                  <div className="w-1/3 p-2 text-center border-r-2 border-slate-800 bg-orange-50">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Prev</span>
                    <div className="w-2 h-2 bg-slate-800 rounded-full mx-auto"></div>
                  </div>
                  <div className="w-1/3 p-2 text-center border-r-2 border-slate-800">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Data</span>
                    <span className="font-bold text-lg text-slate-900">20</span>
                  </div>
                  <div className="w-1/3 p-2 text-center bg-blue-50">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Next</span>
                    <div className="w-2 h-2 bg-slate-800 rounded-full mx-auto"></div>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="w-8 h-0.5 bg-slate-800 relative ml-2">
                  <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                </div>

                {/* NULL Pointer Right */}
                <div className="flex flex-col items-center ml-2">
                  <span className="text-xs font-mono font-bold text-red-500">NULL</span>
                </div>
              </div>
            </div>

            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Doubly Linked List Node
struct Node {
    int data;
    Node* next; // Pointer to next node
    Node* prev; // Pointer to previous node

    Node(int val) {
        data = val;
        next = NULL;
        prev = NULL;
    }
};`} 
            />
          </>
        )
      },
      {
        id: 'dsa-ll-circular',
        title: 'Circular Linked List',
        parent: '4. Linked Lists',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Circular Linked List</strong> is a variation where the last node points back to the first node instead of NULL, forming a circle. This is useful for applications that require a cycle, like a round-robin scheduler.
            </p>
            
            {/* Visual Representation for Circular Linked List */}
            <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Visual Structure</h4>
              <div className="relative min-w-max pb-12 pt-2 px-4">
                <div className="flex items-center gap-1">
                  
                  {/* Node 1 */}
                  <div className="relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <span className="text-xs font-bold text-purple-600 mb-1">HEAD</span>
                        <div className="h-4 w-0.5 bg-slate-400 relative">
                            <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-b-2 border-r-2 border-slate-400 rotate-45"></div>
                        </div>
                    </div>
                    <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 z-10 relative">
                      <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                        <span className="font-bold text-lg text-slate-900">10</span>
                      </div>
                      <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                        <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                        <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-12 h-0.5 bg-slate-800 relative mx-2">
                    <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                  </div>

                  {/* Node 2 */}
                  <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 z-10 relative">
                    <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                      <span className="font-bold text-lg text-slate-900">20</span>
                    </div>
                    <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                      <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-12 h-0.5 bg-slate-800 relative mx-2">
                    <div className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 rotate-45"></div>
                  </div>

                  {/* Node 3 */}
                  <div className="flex border-2 border-slate-800 rounded-lg bg-white shadow-md w-32 z-10 relative">
                    <div className="w-1/2 p-2 text-center border-r-2 border-slate-800 bg-blue-50">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold">Data</span>
                      <span className="font-bold text-lg text-slate-900">30</span>
                    </div>
                    <div className="w-1/2 p-2 flex flex-col items-center justify-center bg-slate-50">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Next</span>
                      <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Loop Back Line */}
                <div className="absolute right-8 top-1/2 mt-4 w-0.5 h-16 bg-slate-400 border-r border-dashed"></div>
                <div className="absolute right-8 bottom-0 w-full h-0.5 bg-slate-400 border-b border-dashed"></div>
                <div className="absolute left-8 bottom-0 h-8 w-0.5 bg-slate-400 border-l border-dashed"></div>
                <div className="absolute left-8 bottom-8 w-2 h-2 border-t-2 border-r-2 border-slate-400 -rotate-45 transform -translate-x-[3px] -translate-y-1"></div>
              </div>
            </div>

            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Circular Traversal
void printList(Node* head) {
    if(head == NULL) return;
    Node* temp = head;
    do {
        cout << temp->data << " ";
        temp = temp->next;
    } while(temp != head); // Condition checks if we've returned to the start
}`} 
            />
          </>
        )
      },

      // --- Stack & Queue ---
      {
        id: 'dsa-stack',
        title: 'Stack',
        parent: '5. Stack & Queue',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Stack</strong> is an abstract data type that follows the <strong>LIFO (Last-In, First-Out)</strong> principle. The last element added to the stack will be the first one to be removed. Think of it like a stack of plates.
            </p>
             <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// PUSH operation adds an element to the top
// POP operation removes the top element

// Push "A"   |   |
//            | A | <-- Top
//            +---+
// Push "B"   | B | <-- Top
//            | A |
//            +---+
// Pop        | A | <-- Top
//            +---+`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`#include <stack>
#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: Stack using C++ STL
    stack<string> s;
    s.push("CodeAlpha"); 
    s.push("Internship");
    
    cout << "Top Element: " << s.top() << endl; 
    s.pop(); // Removes "Internship"
    cout << "New Top Element: " << s.top() << endl; 
    
    return 0;
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-queue',
        title: 'Queue',
        parent: '5. Stack & Queue',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Queue</strong> is an abstract data type that follows the <strong>FIFO (First-In, First-Out)</strong> principle. The first element added is the first one to be removed, like a queue of people waiting in line.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// ENQUEUE adds an element to the rear
// DEQUEUE removes an element from the front

// Enqueue "A", "B", "C"
// Front -> [ A | B | C ] <- Rear

// Dequeue (removes "A")
// Front -> [ B | C ] <- Rear`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`#include <queue>
#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: Queue using C++ STL
    queue<int> q;
    q.push(10); // Enqueue 10
    q.push(20); // Enqueue 20
    
    cout << "Front Element: " << q.front() << endl; // Prints 10
    q.pop(); // Dequeue 10
    cout << "New Front Element: " << q.front() << endl; // Prints 20
    return 0;
}`} 
            />
          </>
        )
      },

      // --- Trees ---
      {
        id: 'dsa-trees-intro',
        title: 'Binary Tree',
        parent: '6. Trees',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Binary Tree</strong> is a hierarchical data structure where each node has at most two children, which are referred to as the <em>left child</em> and the <em>right child</em>. The topmost node is called the root.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// A simple Binary Tree structure
        (Root)
          10
         /  \\
        5    15
       / \\
      2   7`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Binary Tree Node in C++
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
    
    Node(int val) {
        data = val;
        left = NULL;
        right = NULL;
    }
};`} 
            />
          </>
        )
      },
      {
        id: 'dsa-bst',
        title: 'Binary Search Tree',
        parent: '6. Trees',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Binary Search Tree</strong> is a special type of binary tree with a specific ordering property: for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. This makes searching very efficient (O(log n) on average).
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// BST Property
        (Root)
          10
         /  \\
   ( < 10)  ( > 10)
      5       15`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Search in a BST
Node* search(Node* root, int key) {
    if (root == NULL || root->data == key) {
        return root; // Found or not in tree
    }
    // Key is greater, so search in the right subtree
    if (root->data < key) {
        return search(root->right, key);
    }
    // Key is smaller, so search in the left subtree
    return search(root->left, key);
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-tree-traversal',
        title: 'Tree Traversals',
        parent: '6. Trees',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">Traversal is the process of visiting each node in a tree exactly once. There are three main types of Depth-First Traversals:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Inorder (Left, Root, Right):</strong> In a BST, this traversal visits nodes in ascending order.</li>
                <li><strong>Preorder (Root, Left, Right):</strong> Useful for creating a copy of the tree.</li>
                <li><strong>Postorder (Left, Right, Root):</strong> Used for deleting the tree from memory.</li>
            </ul>
             <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Tree:
//       (10)
//       /  \\
//     (5)  (15)

// Traversal Orders:
// Inorder:   5, 10, 15
// Preorder:  10, 5, 15
// Postorder: 5, 15, 10`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Inorder Traversal
void inorder(struct Node* node) {
    if (node == NULL) return;
    inorder(node->left); // Visit left child
    cout << node->data << " "; // Visit root
    inorder(node->right); // Visit right child
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-heaps',
        title: 'Heaps (Min/Max)',
        parent: '6. Trees',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Heap</strong> is a specialized tree-based data structure that satisfies the heap property. In a <strong>Max-Heap</strong>, the parent node is always greater than or equal to its children. In a <strong>Min-Heap</strong>, the parent is always less than or equal to its children. Heaps are commonly used to implement Priority Queues.
            </p>
             <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// A Max-Heap Structure
//         (50)
//        /    \\
//      (30)    (20)
//     /   \\
//   (10)  (15)
//
// Property: Parent is always >= children`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`#include <queue>
#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: Max Heap using Priority Queue
    priority_queue<int> max_heap;
    max_heap.push(30);
    max_heap.push(10);
    max_heap.push(50);
    
    cout << "Max element is: " << max_heap.top() << endl; // Outputs 50
    return 0;
}`} 
            />
          </>
        )
      },

      // --- Graphs ---
      {
        id: 'dsa-graph-intro',
        title: 'Introduction to Graphs',
        parent: '7. Graphs',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Graph</strong> is a non-linear data structure consisting of nodes (vertices) and edges that connect these nodes. Graphs are used to model relationships and networks, such as social networks, road maps, and the internet.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// A simple undirected graph
//   0 --- 1
//   |   /
//   |  /
//   2

// Adjacency List Representation:
// 0 -> [1, 2]
// 1 -> [0, 2]
// 2 -> [0, 1]`}
            </pre>
            <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">Representation</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>Adjacency Matrix:</strong> A 2D array where \`matrix[i][j] = 1\` if there's an edge from node i to j. Uses O(V^2) space.</li>
                <li><strong>Adjacency List:</strong> An array of linked lists, where each index \`i\` stores a list of nodes adjacent to \`i\`. More space-efficient for sparse graphs.</li>
            </ul>
          </>
        )
      },
      {
        id: 'dsa-graph-bfs',
        title: 'BFS Traversal',
        parent: '7. Graphs',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              BFS is a graph traversal algorithm that explores neighbor nodes first, before moving to the next level neighbors. It uses a <strong>Queue</strong> data structure. It's often used to find the shortest path in an unweighted graph.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Graph:
//   A --- B
//   | \\   |
//   C---D---E

// BFS starting from A:
// 1. Visit A (Queue: [A])
// 2. Visit B, C, D (Queue: [B, C, D]) -> Level 1
// 3. Visit E (Queue: [C, D, E]) -> Level 2

// Final Order: A, B, C, D, E`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: BFS Concept
// 1. Create a queue and a visited array.
// 2. Enqueue the starting node and mark it as visited.
// 3. While the queue is not empty:
//    a. Dequeue a node 'u'.
//    b. For all unvisited neighbors 'v' of 'u':
//       i. Mark 'v' as visited.
//       ii. Enqueue 'v'.`} 
            />
          </>
        )
      },
      {
        id: 'dsa-graph-dfs',
        title: 'DFS Traversal',
        parent: '7. Graphs',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              DFS explores as deep as possible along each branch before backtracking. It uses a <strong>Stack</strong> (or recursion, which uses the call stack). It is used for cycle detection, topological sorting, and solving puzzles like mazes.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Graph:
//   A --- B
//   | \\   |
//   C---D---E

// DFS starting from A (one possible path):
// 1. Visit A, go to neighbor B
// 2. Visit B, go to neighbor D
// 3. Visit D, go to neighbor C
// 4. Visit C, go to neighbor A (visited, backtrack)
// 5. From D, go to neighbor E
//
// Final Order: A, B, D, C, E`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: DFS Recursive Concept
void DFS(int u, bool visited[]) {
    visited[u] = true;
    cout << u << " ";

    for (int v : adj[u]) {
        if (!visited[v]) {
            DFS(v, visited);
        }
    }
}`} 
            />
          </>
        )
      },

      // --- Hashing ---
      {
        id: 'dsa-hashing',
        title: 'Hashing',
        parent: '8. Hashing',
        content: (
          <>
            <p className="mb-4 text-lg text-slate-700">
              <strong>Hashing</strong> is a technique used to map data of any size to a fixed-size value, called a hash code or hash value. This is done using a hash function. Hashing is fundamental to hash tables (hash maps), which provide O(1) average time complexity for search, insertion, and deletion operations.
            </p>
            <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Key -> Hash Function -> Index (in Hash Table)
// "CodeAlpha" --> [Hash Function] --> 7

// Hash Table (Array):
// [0] ...
// [7] -> {"CodeAlpha": 1} (Value)
// ...`}
            </pre>
            <CodeBlock 
              language="cpp" 
              code={`#include <unordered_map>
#include <iostream>
#include <string>
using namespace std;

int main() {
    // CodeAlpha: C++ Unordered Map (Hash Map)
    unordered_map<string, int> internship_slots;

    // Insert key-value pairs
    internship_slots["Web Development"] = 150;
    internship_slots["Data Science"] = 100;

    // Access value by key
    cout << "Web Dev slots: " << internship_slots["Web Development"] << endl;
    return 0;
}`} 
            />
          </>
        )
      }
    ]
  }
];
