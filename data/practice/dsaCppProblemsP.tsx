import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_P: ProblemCategory[] = [
    {
        category: "16. Hashing",
        problems: [
            {
                id: "dsa-cpp-p1",
                title: "Frequency of Elements",
                description: "Count the frequency of all elements in an array.",
                statement: "Given an array of integers, count the frequency of each element and print it.",
                inputFormat: "N, then N integers.",
                outputFormat: "Each unique element and its count.",
                testCases: [{ input: "7\n1 2 1 3 2 1 4", output: "1: 3\n2: 2\n3: 1\n4: 1\n" }],
                solution: `#include <iostream>
#include <vector>
#include <unordered_map>

int main() {
    int n;
    std::cin >> n;
    
    std::unordered_map<int, int> freq;
    for (int i = 0; i < n; ++i) {
        int num;
        std::cin >> num;
        freq[num]++;
    }
    
    for (auto const& [key, val] : freq) {
        std::cout << key << ": " << val << std::endl;
    }
    
    return 0;
}`,
                explanation: "A hash map (`std::unordered_map`) is the perfect data structure for counting frequencies. We iterate through the input array. For each number, we use it as a key in the map. The `++` operator conveniently initializes the count to 0 if the key doesn't exist and then increments it. This gives us an O(n) solution on average."
            },
            {
                id: "dsa-cpp-p2",
                title: "Intersection of Two Arrays",
                description: "Find the common elements between two arrays.",
                statement: "Given two arrays, compute their intersection. Each element in the result should be unique.",
                inputFormat: "N1, N1 integers, N2, N2 integers.",
                outputFormat: "The intersection elements.",
                testCases: [{ input: "4\n1 2 2 1\n2\n2 2", output: "2 " }],
                solution: `#include <iostream>
#include <vector>
#include <unordered_set>

int main() {
    int n1, n2;
    std::cin >> n1;
    std::unordered_set<int> set1;
    for(int i=0; i<n1; ++i) {
        int num;
        std::cin >> num;
        set1.insert(num);
    }
    
    std::cin >> n2;
    std::unordered_set<int> resultSet;
    for(int i=0; i<n2; ++i) {
        int num;
        std::cin >> num;
        if (set1.count(num)) {
            resultSet.insert(num);
        }
    }
    
    for(int x : resultSet) {
        std::cout << x << " ";
    }
    return 0;
}`,
                explanation: "To find the intersection efficiently, we can use a hash set (`std::unordered_set`). We first insert all elements of the first array into the set, which automatically handles duplicates. Then, we iterate through the second array. For each element, we check if it exists in the set (an O(1) average time operation). If it does, it's part of the intersection."
            },
            {
                id: "dsa-cpp-p3",
                title: "Subarray with Zero Sum",
                description: "Check if a subarray with sum 0 exists.",
                statement: "Given an array of positive and negative numbers, find if there is a subarray (of size at least one) with a sum of 0.",
                inputFormat: "N, then N integers.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "5\n4 2 -3 1 6", output: "Yes" }],
                solution: `#include <iostream>
#include <vector>
#include <unordered_set>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    std::unordered_set<long long> prefix_sums;
    long long current_sum = 0;
    
    for (int x : arr) {
        current_sum += x;
        
        // If current_sum is 0, or we've seen this prefix sum before, a zero-sum subarray exists
        if (current_sum == 0 || prefix_sums.count(current_sum)) {
            std::cout << "Yes";
            return 0;
        }
        
        prefix_sums.insert(current_sum);
    }
    
    std::cout << "No";
    return 0;
}`,
                explanation: "The key idea is to use prefix sums. We iterate through the array, calculating the sum of elements from the start up to the current position. We store these prefix sums in a hash set. If we encounter a prefix sum that we have already seen before, it means the sum of the elements between the two occurrences is 0. A special case is if the prefix sum itself becomes 0."
            },
            {
                id: "dsa-cpp-p4",
                title: "Longest Consecutive Sequence",
                description: "Find the length of the longest consecutive elements sequence.",
                statement: "Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Your algorithm should run in O(n) complexity.",
                inputFormat: "N, then N integers.",
                outputFormat: "The length of the longest consecutive sequence.",
                testCases: [{ input: "6\n100 4 200 1 3 2", output: "4" }],
                solution: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::unordered_set<int> s;
    for (int i=0; i<n; ++i) {
        int num;
        std::cin >> num;
        s.insert(num);
    }

    int longest_streak = 0;
    for (int num : s) {
        // If it's the start of a sequence (no element one less than it)
        if (!s.count(num - 1)) {
            int current_num = num;
            int current_streak = 1;
            
            while (s.count(current_num + 1)) {
                current_num++;
                current_streak++;
            }
            
            longest_streak = std::max(longest_streak, current_streak);
        }
    }
    std::cout << longest_streak;
    return 0;
}`,
                explanation: "To achieve O(n) complexity, we first put all numbers into a hash set for O(1) lookups. Then, we iterate through the numbers in the set. For each number, we check if it is the start of a sequence (i.e., if `num-1` is not in the set). If it is a starting point, we then loop forward to find how long that consecutive sequence is. This ensures we only build each sequence once, from its starting point, leading to an overall O(n) solution."
            }
        ]
    }
];