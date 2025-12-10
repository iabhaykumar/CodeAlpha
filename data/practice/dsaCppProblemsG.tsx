import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_G: ProblemCategory[] = [
    {
        category: "7. Recursion",
        problems: [
            {
                id: "dsa-cpp-g1",
                title: "Factorial",
                description: "Calculate factorial using recursion.",
                statement: "Write a recursive function to find the factorial of a non-negative integer N.",
                inputFormat: "A single integer N.",
                outputFormat: "The factorial of N.",
                testCases: [{ input: "5", output: "120" }],
                solution: `#include <iostream>

long long factorial(int n) {
    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) {
        return 1;
    }
    // Recursive step: n * factorial of (n-1)
    return n * factorial(n - 1);
}

int main() {
    int num;
    std::cin >> num;
    std::cout << factorial(num);
    return 0;
}`,
                explanation: "Recursion involves a function calling itself. A recursive function must have a **base case** to stop the recursion. Here, the base case is `n <= 1`. The **recursive step** breaks the problem down into a smaller version of itself: `factorial(n)` is defined in terms of `factorial(n-1)`. The results are multiplied up the call stack."
            },
            {
                id: "dsa-cpp-g2",
                title: "Fibonacci",
                description: "Find the Nth Fibonacci number using recursion.",
                statement: "Write a recursive function to find the Nth term of the Fibonacci sequence. The sequence starts with 0 and 1.",
                inputFormat: "A single integer N.",
                outputFormat: "The Nth Fibonacci number.",
                testCases: [{ input: "9", output: "34" }],
                solution: `#include <iostream>

int fibonacci(int n) {
    // Base cases for the first two numbers
    if (n <= 1) {
        return n;
    }
    // Recursive step
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int num;
    std::cin >> num;
    std::cout << fibonacci(num);
    return 0;
}`,
                explanation: "The Fibonacci sequence has two base cases: `fib(0) = 0` and `fib(1) = 1`. The recursive step defines any other Fibonacci number as the sum of the two preceding ones. Note that this simple recursive solution is very inefficient (O(2^n)) due to repeated calculations and is often used to introduce dynamic programming."
            },
            {
                id: "dsa-cpp-g3",
                title: "Tower of Hanoi",
                description: "Solve the classic Tower of Hanoi puzzle.",
                statement: "The Tower of Hanoi is a mathematical puzzle. It consists of three rods and a number of disks of different sizes. The objective is to move the entire stack to another rod, obeying the following simple rules: 1. Only one disk can be moved at a time. 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack. 3. No disk may be placed on top of a smaller disk.",
                inputFormat: "An integer N for the number of disks.",
                outputFormat: "The sequence of moves.",
                testCases: [{ input: "3", output: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C" }],
                solution: `#include <iostream>

void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        std::cout << "Move disk 1 from " << from_rod << " to " << to_rod << std::endl;
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    std::cout << "Move disk " << n << " from " << from_rod << " to " << to_rod << std::endl;
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

int main() {
    int n;
    std::cin >> n;
    towerOfHanoi(n, 'A', 'C', 'B'); // A, B, C are rod names
    return 0;
}`,
                explanation: "This is a classic recursion problem. The logic to move N disks from a source rod to a destination rod is broken down into three steps: 1. Recursively move N-1 disks from the source to the auxiliary rod. 2. Move the largest disk (disk N) from the source to the destination. 3. Recursively move the N-1 disks from the auxiliary rod to the destination."
            },
            {
                id: "dsa-cpp-g4",
                title: "Generate All Subsets (Power Set)",
                description: "Generate all possible subsets of a given set.",
                statement: "Given a set of distinct integers, `nums`, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
                inputFormat: "N, then N distinct integers.",
                outputFormat: "All subsets.",
                testCases: [{ input: "3\n1 2 3", output: "[] \n[1] \n[2] \n[1 2] \n[3] \n[1 3] \n[2 3] \n[1 2 3] \n" }],
                solution: `#include <iostream>
#include <vector>

void solve(std::vector<int>& nums, std::vector<int>& output, int index, std::vector<std::vector<int>>& ans) {
    if (index >= nums.size()) {
        ans.push_back(output);
        return;
    }
    
    // Exclude the current element
    solve(nums, output, index + 1, ans);
    
    // Include the current element
    output.push_back(nums[index]);
    solve(nums, output, index + 1, ans);
    output.pop_back(); // Backtrack
}

int main() {
    std::vector<int> nums = {1, 2, 3};
    std::vector<std::vector<int>> ans;
    std::vector<int> output;
    solve(nums, output, 0, ans);
    // Print logic for ans
    return 0;
}`,
                explanation: "This solution uses a recursive approach. For each element in the input set, we have two choices: either include it in the current subset or exclude it. The recursion explores both possibilities. The base case is when we have considered all elements (`index >= nums.size()`). The `output.pop_back()` step is the crucial 'backtracking' step, allowing the recursion to explore the 'exclude' path after returning from the 'include' path."
            },
            {
                id: "dsa-cpp-g5",
                title: "Generate All Permutations",
                description: "Generate all permutations of a string or array.",
                statement: "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
                inputFormat: "N, then N distinct integers.",
                outputFormat: "All permutations.",
                testCases: [{ input: "3\n1 2 3", output: "[1,2,3]\n[1,3,2]\n[2,1,3]\n[2,3,1]\n[3,1,2]\n[3,2,1]" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

void solve(std::vector<int>& nums, int index, std::vector<std::vector<int>>& ans) {
    if (index >= nums.size()) {
        ans.push_back(nums);
        return;
    }
    
    for (int j = index; j < nums.size(); j++) {
        std::swap(nums[index], nums[j]);
        solve(nums, index + 1, ans);
        std::swap(nums[index], nums[j]); // Backtrack
    }
}

int main() {
    std::vector<int> nums = {1, 2, 3};
    std::vector<std::vector<int>> ans;
    solve(nums, 0, ans);
    // Print logic for ans
    return 0;
}`,
                explanation: "This recursive solution generates permutations by swapping elements. For each position `index`, it iterates through the rest of the array (from `index` to the end). It swaps the element at `index` with the element at `j`, then makes a recursive call to generate permutations for the rest of the array (`index + 1`). After the recursive call returns, it swaps the elements back (backtracking) to restore the array for the next iteration of the loop."
            }
        ]
    }
];
