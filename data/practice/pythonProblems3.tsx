import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART3: ProblemCategory[] = [
  {
    category: "SECTION 5 — LOOPS",
    problems: [
      {
        id: "python-s5-q1",
        title: "Sum of N natural numbers",
        description: "Find the sum of numbers from 1 to N.",
        statement: "Write a program to find the sum of all natural numbers from 1 to a given integer N.",
        inputFormat: "A single integer N.",
        outputFormat: "The sum.",
        testCases: [{ input: "100", output: "5050" }],
        solution: `n = int(input())
sum = 0
for i in range(1, n + 1):
    sum += i
print(sum)`,
        explanation: "We initialize a `sum` variable to 0. Then, a `for` loop iterates from 1 to `n` (inclusive). In each iteration, the current number `i` is added to the `sum`."
      },
      {
        id: "python-s5-q2",
        title: "Factorial",
        description: "Calculate the factorial of a number.",
        statement: "Write a program to find the factorial of a non-negative integer `N`.",
        inputFormat: "A single integer.",
        outputFormat: "The factorial value.",
        testCases: [{ input: "5", output: "120" }],
        solution: `n = int(input())
factorial = 1
for i in range(1, n + 1):
    factorial *= i
print(factorial)`,
        explanation: "A `for` loop iterates from 1 to `n`. In each step, the `factorial` variable is multiplied by the loop counter `i`. The result starts at 1 because the factorial of 0 is 1."
      },
      {
        id: "python-s5-q3",
        title: "Count digits",
        description: "Count the number of digits in an integer.",
        statement: "Count the total number of digits in an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The number of digits.",
        testCases: [{ input: "12345", output: "5" }],
        solution: `n = input()
print(len(n))`,
        explanation: "The easiest way to count digits in Python is to read the number as a string and use the built-in `len()` function to find its length."
      },
      {
        id: "python-s5-q4",
        title: "Reverse a number",
        description: "Reverse the digits of an integer.",
        statement: "Write a program to reverse the digits of a given integer.",
        inputFormat: "A single integer.",
        outputFormat: "The reversed integer.",
        testCases: [{ input: "12345", output: "54321" }],
        solution: `num_str = input()
reversed_str = num_str[::-1]
print(int(reversed_str))`,
        explanation: "This solution leverages string slicing. `[::-1]` is a Python idiom for reversing a sequence. We read the number as a string, reverse it, and then convert it back to an integer."
      },
      {
        id: "python-s5-q5",
        title: "Palindrome number",
        description: "Check if a number is a palindrome.",
        statement: "Check if a number is a palindrome (reads the same forwards and backwards).",
        inputFormat: "A single integer.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "121", output: "Yes" }, { input: "123", output: "No" }],
        solution: `num_str = input()
if num_str == num_str[::-1]:
    print("Yes")
else:
    print("No")`,
        explanation: "We read the number as a string and compare it with its reversed version. If they are the same, the number is a palindrome."
      },
      {
        id: "python-s5-q6",
        title: "Armstrong number",
        description: "Check if a number is an Armstrong number.",
        statement: "An Armstrong number is an integer such that the sum of its own digits each raised to the power of the number of digits is equal to the number itself. Check if a given number is an Armstrong number.",
        inputFormat: "An integer.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "153", output: "Yes" }, { input: "123", output: "No" }],
        solution: `num_str = input()
n = len(num_str)
num = int(num_str)
sum_of_powers = 0

for digit in num_str:
    sum_of_powers += int(digit) ** n

if sum_of_powers == num:
    print("Yes")
else:
    print("No")`,
        explanation: "The program first calculates the number of digits `n`. Then, it iterates through each digit (as a character) in the input string, converts it to an integer, raises it to the power of `n`, and adds it to the sum. Finally, it compares this sum with the original number."
      },
      {
        id: "python-s5-q7",
        title: "Fibonacci Series",
        description: "Generate the Fibonacci series up to n terms.",
        statement: "Write a program to generate the Fibonacci series up to `n` terms.",
        inputFormat: "An integer `n`.",
        outputFormat: "The first `n` Fibonacci numbers, separated by spaces.",
        testCases: [{ input: "10", output: "0 1 1 2 3 5 8 13 21 34" }],
        solution: `n = int(input())
a, b = 0, 1
for _ in range(n):
    print(a, end=' ')
    a, b = b, a + b`,
        explanation: "We initialize two variables, `a` and `b`, to 0 and 1. The loop runs `n` times. In each iteration, we print the current `a`, and then update `a` and `b` for the next iteration using tuple unpacking: `a` becomes `b`, and `b` becomes the sum of the old `a` and `b`."
      },
      {
        id: "python-s5-q8",
        title: "Print all prime numbers in range",
        description: "Find all prime numbers between two numbers.",
        statement: "Print all prime numbers between two given integers (inclusive).",
        inputFormat: "Two integers, low and high.",
        outputFormat: "Prime numbers in the range, separated by spaces.",
        testCases: [{ input: "10 30", output: "11 13 17 19 23 29" }],
        solution: `low, high = map(int, input().split())

for num in range(low, high + 1):
    if num > 1:
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            print(num, end=' ')`,
        explanation: "The outer loop iterates through every number in the given range. The inner loop implements an optimized prime check by testing for factors only up to the square root of the number. If no factors are found, the number is printed."
      },
      {
        id: "python-s5-q9",
        title: "Find second largest digit",
        description: "Find the second largest unique digit in a number.",
        statement: "Given an integer, find the second largest unique digit within it.",
        inputFormat: "A single integer.",
        outputFormat: "The second largest digit, or -1 if it doesn't exist.",
        testCases: [{ input: "12342", output: "3" }],
        solution: `num_str = input()
unique_digits = sorted(list(set(num_str)), reverse=True)

if len(unique_digits) > 1:
    print(unique_digits[1])
else:
    print(-1)`,
        explanation: "First, we convert the number to a string and then to a `set` to get only the unique digits. We convert it back to a `list`, `sort` it in reverse order, and then the second largest digit will be at index 1."
      },
      {
        id: "python-s5-q10",
        title: "Product of digits",
        description: "Find the product of the digits of a number.",
        statement: "Calculate the product of the digits of an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The product of digits.",
        testCases: [{ input: "123", output: "6" }],
        solution: `num_str = input()
product = 1
for digit in num_str:
    product *= int(digit)
print(product)`,
        explanation: "We initialize `product` to 1. Then we loop through each character of the input string, convert it to an integer, and multiply it with the `product`."
      }
    ]
  },
  {
    category: "SECTION 6 — PATTERN PROBLEMS",
    problems: [
      {
        id: "python-s6-q1",
        title: "Square pattern",
        description: "Print a square of stars.",
        statement: "Print a square of stars of size N x N.",
        inputFormat: "A single integer N.",
        outputFormat: "An N x N square of stars.",
        testCases: [{ input: "4", output: "****\n****\n****\n****" }],
        solution: `n = int(input())
for i in range(n):
    print('*' * n)`,
        explanation: "This solution uses a single loop. In each iteration, it prints the character '*' repeated `n` times. The `print` function automatically adds a newline."
      },
      {
        id: "python-s6-q2",
        title: "Right triangle",
        description: "Print a right-angled triangle of stars.",
        statement: "Print a right-angled triangle of stars with height N.",
        inputFormat: "An integer N.",
        outputFormat: "A star pattern.",
        testCases: [{ input: "5", output: "*\n**\n***\n****\n*****" }],
        solution: `n = int(input())
for i in range(1, n + 1):
    print('*' * i)`,
        explanation: "The loop iterates from 1 to `n`. In the first iteration, it prints one star. In the second, two stars, and so on, creating the triangle shape."
      },
      {
        id: "python-s6-q3",
        title: "Inverted triangle",
        description: "Print an inverted right-angled triangle.",
        statement: "Print an inverted right-angled triangle of stars with height N.",
        inputFormat: "An integer N.",
        outputFormat: "A star pattern.",
        testCases: [{ input: "5", output: "*****\n****\n***\n**\n*" }],
        solution: `n = int(input())
for i in range(n, 0, -1):
    print('*' * i)`,
        explanation: "The `range(n, 0, -1)` function generates a sequence from `n` down to 1. In each iteration, the number of stars printed decreases."
      },
      {
        id: "python-s6-q4",
        title: "Number triangle",
        description: "Print a triangle with numbers.",
        statement: "Print a right-angled triangle where each row `i` contains the number `i` repeated `i` times.",
        inputFormat: "An integer N.",
        outputFormat: "A number pattern.",
        testCases: [{ input: "5", output: "1\n22\n333\n4444\n55555" }],
        solution: `n = int(input())
for i in range(1, n + 1):
    print(str(i) * i)`,
        explanation: "Multiplying a string by an integer in Python repeats the string. We convert the loop variable `i` to a string `str(i)` and repeat it `i` times."
      },
      {
        id: "python-s6-q5",
        title: "Alphabet triangle",
        description: "Print a triangle with alphabets.",
        statement: "Print a right-angled triangle using alphabets.",
        inputFormat: "An integer N (up to 26).",
        outputFormat: "An alphabet pattern.",
        testCases: [{ input: "5", output: "A\nBB\nCCC\nDDDD\nEEEEE" }],
        solution: `n = int(input())
for i in range(1, n + 1):
    # ASCII value of 'A' is 65
    # chr() converts an int to its character
    char_to_print = chr(65 + i - 1)
    print(char_to_print * i)`,
        explanation: "We use the ASCII values to get the characters. For row `i=1`, we get `chr(65)` which is 'A'. For `i=2`, `chr(66)` which is 'B', and so on."
      },
      {
        id: "python-s6-q6",
        title: "Pyramid pattern",
        description: "Print a pyramid of stars.",
        statement: "Print a pyramid pattern of stars with N rows.",
        inputFormat: "An integer N.",
        outputFormat: "A pyramid pattern.",
        testCases: [{ input: "5", output: "    *\n   ***\n  *****\n *******\n*********" }],
        solution: `n = int(input())
for i in range(1, n + 1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)`,
        explanation: "For each row `i`, we calculate the number of leading spaces required (`n-i`) and the number of stars required (`2*i - 1`). Then we concatenate and print them."
      },
      {
        id: "python-s6-q7",
        title: "Reverse pyramid",
        description: "Print an inverted pyramid of stars.",
        statement: "Print an inverted pyramid pattern of stars with N rows.",
        inputFormat: "An integer N.",
        outputFormat: "An inverted pyramid pattern.",
        testCases: [{ input: "5", output: "*********\n *******\n  *****\n   ***\n    *" }],
        solution: `n = int(input())
for i in range(n, 0, -1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)`,
        explanation: "This is similar to the pyramid, but the outer loop runs in reverse, from `n` down to 1, causing the number of stars to decrease in each row."
      },
      {
        id: "python-s6-q8",
        title: "Diamond star pattern",
        description: "Print a diamond shape made of stars.",
        statement: "Print a star diamond pattern of a given size N (rows in top half).",
        inputFormat: "An integer N.",
        outputFormat: "A diamond pattern.",
        testCases: [{ input: "4", output: "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n" }],
        solution: `n = int(input())
# Upper half
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))

# Lower half
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))`,
        explanation: "The diamond is made of two parts: an upper pyramid and a lower, inverted pyramid. Two separate `for` loops are used to print each part."
      },
      {
        id: "python-s6-q9",
        title: "Floyd’s triangle",
        description: "Print Floyd's Triangle.",
        statement: "Print Floyd's Triangle, a right-angled triangle using consecutive natural numbers.",
        inputFormat: "An integer N for the number of rows.",
        outputFormat: "Floyd's Triangle.",
        testCases: [{ input: "4", output: "1 \n2 3 \n4 5 6 \n7 8 9 10 " }],
        solution: `n = int(input())
num = 1
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()`,
        explanation: "A separate counter variable `num` is initialized to 1. Inside the inner loop, this counter is printed and then incremented, ensuring the numbers continue sequentially across all rows."
      },
      {
        id: "python-s6-q10",
        title: "Pascal’s triangle",
        description: "Print Pascal's triangle.",
        statement: "Print Pascal's triangle up to N rows.",
        inputFormat: "An integer N.",
        outputFormat: "Pascal's triangle.",
        testCases: [{ input: "5", output: "1 \n1 1 \n1 2 1 \n1 3 3 1 \n1 4 6 4 1 " }],
        solution: `n = int(input())
for i in range(n):
    row = []
    for j in range(i + 1):
        if j == 0 or j == i:
            row.append(1)
        else:
            prev_row = [1] * (i) # A placeholder, actual logic is more complex
            # For simplicity in explanation, let's use a known math formula
            # C(n, k) = n! / (k! * (n-k)!)
            import math
            val = math.factorial(i) // (math.factorial(j) * math.factorial(i - j))
            row.append(val)
    print(' '.join(map(str, row)) + ' ')`,
        explanation: "Pascal's triangle can be generated using binomial coefficients C(n, k). For each row `i` (0-indexed) and each element `j` in that row, the value is C(i, j). This solution calculates this value for each position."
      }
    ]
  }
];
