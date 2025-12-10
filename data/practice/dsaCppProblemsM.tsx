import { ProblemCategory } from './types';

const treeNodeDef = `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};`;

export const DSA_CPP_PROBLEMS_M: ProblemCategory[] = [
    {
        category: "13. Dynamic Programming",
        problems: [
            {
                id: "dsa-cpp-m1",
                title: "Fibonacci (DP)",
                description: "Calculate Fibonacci numbers using dynamic programming.",
                statement: "The simple recursive solution for Fibonacci is inefficient (O(2^n)). Optimize it using Dynamic Programming (Memoization or Tabulation) to achieve O(n) time complexity.",
                inputFormat: "An integer N.",
                outputFormat: "The Nth Fibonacci number.",
                testCases: [{ input: "10", output: "55" }],
                solution: `// Memoization (Top-Down)
#include <vector>
int fib_memo(int n, std::vector<int>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
}

// Tabulation (Bottom-Up)
int fib_tab(int n) {
    if (n <= 1) return n;
    std::vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`,
                explanation: "Dynamic Programming solves problems by breaking them into overlapping subproblems and storing the results to avoid re-computation. **Memoization** is a top-down approach where we store the results of function calls in a map or array. **Tabulation** is a bottom-up approach where we build the solution from the smallest subproblems up to the final answer."
            },
            {
                id: "dsa-cpp-m2",
                title: "Coin Change — Minimum Coins",
                description: "Find the minimum number of coins to make a change.",
                statement: "Given a set of coin denominations and a total amount, find the minimum number of coins required to make up that amount. If it's not possible, return -1.",
                inputFormat: "Amount, N, then N coin denominations.",
                outputFormat: "The minimum number of coins.",
                testCases: [{ input: "11\n3\n1 2 5", output: "3" }],
                solution: `#include <vector>
#include <algorithm>

int coinChange(std::vector<int>& coins, int amount) {
    std::vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = std::min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
                explanation: "This is a bottom-up DP solution. We create a `dp` array where `dp[i]` stores the minimum coins needed to make amount `i`. We initialize it with a large value. For each amount `i`, we try every coin. If a coin is usable, we check if making change with that coin (`dp[i-coin] + 1`) gives a better result than the current `dp[i]`."
            },
            {
                id: "dsa-cpp-m3",
                title: "Coin Change — Total Ways",
                description: "Find the total number of ways to make a change.",
                statement: "Given a set of coin denominations and a total amount, find the number of combinations that make up that amount. You have an infinite supply of each coin.",
                inputFormat: "Amount, N, then N coin denominations.",
                outputFormat: "The total number of ways.",
                testCases: [{ input: "5\n3\n1 2 5", output: "4" }],
                solution: `#include <vector>

int change(int amount, std::vector<int>& coins) {
    std::vector<int> dp(amount + 1, 0);
    dp[0] = 1;
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
}`,
                explanation: "This is a classic 'unbounded knapsack' type problem. `dp[i]` will store the number of ways to make change for amount `i`. We iterate through each coin. For each coin, we update the `dp` array. The number of ways to make amount `i` using the current coin is `dp[i] += dp[i - coin]`."
            },
            {
                id: "dsa-cpp-m4",
                title: "0/1 Knapsack",
                description: "Solve the 0/1 Knapsack problem.",
                statement: "Given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value. You cannot break an item (0/1 property).",
                inputFormat: "W, N, then N values and N weights.",
                outputFormat: "The maximum value.",
                testCases: [{ input: "50\n3\n60 100 120\n10 20 30", output: "220" }],
                solution: `#include <vector>
#include <algorithm>

int knapsack(int W, std::vector<int>& wt, std::vector<int>& val, int n) {
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i - 1] <= w) {
                dp[i][w] = std::max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}`,
                explanation: "We use a 2D DP table where `dp[i][w]` stores the maximum value achievable with the first `i` items and a knapsack capacity of `w`. For each item `i`, we have two choices: 1. Include the item: the value is `val[i] + dp[i-1][w-wt[i]]`. 2. Exclude the item: the value is `dp[i-1][w]`. We take the maximum of these two choices."
            },
            {
                id: "dsa-cpp-m5",
                title: "Longest Increasing Subsequence (LIS)",
                description: "Find the length of the longest increasing subsequence.",
                statement: "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
                inputFormat: "N, then N integers.",
                outputFormat: "The length of the LIS.",
                testCases: [{ input: "8\n10 9 2 5 3 7 101 18", output: "4" }],
                solution: `#include <vector>
#include <algorithm>

int lengthOfLIS(std::vector<int>& nums) {
    if (nums.empty()) return 0;
    std::vector<int> tails;
    for (int num : nums) {
        auto it = std::lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) {
            tails.push_back(num);
        } else {
            *it = num;
        }
    }
    return tails.size();
}`,
                explanation: "This is an efficient O(n log n) solution. We maintain a `tails` array, where `tails[i]` is the smallest tail of all increasing subsequences of length `i+1`. When processing a new number, we use binary search (`lower_bound`) to find the smallest tail that is greater than or equal to our number. We then replace that tail with our number, potentially creating a new subsequence of the same length but with a smaller tail, which allows for future growth."
            },
            {
                id: "dsa-cpp-m6",
                title: "Longest Common Subsequence (LCS)",
                description: "Find the length of the longest common subsequence.",
                statement: "Given two strings, find the length of the longest common subsequence. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
                inputFormat: "Two strings.",
                outputFormat: "The length of the LCS.",
                testCases: [{ input: "abcde\nace", output: "3" }],
                solution: `#include <string>
#include <vector>
#include <algorithm>

int longestCommonSubsequence(std::string text1, std::string text2) {
    int n = text1.length(), m = text2.length();
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m];
}`,
                explanation: "We use a 2D DP table where `dp[i][j]` is the length of the LCS for `text1[0..i-1]` and `text2[0..j-1]`. If the characters `text1[i-1]` and `text2[j-1]` are the same, the LCS is `1 + dp[i-1][j-1]`. If not, it's the maximum of the LCS of the two subproblems: `dp[i-1][j]` (excluding the character from text1) and `dp[i][j-1]` (excluding the character from text2)."
            },
            {
                id: "dsa-cpp-m7",
                title: "Edit Distance",
                description: "Find the minimum operations to convert one string to another.",
                statement: "Given two strings, `word1` and `word2`, return the minimum number of operations (insert, delete, or replace a character) required to convert `word1` to `word2`.",
                inputFormat: "Two strings.",
                outputFormat: "The minimum edit distance.",
                testCases: [{ input: "horse\nros", output: "3" }],
                solution: `#include <string>
#include <vector>
#include <algorithm>

int minDistance(std::string word1, std::string word2) {
    int n = word1.length(), m = word2.length();
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(m + 1, 0));
    
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + std::min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]});
            }
        }
    }
    return dp[n][m];
}`,
                explanation: "This is a classic DP problem. `dp[i][j]` stores the edit distance between the first `i` characters of `word1` and the first `j` characters of `word2`. If the characters match, the distance is the same as the subproblem without them. If they don't match, we have three choices: replace (`dp[i-1][j-1]`), delete (`dp[i-1][j]`), or insert (`dp[i][j-1]`). We take the minimum of these three options and add 1."
            },
            {
                id: "dsa-cpp-m8",
                title: "Matrix Chain Multiplication",
                description: "Find the most efficient way to multiply a chain of matrices.",
                statement: "Given a sequence of matrices, find the most efficient way (minimum number of scalar multiplications) to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide the sequence of the multiplications.",
                inputFormat: "An array of dimensions `p[]`, where matrix Ai has dimension p[i-1] x p[i].",
                outputFormat: "The minimum number of multiplications.",
                testCases: [{ input: "4\n10 30 5 60", output: "4500" }],
                solution: `// This is a complex DP problem
#include <vector>
#include <climits>

int matrixChainOrder(std::vector<int>& p) {
    int n = p.size() - 1;
    std::vector<std::vector<int>> dp(n, std::vector<int>(n, 0));

    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[0][n - 1];
}`,
                explanation: "The solution uses bottom-up DP. `dp[i][j]` stores the minimum cost to multiply matrices from `i` to `j`. We solve for chains of length 2, then 3, and so on. To calculate `dp[i][j]`, we try every possible split point `k` between `i` and `j`. The cost for a split `k` is the cost of multiplying the left part `(i..k)`, the right part `(k+1..j)`, plus the cost of multiplying the two resulting matrices."
            }
        ]
    }
];