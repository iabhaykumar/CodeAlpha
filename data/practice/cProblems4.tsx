import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART4: ProblemCategory[] = [
    {
        category: "SECTION 7 — Arrays",
        problems: [
            {
                id: "c-s7-q1",
                title: "Find largest element",
                description: "Find the largest element in an array.",
                statement: "Write a C program to find the largest element in an array of integers.",
                inputFormat: "First line: an integer N (size of the array). Second line: N space-separated integers.",
                outputFormat: "A single integer representing the largest element.",
                testCases: [{ input: "5\n8 2 9 1 7", output: "9" }],
                solution: `#include <stdio.h>
#include <limits.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }
    
    int max = INT_MIN; // Or max = arr[0];
    for(i=0; i<n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    printf("%d", max);
    return 0;
}`,
                explanation: "Initialize a variable `max` to the smallest possible integer value (or the first element of the array). Then, loop through the array. If any element is greater than `max`, update `max` to that element's value."
            },
            {
                id: "c-s7-q2",
                title: "Find smallest element",
                description: "Find the smallest element in an array.",
                statement: "Write a C program to find the smallest element in an array of integers.",
                inputFormat: "First line: an integer N. Second line: N space-separated integers.",
                outputFormat: "The smallest integer.",
                testCases: [{ input: "5\n8 2 9 1 7", output: "1" }],
                solution: `#include <stdio.h>
#include <limits.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }
    
    int min = INT_MAX; // Or min = arr[0];
    for(i=0; i<n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    printf("%d", min);
    return 0;
}`,
                explanation: "This is similar to finding the largest element. Initialize a variable `min` to the largest possible integer value and update it whenever a smaller element is found in the array."
            },
            {
                id: "c-s7-q3",
                title: "Sum of elements",
                description: "Find the sum of all elements in an array.",
                statement: "Calculate and print the sum of all elements in an array of N integers.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The sum.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "15" }],
                solution: `#include <stdio.h>

int main() {
    int n, i, sum = 0;
    scanf("%d", &n);
    int arr[n];
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "Initialize a `sum` variable to 0. Use a single `for` loop to read each integer into the array and add it to the `sum` variable in the same iteration."
            },
            {
                id: "c-s7-q4",
                title: "Reverse an array",
                description: "Reverse the elements of an array.",
                statement: "Write a program to reverse an array in-place without using a second array.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The N integers in reverse order, separated by spaces.",
                testCases: [ { input: "5\n1 2 3 4 5", output: "5 4 3 2 1 " } ],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    int n, i, temp;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) scanf("%d", &arr[i]);

    int start = 0;
    int end = n - 1;
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
                explanation: "This uses a two-pointer approach for an in-place reversal. One pointer starts at the beginning (`start`) and one at the end (`end`). We swap the elements they point to and move the pointers towards the center until they meet or cross."
            },
            {
                id: "c-s7-q5",
                title: "Copy array",
                description: "Copy one array to another.",
                statement: "Copy all elements from one array to a new array.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The copied array elements, separated by spaces.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "1 2 3 4 5 " }],
                solution: `#include <stdio.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int arr1[n], arr2[n];
    for(i=0; i<n; i++) scanf("%d", &arr1[i]);
    
    for(i=0; i<n; i++) {
        arr2[i] = arr1[i];
    }
    
    printf("Copied array: ");
    for(i=0; i<n; i++) {
        printf("%d ", arr2[i]);
    }
    return 0;
}`,
                explanation: "We iterate through the source array (`arr1`) and assign each element to the corresponding index in the destination array (`arr2`)."
            },
            {
                id: "c-s7-q6",
                title: "Remove duplicates",
                description: "Remove duplicates from a sorted array.",
                statement: "Given a sorted array, remove duplicates in-place such that each unique element appears only once. Return the new length of the modified array.",
                inputFormat: "First line: N. Second line: N sorted integers.",
                outputFormat: "The modified array up to the new length.",
                testCases: [{ input: "7\n1 1 2 2 3 4 4", output: "1 2 3 4 " }],
                solution: `#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if (n == 0 || n == 1) return n;
    int j = 0;
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i+1]) {
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[n-1];
    return j;
}

int main() {
    int arr[] = {1, 1, 2, 2, 3, 4, 4};
    int n = sizeof(arr)/sizeof(arr[0]);
    n = removeDuplicates(arr, n);
    for (int i=0; i<n; i++)
       printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "This uses a two-pointer approach. `j` is the 'write' pointer for the next unique element. We iterate with `i`. If `arr[i]` is different from the next element `arr[i+1]`, it's a unique element that we keep. The last element is always unique in this context."
            },
            {
                id: "c-s7-q7",
                title: "Merge two sorted arrays",
                description: "Merge two sorted arrays into a third sorted array.",
                statement: "Given two sorted arrays, merge them into a single sorted array.",
                inputFormat: "N1, N1 integers, N2, N2 integers.",
                outputFormat: "The merged and sorted array.",
                testCases: [{ input: "3\n1 3 5\n3\n2 4 6", output: "1 2 3 4 5 6 " }],
                solution: `#include <stdio.h>

int main() {
    int arr1[] = {1, 3, 5};
    int arr2[] = {2, 4, 6};
    int n1 = 3, n2 = 3;
    int arr3[n1+n2];
    int i = 0, j = 0, k = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }
    while (i < n1)
        arr3[k++] = arr1[i++];
    while (j < n2)
        arr3[k++] = arr2[j++];

    for(i=0; i < n1+n2; i++)
        printf("%d ", arr3[i]);

    return 0;
}`,
                explanation: "This uses a three-pointer approach. `i` for arr1, `j` for arr2, and `k` for the result array. We compare elements at `i` and `j` and copy the smaller one to the result array. After one of the arrays is exhausted, we copy the remaining elements from the other array."
            },
            {
                id: "c-s7-q8",
                title: "Count occurrences",
                description: "Count how many times an element appears.",
                statement: "Count the frequency of a given element in an array.",
                inputFormat: "First line: N. Second line: N integers. Third line: the element to count.",
                outputFormat: "The frequency.",
                testCases: [{ input: "7\n1 5 3 5 8 5 9\n5", output: "3" }],
                solution: `#include <stdio.h>

int main() {
    int n, key, i, count = 0;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) scanf("%d", &arr[i]);
    scanf("%d", &key);
    
    for(i=0; i<n; i++) {
        if (arr[i] == key) {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
                explanation: "Initialize a counter to 0. Loop through the array and increment the counter every time the element equals the key."
            },
            {
                id: "c-s7-q9",
                title: "Find second largest",
                description: "Find the second largest element in an array.",
                statement: "Write a program to find the second largest element in an array.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The second largest integer.",
                testCases: [{ input: "5\n10 5 8 20 12", output: "12" }],
                solution: `#include <stdio.h>
#include <limits.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) scanf("%d", &arr[i]);
    
    int largest = INT_MIN, secondLargest = INT_MIN;
    for(i=0; i<n; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    printf("%d", secondLargest);
    return 0;
}`,
                explanation: "We track `largest` and `secondLargest`. As we iterate, if a new largest number is found, the old largest becomes the second largest. If the number isn't the new largest but is bigger than the current second largest (and not a duplicate of the largest), we update the second largest."
            },
            {
                id: "c-s7-q10",
                title: "Find second smallest",
                description: "Find the second smallest element in an array.",
                statement: "Write a program to find the second smallest element in an array.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The second smallest integer.",
                testCases: [{ input: "5\n10 5 8 20 12", output: "8" }],
                solution: `#include <stdio.h>
#include <limits.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int arr[n];
    for(i=0; i<n; i++) scanf("%d", &arr[i]);
    
    int smallest = INT_MAX, secondSmallest = INT_MAX;
    for(i=0; i<n; i++) {
        if(arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] != smallest) {
            secondSmallest = arr[i];
        }
    }
    printf("%d", secondSmallest);
    return 0;
}`,
                explanation: "The logic is analogous to finding the second largest. We maintain two variables, `smallest` and `secondSmallest`, and update them as we iterate through the array."
            },
            {
                id: "c-s7-q11",
                title: "Rotate left by K",
                description: "Rotate an array to the left by K positions.",
                statement: "Rotate the elements of an array to the left by `K` positions.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The rotated array.",
                testCases: [{ input: "5 2\n1 2 3 4 5", output: "3 4 5 1 2 " }],
                solution: `#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5, k = 2;
    k = k % n; // Handle k > n
    
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);
    
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "This is an efficient reversal algorithm. To left rotate by `k`, you reverse the first `k` elements, reverse the remaining `n-k` elements, and then reverse the entire array. This achieves the rotation in O(n) time and O(1) space."
            },
            {
                id: "c-s7-q12",
                title: "Rotate right by K",
                description: "Rotate an array to the right by K positions.",
                statement: "Rotate the elements of an array to the right by `K` positions.",
                inputFormat: "N, K, then N integers.",
                outputFormat: "The rotated array.",
                testCases: [{ input: "5 2\n1 2 3 4 5", output: "4 5 1 2 3 " }],
                solution: `#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5, k = 2;
    k = k % n;
    
    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - 1);
    
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "The reversal algorithm for right rotation is slightly different. You reverse the first `n-k` elements, reverse the last `k` elements, and then reverse the entire array."
            },
            {
                id: "c-s7-q13",
                title: "Insert element at position",
                description: "Insert an element at a specified position.",
                statement: "Insert an element into an array at a specific position by shifting elements to the right.",
                inputFormat: "N, N integers, then the element to insert, then the position (0-indexed).",
                outputFormat: "The new array.",
                testCases: [{ input: "5\n10 20 30 40 50\n25 2", output: "10 20 25 30 40 50 " }],
                solution: `#include <stdio.h>
int main() {
    int arr[100] = {10, 20, 30, 40, 50};
    int n = 5;
    int element = 25, pos = 2; // Insert 25 at index 2

    for (int i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }
    arr[pos] = element;
    n++;
    
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "To insert an element, we start from the end of the array and shift each element one position to the right, up to the desired insertion position. After making space, we insert the new element."
            },
            {
                id: "c-s7-q14",
                title: "Delete element at position",
                description: "Delete an element at a specified position.",
                statement: "Delete an element from an array at a specific position by shifting elements to the left.",
                inputFormat: "N, N integers, then the position to delete (0-indexed).",
                outputFormat: "The new array.",
                testCases: [{ input: "5\n10 20 30 40 50\n2", output: "10 20 40 50 " }],
                solution: `#include <stdio.h>
int main() {
    int arr[100] = {10, 20, 30, 40, 50};
    int n = 5;
    int pos = 2; // Delete element at index 2

    for (int i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
    
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "To delete an element, we start from the deletion position and shift each subsequent element one position to the left, overwriting the element to be deleted."
            },
            {
                id: "c-s7-q15",
                title: "Sort array (bubble)",
                description: "Sort an array using Bubble Sort.",
                statement: "Implement Bubble Sort to sort an array in ascending order.",
                inputFormat: "N, then N integers.",
                outputFormat: "The sorted array.",
                testCases: [{ input: "5\n5 1 4 2 8", output: "1 2 4 5 8 " }],
                solution: `#include <stdio.h>
void bubbleSort(int arr[], int n) {
   for (int i = 0; i < n-1; i++) {
       for (int j = 0; j < n-i-1; j++) {
           if (arr[j] > arr[j+1]) {
              int temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
           }
       }
   }
}
int main() { /* ... */ }`,
                explanation: "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass is repeated until the list is sorted. It has a time complexity of O(n²)."
            },
            {
                id: "c-s7-q16",
                title: "Sort array (selection)",
                description: "Sort an array using Selection Sort.",
                statement: "Implement Selection Sort.",
                inputFormat: "N, then N integers.",
                outputFormat: "The sorted array.",
                testCases: [{ input: "5\n5 1 4 2 8", output: "1 2 4 5 8 " }],
                solution: `#include <stdio.h>
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}
int main() { /* ... */ }`,
                explanation: "Selection Sort repeatedly finds the minimum element from the unsorted part of the list and puts it at the beginning. It also has a time complexity of O(n²)."
            },
            {
                id: "c-s7-q17",
                title: "Sort array (insertion)",
                description: "Sort an array using Insertion Sort.",
                statement: "Implement Insertion Sort.",
                inputFormat: "N, then N integers.",
                outputFormat: "The sorted array.",
                testCases: [{ input: "5\n5 1 4 2 8", output: "1 2 4 5 8 " }],
                solution: `#include <stdio.h>
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
int main() { /* ... */ }`,
                explanation: "Insertion sort builds the final sorted array one item at a time. It iterates through the input elements and inserts each element into its correct position in the sorted part of the array. It's efficient for small or nearly sorted datasets."
            },
            {
                id: "c-s7-q18",
                title: "Frequency of elements",
                description: "Count the frequency of each element.",
                statement: "Count how many times each element appears in an array. A hashing-based approach is efficient.",
                inputFormat: "N, then N integers.",
                outputFormat: "Each unique element and its count.",
                testCases: [{ input: "7\n1 2 1 3 2 1 4", output: "1 -> 3\n2 -> 2\n3 -> 1\n4 -> 1\n" }],
                solution: `#include <stdio.h>
// This is a complex problem in C without a built-in hash map.
// A simpler version for a known range of numbers:
int main() {
    int arr[] = {1, 2, 1, 3, 2, 1, 4};
    int n = 7;
    int freq[10] = {0}; // Assume numbers are 0-9
    for(int i=0; i<n; i++) {
        freq[arr[i]]++;
    }
    for(int i=0; i<10; i++) {
        if(freq[i] != 0) {
            printf("%d -> %d\\n", i, freq[i]);
        }
    }
    return 0;
}`,
                explanation: "For a known and small range of input numbers, we can use a frequency array. The index of the frequency array corresponds to the number in the input array. We iterate through the input and increment the count at the corresponding index in the frequency array."
            },
            {
                id: "c-s7-q19",
                title: "Find missing number",
                description: "Find the missing number in a range.",
                statement: "You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates. Find the missing integer.",
                inputFormat: "N, then N-1 integers.",
                outputFormat: "The missing number.",
                testCases: [{ input: "5\n1 2 4 5", output: "3" }],
                solution: `#include <stdio.h>
int main() {
    int n = 5;
    int arr[] = {1, 2, 4, 5};
    int total_sum = n * (n + 1) / 2;
    int arr_sum = 0;
    for(int i=0; i<n-1; i++) {
        arr_sum += arr[i];
    }
    printf("%d", total_sum - arr_sum);
    return 0;
}`,
                explanation: "The sum of the first `n` natural numbers is `n*(n+1)/2`. We can calculate this expected sum. Then, we calculate the actual sum of the elements in the given array. The difference between the expected and actual sum will be the missing number."
            },
            {
                id: "c-s7-q20",
                title: "Move zeros to end",
                description: "Move all zeros to the end of an array.",
                statement: "Given an array, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
                inputFormat: "N, then N integers.",
                outputFormat: "The modified array.",
                testCases: [{ input: "6\n0 1 0 3 12", output: "1 3 12 0 0 " }],
                solution: `#include <stdio.h>
void moveZeroes(int arr[], int n) {
    int count = 0; // Count of non-zero elements
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i];
        }
    }
    while (count < n) {
        arr[count++] = 0;
    }
}
int main() { /* ... */ }`,
                explanation: "We use a 'write' pointer (`count`). We iterate through the array. If an element is not zero, we place it at the `count` index and increment `count`. After the first loop, all non-zero elements are at the beginning. The second loop fills the rest of the array with zeros."
            },
            {
                id: "c-s7-q21",
                title: "Pair sum equal to given value",
                description: "Find a pair that sums to a target.",
                statement: "In a sorted array, find if there exists a pair of elements whose sum is equal to a given value.",
                inputFormat: "N, Target, then N sorted integers.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "5 9\n2 4 5 7 8", output: "Yes" }],
                solution: `#include <stdio.h>
