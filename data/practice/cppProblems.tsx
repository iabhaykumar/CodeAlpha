import React from 'react';
import { ProblemCategory } from './types';

export const CPP_PROBLEMS: ProblemCategory[] = [
  {
    category: "SECTION 1 — Basics of C++",
    problems: [
      {
        id: "cpp-s1-q1",
        title: "Print “Hello World”",
        description: "The classic first program in C++.",
        statement: "Write a C++ program to print the exact string 'Hello, World!' to the standard output.",
        inputFormat: "No input.",
        outputFormat: "A single line: `Hello, World!`",
        testCases: [{ input: "", output: "Hello, World!" }],
        solution: `#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}`,
        explanation: "In C++, the `<iostream>` header provides tools for input/output. `std::cout` is the standard output stream, and `<<` is the stream insertion operator used to send data to it."
      },
      {
        id: "cpp-s1-q2",
        title: "Print Name, Age",
        description: "Print variables of different types.",
        statement: "Declare a string for a name and an integer for age. Initialize and print them in a sentence.",
        inputFormat: "No input.",
        outputFormat: "Name: Alex, Age: 25",
        testCases: [{ input: "", output: "Name: Alex, Age: 25" }],
        solution: `#include <iostream>
#include <string>

int main() {
    std::string name = "Alex";
    int age = 25;
    std::cout << "Name: " << name << ", Age: " << age;
    return 0;
}`,
        explanation: "We use `std::string` from the `<string>` header for text. `std::cout` can chain multiple `<<` operators to print a combination of strings and variables."
      },
      {
        id: "cpp-s1-q3",
        title: "Add Two Numbers",
        description: "Read two integers and print their sum.",
        statement: "Write a C++ program that reads two integers from standard input and prints their sum.",
        inputFormat: "Two integers separated by a space.",
        outputFormat: "A single integer representing the sum.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << a + b;
    return 0;
}`,
        explanation: "`std::cin` is the standard input stream, and `>>` is the stream extraction operator used to read data from it. It automatically handles whitespace separation."
      },
      {
        id: "cpp-s1-q4",
        title: "Multiply Two Numbers",
        description: "Read two floats and print their product.",
        statement: "Write a program that takes two floating-point numbers and prints their product.",
        inputFormat: "Two floats separated by a space.",
        outputFormat: "The product as a float.",
        testCases: [{ input: "4.5 2.0", output: "9" }],
        solution: `#include <iostream>

int main() {
    float a, b;
    std::cin >> a >> b;
    std::cout << a * b;
    return 0;
}`,
        explanation: "`std::cin` can read floating-point numbers directly into `float` or `double` variables. The `*` operator performs multiplication."
      },
      {
        id: "cpp-s1-q5",
        title: "Find Remainder",
        description: "Use the modulus operator.",
        statement: "Given two integers, `a` and `b`, find the remainder when `a` is divided by `b`.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "The integer remainder.",
        testCases: [{ input: "10 3", output: "1" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << a % b;
    return 0;
}`,
        explanation: "The modulus operator `%` computes the remainder of an integer division, same as in C."
      },
      {
        id: "cpp-s1-q6",
        title: "Area of Rectangle",
        description: "Calculate the area of a rectangle.",
        statement: "Take two numbers, length and width, and calculate the area (length * width).",
        inputFormat: "Two numbers, length and width.",
        outputFormat: "The area.",
        testCases: [{ input: "7.5 8", output: "60" }],
        solution: `#include <iostream>

int main() {
    double length, width;
    std::cin >> length >> width;
    std::cout << length * width;
    return 0;
}`,
        explanation: "Using `double` allows for more precise calculations with decimal inputs for length and width."
      },
      {
        id: "cpp-s1-q7",
        title: "Area of Circle",
        description: "Calculate the area of a circle.",
        statement: "Calculate the area of a circle given its radius. Formula: π * r².",
        inputFormat: "A number for the radius.",
        outputFormat: "The area.",
        testCases: [{ input: "5", output: "78.5397" }],
        solution: `#include <iostream>
#include <cmath> // For M_PI

int main() {
    double radius;
    std::cin >> radius;
    // M_PI is a common non-standard macro for pi.
    // For a standard solution, you might define it yourself.
    const double PI = 3.14159;
    std::cout << PI * radius * radius;
    return 0;
}`,
        explanation: "We include `<cmath>` for math constants and functions if available. The formula for the area of a circle is applied directly."
      },
      {
        id: "cpp-s1-q8",
        title: "Swap Two Numbers (temp)",
        description: "Swap two numbers using a third variable.",
        statement: "Swap the values of two integer variables using a third temporary variable.",
        inputFormat: "Two integers.",
        outputFormat: "The two integers after swapping.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `#include <iostream>

int main() {
    int a, b, temp;
    std::cin >> a >> b;
    temp = a;
    a = b;
    b = temp;
    std::cout << a << " " << b;
    return 0;
}`,
        explanation: "The classic swap algorithm: a temporary variable holds the first value while the variables are overwritten."
      },
      {
        id: "cpp-s1-q9",
        title: "Swap Two Numbers (Modern C++)",
        description: "Swap two numbers using `std::swap`.",
        statement: "Swap two integers using the standard library function `std::swap`.",
        inputFormat: "Two integers.",
        outputFormat: "The swapped integers.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `#include <iostream>
#include <utility> // For std::swap

int main() {
    int a, b;
    std::cin >> a >> b;
    std::swap(a, b);
    std::cout << a << " " << b;
    return 0;
}`,
        explanation: "The C++ standard library provides `std::swap` in the `<utility>` header. This is the recommended, most readable, and often most efficient way to swap two values."
      },
      {
        id: "cpp-s1-q10",
        title: "ASCII value of a character",
        description: "Find the ASCII value of a character.",
        statement: "Read a character and print its ASCII value.",
        inputFormat: "A single character.",
        outputFormat: "The integer ASCII value.",
        testCases: [{ input: "A", output: "65" }],
        solution: `#include <iostream>

int main() {
    char c;
    std::cin >> c;
    std::cout << static_cast<int>(c);
    return 0;
}`,
        explanation: "A `char` is internally an integer type. To explicitly tell `std::cout` to print it as a number instead of a character, we cast it to an `int` using `static_cast<int>(c)`."
      }
    ]
  },
  {
    category: "SECTION 2 — Input / Output Formatting",
    problems: [
      {
        id: "cpp-s2-q1",
        title: "Print using tabs, newlines",
        description: "Use escape sequences for formatting.",
        statement: "Print three words 'One', 'Two', 'Three' separated by tabs on the first line, and on separate lines on the second output part.",
        inputFormat: "No input.",
        outputFormat: "One\tTwo\tThree\nOne\nTwo\nThree\n",
        testCases: [{ input: "", output: "One\tTwo\tThree\nOne\nTwo\nThree\n" }],
        solution: `#include <iostream>

int main() {
    std::cout << "One\\tTwo\\tThree\\n";
    std::cout << "One\\nTwo\\nThree\\n";
    return 0;
}`,
        explanation: "`\\t` is the escape sequence for a horizontal tab. `\\n` is the escape sequence for a newline character. `std::endl` also inserts a newline and flushes the stream."
      },
      {
        id: "cpp-s2-q2",
        title: "Read char, int, float",
        description: "Use `cin` for multiple data types.",
        statement: "Read a character, an integer, and a float from a single line of input.",
        inputFormat: "A character, integer, and float separated by spaces.",
        outputFormat: "The values printed on separate lines.",
        testCases: [{ input: "A 100 99.5", output: "Char: A\nInt: 100\nFloat: 99.5" }],
        solution: `#include <iostream>

int main() {
    char c;
    int i;
    float f;
    std::cin >> c >> i >> f;
    std::cout << "Char: " << c << std::endl;
    std::cout << "Int: " << i << std::endl;
    std::cout << "Float: " << f << std::endl;
    return 0;
}`,
        explanation: "`std::cin` can chain `>>` operators to read multiple different data types in one statement. It automatically handles whitespace between the inputs."
      },
      {
        id: "cpp-s2-q3",
        title: "Format decimals to 2 places",
        description: "Control floating point precision.",
        statement: "Read a floating-point number and print it formatted to exactly two decimal places.",
        inputFormat: "A single float.",
        outputFormat: "The float formatted to two decimal places.",
        testCases: [{ input: "3.14159", output: "3.14" }],
        solution: `#include <iostream>
#include <iomanip> // For std::fixed and std::setprecision

int main() {
    double f;
    std::cin >> f;
    std::cout << std::fixed << std::setprecision(2) << f;
    return 0;
}`,
        explanation: "The `<iomanip>` header provides I/O manipulators. `std::fixed` forces decimal notation (not scientific), and `std::setprecision(2)` sets the number of digits to show after the decimal point."
      },
      {
        id: "cpp-s2-q4",
        title: "Print hexadecimal, octal",
        description: "Print an integer in different bases.",
        statement: "Read an integer and print its decimal, octal, and hexadecimal representation.",
        inputFormat: "A single integer.",
        outputFormat: "Decimal: [d], Octal: [o], Hex: [x]",
        testCases: [{ input: "63", output: "Decimal: 63, Octal: 77, Hex: 3f" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    std::cout << "Decimal: " << std::dec << n
              << ", Octal: " << std::oct << n
              << ", Hex: " << std::hex << n;
    return 0;
}`,
        explanation: "`std::cout` manipulators `std::dec`, `std::oct`, and `std::hex` change the base for printing integers. They are 'sticky', meaning the base remains changed for subsequent output unless reset."
      },
      {
        id: "cpp-s2-q5",
        title: "Print int with padding",
        description: "Use width and padding flags with cout.",
        statement: "Read an integer and print it with a minimum width of 5 characters, padded with leading zeros.",
        inputFormat: "A single integer.",
        outputFormat: "The padded integer.",
        testCases: [{ input: "42", output: "00042" }],
        solution: `#include <iostream>
#include <iomanip>

int main() {
    int n;
    std::cin >> n;
    std::cout << std::setw(5) << std::setfill('0') << n;
    return 0;
}`,
        explanation: "`std::setw(5)` sets the width for the *next* output operation. `std::setfill('0')` sets the padding character, which remains in effect until changed."
      },
      {
        id: "cpp-s2-q6",
        title: "Take string input with spaces",
        description: "Read a full line of text.",
        statement: "Read a line of text that includes spaces and print it back.",
        inputFormat: "A single line of text.",
        outputFormat: "The same line of text.",
        testCases: [{ input: "Hello CodeAlpha", output: "Hello CodeAlpha" }],
        solution: `#include <iostream>
#include <string>

int main() {
    std::string str;
    std::getline(std::cin, str);
    std::cout << str;
    return 0;
}`,
        explanation: "The `>>` operator stops reading at whitespace. To read an entire line, use the `std::getline(std::cin, my_string)` function."
      },
      {
        id: "cpp-s2-q7",
        title: "Print values in table format",
        description: "Align text in columns.",
        statement: "Print a small table of items and prices with aligned columns.",
        inputFormat: "No input.",
        outputFormat: "A formatted table.",
        testCases: [{ input: "", output: "Item      | Price\n----------|--------\nApple     | 100.00\nBanana    | 20.50" }],
        solution: `#include <iostream>
#include <iomanip>

int main() {
    std::cout << std::left << std::setw(10) << "Item" << "| Price" << std::endl;
    std::cout << "----------|--------" << std::endl;
    std::cout << std::left << std::setw(10) << "Apple" << "| " << std::fixed << std::setprecision(2) << 100.0 << std::endl;
    std::cout << std::left << std::setw(10) << "Banana" << "| " << std::fixed << std::setprecision(2) << 20.5 << std::endl;
    return 0;
}`,
        explanation: "`std::left` sets the alignment to left-justify within the width specified by `std::setw`. We combine this with precision formatting for the price column to create a well-aligned table."
      },
      {
        id: "cpp-s2-q8",
        title: "Convert integer to hex",
        description: "Convert a decimal integer to a hex string.",
        statement: "Read an integer and print its hexadecimal representation as a string.",
        inputFormat: "An integer.",
        outputFormat: "Hexadecimal string.",
        testCases: [{ input: "255", output: "ff" }],
        solution: `#include <iostream>
#include <sstream>

int main() {
    int n;
    std::cin >> n;
    std::stringstream ss;
    ss << std::hex << n;
    std::cout << ss.str();
    return 0;
}`,
        explanation: "While `std::cout << std::hex << n;` works for printing, to get the value as a `std::string`, we can use a `std::stringstream`. We write the hex value to the stream and then extract it as a string with `.str()`."
      },
      {
        id: "cpp-s2-q9",
        title: "Convert hex to integer",
        description: "Convert a hex string to a decimal integer.",
        statement: "Read a hexadecimal number (as a string) and print its decimal equivalent.",
        inputFormat: "A hexadecimal string.",
        outputFormat: "The decimal integer.",
        testCases: [{ input: "ff", output: "255" }],
        solution: `#include <iostream>
#include <string>

int main() {
    std::string hex_str;
    std::cin >> hex_str;
    int dec_val = std::stoi(hex_str, nullptr, 16);
    std::cout << dec_val;
    return 0;
}`,
        explanation: "The `std::stoi` function (string to integer) is powerful. The third argument specifies the base to use for the conversion. Base 16 tells it to parse the input as a hexadecimal number."
      },
      {
        id: "cpp-s2-q10",
        title: "Boolean output",
        description: "Print boolean values as 'true' or 'false'.",
        statement: "Demonstrate how to print boolean values as text ('true'/'false') instead of numbers (1/0).",
        inputFormat: "No input.",
        outputFormat: "true\nfalse",
        testCases: [{ input: "", output: "true\nfalse" }],
        solution: `#include <iostream>

int main() {
    bool t = true;
    bool f = false;
    
    std::cout << std::boolalpha << t << std::endl;
    std::cout << f << std::endl; // boolalpha is sticky
    
    // To switch back:
    // std::cout << std::noboolalpha;
    
    return 0;
}`,
        explanation: "By default, `std::cout` prints booleans as 1 or 0. The `std::boolalpha` manipulator changes the stream's state to print them as the words 'true' and 'false'."
      }
    ]
  }
];