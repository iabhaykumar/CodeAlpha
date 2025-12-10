import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART7: ProblemCategory[] = [
  {
    category: "SECTION 13 — RECURSION",
    problems: [
      {
        id: "python-s13-q1",
        title: "Factorial recursive",
        description: "Find factorial using recursion.",
        statement: "Write a recursive function to find the factorial of a number.",
        inputFormat: "A non-negative integer.",
        outputFormat: "The factorial.",
        testCases: [{ input: "5", output: "120" }],
        solution: `def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n <= 1:
        return 1
    # Recursive step: n * factorial of (n-1)
    else:
        return n * factorial(n - 1)

num = int(input())
print(factorial(num))`,
        explanation: "The function calls itself with a smaller value (`n-1`) until it reaches the base case (`n <= 1`). The results are then multiplied up the call stack."
      },
      {
        id: "python-s13-q2",
        title: "Fibonacci recursive",
        description: "Find the nth Fibonacci number using recursion.",
        statement: "Write a recursive method to find the nth term of the Fibonacci sequence (0th term is 0, 1st is 1).",
        inputFormat: "An integer n.",
        outputFormat: "The nth Fibonacci number.",
        testCases: [{input: "9", output: "34"}],
        solution: `def fibonacci(n):
    # Base cases
    if n <= 1:
        return n
    # Recursive step
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

num = int(input())
print(fibonacci(num))`,
        explanation: "The base cases handle the first two numbers in the sequence (0 and 1). The recursive step defines any Fibonacci number as the sum of the two preceding ones."
      },
      {
        id: "python-s13-q3",
        title: "Sum of digits recursive",
        description: "Find the sum of digits using recursion.",
        statement: "Write a recursive function to calculate the sum of the digits of an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The sum of digits.",
        testCases: [{ input: "123", output: "6" }],
        solution: `def sum_digits(n):
    # Base case: if number is a single digit
    if n < 10:
        return n
    # Recursive step: last digit + sum of rest
    else:
        return (n % 10) + sum_digits(n // 10)

num = int(input())
print(sum_digits(num))`,
        explanation: "The function finds the sum by adding the last digit (`n % 10`) to the result of calling itself with the rest of the number (`n // 10`). The recursion stops when the number is a single digit."
      },
      {
        id: "python-s13-q4",
        title: "Reverse number recursive",
        description: "Reverse a number using recursion.",
        statement: "Write a recursive function to reverse a given integer.",
        inputFormat: "An integer.",
        outputFormat: "The reversed integer.",
        testCases: [{ input: "1234", output: "4321" }],
        solution: `def reverse_number(n, rev=0):
    # Base case
    if n == 0:
        return rev
    # Recursive step
    else:
        last_digit = n % 10
        rev = rev * 10 + last_digit
        return reverse_number(n // 10, rev)

num = int(input())
print(reverse_number(num))`,
        explanation: "This function uses a helper argument `rev` to build the reversed number. In each call, it peels off the last digit of `n` and adds it to the end of `rev`."
      },
      {
        id: "python-s13-q5",
        title: "Power function recursive",
        description: "Calculate power using recursion.",
        statement: "Write a recursive function to calculate `base` raised to the power of `exponent`.",
        inputFormat: "Two integers: base and exponent.",
        outputFormat: "The result.",
        testCases: [{ input: "3 4", output: "81" }],
        solution: `def power(base, exp):
    # Base case
    if exp == 0:
        return 1
    # Recursive step
    else:
        return base * power(base, exp - 1)

b, e = map(int, input().split())
print(power(b, e))`,
        explanation: "The logic is based on the identity `x^n = x * x^(n-1)`. The base case is that any number to the power of 0 is 1. The function multiplies the base by the result of calling itself with a decremented exponent."
      },
      {
        id: "python-s13-q6",
        title: "GCD recursive",
        description: "Find the GCD of two numbers using recursion.",
        statement: "Write a recursive method for the Euclidean algorithm to find the GCD.",
        inputFormat: "Two integers.",
        outputFormat: "The GCD.",
        testCases: [{ input: "48 18", output: "6" }],
        solution: `def gcd(a, b):
    # Base case
    if b == 0:
        return a
    # Recursive step
    else:
        return gcd(b, a % b)

num1, num2 = map(int, input().split())
print(gcd(num1, num2))`,
        explanation: "This is a direct recursive implementation of the Euclidean algorithm. The base case is when the second number `b` is 0, at which point `a` is the GCD. The recursive step calls the function with `b` and the remainder of `a / b`."
      },
      {
        id: "python-s13-q7",
        title: "Binary search recursive",
        description: "Implement binary search using recursion.",
        statement: "Write a recursive method to perform a binary search on a sorted list.",
        inputFormat: "First line: key. Second line: sorted list.",
        outputFormat: "The index of the key or -1.",
        testCases: [{ input: "12\n2 5 8 12 16", output: "3" }],
        solution: `def binary_search(arr, low, high, key):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == key:
            return mid
        elif arr[mid] > key:
            return binary_search(arr, low, mid - 1, key)
        else:
            return binary_search(arr, mid + 1, high, key)
    else:
        return -1

k = int(input())
numbers = list(map(int, input().split()))
result = binary_search(numbers, 0, len(numbers) - 1, k)
print(result)`,
        explanation: "The function searches a portion of the array defined by `low` and `high`. It checks the middle element. If it's not a match, it makes a recursive call on either the left or right half of the current portion."
      },
      {
        id: "python-s13-q8",
        title: "Tower of Hanoi",
        description: "Solve the Tower of Hanoi puzzle.",
        statement: "Write a program to solve the Tower of Hanoi puzzle for N disks.",
        inputFormat: "An integer N for the number of disks.",
        outputFormat: "The sequence of moves.",
        testCases: [{ input: "3", output: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C" }],
        solution: `def tower_of_hanoi(n, source, destination, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {destination}")
        return
    tower_of_hanoi(n - 1, source, auxiliary, destination)
    print(f"Move disk {n} from {source} to {destination}")
    tower_of_hanoi(n - 1, auxiliary, destination, source)

disks = int(input())
tower_of_hanoi(disks, 'A', 'C', 'B')`,
        explanation: "This is a classic recursion problem. To move N disks from source to destination: 1. Move N-1 disks from source to auxiliary. 2. Move the largest disk N from source to destination. 3. Move the N-1 disks from auxiliary to destination."
      },
      {
        id: "python-s13-q9",
        title: "Sum of list recursive",
        description: "Find the sum of list elements using recursion.",
        statement: "Write a recursive function to find the sum of all elements in a list of integers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sum.",
        testCases: [{ input: "1 2 3 4 5", output: "15" }],
        solution: `def sum_list(arr):
    # Base case
    if not arr:
        return 0
    # Recursive step: first element + sum of the rest
    else:
        return arr[0] + sum_list(arr[1:])

numbers = list(map(int, input().split()))
print(sum_list(numbers))`,
        explanation: "The base case is an empty list, which has a sum of 0. The recursive step returns the first element of the list plus the sum of the rest of the list (obtained by calling itself on a slice of the list)."
      },
      {
        id: "python-s13-q10",
        title: "Count digits recursive",
        description: "Count the number of digits using recursion.",
        statement: "Write a recursive function to count the number of digits in an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The number of digits.",
        testCases: [{ input: "12345", output: "5" }],
        solution: `def count_digits(n):
    n = abs(n)
    # Base case
    if n < 10:
        return 1
    # Recursive step
    else:
        return 1 + count_digits(n // 10)

num = int(input())
if num == 0:
    print(1)
else:
    print(count_digits(num))`,
        explanation: "The function handles negative numbers by taking the absolute value. The base case is a single-digit number. The recursive step adds 1 to the count of digits in the rest of the number (obtained by integer division `// 10`)."
      }
    ]
  },
  {
    category: "SECTION 14 — SEARCHING & SORTING",
    problems: [
      {
        id: "python-s14-q1",
        title: "Linear search",
        description: "Implement linear search.",
        statement: "Write a function to search for a key in a list. If found, return its index; otherwise, return -1.",
        inputFormat: "First line: key. Second line: list.",
        outputFormat: "Index or -1.",
        testCases: [{ input: "40\n10 20 30 40 50", output: "3" }],
        solution: `def linear_search(arr, key):
    for i, value in enumerate(arr):
        if value == key:
            return i
    return -1

k = int(input())
numbers = list(map(int, input().split()))
print(linear_search(numbers, k))`,
        explanation: "Linear search iterates through each element of the list, one by one, until it finds the target key or reaches the end of the list."
      },
      {
        id: "python-s14-q2",
        title: "Binary search",
        description: "Implement binary search.",
        statement: "Write an iterative function to perform binary search on a sorted list.",
        inputFormat: "First line: key. Second line: sorted list.",
        outputFormat: "Index or -1.",
        testCases: [{ input: "12\n2 5 8 12 16", output: "3" }],
        solution: `def binary_search(arr, key):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            low = mid + 1
        else:
            high = mid - 1
    return -1

k = int(input())
numbers = list(map(int, input().split()))
print(binary_search(numbers, k))`,
        explanation: "Binary search works on a sorted list. It repeatedly divides the search interval in half. If the value of the search key is less than the item in the middle of the interval, it narrows the interval to the lower half. Otherwise, it narrows it to the upper half."
      },
      {
        id: "python-s14-q3",
        title: "Bubble sort",
        description: "Implement bubble sort.",
        statement: "Implement the Bubble Sort algorithm to sort a list of integers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

numbers = list(map(int, input().split()))
print(bubble_sort(numbers))`,
        explanation: "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass is repeated until the list is sorted. Time complexity is O(n²)."
      },
      {
        id: "python-s14-q4",
        title: "Insertion sort",
        description: "Implement insertion sort.",
        statement: "Implement the Insertion Sort algorithm.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

numbers = list(map(int, input().split()))
print(insertion_sort(numbers))`,
        explanation: "Insertion sort builds the final sorted array one item at a time. It iterates through the input elements and inserts each element into its correct position in the sorted part of the array. Time complexity is O(n²)."
      },
      {
        id: "python-s14-q5",
        title: "Selection sort",
        description: "Implement selection sort.",
        statement: "Implement the Selection Sort algorithm.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

numbers = list(map(int, input().split()))
print(selection_sort(numbers))`,
        explanation: "Selection sort repeatedly finds the minimum element from the unsorted part of the list and puts it at the beginning. Time complexity is O(n²)."
      },
      {
        id: "python-s14-q6",
        title: "Merge sort",
        description: "Implement merge sort.",
        statement: "Implement the Merge Sort algorithm.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

numbers = list(map(int, input().split()))
print(merge_sort(numbers))`,
        explanation: "Merge sort is a divide-and-conquer algorithm. It divides the list into two halves, recursively sorts them, and then merges the two sorted halves. Time complexity is O(n log n)."
      },
      {
        id: "python-s14-q7",
        title: "Quick sort",
        description: "Implement quick sort.",
        statement: "Implement the Quick Sort algorithm.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quick_sort(left) + middle + quick_sort(right)

numbers = list(map(int, input().split()))
print(quick_sort(numbers))`,
        explanation: "Quick sort is another divide-and-conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. This version uses list comprehensions for a concise implementation. Average time complexity is O(n log n)."
      },
      {
        id: "python-s14-q8",
        title: "Count sort",
        description: "Implement count sort.",
        statement: "Implement the Count Sort algorithm for a list of non-negative integers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8 1 4", output: "[1, 1, 2, 4, 4, 5, 8]" }],
        solution: `def count_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    
    for num in arr:
        count[num] += 1
        
    sorted_arr = []
    for i in range(len(count)):
        sorted_arr.extend([i] * count[i])
        
    return sorted_arr

numbers = list(map(int, input().split()))
print(count_sort(numbers))`,
        explanation: "Count sort works by counting the number of occurrences of each distinct element. It is only efficient if the range of input values is not significantly larger than the number of elements. Time complexity is O(n + k) where k is the range of the input."
      },
      {
        id: "python-s14-q9",
        title: "Find element in rotated array",
        description: "Search in a sorted, rotated array.",
        statement: "An array is sorted and then rotated. Find a key in it.",
        inputFormat: "First line: key. Second line: list.",
        outputFormat: "Index or -1.",
        testCases: [{ input: "6\n4 5 6 7 0 1 2", output: "2" }],
        solution: `def search_rotated(arr, key):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == key:
            return mid
        # Left half is sorted
        if arr[low] <= arr[mid]:
            if arr[low] <= key < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        # Right half is sorted
        else:
            if arr[mid] < key <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

k = int(input())
numbers = list(map(int, input().split()))
print(search_rotated(numbers, k))`,
        explanation: "This is a modified binary search. In each step, we determine which half of the array is sorted. Then we check if the key lies within that sorted half to decide where to continue the search."
      },
      {
        id: "python-s14-q10",
        title: "Two sum (sorted list)",
        description: "Find a pair that sums to a target.",
        statement: "In a sorted list, find two numbers that add up to a specific target. Return their indices.",
        inputFormat: "First line: target. Second line: sorted list.",
        outputFormat: "Indices of the two numbers or None.",
        testCases: [{ input: "9\n2 7 11 15", output: "(0, 1)" }],
        solution: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

t = int(input())
numbers = list(map(int, input().split()))
print(two_sum_sorted(numbers, t))`,
        explanation: "This uses the Two Pointer technique. One pointer starts at the beginning and one at the end. If the sum is too small, we move the left pointer forward. If it's too large, we move the right pointer backward. This works because the list is sorted."
      }
    ]
  }
];