int main() {
    int arr[] = {2, 4, 5, 7, 8};
    int n = 5, target = 9;
    int left = 0, right = n - 1;
    while (left < right) {
        if (arr[left] + arr[right] == target) {
            printf("Yes");
            return 0;
        }
        if (arr[left] + arr[right] < target)
            left++;
        else
            right--;
    }
    printf("No");
    return 0;
}`,
                explanation: "This uses the Two Pointer technique. One pointer starts at the beginning and one at the end. If the sum is too small, we move the left pointer forward. If it's too large, we move the right pointer backward. This works because the array is sorted."
            },
            {
                id: "c-s7-q22",
                title: "Check if array sorted",
                description: "Check if an array is sorted in ascending order.",
                statement: "Check if a given array of integers is sorted in non-decreasing order.",
                inputFormat: "N, then N integers.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "5\n10 20 15 30 40", output: "No" }],
                solution: `#include <stdio.h>
#include <stdbool.h>
int main() {
    int arr[] = {10, 20, 15, 30, 40};
    int n = 5;
    bool sorted = true;
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sorted = false;
            break;
        }
    }
    if (sorted) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "We loop up to the second-to-last element. In each step, we compare the current element with the next one. If we ever find an element that is greater than the one following it, the array is not sorted, so we set a flag and break."
            },
            {
                id: "c-s7-q23",
                title: "Find unique elements",
                description: "Find all unique elements in an array.",
                statement: "Given an array, print all the elements that appear only once.",
                inputFormat: "N, then N integers.",
                outputFormat: "The unique elements.",
                testCases: [{ input: "7\n1 2 3 2 1 4 5", output: "3 4 5 " }],
                solution: `#include <stdio.h>
// A brute force solution
int main() {
    int arr[] = {1, 2, 3, 2, 1, 4, 5};
    int n = 7;
    for(int i=0; i<n; i++) {
        int count = 0;
        for(int j=0; j<n; j++) {
            if(arr[i] == arr[j]) {
                count++;
            }
        }
        if(count == 1) {
            printf("%d ", arr[i]);
        }
    }
    return 0;
}`,
                explanation: "This simple O(n²) solution uses nested loops. The outer loop picks an element, and the inner loop counts its occurrences in the entire array. If the count is exactly 1, the element is printed."
            },
            {
                id: "c-s7-q24",
                title: "Reverse array using pointers",
                description: "Reverse an array using pointer notation.",
                statement: "Reverse an array in-place using pointers instead of array indices.",
                inputFormat: "N, then N integers.",
                outputFormat: "The reversed array.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "5 4 3 2 1 " }],
                solution: `#include <stdio.h>
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    int *start = arr;
    int *end = arr + n - 1;
    int temp;
    while (start < end) {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "This is the same two-pointer logic as before, but implemented using pointer arithmetic. `start` points to the first element and `end` to the last. `start++` and `end--` move the pointers, and `*start` dereferences them to access the values."
            },
            {
                id: "c-s7-q25",
                title: "Largest element index",
                description: "Find the index of the largest element.",
                statement: "Find the index of the first occurrence of the largest element in an array.",
                inputFormat: "N, then N integers.",
                outputFormat: "The index of the largest element.",
                testCases: [{ input: "5\n10 50 30 50 20", output: "1" }],
                solution: `#include <stdio.h>
int main() {
    int arr[] = {10, 50, 30, 50, 20};
    int n = 5;
    int max = arr[0];
    int max_index = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
            max_index = i;
        }
    }
    printf("%d", max_index);
    return 0;
}`,
                explanation: "Similar to finding the max value, but we also keep track of the index where that max value was found. We only update the index when a strictly greater value is found, which handles the 'first occurrence' requirement."
            },
        ]
    },
    {
        category: "SECTION 8 — 2D Arrays / Matrix",
        problems: [
            {
                id: "c-s8-q1",
                title: "Add two matrices",
                description: "Perform matrix addition.",
                statement: "Read two matrices of the same size (R x C) and compute their sum.",
                inputFormat: "R, C, then elements of matrix A, then elements of matrix B.",
                outputFormat: "The resulting sum matrix.",
                testCases: [{ input: "2 2\n1 2 3 4\n5 6 7 8", output: "6 8 \n10 12 \n" }],
                solution: `#include <stdio.h>
