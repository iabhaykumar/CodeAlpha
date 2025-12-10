import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS: ProblemCategory[] = [
  {
    category: "SECTION 1 — Basics of C",
    problems: [
      {
        id: "c-s1-q1",
        title: "Print “Hello World”",
        description: "The classic first program.",
        statement: "Write a C program to print the exact string 'Hello World' to the standard output.",
        inputFormat: "No input.",
        outputFormat: "A single line: `Hello World`",
        testCases: [{ input: "", output: "Hello World" }],
        solution: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}`,
        explanation: "Every C program starts execution from the `main` function. `printf()` is a library function from `stdio.h` used to send formatted output to the screen."
      },
      {
        id: "c-s1-q2",
        title: "Print Name, Age",
        description: "Print variables of different types.",
        statement: "Declare a string for a name and an integer for age. Initialize and print them in a sentence.",
        inputFormat: "No input.",
        outputFormat: "Name: Alex, Age: 25",
        testCases: [{ input: "", output: "Name: Alex, Age: 25" }],
        solution: `#include <stdio.h>

int main() {
    char name[] = "Alex";
    int age = 25;
    printf("Name: %s, Age: %d", name, age);
    return 0;
}`,
        explanation: "`%s` is the format specifier for a string, and `%d` is for a decimal integer. The variables are passed as additional arguments to `printf`."
      },
      {
        id: "c-s1-q3",
        title: "Add Two Numbers",
        description: "Read two integers and print their sum.",
        statement: "Write a C program that reads two integers from standard input and prints their sum.",
        inputFormat: "Two integers separated by a space.",
        outputFormat: "A single integer representing the sum.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}`,
        explanation: "`scanf` is used to read formatted input from the screen. The `&` symbol is the 'address-of' operator; it tells `scanf` where in memory to store the input values."
      },
      {
        id: "c-s1-q4",
        title: "Multiply Two Numbers",
        description: "Read two floats and print their product.",
        statement: "Write a program that takes two floating-point numbers and prints their product.",
        inputFormat: "Two floats separated by a space.",
        outputFormat: "The product as a float.",
        testCases: [{ input: "4.5 2.0", output: "9.000000" }],
        solution: `#include <stdio.h>

int main() {
    float a, b;
    scanf("%f %f", &a, &b);
    printf("%f", a * b);
    return 0;
}`,
        explanation: "The `%f` format specifier is used for reading and writing floating-point numbers. The `*` operator performs multiplication."
      },
      {
        id: "c-s1-q5",
        title: "Divide Two Numbers",
        description: "Perform standard float division.",
        statement: "Given two integers, `a` and `b`, compute `a / b` as a float.",
        inputFormat: "Two integers `a` and `b` separated by a space.",
        outputFormat: "The result of the division as a float.",
        testCases: [{ input: "10 4", output: "2.500000" }],
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%f", (float)a / b);
    return 0;
}`,
        explanation: "When dividing two integers in C, the result is also an integer (the decimal part is truncated). To get a floating-point result, we must 'cast' one of the integers to a `float` before the division happens."
      },
      {
        id: "c-s1-q6",
        title: "Find Remainder",
        description: "Use the modulus operator.",
        statement: "Given two integers, `a` and `b`, find the remainder when `a` is divided by `b`.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "The integer remainder.",
        testCases: [{ input: "10 3", output: "1" }],
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a % b);
    return 0;
}`,
        explanation: "The modulus operator `%` computes the remainder of an integer division."
      },
      {
        id: "c-s1-q7",
        title: "Area of Rectangle",
        description: "Calculate the area of a rectangle.",
        statement: "Take two integers, length and width, and calculate the area (length * width).",
        inputFormat: "Two integers, length and width.",
        outputFormat: "The integer area.",
        testCases: [{ input: "7 8", output: "56" }],
        solution: `#include <stdio.h>

int main() {
    int length, width;
    scanf("%d %d", &length, &width);
    printf("%d", length * width);
    return 0;
}`,
        explanation: "The program reads two integers and prints their product, which represents the rectangle's area."
      },
      {
        id: "c-s1-q8",
        title: "Area of Circle",
        description: "Calculate the area of a circle.",
        statement: "Calculate the area of a circle given its radius. Formula: π * r².",
        inputFormat: "An integer for the radius.",
        outputFormat: "The area as a float.",
        testCases: [{ input: "5", output: "78.500000" }],
        solution: `#include <stdio.h>

int main() {
    int radius;
    float pi = 3.14;
    scanf("%d", &radius);
    printf("%f", pi * radius * radius);
    return 0;
}`,
        explanation: "We use a `float` variable for π to ensure the calculation results in a float. The result is printed using `%f`."
      },
      {
        id: "c-s1-q9",
        title: "Swap Two Numbers (temp)",
        description: "Swap two numbers using a third variable.",
        statement: "Swap the values of two integer variables using a third temporary variable.",
        inputFormat: "Two integers.",
        outputFormat: "The two integers after swapping.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `#include <stdio.h>

int main() {
    int a, b, temp;
    scanf("%d %d", &a, &b);
    temp = a;
    a = b;
    b = temp;
    printf("%d %d", a, b);
    return 0;
}`,
        explanation: "A temporary variable `temp` is used to hold the value of `a` while `a` is overwritten with `b`'s value. Then `b` is assigned the value from `temp`."
      },
      {
        id: "c-s1-q10",
        title: "Swap Two Numbers (without temp)",
        description: "Swap two numbers without a temp variable.",
        statement: "Swap two integers without using a third variable, using arithmetic operators.",
        inputFormat: "Two integers.",
        outputFormat: "The swapped integers.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    a = a + b;
    b = a - b; // b becomes original a
    a = a - b; // a becomes original b
    printf("%d %d", a, b);
    return 0;
}`,
        explanation: "This is a classic trick using arithmetic. After `a = a + b`, `a` holds the sum. Then `b = a - b` is equivalent to `b = (original_a + original_b) - original_b`, which leaves `b` with `original_a`. The final step does the same to isolate `original_b` in `a`."
      },
      {
        id: "c-s1-q11",
        title: "ASCII value of a character",
        description: "Find the ASCII value of a character.",
        statement: "Read a character and print its ASCII value.",
        inputFormat: "A single character.",
        outputFormat: "The integer ASCII value.",
        testCases: [{ input: "A", output: "65" }],
        solution: `#include <stdio.h>

int main() {
    char c;
    scanf("%c", &c);
    printf("%d", c);
    return 0;
}`,
        explanation: "A `char` in C is internally represented as an integer (its ASCII value). Using the `%d` format specifier with a `char` variable tells `printf` to display this integer value."
      },
      {
        id: "c-s1-q12",
        title: "Convert Celsius to Fahrenheit",
        description: "Convert temperature from Celsius to Fahrenheit.",
        statement: "Formula: F = (C * 9/5) + 32.",
        inputFormat: "A float value (Celsius).",
        outputFormat: "The temperature in Fahrenheit.",
        testCases: [{ input: "37", output: "98.600000" }],
        solution: `#include <stdio.h>

int main() {
    float celsius;
    scanf("%f", &celsius);
    float fahrenheit = (celsius * 9 / 5) + 32;
    printf("%f", fahrenheit);
    return 0;
}`,
        explanation: "The input is read as a float. The conversion formula is then applied directly. C handles the mixed-type arithmetic correctly, promoting the result to a float."
      },
      {
        id: "c-s1-q13",
        title: "Simple Interest",
        description: "Calculate simple interest from P, R, and T.",
        statement: "Calculate simple interest given Principal, Rate, and Time. Formula: (P * R * T) / 100.",
        inputFormat: "Integer P, float R, integer T.",
        outputFormat: "The simple interest as a float.",
        testCases: [{ input: "1000 5.5 2", output: "110.000000" }],
        solution: `#include <stdio.h>

int main() {
    int p, t;
    float r;
    scanf("%d %f %d", &p, &r, &t);
    float si = (p * r * t) / 100;
    printf("%f", si);
    return 0;
}`,
        explanation: "We use appropriate data types for principal, rate, and time. The standard formula is applied to calculate the simple interest."
      },
      {
        id: "c-s1-q14",
        title: "Compound Interest",
        description: "Calculate compound interest.",
        statement: "Calculate compound interest. Formula: A = P(1 + R/100)^T.",
        inputFormat: "Integer P, float R, integer T.",
        outputFormat: "The final amount.",
        testCases: [{ input: "1000 10 2", output: "1210.000000" }],
        solution: `#include <stdio.h>
#include <math.h>

int main() {
    double p, r, t, amount;
    scanf("%lf %lf %lf", &p, &r, &t);
    amount = p * pow((1 + r / 100), t);
    printf("%lf", amount);
    return 0;
}`,
        explanation: "This program calculates the final amount after compound interest. It uses the `pow(base, exponent)` function from the `math.h` library for the exponentiation part of the formula. We use `double` for better precision."
      },
      {
        id: "c-s1-q15",
        title: "Maximum of two numbers",
        description: "Find the larger of two numbers.",
        statement: "Read two integers and print the one with the larger value.",
        inputFormat: "Two integers.",
        outputFormat: "The larger integer.",
        testCases: [{ input: "10 5", output: "10" }],
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > b) {
        printf("%d", a);
    } else {
        printf("%d", b);
    }
    return 0;
}`,
        explanation: "A simple `if-else` statement is used to compare the two numbers and print the one that is greater."
      }
    ]
  },
  {
    category: "SECTION 2 — Input / Output Formatting",
    problems: [
      {
        id: "c-s2-q1",
        title: "Print using tabs, newlines",
        description: "Use escape sequences for formatting.",
        statement: "Print three words 'One', 'Two', 'Three' separated by tabs on the first line, and on separate lines on the second output part.",
        inputFormat: "No input.",
        outputFormat: "One\tTwo\tThree\nOne\nTwo\nThree",
        testCases: [{ input: "", output: "One\tTwo\tThree\nOne\nTwo\nThree" }],
        solution: `#include <stdio.h>

