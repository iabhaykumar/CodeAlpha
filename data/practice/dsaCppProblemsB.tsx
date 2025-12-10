import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_B: ProblemCategory[] = [
    {
        category: "2. Searching & Sorting",
        problems: [
          {
            id: "dsa-cpp-b1",
            title: "Linear Search",
            description: "Find an element by checking one by one.",
            statement: "Given an array of integers and a key, find the index of the key using linear search. If not found, return -1.",
            inputFormat: "N, Key, then N integers.",
            outputFormat: "The 0-based index of the key or -1.",
            testCases: [{ input: "5 40\n10 50 30 40 20", output: "3" }],
            solution: `#include <iostream>
#include <vector>

int linearSearch(const std::vector<int>& arr, int key) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    std::cout << linearSearch(arr, key);
    
    return 0;
}`,
            explanation: "Linear search is the simplest search algorithm. It sequentially checks each element of the list until a match is found or the whole list has been searched. Its time complexity is O(n)."
          },
          {
            id: "dsa-cpp-b2",
            title: "Binary Search",
            description: "Efficiently find an element in a sorted array.",
            statement: "Given a sorted array of integers and a key, find the index of the key using binary search. If not found, return -1.",
            inputFormat: "N, Key, then N sorted integers.",
            outputFormat: "The 0-based index of the key or -1.",
            testCases: [{ input: "5 40\n10 20 30 40 50", output: "3" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    auto it = std::lower_bound(arr.begin(), arr.end(), key);
    
    if (it != arr.end() && *it == key) {
        std::cout << std::distance(arr.begin(), it);
    } else {
        std::cout << -1;
    }
    
    return 0;
}`,
            explanation: "Binary search is a fast search algorithm with a time complexity of O(log n). It works on sorted arrays. `std::lower_bound` is a standard C++ function that performs a binary search to find the first element not less than the given value. We then check if this element is the one we are looking for."
          },
          {
            id: "dsa-cpp-b3",
            title: "Find First & Last Occurrence",
            description: "Find the first and last positions of an element.",
            statement: "Given a sorted array with possible duplicate elements, find the first and last occurrences of a given element.",
            inputFormat: "N, Key, then N sorted integers.",
            outputFormat: "The first and last indices, or -1 -1 if not found.",
            testCases: [{ input: "9 5\n1 3 5 5 5 5 67 123 125", output: "2 5" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    auto first = std::lower_bound(arr.begin(), arr.end(), key);
    auto last = std::upper_bound(arr.begin(), arr.end(), key);

    if (first == arr.end() || *first != key) {
        std::cout << -1 << " " << -1;
    } else {
        std::cout << std::distance(arr.begin(), first) << " ";
        std::cout << std::distance(arr.begin(), last) - 1;
    }
    
    return 0;
}`,
            explanation: "`std::lower_bound` finds the first element not less than the key. `std::upper_bound` finds the first element greater than the key. The range between these two iterators `[first, last)` contains all occurrences of the key. The first occurrence is at `first`, and the last is at `last - 1`."
          },
          {
            id: "dsa-cpp-b4",
            title: "Count Number of Rotations",
            description: "Find how many times a sorted array was rotated.",
            statement: "Given a sorted array that has been rotated, find the number of times it was rotated. This is equivalent to finding the index of the minimum element.",
            inputFormat: "N, then N integers.",
            outputFormat: "The number of rotations.",
            testCases: [{ input: "5\n15 18 2 3 6", output: "2" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];

    auto min_it = std::min_element(arr.begin(), arr.end());
    std::cout << std::distance(arr.begin(), min_it);

    return 0;
}`,
            explanation: "In a sorted, rotated array, the minimum element is the pivot point. The index of this minimum element is exactly the number of times the array was rotated. We can find this index efficiently using `std::min_element` and `std::distance`."
          },
          {
            id: "dsa-cpp-b5",
            title: "Search in Rotated Sorted Array",
            description: "Find an element in a rotated sorted array.",
            statement: "Given a sorted and rotated array, and a key, find the index of the key. If the key is not present, return -1.",
            inputFormat: "N, Key, then N integers.",
            outputFormat: "The index or -1.",
            testCases: [{ input: "9 5\n4 5 6 7 8 9 1 2 3", output: "1" }],
            solution: `#include <iostream>
#include <vector>

int search(const std::vector<int>& nums, int target) {
    int low = 0, high = nums.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;

        if (nums[low] <= nums[mid]) { // Left half is sorted
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // Right half is sorted
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    std::cout << search(arr, key);
    return 0;
}`,
            explanation: "This is a modified binary search. In each step, we determine which half of the array (left or right of `mid`) is sorted. Then we check if the target lies within that sorted half. If it does, we narrow our search to that half; otherwise, we search the other half."
          },
          {
            id: "dsa-cpp-b6",
            title: "Merge Sort",
            description: "Implement the Merge Sort algorithm.",
            statement: "Implement the Merge Sort algorithm, a divide-and-conquer sorting algorithm with O(n log n) time complexity.",
            inputFormat: "N, then N integers.",
            outputFormat: "The sorted array.",
            testCases: [{ input: "6\n12 11 13 5 6 7", output: "5 6 7 11 12 13 " }],
            solution: `#include <iostream>
#include <vector>

void merge(std::vector<int>& arr, int l, int m, int r) {
    // Merge logic here...
    int n1 = m - l + 1;
    int n2 = r - m;
    std::vector<int> L(n1), R(n2);
    for(int i=0; i<n1; i++) L[i] = arr[l+i];
    for(int j=0; j<n2; j++) R[j] = arr[m+1+j];
    
    int i=0, j=0, k=l;
    while(i<n1 && j<n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while(i<n1) arr[k++] = L[i++];
    while(j<n2) arr[k++] = R[j++];
}

void mergeSort(std::vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    // ... read array ...
    // mergeSort(arr, 0, n-1);
    // ... print array ...
    return 0;
}`,
            explanation: "Merge Sort divides the array into two halves, recursively sorts them, and then merges the two sorted halves back together. The `merge` function is the core, which takes two sorted subarrays and combines them into a single sorted array."
          },
          {
            id: "dsa-cpp-b7",
            title: "Quick Sort",
            description: "Implement the Quick Sort algorithm.",
            statement: "Implement the Quick Sort algorithm, another divide-and-conquer sorting algorithm. In C++, `std::sort` is often a highly optimized version of Introsort (a hybrid of Quick Sort, Heap Sort, and Insertion Sort).",
            inputFormat: "N, then N integers.",
            outputFormat: "The sorted array.",
            testCases: [{ input: "6\n10 7 8 9 1 5", output: "1 5 7 8 9 10 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    
    std::sort(arr.begin(), arr.end());
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "For practical purposes, the `std::sort` function in `<algorithm>` is the best choice for sorting. It's highly optimized and typically faster than a manual implementation of Quick Sort. The underlying algorithm is usually Introsort, which switches to Heap Sort for deep recursion levels to avoid Quick Sort's worst-case O(n²) behavior, and uses Insertion Sort for small partitions."
          },
          {
            id: "dsa-cpp-b8",
            title: "Insertion Sort",
            description: "Implement the Insertion Sort algorithm.",
            statement: "Implement Insertion Sort. It builds the final sorted array one item at a time. It's efficient for small or nearly sorted datasets.",
            inputFormat: "N, then N integers.",
            outputFormat: "The sorted array.",
            testCases: [{ input: "5\n12 11 13 5 6", output: "5 6 11 12 13 " }],
            solution: `#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
// main function to test...
`,
            explanation: "Insertion Sort iterates through the input elements. For each element, it finds the correct position in the already sorted part of the array and inserts it there by shifting larger elements to the right. Its time complexity is O(n²)."
          },
          {
            id: "dsa-cpp-b9",
            title: "Counting Sort",
            description: "Implement the Counting Sort algorithm.",
            statement: "Implement Counting Sort, a non-comparison sorting algorithm. It works by counting the number of occurrences of each distinct element. It's efficient when the range of input values is small.",
            inputFormat: "N, then N non-negative integers.",
            outputFormat: "The sorted array.",
            testCases: [{ input: "7\n1 4 1 2 7 5 2", output: "1 1 2 2 4 5 7 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

void countingSort(std::vector<int>& arr) {
    if (arr.empty()) return;
    int max_val = *std::max_element(arr.begin(), arr.end());
    std::vector<int> count(max_val + 1, 0);
    for (int x : arr) {
        count[x]++;
    }
    int index = 0;
    for (int i = 0; i <= max_val; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }
}
// main function to test...
`,
            explanation: "The algorithm first finds the maximum value to determine the size of the `count` array. It then iterates through the input array, counting the occurrences of each number. Finally, it rebuilds the sorted array by iterating through the `count` array and placing each number back into the original array according to its frequency."
          },
          {
            id: "dsa-cpp-b10",
            title: "Bucket Sort (Basic)",
            description: "Implement a basic version of Bucket Sort.",
            statement: "Implement a basic version of Bucket Sort for floating-point numbers in the range [0, 1).",
            inputFormat: "N, then N floats between 0 and 1.",
            outputFormat: "The sorted floats.",
            testCases: [{ input: "5\n0.78 0.17 0.39 0.26 0.72", output: "0.17 0.26 0.39 0.72 0.78 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

void bucketSort(std::vector<float>& arr) {
    int n = arr.size();
    std::vector<std::vector<float>> buckets(n);

    for (int i = 0; i < n; i++) {
        int bucket_index = n * arr[i];
        buckets[bucket_index].push_back(arr[i]);
    }

    for (int i = 0; i < n; i++) {
        std::sort(buckets[i].begin(), buckets[i].end());
    }

    int index = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < buckets[i].size(); j++) {
            arr[index++] = buckets[i][j];
        }
    }
}
// main function to test...
`,
            explanation: "Bucket Sort works by distributing elements into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort algorithm. Finally, the sorted buckets are concatenated. For input uniformly distributed over a range, it can perform in O(n) time on average."
          }
        ]
    }
];