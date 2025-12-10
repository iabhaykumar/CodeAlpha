import React from 'react';
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_12: ProblemCategory[] = [
  {
    category: "12.0 Operator Overloading",
    problems: [
      {
        id: "oop-cpp-12-1",
        title: "Overload + for Complex Numbers",
        description: "Define addition for a custom class.",
        statement: "Create a `Complex` number class with `real` and `imag` parts. Overload the `+` operator to perform complex number addition `(a+bi) + (c+di) = (a+c) + (b+d)i`.",
        inputFormat: "No input.",
        outputFormat: "The result of adding two complex numbers.",
        testCases: [{ input: "", output: "Result: 8 + 11i" }],
        solution: `#include <iostream>

class Complex {
public:
    float real, imag;
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overload the + operator as a member function
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }

    void display() {
        std::cout << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    Complex c1(3, 4), c2(5, 7);
    Complex c3 = c1 + c2; // This now works!
    std::cout << "Result: ";
    c3.display();
    return 0;
}`,
        explanation: "Operator overloading allows you to define custom behavior for operators with your classes. Here, `operator+` is a member function that takes one argument (`other`). When you write `c1 + c2`, `c1` is the object calling the method, and `c2` is passed as the `other` argument. It returns a new `Complex` object representing the sum."
      },
      {
        id: "oop-cpp-12-2",
        title: "Overload - for Complex Numbers",
        description: "Define subtraction for a custom class.",
        statement: "For the `Complex` class, overload the `-` operator to perform complex number subtraction.",
        inputFormat: "No input.",
        outputFormat: "The result of subtracting two complex numbers.",
        testCases: [{ input: "", output: "Result: -2 + -3i" }],
        solution: `#include <iostream>
// Assuming Complex class from previous problem

class Complex {
public:
    float real, imag;
    Complex(float r=0, float i=0): real(r), imag(i) {}

    // Overload the - operator
    Complex operator-(const Complex& other) {
        return Complex(real - other.real, imag - other.imag);
    }
    
    void display() { /* ... */ }
};

int main() {
    Complex c1(3, 4), c2(5, 7);
    Complex c3 = c1 - c2;
    std::cout << "Result: ";
    c3.display();
    return 0;
}`,
        explanation: "Similar to overloading `+`, we define `operator-`. The logic inside subtracts the corresponding real and imaginary parts of the two complex numbers and returns a new `Complex` object with the result."
      },
      {
        id: "oop-cpp-12-3",
        title: "Overload * for Complex Numbers",
        description: "Define multiplication for complex numbers.",
        statement: "For the `Complex` class, overload the `*` operator. The formula is: `(a+bi) * (c+di) = (ac - bd) + (ad + bc)i`.",
        inputFormat: "No input.",
        outputFormat: "The result of multiplication.",
        testCases: [{ input: "", output: "Result: -13 + 41i" }],
        solution: `#include <iostream>
// Assuming Complex class

class Complex {
public:
    float real, imag;
    Complex(float r=0, float i=0): real(r), imag(i) {}

    // Overload the * operator
    Complex operator*(const Complex& other) {
        float r = real * other.real - imag * other.imag;
        float i = real * other.imag + imag * other.real;
        return Complex(r, i);
    }
    void display() { /* ... */ }
};

int main() {
    Complex c1(3, 4), c2(5, 7);
    Complex c3 = c1 * c2;
    std::cout << "Result: ";
    c3.display();
    return 0;
}`,
        explanation: "The `operator*` method implements the mathematical formula for multiplying two complex numbers. It calculates the new real and imaginary parts and returns a new `Complex` object."
      },
      {
        id: "oop-cpp-12-4",
        title: "Overload == for Equality",
        description: "Define how to check if two objects are equal.",
        statement: "Create a `Point` class with `x` and `y` coordinates. Overload the `==` operator to return `true` if two `Point` objects have the same `x` and `y` values, and `false` otherwise.",
        inputFormat: "No input.",
        outputFormat: "Results of the equality checks.",
        testCases: [{ input: "", output: "p1 == p2: false\np1 == p3: true" }],
        solution: `#include <iostream>

class Point {
public:
    int x, y;
    Point(int x = 0, int y = 0) : x(x), y(y) {}

    bool operator==(const Point& other) const {
        return (x == other.x && y == other.y);
    }
};

int main() {
    Point p1(10, 20), p2(5, 5), p3(10, 20);
    std::cout << std::boolalpha; // Print 'true'/'false'
    std::cout << "p1 == p2: " << (p1 == p2) << std::endl;
    std::cout << "p1 == p3: " << (p1 == p3) << std::endl;
    return 0;
}`,
        explanation: "By default, `==` for objects might compare memory addresses. Overloading `operator==` allows us to define 'value equality'. Our implementation checks if the corresponding member variables of the two objects are equal."
      },
      {
        id: "oop-cpp-12-5",
        title: "Overload < for Comparison",
        description: "Define a 'less than' comparison for a custom class.",
        statement: "Create a `Distance` class that stores distance in meters. Overload the `<` operator to compare two `Distance` objects based on their value.",
        inputFormat: "No input.",
        outputFormat: "Result of the comparison.",
        testCases: [{ input: "", output: "d1 < d2: true" }],
        solution: `#include <iostream>

class Distance {
public:
    int meters;
    Distance(int m = 0) : meters(m) {}

    bool operator<(const Distance& other) const {
        return meters < other.meters;
    }
};

int main() {
    Distance d1(100), d2(200);
    std::cout << std::boolalpha << "d1 < d2: " << (d1 < d2) << std::endl;
    return 0;
}`,
        explanation: "Overloading relational operators like `<` allows custom objects to be used in sorting algorithms and other contexts that require ordering. The `operator<` simply compares the internal `meters` value of the two objects."
      },
      {
        id: "oop-cpp-12-6",
        title: "Overload = (Assignment Operator)",
        description: "Implement a deep copy assignment operator.",
        statement: "Create a class `MyString` that holds a dynamically allocated C-style string. Implement the copy assignment operator (`operator=`) to perform a deep copy, preventing shallow copy issues.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of deep copy assignment.",
        testCases: [{ input: "", output: "s1: Hello\ns2: Hello\nAfter change -> s1: World, s2: Hello" }],
        solution: `#include <iostream>
#include <cstring>

class MyString {
public:
    char* str;
    MyString(const char* s) {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
    }
    ~MyString() { delete[] str; }

    // Copy Assignment Operator
    MyString& operator=(const MyString& other) {
        // 1. Check for self-assignment
        if (this == &other) {
            return *this;
        }
        
        // 2. Free existing memory
        delete[] str;
        
        // 3. Allocate new memory and copy data
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
        
        // 4. Return *this
        return *this;
    }
};

int main() {
    MyString s1("Hello");
    MyString s2("Test");
    s2 = s1; // Copy assignment operator called
    
    strcpy(s1.str, "World"); // Change s1
    
    std::cout << "s1: " << s1.str << std::endl;
    std::cout << "s2: " << s2.str << std::endl; // s2 is unaffected
    return 0;
}`,
        explanation: "When a class manages dynamic memory, the default assignment operator performs a shallow copy, leading to two objects pointing to the same memory. A custom `operator=` is crucial. It must: 1. Prevent self-assignment (`s1 = s1;`). 2. Deallocate its own existing resource. 3. Allocate new memory. 4. Copy the data from the other object. 5. Return a reference to itself (`*this`) to allow chaining (`a = b = c;`)."
      },
      {
        id: "oop-cpp-12-7",
        title: "Overload ++/-- (prefix/postfix)",
        description: "Implement custom increment/decrement behavior.",
        statement: "Create a `Counter` class. Overload both the prefix (`++c`) and postfix (`c++`) versions of the increment operator.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of prefix and postfix differences.",
        testCases: [{ input: "", output: "Prefix result: 11\nPostfix result: 11" }],
        solution: `#include <iostream>

class Counter {
public:
    int count;
    Counter(int c = 0) : count(c) {}

    // Prefix increment (++c)
    Counter& operator++() {
        count++;
        return *this;
    }

    // Postfix increment (c++)
    // The 'int' is a dummy parameter to distinguish it from prefix
    Counter operator++(int) {
        Counter temp = *this; // Create a copy of the old state
        count++;
        return temp; // Return the old state
    }
};

int main() {
    Counter c1(10);
    Counter res1 = ++c1; // c1 becomes 11, res1 is 11
    std::cout << "Prefix result: " << res1.count << std::endl;
    
    Counter c2(10);
    Counter res2 = c2++; // c2 becomes 11, res2 is the old value 10
    // But the next line prints c2 which is 11
    std::cout << "Postfix result: " << c2.count << std::endl;
    return 0;
}`,
        explanation: "Prefix `++c` should increment the value and return the *new* value (by reference). Postfix `c++` should save the current value, increment the object's value, and then return the *saved old* value (by value). The compiler distinguishes between them by the presence of a dummy `int` parameter in the postfix version's signature."
      }
    ]
  }
];
