import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART6: ProblemCategory[] = [
  {
    category: "SECTION 11 — STRINGS (Beginner → Advanced)",
    problems: [
      {
        id: "python-s11-q1",
        title: "Reverse a string",
        description: "Reverse a given string.",
        statement: "Write a program to reverse a string.",
        inputFormat: "A single string.",
        outputFormat: "The reversed string.",
        testCases: [{ input: "hello", output: "olleh" }],
        solution: `s = input()
print(s[::-1])`,
        explanation: "String slicing with `[::-1]` is the most Pythonic and concise way to reverse a string. It creates a reversed copy of the string."
      },
      {
        id: "python-s11-q2",
        title: "Count vowels",
        description: "Count the vowels in a string.",
        statement: "Count the number of vowels (a, e, i, o, u) in a string, case-insensitively.",
        inputFormat: "A single string.",
        outputFormat: "The vowel count.",
        testCases: [{ input: "Programming", output: "3" }],
        solution: `s = input().lower()
vowels = "aeiou"
count = 0
for char in s:
    if char in vowels:
        count += 1
print(count)`,
        explanation: "We convert the input string to lowercase to handle both 'a' and 'A'. Then, we loop through each character and check if it exists in our `vowels` string."
      },
      {
        id: "python-s11-q3",
        title: "Count consonants",
        description: "Count the consonants in a string.",
        statement: "Count the number of consonants in a string (case-insensitive).",
        inputFormat: "A single string.",
        outputFormat: "The consonant count.",
        testCases: [{ input: "Hello", output: "3" }],
        solution: `s = input().lower()
vowels = "aeiou"
count = 0
for char in s:
    if 'a' <= char <= 'z' and char not in vowels:
        count += 1
print(count)`,
        explanation: "A character is a consonant if it is an alphabet (`'a' <= char <= 'z'`) and it is not a vowel. The code checks both conditions for each character."
      },
      {
        id: "python-s11-q4",
        title: "Remove vowels",
        description: "Remove all vowels from a string.",
        statement: "Write a program that removes all vowels from a given string (case-insensitive).",
        inputFormat: "A single string.",
        outputFormat: "The string without vowels.",
        testCases: [{ input: "CodeAlpha", output: "CdLph" }],
        solution: `s = input()
vowels = "aeiouAEIOU"
result = ""
for char in s:
    if char not in vowels:
        result += char
print(result)`,
        explanation: "We build a new `result` string. We iterate through the input string, and if a character is not a vowel, we append it to our `result`."
      },
      {
        id: "python-s11-q5",
        title: "Remove spaces",
        description: "Remove all whitespace characters.",
        statement: "Write a program to remove all spaces from a string.",
        inputFormat: "A string with spaces.",
        outputFormat: "The string without spaces.",
        testCases: [{ input: "Hello World", output: "HelloWorld" }],
        solution: `s = input()
print(s.replace(" ", ""))`,
        explanation: "The string method `.replace()` can be used to replace all occurrences of a substring with another. Here, we replace all space characters with an empty string."
      },
      {
        id: "python-s11-q6",
        title: "Check palindrome",
        description: "Check if a string is a palindrome.",
        statement: "A palindrome reads the same forwards and backwards. Check if the input is a palindrome.",
        inputFormat: "A single string.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "madam", output: "Yes" }],
        solution: `s = input()
if s == s[::-1]:
    print("Yes")
else:
    print("No")`,
        explanation: "We simply compare the original string with its reversed version obtained from slicing (`s[::-1]`)."
      },
      {
        id: "python-s11-q7",
        title: "Replace character",
        description: "Replace all occurrences of a character.",
        statement: "Replace all occurrences of character 'a' with 'x' in a string.",
        inputFormat: "A single string.",
        outputFormat: "The modified string.",
        testCases: [{ input: "banana", output: "bxnxnx" }],
        solution: `s = input()
print(s.replace('a', 'x'))`,
        explanation: "The `.replace()` method is used to replace all occurrences of the first argument with the second argument."
      },
      {
        id: "python-s11-q8",
        title: "Find substring",
        description: "Check if a string contains a substring.",
        statement: "Check if a given string contains the substring 'Alpha'.",
        inputFormat: "A single string.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "CodeAlpha", output: "Yes" }],
        solution: `s = input()
if "Alpha" in s:
    print("Yes")
else:
    print("No")`,
        explanation: "The `in` operator can be used to check for the presence of a substring within a larger string. It returns `True` or `False`."
      },
      {
        id: "python-s11-q9",
        title: "Count words",
        description: "Count the number of words in a string.",
        statement: "Given a sentence, count the number of words.",
        inputFormat: "A single line of text.",
        outputFormat: "The word count.",
        testCases: [{ input: "Hello world how are you", output: "5" }],
        solution: `s = input()
words = s.split()
print(len(words))`,
        explanation: "The `.split()` method breaks the string into a list of words, using whitespace as the delimiter. The `len()` of this list gives the word count."
      },
      {
        id: "python-s11-q10",
        title: "Anagram check",
        description: "Check if two strings are anagrams.",
        statement: "Two strings are anagrams if they contain the same characters with the same frequencies (e.g., 'listen' and 'silent'). Check if two given strings are anagrams.",
        inputFormat: "Two strings on separate lines.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "listen\nsilent", output: "Yes" }],
        solution: `s1 = input()
s2 = input()
if sorted(s1) == sorted(s2):
    print("Yes")
else:
    print("No")`,
        explanation: "The easiest way to check for anagrams is to sort both strings. If the sorted versions are identical, the original strings must have been anagrams."
      },
      {
        id: "python-s11-q11",
        title: "Remove special characters",
        description: "Remove all non-alphanumeric characters.",
        statement: "Given a string, remove all characters that are not letters or numbers.",
        inputFormat: "A string.",
        outputFormat: "The cleaned string.",
        testCases: [{ input: "He@l!lo,", output: "Hello" }],
        solution: `s = input()
result = ""
for char in s:
    if char.isalnum():
        result += char
print(result)`,
        explanation: "We iterate through the string and use the `.isalnum()` method to check if a character is alphanumeric. If it is, we append it to our `result` string."
      },
      {
        id: "python-s11-q12",
        title: "Longest word in sentence",
        description: "Find the longest word in a sentence.",
        statement: "Given a sentence, find and print the longest word.",
        inputFormat: "A single line of text.",
        outputFormat: "The longest word.",
        testCases: [{ input: "CodeAlpha provides internships", output: "internships" }],
        solution: `words = input().split()
longest_word = max(words, key=len)
print(longest_word)`,
        explanation: "We split the sentence into a list of words. The `max()` function can take a `key` argument. `key=len` tells it to find the maximum element based on its length, not its alphabetical value."
      },
      {
        id: "python-s11-q13",
        title: "Frequency of characters",
        description: "Count the frequency of each character.",
        statement: "Count how many times each character appears in a string and store it in a dictionary.",
        inputFormat: "A single string.",
        outputFormat: "The frequency dictionary.",
        testCases: [{ input: "banana", output: "{'b': 1, 'a': 3, 'n': 2}" }],
        solution: `from collections import Counter

s = input()
freq = Counter(s)
print(dict(freq))`,
        explanation: "`collections.Counter` is the ideal tool for this. It takes an iterable (like a string) and returns a dictionary-like object where keys are the items and values are their counts."
      },
      {
        id: "python-s11-q14",
        title: "Character with max frequency",
        description: "Find the character that appears most often.",
        statement: "Given a string, find the character with the highest frequency.",
        inputFormat: "A single string.",
        outputFormat: "The character with the maximum frequency.",
        testCases: [{ input: "programming", output: "m" }],
        solution: `from collections import Counter

s = input()
freq = Counter(s)
max_char = max(freq, key=freq.get)
print(max_char)`,
        explanation: "After getting the frequency using `Counter`, we use `max()` on the dictionary's keys. The `key=freq.get` argument tells `max()` to find the key that corresponds to the highest value in the `freq` dictionary."
      },
      {
        id: "python-s11-q15",
        title: "Capitalize first letter",
        description: "Capitalize the first letter of each word.",
        statement: "Given a sentence, capitalize the first letter of each word.",
        inputFormat: "A single line of text.",
        outputFormat: "The title-cased string.",
        testCases: [{ input: "hello world", output: "Hello World" }],
        solution: `s = input()
print(s.title())`,
        explanation: "The `.title()` string method returns a version of the string where the first character in every word is uppercase and all others are lowercase."
      }
    ]
  },
  {
    category: "SECTION 12 — FUNCTIONS",
    problems: [
      {
        id: "python-s12-q1",
        title: "Simple function",
        description: "Define and call a simple function.",
        statement: "Create a function `greet()` that prints 'Hello from function!' when called.",
        inputFormat: "No input.",
        outputFormat: "Hello from function!",
        testCases: [{ input: "", output: "Hello from function!" }],
        solution: `def greet():
    print("Hello from function!")

greet()`,
        explanation: "We define a function using the `def` keyword, followed by the function name and parentheses. The code inside the function (indented) runs only when the function is called."
      },
      {
        id: "python-s12-q2",
        title: "Function returning value",
        description: "Create a function that returns a value.",
        statement: "Create a function `add(a, b)` that takes two numbers and returns their sum.",
        inputFormat: "Two integers.",
        outputFormat: "The sum.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `def add(a, b):
    return a + b

num1, num2 = map(int, input().split())
result = add(num1, num2)
print(result)`,
        explanation: "The `return` statement is used to send a value back from the function. The returned value can be stored in a variable."
      },
      {
        id: "python-s12-q3",
        title: "Function with default argument",
        description: "Use default arguments in a function.",
        statement: "Create a function `greet(name='Guest')` that prints a greeting. If no name is provided, it should use 'Guest'.",
        inputFormat: "No input needed for demonstration.",
        outputFormat: "Two greetings.",
        testCases: [{ input: "", output: "Hello, CodeAlpha!\nHello, Guest!" }],
        solution: `def greet(name="Guest"):
    print(f"Hello, {name}!")

greet("CodeAlpha")
greet()`,
        explanation: "By providing a value in the function definition (e.g., `name='Guest'`), you make that argument optional. If the caller doesn't provide a value for it, the default value is used."
      },
      {
        id: "python-s12-q4",
        title: "Lambda function",
        description: "Use a small, anonymous lambda function.",
        statement: "Create a lambda function that takes one argument and returns its square. Use it to square the number 5.",
        inputFormat: "No input.",
        outputFormat: "25",
        testCases: [{ input: "", output: "25" }],
        solution: `square = lambda x: x * x
print(square(5))`,
        explanation: "A lambda function is a small, one-line anonymous function defined with the `lambda` keyword. The syntax is `lambda arguments: expression`."
      },
      {
        id: "python-s12-q5",
        title: "Find max of three",
        description: "Create a function to find the max of three numbers.",
        statement: "Write a function `max_of_three(a, b, c)` that returns the largest of the three numbers.",
        inputFormat: "Three integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "10 50 20", output: "50" }],
        solution: `def max_of_three(a, b, c):
    return max(a, b, c)

n1, n2, n3 = map(int, input().split())
print(max_of_three(n1, n2, n3))`,
        explanation: "The function encapsulates the logic for finding the maximum. It's good practice to wrap reusable logic in functions."
      },
      {
        id: "python-s12-q6",
        title: "Sum of list using function",
        description: "Create a function to sum a list.",
        statement: "Write a function `sum_list(numbers)` that takes a list of numbers and returns their sum.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The sum.",
        testCases: [{ input: "1 2 3 4", output: "10" }],
        solution: `def sum_list(numbers):
    return sum(numbers)

nums = list(map(int, input().split()))
print(sum_list(nums))`,
        explanation: "The function takes a list as an argument and uses the built-in `sum()` function to calculate the total, which it then returns."
      },
      {
        id: "python-s12-q7",
        title: "Reverse string using function",
        description: "Create a function to reverse a string.",
        statement: "Write a function `reverse_string(s)` that returns the reversed string.",
        inputFormat: "A single string.",
        outputFormat: "The reversed string.",
        testCases: [{ input: "Python", output: "nohtyP" }],
        solution: `def reverse_string(s):
    return s[::-1]

text = input()
print(reverse_string(text))`,
        explanation: "The function encapsulates the string slicing logic for reversal, making the code more modular and readable."
      },
      {
        id: "python-s12-q8",
        title: "Prime checker function",
        description: "Create a function to check for prime numbers.",
        statement: "Write a function `is_prime(n)` which returns `True` if `n` is prime and `False` otherwise.",
        inputFormat: "A single integer.",
        outputFormat: "`True` or `False`.",
        testCases: [{input: "13", output: "True"}, {input: "12", output: "False"}],
        solution: `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

num = int(input())
print(is_prime(num))`,
        explanation: "The `is_prime` function encapsulates the prime checking logic. If any factor is found, it immediately returns `False`. If the loop completes without finding any factors, the number must be prime, so it returns `True`."
      },
      {
        id: "python-s12-q9",
        title: "Armstrong using function",
        description: "Create a function to check for Armstrong numbers.",
        statement: "Write a function `is_armstrong(num)` that returns `True` if a number is an Armstrong number, `False` otherwise.",
        inputFormat: "An integer.",
        outputFormat: "`True` or `False`.",
        testCases: [{ input: "153", output: "True" }],
        solution: `def is_armstrong(num):
    s = str(num)
    n = len(s)
    total = sum(int(digit)**n for digit in s)
    return total == num

number = int(input())
print(is_armstrong(number))`,
        explanation: "The function encapsulates the Armstrong number logic. It uses a generator expression inside `sum()` for a concise way to calculate the sum of the digits raised to the power of the number of digits."
      },
      {
        id: "python-s12-q10",
        title: "Calculator using functions",
        description: "Create a modular calculator.",
        statement: "Create separate functions for add, subtract, multiply, and divide. Read two numbers and an operator, then call the appropriate function.",
        inputFormat: "First number, operator, second number on new lines.",
        outputFormat: "The result.",
        testCases: [{ input: "20\n/\n4", output: "5.0" }],
        solution: `def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b): return a / b if b != 0 else "Error"

num1 = float(input())
op = input()
num2 = float(input())

if op == '+': result = add(num1, num2)
elif op == '-': result = subtract(num1, num2)
elif op == '*': result = multiply(num1, num2)
elif op == '/': result = divide(num1, num2)
else: result = "Invalid operator"

print(result)`,
        explanation: "Each arithmetic operation is handled by its own dedicated function. The main part of the script determines which function to call based on the user's operator input, making the code clean and organized."
      }
    ]
  }
];
