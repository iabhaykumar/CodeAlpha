import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_E: ProblemCategory[] = [
    {
        category: "5. Stack",
        problems: [
            {
                id: "dsa-cpp-e1",
                title: "Implement Stack Using Array",
                description: "Build a stack with a fixed-size array.",
                statement: "Implement a Stack class using a fixed-size array. It should support `push`, `pop`, `peek`, and `isEmpty` operations. Handle stack overflow and underflow conditions.",
                inputFormat: "A series of stack operations.",
                outputFormat: "Output from `pop` or `peek`, or error messages.",
                testCases: [
                  { input: "push(10), push(20), pop()", output: "Popped 20" },
                  { input: "push(10), pop(), pop()", output: "Popped 10\nStack Underflow" }
                ],
                solution: `#include <iostream>
#define MAX 100

class Stack {
    int top;
public:
    int arr[MAX]; // Maximum size of Stack

    Stack() { top = -1; }
    
    bool push(int x) {
        if (top >= (MAX - 1)) {
            std::cout << "Stack Overflow";
            return false;
        } else {
            arr[++top] = x;
            std::cout << x << " pushed into stack\\n";
            return true;
        }
    }

    int pop() {
        if (top < 0) {
            std::cout << "Stack Underflow";
            return 0;
        } else {
            int x = arr[top--];
            return x;
        }
    }

    int peek() {
        if (top < 0) {
            std::cout << "Stack is Empty";
            return 0;
        } else {
            return arr[top];
        }
    }

    bool isEmpty() {
        return (top < 0);
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    std::cout << s.pop() << " Popped from stack\\n";
    return 0;
}`,
                explanation: "This implementation uses an array and an integer `top` to keep track of the last inserted element. `push` increments `top` and adds the element. `pop` returns the element at `top` and decrements it. We check for boundary conditions `top >= MAX-1` (overflow) and `top < 0` (underflow)."
            },
            {
                id: "dsa-cpp-e2",
                title: "Implement Stack Using Linked List",
                description: "Build a stack with a dynamic linked list.",
                statement: "Implement a Stack class using a singly linked list. It should support `push`, `pop`, `peek`, and `isEmpty` operations and should not have a fixed size limit.",
                inputFormat: "A series of stack operations.",
                outputFormat: "Output from operations.",
                testCases: [
                    { input: "push(10), push(20), peek()", output: "Top element is 20" }
                ],
                solution: `#include <iostream>

struct Node {
    int data;
    Node* next;
};

class Stack {
    Node* top;
public:
    Stack() { top = nullptr; }

    void push(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = top;
        top = newNode;
    }

    int pop() {
        if (top == nullptr) {
            std::cout << "Stack Underflow";
            return -1;
        }
        Node* temp = top;
        int popped_data = top->data;
        top = top->next;
        delete temp;
        return popped_data;
    }

    int peek() {
        if (top == nullptr) {
            std::cout << "Stack is Empty";
            return -1;
        }
        return top->data;
    }

    bool isEmpty() {
        return top == nullptr;
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    std::cout << "Top element is " << s.peek() << std::endl;
    return 0;
}`,
                explanation: "Using a linked list makes the stack dynamic. The `top` of the stack is the `head` of the linked list. A `push` operation is equivalent to inserting a node at the beginning of the list, and `pop` is equivalent to deleting the head node. Both are O(1) operations."
            },
            {
                id: "dsa-cpp-e3",
                title: "Valid Parentheses",
                description: "Check for balanced brackets in an expression.",
                statement: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
                inputFormat: "A string of brackets.",
                outputFormat: "'true' or 'false'.",
                testCases: [
                    { input: "()[]{}", output: "true" },
                    { input: "(]", output: "false" }
                ],
                solution: `#include <iostream>
#include <stack>
#include <string>

class Solution {
public:
    bool isValid(std::string s) {
        std::stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                if (c == ')' && st.top() != '(') return false;
                if (c == '}' && st.top() != '{') return false;
                if (c == ']' && st.top() != '[') return false;
                st.pop();
            }
        }
        return st.empty();
    }
};

int main() {
    Solution sol;
    std::cout << std::boolalpha << sol.isValid("()[]{}");
    return 0;
}`,
                explanation: "This is a classic stack problem. When we see an opening bracket, we push it onto the stack. When we see a closing bracket, we check if the stack is empty or if the top of the stack is the corresponding opening bracket. If it's not a match, the string is invalid. If we reach the end of the string and the stack is empty, the string is valid."
            },
            {
                id: "dsa-cpp-e4",
                title: "Next Greater Element",
                description: "Find the next greater element for each element in an array.",
                statement: "Given an array, print the Next Greater Element (NGE) for every element. The NGE for an element `x` is the first greater element on the right side of `x` in the array. If no greater element exists, consider the NGE as -1.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "N integers representing the NGE for each element.",
                testCases: [
                    { input: "4\n4 5 2 25", output: "5 25 25 -1 " }
                ],
                solution: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    std::vector<int> result(n, -1);
    std::stack<int> s;

    for (int i = 0; i < n; ++i) {
        while (!s.empty() && arr[s.top()] < arr[i]) {
            result[s.top()] = arr[i];
            s.pop();
        }
        s.push(i);
    }

    for (int x : result) {
        std::cout << x << " ";
    }
    return 0;
}`,
                explanation: "This efficient O(n) solution uses a stack. We iterate through the array. The stack stores indices of elements for which we are still looking for a Next Greater Element. When we encounter a new element `arr[i]`, we pop elements from the stack whose value is less than `arr[i]` and set their NGE to `arr[i]`. Then, we push the current index `i` onto the stack."
            },
            {
                id: "dsa-cpp-e5",
                title: "Reverse a Stack Using Recursion",
                description: "Reverse a stack without using any other data structure.",
                statement: "Write a program to reverse a stack using recursion. You are not allowed to use any loops or extra data structures like another stack, array, etc. You can only use the stack's standard functions.",
                inputFormat: "N, then N integers to push onto a stack.",
                outputFormat: "The reversed stack elements.",
                testCases: [
                    { input: "4\n1 2 3 4", output: "1 2 3 4 " }
                ],
                solution: `#include <iostream>
#include <stack>

// Helper function to insert an element at the bottom of a stack
void insertAtBottom(std::stack<int>& s, int item) {
    if (s.empty()) {
        s.push(item);
        return;
    }
    int temp = s.top();
    s.pop();
    insertAtBottom(s, item);
    s.push(temp);
}

// Main recursive function to reverse the stack
void reverseStack(std::stack<int>& s) {
    if (s.empty()) {
        return;
    }
    int temp = s.top();
    s.pop();
    reverseStack(s);
    insertAtBottom(s, temp);
}

int main() {
    std::stack<int> s;
    s.push(1); s.push(2); s.push(3); s.push(4);
    
    reverseStack(s);
    
    while(!s.empty()){
        std::cout << s.top() << " ";
        s.pop();
    }
    return 0;
}`,
                explanation: "This is a classic recursion problem solved with two recursive functions. The `reverseStack` function pops the top element and recursively calls itself to reverse the rest of the stack. After the rest is reversed, it calls `insertAtBottom` to place the popped element at the very bottom of the now-reversed substack. This process effectively reverses the entire stack."
            }
        ]
    }
];
