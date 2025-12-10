

import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PYTHON_PART1_TOPICS: Topic[] = [
  // 1. Python Basics
  {
    id: 'py-what-is-python',
    title: 'What is Python?',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant indentation. It's often described as a "batteries included" language due to its comprehensive standard library.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Easy to Learn:</strong> Simple, clean syntax makes it a great first language.</li>
          <li><strong>Interpreted:</strong> Code is executed line by line, which simplifies debugging.</li>
          <li><strong>Dynamically Typed:</strong> You don't need to declare the type of a variable.</li>
          <li><strong>Cross-Platform:</strong> Python programs can run on Windows, macOS, and Linux without change.</li>
          <li><strong>Vast Libraries:</strong> Huge ecosystem of libraries for web development (Django, Flask), data science (Pandas, NumPy), machine learning (TensorFlow, PyTorch), and more.</li>
        </ul>
      </>
    )
  },
  {
    id: 'py-setup',
    title: 'Installation & Setup',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">To get started, you need to install Python on your system. You can download it from the official website. It's also recommended to use a good code editor like Visual Studio Code.</p>
        <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">Download Python</a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="ml-4 inline-block bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">Download VS Code</a>
        <h3 className="text-xl font-bold mt-6 mb-2">Verifying Installation</h3>
        <p>Once installed, open your terminal or command prompt and type:</p>
        <CodeBlock language="bash" code={`python --version
# or on some systems
python3 --version`} />
      </>
    )
  },
  {
    id: 'py-variables',
    title: 'Variables',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Variables are containers for storing data values. In Python, a variable is created the moment you first assign a value to it.</p>
        <CodeBlock language="python" code={`# A variable is a named location to store data.
# No need to declare the type of variable.

name = "CodeAlpha"  # A string variable
interns = 10000     # An integer variable
rating = 4.9        # A float variable
is_popular = True   # A boolean variable

print(name)
print(interns)`} />
      </>
    )
  },
  {
    id: 'py-data-types',
    title: 'Data Types',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Python has various built-in data types. The most common ones are:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Text Type:</strong> <code>str</code></li>
          <li><strong>Numeric Types:</strong> <code>int</code>, <code>float</code>, <code>complex</code></li>
          <li><strong>Sequence Types:</strong> <code>list</code>, <code>tuple</code>, <code>range</code></li>
          <li><strong>Mapping Type:</strong> <code>dict</code></li>
          <li><strong>Set Types:</strong> <code>set</code>, <code>frozenset</code></li>
          <li><strong>Boolean Type:</strong> <code>bool</code></li>
        </ul>
        <CodeBlock language="python" code={`x = "Hello"      # str
y = 20           # int
z = 20.5         # float
a = ["apple", "banana"] # list
b = ("apple", "banana") # tuple
c = {"name": "John"}  # dict
d = {"apple", "banana"} # set
e = True         # bool

# You can get the data type with the type() function.
print(type(x))`} />
      </>
    )
  },
  {
    id: 'py-io',
    title: 'Input/Output',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Python provides functions to get input from the user and display output.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Output: `print()`</h3>
        <p>The `print()` function is used to display output to the console.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Input: `input()`</h3>
        <p>The `input()` function allows you to get input from the user. It always returns the input as a string.</p>
        <CodeBlock language="python" code={`# Using print() for output
print("Welcome to CodeAlpha!")

# Using input() to get user data
name = input("Please enter your name: ")
print("Hello, " + name + "!")

# Note: input() returns a string. You need to cast it for numbers.
age_str = input("Enter your age: ")
age_int = int(age_str)
print("Next year you will be", age_int + 1)`} />
      </>
    )
  },
  {
    id: 'py-operators',
    title: 'Operators',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Operators are used to perform operations on variables and values.</p>
        <ul className="list-disc pl-5 space-y-3 mb-6">
          <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulus), <code>**</code> (exponentiation), <code>//</code> (floor division)</li>
          <li><strong>Comparison Operators:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
          <li><strong>Logical Operators:</strong> <code>and</code>, <code>or</code>, <code>not</code></li>
        </ul>
        <CodeBlock language="python" code={`a = 10
b = 3

print(a + b)  # 13
print(a / b)  # 3.33...
print(a // b) # 3 (floor division)
print(a ** b) # 1000 (10 to the power of 3)

# Logical operators
is_active = True
has_permission = False
print(is_active and has_permission) # False
print(is_active or has_permission)  # True`} />
      </>
    )
  },
  {
    id: 'py-type-casting',
    title: 'Type Casting',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Type Casting is the method to convert a variable's data type into a certain data type in order to the required operation.</p>
        <CodeBlock language="python" code={`x = int(1)     # x will be 1
y = int(2.8)   # y will be 2
z = int("3")   # z will be 3

a = float("4.2") # a will be 4.2
b = str(3.0)   # b will be '3.0'`} />
      </>
    )
  },
  {
    id: 'py-comments',
    title: 'Comments',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Comments are used to explain Python code and make it more readable. They are ignored by the interpreter.</p>
        <CodeBlock language="python" code={`# This is a single-line comment

"""
This is a
multi-line comment
often used for docstrings.
"""

x = 5 # This is an inline comment`} />
      </>
    )
  },
  {
    id: 'py-indentation',
    title: 'Indentation',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Indentation is crucial in Python. It's not just for readability; it's how Python defines blocks of code (like loops, functions, and classes). The standard is to use 4 spaces per indentation level.</p>
        <CodeBlock language="python" code={`if 5 > 2:
    print("Five is greater than two!") # This line is indented

# This will cause an IndentationError
# if 5 > 2:
# print("This will fail!")`} />
      </>
    )
  },
  {
    id: 'py-keywords',
    title: 'Keywords',
    parent: '1. Python Basics',
    content: (
      <>
        <p className="mb-4">Keywords are reserved words in Python that have special meanings. You cannot use them as variable names, function names, or any other identifiers.</p>
        <CodeBlock language="python" code={`# Some common keywords
# False, True, None, and, or, not, if, else, elif, for, while, break, continue, def, return, class, import, try, except...

# You can see all keywords by running:
import keyword
print(keyword.kwlist)`} />
      </>
    )
  },
  {
    id: 'py-basic-programs',
    title: 'Basic Programs',
    parent: '1. Python Basics',
    content: (
      <>
        <h3 className="text-xl font-bold mb-2">1. Add two numbers</h3>
        <CodeBlock language="python" code={`num1 = 10
num2 = 20
sum = num1 + num2
print("The sum is:", sum)`} />
        <h3 className="text-xl font-bold mt-6 mb-2">2. Find the largest of three numbers</h3>
        <CodeBlock language="python" code={`a = 10
b = 30
c = 20

if (a >= b) and (a >= c):
   largest = a
elif (b >= a) and (b >= c):
   largest = b
else:
   largest = c

print("The largest number is", largest)`} />
      </>
    )
  },
  // 2. Flow Control
  {
    id: 'py-flow-if-else',
    title: 'if / elif / else',
    parent: '2. Flow Control',
    content: (
      <>
        <p className="mb-4">Conditional statements allow you to execute certain blocks of code based on whether a condition is true or false.</p>
        <CodeBlock language="python" code={`score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`} />
      </>
    )
  },
  {
    id: 'py-flow-loops',
    title: 'Loops (for, while)',
    parent: '2. Flow Control',
    content: (
      <>
        <h3 className="text-xl font-bold mb-2">`for` loop</h3>
        <p className="mb-4">Used for iterating over a sequence (like a list, tuple, dictionary, set, or string).</p>
        <h3 className="text-xl font-bold mt-6 mb-2">`while` loop</h3>
        <p className="mb-4">Used to execute a block of statements as long as a condition is true.</p>
        <CodeBlock language="python" code={`# For loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with range()
for i in range(5): # from 0 to 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`} />
      </>
    )
  },
  {
    id: 'py-flow-break-continue',
    title: 'break / continue / pass',
    parent: '2. Flow Control',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>`break`</strong>: Terminates the loop entirely.</li>
          <li><strong>`continue`</strong>: Skips the rest of the current iteration and moves to the next one.</li>
          <li><strong>`pass`</strong>: Acts as a placeholder. It does nothing.</li>
        </ul>
        <CodeBlock language="python" code={`for i in range(10):
    if i == 5:
        break  # Loop stops when i is 5
    print(i) # Prints 0, 1, 2, 3, 4

for i in range(5):
    if i == 2:
        continue # Skips printing 2
    print(i) # Prints 0, 1, 3, 4

def my_function():
    pass # Placeholder for future code`} />
      </>
    )
  },
  {
    id: 'py-flow-patterns',
    title: 'Pattern Printing',
    parent: '2. Flow Control',
    content: (
      <>
        <p className="mb-4">Nested loops are commonly used to print various patterns, a classic exercise for beginners.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Right-Angled Triangle Pattern</h3>
        <CodeBlock language="python" code={`rows = 5
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end="")
    print() # Newline

# Output:
# *
# **
# ***
# ****
# *****`} />
      </>
    )
  },
  // 3. Data Structures
  {
    id: 'py-ds-lists',
    title: 'Lists',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Lists are ordered, mutable (changeable), and allow duplicate elements. They are created with square brackets `[]`.</p>
        <CodeBlock language="python" code={`my_list = ["apple", "banana", "cherry"]
print(my_list[1])  # Access by index: 'banana'

my_list.append("orange") # Add an item
my_list[0] = "blackcurrant" # Change an item
my_list.pop(1) # Remove by index

print(my_list)`} />
      </>
    )
  },
  {
    id: 'py-ds-tuples',
    title: 'Tuples',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Tuples are ordered, immutable (unchangeable), and allow duplicate elements. They are created with round brackets `()`.</p>
        <CodeBlock language="python" code={`my_tuple = ("apple", "banana", "cherry")
print(my_tuple[0]) # 'apple'

# You cannot change items in a tuple:
# my_tuple[0] = "blackcurrant" # This will cause an error`} />
      </>
    )
  },
  {
    id: 'py-ds-sets',
    title: 'Sets',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Sets are unordered, mutable, and do not allow duplicate elements. They are created with curly brackets `{}`.</p>
        <CodeBlock language="python" code={`my_set = {"apple", "banana", "cherry"}
my_set.add("orange")
my_set.add("apple") # No change, duplicates are ignored

print(my_set) # Order is not guaranteed

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2)) # {1, 2, 3, 4, 5}
print(set1.intersection(set2)) # {3}`} />
      </>
    )
  },
  {
    id: 'py-ds-dictionaries',
    title: 'Dictionaries',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Dictionaries are unordered (ordered in Python 3.7+), mutable collections of key-value pairs. They are created with curly brackets `{}`.</p>
        <CodeBlock language="python" code={`my_dict = {
    "brand": "CodeAlpha",
    "course": "Python",
    "year": 2024
}

print(my_dict["brand"]) # Access value by key

my_dict["year"] = 2025 # Update value
my_dict["rating"] = 5 # Add a new key-value pair

for key, value in my_dict.items():
    print(key, ":", value)`} />
      </>
    )
  },
  {
    id: 'py-ds-comprehensions',
    title: 'Comprehensions',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Comprehensions provide a concise way to create lists, sets, and dictionaries.</p>
        <CodeBlock language="python" code={`# List comprehension: create a list of squares from 0 to 9
squares = [x**2 for x in range(10)]
print(squares)

# Set comprehension: create a set of unique first letters
names = ["CodeAlpha", "Internship", "Course"]
first_letters = {name[0] for name in names}
print(first_letters)

# Dictionary comprehension: create a dictionary of numbers and their squares
num_squares = {x: x**2 for x in range(5)}
print(num_squares)`} />
      </>
    )
  },
  {
    id: 'py-ds-slicing',
    title: 'Slicing',
    parent: '3. Data Structures',
    content: (
      <>
        <p className="mb-4">Slicing allows you to get a sub-section of a sequence (like a list, tuple, or string). The syntax is `[start:stop:step]`.</p>
        <CodeBlock language="python" code={`my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Get elements from index 2 to 4
print(my_list[2:5]) # [2, 3, 4]

# Get elements from the start up to index 3
print(my_list[:4]) # [0, 1, 2, 3]

# Get elements from index 5 to the end
print(my_list[5:]) # [5, 6, 7, 8, 9]

# Get every second element
print(my_list[::2]) # [0, 2, 4, 6, 8]

# Reverse the list
print(my_list[::-1])`} />
      </>
    )
  },
  // 4. Strings
  {
    id: 'py-strings-methods',
    title: 'String Methods',
    parent: '4. Strings',
    content: (
      <>
        <p className="mb-4">Strings are immutable sequences of characters and have many useful built-in methods.</p>
        <CodeBlock language="python" code={`text = "  Welcome to CodeAlpha!  "

print(text.strip())         # "Welcome to CodeAlpha!"
print(text.lower())         # "  welcome to codealpha!  "
print(text.upper())         # "  WELCOME TO CODEALPHA!  "
print(text.replace("Alpha", "Beta"))
print(text.split())           # ['Welcome', 'to', 'CodeAlpha!']

csv = "apple,banana,cherry"
print(csv.split(','))       # ['apple', 'banana', 'cherry']`} />
      </>
    )
  },
  {
    id: 'py-strings-formatting',
    title: 'Formatting (f-strings)',
    parent: '4. Strings',
    content: (
      <>
        <p className="mb-4">F-strings (formatted string literals) are the modern, recommended way to format strings in Python (version 3.6+). They are readable and fast.</p>
        {/* FIX: Corrected the Python f-string example. Python f-strings use curly braces {}
            which do not need to be escaped inside a JavaScript template literal.
            The previous code had incorrect escapes and syntax. */}
        <CodeBlock
          language="python"
          code={`name = "Alex"
age = 25

# Using f-string
greeting = f"Hello, my name is {name} and I am {age} years old."
print(greeting)

# You can also put expressions inside the braces
print(f"Next year I will be {age + 1}.")

# Formatting numbers
price = 49.955
print(f"The price is {price:.2f}")  # Formats to 2 decimal places`}
        />

      </>
    )
  },
  // 5. Functions
  {
    id: 'py-functions-def',
    title: 'Function Definition',
    parent: '5. Functions',
    content: (
      <>
        <p className="mb-4">A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.</p>
        <CodeBlock language="python" code={`# Define a function
def greet(name):
    """This function greets the person passed in as a parameter."""
    print(f"Hello, {name}!")

# Call the function
greet("CodeAlpha")`} />
      </>
    )
  },
  {
    id: 'py-functions-lambda',
    title: 'Lambda Functions',
    parent: '5. Functions',
    content: (
      <>
        <p className="mb-4">A lambda function is a small anonymous function. It can take any number of arguments, but can only have one expression.</p>
        <CodeBlock language="python" code={`# A lambda function that adds 10
add_ten = lambda a : a + 10
print(add_ten(5)) # 15

# Often used with functions like map() or filter()
numbers = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens) # [2, 4]`} />
      </>
    )
  },
  {
    id: 'py-functions-args-kwargs',
    title: '*args & **kwargs',
    parent: '5. Functions',
    content: (
      <>
        <p className="mb-4">`*args` and `**kwargs` are special syntax to pass a variable number of arguments to a function.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>`*args`</strong> (Non-Keyword Arguments): Gathers extra positional arguments into a tuple.</li>
          <li><strong>`**kwargs`</strong> (Keyword Arguments): Gathers extra keyword arguments into a dictionary.</li>
        </ul>
        <CodeBlock language="python" code={`def my_function(*args, **kwargs):
    print("Positional args (tuple):", args)
    print("Keyword args (dict):", kwargs)

my_function(1, 2, "hello", name="CodeAlpha", year=2024)

# Output:
# Positional args (tuple): (1, 2, 'hello')
# Keyword args (dict): {'name': 'CodeAlpha', 'year': 2024}`} />
      </>
    )
  },
];