import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PYTHON_PART2_TOPICS: Topic[] = [
  // 6. Modules & Packages
  {
    id: 'py-modules-import',
    title: 'import & Standard Library',
    parent: '6. Modules & Packages',
    content: (
      <>
        <p className="mb-4">A module is simply a file containing Python code. We use the `import` statement to make the code in one module available in another. Python's "batteries-included" philosophy means it comes with a vast Standard Library of modules for common tasks.</p>
        <CodeBlock language="python" code={`# Import the entire 'math' module
import math
print(math.sqrt(16)) # 4.0

# Import a specific function from the 'datetime' module
from datetime import datetime
print(datetime.now())

# Import a module with an alias
import random as rd
print(rd.randint(1, 10))`} />
      </>
    )
  },
  {
    id: 'py-modules-custom',
    title: 'Creating Modules',
    parent: '6. Modules & Packages',
    content: (
      <>
        <p className="mb-4">Any Python file can be a module. You can create your own modules to organize your code logically.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Example Structure</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`project/
|-- main.py
|-- helpers.py`}
        </pre>
        <h4 className="font-bold mb-2">`helpers.py`</h4>
        <CodeBlock language="python" code={`# This is our custom module
def greet(name):
    return f"Hello, {name} from the helpers module!"`} />
        <h4 className="font-bold mt-4 mb-2">`main.py`</h4>
        <CodeBlock language="python" code={`# Import our custom module
import helpers

message = helpers.greet("CodeAlpha")
print(message)`} />
      </>
    )
  },
  {
    id: 'py-modules-pip',
    title: 'pip & PyPI',
    parent: '6. Modules & Packages',
    content: (
      <>
        <p className="mb-4">`pip` is the standard package manager for Python. It allows you to install and manage third-party packages from the Python Package Index (PyPI), a huge repository of software for Python.</p>
        <CodeBlock language="bash" code={`# Install a package (e.g., 'requests' for HTTP requests)
pip install requests

# Install a specific version
pip install requests==2.25.1

# Uninstall a package
pip uninstall requests

# List installed packages
pip list

# Save installed packages to a file
pip freeze > requirements.txt

# Install packages from a file
pip install -r requirements.txt`} />
      </>
    )
  },
  {
    id: 'py-modules-venv',
    title: 'Virtual Environments (venv)',
    parent: '6. Modules & Packages',
    content: (
      <>
        <p className="mb-4">A virtual environment is a self-contained directory that contains a specific version of Python plus a number of additional packages. It's a best practice to create a virtual environment for every project to avoid dependency conflicts.</p>
        <CodeBlock language="bash" code={`# 1. Create a virtual environment named 'my-env'
python -m venv my-env

# 2. Activate the environment
# On Windows:
# my-env\\Scripts\\activate
# On macOS/Linux:
source my-env/bin/activate

# (Your terminal prompt will now show '(my-env)')

# 3. Work in your environment (e.g., pip install ...)

# 4. Deactivate when you're done
deactivate`} />
      </>
    )
  },
  // 7. File Handling
  {
    id: 'py-files-read-write',
    title: 'Read/Write Files',
    parent: '7. File Handling',
    content: (
      <>
        <p className="mb-4">Python makes it easy to work with files. The `with open(...)` syntax is the recommended way as it automatically handles closing the file.</p>
        <CodeBlock language="python" code={`# Writing to a file (overwrites existing content)
with open("codealpha.txt", "w") as f:
    f.write("Hello from CodeAlpha!\\n")
    f.write("This is line 2.\\n")

# Appending to a file (adds to the end)
with open("codealpha.txt", "a") as f:
    f.write("This is an appended line.\\n")

# Reading from a file
with open("codealpha.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("codealpha.txt", "r") as f:
    for line in f:
        print(line.strip()) # .strip() removes whitespace`} />
      </>
    )
  },
  {
    id: 'py-files-json',
    title: 'Working with JSON',
    parent: '7. File Handling',
    content: (
      <>
        <p className="mb-4">JSON (JavaScript Object Notation) is a lightweight data-interchange format. Python's `json` module makes it simple to serialize Python objects into JSON strings and deserialize JSON strings into Python objects.</p>
        <CodeBlock language="python" code={`import json

# A Python dictionary
data = {
    "name": "CodeAlpha",
    "students": 10000,
    "is_online": True
}

# Serialize Python dict to JSON string
json_string = json.dumps(data, indent=4)
print(json_string)

# Write JSON to a file
with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

# Read JSON from a file and deserialize into Python dict
with open("data.json", "r") as f:
    loaded_data = json.load(f)
    print("Loaded name:", loaded_data["name"])`} />
      </>
    )
  },
  {
    id: 'py-files-csv',
    title: 'Working with CSV',
    parent: '7. File Handling',
    content: (
      <>
        <p className="mb-4">CSV (Comma-Separated Values) files are simple text files used to store tabular data. Python's `csv` module helps read and write CSV files.</p>
        <CodeBlock language="python" code={`import csv

# Writing to a CSV file
header = ['name', 'course', 'score']
data = [
    ['Alex', 'Python', 95],
    ['Bob', 'Java', 88]
]

with open('grades.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(data)

# Reading from a CSV file
with open('grades.csv', 'r') as f:
    reader = csv.reader(f)
    header = next(reader) # Skip header row
    for row in reader:
        print(f"{row[0]} scored {row[2]} in {row[1]}")`} />
      </>
    )
  },
  // 8. Exception Handling
  {
    id: 'py-exceptions-try',
    title: 'try / except / finally',
    parent: '8. Exception Handling',
    content: (
      <>
        <p className="mb-4">Exception handling allows you to gracefully manage errors that occur during program execution. The `try` block lets you test a block of code for errors. The `except` block lets you handle the error. The `finally` block lets you execute code, regardless of the result of the try- and except blocks.</p>
        <CodeBlock language="python" code={`try:
    numerator = 10
    denominator = 0
    result = numerator / denominator
    print(result)
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except TypeError:
    print("Error: An operation has an inappropriate type.")
finally:
    print("This block always executes.")`} />
      </>
    )
  },
  {
    id: 'py-exceptions-raise',
    title: 'raise & Custom Exceptions',
    parent: '8. Exception Handling',
    content: (
      <>
        <p className="mb-4">The `raise` keyword is used to raise an exception manually. You can also define your own custom exceptions by creating a new class that inherits from the built-in `Exception` class.</p>
        <CodeBlock language="python" code={`# Define a custom exception
class ValueTooSmallError(Exception):
    """Raised when the input value is too small"""
    pass

def check_value(x):
    if x < 10:
        # Raise the custom exception
        raise ValueTooSmallError("Value should be 10 or greater")
    return "Value is valid."

try:
    print(check_value(5))
except ValueTooSmallError as e:
    print(f"Custom Error Caught: {e}")`} />
      </>
    )
  },
  // 9. Object-Oriented Programming (OOP)
  {
    id: 'py-oop-classes',
    title: 'Classes & Objects',
    parent: '9. Object-Oriented Programming',
    content: (
      <>
        <p className="mb-4">OOP is a programming paradigm based on the concept of "objects", which can contain data (attributes) and code (methods). A `class` is a blueprint for creating objects.</p>
        <CodeBlock language="python" code={`class Dog:
    # Class attribute
    species = "Canis familiaris"

    # The __init__ method is the constructor
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age

    # Instance method
    def bark(self):
        return "Woof!"

# Create objects (instances) of the Dog class
dog1 = Dog("Buddy", 3)
dog2 = Dog("Lucy", 5)

print(f"{dog1.name} is {dog1.age} years old.")
print(f"{dog2.name} says {dog2.bark()}")
print(f"They both belong to the species: {Dog.species}")`} />
      </>
    )
  },
  {
    id: 'py-oop-inheritance',
    title: 'Inheritance',
    parent: '9. Object-Oriented Programming',
    content: (
      <>
        <p className="mb-4">Inheritance allows us to define a class that inherits all the methods and properties from another class. The parent class is the class being inherited from, and the child class is the class that inherits.</p>
        <CodeBlock language="python" code={`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

# Child class inheriting from Animal
class Cat(Animal):
    def speak(self):
        return "Meow!"

# Another child class
class Dog(Animal):
    def speak(self):
        return "Woof!"

my_cat = Cat("Whiskers")
my_dog = Dog("Buddy")

print(my_cat.name, "says", my_cat.speak())
print(my_dog.name, "says", my_dog.speak())`} />
      </>
    )
  },
  {
    id: 'py-oop-encapsulation',
    title: 'Encapsulation & Abstraction',
    parent: '9. Object-Oriented Programming',
    content: (
      <>
        <p className="mb-4"><strong>Encapsulation</strong> is the bundling of data (attributes) and the methods that operate on that data into a single unit (a class). It's used to hide the internal state of an object from the outside. In Python, this is done by convention using a single underscore `_` (protected) or double underscore `__` (private) prefix.</p>
        <p className="mb-4"><strong>Abstraction</strong> means hiding complex implementation details and showing only the essential features of the object.</p>
        <CodeBlock language="python" code={`class Car:
    def __init__(self, max_speed):
        self._max_speed = max_speed
        self.__current_speed = 0 # Private attribute

    def drive(self):
        # This is the abstraction. The user doesn't need to know
        # how the engine, gears, etc., work.
        print("Driving...")
        self.__start_engine()
        self.__current_speed = 50

    def __start_engine(self): # Private method
        print("Engine started (internal detail).")
    
    def get_speed(self):
        return self.__current_speed

my_car = Car(200)
my_car.drive()
print("Current speed:", my_car.get_speed())
# print(my_car.__current_speed) # This would cause an AttributeError`} />
      </>
    )
  },
  {
    id: 'py-oop-polymorphism',
    title: 'Polymorphism',
    parent: '9. Object-Oriented Programming',
    content: (
      <>
        <p className="mb-4">Polymorphism means "many forms", and it refers to the ability of different objects to respond to the same method call in different ways. This is often achieved through method overriding in inherited classes.</p>
        <CodeBlock language="python" code={`class Bird:
    def fly(self):
        print("Most birds can fly.")

class Sparrow(Bird):
    def fly(self): # Overriding the parent method
        print("Sparrows fly high.")

class Ostrich(Bird):
    def fly(self): # Overriding the parent method
        print("Ostriches cannot fly.")

# Common interface
sparrow = Sparrow()
ostrich = Ostrich()

# The same method call 'fly()' behaves differently
sparrow.fly()
ostrich.fly()`} />
      </>
    )
  },
   // 10. Advanced Concepts
   {
    id: 'py-adv-generators',
    title: 'Generators',
    parent: '10. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Generators are a simple way to create iterators. A generator is a function that returns an iterator object which we can iterate over. It uses the `yield` keyword to produce a sequence of values one at a time, which is much more memory-efficient than creating a full list.</p>
        <CodeBlock language="python" code={`# A generator function for Fibonacci numbers
def fib_generator(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Using the generator
fib_gen = fib_generator(10)

print(next(fib_gen)) # 0
print(next(fib_gen)) # 1

# Or iterate over it
for num in fib_generator(20):
    print(num, end=" ")
# Output: 0 1 1 2 3 5 8 13`} />
      </>
    )
  },
  {
    id: 'py-adv-decorators',
    title: 'Decorators',
    parent: '10. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are usually called before the definition of a function you want to decorate.</p>
        <CodeBlock language="python" code={`# A simple decorator to time a function's execution
import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def long_running_function():
    time.sleep(2)
    print("Function finished.")

long_running_function()`} />
      </>
    )
  },
  {
    id: 'py-adv-collections',
    title: 'Collections Module',
    parent: '10. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">The `collections` module provides high-performance container datatypes that are alternatives to Python's general-purpose built-in containers like `dict`, `list`, `set`, and `tuple`.</p>
        <CodeBlock language="python" code={`from collections import Counter, defaultdict, deque

# Counter: counts hashable objects
my_list = ['a', 'b', 'c', 'a', 'b', 'a']
counts = Counter(my_list)
print(counts) # Counter({'a': 3, 'b': 2, 'c': 1})

# defaultdict: provides a default value for a nonexistent key
d = defaultdict(int) # Default value is 0 for int
d['a'] += 1
print(d['a']) # 1
print(d['b']) # 0 (doesn't raise a KeyError)

# deque: a double-ended queue, fast appends and pops from both ends
q = deque(['b', 'c', 'd'])
q.append('e')
q.appendleft('a')
print(q) # deque(['a', 'b', 'c', 'd', 'e'])
q.popleft() # 'a'
print(q)`} />
      </>
    )
  },
];