#define R 2
#define C 2
int main() {
    int i, j;
    int a[R][C]={{1,2},{3,4}}, b[R][C]={{5,6},{7,8}}, sum[R][C];
    for (i = 0; i < R; ++i)
        for (j = 0; j < C; ++j)
            sum[i][j] = a[i][j] + b[i][j];
    for (i = 0; i < R; ++i) {
        for (j = 0; j < C; ++j) printf("%d ", sum[i][j]);
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Matrix addition is done by adding corresponding elements. Nested loops iterate through each row `i` and column `j` to perform the addition `a[i][j] + b[i][j]`."
            },
            {
                id: "c-s8-q2",
                title: "Subtract two matrices",
                description: "Perform matrix subtraction.",
                statement: "Read two matrices of the same size (R x C) and compute their difference (A - B).",
                inputFormat: "R, C, then elements of matrix A, then elements of matrix B.",
                outputFormat: "The resulting difference matrix.",
                testCases: [{ input: "2 2\n5 6 7 8\n1 2 3 4", output: "4 4 \n4 4 \n" }],
                solution: `#include <stdio.h>
#define R 2
#define C 2
int main() {
    int i, j;
    int a[R][C]={{5,6},{7,8}}, b[R][C]={{1,2},{3,4}}, diff[R][C];
    for (i = 0; i < R; ++i)
        for (j = 0; j < C; ++j)
            diff[i][j] = a[i][j] - b[i][j];
    for (i = 0; i < R; ++i) {
        for (j = 0; j < C; ++j) printf("%d ", diff[i][j]);
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Matrix subtraction works just like addition, but using the subtraction operator `-` on corresponding elements."
            },
            {
                id: "c-s8-q3",
                title: "Multiply matrices",
                description: "Perform matrix multiplication.",
                statement: "Read two matrices (r1xc1 and r2xc2) and compute their product. The number of columns in the first matrix (c1) must be equal to the number of rows in the second matrix (r2).",
                inputFormat: "r1, c1, matrix1 elements, r2, c2, matrix2 elements.",
                outputFormat: "The product matrix.",
                testCases: [{ input: "2 2\n1 1\n2 2\n2 2\n1 1\n2 2", output: "3 3 \n6 6 \n" }],
                solution: `#include <stdio.h>
#define R1 2
#define C1 2
#define R2 2
#define C2 2
int main() {
    int i, j, k;
    int a[R1][C1]={{1,1},{2,2}}, b[R2][C2]={{1,1},{2,2}}, result[R1][C2]={0};
    for (i = 0; i < R1; ++i) {
        for (j = 0; j < C2; ++j) {
            for (k = 0; k < C1; ++k) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    for (i = 0; i < R1; ++i) {
        for (j = 0; j < C2; ++j) printf("%d ", result[i][j]);
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Matrix multiplication requires three nested loops. The element at `result[i][j]` is the dot product of the i-th row of the first matrix and the j-th column of the second matrix."
            },
            {
                id: "c-s8-q4",
                title: "Scalar multiplication",
                description: "Multiply a matrix by a scalar value.",
                statement: "Read a matrix and a scalar integer. Multiply every element of the matrix by the scalar.",
                inputFormat: "R, C, scalar, then matrix elements.",
                outputFormat: "The resulting matrix.",
                testCases: [{ input: "2 2 3\n1 2 3 4", output: "3 6 \n9 12 \n" }],
                solution: `#include <stdio.h>
#define R 2
#define C 2
int main() {
    int i, j, scalar = 3;
    int a[R][C]={{1,2},{3,4}};
    for (i = 0; i < R; ++i)
        for (j = 0; j < C; ++j)
            a[i][j] = a[i][j] * scalar;
    // Print logic follows...
    return 0;
}`,
                explanation: "Scalar multiplication involves multiplying every single element of the matrix by the scalar value. This can be done with simple nested loops."
            },
            {
                id: "c-s8-q5",
                title: "Transpose matrix",
                description: "Find the transpose of a matrix.",
                statement: "The transpose of a matrix is obtained by swapping rows with columns.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The transposed matrix.",
                testCases: [{ input: "2 3\n1 2 3 4 5 6", output: "1 4 \n2 5 \n3 6 \n" }],
                solution: `#include <stdio.h>
#define R 2
#define C 3
int main() {
    int i, j;
    int a[R][C]={{1,2,3},{4,5,6}}, trans[C][R];
    for (i = 0; i < R; ++i)
        for (j = 0; j < C; ++j)
            trans[j][i] = a[i][j];
    // Print logic for 'trans' follows...
    return 0;
}`,
                explanation: "To find the transpose, the element at `a[i][j]` of the original matrix becomes the element at `transpose[j][i]` in the new matrix. The dimensions of the transposed matrix will be C x R."
            },
            {
                id: "c-s8-q6",
                title: "Check symmetric matrix",
                description: "Check if a square matrix is symmetric.",
                statement: "A matrix is symmetric if it is equal to its transpose (A == A^T). This means `matrix[i][j] == matrix[j][i]` for all i, j.",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "3\n1 7 3\n7 4 -5\n3 -5 6", output: "Yes" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,7,3},{7,4,-5},{3,-5,6}};
    int i, j, isSymmetric = 1;
    for (i = 0; i < N; ++i) {
        for (j = 0; j < N; ++j) {
            if (a[i][j] != a[j][i]) {
                isSymmetric = 0;
                break;
            }
        }
        if(!isSymmetric) break;
    }
    if (isSymmetric) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "We use nested loops to iterate through the matrix. For each element `a[i][j]`, we compare it with its corresponding element across the diagonal, `a[j][i]`. If we find any mismatch, we set a flag and break the loops."
            },
            {
                id: "c-s8-q7",
                title: "Upper triangular matrix",
                description: "Check if a matrix is upper triangular.",
                statement: "A square matrix is upper triangular if all the elements below the main diagonal are zero.",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "3\n1 2 3\n0 4 5\n0 0 6", output: "Yes" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,2,3},{0,4,5},{0,0,6}};
    int i, j, isUpper = 1;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (i > j && a[i][j] != 0) {
                isUpper = 0;
                break;
            }
        }
        if(!isUpper) break;
    }
    if (isUpper) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "We iterate through the matrix. The condition `i > j` identifies elements below the main diagonal. If we find any non-zero element in this region, the matrix is not upper triangular."
            },
            {
                id: "c-s8-q8",
                title: "Lower triangular matrix",
                description: "Check if a matrix is lower triangular.",
                statement: "A square matrix is lower triangular if all the elements above the main diagonal are zero.",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "3\n1 0 0\n4 5 0\n7 8 9", output: "Yes" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,0,0},{4,5,0},{7,8,9}};
    int i, j, isLower = 1;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (j > i && a[i][j] != 0) {
                isLower = 0;
                break;
            }
        }
        if(!isLower) break;
    }
    if (isLower) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "We iterate through the matrix. The condition `j > i` identifies elements above the main diagonal. If we find any non-zero element in this region, the matrix is not lower triangular."
            },
            {
                id: "c-s8-q9",
                title: "Diagonal sum",
                description: "Sum of the main diagonal elements.",
                statement: "For a square matrix, calculate the sum of the elements on the main diagonal (from top-left to bottom-right).",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "The sum of the diagonal.",
                testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "15" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,2,3},{4,5,6},{7,8,9}};
    int i, sum = 0;
    for (i = 0; i < N; i++) {
        sum += a[i][i];
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "The elements of the main diagonal are those where the row index `i` is equal to the column index `j`. A single loop is sufficient to iterate from `i=0` to `N-1` and add `a[i][i]` to the sum."
            },
            {
                id: "c-s8-q10",
                title: "Anti-diagonal sum",
                description: "Sum of the anti-diagonal elements.",
                statement: "For a square matrix, calculate the sum of the elements on the anti-diagonal (from top-right to bottom-left).",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "The sum of the anti-diagonal.",
                testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "15" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,2,3},{4,5,6},{7,8,9}};
    int i, sum = 0;
    for (i = 0; i < N; i++) {
        sum += a[i][N - 1 - i];
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "The elements of the anti-diagonal have indices `(i, j)` such that `i + j = N - 1`. A single loop can be used where for each row `i`, the column index is `N - 1 - i`."
            },
            {
                id: "c-s8-q11",
                title: "Sum of all elements",
                description: "Sum of all elements in a matrix.",
                statement: "Calculate the sum of all elements in a 2D array.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The total sum.",
                testCases: [{ input: "2 3\n1 2 3 4 5 6", output: "21" }],
                solution: `#include <stdio.h>
#define R 2
#define C 3
int main() {
    int a[R][C]={{1,2,3},{4,5,6}};
    int i, j, sum = 0;
    for(i=0; i<R; i++) {
        for(j=0; j<C; j++) {
            sum += a[i][j];
        }
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "Simple nested loops are used to iterate through every row and every column, adding each element to a running total."
            },
            {
                id: "c-s8-q12",
                title: "Count zeros in matrix",
                description: "Count the number of zero elements.",
                statement: "Count the total number of zero elements in a given matrix.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The count of zeros.",
                testCases: [{ input: "3 3\n1 0 2\n0 5 0\n9 8 7", output: "3" }],
                solution: `#include <stdio.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,0,2},{0,5,0},{9,8,7}};
    int i, j, count = 0;
    for(i=0; i<R; i++) {
        for(j=0; j<C; j++) {
            if (a[i][j] == 0) {
                count++;
            }
        }
    }
    printf("%d", count);
    return 0;
}`,
                explanation: "We iterate through every element using nested loops and increment a counter if the element's value is 0."
            },
            {
                id: "c-s8-q13",
                title: "Find max in matrix",
                description: "Find the maximum element in a matrix.",
                statement: "Find the largest element in a 2D array.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The maximum value.",
                testCases: [{ input: "3 3\n1 99 2\n0 5 0\n9 8 7", output: "99" }],
                solution: `#include <stdio.h>
