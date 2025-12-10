import React from 'react';
import { Database, Cpu } from 'lucide-react';
import { Category } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DSA_CATEGORIES: Category[] = [
  {
    id: 'dsa',
    title: 'Data Structures',
    icon: <Database size={24} />,
    color: 'text-purple-600 bg-purple-50',
    description: 'Complete Data Structures roadmap from Arrays to Graphs.',
    topics: [
      // --- Complexity Analysis ---
      {
        id: 'dsa-analysis',
        title: 'Asymptotic Analysis',
        parent: 'Complexity',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Asymptotic Analysis</h1>
            <p className="mb-4 text-lg text-slate-700">
              <strong>Asymptotic Analysis</strong> is the technique of estimating the performance of an algorithm as the input size grows without bound. It focuses on the growth rate of the running time or space requirements.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Three Cases of Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                    <h4 className="font-bold text-green-800 mb-2">Best Case (Ω)</h4>
                    <p className="text-sm text-green-700">The minimum time required for program execution.</p>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                    <h4 className="font-bold text-yellow-800 mb-2">Average Case (Θ)</h4>
                    <p className="text-sm text-yellow-700">The average time required for program execution.</p>
                </div>
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                    <h4 className="font-bold text-red-800 mb-2">Worst Case (O)</h4>
                    <p className="text-sm text-red-700">The maximum time required for program execution (Big O).</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">CodeAlpha Example: Linear Search</h3>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Linear Search Algorithm Analysis
// Best Case: O(1) - Element found at first index
// Worst Case: O(n) - Element found at last index or not present

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
        id: 'dsa-array',
        title: 'Array Basics',
        parent: 'Arrays',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Arrays</h1>
            <p className="mb-4 text-lg text-slate-700">
              An <strong>Array</strong> is a linear data structure collecting elements of the same data type, stored in contiguous memory locations.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Key Characteristics</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Fixed Size:</strong> The size of the array is defined at declaration.</li>
                <li><strong>Random Access:</strong> Any element can be accessed instantly using its index (O(1)).</li>
                <li><strong>Contiguous Memory:</strong> Elements are stored side-by-side in RAM.</li>
            </ul>

            <CodeBlock 
              language="cpp" 
              code={`#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: Array Declaration
    int marks[5] = {80, 85, 90, 95, 100};

    // Accessing Elements
    cout << "First Student Marks: " << marks[0] << endl;
    
    // Updating Elements
    marks[2] = 99; 
    cout << "Updated Third Student Marks: " << marks[2] << endl;

    return 0;
}`} 
            />
          </>
        )
      },

      // --- Linked Lists ---
      {
        id: 'dsa-ll-intro',
        title: 'Introduction',
        parent: 'Linked Lists',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Introduction to Linked Lists</h1>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Linked List</strong> is a linear data structure where elements are not stored at contiguous memory locations. Instead, the elements are linked using pointers.
            </p>
            
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
        parent: 'Linked Lists',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Singly Linked List</h1>
            <p className="mb-4 text-lg text-slate-700">
              In a <strong>Singly Linked List</strong>, each node contains two parts: the data and a pointer to the next node. It allows traversal in one direction only.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">CodeAlpha Implementation</h3>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Node Structure for Singly Linked List
struct Node {
    int data;
    Node* next;
    
    Node(int val) {
        data = val;
        next = NULL;
    }
};

void insertAtHead(Node* &head, int val) {
    Node* n = new Node(val);
    n->next = head;
    head = n;
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-ll-doubly',
        title: 'Doubly Linked List',
        parent: 'Linked Lists',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Doubly Linked List</h1>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Doubly Linked List (DLL)</strong> contains an extra pointer, typically called <em>prev</em>, together with the <em>next</em> pointer and data. This allows traversal in both forward and backward directions.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">CodeAlpha Implementation</h3>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Doubly Linked List Node
struct Node {
    int data;
    Node* next;
    Node* prev;

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
        parent: 'Linked Lists',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Circular Linked List</h1>
            <p className="mb-4 text-lg text-slate-700">
              A <strong>Circular Linked List</strong> is a variation where the last node points back to the first node instead of NULL, forming a circle.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Circular Traversal
void printList(Node* head) {
    if(head == NULL) return;
    Node* temp = head;
    do {
        cout << temp->data << " ";
        temp = temp->next;
    } while(temp != head);
}`} 
            />
          </>
        )
      },

      // --- Stack & Queue ---
      {
        id: 'dsa-stack',
        title: 'Stack Implementation',
        parent: 'Stack & Queue',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Stack Data Structure</h1>
            <p className="mb-4">
              A <strong>Stack</strong> follows the <strong>LIFO</strong> (Last In First Out) principle. 
              The element inserted last is the first one to be removed.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`#include <stack>
#include <iostream>
using namespace std;

int main() {
    // CodeAlpha: Stack using STL
    stack<string> s;
    s.push("CodeAlpha"); 
    s.push("Internship");
    
    cout << "Top Element: " << s.top() << endl; 
    s.pop();
    
    return 0;
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-queue',
        title: 'Queue Implementation',
        parent: 'Stack & Queue',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Queue Data Structure</h1>
            <p className="mb-4">
              A <strong>Queue</strong> follows the <strong>FIFO</strong> (First In First Out) principle. 
            </p>
            <CodeBlock 
              language="cpp" 
              code={`#include <queue>
using namespace std;

int main() {
    // CodeAlpha: Queue using STL
    queue<int> q;
    q.push(10);
    q.push(20);
    
    cout << "Front Element: " << q.front() << endl; 
    q.pop(); 
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
        parent: 'Trees',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Binary Tree</h1>
            <p className="mb-4">
              A <strong>Binary Tree</strong> is a hierarchical data structure in which each node has at most two children, referred to as the <em>left child</em> and the <em>right child</em>.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`struct Node {
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
        parent: 'Trees',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Binary Search Tree (BST)</h1>
            <p className="mb-4">
              A <strong>BST</strong> is a binary tree where the left child is smaller than the parent, and the right child is greater.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Search in BST
Node* search(Node* root, int key) {
    if (root == NULL || root->data == key) return root;
    if (root->data < key) return search(root->right, key);
    return search(root->left, key);
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-tree-traversal',
        title: 'Tree Traversals',
        parent: 'Trees',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Tree Traversals</h1>
            <p className="mb-4">Techniques to visit every node in a tree.</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Inorder (Left, Root, Right)</strong></li>
                <li><strong>Preorder (Root, Left, Right)</strong></li>
                <li><strong>Postorder (Left, Right, Root)</strong></li>
            </ul>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Inorder Traversal
void inorder(struct Node* temp) {
    if (temp == NULL) return;
    inorder(temp->left);
    cout << temp->data << " ";
    inorder(temp->right);
}`} 
            />
          </>
        )
      },
      {
        id: 'dsa-heaps',
        title: 'Heaps (Min/Max)',
        parent: 'Trees',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Heaps</h1>
            <p className="mb-4">
              A <strong>Heap</strong> is a specialized tree-based data structure that satisfies the heap property.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`#include <queue>
using namespace std;
// CodeAlpha: Max Heap using Priority Queue
priority_queue<int> pq;`} 
            />
          </>
        )
      },

      // --- Graphs ---
      {
        id: 'dsa-graph-intro',
        title: 'Graph Introduction',
        parent: 'Graphs',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Graphs</h1>
            <p className="mb-4">
              A <strong>Graph</strong> consists of nodes and edges. It can be directed or undirected, weighted or unweighted.
            </p>
            <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">Representation</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>Adjacency Matrix</li>
                <li>Adjacency List (Recommended)</li>
            </ul>
          </>
        )
      },
      {
        id: 'dsa-graph-bfs',
        title: 'BFS Traversal',
        parent: 'Graphs',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Breadth First Search (BFS)</h1>
            <p className="mb-4">
              BFS traverses the graph level by level. It uses a <strong>Queue</strong> data structure.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: BFS Concept
// 1. Enqueue start node & mark visited.
// 2. While queue not empty:
//    a. Dequeue node u.
//    b. For all neighbors v of u:
//       If v not visited, mark visited & enqueue.`} 
            />
          </>
        )
      },
      {
        id: 'dsa-graph-dfs',
        title: 'DFS Traversal',
        parent: 'Graphs',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Depth First Search (DFS)</h1>
            <p className="mb-4">
              DFS explores as deep as possible along each branch before backtracking. It uses a <strong>Stack</strong> or Recursion.
            </p>
          </>
        )
      },

      // --- Hashing ---
      {
        id: 'dsa-hashing',
        title: 'Hashing',
        parent: 'Hashing',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Hashing</h1>
            <p className="mb-4">
              <strong>Hashing</strong> maps data of arbitrary size to fixed-size values. It allows O(1) average time complexity for search, insert, and delete.
            </p>
            <CodeBlock 
              language="cpp" 
              code={`#include <unordered_map>
using namespace std;

int main() {
    // CodeAlpha: Hash Map
    unordered_map<string, int> map;
    map["CodeAlpha"] = 1;
    map["Intern"] = 2;
    
    cout << map["CodeAlpha"];
    return 0;
}`} 
            />
          </>
        )
      }
    ]
  },
  {
    id: 'algo',
    title: 'Algorithms',
    icon: <Cpu size={24} />,
    color: 'text-orange-600 bg-orange-50',
    description: 'Learn Sorting, Searching, Dynamic Programming.',
    topics: [
      {
        id: 'sorting-bubble',
        title: 'Bubble Sort',
        parent: 'Sorting',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Bubble Sort</h1>
            <CodeBlock 
              language="cpp" 
              code={`// CodeAlpha: Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
}`} 
            />
          </>
        )
      },
      {
        id: 'sorting-merge',
        title: 'Merge Sort',
        parent: 'Sorting',
        content: (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Merge Sort</h1>
            <p className="mb-4">Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.</p>
          </>
        )
      },
      {
        id: 'searching-binary',
        title: 'Binary Search',
        parent: 'Searching',
        content: (
          <>
             <h1 className="text-3xl font-bold text-slate-900 mb-4">Binary Search</h1>
             <p className="mb-4">Efficient search algorithm for sorted arrays. O(log n).</p>
          </>
        )
      }
    ]
  }
];