int main() {
    printf("One\\tTwo\\tThree\\n");
    printf("One\\nTwo\\nThree");
    return 0;
}`,
        explanation: "`\\t` is the escape sequence for a horizontal tab. `\\n` is the escape sequence for a newline character."
      },
      {
        id: "c-s2-q2",
        title: "Read char, int, float in one input",
        description: "Use scanf for multiple data types.",
        statement: "Read a character, an integer, and a float from a single line of input.",
        inputFormat: "A character, integer, and float separated by spaces.",
        outputFormat: "The values printed on separate lines.",
        testCases: [{ input: "A 100 99.5", output: "Char: A\nInt: 100\nFloat: 99.500000" }],
        solution: `#include <stdio.h>

int main() {
    char c;
    int i;
    float f;
    scanf("%c %d %f", &c, &i, &f);
    printf("Char: %c\\n", c);
    printf("Int: %d\\n", i);
    printf("Float: %f", f);
    return 0;
}`,
        explanation: "`scanf` can read multiple different data types in one call by providing the corresponding format specifiers in order. Note the space before `%c` in `scanf` can sometimes help consume leftover newline characters from previous inputs, though not strictly necessary here."
      },
      {
        id: "c-s2-q3",
        title: "Format decimals to 2 places",
        description: "Control floating point precision.",
        statement: "Read a floating-point number and print it formatted to exactly two decimal places.",
        inputFormat: "A single float.",
        outputFormat: "The float formatted to two decimal places.",
        testCases: [{ input: "3.14159", output: "3.14" }],
        solution: `#include <stdio.h>

