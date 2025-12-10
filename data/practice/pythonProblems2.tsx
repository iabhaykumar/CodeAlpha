
import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART2: ProblemCategory[] = [
  {
    category: "SECTION 3 — OPERATORS",
    problems: [
      {
        id: "python-s3-q1",
        title: "Arithmetic operations",
        description: "Perform basic arithmetic.",
        statement: "Given two integers, print their sum, difference, product, and float division.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "Four lines, each showing the result of an operation.",
        testCases: [{ input: "10 5", output: "15\n5\n50\n2.0" }],
        solution: `a, b = map(int, input().split())
print(a + b)
print(a - b)
print(a * b)
print(a / b)`,
        explanation: "This program demonstrates the basic arithmetic operators in Python for addition, subtraction, multiplication, and float division."
      },
      {
        id: "python-s3-q2",
        title: "Relational operators",
        description: "Compare two numbers.",
        statement: "Given two integers `a` and `b`, check if `a` is greater than, less than, or equal to `b`.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "Three lines, each with `True` or `False` for `a > b`, `a < b`, and `a == b`.",
        testCases: [{ input: "10 5", output: "True\nFalse\nFalse" }],
        solution: `a, b = map(int, input().split())
print(a > b)
print(a < b)
print(a == b)`,
        explanation: "Relational operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) are used to compare values. They always return a boolean value: `True` or `False`."
      },
      {
        id: "python-s3-q3",
        title: "Logical operators",
        description: "Use `and`, `or`, `not`.",
        statement: "Given two boolean inputs (as 0 or 1), demonstrate the `and`, `or`, and `not` logical operators.",
        inputFormat: "Two integers, 0 or 1.",
        outputFormat: "Results of AND, OR, and NOT operations.",
        testCases: [{ input: "1 0", output: "AND: False\nOR: True\nNOT a: False" }],
        solution: `a_int, b_int = map(int, input().split())
a = bool(a_int)
b = bool(b_int)

print(f"AND: {a and b}")
print(f"OR: {a or b}")
print(f"NOT a: {not a}")`,
        explanation: "Logical operators are used to combine conditional statements. We first convert the integer inputs (0, 1) to their boolean equivalents (`False`, `True`) using `bool()`."
      },
      {
        id: "python-s3-q4",
        title: "Bitwise AND, OR, XOR",
        description: "Perform bitwise operations.",
        statement: "Given two integers, perform bitwise AND (`&`), OR (`|`), and XOR (`^`) operations.",
        inputFormat: "Two integers.",
        outputFormat: "The results of the three bitwise operations.",
        testCases: [{ input: "5 3", output: "AND: 1\nOR: 7\nXOR: 6" }],
        solution: `a, b = map(int, input().split())
# 5 is 101 in binary
# 3 is 011 in binary
print(f"AND: {a & b}") # 001 -> 1
print(f"OR: {a | b}")  # 111 -> 7
print(f"XOR: {a ^ b}") # 110 -> 6`,
        explanation: "Bitwise operators work on the binary representation of integers. AND sets a bit if it exists in both numbers. OR sets a bit if it exists in either number. XOR sets a bit if it exists in one but not both numbers."
      },
      {
        id: "python-s3-q5",
        title: "Shift operators",
        description: "Use left and right shift operators.",
        statement: "Given an integer, perform a left shift by 2 bits (`<< 2`) and a right shift by 1 bit (`>> 1`).",
        inputFormat: "A single integer.",
        outputFormat: "The results of the shift operations.",
        testCases: [{ input: "10", output: "Left Shift: 40\nRight Shift: 5" }],
        solution: `n = int(input())
# 10 is 1010 in binary
# Left shift by 2: 101000 -> 40 (equivalent to multiplying by 4)
print(f"Left Shift: {n << 2}")

# Right shift by 1: 101 -> 5 (equivalent to integer division by 2)
print(f"Right Shift: {n >> 1}")`,
        explanation: "Bitwise shift operators move the bits of a number to the left or right. Left shifting `n` by `i` is equivalent to `n * (2**i)`. Right shifting is equivalent to `n // (2**i)`."
      },
      {
        id: "python-s3-q6",
        title: "Ternary operator",
        description: "Use Python's conditional expression.",
        statement: "Read an integer. If it's even, print 'Even'; otherwise, print 'Odd'. Use a single line of code with the ternary operator.",
        inputFormat: "A single integer.",
        outputFormat: "'Even' or 'Odd'.",
        testCases: [{ input: "7", output: "Odd" }],
        solution: `n = int(input())
result = "Even" if n % 2 == 0 else "Odd"
print(result)`,
        explanation: "Python's ternary operator has the syntax `value_if_true if condition else value_if_false`. It's a concise way to write a simple if-else statement."
      },
      {
        id: "python-s3-q7",
        title: "Find greatest using ternary",
        description: "Find the greatest of two numbers using the ternary operator.",
        statement: "Read two integers and find the larger one using a conditional expression.",
        inputFormat: "Two integers.",
        outputFormat: "The larger integer.",
        testCases: [{ input: "15 10", output: "15" }],
        solution: `a, b = map(int, input().split())
largest = a if a > b else b
print(largest)`,
        explanation: "The ternary operator is used to assign `a` to `largest` if `a > b` is true; otherwise, it assigns `b`."
      },
      {
        id: "python-s3-q8",
        title: "Check number within range",
        description: "Check if a number is between two other numbers.",
        statement: "Read three integers `a`, `b`, and `x`. Check if `x` is between `a` and `b` (inclusive).",
        inputFormat: "Three integers.",
        outputFormat: "`True` or `False`.",
        testCases: [{ input: "10 20 15", output: "True" }],
        solution: `a, b, x = map(int, input().split())
print(a <= x <= b)`,
        explanation: "Python allows for chained comparison operators, making range checks very readable and intuitive. This is equivalent to `x >= a and x <= b`."
      },
      {
        id: "python-s3-q9",
        title: "Absolute value",
        description: "Find the absolute value of a number.",
        statement: "Read a number (which can be negative) and print its absolute value.",
        inputFormat: "A single number.",
        outputFormat: "The absolute value.",
        testCases: [{ input: "-10", output: "10" }],
        solution: `n = int(input())
print(abs(n))`,
        explanation: "The built-in `abs()` function returns the absolute (non-negative) value of a number."
      },
      {
        id: "python-s3-q10",
        title: "Logical NOT usage",
        description: "Demonstrate the `not` operator.",
        statement: "Read an integer. If it is zero, print 'Is zero'; otherwise, print 'Is not zero'. Use the `not` operator.",
        inputFormat: "A single integer.",
        outputFormat: "The corresponding string.",
        testCases: [{ input: "0", output: "Is zero" }],
        solution: `n = int(input())
        # In a boolean context, 0 is considered False. \`not False\` is True.
        if not n:
            print("Is zero")
        else:
            print("Is not zero")`,
        explanation: "In Python, numbers can be evaluated in a boolean context. The number `0` is 'falsy' (evaluates to `False`), while any non-zero number is 'truthy' (evaluates to `True`). The `not` operator inverts this boolean value."
      }
    ]
  },
  {
    category: "SECTION 4 — FLOW CONTROL (IF/ELSE)",
    problems: [
      {
        id: "python-s4-q1",
        title: "Even or Odd",
        description: "Check if a number is even or odd.",
        statement: "Write a program to check if an integer is even or odd.",
        inputFormat: "A single integer.",
        outputFormat: "'Even' or 'Odd'.",
        testCases: [{ input: "4", output: "Even" }],
        solution: `n = int(input())
if n % 2 == 0:
    print("Even")
else:
    print("Odd")`,
        explanation: "The modulus operator `% 2` returns 0 if a number is even and 1 if it is odd. An `if-else` statement is used to check this condition."
      },
      {
        id: "python-s4-q2",
        title: "Positive/Negative/Zero",
        description: "Check a number's sign.",
        statement: "Write a program to check if a number is positive, negative or zero.",
        inputFormat: "A single integer.",
        outputFormat: "'Positive', 'Negative' or 'Zero'.",
        testCases: [{ input: "-9", output: "Negative" }],
        solution: `num = int(input())
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`,
        explanation: "An `if-elif-else` ladder checks the conditions sequentially: first for positive, then for negative, and the final `else` covers the zero case."
      },
      {
        id: "python-s4-q3",
        title: "Leap Year",
        description: "Check if a year is a leap year.",
        statement: "A year is a leap year if it is divisible by 4, except for century years, which must be divisible by 400.",
        inputFormat: "A single integer `year`.",
        outputFormat: "Print 'Yes' or 'No'.",
        testCases: [ { input: "2000", output: "Yes" }, { input: "1900", output: "No" } ],
        solution: `year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("Yes")
else:
    print("No")`,
        explanation: "The logic uses a compound conditional statement. `(year % 4 == 0 and year % 100 != 0)` handles regular leap years. `(year % 400 == 0)` handles century leap years. The `or` combines these two conditions."
      },
      {
        id: "python-s4-q4",
        title: "Grade Calculation",
        description: "Assign a grade based on a score.",
        statement: "Assign a grade: A (>=90), B (>=80), C (>=70), F (<70).",
        inputFormat: "An integer score.",
        outputFormat: "The grade.",
        testCases: [{ input: "85", output: "B" }],
        solution: `score = int(input())
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`,
        explanation: "The `if-elif-else` structure is perfect for this. It checks each condition from top to bottom and executes the first one that is true."
      },
      {
        id: "python-s4-q5",
        title: "Largest of Three Numbers",
        description: "Find the largest of three numbers.",
        statement: "Write a program to find the largest among three given integers.",
        inputFormat: "Three integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "10 45 20", output: "45" }],
        solution: `a, b, c = map(int, input().split())
print(max(a, b, c))`,
        explanation: "The built-in `max()` function can take any number of arguments and returns the largest one. This is the most Pythonic way to solve the problem."
      },
      {
        id: "python-s4-q6",
        title: "Menu-driven Calculator",
        description: "A simple calculator using if-elif-else.",
        statement: "Read two numbers and an operator (+, -, *, /). Perform the calculation.",
        inputFormat: "First number, operator, second number, each on a new line.",
        outputFormat: "The result.",
        testCases: [{ input: "10\n*\n5", output: "50" }],
        solution: `num1 = float(input())
op = input()
num2 = float(input())

if op == '+':
    print(num1 + num2)
elif op == '-':
    print(num1 - num2)
elif op == '*':
    print(num1 * num2)
elif op == '/':
    if num2 == 0:
        print("Division by zero error")
    else:
        print(num1 / num2)
else:
    print("Invalid operator")`,
        explanation: "The program reads two numbers and an operator. An `if-elif-else` chain checks which operator was entered and performs the corresponding calculation. It also includes a check for division by zero."
      },
      {
        id: "python-s4-q7",
        title: "Character Vowel or Consonant",
        description: "Check if a character is a vowel.",
        statement: "Check if a character is a vowel ('a', 'e', 'i', 'o', 'u').",
        inputFormat: "A single lowercase character.",
        outputFormat: "'Vowel' or 'Consonant'.",
        testCases: [{ input: "a", output: "Vowel" }],
        solution: `char = input()
if char in 'aeiou':
    print("Vowel")
else:
    print("Consonant")`,
        explanation: "Python's `in` operator provides a very clean way to check for membership. It checks if the character exists within the string 'aeiou'."
      },
      {
        id: "python-s4-q8",
        title: "Accept age & check eligibility",
        description: "Check voting eligibility.",
        statement: "Read an age and check if the person is eligible to vote (age >= 18).",
        inputFormat: "An integer age.",
        outputFormat: "'Eligible' or 'Not eligible'.",
        testCases: [{ input: "21", output: "Eligible" }],
        solution: `age = int(input())
if age >= 18:
    print("Eligible")
else:
    print("Not eligible")`,
        explanation: "A simple `if-else` statement checks if the entered age is greater than or equal to 18."
      },
      {
        id: "python-s4-q9",
        title: "Electricity Bill Calculator",
        description: "Calculate a bill based on tiered rates.",
        statement: "Calculate an electricity bill. First 100 units: Rs. 10/unit. Next 100 units: Rs. 15/unit. Above 200 units: Rs. 20/unit.",
        inputFormat: "An integer for units consumed.",
        outputFormat: "The total bill.",
        testCases: [{ input: "250", output: "3500" }],
        solution: `units = int(input())
bill = 0

if units > 200:
    bill += (units - 200) * 20
    units = 200

if units > 100:
    bill += (units - 100) * 15
    units = 100
    
bill += units * 10

print(bill)`,
        explanation: "The logic calculates the bill for the highest tier first and then works its way down. This avoids complex `elif` conditions and makes the calculation for each tier straightforward."
      },
      {
        id: "python-s4-q10",
        title: "Simple ATM system (if/else)",
        description: "Simulate a basic ATM withdrawal.",
        statement: "Given a balance and a withdrawal amount, check if the withdrawal is possible. If yes, print the remaining balance. If no, print 'Insufficient funds'.",
        inputFormat: "Two integers: balance and withdrawal amount.",
        outputFormat: "The result.",
        testCases: [{ input: "1000 500", output: "Remaining balance: 500" }, { input: "1000 1500", output: "Insufficient funds" }],
        solution: `balance, withdraw = map(int, input().split())

if withdraw <= balance:
    remaining = balance - withdraw
    print(f"Remaining balance: {remaining}")
else:
    print("Insufficient funds")`,
        explanation: "The program checks if the withdrawal amount is less than or equal to the available balance. If it is, the transaction is successful; otherwise, an error message is printed."
      }
    ]
  }
];
