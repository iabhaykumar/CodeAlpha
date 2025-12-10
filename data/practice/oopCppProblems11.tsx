import React from 'react';
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_11: ProblemCategory[] = [
  {
    category: "11.0 Templates / Generics",
    problems: [
      {
        id: "oop-cpp-11-1",
        title: "Template class for Array",
        description: "Create a generic array class.",
        statement: "Create a template class `Array` that can store a fixed-size array of any data type. It should support basic operations like `get()` and `set()`.",
        inputFormat: "No input.",
        outputFormat: "Demonstration with int and double arrays.",
        testCases: [{ input: "", output: "Int array [1] = 20\nDouble array [0] = 3.14" }],
        solution: `#include <iostream>

template <typename T, int size>
class Array {
private:
    T arr[size];
public:
    T get(int index) {
        return arr[index];
    }
    void set(int index, T value) {
        arr[index] = value;
    }
};

int main() {
    Array<int, 5> intArray;
    intArray.set(1, 20);
    std::cout << "Int array [1] = " << intArray.get(1) << std::endl;

    Array<double, 3> doubleArray;
    doubleArray.set(0, 3.14);
    std::cout << "Double array [0] = " << doubleArray.get(0) << std::endl;

    return 0;
}`,
        explanation: "**Templates** allow you to write generic code. Here, `template <typename T, int size>` makes the `Array` class generic over a data type `T` and an integer `size`. When we create an object like `Array<int, 5>`, the compiler generates a specific version of the class for `T=int` and `size=5`."
      },
      {
        id: "oop-cpp-11-2",
        title: "Template function for swap",
        description: "Create a generic swap function.",
        statement: "Write a generic `swap` function using a template that can swap two variables of any data type.",
        inputFormat: "No input.",
        outputFormat: "Swapped values for integers and characters.",
        testCases: [{ input: "", output: "Swapped ints: 20 10\nSwapped chars: B A" }],
        solution: `#include <iostream>

template <typename T>
void genericSwap(T &a, T &b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    genericSwap(x, y);
    std::cout << "Swapped ints: " << x << " " << y << std::endl;

    char c1 = 'A', c2 = 'B';
    genericSwap(c1, c2);
    std::cout << "Swapped chars: " << c1 << " " << c2 << std::endl;
    
    return 0;
}`,
        explanation: "A **function template** defines a generic function. The `typename T` is a placeholder for a data type. When you call `genericSwap(x, y)` with integers, the compiler automatically deduces that `T` is `int` and generates an integer version of the swap function. This is called template argument deduction."
      },
      {
        id: "oop-cpp-11-3",
        title: "Template Stack",
        description: "Create a generic Stack class.",
        statement: "Convert a basic array-based Stack implementation into a generic template class that can hold any data type.",
        inputFormat: "No input.",
        outputFormat: "Demonstration with int and string stacks.",
        testCases: [{ input: "", output: "Popped int: 20\nPopped string: World" }],
        solution: `#include <iostream>
#include <string>
#define MAX 10

template <typename T>
class Stack {
private:
    T arr[MAX];
    int top;
public:
    Stack() : top(-1) {}
    void push(T val) { if (top < MAX - 1) arr[++top] = val; }
    T pop() { if (top > -1) return arr[top--]; return T(); }
};

int main() {
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    std::cout << "Popped int: " << intStack.pop() << std::endl;
    
    Stack<std::string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    std::cout << "Popped string: " << stringStack.pop() << std::endl;
    return 0;
}`,
        explanation: "By adding `template <typename T>` before the class definition and replacing `int` with `T` for the data members and method parameters/return types, we make the `Stack` class generic. It can now be used to create a stack of integers, strings, or any other data type."
      },
      {
        id: "oop-cpp-11-4",
        title: "Template Queue",
        description: "Create a generic Queue class.",
        statement: "Convert a basic array-based circular Queue implementation into a generic template class.",
        inputFormat: "No input.",
        outputFormat: "Demonstration with a character queue.",
        testCases: [{ input: "", output: "Dequeued char: A" }],
        solution: `#include <iostream>
#define MAX 5

template <class T>
class Queue {
private:
    T arr[MAX];
    int front, rear;
public:
    Queue() : front(-1), rear(-1) {}
    void enqueue(T val) { /* ... circular queue logic ... */ }
    T dequeue() { /* ... circular queue logic ... */ return T(); }
};

int main() {
    Queue<char> q;
    q.enqueue('A');
    q.enqueue('B');
    std::cout << "Dequeued char: " << q.dequeue() << std::endl;
    return 0;
}`,
        explanation: "Similar to the Stack, we make the Queue generic by using a template. The placeholder `T` is used for the array type and the data being enqueued and dequeued. The underlying circular queue logic with `front` and `rear` pointers remains the same."
      },
      {
        id: "oop-cpp-11-5",
        title: "Template Linked List",
        description: "Create a generic Linked List.",
        statement: "Implement a generic singly linked list class using templates. The `Node` struct and the `LinkedList` class should both be templates.",
        inputFormat: "No input.",
        outputFormat: "Printing an integer list.",
        testCases: [{ input: "", output: "10 -> 20 -> NULL" }],
        solution: `#include <iostream>

template <typename T>
struct Node {
    T data;
    Node* next;
};

template <typename T>
class LinkedList {
private:
    Node<T>* head;
public:
    LinkedList() : head(nullptr) {}
    void insert(T val) {
        Node<T>* newNode = new Node<T>();
        newNode->data = val;
        newNode->next = head;
        head = newNode;
    }
    void display() {
        Node<T>* temp = head;
        while(temp != nullptr) {
            std::cout << temp->data << " -> ";
            temp = temp->next;
        }
        std::cout << "NULL" << std::endl;
    }
};

int main() {
    LinkedList<int> list;
    list.insert(20);
    list.insert(10);
    list.display();
    return 0;
}`,
        explanation: "For a generic linked list, both the `Node` structure and the `LinkedList` class need to be templates. `Node<T>` can hold data of type `T`, and `LinkedList<T>` manages a list of these generic nodes."
      },
      {
        id: "oop-cpp-11-6",
        title: "Template Sorting function",
        description: "Create a generic sort function.",
        statement: "Write a generic selection sort function using a template that can sort an array of any data type that supports the `>` operator.",
        inputFormat: "No input.",
        outputFormat: "A sorted integer array.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>

template <typename T>
void selectionSort(std::vector<T>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        std::swap(arr[i], arr[min_idx]);
    }
}

int main() {
    std::vector<int> nums = {64, 25, 12, 22, 11};
    selectionSort(nums);
    // ... print vector ...
    return 0;
}`,
        explanation: "The selection sort algorithm is made generic by using a template. The function now works for any type `T` as long as that type has a defined less-than operator (`<`) for comparisons and can be swapped."
      },
      {
        id: "oop-cpp-11-7",
        title: "Function template max/min",
        description: "Create generic max/min functions.",
        statement: "Write function templates for `myMax(a, b)` and `myMin(a, b)` that work for any comparable data type.",
        inputFormat: "No input.",
        outputFormat: "Max of ints and min of strings.",
        testCases: [{ input: "", output: "Max int: 20\nMin string: apple" }],
        solution: `#include <iostream>
#include <string>

template <typename T>
T myMax(T a, T b) {
    return (a > b) ? a : b;
}

template <typename T>
T myMin(T a, T b) {
    return (a < b) ? a : b;
}

int main() {
    std::cout << "Max int: " << myMax(10, 20) << std::endl;
    std::string s1 = "apple", s2 = "banana";
    std::cout << "Min string: " << myMin(s1, s2) << std::endl;
    return 0;
}`,
        explanation: "These function templates provide generic implementations for finding the maximum and minimum of two values. They will work for any data type `T` for which the `>` and `<` operators are defined, including built-in types like `int` and library types like `std::string`."
      },
      {
        id: "oop-cpp-11-8",
        title: "Generic pair class",
        description: "Create a generic Pair class.",
        statement: "Create a template class `Pair` that can hold two values of potentially different data types.",
        inputFormat: "No input.",
        outputFormat: "A pair containing an int and a string.",
        testCases: [{ input: "", output: "Pair: (10, Hello)" }],
        solution: `#include <iostream>
#include <string>

template <typename T1, typename T2>
class Pair {
public:
    T1 first;
    T2 second;
    
    Pair(T1 f, T2 s) : first(f), second(s) {}

    void display() {
        std::cout << "(" << first << ", " << second << ")" << std::endl;
    }
};

int main() {
    Pair<int, std::string> p1(10, "Hello");
    std::cout << "Pair: ";
    p1.display();
    return 0;
}`,
        explanation: "This class template takes two type parameters, `T1` and `T2`. This allows it to store a pair of any two types, just like the standard library's `std::pair`. When creating an object, you must specify both types, e.g., `Pair<int, std::string>`."
      }
    ]
  }
];