int main() {
    float f;
    scanf("%f", &f);
    printf("%.2f", f);
    return 0;
}`,
        explanation: "In `printf`, you can specify the precision for floating-point numbers. The format `%.2f` means 'print a float with exactly two digits after the decimal point'."
      },
      {
        id: "c-s2-q4",
        title: "Print hexadecimal, octal",
        description: "Print an integer in different bases.",
        statement: "Read an integer and print its decimal, octal, and hexadecimal representation.",
        inputFormat: "A single integer.",
        outputFormat: "Decimal: [d], Octal: [o], Hex: [x]",
        testCases: [{ input: "63", output: "Decimal: 63, Octal: 77, Hex: 3f" }],
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    printf("Decimal: %d, Octal: %o, Hex: %x", n, n, n);
    return 0;
}`,
        explanation: "`printf` provides format specifiers for different number bases: `%o` for octal (base 8) and `%x` for hexadecimal (base 16)."
      },
      {
        id: "c-s2-q5",
        title: "Print int using printf flags",
        description: "Use width and padding flags in printf.",
        statement: "Read an integer and print it with a minimum width of 5 characters, padded with leading zeros.",
        inputFormat: "A single integer.",
        outputFormat: "The padded integer.",
        testCases: [{ input: "42", output: "00042" }],
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    printf("%05d", n);
    return 0;
}`,
        explanation: "In `printf`, you can specify a width and padding. `%5d` would print the number with a width of 5, padded with spaces. `%05d` specifies that the padding character should be `0` instead of a space."
      },
      {
        id: "c-s2-q6",
        title: "Take string input with spaces",
        description: "Read a full line of text.",
        statement: "Read a line of text that includes spaces and print it back.",
        inputFormat: "A single line of text.",
        outputFormat: "The same line of text.",
        testCases: [{ input: "Hello CodeAlpha", output: "Hello CodeAlpha" }],
        solution: `#include <stdio.h>

