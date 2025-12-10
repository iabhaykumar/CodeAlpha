import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART8: ProblemCategory[] = [
  {
    category: "SECTION 15 — OOP (Classes & Objects)",
    problems: [
      {
        id: "python-s15-q1",
        title: "Student Class",
        description: "Create a class to model a student.",
        statement: "Create a `Student` class with `name` and `roll_no`. Include a constructor and a `display` method.",
        inputFormat: "No input.",
        outputFormat: "Details of a sample student.",
        testCases: [{ input: "", output: "Roll No: 1, Name: John" }],
        solution: `class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no

    def display(self):
        print(f"Roll No: {self.roll_no}, Name: {self.name}")

s1 = Student("John", 1)
s1.display()`,
        explanation: "A class is a blueprint. The `__init__` method is the constructor, which initializes the object's attributes (`self.name`, `self.roll_no`). `self` refers to the instance of the class."
      },
      {
        id: "python-s15-q2",
        title: "Car Class",
        description: "Create a class to model a car.",
        statement: "Create a `Car` class with `make` and `model`. Add a method `start_engine` that prints a message.",
        inputFormat: "No input.",
        outputFormat: "Engine start message.",
        testCases: [{ input: "", output: "Toyota Camry engine started." }],
        solution: `class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print(f"{self.make} {self.model} engine started.")

my_car = Car("Toyota", "Camry")
my_car.start_engine()`,
        explanation: "This class models a car. The `start_engine` method is a behavior of the car object and can access the object's own data like `self.make`."
      },
      {
        id: "python-s15-q3",
        title: "BankAccount Class",
        description: "Create a class for a simple bank account.",
        statement: "Create a `BankAccount` class with `deposit` and `withdraw` methods. The balance should be a private attribute.",
        inputFormat: "No input.",
        outputFormat: "The final balance.",
        testCases: [{ input: "", output: "Balance: 1300" }],
        solution: `class BankAccount:
    def __init__(self, initial_balance=0):
        self.__balance = initial_balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Invalid withdrawal")

    def get_balance(self):
        return self.__balance

acc = BankAccount(1000)
acc.deposit(500)
acc.withdraw(200)
print(f"Balance: {acc.get_balance()}")`,
        explanation: "A double underscore `__` before an attribute name makes it private (name mangling). This prevents direct access from outside the class, enforcing encapsulation. We provide public methods like `get_balance` for controlled access."
      },
      {
        id: "python-s15-q4",
        title: "Inheritance example",
        description: "Demonstrate inheritance with `super()`.",
        statement: "Create a `Person` class. Create a `Student` class that inherits from `Person` and adds a `grade` attribute. Use `super()`.",
        inputFormat: "No input.",
        outputFormat: "Name: Bob, Grade: 10",
        testCases: [{ input: "", output: "Name: Bob, Grade: 10" }],
        solution: `class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)  # Call parent's constructor
        self.grade = grade

s = Student("Bob", 10)
print(f"Name: {s.name}, Grade: {s.grade}")`,
        explanation: "The `Student` class inherits from `Person` by putting `Person` in the parentheses. The `super().__init__(name)` call is essential to properly initialize the `name` attribute from the parent class."
      },
      {
        id: "python-s15-q5",
        title: "Method overriding",
        description: "Demonstrate method overriding.",
        statement: "Create an `Animal` class with a `speak` method. Create a `Cat` class that overrides `speak`.",
        inputFormat: "No input.",
        outputFormat: "Meow",
        testCases: [{ input: "", output: "Meow" }],
        solution: `class Animal:
    def speak(self):
        return "Animal sound"

class Cat(Animal):
    def speak(self):  # Overriding the parent method
        return "Meow"

my_cat = Cat()
print(my_cat.speak())`,
        explanation: "The `Cat` class provides its own specific implementation of the `speak` method. When `speak()` is called on a `Cat` object, its own version is executed, not the parent's."
      },
      {
        id: "python-s15-q6",
        title: "Constructor overloading",
        description: "Simulate constructor overloading.",
        statement: "Python doesn't have traditional constructor overloading. Simulate it using default arguments to create a `Rectangle` that can be initialized with two sides or as a square with one side.",
        inputFormat: "No input.",
        outputFormat: "Area 1: 20\nArea 2: 25",
        testCases: [{ input: "", output: "Area 1: 20\nArea 2: 25" }],
        solution: `class Rectangle:
    def __init__(self, length, width=None):
        self.length = length
        self.width = width if width is not None else length
    
    def area(self):
        return self.length * self.width

rect1 = Rectangle(4, 5)
square = Rectangle(5)

print(f"Area 1: {rect1.area()}")
print(f"Area 2: {square.area()}")`,
        explanation: "We give `width` a default value of `None`. In the constructor, we check if a width was provided. If not, we know it's a square, so we set the width equal to the length."
      },
      {
        id: "python-s15-q7",
        title: "Static variable counter",
        description: "Use a static (class) member to count instances.",
        statement: "Create a class with a class-level variable. Increment it in the constructor. Print the total count.",
        inputFormat: "No input.",
        outputFormat: "Total objects created: 3",
        testCases: [{ input: "", output: "Total objects created: 3" }],
        solution: `class Thing:
    count = 0  # Class attribute (static)

    def __init__(self):
        Thing.count += 1

t1 = Thing()
t2 = Thing()
t3 = Thing()
print(f"Total objects created: {Thing.count}")`,
        explanation: "A variable defined directly inside the class scope (not inside a method) is a class attribute. It's shared among all instances of the class. We access it using the class name `Thing.count`."
      },
      {
        id: "python-s15-q8",
        title: "Encapsulation with getter/setter",
        description: "Use private members and public methods.",
        statement: "Create an `Employee` class with a `private` salary. Provide public `get_salary` and `set_salary` methods.",
        inputFormat: "No input.",
        outputFormat: "Salary: 55000",
        testCases: [{ input: "", output: "Salary: 55000" }],
        solution: `class Employee:
    def __init__(self):
        self.__salary = 0 # Private

    def get_salary(self):
        return self.__salary

    def set_salary(self, amount):
        if amount > 0:
            self.__salary = amount

e = Employee()
e.set_salary(55000)
print(f"Salary: {e.get_salary()}")`,
        explanation: "This hides the `__salary` attribute from direct access. The `set_salary` method provides a way to control how the salary is changed, allowing for validation."
      },
      {
        id: "python-s15-q9",
        title: "Abstract class (Shape)",
        description: "Use an abstract class and method.",
        statement: "Create an `abstract` class `Shape` with an `abstract` method `area()`. Create a `Rectangle` subclass that implements it.",
        inputFormat: "No input.",
        outputFormat: "Area: 50",
        testCases: [{ input: "", output: "Area: 50" }],
        solution: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h
    
    def area(self): # Must implement this method
        return self.w * self.h

r = Rectangle(10, 5)
print(f"Area: {r.area()}")`,
        explanation: "We use the `abc` module to create an abstract base class. The `@abstractmethod` decorator marks `area()` as a method that must be implemented by any concrete subclass of `Shape`."
      },
      {
        id: "python-s15-q10",
        title: "Polymorphism example",
        description: "Demonstrate polymorphism.",
        statement: "Demonstrate polymorphism by having different objects respond to the same method call.",
        inputFormat: "No input.",
        outputFormat: "Meow\nWoof",
        testCases: [{ input: "", output: "Meow\nWoof" }],
        solution: `class Cat:
    def speak(self):
        return "Meow"
class Dog:
    def speak(self):
        return "Woof"

def make_animal_speak(animal):
    print(animal.speak())

cat = Cat()
dog = Dog()

make_animal_speak(cat)
make_animal_speak(dog)`,
        explanation: "Polymorphism means 'many forms'. Here, the `make_animal_speak` function can work with any object that has a `speak` method. It doesn't care if the object is a `Cat` or a `Dog`."
      },
      {
        id: "python-s15-q11",
        title: "@property decorator",
        description: "Use the `@property` decorator for getter-like access.",
        statement: "Create a `Circle` class. The radius should be private. Use a `@property` to calculate and return the area as if it were an attribute.",
        inputFormat: "No input.",
        outputFormat: "Area: 78.53981633974483",
        testCases: [{ input: "", output: "Area: 78.53981633974483" }],
        solution: `import math

class Circle:
    def __init__(self, radius):
        self.__radius = radius
        
    @property
    def area(self):
        # This method is accessed like an attribute
        return math.pi * (self.__radius ** 2)

c = Circle(5)
# Note: we access 'area' without parentheses
print(f"Area: {c.area}")`,
        explanation: "The `@property` decorator turns a method into a read-only attribute. This allows you to run code (like a calculation) when an attribute is accessed, providing a cleaner syntax than a `get_area()` method."
      },
      {
        id: "python-s15-q12",
        title: "Library management system class",
        description: "A simple library management system.",
        statement: "Create a `Book` class and a `Library` class. The library should be able to add books and display them.",
        inputFormat: "No input.",
        outputFormat: "Library Books:\n- The Great Gatsby by F. Scott Fitzgerald\n- 1984 by George Orwell",
        testCases: [{ input: "", output: "Library Books:\n- The Great Gatsby by F. Scott Fitzgerald\n- 1984 by George Orwell" }],
        solution: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

class Library:
    def __init__(self):
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def display_books(self):
        print("Library Books:")
        for book in self.books:
            print(f"- {book.title} by {book.author}")

lib = Library()
b1 = Book("The Great Gatsby", "F. Scott Fitzgerald")
b2 = Book("1984", "George Orwell")
lib.add_book(b1)
lib.add_book(b2)
lib.display_books()`,
        explanation: "This demonstrates composition, where one class (`Library`) contains objects of another class (`Book`). It separates the concerns of what a book is from what a library does."
      },
      {
        id: "python-s15-q13",
        title: "Employee payroll class",
        description: "A simple payroll system.",
        statement: "Create an `Employee` class that can calculate salary based on hours worked.",
        inputFormat: "No input.",
        outputFormat: "Alice's salary: 8000.0",
        testCases: [{ input: "", output: "Alice's salary: 8000.0" }],
        solution: `class Employee:
    def __init__(self, name, hourly_rate):
        self.name = name
        self.hourly_rate = hourly_rate
    
    def calculate_salary(self, hours_worked):
        return self.hourly_rate * hours_worked

emp1 = Employee("Alice", 200.0)
salary = emp1.calculate_salary(40)
print(f"{emp1.name}'s salary: {salary}")`,
        explanation: "The class holds the employee's data, and the `calculate_salary` method encapsulates the business logic for calculating pay."
      },
      {
        id: "python-s15-q14",
        title: "Inventory management system",
        description: "A simple inventory system.",
        statement: "Create `Product` and `Inventory` classes. The inventory should track products and their quantities.",
        inputFormat: "No input.",
        outputFormat: "Current Inventory:\n- apple: 50\n- banana: 30",
        testCases: [{ input: "", output: "Current Inventory:\n- apple: 50\n- banana: 30" }],
        solution: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Inventory:
    def __init__(self):
        self.products = {} # {product_name: quantity}

    def add_product(self, product, quantity):
        if product.name not in self.products:
            self.products[product.name] = 0
        self.products[product.name] += quantity

    def display_inventory(self):
        print("Current Inventory:")
        for name, quantity in self.products.items():
            print(f"- {name}: {quantity}")

inv = Inventory()
p1 = Product("apple", 0.5)
p2 = Product("banana", 0.3)
inv.add_product(p1, 50)
inv.add_product(p2, 30)
inv.display_inventory()`,
        explanation: "The `Inventory` class uses a dictionary to store product names as keys and their quantities as values, which is an efficient way to manage stock levels."
      },
      {
        id: "python-s15-q15",
        title: "Class with operator overloading",
        description: "Overload the '+' operator for a custom class.",
        statement: "Create a `Vector` class representing a 2D vector. Overload the `+` operator to perform vector addition.",
        inputFormat: "No input.",
        outputFormat: "Vector(x=4, y=6)",
        testCases: [{ input: "", output: "Vector(x=4, y=6)" }],
        solution: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    # Overload the + operator
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    # Overload the string representation
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2 # This calls the __add__ method
print(v3)`,
        explanation: "Python allows you to define the behavior of operators for your custom classes by implementing special methods called 'dunder' (double underscore) methods. `__add__` defines the behavior for `+`, and `__repr__` defines the official string representation of the object."
      }
    ]
  },
  {
    category: "SECTION 16 — FILE HANDLING",
    problems: [
      {
        id: "python-s16-q1",
        title: "Write to file",
        description: "Write a string to a text file.",
        statement: "Write a program to create a file named `output.txt` and write 'Hello from CodeAlpha' into it.",
        inputFormat: "No input.",
        outputFormat: "A file named `output.txt` with the content. (No console output).",
        testCases: [{ input: "", output: "" }],
        solution: `with open("output.txt", "w") as f:
    f.write("Hello from CodeAlpha")`,
        explanation: "The `with open(...)` syntax is the recommended way to work with files. It automatically closes the file for you when the block is exited, even if errors occur. 'w' mode is for writing (overwrites the file)."
      },
      {
        id: "python-s16-q2",
        title: "Read from file",
        description: "Read the content of a file.",
        statement: "Write a program to read from `output.txt` and print its entire content.",
        inputFormat: "No input (assumes `output.txt` exists).",
        outputFormat: "The content of the file.",
        testCases: [{ input: "", output: "Hello from CodeAlpha" }],
        solution: `try:
    with open("output.txt", "r") as f:
        content = f.read()
        print(content)
except FileNotFoundError:
    print("File not found.")`,
        explanation: "We open the file in 'r' mode (read). The `.read()` method reads the entire content of the file into a single string. A `try-except` block handles the case where the file doesn't exist."
      },
      {
        id: "python-s16-q3",
        title: "Append to file",
        description: "Append new content to an existing file.",
        statement: "Open `output.txt` in append mode and add a new line to it.",
        inputFormat: "No input.",
        outputFormat: "No console output.",
        testCases: [{ input: "", output: "" }],
        solution: `with open("output.txt", "a") as f:
    f.write("\\nThis is a new line.")`,
        explanation: "Opening a file in 'a' mode (append) places the cursor at the end of the file. Any `write` operation will add content without erasing what's already there."
      },
      {
        id: "python-s16-q4",
        title: "Count lines in file",
        description: "Count the total number of lines in a file.",
        statement: "Write a program that reads a file and counts the number of lines in it.",
        inputFormat: "No input.",
        outputFormat: "The line count.",
        testCases: [{ input: "", output: "2" }],
        solution: `try:
    with open("output.txt", "r") as f:
        lines = f.readlines()
        print(len(lines))
except FileNotFoundError:
    print(0)`,
        explanation: "The `.readlines()` method reads all lines from a file and returns them as a list of strings. The length of this list is the number of lines in the file."
      },
      {
        id: "python-s16-q5",
        title: "Count words in file",
        description: "Count the total number of words in a file.",
        statement: "Write a program that reads a file and counts the total number of words.",
        inputFormat: "No input.",
        outputFormat: "The word count.",
        testCases: [{ input: "", output: "8" }],
        solution: `try:
    with open("output.txt", "r") as f:
        content = f.read()
        words = content.split()
        print(len(words))
except FileNotFoundError:
    print(0)`,
        explanation: "We read the entire file content, then use the `.split()` method to break it into a list of words. The length of this list is the word count."
      },
      {
        id: "python-s16-q6",
        title: "Read CSV file",
        description: "Read data from a CSV file.",
        statement: "Read a CSV file and print each row. A CSV file will be provided.",
        inputFormat: "A CSV file `data.csv` with content:\nname,age\nAlice,30\nBob,25",
        outputFormat: "['Alice', '30']\n['Bob', '25']",
        testCases: [{ input: "", output: "['Alice', '30']\n['Bob', '25']" }],
        solution: `import csv

try:
    with open('data.csv', 'r') as f:
        reader = csv.reader(f)
        header = next(reader) # Skip header row
        for row in reader:
            print(row)
except FileNotFoundError:
    print("data.csv not found")`,
        explanation: "The `csv` module simplifies working with CSV files. `csv.reader` creates an object that iterates over lines in the given file, automatically splitting them by commas."
      },
      {
        id: "python-s16-q7",
        title: "Write CSV file",
        description: "Write data to a CSV file.",
        statement: "Write a list of lists to a CSV file named `output.csv`.",
        inputFormat: "No input.",
        outputFormat: "A CSV file is created.",
        testCases: [{ input: "", output: "" }],
        solution: `import csv

header = ['name', 'course', 'score']
data = [
    ['Alex', 'Python', 95],
    ['Bob', 'Java', 88]
]

with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(data)`,
        explanation: "`csv.writer` creates a writer object. `.writerow()` writes a single row, and `.writerows()` writes multiple rows from a list of lists. `newline=''` is important to prevent blank rows between data rows on some systems."
      },
      {
        id: "python-s16-q8",
        title: "Read JSON file",
        description: "Read and parse a JSON file.",
        statement: "Read data from a JSON file and access its contents.",
        inputFormat: "A file `data.json` with content: `{\"name\": \"CodeAlpha\", \"students\": 10000}`",
        outputFormat: "CodeAlpha",
        testCases: [{ input: "", output: "CodeAlpha" }],
        solution: `import json

try:
    with open('data.json', 'r') as f:
        data = json.load(f)
        print(data['name'])
except FileNotFoundError:
    print("data.json not found")`,
        explanation: "The `json` module is used for working with JSON data. `json.load()` (with no 's') reads from a file object and parses the JSON content into a Python dictionary."
      },
      {
        id: "python-s16-q9",
        title: "Write JSON file",
        description: "Write a Python dictionary to a JSON file.",
        statement: "Write a Python dictionary to a JSON file named `output.json` with nice formatting.",
        inputFormat: "No input.",
        outputFormat: "A formatted JSON file is created.",
        testCases: [{ input: "", output: "" }],
        solution: `import json

data = {
    "name": "CodeAlpha",
    "courses": ["Python", "Java", "Web Dev"],
    "is_online": True
}

with open('output.json', 'w') as f:
    json.dump(data, f, indent=4)`,
        explanation: "`json.dump()` (with no 's') writes a Python object to a file as a JSON formatted string. The `indent=4` argument makes the output human-readable with pretty-printing."
      },
      {
        id: "python-s16-q10",
        title: "Frequency of words in file",
        description: "Count the frequency of each word in a text file.",
        statement: "Read a text file and print the frequency of each word.",
        inputFormat: "A text file with content.",
        outputFormat: "Word frequencies.",
        testCases: [{ input: "", output: "{'hello': 2, 'world': 1}" }],
        solution: `from collections import Counter
import re

try:
    with open('input.txt', 'r') as f:
        content = f.read().lower()
        # Remove punctuation and split into words
        words = re.findall(r'\\b\\w+\\b', content)
        word_counts = Counter(words)
        print(dict(word_counts))
except FileNotFoundError:
    print("File not found.")`,
        explanation: "We read the file, convert it to lowercase, and use a regular expression `\\b\\w+\\b` to find all words (handling punctuation). Then, `collections.Counter` efficiently counts the frequency of each word."
      }
    ]
  }
];
