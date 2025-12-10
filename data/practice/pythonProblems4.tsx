import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART4: ProblemCategory[] = [
  {
    category: "SECTION 7 — LISTS (Arrays)",
    problems: [
      {
        id: "python-s7-q1",
        title: "Find max in list",
        description: "Find the largest element in a list.",
        statement: "Given a list of numbers, find the largest number in the list.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "8 2 9 1 7", output: "9" }],
        solution: `numbers = list(map(int, input().split()))
print(max(numbers))`,
        explanation: "The built-in `max()` function is the most efficient and readable way to find the largest element in a list."
      },
      {
        id: "python-s7-q2",
        title: "Find min in list",
        description: "Find the smallest element in a list.",
        statement: "Given a list of numbers, find the smallest number in the list.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The smallest integer.",
        testCases: [{ input: "8 2 9 1 7", output: "1" }],
        solution: `numbers = list(map(int, input().split()))
print(min(numbers))`,
        explanation: "Similar to `max()`, the built-in `min()` function finds the smallest element in any iterable, including a list."
      },
      {
        id: "python-s7-q3",
        title: "Sum of list",
        description: "Find the sum of all elements in a list.",
        statement: "Calculate and print the sum of all numbers in a list.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sum.",
        testCases: [{ input: "1 2 3 4 5", output: "15" }],
        solution: `numbers = list(map(int, input().split()))
print(sum(numbers))`,
        explanation: "The built-in `sum()` function efficiently calculates the total sum of all elements in a numeric list."
      },
      {
        id: "python-s7-q4",
        title: "Product of list",
        description: "Find the product of all elements in a list.",
        statement: "Calculate and print the product of all numbers in a list.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The product.",
        testCases: [{ input: "1 2 3 4", output: "24" }],
        solution: `import math
numbers = list(map(int, input().split()))
print(math.prod(numbers))`,
        explanation: "The `math.prod()` function, available from Python 3.8 onwards, is the best way to calculate the product of all elements in a list."
      },
      {
        id: "python-s7-q5",
        title: "Reverse a list",
        description: "Reverse the elements of a list.",
        statement: "Write a program to reverse a list and print its elements.",
        inputFormat: "Space-separated items.",
        outputFormat: "The reversed list.",
        testCases: [ { input: "1 2 3 4 5", output: "[5, 4, 3, 2, 1]" } ],
        solution: `items = input().split()
reversed_items = items[::-1]
# To print as a list of integers if needed:
# numbers = list(map(int, reversed_items))
# print(numbers)
# For this problem, let's just print the reversed string list
print(reversed_items)`,
        explanation: "Slicing with `[::-1]` is the most Pythonic way to create a reversed copy of a list."
      },
      {
        id: "python-s7-q6",
        title: "Count occurrences",
        description: "Count how many times an element appears.",
        statement: "Count the frequency of a given element in a list.",
        inputFormat: "First line: space-separated items. Second line: the item to count.",
        outputFormat: "The frequency.",
        testCases: [{ input: "1 5 3 5 8 5 9\n5", output: "3" }],
        solution: `items = input().split()
key = input()
print(items.count(key))`,
        explanation: "The list method `.count()` is the simplest way to count the occurrences of a specific element within the list."
      },
      {
        id: "python-s7-q7",
        title: "Remove duplicates",
        description: "Remove duplicate elements from a list.",
        statement: "Given a list, create a new list with duplicate elements removed. The order of the remaining elements does not matter.",
        inputFormat: "Space-separated items.",
        outputFormat: "A list of unique items.",
        testCases: [{ input: "1 2 3 2 4 1", output: "['1', '2', '3', '4']" }],
        solution: `items = input().split()
unique_items = list(set(items))
print(sorted(unique_items)) # Sorted for consistent output`,
        explanation: "Converting a list to a `set` automatically removes all duplicate elements. We then convert it back to a `list`."
      },
      {
        id: "python-s7-q8",
        title: "Sort a list",
        description: "Sort a list in ascending order.",
        statement: "Sort a given list of numbers in ascending order.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sorted list.",
        testCases: [{ input: "5 1 4 2 8", output: "[1, 2, 4, 5, 8]" }],
        solution: `numbers = list(map(int, input().split()))
numbers.sort()
print(numbers)`,
        explanation: "The list method `.sort()` sorts the list in-place (modifies the original list). Alternatively, `sorted(numbers)` would return a new sorted list without changing the original."
      },
      {
        id: "python-s7-q9",
        title: "Merge two lists",
        description: "Merge two lists into one.",
        statement: "Read two lists and merge them into a single list.",
        inputFormat: "Two lines, each with space-separated items.",
        outputFormat: "The merged list.",
        testCases: [{ input: "1 2 3\n4 5", output: "['1', '2', '3', '4', '5']" }],
        solution: `list1 = input().split()
list2 = input().split()
merged_list = list1 + list2
print(merged_list)`,
        explanation: "The `+` operator can be used to concatenate two lists, creating a new list containing all elements from both."
      },
      {
        id: "python-s7-q10",
        title: "Find second largest element",
        description: "Find the second largest element in a list.",
        statement: "Write a program to find the second largest unique element in a list of numbers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The second largest integer.",
        testCases: [{ input: "10 5 8 20 12", output: "12" }],
        solution: `numbers = list(map(int, input().split()))
unique_numbers = sorted(list(set(numbers)), reverse=True)
if len(unique_numbers) > 1:
    print(unique_numbers[1])
else:
    print("Not enough unique elements")`,
        explanation: "First, we get the unique elements using `set()`. Then we sort them in reverse (descending) order. The second largest element will be at index 1."
      },
      {
        id: "python-s7-q11",
        title: "Find k-th smallest element",
        description: "Find the k-th smallest element.",
        statement: "Given a list of numbers and an integer k, find the k-th smallest element.",
        inputFormat: "First line: K. Second line: space-separated integers.",
        outputFormat: "The k-th smallest element.",
        testCases: [{ input: "3\n7 10 4 3 20 15", output: "7" }],
        solution: `k = int(input())
numbers = list(map(int, input().split()))
numbers.sort()
print(numbers[k - 1])`,
        explanation: "The simplest approach is to sort the list first. The k-th smallest element will then be at index `k-1` (since lists are 0-indexed)."
      },
      {
        id: "python-s7-q12",
        title: "Find unique elements",
        description: "Get a list of unique elements from a list.",
        statement: "From a given list, produce a list containing only the unique elements in their original order.",
        inputFormat: "Space-separated items.",
        outputFormat: "The list of unique items.",
        testCases: [{ input: "apple banana apple cherry banana", output: "['apple', 'banana', 'cherry']" }],
        solution: `items = input().split()
unique_items = []
seen = set()
for item in items:
    if item not in seen:
        unique_items.append(item)
        seen.add(item)
print(unique_items)`,
        explanation: "While `list(set(items))` removes duplicates, it doesn't preserve order. This solution iterates through the original list and adds items to a new list only if they haven't been seen before, thus preserving the original order of first appearance."
      },
      {
        id: "python-s7-q13",
        title: "Rotate list (left)",
        description: "Rotate a list to the left by k positions.",
        statement: "Rotate a list to the left by `k` positions.",
        inputFormat: "First line: K. Second line: space-separated items.",
        outputFormat: "The rotated list.",
        testCases: [{ input: "2\n1 2 3 4 5", output: "['3', '4', '5', '1', '2']" }],
        solution: `k = int(input())
items = input().split()
# Ensure k is within the bounds of the list length
k = k % len(items)
rotated_list = items[k:] + items[:k]
print(rotated_list)`,
        explanation: "List slicing provides an elegant solution. `items[k:]` gets all elements from index `k` to the end. `items[:k]` gets the first `k` elements. Concatenating them in this order performs a left rotation."
      },
      {
        id: "python-s7-q14",
        title: "Rotate list (right)",
        description: "Rotate a list to the right by k positions.",
        statement: "Rotate a list to the right by `k` positions.",
        inputFormat: "First line: K. Second line: space-separated items.",
        outputFormat: "The rotated list.",
        testCases: [{ input: "2\n1 2 3 4 5", output: "['4', '5', '1', '2', '3']" }],
        solution: `k = int(input())
items = input().split()
k = k % len(items)
rotated_list = items[-k:] + items[:-k]
print(rotated_list)`,
        explanation: "This is similar to the left rotate. `items[-k:]` gets the last `k` elements. `items[:-k]` gets all elements except the last `k`. Concatenating them performs a right rotation."
      },
      {
        id: "python-s7-q15",
        title: "List comprehension problems",
        description: "Use list comprehension to create new lists.",
        statement: "Given a list of numbers, create a new list containing the squares of only the even numbers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The new list.",
        testCases: [{ input: "1 2 3 4 5 6", output: "[4, 16, 36]" }],
        solution: `numbers = list(map(int, input().split()))
squared_evens = [x**2 for x in numbers if x % 2 == 0]
print(squared_evens)`,
        explanation: "List comprehension provides a concise syntax for creating lists. The expression `[x**2 for x in numbers if x % 2 == 0]` reads as: 'for each `x` in `numbers`, if `x` is even, compute `x**2` and add it to the new list'."
      }
    ]
  },
  {
    category: "SECTION 8 — TUPLES",
    problems: [
      {
        id: "python-s8-q1",
        title: "Convert list to tuple",
        description: "Convert a list into a tuple.",
        statement: "Read a list of items and convert it into a tuple.",
        inputFormat: "Space-separated items.",
        outputFormat: "The resulting tuple.",
        testCases: [{ input: "apple banana cherry", output: "('apple', 'banana', 'cherry')" }],
        solution: `items = input().split()
my_tuple = tuple(items)
print(my_tuple)`,
        explanation: "The `tuple()` constructor can be used to create a tuple from any iterable, including a list."
      },
      {
        id: "python-s8-q2",
        title: "Tuple unpacking",
        description: "Unpack a tuple into variables.",
        statement: "Given a tuple of three elements, unpack its values into three separate variables and print them.",
        inputFormat: "No input needed for demonstration.",
        outputFormat: "The values on separate lines.",
        testCases: [{ input: "", output: "apple\nbanana\ncherry" }],
        solution: `fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)`,
        explanation: "Tuple unpacking allows you to assign the elements of a tuple to multiple variables in a single line. The number of variables on the left must match the number of elements in the tuple."
      },
      {
        id: "python-s8-q3",
        title: "Swap using tuple",
        description: "Swap two variables using tuple unpacking.",
        statement: "Swap two variables `a` and `b` in a single line using tuple packing and unpacking.",
        inputFormat: "Two integers.",
        outputFormat: "The swapped values.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `a, b = map(int, input().split())
a, b = b, a
print(a, b)`,
        explanation: "This is a common Python idiom. The expression `b, a` on the right side creates a new tuple `(20, 10)`. Python then unpacks this tuple into the variables `a` and `b` on the left side, completing the swap."
      },
      {
        id: "python-s8-q4",
        title: "Count element in tuple",
        description: "Count occurrences of an element in a tuple.",
        statement: "Given a tuple, count how many times a specific element appears.",
        inputFormat: "No input needed for demonstration.",
        outputFormat: "The count.",
        testCases: [{ input: "", output: "3" }],
        solution: `my_tuple = (1, 2, 3, 2, 4, 2)
print(my_tuple.count(2))`,
        explanation: "Like lists, tuples have a `.count()` method that returns the number of times a given element appears in the tuple."
      },
      {
        id: "python-s8-q5",
        title: "Find index of element",
        description: "Find the first index of an element in a tuple.",
        statement: "Given a tuple, find the index of the first occurrence of a specific element.",
        inputFormat: "No input needed for demonstration.",
        outputFormat: "The index.",
        testCases: [{ input: "", output: "2" }],
        solution: `my_tuple = ('a', 'b', 'c', 'd', 'c')
print(my_tuple.index('c'))`,
        explanation: "The `.index()` method searches the tuple for a specified value and returns the position of where it was first found. It will raise a `ValueError` if the element is not found."
      }
    ]
  }
];
