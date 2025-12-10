import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART5: ProblemCategory[] = [
  {
    category: "SECTION 9 — SETS",
    problems: [
      {
        id: "python-s9-q1",
        title: "Union of sets",
        description: "Find the union of two sets.",
        statement: "Given two sets of numbers, find their union (all unique elements from both sets).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "The union set.",
        testCases: [{ input: "1 2 3\n3 4 5", output: "{1, 2, 3, 4, 5}" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
union_set = set1.union(set2)
# Or using the | operator: union_set = set1 | set2
print(sorted(list(union_set))) # Sorted for consistent output`,
        explanation: "The `.union()` method or the `|` operator can be used to combine two sets. The result is a new set containing all unique elements from both original sets."
      },
      {
        id: "python-s9-q2",
        title: "Intersection",
        description: "Find the intersection of two sets.",
        statement: "Given two sets of numbers, find their intersection (elements that are common to both sets).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "The intersection set.",
        testCases: [{ input: "1 2 3 4\n3 4 5 6", output: "{3, 4}" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
intersection_set = set1.intersection(set2)
# Or using the & operator: intersection_set = set1 & set2
print(sorted(list(intersection_set)))`,
        explanation: "The `.intersection()` method or the `&` operator returns a new set containing only the elements that are present in both sets."
      },
      {
        id: "python-s9-q3",
        title: "Difference",
        description: "Find the difference between two sets.",
        statement: "Given two sets, find the difference `set1 - set2` (elements in set1 but not in set2).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "The difference set.",
        testCases: [{ input: "1 2 3 4\n3 4 5 6", output: "{1, 2}" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
difference_set = set1.difference(set2)
# Or using the - operator: difference_set = set1 - set2
print(sorted(list(difference_set)))`,
        explanation: "The `.difference()` method or the `-` operator returns a new set containing elements that are in the first set but not in the second set."
      },
      {
        id: "python-s9-q4",
        title: "Convert list to set",
        description: "Convert a list into a set.",
        statement: "Read a list of items and convert it into a set to see the unique elements.",
        inputFormat: "Space-separated items.",
        outputFormat: "The resulting set.",
        testCases: [{ input: "apple banana apple", output: "{'apple', 'banana'}" }],
        solution: `items = input().split()
my_set = set(items)
print(sorted(list(my_set)))`,
        explanation: "The `set()` constructor can take any iterable, like a list, and will automatically create a set containing only the unique elements from that iterable."
      },
      {
        id: "python-s9-q5",
        title: "Remove duplicates using set",
        description: "Remove duplicate elements from a list while preserving order.",
        statement: "Given a list, remove duplicate elements while maintaining the original order of the first appearance.",
        inputFormat: "Space-separated items.",
        outputFormat: "A list of unique items in order.",
        testCases: [{ input: "apple banana apple cherry banana", output: "['apple', 'banana', 'cherry']" }],
        solution: `items = input().split()
# In Python 3.7+, dicts preserve insertion order
unique_ordered = list(dict.fromkeys(items))
print(unique_ordered)`,
        explanation: "`dict.fromkeys()` creates a dictionary from the list items as keys. Since dictionary keys must be unique, this removes duplicates. As of Python 3.7, dictionaries preserve the order of insertion, giving us an ordered unique list when converted back."
      },
      {
        id: "python-s9-q6",
        title: "Check subset",
        description: "Check if one set is a subset of another.",
        statement: "Given two sets, check if the first set is a subset of the second set (all elements of set1 are in set2).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "`True` or `False`.",
        testCases: [{ input: "1 2\n1 2 3", output: "True" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
print(set1.issubset(set2))`,
        explanation: "The `.issubset()` method returns `True` if all elements of the first set are contained within the second set."
      },
      {
        id: "python-s9-q7",
        title: "Check superset",
        description: "Check if one set is a superset of another.",
        statement: "Given two sets, check if the first set is a superset of the second set (it contains all elements of set2).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "`True` or `False`.",
        testCases: [{ input: "1 2 3\n1 2", output: "True" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
print(set1.issuperset(set2))`,
        explanation: "The `.issuperset()` method returns `True` if the first set contains all elements that are present in the second set."
      },
      {
        id: "python-s9-q8",
        title: "Find common elements in 2 sets",
        description: "Find elements that exist in both sets.",
        statement: "This is another way of asking for the intersection of two sets.",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "The set of common elements.",
        testCases: [{ input: "10 20 30\n20 30 40", output: "{20, 30}" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
print(sorted(list(set1 & set2)))`,
        explanation: "The `&` operator is a concise way to perform a set intersection, finding all elements that are common to both `set1` and `set2`."
      },
      {
        id: "python-s9-q9",
        title: "Find unique characters",
        description: "Find the unique characters in a string.",
        statement: "Given a string, find all the unique characters present in it.",
        inputFormat: "A single string.",
        outputFormat: "A set of unique characters.",
        testCases: [{ input: "hello", output: "{'h', 'e', 'l', 'o'}" }],
        solution: `s = input()
print(sorted(list(set(s))))`,
        explanation: "When you pass a string to the `set()` constructor, it automatically iterates through the characters and adds each unique character to the set."
      },
      {
        id: "python-s9-q10",
        title: "Mathematical set problems",
        description: "Find the symmetric difference.",
        statement: "Given two sets, find their symmetric difference (elements in either set, but not in both).",
        inputFormat: "Two lines, each with space-separated integers.",
        outputFormat: "The symmetric difference set.",
        testCases: [{ input: "1 2 3\n3 4 5", output: "{1, 2, 4, 5}" }],
        solution: `set1 = set(map(int, input().split()))
set2 = set(map(int, input().split()))
sym_diff = set1.symmetric_difference(set2)
# Or using the ^ operator: sym_diff = set1 ^ set2
print(sorted(list(sym_diff)))`,
        explanation: "The `.symmetric_difference()` method or the `^` operator returns a new set with elements that are in exactly one of the two sets."
      }
    ]
  },
  {
    category: "SECTION 10 — DICTIONARIES",
    problems: [
      {
        id: "python-s10-q1",
        title: "Count frequency of elements",
        description: "Count the frequency of elements in a list.",
        statement: "Given a list of items, create a dictionary that stores the frequency of each item.",
        inputFormat: "Space-separated items.",
        outputFormat: "The frequency dictionary.",
        testCases: [{ input: "apple banana apple", output: "{'apple': 2, 'banana': 1}" }],
        solution: `from collections import Counter

items = input().split()
frequency = Counter(items)
print(dict(frequency))`,
        explanation: "The `collections.Counter` class is a specialized dictionary subclass that is designed for counting hashable objects. It's the most efficient and convenient way to do frequency counts."
      },
      {
        id: "python-s10-q2",
        title: "Merge dictionaries",
        description: "Merge two dictionaries into one.",
        statement: "Given two dictionaries, merge them into a single dictionary. If a key exists in both, the value from the second dictionary should be used.",
        inputFormat: "No input needed for demonstration.",
        outputFormat: "The merged dictionary.",
        testCases: [{ input: "", output: "{'a': 1, 'b': 3, 'c': 4}" }],
        solution: `dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

# In Python 3.9+
merged_dict = dict1 | dict2
print(merged_dict)

# For older Python versions
# merged_dict = {**dict1, **dict2}
# print(merged_dict)`,
        explanation: "In Python 3.9 and newer, the `|` operator provides a clean syntax for merging dictionaries. For older versions, the dictionary unpacking operator `**` can be used to achieve the same result."
      },
      {
        id: "python-s10-q3",
        title: "Sort dictionary by key",
        description: "Sort a dictionary by its keys.",
        statement: "Given a dictionary, print its items sorted alphabetically by key.",
        inputFormat: "No input needed.",
        outputFormat: "The items printed in sorted order.",
        testCases: [{ input: "", output: "apple: 2\nbanana: 1\ncherry: 3" }],
        solution: `my_dict = {'banana': 1, 'apple': 2, 'cherry': 3}
for key in sorted(my_dict.keys()):
    print(f"{key}: {my_dict[key]}")`,
        explanation: "We get the keys using `.keys()`, sort them using `sorted()`, and then iterate through the sorted list of keys to access and print the corresponding values from the original dictionary."
      },
      {
        id: "python-s10-q4",
        title: "Sort by value",
        description: "Sort a dictionary by its values.",
        statement: "Given a dictionary, print its items sorted by value in ascending order.",
        inputFormat: "No input needed.",
        outputFormat: "The items printed in sorted order.",
        testCases: [{ input: "", output: "banana: 1\napple: 2\ncherry: 3" }],
        solution: `my_dict = {'banana': 1, 'apple': 2, 'cherry': 3}
sorted_items = sorted(my_dict.items(), key=lambda item: item[1])

for key, value in sorted_items:
    print(f"{key}: {value}")`,
        explanation: "`my_dict.items()` returns a list of (key, value) tuples. The `sorted()` function's `key` argument takes a lambda function `lambda item: item[1]`, which tells it to sort based on the second element of each tuple (the value)."
      },
      {
        id: "python-s10-q5",
        title: "Invert dictionary",
        description: "Swap keys and values in a dictionary.",
        statement: "Given a dictionary, create a new dictionary where keys become values and values become keys. Assume values are unique.",
        inputFormat: "No input needed.",
        outputFormat: "The inverted dictionary.",
        testCases: [{ input: "", output: "{1: 'a', 2: 'b', 3: 'c'}" }],
        solution: `my_dict = {'a': 1, 'b': 2, 'c': 3}
inverted_dict = {value: key for key, value in my_dict.items()}
print(inverted_dict)`,
        explanation: "A dictionary comprehension is used for a concise solution. It iterates through the original dictionary's items and creates a new dictionary with the key and value swapped for each item."
      },
      {
        id: "python-s10-q6",
        title: "Check key existence",
        description: "Check if a key exists in a dictionary.",
        statement: "Given a dictionary and a key, check if the key is present in the dictionary.",
        inputFormat: "No input needed.",
        outputFormat: "True or False.",
        testCases: [{ input: "", output: "True\nFalse" }],
        solution: `my_dict = {'a': 1, 'b': 2}
print('a' in my_dict)
print('c' in my_dict)`,
        explanation: "The `in` operator provides a fast and readable way to check for the existence of a key in a dictionary. It has an average time complexity of O(1)."
      },
      {
        id: "python-s10-q7",
        title: "Add multiple entries",
        description: "Add entries from another dictionary.",
        statement: "Given two dictionaries, update the first one with the key-value pairs from the second one.",
        inputFormat: "No input needed.",
        outputFormat: "The updated dictionary.",
        testCases: [{ input: "", output: "{'a': 1, 'b': 3, 'c': 4}" }],
        solution: `dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
dict1.update(dict2)
print(dict1)`,
        explanation: "The `.update()` method merges the second dictionary into the first. If a key exists in both, the value from the second dictionary will overwrite the value in the first."
      },
      {
        id: "python-s10-q8",
        title: "Remove an entry",
        description: "Remove a key-value pair from a dictionary.",
        statement: "Given a dictionary, remove the entry with a specific key.",
        inputFormat: "No input needed.",
        outputFormat: "The dictionary after removal.",
        testCases: [{ input: "", output: "{'a': 1, 'c': 3}" }],
        solution: `my_dict = {'a': 1, 'b': 2, 'c': 3}
del my_dict['b']
print(my_dict)`,
        explanation: "The `del` keyword is used to remove a key-value pair from a dictionary by specifying the key. This modifies the dictionary in-place."
      },
      {
        id: "python-s10-q9",
        title: "Dictionary comprehension",
        description: "Create a dictionary using comprehension.",
        statement: "Create a dictionary where the keys are numbers from 1 to 5 and the values are their squares.",
        inputFormat: "No input.",
        outputFormat: "The resulting dictionary.",
        testCases: [{ input: "", output: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}" }],
        solution: `squares = {x: x**2 for x in range(1, 6)}
print(squares)`,
        explanation: "Dictionary comprehension provides a concise syntax for creating dictionaries. The expression `{key_expression: value_expression for item in iterable}` iterates through the iterable and generates key-value pairs."
      },
      {
        id: "python-s10-q10",
        title: "Convert dictionary to list of tuples",
        description: "Convert a dictionary into a list of its (key, value) pairs.",
        statement: "Given a dictionary, convert it into a list of tuples, where each tuple is a (key, value) pair.",
        inputFormat: "No input needed.",
        outputFormat: "The list of tuples.",
        testCases: [{ input: "", output: "[('a', 1), ('b', 2)]" }],
        solution: `my_dict = {'a': 1, 'b': 2}
item_list = list(my_dict.items())
print(item_list)`,
        explanation: "The `.items()` method returns a view object that displays a list of a given dictionary's key-value tuple pairs. We can convert this view object into a list using the `list()` constructor."
      }
    ]
  }
];
