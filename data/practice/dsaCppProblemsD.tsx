import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_D: ProblemCategory[] = [
    {
        category: "4. Linked List",
        problems: [
            {
                id: "dsa-cpp-d1",
                title: "Reverse Linked List (Iterative)",
                description: "Reverse a singly linked list iteratively.",
                statement: "Given the head of a singly linked list, reverse the list and return the new head.",
                inputFormat: "A series of integers representing the linked list nodes.",
                outputFormat: "The reversed list.",
                testCases: [{ input: "1 -> 2 -> 3 -> 4 -> NULL", output: "4 -> 3 -> 2 -> 1 -> NULL" }],
                solution: `#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* current = head;
        ListNode* next = nullptr;
        
        while (current != nullptr) {
            next = current->next; // Store next
            current->next = prev; // Reverse current node's pointer
            prev = current;       // Move pointers one position ahead
            current = next;
        }
        return prev; // prev is the new head
    }
};`,
                explanation: "The iterative solution uses three pointers: `prev`, `current`, and `next`. We iterate through the list, and for each `current` node, we reverse its `next` pointer to point to `prev`. Then, we move all three pointers one step forward. The new head of the reversed list will be the last node of the original list, which is stored in `prev`."
            },
            {
                id: "dsa-cpp-d2",
                title: "Reverse Linked List (Recursive)",
                description: "Reverse a singly linked list recursively.",
                statement: "Given the head of a singly linked list, reverse the list using recursion and return the new head.",
                inputFormat: "A series of integers representing the linked list nodes.",
                outputFormat: "The reversed list.",
                testCases: [{ input: "1 -> 2 -> 3 -> NULL", output: "3 -> 2 -> 1 -> NULL" }],
                solution: `#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Base case: if head is null or only one node, it's already reversed
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        // Recursively reverse the rest of the list
        ListNode* newHead = reverseList(head->next);
        
        // head is now the second to last node of the original list
        // its next node is the last node (the new head)
        head->next->next = head;
        head->next = nullptr; // Make current node the new tail
        
        return newHead;
    }
};`,
                explanation: "The recursive approach works by solving the subproblem of reversing the rest of the list (`head->next`). The base case is an empty or single-node list. After the recursive call returns the `newHead`, we are at the second-to-last node of the original list. We then reverse the pointer of the last node to point back to the current node (`head`) and set the current node's `next` to `nullptr`."
            },
            {
                id: "dsa-cpp-d3",
                title: "Detect Cycle (Floyd’s Algorithm)",
                description: "Detect if a linked list has a cycle.",
                statement: "Given a linked list, determine if it has a cycle in it. Use Floyd's Tortoise and Hare algorithm.",
                inputFormat: "A linked list.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "1 -> 2 -> 3 -> 4 -> 2 (cycle)", output: "Yes" }],
                solution: `#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head->next == nullptr) {
            return false;
        }
        
        ListNode *slow = head;
        ListNode *fast = head->next;
        
        while (slow != fast) {
            if (fast == nullptr || fast->next == nullptr) {
                return false; // Reached the end, no cycle
            }
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return true; // Pointers met, cycle detected
    }
};`,
                explanation: "Floyd's Tortoise and Hare algorithm uses two pointers. The 'slow' pointer moves one step at a time, and the 'fast' pointer moves two steps at a time. If there is a cycle, the fast pointer will eventually lap the slow pointer, and they will meet. If there is no cycle, the fast pointer will reach the end of the list (`nullptr`)."
            },
            {
                id: "dsa-cpp-d4",
                title: "Remove Cycle",
                description: "Remove a cycle from a linked list.",
                statement: "If a cycle is detected in a linked list, write a function to remove it, making it a proper list ending in `NULL`.",
                inputFormat: "A linked list which may have a cycle.",
                outputFormat: "The list with the cycle removed.",
                testCases: [{ input: "1 -> 2 -> 3 -> 4 -> 2", output: "1 -> 2 -> 3 -> 4 -> NULL" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    void removeCycle(ListNode *head) {
        // ... (Floyd's algorithm to find the meeting point) ...
        ListNode *slow = head, *fast = head;
        // find meeting point first
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) break;
        }
        if(slow != fast) return; // No cycle
        
        // Move one pointer to the head, keep other at meeting point.
        slow = head;
        while (slow->next != fast->next) {
            slow = slow->next;
            fast = fast->next;
        }
        
        // The node before the cycle start is 'fast'.
        fast->next = nullptr;
    }
};`,
                explanation: "After finding the meeting point with Floyd's algorithm, move one pointer (`slow`) back to the head. Keep the other (`fast`) at the meeting point. Now, move both pointers one step at a time. The point where they meet again is the start of the loop. To remove the cycle, we need to find the node right before the start of the loop and set its `next` pointer to `nullptr`."
            },
            {
                id: "dsa-cpp-d5",
                title: "Middle of Linked List",
                description: "Find the middle node of a linked list.",
                statement: "Given a non-empty, singly linked list with head node `head`, return a middle node of the linked list. If there are two middle nodes, return the second middle node.",
                inputFormat: "A linked list.",
                outputFormat: "The value of the middle node.",
                testCases: [{ input: "1 -> 2 -> 3 -> 4 -> 5 -> NULL", output: "3" }, { input: "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL", output: "4" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode *slow = head;
        ListNode *fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
};`,
                explanation: "This problem is perfectly solved using the Tortoise and Hare (slow and fast pointer) approach. The slow pointer moves one step, and the fast pointer moves two steps. By the time the fast pointer reaches the end of the list, the slow pointer will be exactly at the middle."
            },
            {
                id: "dsa-cpp-d6",
                title: "Merge Two Sorted Lists",
                description: "Merge two sorted linked lists into one.",
                statement: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
                inputFormat: "Two sorted linked lists.",
                outputFormat: "A single merged and sorted linked list.",
                testCases: [{ input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* tail = &dummy;
        
        while (l1 != nullptr && l2 != nullptr) {
            if (l1->val < l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }
        
        tail->next = (l1 != nullptr) ? l1 : l2;
        
        return dummy.next;
    }
};`,
                explanation: "We use a `dummy` node to simplify the logic of building the new list. A `tail` pointer keeps track of the end of our merged list. In a loop, we compare the heads of `l1` and `l2` and append the smaller one to our `tail`. After the loop, one of the lists might still have elements left, so we append the remainder of that list to the end."
            },
            {
                id: "dsa-cpp-d7",
                title: "Add 1 to a Number Represented by Linked List",
                description: "Add 1 to a number represented as a linked list.",
                statement: "A number is represented by a linked list where each node contains a single digit. The head of the list represents the most significant digit. Add 1 to this number.",
                inputFormat: "A linked list representing a number.",
                outputFormat: "A new linked list representing the incremented number.",
                testCases: [{ input: "1 -> 2 -> 3", output: "1 -> 2 -> 4" }, { input: "9 -> 9 -> 9", output: "1 -> 0 -> 0 -> 0" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode* plusOne(ListNode* head) {
        // 1. Reverse the list
        head = reverseList(head);
        
        ListNode* current = head;
        int carry = 1;
        
        while (current != nullptr && carry > 0) {
            int sum = current->val + carry;
            current->val = sum % 10;
            carry = sum / 10;
            if (current->next == nullptr && carry > 0) {
                current->next = new ListNode(carry);
                carry = 0;
            }
            current = current->next;
        }
        
        // 3. Reverse the list back
        return reverseList(head);
    }
    // Helper function to reverse the list
    ListNode* reverseList(ListNode* head) { /* ... */ }
};`,
                explanation: "Adding 1 is easiest from the least significant digit (the end of the list). So, the standard approach is: 1. Reverse the linked list. 2. Traverse the reversed list, perform the addition with a `carry` variable just like grade-school addition. If a new node is needed at the end (e.g., for 999+1), create it. 3. Reverse the list back to its original order."
            },
            {
                id: "dsa-cpp-d8",
                title: "Remove Nth Node from End",
                description: "Remove the Nth node from the end of the list.",
                statement: "Given a linked list, remove the n-th node from the end of the list and return its head.",
                inputFormat: "A linked list and an integer N.",
                outputFormat: "The modified linked list.",
                testCases: [{ input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode dummy(0);
        dummy.next = head;
        ListNode* fast = &dummy;
        ListNode* slow = &dummy;
        
        // Move fast pointer n+1 steps ahead
        for (int i = 0; i <= n; ++i) {
            fast = fast->next;
        }
        
        // Move both pointers until fast reaches the end
        while (fast != nullptr) {
            slow = slow->next;
            fast = fast->next;
        }
        
        // slow is now the node *before* the one to be deleted
        ListNode* toDelete = slow->next;
        slow->next = slow->next->next;
        delete toDelete;
        
        return dummy.next;
    }
};`,
                explanation: "This is a classic two-pointer problem. We create a gap of `n` nodes between a `slow` and a `fast` pointer. We first move the `fast` pointer `n+1` steps. Then, we move both `slow` and `fast` pointers forward one step at a time. When the `fast` pointer reaches the end of the list, the `slow` pointer will be positioned just before the node that needs to be deleted."
            },
            {
                id: "dsa-cpp-d9",
                title: "Intersection of Two Linked Lists",
                description: "Find the node where two linked lists intersect.",
                statement: "Write a program to find the node at which the intersection of two singly linked lists begins.",
                inputFormat: "Two linked lists.",
                outputFormat: "The value of the intersecting node, or 0 if no intersection.",
                testCases: [{ input: "", output: "" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *p1 = headA;
        ListNode *p2 = headB;

        while(p1 != p2){
            p1 = (p1 == nullptr) ? headB : p1->next;
            p2 = (p2 == nullptr) ? headA : p2->next;
        }
        return p1;
    }
};`,
                explanation: "This is a very clever two-pointer solution. Pointers `p1` and `p2` traverse their respective lists. When one reaches the end, it is switched to the head of the *other* list. If the lists have an intersection, the pointers will meet at the intersection node. If they don't intersect, they will both become `nullptr` at the same time after traversing both lists (length A + length B)."
            },
            {
                id: "dsa-cpp-d10",
                title: "Pairwise Swap Nodes",
                description: "Swap every two adjacent nodes.",
                statement: "Given a linked list, swap every two adjacent nodes and return its head. You may not modify the values in the list's nodes, only nodes themselves may be changed.",
                inputFormat: "A linked list.",
                outputFormat: "The modified linked list.",
                testCases: [{ input: "[1,2,3,4]", output: "[2,1,4,3]" }],
                solution: `// ... ListNode definition ...
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }
        
        ListNode* newHead = head->next;
        
        ListNode* remaining = newHead->next;
        newHead->next = head;
        head->next = swapPairs(remaining);
        
        return newHead;
    }
};`,
                explanation: "This problem is elegantly solved with recursion. The base case is a list with 0 or 1 nodes. For the recursive step: we first save the new head (`head->next`). We then recursively call `swapPairs` on the rest of the list (`head->next->next`). After the recursion returns, we perform the local swap: the second node's `next` points to the first node, and the first node's `next` points to the head of the swapped 'rest of the list'."
            }
        ]
    }
];