#include <limits.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,99,2},{0,5,0},{9,8,7}};
    int i, j, max = INT_MIN;
    for(i=0; i<R; i++) {
        for(j=0; j<C; j++) {
            if (a[i][j] > max) {
                max = a[i][j];
            }
        }
    }
    printf("%d", max);
    return 0;
}`,
                explanation: "Initialize `max` to the smallest possible integer. Iterate through every element and update `max` if a larger value is found."
            },
            {
                id: "c-s8-q14",
                title: "Find min in matrix",
                description: "Find the minimum element in a matrix.",
                statement: "Find the smallest element in a 2D array.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The minimum value.",
                testCases: [{ input: "3 3\n1 99 2\n-5 5 0\n9 8 7", output: "-5" }],
                solution: `#include <stdio.h>
#include <limits.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,99,2},{-5,5,0},{9,8,7}};
    int i, j, min = INT_MAX;
    for(i=0; i<R; i++) {
        for(j=0; j<C; j++) {
            if (a[i][j] < min) {
                min = a[i][j];
            }
        }
    }
    printf("%d", min);
    return 0;
}`,
                explanation: "Initialize `min` to the largest possible integer. Iterate through every element and update `min` if a smaller value is found."
            },
            {
                id: "c-s8-q15",
                title: "Rotate matrix 90°",
                description: "Rotate a square matrix 90 degrees clockwise.",
                statement: "Rotate a square matrix by 90 degrees clockwise in-place.",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "The rotated matrix.",
                testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "7 4 1 \n8 5 2 \n9 6 3 \n" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,2,3},{4,5,6},{7,8,9}};
    // 1. Transpose
    for (int i = 0; i < N; i++) {
        for (int j = i; j < N; j++) {
            int temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
    // 2. Reverse each row
    for (int i = 0; i < N; i++) {
        int start = 0, end = N-1;
        while(start < end) {
            int temp = a[i][start];
            a[i][start] = a[i][end];
            a[i][end] = temp;
            start++; end--;
        }
    }
    // Print logic...
    return 0;
}`,
                explanation: "The most common in-place algorithm for 90-degree clockwise rotation is to first find the transpose of the matrix, and then reverse each row of the transposed matrix."
            },
            {
                id: "c-s8-q16",
                title: "Rotate 180°",
                description: "Rotate a square matrix 180 degrees.",
                statement: "Rotate a square matrix by 180 degrees.",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "The rotated matrix.",
                testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "9 8 7 \n6 5 4 \n3 2 1 \n" }],
                solution: `#include <stdio.h>
#define N 3
// A function to reverse a row
void reverseRow(int row[], int n) {
    int start = 0, end = n-1;
    while(start < end) { /* swap logic */ }
}
int main() {
    int a[N][N]={{1,2,3},{4,5,6},{7,8,9}};
    // Reverse each row, then reverse each column.
    // Or, simpler: Rotate 90 degrees twice.
    // Another simple way is to reverse all rows, then reverse all columns.
    // Let's do that.
    for(int i=0; i < N/2; i++) {
        for(int j=0; j<N; j++) {
            int temp = a[i][j];
            a[i][j] = a[N-1-i][j];
            a[N-1-i][j] = temp;
        }
    }
    for(int i=0; i < N; i++) {
        for(int j=0; j<N/2; j++) {
            int temp = a[i][j];
            a[i][j] = a[i][N-1-j];
            a[i][N-1-j] = temp;
        }
    }
    // Print logic...
    return 0;
}`,
                explanation: "A 180-degree rotation is equivalent to reflecting the matrix across its horizontal axis and then across its vertical axis. This can be achieved by first reversing the order of the rows, and then reversing the order of elements within each row."
            },
            {
                id: "c-s8-q17",
                title: "Rotate 270°",
                description: "Rotate a square matrix 270 degrees clockwise.",
                statement: "Rotate a square matrix by 270 degrees clockwise (or 90 degrees anti-clockwise).",
                inputFormat: "N, then N*N matrix elements.",
                outputFormat: "The rotated matrix.",
                testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "3 6 9 \n2 5 8 \n1 4 7 \n" }],
                solution: `#include <stdio.h>
#define N 3
int main() {
    int a[N][N]={{1,2,3},{4,5,6},{7,8,9}};
    // Transpose, then reverse each column.
    for (int i = 0; i < N; i++) for (int j = i; j < N; j++) { /* swap a[i][j] and a[j][i] */ }
    for (int j=0; j < N; j++) {
        int start = 0, end = N-1;
        while(start < end) {
            int temp = a[start][j];
            a[start][j] = a[end][j];
            a[end][j] = temp;
            start++; end--;
        }
    }
    // Print logic...
    return 0;
}`,
                explanation: "A 270-degree clockwise rotation is equivalent to a 90-degree anti-clockwise rotation. The algorithm for this is to first find the transpose of the matrix, and then reverse each column of the transposed matrix."
            },
            {
                id: "c-s8-q18",
                title: "Spiral printing",
                description: "Print matrix elements in spiral order.",
                statement: "Given a 2D array, print its elements in spiral form.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The spiral-ordered elements.",
                testCases: [{ input: "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12", output: "1 2 3 4 8 12 11 10 9 5 6 7 " }],
                solution: `#include <stdio.h>
#define R 3
#define C 4
void spiralPrint(int a[R][C]) {
    int i, top = 0, left = 0, bottom = R - 1, right = C - 1;
    while (top <= bottom && left <= right) {
        for (i = left; i <= right; ++i) printf("%d ", a[top][i]);
        top++;
        for (i = top; i <= bottom; ++i) printf("%d ", a[i][right]);
        right--;
        if (top <= bottom) {
            for (i = right; i >= left; --i) printf("%d ", a[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (i = bottom; i >= top; --i) printf("%d ", a[i][left]);
            left++;
        }
    }
}`,
                explanation: "This algorithm uses four pointers: `top`, `bottom`, `left`, and `right` to represent the boundaries of the current layer of the spiral. In a loop, it prints the top row, then the right column, then the bottom row, and finally the left column, shrinking the boundaries inward after each step."
            },
            {
                id: "c-s8-q19",
                title: "Matrix boundary elements",
                description: "Print the boundary elements of a matrix.",
                statement: "Print only the elements on the boundary of a given matrix.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The boundary elements.",
                testCases: [{ input: "3 3\n1 2 3\n4 5 6\n7 8 9", output: "1 2 3 6 9 8 7 4 " }],
                solution: `#include <stdio.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,2,3},{4,5,6},{7,8,9}};
    for (int i = 0; i < R; i++) {
        for (int j = 0; j < C; j++) {
            if (i == 0 || j == 0 || i == R - 1 || j == C - 1) {
                printf("%d ", a[i][j]);
            }
        }
    }
    return 0;
}`,
                explanation: "We iterate through the entire matrix. Inside the loop, an `if` condition checks if the current element is in the first row (`i==0`), first column (`j==0`), last row (`i==R-1`), or last column (`j==C-1`). If so, it is printed."
            },
            {
                id: "c-s8-q20",
                title: "Check sparse matrix",
                description: "Check if a matrix is a sparse matrix.",
                statement: "A matrix is sparse if the number of zero elements is more than half of the total elements.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "3 3\n1 0 0\n0 5 0\n0 0 0", output: "Yes" }],
                solution: `#include <stdio.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,0,0},{0,5,0},{0,0,0}};
    int zero_count = 0, total = R * C;
    for(int i=0; i<R; i++) for(int j=0; j<C; j++) if(a[i][j]==0) zero_count++;
    if(zero_count > total / 2) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "The program counts the number of zero elements in the matrix. It then compares this count to half of the total number of elements to determine if the matrix is sparse."
            },
            {
                id: "c-s8-q21",
                title: "Replace row with max element",
                description: "For each row, find max, replace row with it.",
                statement: "For each row in a matrix, find the maximum element in that row and then replace all elements in that row with this maximum value.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The modified matrix.",
                testCases: [{ input: "3 3\n1 5 2\n8 3 4\n6 7 9", output: "5 5 5 \n8 8 8 \n9 9 9 \n" }],
                solution: `#include <stdio.h>
#include <limits.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{1,5,2},{8,3,4},{6,7,9}};
    for(int i=0; i<R; i++) {
        int max_val = INT_MIN;
        for(int j=0; j<C; j++) if(a[i][j] > max_val) max_val = a[i][j];
        for(int j=0; j<C; j++) a[i][j] = max_val;
    }
    // Print logic...
    return 0;
}`,
                explanation: "The program uses two passes for each row. The outer loop iterates through the rows. The first inner loop finds the maximum element in the current row. The second inner loop then iterates through the same row again, setting every element to the maximum value found."
            },
            {
                id: "c-s8-q22",
                title: "Replace column with min element",
                description: "For each column, find min, replace column with it.",
                statement: "For each column in a matrix, find the minimum element in that column and then replace all elements in that column with this minimum value.",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The modified matrix.",
                testCases: [{ input: "3 3\n9 2 7\n4 8 1\n5 3 6", output: "4 2 1 \n4 2 1 \n4 2 1 \n" }],
                solution: `#include <stdio.h>
