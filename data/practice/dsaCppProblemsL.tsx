import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_L: ProblemCategory[] = [
    {
        category: "12. Heap / Priority Queue",
        problems: [
            {
                id: "dsa-cpp-l1",
                title: "Implement Max-Heap",
                description: "Implement a Max-Heap data structure from scratch.",
                statement: "Implement a Max-Heap from scratch using an array. It should support `insert` and `extractMax` operations. In a max-heap, the parent node is always greater than or equal to its children.",
                inputFormat: "A series of heap operations.",
                outputFormat: "The results of `extractMax`.",
                testCases: [{ input: "", output: "" }],
                solution: `// A full implementation is lengthy. The core logic for heapify is shown.
// In C++, it's highly recommended to use std::priority_queue.

#include <iostream>
#include <vector>
#include <algorithm>

void maxHeapify(std::vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        maxHeapify(arr, n, largest);
    }
}

// To build a max-heap from an array, call maxHeapify on all non-leaf nodes.
// for (int i = n / 2 - 1; i >= 0; i--)
//     maxHeapify(arr, n, i);
`,
                explanation: "A heap is a complete binary tree, which can be efficiently represented by an array. The `maxHeapify` function is the core of heap operations. It takes a node index `i` and ensures that the subtree rooted at `i` satisfies the max-heap property. It does this by comparing the node with its children and swapping with the larger child if necessary, then recursively calling itself on the affected subtree."
            },
            {
                id: "dsa-cpp-l2",
                title: "Implement Min-Heap",
                description: "Implement a Min-Heap data structure from scratch.",
                statement: "Implement a Min-Heap from scratch using an array. In a min-heap, the parent node is always less than or equal to its children.",
                inputFormat: "A series of heap operations.",
                outputFormat: "The results of `extractMin`.",
                testCases: [{ input: "", output: "" }],
                solution: `// The logic is the same as maxHeapify, but with comparisons flipped.
void minHeapify(std::vector<int>& arr, int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        std::swap(arr[i], arr[smallest]);
        minHeapify(arr, n, smallest);
    }
}`,
                explanation: "The logic for a min-heap is identical to a max-heap, except the comparisons are reversed. We always find the `smallest` among the parent and its children and swap if the parent is not the smallest."
            },
            {
                id: "dsa-cpp-l3",
                title: "K Largest Elements",
                description: "Find the K largest elements in an array.",
                statement: "Given an unsorted array of integers, find the K largest elements in it.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The K largest elements.",
                testCases: [{ input: "5 2\n12 5 787 1 23", output: "787 23 " }],
                solution: `#include <iostream>
#include <vector>
#include <queue>

int main() {
    int n, k;
    std::cin >> n >> k;
    
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    
    for (int i = 0; i < n; ++i) {
        int num;
        std::cin >> num;
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    while (!minHeap.empty()) {
        std::cout << minHeap.top() << " ";
        minHeap.pop();
    }
    return 0;
}`,
                explanation: "This is an efficient O(n log k) solution. We use a min-heap of size `k`. We iterate through the array. For each element, we push it onto the heap. If the heap's size exceeds `k`, we pop the smallest element. At the end of the loop, the min-heap will contain the `k` largest elements from the entire array."
            },
            {
                id: "dsa-cpp-l4",
                title: "K Closest Numbers to X",
                description: "Find the K closest numbers to a given value X.",
                statement: "Given a sorted array, a value X, and an integer K, find the K closest elements to X in the array.",
                inputFormat: "N, K, X, then N sorted integers.",
                outputFormat: "The K closest elements.",
                testCases: [{ input: "5 4 35\n12 16 22 30 35", output: "16 22 30 35 " }],
                solution: `#include <iostream>
#include <vector>
#include <queue>
#include <cmath>

int main() {
    int n, k, x;
    std::cin >> n >> k >> x;
    
    using pii = std::pair<int, int>;
    std::priority_queue<pii> maxHeap; // pair: {absolute_difference, number}

    for (int i = 0; i < n; ++i) {
        int num;
        std::cin >> num;
        maxHeap.push({std::abs(num - x), num});
        if (maxHeap.size() > k) {
            maxHeap.pop();
        }
    }
    
    while (!maxHeap.empty()) {
        std::cout << maxHeap.top().second << " ";
        maxHeap.pop();
    }
    return 0;
}`,
                explanation: "This problem can be solved using a max-heap of size `k`. We iterate through the array and push pairs of `{absolute_difference, number}` onto the heap. If the heap's size exceeds `k`, we pop the element with the largest difference (the one furthest from X). At the end, the heap contains the `k` elements with the smallest differences, which are the closest numbers to X."
            },
            {
                id: "dsa-cpp-l5",
                title: "Merge K Sorted Lists",
                description: "Merge K sorted linked lists into one sorted list.",
                statement: "You are given an array of `k` linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
                inputFormat: "K, then K sorted linked lists.",
                outputFormat: "The single merged and sorted linked list.",
                testCases: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }],
                solution: `// struct ListNode { ... };
#include <vector>
#include <queue>

class Solution {
public:
    ListNode* mergeKLists(std::vector<ListNode*>& lists) {
        auto cmp = [](ListNode* a, ListNode* b) {
            return a->val > b->val;
        };
        std::priority_queue<ListNode*, std::vector<ListNode*>, decltype(cmp)> minHeap(cmp);
        
        for (ListNode* node : lists) {
            if (node) {
                minHeap.push(node);
            }
        }
        
        ListNode dummy(0);
        ListNode* tail = &dummy;
        
        while (!minHeap.empty()) {
            ListNode* smallest = minHeap.top();
            minHeap.pop();
            tail->next = smallest;
            tail = tail->next;
            if (smallest->next) {
                minHeap.push(smallest->next);
            }
        }
        return dummy.next;
    }
};`,
                explanation: "This is a classic k-way merge problem. A min-heap (priority queue) is the perfect data structure. We initialize the heap with the first node from each of the `k` lists. Then, in a loop, we extract the smallest node from the heap, add it to our result list, and if that node has a `next` element, we add that `next` element back into the heap. This ensures the heap always contains the next smallest candidates from across all lists."
            }
        ]
    }
];
