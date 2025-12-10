import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART10: ProblemCategory[] = [
  {
    category: "SECTION 19 — REGEX (Regular Expressions)",
    problems: [
      {
        id: "python-s19-q1",
        title: "Validate email",
        description: "Check if a string is a valid email format.",
        statement: "Write a program using regex to check if a given string is a valid email address.",
        inputFormat: "A string.",
        outputFormat: "'Valid' or 'Invalid'.",
        testCases: [{ input: "test@example.com", output: "Valid" }, { input: "test@.com", output: "Invalid" }],
        solution: `import re

email = input()
# A simple regex for email validation
pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'

if re.match(pattern, email):
    print("Valid")
else:
    print("Invalid")`,
        explanation: "`re.match()` attempts to match the pattern from the beginning of the string. The regex pattern checks for a standard email structure: `local-part@domain.extension`."
      },
      {
        id: "python-s19-q2",
        title: "Validate phone number",
        description: "Check for a valid 10-digit phone number.",
        statement: "Use regex to validate if a string is a 10-digit phone number.",
        inputFormat: "A string.",
        outputFormat: "'Valid' or 'Invalid'.",
        testCases: [{ input: "1234567890", output: "Valid" }, { input: "12345", output: "Invalid" }],
        solution: `import re

phone = input()
pattern = r'^\\d{10}$'

if re.match(pattern, phone):
    print("Valid")
else:
    print("Invalid")`,
        explanation: "`^` matches the start of the string, `\\d{10}` matches exactly 10 digits, and `$` matches the end of the string. This ensures the entire string is exactly 10 digits long."
      },
      {
        id: "python-s19-q3",
        title: "Remove digits from string",
        description: "Remove all numeric digits from a string.",
        statement: "Given a string, remove all the digits from it.",
        inputFormat: "A string.",
        outputFormat: "The string without digits.",
        testCases: [{ input: "CodeAlpha123", output: "CodeAlpha" }],
        solution: `import re

s = input()
result = re.sub(r'\\d', '', s)
print(result)`,
        explanation: "`re.sub(pattern, replacement, string)` replaces all occurrences of the pattern in the string. `\\d` is a special sequence that matches any digit (0-9)."
      },
      {
        id: "python-s19-q4",
        title: "Remove special chars",
        description: "Remove all non-alphanumeric characters.",
        statement: "Given a string, remove all special characters (anything that is not a letter, number, or space).",
        inputFormat: "A string.",
        outputFormat: "The cleaned string.",
        testCases: [{ input: "Hello!@#World", output: "HelloWorld" }],
        solution: `import re

s = input()
result = re.sub(r'[^\\w\\s]', '', s)
print(result)`,
        explanation: "The pattern `[^\\w\\s]` means 'match any character that is NOT (`^`) a word character (`\\w`, which is a-z, A-Z, 0-9, and _) or a whitespace character (`\\s`)."
      },
      {
        id: "python-s19-q5",
        title: "Extract all numbers",
        description: "Find all numbers in a string.",
        statement: "Given a string, extract all numbers from it and print them as a list.",
        inputFormat: "A string.",
        outputFormat: "A list of numbers (as strings).",
        testCases: [{ input: "The price is $100 and the tax is $10.", output: "['100', '10']" }],
        solution: `import re

s = input()
numbers = re.findall(r'\\d+', s)
print(numbers)`,
        explanation: "`re.findall()` returns a list of all non-overlapping matches of the pattern in the string. `\\d+` matches one or more consecutive digits."
      },
      {
        id: "python-s19-q6",
        title: "Extract hashtags",
        description: "Find all hashtags in a string.",
        statement: "Given a string of text, extract all hashtags (words starting with #).",
        inputFormat: "A string.",
        outputFormat: "A list of hashtags.",
        testCases: [{ input: "I love #Python and #CodeAlpha", output: "['#Python', '#CodeAlpha']" }],
        solution: `import re

s = input()
hashtags = re.findall(r'#\\w+', s)
print(hashtags)`,
        explanation: "The pattern `#\\w+` matches a '#' symbol followed by one or more word characters (letters, numbers, or underscore)."
      },
      {
        id: "python-s19-q7",
        title: "Validate strong password",
        description: "Check for a strong password.",
        statement: "Validate a password. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        inputFormat: "A string.",
        outputFormat: "'Valid' or 'Invalid'.",
        testCases: [{ input: "StrongP@ss1", output: "Valid" }],
        solution: `import re

password = input()
pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'

if re.match(pattern, password):
    print("Valid")
else:
    print("Invalid")`,
        explanation: "This regex uses 'lookaheads' `(?=...)` to assert that the password contains the required character types without consuming characters. `[A-Za-z\\d@$!%*?&]{8,}` then ensures the password is at least 8 characters long and only contains valid characters."
      },
      {
        id: "python-s19-q8",
        title: "Extract URLs",
        description: "Find all URLs in a text.",
        statement: "Given a block of text, extract all URLs (http, https).",
        inputFormat: "A string.",
        outputFormat: "A list of URLs.",
        testCases: [{ input: "Visit us at https://codealpha.tech or http://example.com", output: "['https://codealpha.tech', 'http://example.com']" }],
        solution: `import re

s = input()
urls = re.findall(r'https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', s)
print(urls)`,
        explanation: "This is a standard, robust regex pattern for matching URLs. It looks for `http://` or `https://` followed by a valid domain name structure."
      },
      {
        id: "python-s19-q9",
        title: "Find repeating characters",
        description: "Find characters that repeat consecutively.",
        statement: "Find all occurrences of characters that repeat two or more times consecutively.",
        inputFormat: "A string.",
        outputFormat: "A list of matches.",
        testCases: [{ input: "aaabbcddde", output: "['aaa', 'bb', 'ddd']" }],
        solution: `import re

s = input()
# (\\w) captures a character, \\1+ matches one or more occurrences of that captured character
repeats = re.findall(r'(\\w)\\1+', s) 
# The above finds the character, to get the full sequence:
matches = [m.group() for m in re.finditer(r'(\\w)\\1+', s)]
print(matches)`,
        explanation: "`re.finditer` returns an iterator of match objects. The pattern `(\\w)\\1+` uses a backreference: `(\\w)` captures a character into group 1, and `\\1+` matches one or more occurrences of whatever was captured in group 1."
      },
      {
        id: "python-s19-q10",
        title: "Replace multiple spaces",
        description: "Replace multiple spaces with a single space.",
        statement: "Given a string with multiple spaces between words, clean it up so there is only a single space.",
        inputFormat: "A string.",
        outputFormat: "The cleaned string.",
        testCases: [{ input: "Hello   World  from  CodeAlpha", output: "Hello World from CodeAlpha" }],
        solution: `import re

s = input()
result = re.sub(r'\\s+', ' ', s)
print(result)`,
        explanation: "The pattern `\\s+` matches one or more whitespace characters. `re.sub` replaces all such occurrences with a single space ' '."
      }
    ]
  },
  {
    category: "SECTION 20 — ADVANCED / PROJECT STYLE",
    problems: [
      {
        id: "python-s20-q1",
        title: "Calculator program",
        description: "A full calculator program.",
        statement: "Create a command-line calculator that takes an expression as a string (e.g., '10 + 5') and prints the result.",
        inputFormat: "A string expression.",
        outputFormat: "The result.",
        testCases: [{ input: "10 + 5", output: "15.0" }],
        solution: `expression = input()
try:
    result = eval(expression)
    print(float(result))
except Exception as e:
    print(f"Invalid expression: {e}")`,
        explanation: "The `eval()` function is a simple way to implement a calculator for basic expressions. It parses and evaluates the string as Python code. A `try-except` block is used to handle invalid expressions."
      },
      {
        id: "python-s20-q2",
        title: "Contact book",
        description: "A simple dictionary-based contact book.",
        statement: "Create a simple contact book using a dictionary. Implement functions to add, view, and search contacts.",
        inputFormat: "No input, demonstration.",
        outputFormat: "Demonstration of functionality.",
        testCases: [{ input: "", output: "Alice: 12345\nContact found: Bob -> 67890" }],
        solution: `contacts = {}

def add_contact(name, number):
    contacts[name] = number
    print(f"Added {name}.")

def view_contacts():
    for name, number in contacts.items():
        print(f"{name}: {number}")

def search_contact(name):
    if name in contacts:
        print(f"Contact found: {name} -> {contacts[name]}")
    else:
        print("Contact not found.")

add_contact("Alice", "12345")
add_contact("Bob", "67890")
view_contacts()
search_contact("Bob")`,
        explanation: "A dictionary is a natural choice for a contact book, mapping names (keys) to numbers (values). Separate functions are created for each action to keep the code organized."
      },
      {
        id: "python-s20-q3",
        title: "To-do list app",
        description: "A simple command-line to-do list.",
        statement: "Create a simple to-do list app using a list. Implement functions to add a task, view tasks, and remove a task.",
        inputFormat: "No input, demonstration.",
        outputFormat: "Demonstration of functionality.",
        testCases: [{ input: "", output: "1. Learn Python\n2. Practice Coding\nTask 'Learn Python' removed." }],
        solution: `tasks = []

def add_task(task):
    tasks.append(task)
    print("Task added.")

def view_tasks():
    if not tasks:
        print("No tasks yet.")
    for i, task in enumerate(tasks, 1):
        print(f"{i}. {task}")

def remove_task(task_name):
    if task_name in tasks:
        tasks.remove(task_name)
        print(f"Task '{task_name}' removed.")
    else:
        print("Task not found.")

add_task("Learn Python")
add_task("Practice Coding")
view_tasks()
remove_task("Learn Python")`,
        explanation: "A list is used to store the tasks. `enumerate()` is a helpful function for getting both the index and the value while looping, which we use for displaying the numbered list."
      },
      {
        id: "python-s20-q4",
        title: "Password manager",
        description: "A very basic password manager.",
        statement: "Create a simple password manager using a dictionary. Implement add and retrieve functions. (Note: Do not use for real passwords!).",
        inputFormat: "No input.",
        outputFormat: "Demonstration.",
        testCases: [{ input: "", output: "Password for email: P@ssword123" }],
        solution: `passwords = {}

def add_password(service, password):
    passwords[service] = password

def get_password(service):
    return passwords.get(service, "Not found")

add_password("email", "P@ssword123")
print(f"Password for email: {get_password('email')}")`,
        explanation: "This uses a dictionary to map service names to passwords. The `.get()` method is a safe way to retrieve a value, as it can provide a default value ('Not found') if the key doesn't exist, preventing an error."
      },
      {
        id: "python-s20-q5",
        title: "Weather data parser",
        description: "Parse a simple JSON weather response.",
        statement: "Given a JSON string representing weather data, parse it and print the temperature and weather description.",
        inputFormat: "No input.",
        outputFormat: "Temperature: 25 C\nCondition: Clear",
        testCases: [{ input: "", output: "Temperature: 25 C\nCondition: Clear" }],
        solution: `import json

json_data = '{"city": "New York", "temperature": 25, "weather": "Clear"}'
data = json.loads(json_data)

temp = data["temperature"]
condition = data["weather"]

print(f"Temperature: {temp} C")
print(f"Condition: {condition}")`,
        explanation: "The `json.loads()` (load string) function is used to parse a JSON string into a Python dictionary. We can then access the values using standard dictionary key lookups."
      },
      {
        id: "python-s20-q6",
        title: "CSV analyzer",
        description: "Read a CSV and find the average of a column.",
        statement: "Read a CSV string, parse it, and calculate the average of the 'Score' column.",
        inputFormat: "No input.",
        outputFormat: "Average Score: 87.5",
        testCases: [{ input: "", output: "Average Score: 87.5" }],
        solution: `import csv
from io import StringIO

csv_data = """Name,Score
Alice,90
Bob,85"""

# Use StringIO to treat the string as a file
f = StringIO(csv_data)
reader = csv.reader(f)

header = next(reader)
scores = []
for row in reader:
    scores.append(int(row[1]))

average = sum(scores) / len(scores)
print(f"Average Score: {average}")`,
        explanation: "To work with a string as if it were a file, we use `io.StringIO`. We then use the `csv` module to read the data, extract the scores into a list, and calculate the average."
      },
      {
        id: "python-s20-q7",
        title: "Student mark sheet system",
        description: "A system to store and display student marks.",
        statement: "Create a system that stores student names and their marks in multiple subjects using a nested dictionary. Print a specific student's marks.",
        inputFormat: "No input.",
        outputFormat: "Bob's Marks - Math: 85, Science: 92",
        testCases: [{ input: "", output: "Bob's Marks - Math: 85, Science: 92" }],
        solution: `mark_sheet = {
    "Alice": {"Math": 90, "Science": 88},
    "Bob": {"Math": 85, "Science": 92}
}

student_name = "Bob"
if student_name in mark_sheet:
    marks = mark_sheet[student_name]
    print(f"{student_name}'s Marks - Math: {marks['Math']}, Science: {marks['Science']}")`,
        explanation: "A nested dictionary is used, where the outer keys are student names and the values are other dictionaries containing subjects and marks. This provides a structured way to store complex related data."
      },
      {
        id: "python-s20-q8",
        title: "Expense tracker",
        description: "A simple expense tracker.",
        statement: "Create a program that tracks expenses. Use a list of dictionaries, where each dictionary represents an expense with a 'description' and 'amount'. Calculate the total expense.",
        inputFormat: "No input.",
        outputFormat: "Total Expenses: 65.5",
        testCases: [{ input: "", output: "Total Expenses: 65.5" }],
        solution: `expenses = []

def add_expense(desc, amount):
    expenses.append({"description": desc, "amount": amount})

def get_total():
    return sum(item['amount'] for item in expenses)

add_expense("Coffee", 5.5)
add_expense("Lunch", 20)
add_expense("Groceries", 40)

print(f"Total Expenses: {get_total()}")`,
        explanation: "A list of dictionaries is a flexible way to store records. The `get_total` function uses a generator expression within `sum()` to efficiently add up the 'amount' from each dictionary in the list."
      },
      {
        id: "python-s20-q9",
        title: "Chat simulation",
        description: "A simple turn-based chat simulation.",
        statement: "Simulate a chat between a user and a bot. The bot gives predefined replies based on keywords in the user's input.",
        inputFormat: "User inputs.",
        outputFormat: "Bot replies.",
        testCases: [{ input: "hello", output: "Hi there!" }],
        solution: `def bot_reply(message):
    message = message.lower()
    if "hello" in message or "hi" in message:
        return "Hi there!"
    elif "how are you" in message:
        return "I am a bot, I am doing great!"
    elif "bye" in message:
        return "Goodbye!"
    else:
        return "Sorry, I don't understand."

while True:
    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break
    reply = bot_reply(user_input)
    print(f"Bot: {reply}")`,
        explanation: "The `bot_reply` function contains the logic for the bot's responses. It converts the user's message to lowercase and checks for keywords using the `in` operator. A `while` loop keeps the chat going until the user types 'exit'."
      },
      {
        id: "python-s20-q10",
        title: "Mini ATM software",
        description: "A more complete ATM simulation.",
        statement: "Create a mini ATM using a class. It should support check balance, deposit, and withdraw, with a starting balance.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of ATM functions.",
        testCases: [{ input: "", output: "Balance: 1000\nBalance after deposit: 1500\nBalance after withdrawal: 1200" }],
        solution: `class ATM:
    def __init__(self, balance=0):
        self.__balance = balance
    
    def check_balance(self):
        print(f"Balance: {self.__balance}")
        
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Balance after deposit: {self.__balance}")
        
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Balance after withdrawal: {self.__balance}")
        else:
            print("Insufficient funds or invalid amount.")

# --- Simulation ---
my_atm = ATM(1000)
my_atm.check_balance()
my_atm.deposit(500)
my_atm.withdraw(300)`,
        explanation: "An `ATM` class encapsulates the balance (as a private attribute) and the operations. This OOP approach makes the code organized, reusable, and protects the balance from being accidentally modified from outside the class."
      }
    ]
  }
];
