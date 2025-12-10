import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_F: ProblemCategory[] = [
    {
        category: "6. Queue",
        problems: [
            {
                id: "dsa-cpp-f1",
                title: "Implement Queue Using Array",
                description: "Build a queue with a fixed-size array.",
                statement: "Implement a linear Queue class using a fixed-size array. It should support `enqueue`, `dequeue`, `front`, `rear`, and `isEmpty` operations. Handle queue full and empty conditions.",
                inputFormat: "A series of queue operations.",
                outputFormat: "Output from `dequeue` or `front`/`rear`, or error messages.",
                testCases: [
                  { input: "enqueue(10), enqueue(20), dequeue()", output: "Dequeued 10" }
                ],
                solution: `#include <iostream>
#define MAX 100

class Queue {
    int front, rear, size;
    int arr[MAX];
public:
    Queue() {
        front = 0;
        rear = -1;
        size = 0;
    }

    bool isFull() { return (size == MAX); }
    bool isEmpty() { return (size == 0); }

    void enqueue(int item) {
        if (isFull()) {
            std::cout << "Queue is full\\n";
            return;
        }
        rear = (rear + 1) % MAX;
        arr[rear] = item;
        size++;
        std::cout << item << " enqueued to queue\\n";
    }

    int dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty\\n";
            return -1;
        }
        int item = arr[front];
        front = (front + 1) % MAX;
        size--;
        return item;
    }

    int getFront() {
        if(isEmpty()) return -1;
        return arr[front];
    }
};

int main() {
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    std::cout << q.dequeue() << " dequeued from queue\\n";
    return 0;
}`,
                explanation: "This implementation uses an array with two pointers, `front` and `rear`. `enqueue` adds an element at the `rear`, and `dequeue` removes an element from the `front`. Using the modulus operator `% MAX` allows the pointers to wrap around, making it a circular queue, which is a more efficient use of the array space than a simple linear queue."
            },
            {
                id: "dsa-cpp-f2",
                title: "Implement Queue Using Linked List",
                description: "Build a queue with a dynamic linked list.",
                statement: "Implement a Queue class using a singly linked list. It should have `enqueue` and `dequeue` operations and should not have a fixed size limit.",
                inputFormat: "A series of queue operations.",
                outputFormat: "Output from operations.",
                testCases: [
                    { input: "enqueue(10), enqueue(20), dequeue()", output: "Dequeued 10" }
                ],
                solution: `#include <iostream>

struct Node {
    int data;
    Node* next;
};

class Queue {
    Node *front, *rear;
public:
    Queue() { front = rear = nullptr; }

    void enqueue(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = nullptr;
        if (rear == nullptr) {
            front = rear = newNode;
            return;
        }
        rear->next = newNode;
        rear = newNode;
    }

    int dequeue() {
        if (front == nullptr) {
            std::cout << "Queue is empty";
            return -1;
        }
        Node* temp = front;
        int dequeued_data = front->data;
        front = front->next;
        if (front == nullptr) {
            rear = nullptr;
        }
        delete temp;
        return dequeued_data;
    }
};

int main() {
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    std::cout << q.dequeue() << " dequeued from queue\\n";
    return 0;
}`,
                explanation: "Using a linked list makes the queue dynamic. We maintain two pointers: `front` (head of the list) and `rear` (tail of the list). `enqueue` adds a new node at the `rear` (O(1)). `dequeue` removes a node from the `front` (O(1))."
            },
            {
                id: "dsa-cpp-f3",
                title: "Circular Queue",
                description: "Implement a circular queue using an array.",
                statement: "Implement a circular queue using an array, which is an efficient way to handle queue operations in a fixed-size buffer by reusing space.",
                inputFormat: "Operations on the queue.",
                outputFormat: "Results of operations.",
                testCases: [{ input: "", output: "" }],
                solution: `// The solution for "Implement Queue Using Array" already implements a circular queue.
// The key logic is using the modulus operator for the pointers:
// rear = (rear + 1) % MAX;
// front = (front + 1) % MAX;
// This makes the pointers "wrap around" from the end of the array to the beginning.`,
                explanation: "A circular queue avoids the issue of a linear array queue where space at the beginning becomes unusable after dequeue operations. By using the modulus operator, the `front` and `rear` pointers can wrap around to the start of the array, effectively using the array as a circular buffer."
            },
            {
                id: "dsa-cpp-f4",
                title: "Implement Stack Using Queues",
                description: "Simulate stack behavior using one or two queues.",
                statement: "Implement a LIFO (Last-In-First-Out) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).",
                inputFormat: "Stack operations.",
                outputFormat: "Results of stack operations.",
                testCases: [{ input: "push(1), push(2), pop()", output: "2" }],
                solution: `#include <iostream>
#include <queue>

class MyStack {
    std::queue<int> q1, q2;
public:
    void push(int x) {
        q2.push(x);
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        std::swap(q1, q2);
    }

    int pop() {
        if (q1.empty()) return -1;
        int top = q1.front();
        q1.pop();
        return top;
    }

    int top() {
        if (q1.empty()) return -1;
        return q1.front();
    }
};

int main() {
    MyStack s;
    s.push(1);
    s.push(2);
    std::cout << s.pop(); // Should be 2
    return 0;
}`,
                explanation: "This method makes the `push` operation costly. When a new element is pushed, it's added to `q2`. Then, all elements from `q1` are moved to `q2`. Finally, the queues are swapped. This ensures the newest element is always at the front of `q1`, so `pop` and `top` are simple O(1) operations."
            },
            {
                id: "dsa-cpp-f5",
                title: "Implement Queue Using Stacks",
                description: "Simulate queue behavior using two stacks.",
                statement: "Implement a FIFO (First-In-First-Out) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).",
                inputFormat: "Queue operations.",
                outputFormat: "Results of queue operations.",
                testCases: [{ input: "push(1), push(2), pop()", output: "1" }],
                solution: `#include <iostream>
#include <stack>

class MyQueue {
    std::stack<int> s1, s2;
public:
    void push(int x) {
        s1.push(x);
    }

    int pop() {
        peek(); // Ensure s2 has the oldest elements
        if (s2.empty()) return -1;
        int top = s2.top();
        s2.pop();
        return top;
    }

    int peek() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
        if (s2.empty()) return -1;
        return s2.top();
    }
};

int main() {
    MyQueue q;
    q.push(1);
    q.push(2);
    std::cout << q.pop(); // Should be 1
    return 0;
}`,
                explanation: "This is the amortized O(1) solution. We use two stacks, `s1` (input) and `s2` (output). The `push` operation is always O(1) - just push to `s1`. The `pop` and `peek` operations are more complex. If `s2` is empty, we transfer all elements from `s1` to `s2`. This reverses the order, placing the oldest elements on top of `s2`. Then we can simply pop from `s2`. This transfer only happens occasionally, so the amortized cost is O(1)."
            }
        ]
    }
];
