import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_A: ProblemCategory[] = [
  {
    category: "1. Arrays",
    problems: [
      {
        id: "dsa-cpp-a1",
        title: "Find Maximum Element",
        description: "Find the largest element in an array.",
        statement: "Given an array of integers, find the largest element.",
        inputFormat: "First line: an integer N (size). Second line: N integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "5\n1 8 7 56 90", output: "90" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    if (n == 0) {
        std::cout << "Array is empty";
        return 0;
    }
    
    std::cout << *std::max_element(arr.begin(), arr.end());
    
    return 0;
}`,
        explanation: "The `std::max_element` function from the `<algorithm>` header is the most efficient way to find the largest element. It returns an iterator to the largest element in the given range. We use the `*` operator to dereference the iterator and get the value."
      },
      {
        id: "dsa-cpp-a2",
        title: "Find Minimum Element",
        description: "Find the smallest element in an array.",
        statement: "Given an array of integers, find the smallest element.",
        inputFormat: "First line: N. Second line: N integers.",
        outputFormat: "The smallest integer.",
        testCases: [{ input: "5\n56 8 90 7 1", output: "1" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    if (n == 0) {
        std::cout << "Array is empty";
        return 0;
    }

    std::cout << *std::min_element(arr.begin(), arr.end());
    
    return 0;
}`,
        explanation: "Similar to finding the maximum, `std::min_element` from `<algorithm>` returns an iterator to the smallest element in a range. Dereferencing it with `*` gives the value."
      },
      {
        id: "dsa-cpp-a3",
        title: "Second Largest Element",
        description: "Find the second largest unique element.",
        statement: "Find the second largest unique element in an array. If it doesn't exist, print a message.",
        inputFormat: "First line: N. Second line: N integers.",
        outputFormat: "The second largest integer.",
        testCases: [{ input: "5\n12 35 1 10 34", output: "34" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    std::set<int> s(arr.begin(), arr.end());

    if (s.size() < 2) {
        std::cout << "No second largest element";
    } else {
        auto it = s.end();
        --it; // Points to largest
        --it; // Points to second largest
        std::cout << *it;
    }
    return 0;
}`,
        explanation: "A `std::set` automatically stores unique elements in sorted order. By inserting all array elements into a set, duplicates are removed and the elements are sorted. The second largest element is then simply the second element from the end of the set."
      },
      {
        id: "dsa-cpp-a4",
        title: "Check if Array is Sorted",
        description: "Check if an array is sorted in ascending order.",
        statement: "Given an array, check if it's sorted in non-decreasing order.",
        inputFormat: "First line: N. Second line: N integers.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "5\n10 20 30 40 50", output: "Yes" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    if (std::is_sorted(arr.begin(), arr.end())) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
        explanation: "`std::is_sorted` from the `<algorithm>` header is a convenient function that returns `true` if the elements in the given range are sorted in non-decreasing order, and `false` otherwise."
      },
      {
        id: "dsa-cpp-a5",
        title: "Reverse an Array",
        description: "Reverse the elements of an array.",
        statement: "Reverse an array in-place.",
        inputFormat: "First line: N. Second line: N integers.",
        outputFormat: "The reversed array elements.",
        testCases: [{ input: "5\n1 2 3 4 5", output: "5 4 3 2 1 " }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    std::reverse(arr.begin(), arr.end());

    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
        explanation: "`std::reverse` from `<algorithm>` reverses the order of elements in a range `[first, last)`. It modifies the container in-place."
      },
      {
        id: "dsa-cpp-a6",
        title: "Rotate Array Left by K",
        description: "Rotate an array to the left by K positions.",
        statement: "Rotate an array to the left by `K` positions.",
        inputFormat: "N, K, then N integers.",
        outputFormat: "The rotated array.",
        testCases: [{ input: "5 2\n1 2 3 4 5", output: "3 4 5 1 2 " }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, k;
    std::cin >> n >> k;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    k = k % n; // Handle k > n
    if (k > 0) {
        std::rotate(arr.begin(), arr.begin() + k, arr.end());
    }

    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
        explanation: "`std::rotate(first, middle, last)` performs a left rotation on a range such that the element at `middle` becomes the new first element. We calculate the `middle` iterator as `arr.begin() + k`."
      },
      {
        id: "dsa-cpp-a7",
        title: "Rotate Array Right by K",
        description: "Rotate an array to the right by K positions.",
        statement: "Rotate an array to the right by `K` positions.",
        inputFormat: "N, K, then N integers.",
        outputFormat: "The rotated array.",
        testCases: [{ input: "5 2\n1 2 3 4 5", output: "4 5 1 2 3 " }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, k;
    std::cin >> n >> k;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    k = k % n;
    if (k > 0) {
        // A right rotation by k is a left rotation by n-k
        std::rotate(arr.begin(), arr.begin() + n - k, arr.end());
    }
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
        explanation: "A right rotation by `k` positions is equivalent to a left rotation by `n-k` positions. We can reuse the `std::rotate` function with a different `middle` iterator: `arr.begin() + n - k`."
      },
      {
        id: "dsa-cpp-a8",
        title: "Leaders in Array",
        description: "Find all leader elements in an array.",
        statement: "An element is a leader if it is greater than all the elements to its right. The rightmost element is always a leader. Find all leaders.",
        inputFormat: "N, then N integers.",
        outputFormat: "The leader elements.",
        testCases: [{ input: "6\n16 17 4 3 5 2", output: "2 5 17 " }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    std::vector<int> leaders;
    int max_from_right = -1;
    
    for (int i = n - 1; i >= 0; --i) {
        if (arr[i] > max_from_right) {
            leaders.push_back(arr[i]);
            max_from_right = arr[i];
        }
    }
    
    std::reverse(leaders.begin(), leaders.end());
    for(int x : leaders) {
        std::cout << x << " ";
    }
    return 0;
}`,
        explanation: "The most efficient way is to scan the array from right to left. We maintain a variable `max_from_right`. If the current element is greater than `max_from_right`, it's a leader. Then, we update `max_from_right` to the current element's value."
      },
      {
        id: "dsa-cpp-a9",
        title: "Move All Zeros to End",
        description: "Move zeros while maintaining order of non-zeros.",
        statement: "Given an array, move all 0's to the end while maintaining the relative order of the non-zero elements. This must be done in-place.",
        inputFormat: "N, then N integers.",
        outputFormat: "The modified array.",
        testCases: [{ input: "5\n0 1 0 3 12", output: "1 3 12 0 0 " }],
        solution: `#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    int write_ptr = 0;
    for (int read_ptr = 0; read_ptr < n; ++read_ptr) {
        if (arr[read_ptr] != 0) {
            arr[write_ptr] = arr[read_ptr];
            write_ptr++;
        }
    }

    for (int i = write_ptr; i < n; ++i) {
        arr[i] = 0;
    }

    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
        explanation: "This is a two-pointer approach. We use a `write_ptr` to keep track of the position for the next non-zero element. We iterate through the array with a `read_ptr`. If we find a non-zero element, we place it at the `write_ptr`'s position and increment `write_ptr`. After this first pass, all non-zero elements are at the beginning in their original relative order. The second pass simply fills the rest of the array with zeros."
      },
      {
        id: "dsa-cpp-a10",
        title: "Kadane’s Algorithm — Max Subarray Sum",
        description: "Find the contiguous subarray with the largest sum.",
        statement: "Find the sum of the contiguous subarray within a one-dimensional array of numbers that has the largest sum.",
        inputFormat: "N, then N integers (can be negative).",
        outputFormat: "The maximum subarray sum.",
        testCases: [{ input: "8\n-2 -3 4 -1 -2 1 5 -3", output: "7" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    int max_so_far = -2147483648; // INT_MIN
    int max_ending_here = 0;

    for (int x : arr) {
        max_ending_here += x;
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
        if (max_ending_here < 0) {
            max_ending_here = 0;
        }
    }
    std::cout << max_so_far;
    return 0;
}`,
        explanation: "Kadane's algorithm is an efficient O(n) dynamic programming approach. It maintains two variables: `max_so_far` (the global maximum) and `max_ending_here` (the maximum sum of a subarray ending at the current position). The key insight is that if `max_ending_here` becomes negative, we reset it to 0, effectively starting a new subarray."
      },
      {
        id: "dsa-cpp-a11",
        title: "Stock Buy & Sell (Max Profit 1 Transaction)",
        description: "Find the max profit from one buy/sell.",
        statement: "You are given an array where `prices[i]` is the price of a given stock on the ith day. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share), design an algorithm to find the maximum profit.",
        inputFormat: "N, then N integers representing prices.",
        outputFormat: "The maximum profit.",
        testCases: [{ input: "6\n7 1 5 3 6 4", output: "5" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> prices(n);
    for(int i=0; i<n; ++i) std::cin >> prices[i];

    int min_price = 2147483647; // INT_MAX
    int max_profit = 0;
    
    for (int price : prices) {
        if (price < min_price) {
            min_price = price;
        } else if (price - min_price > max_profit) {
            max_profit = price - min_price;
        }
    }
    
    std::cout << max_profit;
    return 0;
}`,
        explanation: "This problem can be solved in a single pass. We iterate through the prices, keeping track of the `min_price` seen so far. At each day, we calculate the potential profit if we were to sell on that day (`price - min_price`). We then update our `max_profit` if this potential profit is higher."
      },
      {
        id: "dsa-cpp-a12",
        title: "Stock Buy & Sell (Multiple Transactions)",
        description: "Find the max profit from multiple transactions.",
        statement: "You are given an array of prices. You may complete as many transactions as you like (i.e., buy one and sell one share multiple times). Find the maximum profit. You may not engage in multiple transactions at the same time (you must sell before you buy again).",
        inputFormat: "N, then N integers representing prices.",
        outputFormat: "The maximum total profit.",
        testCases: [{ input: "6\n7 1 5 3 6 4", output: "7" }],
        solution: `#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> prices(n);
    for(int i=0; i<n; ++i) std::cin >> prices[i];

    int max_profit = 0;
    for (int i = 1; i < n; ++i) {
        if (prices[i] > prices[i-1]) {
            max_profit += prices[i] - prices[i-1];
        }
    }
    
    std::cout << max_profit;
    return 0;
}`,
        explanation: "The key insight for this problem is that we can simply add up all the profits from every upward trend. If the price goes up from day `i-1` to day `i`, we 'buy' on `i-1` and 'sell' on `i`. This is equivalent to buying at the start of a rise and selling at the end (e.g., buying at 1 and selling at 5 is the same as (2-1) + (3-2) + (4-3) + (5-4))."
      },
      {
        id: "dsa-cpp-a13",
        title: "Find Missing Number (1 to N)",
        description: "Find the missing number in a range.",
        statement: "You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates. Find the missing integer.",
        inputFormat: "N, then N-1 integers.",
        outputFormat: "The missing number.",
        testCases: [{ input: "5\n1 2 4 5", output: "3" }],
        solution: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n - 1);
    long long arr_sum = 0;
    for(int i=0; i<n-1; ++i) {
        std::cin >> arr[i];
        arr_sum += arr[i];
    }
    
    long long total_sum = (long long)n * (n + 1) / 2;
    
    std::cout << total_sum - arr_sum;
    return 0;
}`,
        explanation: "The sum of the first `n` natural numbers is `n*(n+1)/2`. We calculate this expected sum. Then, we calculate the actual sum of the elements in the given array. The difference between the expected and actual sum will be the missing number."
      },
      {
        id: "dsa-cpp-a14",
        title: "Two Sum",
        description: "Find a pair that sums to a target.",
        statement: "Given an array of integers and a target value, find two numbers such that they add up to the target. Return their indices.",
        inputFormat: "N, Target, then N integers.",
        outputFormat: "The two 0-based indices.",
        testCases: [{ input: "4 9\n2 7 11 15", output: "0 1" }],
        solution: `#include <iostream>
#include <vector>
#include <unordered_map>

int main() {
    int n, target;
    std::cin >> n >> target;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    std::unordered_map<int, int> map;
    for (int i = 0; i < n; ++i) {
        int complement = target - arr[i];
        if (map.count(complement)) {
            std::cout << map[complement] << " " << i;
            return 0;
        }
        map[arr[i]] = i;
    }
    return 0;
}`,
        explanation: "This O(n) solution uses a hash map (`std::unordered_map`). We iterate through the array. For each element `arr[i]`, we calculate its `complement` (the number we need to find to reach the target). We check if this complement already exists in our map. If it does, we've found our pair. If not, we add the current element and its index to the map for future lookups."
      },
      {
        id: "dsa-cpp-a15",
        title: "Triplet Sum (3-Sum)",
        description: "Find a triplet that sums to zero.",
        statement: "Given an array of integers, find all unique triplets in the array which gives the sum of zero.",
        inputFormat: "N, then N integers.",
        outputFormat: "All unique triplets, each on a new line.",
        testCases: [{ input: "6\n-1 0 1 2 -1 -4", output: "-1 -1 2 \n-1 0 1 \n" }],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    std::sort(arr.begin(), arr.end());

    for (int i = 0; i < n - 2; ++i) {
        if (i > 0 && arr[i] == arr[i-1]) continue; // Skip duplicates
        int left = i + 1, right = n - 1;
        int target = -arr[i];
        while (left < right) {
            int sum = arr[left] + arr[right];
            if (sum == target) {
                std::cout << arr[i] << " " << arr[left] << " " << arr[right] << std::endl;
                // Skip duplicates
                while (left < right && arr[left] == arr[left+1]) left++;
                while (left < right && arr[right] == arr[right-1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return 0;
}`,
        explanation: "The most efficient approach is to first sort the array. Then, iterate through the array with one pointer `i`. For each `arr[i]`, the problem reduces to finding a 'Two Sum' in the rest of the array with a target of `-arr[i]`. We can solve this subproblem efficiently in O(n) time using the two-pointer technique on the sorted subarray. Care must be taken to skip duplicate values to ensure the output triplets are unique."
      }
    ]
  }
];