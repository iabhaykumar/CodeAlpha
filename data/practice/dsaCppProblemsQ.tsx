import { ProblemCategory } from './types';

const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_Q: ProblemCategory[] = [
    {
        category: "17. Bit Manipulation",
        problems: [
            {
                id: "dsa-cpp-q1",
                title: "Count Set Bits",
                description: "Count the number of set bits (1s) in an integer.",
                statement: "Write an efficient program to count the number of 1s in the binary representation of an integer.",
                inputFormat: "A single integer.",
                outputFormat: "The count of set bits.",
                testCases: [{ input: "13", output: "3" }],
                solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    
    // In C++20, there is a built-in function
    // #include <bit>
    // std::cout << std::popcount(n);

    // Brian Kernighan's Algorithm
    int count = 0;
    while (n > 0) {
        // This operation clears the least significant set bit
        n &= (n - 1);
        count++;
    }
    std::cout << count;
    return 0;
}`,
                explanation: "This uses Brian Kernighan's algorithm. The expression `n & (n - 1)` magically unsets the rightmost set bit (the least significant '1'). The loop continues until `n` becomes 0. The number of times the loop runs is exactly equal to the number of set bits, making it very efficient."
            },
            {
                id: "dsa-cpp-q2",
                title: "Find Single Non-Duplicate Number",
                description: "Find the element that appears only once in an array.",
                statement: "Given a non-empty array of integers where every element appears twice except for one, find that single one.",
                inputFormat: "N, then N integers.",
                outputFormat: "The single non-duplicate number.",
                testCases: [{ input: "5\n4 1 2 1 2", output: "4" }],
                solution: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    int n;
    std::cin >> n;
    
    int result = 0;
    for (int i = 0; i < n; ++i) {
        int num;
        std::cin >> num;
        result ^= num;
    }
    
    std::cout << result;
    return 0;
}`,
                explanation: "This problem can be solved efficiently using the bitwise XOR (`^`) operator. The key properties of XOR are: `x ^ x = 0` and `x ^ 0 = x`. When you XOR all the numbers in the array, all the pairs will cancel each other out (`a ^ a = 0`), leaving only the single, non-duplicated number."
            },
            {
                id: "dsa-cpp-q3",
                title: "Check Power of Two",
                description: "Check if a number is a power of two using bitwise operators.",
                statement: "Given an integer, write a function to determine if it is a power of two.",
                inputFormat: "A single integer.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "16", output: "Yes" }, { input: "18", output: "No" }],
                solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    
    if (n > 0 && (n & (n - 1)) == 0) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
                explanation: "This solution uses a clever bitwise trick. A power of two in binary is a `1` followed by all `0`s (e.g., 8 is `1000`). Subtracting 1 from it results in a number with all `0`s followed by all `1`s (e.g., 7 is `0111`). Performing a bitwise AND (`&`) between these two numbers will always result in 0 if, and only if, the original number was a power of two. We also check `n > 0` since the logic would incorrectly work for 0."
            }
        ]
    }
];
