import React from 'react';
import { ProblemCategory } from './types';

export const BASIC_CPP_PROBLEMS_1: ProblemCategory[] = [
  {
    category: "Basics (1-20)",
    problems: [
      {
        id: "basic-cpp-1",
        title: "Hello, World!",
        description: "Screen pe Hello, World! print karo.",
        statement: "Write a C++ program to print the exact string 'Hello, World!' to the console.",
        inputFormat: "No input.",
        outputFormat: "A single line: `Hello, World!`",
        testCases: [{ input: "", output: "Hello, World!" }],
        solution: `#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}`,
        explanation: "The `<iostream>` header provides input/output streams. `std::cout` is the standard output stream used to print to the console. The `<<` operator is used to 'insert' data into the stream."
      },
      {
        id: "basic-cpp-2",
        title: "Add Two Numbers",
        description: "Do integers ka sum nikaalo.",
        statement: "Read two integers from the input and print their sum.",
        inputFormat: "Two integers separated by a space.",
        outputFormat: "The sum of the two integers.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << a + b;
    return 0;
}`,
        explanation: "`std::cin` is the standard input stream. The `>>` operator 'extracts' data from the stream and stores it in variables. C++ automatically handles the conversion from text to integer."
      },
      {
        id: "basic-cpp-3",
        title: "Multiply Two Numbers",
        description: "Do numbers ka product calculate karo.",
        statement: "Read two floating-point numbers and print their product.",
        inputFormat: "Two floating-point numbers separated by a space.",
        outputFormat: "The product of the two numbers.",
        testCases: [{ input: "3.5 2.0", output: "7" }],
        solution: `#include <iostream>

int main() {
    double a, b;
    std::cin >> a >> b;
    std::cout << a * b;
    return 0;
}`,
        explanation: "This program is similar to adding two numbers, but uses the `double` data type for floating-point precision and the `*` operator for multiplication."
      },
      {
        id: "basic-cpp-4",
        title: "Swap Two Numbers (temp)",
        description: "temporary variable se swap karo.",
        statement: "Swap the values of two integer variables using a third temporary variable.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "The values of `a` and `b` after swapping, separated by a space.",
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
        explanation: "This is the classic swap algorithm. A third variable `temp` holds the value of `a` so it's not lost when `a` is overwritten. Then, `b` is assigned the stored value from `temp`."
      },
      {
        id: "basic-cpp-5",
        title: "Swap Two Numbers (without temp)",
        description: "arithmetic/bitwise se swap karo.",
        statement: "Swap two integer variables without using a third variable. The C++ standard library provides an idiomatic way to do this.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "The values of `a` and `b` after swapping.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `#include <iostream>
#include <utility> // Required for std::swap

int main() {
    int a, b;
    std::cin >> a >> b;
    std::swap(a, b);
    std::cout << a << " " << b;
    return 0;
}`,
        explanation: "The C++ Standard Library provides `std::swap` in the `<utility>` header. This is the recommended, most readable, and often most efficient way to swap two values."
      },
      {
        id: "basic-cpp-6",
        title: "Area of Rectangle",
        description: "length × width se area nikaalo.",
        statement: "Read the length and width of a rectangle and calculate its area.",
        inputFormat: "Two numbers (length and width).",
        outputFormat: "The area of the rectangle.",
        testCases: [{ input: "5 4", output: "20" }],
        solution: `#include <iostream>

int main() {
    double length, width;
    std::cin >> length >> width;
    std::cout << length * width;
    return 0;
}`,
        explanation: "The area of a rectangle is calculated by multiplying its length and width. Using `double` allows for non-integer dimensions."
      },
      {
        id: "basic-cpp-7",
        title: "Area of Circle",
        description: "radius se πr² calculate karo.",
        statement: "Read the radius of a circle and calculate its area using the formula π * r².",
        inputFormat: "A single number for the radius.",
        outputFormat: "The area of the circle.",
        testCases: [{ input: "7", output: "153.938" }],
        solution: `#include <iostream>
#include <cmath> // Required for M_PI

int main() {
    double radius;
    std::cin >> radius;
    // M_PI is a common, though non-standard, constant for pi.
    // Alternatively, you can define your own const double PI = 3.14159;
    std::cout << M_PI * radius * radius;
    return 0;
}`,
        explanation: "The `<cmath>` header provides mathematical functions and constants. We read the radius, then apply the formula `π * r * r` to calculate the area."
      },
      {
        id: "basic-cpp-8",
        title: "Perimeter of Square",
        description: "side se perimeter nikaalo.",
        statement: "Read the side length of a square and calculate its perimeter.",
        inputFormat: "A single number for the side length.",
        outputFormat: "The perimeter of the square.",
        testCases: [{ input: "10", output: "40" }],
        solution: `#include <iostream>

int main() {
    double side;
    std::cin >> side;
    std::cout << 4 * side;
    return 0;
}`,
        explanation: "The perimeter of a square is four times its side length. The program reads the side and prints the result of `4 * side`."
      },
      {
        id: "basic-cpp-9",
        title: "Convert Celsius to Fahrenheit",
        description: "formula use karo.",
        statement: "Convert a temperature from Celsius to Fahrenheit using the formula F = (C * 9/5) + 32.",
        inputFormat: "A number representing the temperature in Celsius.",
        outputFormat: "The equivalent temperature in Fahrenheit.",
        testCases: [{ input: "37", output: "98.6" }],
        solution: `#include <iostream>

int main() {
    double celsius;
    std::cin >> celsius;
    double fahrenheit = (celsius * 9.0 / 5.0) + 32;
    std::cout << fahrenheit;
    return 0;
}`,
        explanation: "The program applies the standard conversion formula. Using `9.0 / 5.0` ensures that floating-point division is performed, which is necessary for a correct result."
      },
      {
        id: "basic-cpp-10",
        title: "Convert Fahrenheit to Celsius",
        description: "reverse conversion.",
        statement: "Convert a temperature from Fahrenheit to Celsius using the formula C = (F - 32) * 5/9.",
        inputFormat: "A number representing the temperature in Fahrenheit.",
        outputFormat: "The equivalent temperature in Celsius.",
        testCases: [{ input: "98.6", output: "37" }],
        solution: `#include <iostream>

int main() {
    double fahrenheit;
    std::cin >> fahrenheit;
    double celsius = (fahrenheit - 32) * 5.0 / 9.0;
    std::cout << celsius;
    return 0;
}`,
        explanation: "This program applies the reverse formula. Again, using `5.0 / 9.0` is important to ensure the calculation is done using floating-point arithmetic."
      },
      {
        id: "basic-cpp-11",
        title: "Simple Interest",
        description: "P, R, T se simple interest nikalo.",
        statement: "Calculate simple interest given Principal (P), Rate (R), and Time (T). Formula: SI = (P * R * T) / 100.",
        inputFormat: "Three numbers: P, R, T.",
        outputFormat: "The calculated simple interest.",
        testCases: [{ input: "1000 5.5 2", output: "110" }],
        solution: `#include <iostream>

int main() {
    double p, r, t;
    std::cin >> p >> r >> t;
    double si = (p * r * t) / 100;
    std::cout << si;
    return 0;
}`,
        explanation: "The program reads the principal, rate, and time, then applies the standard formula to calculate and print the simple interest."
      },
      {
        id: "basic-cpp-12",
        title: "Compound Interest",
        description: "compound interest ka formula implement karo.",
        statement: "Calculate the final amount after compound interest. Formula: A = P * (1 + R/100)^T.",
        inputFormat: "Three numbers: Principal (P), Rate (R), and Time (T).",
        outputFormat: "The final amount.",
        testCases: [{ input: "1000 10 2", output: "1210" }],
        solution: `#include <iostream>
#include <cmath>

int main() {
    double p, r, t;
    std::cin >> p >> r >> t;
    double amount = p * std::pow((1 + r / 100), t);
    std::cout << amount;
    return 0;
}`,
        explanation: "This program uses the `std::pow(base, exponent)` function from the `<cmath>` library to handle the exponentiation required in the compound interest formula."
      },
      {
        id: "basic-cpp-13",
        title: "Even or Odd",
        description: "number ka parity check karo.",
        statement: "Read an integer and determine if it is even or odd.",
        inputFormat: "A single integer.",
        outputFormat: "The string 'Even' or 'Odd'.",
        testCases: [{ input: "42", output: "Even" }, { input: "33", output: "Odd" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n % 2 == 0) {
        std::cout << "Even";
    } else {
        std::cout << "Odd";
    }
    return 0;
}`,
        explanation: "An even number is perfectly divisible by 2. The modulus operator (`%`) gives the remainder of a division. If `n % 2` is 0, the number is even; otherwise, it is odd."
      },
      {
        id: "basic-cpp-14",
        title: "Positive, Negative or Zero",
        description: "sign determine karo.",
        statement: "Read a number and determine if it is positive, negative, or zero.",
        inputFormat: "A single number.",
        outputFormat: "The string 'Positive', 'Negative', or 'Zero'.",
        testCases: [{ input: "-5", output: "Negative" }, { input: "0", output: "Zero" }],
        solution: `#include <iostream>

int main() {
    double n;
    std::cin >> n;
    if (n > 0) {
        std::cout << "Positive";
    } else if (n < 0) {
        std::cout << "Negative";
    } else {
        std::cout << "Zero";
    }
    return 0;
}`,
        explanation: "An `if-else if-else` chain is used to check the conditions in order. It first checks if the number is greater than 0, then if it's less than 0, and the final `else` case handles the only remaining possibility, which is 0."
      },
      {
        id: "basic-cpp-15",
        title: "Largest of Two Numbers",
        description: "two-number comparison.",
        statement: "Read two integers and print the larger one.",
        inputFormat: "Two integers.",
        outputFormat: "The larger of the two integers.",
        testCases: [{ input: "100 101", output: "101" }],
        solution: `#include <iostream>
#include <algorithm> // Required for std::max

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << std::max(a, b);
    return 0;
}`,
        explanation: "The C++ Standard Library provides `std::max` in the `<algorithm>` header. It's the most concise way to find the larger of two values."
      },
      {
        id: "basic-cpp-16",
        title: "Largest of Three Numbers",
        description: "three-number comparison.",
        statement: "Read three integers and print the largest one.",
        inputFormat: "Three integers.",
        outputFormat: "The largest of the three integers.",
        testCases: [{ input: "10 50 20", output: "50" }],
        solution: `#include <iostream>
#include <algorithm> // Required for std::max

int main() {
    int a, b, c;
    std::cin >> a >> b >> c;
    std::cout << std::max({a, b, c});
    return 0;
}`,
        explanation: "In C++11 and later, `std::max` can take an initializer list `{a, b, c, ...}` to find the largest among multiple items, which is very convenient."
      },
      {
        id: "basic-cpp-17",
        title: "Leap Year Check",
        description: "given year leap hai ya nahi.",
        statement: "Check if a given year is a leap year. A year is a leap year if it is divisible by 4, except for century years (like 1900) which must be divisible by 400.",
        inputFormat: "A single integer representing the year.",
        outputFormat: "The string 'Yes' or 'No'.",
        testCases: [{ input: "2000", output: "Yes" }, { input: "1900", output: "No" }],
        solution: `#include <iostream>

int main() {
    int year;
    std::cin >> year;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
        explanation: "The logic is implemented with a compound conditional statement. `(year % 4 == 0 && year % 100 != 0)` handles the common leap years. `(year % 400 == 0)` handles the special case for century years. The `||` (OR) operator combines these two rules."
      },
      {
        id: "basic-cpp-18",
        title: "Print Multiplication Table",
        description: "N ke table print karo.",
        statement: "Read an integer N and print its multiplication table from 1 to 10.",
        inputFormat: "A single integer N.",
        outputFormat: "10 lines, each showing `N x i = N*i`.",
        testCases: [{ input: "5", output: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    for (int i = 1; i <= 10; ++i) {
        std::cout << n << " x " << i << " = " << (n * i) << std::endl;
    }
    return 0;
}`,
        explanation: "A `for` loop iterates from 1 to 10. In each iteration, it prints a formatted string showing the number, the current multiplier, and the product. `std::endl` is used to move to the next line."
      },
      {
        id: "basic-cpp-19",
        title: "Sum of N Natural Numbers",
        description: "1..N ka sum nikaalo.",
        statement: "Read an integer N and calculate the sum of all natural numbers from 1 to N.",
        inputFormat: "A single integer N.",
        outputFormat: "The total sum.",
        testCases: [{ input: "100", output: "5050" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    long long sum = 0; // Use long long for potentially large sums
    for (int i = 1; i <= n; ++i) {
        sum += i;
    }
    std::cout << sum;
    return 0;
}`,
        explanation: "We initialize a `sum` variable to 0. A `for` loop iterates from 1 up to N, adding the current number `i` to the `sum` in each step. A `long long` is used for the sum to prevent overflow if N is large."
      },
      {
        id: "basic-cpp-20",
        title: "Factorial of a Number",
        description: "n! compute karo (iterative).",
        statement: "Calculate the factorial of a non-negative integer N (N!).",
        inputFormat: "A single integer N.",
        outputFormat: "The factorial of N.",
        testCases: [{ input: "5", output: "120" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    long long factorial = 1;
    for (int i = 1; i <= n; ++i) {
        factorial *= i;
    }
    std::cout << factorial;
    return 0;
}`,
        explanation: "Factorial is the product of all positive integers up to N. We initialize `factorial` to 1. The loop iterates from 1 to N, multiplying the `factorial` variable by the current number `i`. A `long long` is used to accommodate large factorial values."
      }
    ]
  }
];