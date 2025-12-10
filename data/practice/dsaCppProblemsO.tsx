import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_O: ProblemCategory[] = [
    {
        category: "15. Sliding Window",
        problems: [
            {
                id: "dsa-cpp-o1",
                title: "Maximum Sum Subarray of Size K",
                description: "Find the maximum sum of a subarray of a fixed size.",
                statement: "Given an array of integers and a number `k`, find the maximum sum of a subarray of size `k`.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The maximum sum.",
                testCases: [{ input: "9 3\n1 4 2 10 23 3 1 0 20", output: "39" }],
                solution: `#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

int main() {
    int n, k;
    std::cin >> n >> k;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    int window_sum = 0;
    for (int i = 0; i < k; i++) {
        window_sum += arr[i];
    }
    
    int max_sum = window_sum;
    
    for (int i = k; i < n; i++) {
        window_sum += arr[i] - arr[i - k];
        max_sum = std::max(max_sum, window_sum);
    }
    
    std::cout << max_sum;
    return 0;
}`,
                explanation: "The sliding window technique avoids re-calculating the sum for each subarray from scratch. We first calculate the sum of the initial window of size `k`. Then, we 'slide' the window one position to the right by adding the new element at the end and subtracting the element that is no longer in the window. This allows us to update the sum in O(1) time for each step, leading to an overall O(n) solution."
            },
            {
                id: "dsa-cpp-o2",
                title: "Count Occurrences of Anagrams",
                description: "Count occurrences of all anagrams of a pattern in a text.",
                statement: "Given a text and a pattern string, find the number of occurrences of all anagrams of the pattern in the text.",
                inputFormat: "Text string, then pattern string.",
                outputFormat: "The count of anagram occurrences.",
                testCases: [{ input: "forxxorfxdofr\nfor", output: "3" }],
                solution: `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string txt, pat;
    std::cin >> txt >> pat;
    
    std::vector<int> pat_freq(26, 0);
    std::vector<int> txt_freq(26, 0);
    int pat_len = pat.length();
    int txt_len = txt.length();
    
    for(char c : pat) pat_freq[c - 'a']++;
    
    int count = 0;
    for(int i = 0; i < txt_len; i++) {
        txt_freq[txt[i] - 'a']++;
        
        if(i >= pat_len) {
            txt_freq[txt[i - pat_len] - 'a']--;
        }
        
        if(i >= pat_len - 1) {
            if(pat_freq == txt_freq) {
                count++;
            }
        }
    }
    std::cout << count;
    return 0;
}`,
                explanation: "This solution uses a sliding window of the same size as the pattern. We maintain two frequency maps (arrays of size 26 for lowercase letters), one for the pattern and one for the current window in the text. As the window slides, we update the text frequency map. In each step, we compare the two frequency maps. If they are identical, we have found an anagram."
            },
            {
                id: "dsa-cpp-o3",
                title: "Longest Subarray with Sum K",
                description: "Find the longest subarray with a given sum.",
                statement: "Given an array containing positive integers, find the length of the longest subarray with a sum equal to a given number `k`.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The length of the longest subarray.",
                testCases: [{ input: "7 5\n4 1 1 1 2 3 5", output: "4" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, k;
    std::cin >> n >> k;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    int start = 0, current_sum = 0, max_len = 0;
    for (int end = 0; end < n; ++end) {
        current_sum += arr[end];
        
        while (current_sum > k) {
            current_sum -= arr[start];
            start++;
        }
        
        if (current_sum == k) {
            max_len = std::max(max_len, end - start + 1);
        }
    }
    std::cout << max_len;
    return 0;
}`,
                explanation: "This uses a variable-size sliding window. We expand the window from the right by adding elements. If the `current_sum` exceeds `k`, we shrink the window from the left by removing elements until the sum is no longer greater than `k`. When the `current_sum` is exactly `k`, we update our `max_len`."
            },
            {
                id: "dsa-cpp-o4",
                title: "Max of All Subarrays of Size K",
                description: "Find the maximum element of every subarray of size K.",
                statement: "Given an array and an integer `k`, find the maximum for each and every contiguous subarray of size `k`.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The maximums for each window.",
                testCases: [{ input: "9 3\n1 2 3 1 4 5 2 3 6", output: "3 3 4 5 5 5 6 " }],
                solution: `#include <iostream>
#include <vector>
#include <deque>

int main() {
    int n, k;
    std::cin >> n >> k;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    std::deque<int> dq; // Stores indices

    for (int i = 0; i < n; ++i) {
        // Remove elements not in window
        if (!dq.empty() && dq.front() <= i - k) {
            dq.pop_front();
        }
        // Maintain decreasing order of values in deque
        while (!dq.empty() && arr[dq.back()] < arr[i]) {
            dq.pop_back();
        }
        dq.push_back(i);
        
        // Print max for the window
        if (i >= k - 1) {
            std::cout << arr[dq.front()] << " ";
        }
    }
    return 0;
}`,
                explanation: "This O(n) solution uses a double-ended queue (deque) to maintain a 'monotonic queue'. The deque stores indices of elements, and we ensure that the values corresponding to these indices are always in decreasing order. This guarantees that the maximum element in the current window is always at the front of the deque. As the window slides, we add new elements and remove old ones, maintaining the deque's property."
            },
            {
                id: "dsa-cpp-o5",
                title: "Longest Substring with at Most K Distinct Characters",
                description: "A variable-size window problem with a constraint on unique elements.",
                statement: "Given a string, find the length of the longest substring that contains at most `k` distinct characters. (The 'Fruit Into Baskets' problem is a specific case where k=2).",
                inputFormat: "An integer K, then a string.",
                outputFormat: "The length of the longest substring.",
                testCases: [{ input: "2\naraaci", output: "4" }],
                solution: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

int main() {
    int k;
    std::string s;
    std::cin >> k >> s;

    std::unordered_map<char, int> freq;
    int start = 0, max_len = 0;

    for (int end = 0; end < s.length(); ++end) {
        freq[s[end]]++;
        
        while (freq.size() > k) {
            freq[s[start]]--;
            if (freq[s[start]] == 0) {
                freq.erase(s[start]);
            }
            start++;
        }
        
        max_len = std::max(max_len, end - start + 1);
    }
    
    std::cout << max_len;
    return 0;
}`,
                explanation: "This is another variable-size sliding window problem. We use a hash map to keep track of the frequency of characters in the current window. We expand the window from the right. If the number of distinct characters (`freq.size()`) exceeds `k`, we shrink the window from the left until the constraint is met again. In each step, we update the maximum length seen so far."
            }
        ]
    }
];