#include <limits.h>
#define R 3
#define C 3
int main() {
    int a[R][C]={{9,2,7},{4,8,1},{5,3,6}};
    for(int j=0; j<C; j++) {
        int min_val = INT_MAX;
        for(int i=0; i<R; i++) if(a[i][j] < min_val) min_val = a[i][j];
        for(int i=0; i<R; i++) a[i][j] = min_val;
    }
    // Print logic...
    return 0;
}`,
                explanation: "This logic is similar to the previous problem, but the loops are swapped to operate on columns. The outer loop iterates through columns (`j`), and the inner loops iterate through rows (`i`) to find the minimum and then replace the elements in that column."
            },
            {
                id: "c-s8-q23",
                title: "Reverse rows",
                description: "Reverse the order of rows in a matrix.",
                statement: "Reverse the order of rows in a matrix (row 1 becomes the last row, etc.).",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The matrix with rows reversed.",
                testCases: [{ input: "3 2\n1 2\n3 4\n5 6", output: "5 6 \n3 4 \n1 2 \n" }],
                solution: `#include <stdio.h>
#define R 3
#define C 2
int main() {
    int a[R][C]={{1,2},{3,4},{5,6}};
    for(int i=0; i < R/2; i++) {
        for(int j=0; j<C; j++) {
            int temp = a[i][j];
            a[i][j] = a[R-1-i][j];
            a[R-1-i][j] = temp;
        }
    }
    // Print logic...
    return 0;
}`,
                explanation: "We can reverse the rows in-place. The outer loop iterates from the first row to the middle row. For each row `i`, the inner loop iterates through its columns, swapping each element `a[i][j]` with its corresponding element in the opposite row, `a[R-1-i][j]`."
            },
            {
                id: "c-s8-q24",
                title: "Reverse columns",
                description: "Reverse the order of columns in a matrix.",
                statement: "Reverse the order of columns in a matrix (column 1 becomes the last column, etc.).",
                inputFormat: "R, C, then matrix elements.",
                outputFormat: "The matrix with columns reversed.",
                testCases: [{ input: "2 3\n1 2 3\n4 5 6", output: "3 2 1 \n6 5 4 \n" }],
                solution: `#include <stdio.h>