int main() {
    char str[100];
    // The %[^\n] scans everything until a newline
    scanf("%[^\n]s", str);
    printf("%s", str);
    return 0;
}`,
        explanation: "`scanf(\"%s\", ...)` stops reading at the first whitespace. To read a whole line with spaces, you can use the format specifier `%[^\n]s`, which tells `scanf` to read everything until it encounters a newline character (`\\n`)."
      },
      {
        id: "c-s2-q7",
        title: "Read multiple integers in one line",
        description: "Read an unknown number of integers.",
        statement: "Read a line of space-separated integers and print their sum. The number of integers is not known beforehand.",
        inputFormat: "A single line of space-separated integers.",
        outputFormat: "The sum.",
        testCases: [{ input: "10 20 30 40", output: "100" }],
        solution: `#include <stdio.h>

int main() {
    int num, sum = 0;
    // scanf returns the number of items successfully read
    while(scanf("%d", &num) == 1) {
        sum += num;
    }
    printf("%d", sum);
    return 0;
}`,
        explanation: "The `scanf` function returns the number of items it successfully converted and assigned. We can use this in a `while` loop. The loop will continue as long as `scanf` successfully reads one integer (`== 1`). It will stop when it can't find any more integers to read (e.g., at the end of the line or end of file)."
      },
      {
        id: "c-s2-q8",
        title: "Print values in table format",
        description: "Align text in columns.",
        statement: "Print a small table of items and prices with aligned columns.",
        inputFormat: "No input.",
        outputFormat: "A formatted table.",
        testCases: [{ input: "", output: "Item      | Price\n----------|--------\nApple     | 100.00\nBanana    | 20.50" }],
        solution: `#include <stdio.h>

int main() {
    printf("%-10s| %s\\n", "Item", "Price");
    printf("----------|--------\\n");
    printf("%-10s| %.2f\\n", "Apple", 100.0);
    printf("%-10s| %.2f\\n", "Banana", 20.5);
    return 0;
}`,
        explanation: "You can specify a width in `printf` for strings too. `%-10s` means 'print a string with a minimum width of 10 characters, and left-justify it (`-`)'."
      },
      {
        id: "c-s2-q9",
        title: "Convert integer to hex",
        description: "Convert a decimal integer to a hex string.",
        statement: "Read an integer and print its hexadecimal representation as a string.",
        inputFormat: "An integer.",
        outputFormat: "Hexadecimal string.",
        testCases: [{ input: "255", output: "ff" }],
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    printf("%x", n);
    return 0;
}`,
        explanation: "The `%x` format specifier in `printf` directly converts and prints an integer in its lowercase hexadecimal form. Use `%X` for uppercase."
      },
      {
        id: "c-s2-q10",
        title: "Convert hex to integer",
        description: "Convert a hex string to a decimal integer.",
        statement: "Read a hexadecimal number as a string and print its decimal equivalent.",
        inputFormat: "A hexadecimal string.",
        outputFormat: "The decimal integer.",
        testCases: [{ input: "ff", output: "255" }],
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%x", &n);
    printf("%d", n);
    return 0;
}`,
        explanation: "The `%x` format specifier in `scanf` tells it to interpret the input string as a hexadecimal number and store its decimal value in the integer variable."
      }
    ]
  }
];
