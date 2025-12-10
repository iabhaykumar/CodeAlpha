import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART9: ProblemCategory[] = [
  {
    category: "SECTION 17 — EXCEPTION HANDLING",
    problems: [
      {
        id: "python-s17-q1",
        title: "Handle ZeroDivisionError",
        description: "Handle division by zero.",
        statement: "Write a program that takes two integers and divides them. Use a `try-except` block to gracefully handle the case where the second number is zero.",
        inputFormat: "Two integers.",
        outputFormat: "The result of the division or an error message.",
        testCases: [{ input: "10 0", output: "Error: Cannot divide by zero!" }],
        solution: `try:
    a, b = map(int, input().split())
    print(a / b)
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")`,
        explanation: "The division operation is placed inside a `try` block. If `b` is zero, Python raises a `ZeroDivisionError`. The `except` block catches this specific error and prints a user-friendly message instead of crashing."
      },
      {
        id: "python-s17-q2",
        title: "Multiple exceptions",
        description: "Handle multiple types of exceptions.",
        statement: "Write a program that takes two inputs and divides them. Handle both `ZeroDivisionError` and `ValueError` (if the input is not a number).",
        inputFormat: "Two values, which may not be numbers.",
        outputFormat: "Result or an error message.",
        testCases: [{ input: "10 abc", output: "Error: Invalid input. Please enter numbers." }],
        solution: `try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print(a / b)
except ValueError:
    print("Error: Invalid input. Please enter numbers.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")`,
        explanation: "You can have multiple `except` blocks to handle different types of errors. Python will execute the first one that matches the error that occurred."
      },
      {
        id: "python-s17-q3",
        title: "try/except/else/finally",
        description: "Demonstrate all parts of a try block.",
        statement: "Write a program using `try`, `except`, `else`, and `finally`. The `else` block should run only if no exception occurs, and `finally` should always run.",
        inputFormat: "Two integers.",
        outputFormat: "A sequence of messages demonstrating the flow.",
        testCases: [{ input: "10 2", output: "Result is: 5.0\nNo errors occurred.\nExecution finished." }],
        solution: `try:
    a, b = map(int, input().split())
    result = a / b
except ZeroDivisionError:
    print("Caught a division by zero error.")
else:
    # This runs only if the try block succeeds
    print(f"Result is: {result}")
finally:
    # This runs no matter what
    print("Execution finished.")`,
        explanation: "`else` provides a clean way to separate the code that should run upon success from the main `try` block. `finally` is essential for cleanup actions like closing files, which must happen regardless of errors."
      },
      {
        id: "python-s17-q4",
        title: "Raise custom exception",
        description: "Manually raise an exception.",
        statement: "Create a function that raises a `ValueError` with a custom message if the input is negative.",
        inputFormat: "A single integer.",
        outputFormat: "A success message or the custom error.",
        testCases: [{ input: "-5", output: "Error: Input cannot be negative" }],
        solution: `def process_positive_number(n):
    if n < 0:
        raise ValueError("Input cannot be negative")
    print("Processing successful.")

try:
    num = int(input())
    process_positive_number(num)
except ValueError as e:
    print(f"Error: {e}")`,
        explanation: "The `raise` keyword allows you to create and trigger an exception manually. This is useful for enforcing specific rules or conditions in your code."
      },
      {
        id: "python-s17-q5",
        title: "Password validation exception",
        description: "Create a custom exception for password validation.",
        statement: "Create a custom exception `PasswordTooShortError`. Write a function that raises this error if a password is less than 8 characters.",
        inputFormat: "A string password.",
        outputFormat: "Success or an error message.",
        testCases: [{ input: "short", output: "Password is too short. Must be at least 8 characters." }],
        solution: `class PasswordTooShortError(Exception):
    pass

def validate_password(password):
    if len(password) < 8:
        raise PasswordTooShortError("Password is too short. Must be at least 8 characters.")
    print("Password is valid.")

try:
    pwd = input()
    validate_password(pwd)
except PasswordTooShortError as e:
    print(e)`,
        explanation: "We define our own exception class by inheriting from `Exception`. This makes our code more readable and allows us to catch this specific error type separately from other potential errors."
      },
      {
        id: "python-s17-q6",
        title: "File not found handling",
        description: "Handle a `FileNotFoundError`.",
        statement: "Write a program that tries to read a file that doesn't exist and catches the `FileNotFoundError`.",
        inputFormat: "No input.",
        outputFormat: "File does not exist.",
        testCases: [{ input: "", output: "File does not exist." }],
        solution: `try:
    with open("non_existent_file.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("File does not exist.")`,
        explanation: "When you try to open a file that isn't there, Python raises a `FileNotFoundError`. Catching this specific error allows you to handle it gracefully, for example, by creating the file or notifying the user."
      },
      {
        id: "python-s17-q7",
        title: "ValueError handling",
        description: "Handle `ValueError` from type conversion.",
        statement: "Ask the user for their age and convert it to an integer. Handle the `ValueError` if they enter non-numeric text.",
        inputFormat: "A string, which may not be a number.",
        outputFormat: "Success or an error message.",
        testCases: [{ input: "twenty", output: "Invalid input. Please enter a number." }],
        solution: `try:
    age = int(input("Enter your age: "))
    print(f"You are {age} years old.")
except ValueError:
    print("Invalid input. Please enter a number.")`,
        explanation: "The `int()` function will raise a `ValueError` if the string it's given cannot be converted into an integer. The `try-except` block catches this and provides helpful feedback."
      },
      {
        id: "python-s17-q8",
        title: "TypeError example",
        description: "Catch a `TypeError`.",
        statement: "Demonstrate a `TypeError` by trying to add a string and an integer, and catch the exception.",
        inputFormat: "No input.",
        outputFormat: "Error: Cannot add a string and an integer.",
        testCases: [{ input: "", output: "Error: Cannot add a string and an integer." }],
        solution: `try:
    result = "5" + 10
except TypeError:
    print("Error: Cannot add a string and an integer.")`,
        explanation: "A `TypeError` is raised when an operation or function is applied to an object of an inappropriate type. Here, the `+` operator is not defined for a string and an integer."
      },
      {
        id: "python-s17-q9",
        title: "Negative age exception",
        description: "Use `raise` for a logical error.",
        statement: "Create a function that raises a `ValueError` if an entered age is negative.",
        inputFormat: "An integer.",
        outputFormat: "Success or an error message.",
        testCases: [{ input: "-10", output: "Age cannot be negative." }],
        solution: `def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative.")
    print(f"Age set to {age}")

try:
    user_age = int(input())
    set_age(user_age)
except ValueError as e:
    print(e)`,
        explanation: "This shows how `raise` is used to enforce application-specific rules (domain logic). Even though a negative number is a valid integer, it's not a valid age, so we raise an exception."
      },
      {
        id: "python-s17-q10",
        title: "Age validation program",
        description: "A complete age validation program.",
        statement: "Write a program that repeatedly asks for an age until a valid positive integer is entered.",
        inputFormat: "User input, potentially multiple times.",
        outputFormat: "Final confirmation message.",
        testCases: [{ input: "abc\n-5\n25", output: "Invalid input. Please enter a number.\nAge cannot be negative.\nAge successfully set to 25" }],
        solution: `while True:
    try:
        age = int(input("Enter your age: "))
        if age < 0:
            raise ValueError("Age cannot be negative.")
        print(f"Age successfully set to {age}")
        break # Exit the loop on success
    except ValueError as e:
        print(e) # Print the specific error message`,
        explanation: "A `while True` loop creates an infinite loop. Inside, a `try-except` block validates the input. If the input is valid, the `break` statement exits the loop. If any error occurs, the `except` block prints the error, and the loop continues, prompting the user again."
      }
    ]
  },
  {
    category: "SECTION 18 — MODULES (math, random, datetime, os)",
    problems: [
      {
        id: "python-s18-q1",
        title: "Math: factorial, sqrt, gcd",
        description: "Use functions from the `math` module.",
        statement: "Use the `math` module to find the factorial of 5, the square root of 16, and the GCD of 48 and 18.",
        inputFormat: "No input.",
        outputFormat: "The results on separate lines.",
        testCases: [{ input: "", output: "Factorial: 120\nSqrt: 4.0\nGCD: 6" }],
        solution: `import math

print(f"Factorial: {math.factorial(5)}")
print(f"Sqrt: {math.sqrt(16)}")
print(f"GCD: {math.gcd(48, 18)}")`,
        explanation: "The `math` module provides access to many common mathematical functions and constants."
      },
      {
        id: "python-s18-q2",
        title: "Random: dice roll",
        description: "Simulate rolling a six-sided die.",
        statement: "Use the `random` module to generate a random integer between 1 and 6 (inclusive).",
        inputFormat: "No input.",
        outputFormat: "A random integer between 1 and 6.",
        testCases: [{ input: "", output: "3" }],
        solution: `import random

# randint includes both endpoints
dice_roll = random.randint(1, 6)
print(dice_roll)`,
        explanation: "`random.randint(a, b)` returns a random integer `N` such that `a <= N <= b`."
      },
      {
        id: "python-s18-q3",
        title: "Random: OTP generator",
        description: "Generate a random 4-digit OTP.",
        statement: "Generate a 4-digit One-Time Password (a random number between 1000 and 9999).",
        inputFormat: "No input.",
        outputFormat: "A random 4-digit number.",
        testCases: [{ input: "", output: "4582" }],
        solution: `import random

otp = random.randint(1000, 9999)
print(otp)`,
        explanation: "We use `random.randint` with the lower and upper bounds of a 4-digit number to generate a random OTP."
      },
      {
        id: "python-s18-q4",
        title: "Datetime: find age",
        description: "Calculate age from a birth date.",
        statement: "Given a birth year, calculate the current age.",
        inputFormat: "An integer birth year.",
        outputFormat: "The current age.",
        testCases: [{ input: "2000", output: "24" }],
        solution: `import datetime

birth_year = int(input())
current_year = datetime.date.today().year
age = current_year - birth_year
print(age)`,
        explanation: "`datetime.date.today()` returns the current date. We can access its `.year` attribute to get the current year and then subtract the birth year."
      },
      {
        id: "python-s18-q5",
        title: "os: file exists or not",
        description: "Check if a file exists.",
        statement: "Use the `os` module to check if a file named 'test.txt' exists in the current directory.",
        inputFormat: "No input.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "", output: "No" }],
        solution: `import os

if os.path.exists("test.txt"):
    print("Yes")
else:
    print("No")`,
        explanation: "`os.path.exists()` is a simple way to check if a file or directory exists at a given path. It returns `True` or `False`."
      },
      {
        id: "python-s18-q6",
        title: "os: list all files",
        description: "List all files and directories in the current directory.",
        statement: "Use the `os` module to list all entries in the current directory.",
        inputFormat: "No input.",
        outputFormat: "A list of files and directories.",
        testCases: [{ input: "", output: "['file1.txt', 'folder1']" }],
        solution: `import os

print(os.listdir('.'))`,
        explanation: "`os.listdir(path)` returns a list containing the names of the entries in the directory given by `path`. `'.'` represents the current directory."
      },
      {
        id: "python-s18-q7",
        title: "calendar module usage",
        description: "Print the calendar for a given month and year.",
        statement: "Use the `calendar` module to print the formatted calendar for a specific month and year.",
        inputFormat: "Two integers: year and month.",
        outputFormat: "The formatted calendar.",
        testCases: [{ input: "2024 7", output: "     July 2024\nMo Tu We Th Fr Sa Su\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n" }],
        solution: `import calendar

yy = int(input())
mm = int(input())

print(calendar.month(yy, mm))`,
        explanation: "The `calendar.month()` function takes a year and a month and returns a multi-line string representing the calendar for that month."
      },
      {
        id: "python-s18-q8",
        title: "time delay program",
        description: "Create a delay in your program.",
        statement: "Print 'Start', wait for 2 seconds, and then print 'End'.",
        inputFormat: "No input.",
        outputFormat: "'Start' and 'End' with a delay.",
        testCases: [{ input: "", output: "Start\nEnd" }],
        solution: `import time

print("Start")
time.sleep(2)  # Pause for 2 seconds
print("End")`,
        explanation: "The `time.sleep()` function suspends execution of the current thread for the given number of seconds."
      },
      {
        id: "python-s18-q9",
        title: "random password generator",
        description: "Generate a random password.",
        statement: "Generate a random password of length 10 consisting of letters (upper and lower), digits, and symbols.",
        inputFormat: "No input.",
        outputFormat: "A random 10-character password.",
        testCases: [{ input: "", output: "aB5!c@D6eF" }],
        solution: `import random
import string

length = 10
characters = string.ascii_letters + string.digits + string.punctuation
password = ''.join(random.choice(characters) for i in range(length))
print(password)`,
        explanation: "The `string` module provides convenient collections of characters. We create a combined string of all possible characters. Then, a generator expression with `random.choice` picks `length` random characters, and `''.join()` combines them into the final password string."
      },
      {
        id: "python-s18-q10",
        title: "math: trigonometric problems",
        description: "Use trigonometric functions.",
        statement: "Calculate the sine of 90 degrees and the cosine of 0 degrees.",
        inputFormat: "No input.",
        outputFormat: "The sine and cosine values.",
        testCases: [{ input: "", output: "sin(90 deg): 1.0\ncos(0 deg): 1.0" }],
        solution: `import math

# math functions work in radians, so we need to convert
angle_90_rad = math.radians(90)
angle_0_rad = math.radians(0)

print(f"sin(90 deg): {math.sin(angle_90_rad)}")
print(f"cos(0 deg): {math.cos(angle_0_rad)}")`,
        explanation: "Trigonometric functions in the `math` module (like `sin`, `cos`, `tan`) expect their input in radians, not degrees. We use `math.radians()` to perform the conversion first."
      }
    ]
  }
];
