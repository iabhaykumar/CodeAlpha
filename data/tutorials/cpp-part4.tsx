
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const CPP_PART4_TOPICS: Topic[] = [
  // 5. Standard Template Library (STL)
  {
    id: 'cpp-stl-intro',
    title: 'Intro to STL',
    parent: '5. STL',
    content: (
      <>
        <p className="mb-4">The Standard Template Library (STL) is a set of C++ template classes to provide common programming data structures and functions like lists, stacks, arrays, etc.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Containers:</strong> Stores data (Vector, List, Map).</li>
            <li><strong>Iterators:</strong> Used to access data.</li>
            <li><strong>Algorithms:</strong> Procedures to process data (Sort, Search).</li>
        </ul>
      </>
    )
  },
  {
    id: 'cpp-stl-vectors',
    title: 'Vectors (Dynamic Arrays)',
    parent: '5. STL',
    content: (
      <>
        <p className="mb-4">Vectors are same as dynamic arrays with the ability to resize automatically when an element is inserted or deleted.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
#include <vector>
using namespace std;

// Helper function to print vectors
void printVector(const vector<int>& v) {
    for(int i : v) {
        cout << i << " ";
    }
    cout << endl;
}

int main() {
    vector<int> v;
    
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    
    cout << "Vector content: ";
    printVector(v);
    
    cout << "Size: " << v.size();
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-stl-list',
    title: 'Lists (Doubly Linked List)',
    parent: '5. STL',
    content: (
      <>
        <p className="mb-4">In C++ STL, `std::list` implements a <strong>Doubly Linked List</strong>. It allows constant time insertion and deletion from anywhere in the sequence.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
#include <list>
using namespace std;

void printList(const list<int>& lst) {
    for (int x : lst) {
        cout << x << " -> ";
    }
    cout << "NULL" << endl;
}

int main() {
    list<int> myList;
    
    myList.push_back(10);
    myList.push_front(5);
    myList.push_back(20);
    
    printList(myList); // 5 -> 10 -> 20 -> NULL
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-custom-linked-list',
    title: 'Custom Singly Linked List (OOP)',
    parent: '5. STL',
    content: (
      <>
        <p className="mb-4">While STL provides `std::list`, understanding how to build a Singly Linked List using Classes is crucial for interviews.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    
    Node(int val) : data(val), next(NULL) {}
};

class LinkedList {
    Node* head;
public:
    LinkedList() : head(NULL) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }
    
    void display() {
        Node* temp = head;
        while(temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
};

int main() {
    LinkedList list;
    list.insert(10);
    list.insert(20);
    list.display(); 
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-stl-map',
    title: 'Maps (Dictionary)',
    parent: '5. STL',
    content: (
      <>
        <p className="mb-4">Maps are associative containers that store elements in a mapped fashion. Each element has a key value and a mapped value.</p>
        <CodeBlock language="cpp" code={`#include <iostream>
#include <map>
using namespace std;

void findScore(map<string, int>& scores, string name) {
    if (scores.count(name)) {
        cout << name << "'s score: " << scores[name] << endl;
    } else {
        cout << name << " not found." << endl;
    }
}

int main() {
    map<string, int> scores;
    
    scores["Alice"] = 90;
    scores["Bob"] = 85;
    
    findScore(scores, "Alice");
    findScore(scores, "Charlie");
    
    return 0;
}`} />
      </>
    )
  },

  // 6. Advanced Memory Management
  {
    id: 'cpp-memory-new-delete',
    title: 'Memory Management (new/delete)',
    parent: '6. Memory Management',
    content: (
      <>
        <p className="mb-4">Dynamic memory allocation allows you to allocate memory at runtime using the <code>new</code> operator. However, C++ does not have a garbage collector, so you must manually release this memory using <code>delete</code> to prevent <strong>Memory Leaks</strong>.</p>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Using new and delete</h3>
        <p className="mb-4">Use <code>new</code> to allocate memory for a single variable, and <code>delete</code> to free it.</p>
        <CodeBlock language="cpp" code={`int* ptr = new int; // Allocate memory for an int
*ptr = 10;          // Assign value
cout << *ptr << endl;
delete ptr;         // Deallocate memory`} />

        <h3 className="text-xl font-bold mt-4 mb-2">Arrays with new[] and delete[]</h3>
        <p className="mb-4">When allocating arrays, you must use <code>delete[]</code> to free the memory properly.</p>
        <CodeBlock language="cpp" code={`int size;
cout << "Enter array size: ";
cin >> size;

int* arr = new int[size]; // Allocate array
for(int i=0; i<size; i++) {
    arr[i] = i * 10;
}

// ... usage ...

delete[] arr; // Deallocate array`} />

        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <h4 className="font-bold text-red-900 mb-1">Memory Leak Warning</h4>
            <p className="text-red-800 text-sm">
                If you lose the pointer to dynamically allocated memory without deleting it, that memory remains occupied until your program terminates. This is a memory leak. In long-running applications (like servers or games), this will crash the system.
            </p>
        </div>
      </>
    )
  }
];