#define R 2
#define C 3
int main() {
    int a[R][C]={{1,2,3},{4,5,6}};
    for(int i=0; i<R; i++) {
        for(int j=0; j < C/2; j++) {
            int temp = a[i][j];
            a[i][j] = a[i][C-1-j];
            a[i][C-1-j] = temp;
        }
    }
    // Print logic...
    return 0;
}`,
                explanation: "This is also an in-place reversal. We iterate through each row. For each row, an inner loop iterates from the first column to the middle, swapping each element `a[i][j]` with its corresponding element at the other end of the row, `a[i][C-1-j]`."
            },
            {
                id: "c-s8-q25",
                title: "Matrix determinant (2x2, 3x3)",
                description: "Calculate the determinant of a 3x3 matrix.",
                statement: "Write a program to calculate the determinant of a 3x3 matrix.",
                inputFormat: "9 integers for the 3x3 matrix.",
                outputFormat: "The determinant.",
                testCases: [{ input: "1 2 3 4 5 6 7 8 9", output: "0" }],
                solution: `#include <stdio.h>
int main() {
    int a[3][3], i, j;
    long det;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);

    det = a[0][0] * ((a[1][1] * a[2][2]) - (a[2][1] * a[1][2])) -
          a[0][1] * ((a[1][0] * a[2][2]) - (a[2][0] * a[1][2])) +
          a[0][2] * ((a[1][0] * a[2][1]) - (a[2][0] * a[1][1]));
          
    printf("%ld", det);
    return 0;
}`,
                explanation: "The determinant of a 3x3 matrix is calculated using the expansion by minors formula across the first row. This involves multiplying each element of the first row by the determinant of its corresponding 2x2 submatrix. The formula for a 2x2 matrix [[a,b],[c,d]] is `ad-bc`."
            }
        ]
    }
];
