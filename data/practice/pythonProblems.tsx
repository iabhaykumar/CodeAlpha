import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS: ProblemCategory[] = [
  {
    category: "SECTION 1 — BASICS (BEGINNER)",
    problems: [
      {
        id: "python-s1-q1",
        title: "Print “Hello, World!”",
        description: "The classic first program.",
        statement: "Write a Python program to print the exact string 'Hello, World!' to the standard output.",
        inputFormat: "No input.",
        outputFormat: "A single line: `Hello, World!`",
        testCases: [{ input: "", output: "Hello, World!" }],
        solution: `print("Hello, World!")`,
        explanation: "The `print()` function in Python is used to display output to the console. Anything inside the parentheses and quotes will be printed as a string."
      },
      {
        id: "python-s1-q2",
        title: "Add Two Numbers",
        description: "Read two integers and print their sum.",
        statement: "Write a Python program that reads two integers from the standard input and prints their sum.",
        inputFormat: "Two integers separated by a space.",
        outputFormat: "A single integer representing the sum.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `a, b = map(int, input().split())
print(a + b)`,
        explanation: "`input().split()` reads a line of input and splits it into a list of strings. `map(int, ...)` applies the `int` function to each item in the list, converting them to integers which are then unpacked into variables `a` and `b`."
      },
      {
        id: "python-s1-q3",
        title: "Multiply Two Numbers",
        description: "Read two numbers and print their product.",
        statement: "Write a program that takes two floating-point numbers and prints their product.",
        inputFormat: "Two numbers separated by a space.",
        outputFormat: "The product as a float.",
        testCases: [{ input: "4.5 2.0", output: "9.0" }],
        solution: `a, b = map(float, input().split())
print(a * b)`,
        explanation: "Similar to adding, this program reads two numbers, but uses `map(float, ...)` to handle decimals. It then prints the result of their multiplication using the `*` operator."
      },
      {
        id: "python-s1-q4",
        title: "Divide Two Numbers",
        description: "Perform standard division.",
        statement: "Given two integers, `a` and `b`, compute `a / b`. The result can be a float.",
        inputFormat: "Two integers `a` and `b` separated by a space.",
        outputFormat: "The result of the division.",
        testCases: [{ input: "10 4", output: "2.5" }],
        solution: `a, b = map(int, input().split())
print(a / b)`,
        explanation: "In Python 3, the single slash `/` operator performs float division, which means the result will include the decimal part."
      },
      {
        id: "python-s1-q5",
        title: "Floor & Ceil Division",
        description: "Perform floor and ceiling division.",
        statement: "Given two integers `a` and `b`, compute the floor division (`a // b`) and demonstrate how to get the ceiling division.",
        inputFormat: "Two integers `a` and `b` separated by a space.",
        outputFormat: "Two lines: first the floor, then the ceiling.",
        testCases: [{ input: "10 4", output: "2\n3" }],
        solution: `import math

a, b = map(int, input().split())

# Floor division is built-in
print(a // b)

# Ceiling division requires the math module
print(math.ceil(a / b))`,
        explanation: "Floor division `//` always rounds down to the nearest whole number. For ceiling division (rounding up), we first perform normal float division `/` and then use the `math.ceil()` function."
      },
      {
        id: "python-s1-q6",
        title: "Calculate Simple Interest",
        description: "Calculate simple interest from P, R, and T.",
        statement: "Calculate simple interest given Principal, Rate, and Time. Formula: (P * R * T) / 100.",
        inputFormat: "Integer P, float R, integer T.",
        outputFormat: "The simple interest as a float.",
        testCases: [{ input: "1000 5.5 2", output: "110.0" }],
        solution: `p, r, t = input().split()
p = int(p)
r = float(r)
t = int(t)
si = (p * r * t) / 100
print(si)`,
        explanation: "The program reads the three values as strings, then converts them to their appropriate numeric types (`int` and `float`) before applying the standard formula for simple interest."
      },
      {
        id: "python-s1-q7",
        title: "Calculate Compound Interest",
        description: "Calculate compound interest.",
        statement: "Calculate compound interest. Formula: A = P(1 + R/100)^T.",
        inputFormat: "Integer P, float R, integer T.",
        outputFormat: "The final amount.",
        testCases: [{ input: "1000 10 2", output: "1210.0000000000002" }],
        solution: `p, r, t = map(float, input().split())
amount = p * (pow((1 + r / 100), t))
print(amount)`,
        explanation: "This program calculates the final amount after compound interest. It uses `pow(base, exponent)` for the exponentiation part of the formula."
      },
      {
        id: "python-s1-q8",
        title: "Area of a Rectangle",
        description: "Calculate the area of a rectangle.",
        statement: "Write a program to take two integers, length and width, and calculate the area (length * width).",
        inputFormat: "Two integers, length and width.",
        outputFormat: "The integer area.",
        testCases: [{ input: "7 8", output: "56" }],
        solution: `length, width = map(int, input().split())
print(length * width)`,
        explanation: "The program reads two integers and prints their product, which represents the rectangle's area."
      },
      {
        id: "python-s1-q9",
        title: "Area of a Circle",
        description: "Calculate the area of a circle.",
        statement: "Calculate the area of a circle given its radius. Formula: π * r².",
        inputFormat: "A number for the radius.",
        outputFormat: "The area.",
        testCases: [{ input: "5", output: "78.53981633974483" }],
        solution: `import math

radius = float(input())
area = math.pi * radius ** 2
print(area)`,
        explanation: "We use the `math.pi` constant for an accurate value of π. The `**` operator is used for exponentiation (radius squared)."
      },
      {
        id: "python-s1-q10",
        title: "Perimeter of Square",
        description: "Calculate the perimeter of a square.",
        statement: "Calculate the perimeter of a square given one side. Formula: 4 * side.",
        inputFormat: "A single integer for the side length.",
        outputFormat: "The perimeter.",
        testCases: [{ input: "10", output: "40" }],
        solution: `side = int(input())
print(4 * side)`,
        explanation: "The program reads the side length and multiplies it by 4 to get the perimeter of the square."
      },
      {
        id: "python-s1-q11",
        title: "Convert Celsius to Fahrenheit",
        description: "Convert temperature from Celsius to Fahrenheit.",
        statement: "Formula: F = (C * 9/5) + 32.",
        inputFormat: "A float value (Celsius).",
        outputFormat: "The temperature in Fahrenheit.",
        testCases: [{ input: "37", output: "98.6" }],
        solution: `celsius = float(input())
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)`,
        explanation: "The input is read as a `float` to handle decimal temperatures. The conversion formula is then applied directly."
      },
      {
        id: "python-s1-q12",
        title: "Convert KM to Miles",
        description: "Convert kilometers to miles.",
        statement: "Convert a distance in kilometers to miles. 1 km = 0.621371 miles.",
        inputFormat: "A float value (km).",
        outputFormat: "The distance in miles.",
        testCases: [{ input: "10", output: "6.21371" }],
        solution: `km = float(input())
miles = km * 0.621371
print(miles)`,
        explanation: "The program reads the distance in kilometers and multiplies it by the conversion factor to get the equivalent distance in miles."
      },
      {
        id: "python-s1-q13",
        title: "Swap Two Numbers (temp)",
        description: "Swap two numbers using a third variable.",
        statement: "Write a program to swap the values of two integer variables using a third temporary variable.",
        inputFormat: "Two integers.",
        outputFormat: "The two integers after swapping, on the same line.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `a, b = map(int, input().split())
temp = a
a = b
b = temp
print(a, b)`,
        explanation: "A temporary variable `temp` is used to hold the value of `a` while `a` is overwritten with `b`'s value. Then `b` is assigned the value from `temp`."
      },
      {
        id: "python-s1-q14",
        title: "Swap Without Temp",
        description: "Swap two numbers without a temp variable.",
        statement: "Swap two integers without using a third variable.",
        inputFormat: "Two integers.",
        outputFormat: "The swapped integers.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `a, b = map(int, input().split())
a, b = b, a
print(a, b)`,
        explanation: "Python makes this incredibly easy with tuple unpacking. The expression on the right `(b, a)` creates a tuple with the swapped values, which is then unpacked back into the variables `a` and `b` on the left."
      },
      {
        id: "python-s1-q15",
        title: "Find ASCII Value",
        description: "Find the ASCII value of a character.",
        statement: "Write a program that reads a character and prints its ASCII value.",
        inputFormat: "A single character.",
        outputFormat: "The integer ASCII value.",
        testCases: [{ input: "A", output: "65" }],
        solution: `char = input()
print(ord(char))`,
        explanation: "The built-in `ord()` function takes a character and returns its corresponding ASCII integer value."
      },
      {
        id: "python-s1-q16",
        title: "Last Digit of Number",
        description: "Get the last digit of an integer.",
        statement: "Write a program to find the last digit of a given integer.",
        inputFormat: "A single integer.",
        outputFormat: "The last digit.",
        testCases: [{ input: "12345", output: "5" }],
        solution: `num = int(input())
print(num % 10)`,
        explanation: "The modulus operator `% 10` gives the remainder when a number is divided by 10, which is always its last digit."
      },
      {
        id: "python-s1-q17",
        title: "Check Alphabet or Not",
        description: "Check if a character is an alphabet.",
        statement: "Check if a given character is an alphabet (a-z, A-Z).",
        inputFormat: "A single character.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "a", output: "Yes" }, { input: "7", output: "No" }],
        solution: `char = input()
if char.isalpha():
    print("Yes")
else:
    print("No")`,
        explanation: "The string method `.isalpha()` returns `True` if all characters in the string are alphabetic and there is at least one character, `False` otherwise."
      },
      {
        id: "python-s1-q18",
        title: "Print Table of N",
        description: "Print the multiplication table for a number N.",
        statement: "Print the multiplication table of `N` from 1 to 10.",
        inputFormat: "A single integer.",
        outputFormat: "10 lines in the format 'N x i = result'.",
        testCases: [{ input: "5", output: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50" }],
        solution: `n = int(input())
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
        explanation: "A `for` loop iterates from 1 up to 10 (inclusive). Inside the loop, an f-string is used to format the output for each line of the multiplication table."
      },
      {
        id: "python-s1-q19",
        title: "Round a number",
        description: "Round a floating-point number.",
        statement: "Read a float and round it to the nearest integer.",
        inputFormat: "A single float.",
        outputFormat: "The rounded integer.",
        testCases: [{ input: "4.7", output: "5" }, { input: "4.2", output: "4" }],
        solution: `num = float(input())
print(round(num))`,
        explanation: "The built-in `round()` function rounds a number to the nearest integer. If the fractional part is exactly .5, it rounds to the nearest even integer."
      },
      {
        id: "python-s1-q20",
        title: "Evaluate expression input",
        description: "Evaluate a string as a Python expression.",
        statement: "Read a string representing a simple mathematical expression (e.g., '5 * 4') and print the result.",
        inputFormat: "A string expression.",
        outputFormat: "The result of the evaluation.",
        testCases: [{ input: "10 + 5 * 2", output: "20" }],
        solution: `expression = input()
print(eval(expression))`,
        explanation: "The `eval()` function parses the string argument and evaluates it as a Python expression. **Warning:** `eval()` is powerful but can be a security risk if used with untrusted user input, as it can execute any Python code."
      }
    ]
  },
  {
    category: "SECTION 2 — INPUT / OUTPUT",
    problems: [
      {
        id: "python-s2-q1",
        title: "Take multiple inputs in one line",
        description: "Read multiple integers from one line.",
        statement: "Read three integers from a single line of input and print them.",
        inputFormat: "Three integers separated by spaces.",
        outputFormat: "The three integers, each on a new line.",
        testCases: [{ input: "10 20 30", output: "10\n20\n30" }],
        solution: `a, b, c = map(int, input().split())
print(a)
print(b)
print(c)`,
        explanation: "This is the standard way to read multiple numbers in Python for competitive programming. `input().split()` creates a list of strings, and `map(int, ...)` converts each string to an integer."
      },
      {
        id: "python-s2-q2",
        title: "Read input until EOF",
        description: "Read multiple lines of input until there's no more.",
        statement: "Read and print lines of text until the end of input (End-Of-File).",
        inputFormat: "Multiple lines of text.",
        outputFormat: "The same lines of text.",
        testCases: [{ input: "Hello\nWorld", output: "Hello\nWorld" }],
        solution: `import sys

for line in sys.stdin:
    print(line, end='')`,
        explanation: "`sys.stdin` is a file-like object that represents the standard input stream. You can iterate over it line by line. We use `end=''` in the print function to avoid adding an extra newline, as `line` already contains one."
      },
      {
        id: "python-s2-q3",
        title: "Use map() for numeric input",
        description: "Convert a line of string numbers into a list of integers.",
        statement: "Read a line of space-separated numbers and store them in a list of integers.",
        inputFormat: "Space-separated integers.",
        outputFormat: "The list of integers.",
        testCases: [{ input: "1 2 3 4 5", output: "[1, 2, 3, 4, 5]" }],
        solution: `numbers = list(map(int, input().split()))
print(numbers)`,
        explanation: "The `map()` function returns a map object (an iterator). We wrap it with `list()` to convert it into an actual list that can be stored and printed."
      },
      {
        id: "python-s2-q4",
        title: "Use split() for string input",
        description: "Split a sentence into a list of words.",
        statement: "Read a sentence and print a list containing its words.",
        inputFormat: "A single line of text.",
        outputFormat: "A list of strings.",
        testCases: [{ input: "Welcome to CodeAlpha", output: "['Welcome', 'to', 'CodeAlpha']" }],
        solution: `words = input().split()
print(words)`,
        explanation: "The `.split()` method, when called without arguments, splits a string by any amount of whitespace and returns a list of the resulting strings."
      },
      {
        id: "python-s2-q5",
        title: "Format output using f-strings",
        description: "Use f-strings for clean output formatting.",
        statement: "Read a name (string) and an age (integer) and print them in a formatted sentence using an f-string.",
        inputFormat: "A name on the first line, an age on the second.",
        outputFormat: "A formatted string: `Name: [name], Age: [age]`",
        testCases: [{ input: "Alex\n25", output: "Name: Alex, Age: 25" }],
        solution: `name = input()
age = int(input())
print(f"Name: {name}, Age: {age}")`,
        explanation: "F-strings (formatted string literals), prefixed with 'f', allow you to embed expressions inside string literals by placing them inside curly braces `{}`. It's the most modern and readable way to format strings."
      },
      {
        id: "python-s2-q6",
        title: "Custom separators in print",
        description: "Use the `sep` parameter in the print function.",
        statement: "Print the numbers 1, 2, and 3, separated by a hyphen `-` in a single print call.",
        inputFormat: "No input.",
        outputFormat: "1-2-3",
        testCases: [{ input: "", output: "1-2-3" }],
        solution: `print(1, 2, 3, sep='-')`,
        explanation: "The `print()` function takes an optional `sep` parameter that specifies the separator to use between the arguments. The default is a space."
      },
      {
        id: "python-s2-q7",
        title: "Custom end parameter",
        description: "Use the `end` parameter to control the line ending.",
        statement: "Print 'Hello' and 'World' on the same line using two print calls.",
        inputFormat: "No input.",
        outputFormat: "HelloWorld",
        testCases: [{ input: "", output: "HelloWorld" }],
        solution: `print("Hello", end='')
print("World")`,
        explanation: "The `print()` function's optional `end` parameter specifies what to print at the end. The default is a newline character `\\n`. By setting it to an empty string `''`, the next print call will continue on the same line."
      },
      {
        id: "python-s2-q8",
        title: "Multi-line input using loops",
        description: "Read a fixed number of lines.",
        statement: "Read an integer N, followed by N lines of text, and store them in a list.",
        inputFormat: "First line: N. Next N lines: strings.",
        outputFormat: "A list containing the N strings.",
        testCases: [{ input: "3\nApple\nBanana\nCherry", output: "['Apple', 'Banana', 'Cherry']" }],
        solution: `n = int(input())
lines = []
for _ in range(n):
    lines.append(input())
print(lines)`,
        explanation: "A `for` loop runs `n` times. In each iteration, `input()` reads one line, which is then appended to the `lines` list. The `_` is used as a variable name when we don't need to use the loop counter itself."
      },
      {
        id: "python-s2-q9",
        title: "Convert string input to list",
        description: "Convert a string like 'abc' to ['a', 'b', 'c'].",
        statement: "Read a single string without spaces and convert it into a list of its characters.",
        inputFormat: "A single string.",
        outputFormat: "A list of characters.",
        testCases: [{ input: "python", output: "['p', 'y', 't', 'h', 'o', 'n']" }],
        solution: `s = input()
char_list = list(s)
print(char_list)`,
        explanation: "The `list()` constructor can take any iterable (like a string) and create a list where each element of the list corresponds to an element of the iterable."
      },
      {
        id: "python-s2-q10",
        title: "Formatting decimal places",
        description: "Format a float to a specific number of decimal places.",
        statement: "Read a float and print it formatted to exactly two decimal places.",
        inputFormat: "A single float.",
        outputFormat: "The float formatted to two decimal places.",
        testCases: [{ input: "3.14159265", output: "3.14" }],
        solution: `num = float(input())
print(f"{num:.2f}")`,
        explanation: "F-strings provide powerful formatting options. The syntax `:.2f` inside the curly braces tells Python to format the number as a floating-point number with exactly two digits after the decimal point."
      }
    ]
  }
];
