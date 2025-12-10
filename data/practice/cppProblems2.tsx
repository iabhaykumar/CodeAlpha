import React from 'react';
import { ProblemCategory } from './types';

export const CPP_PROBLEMS_PART2: ProblemCategory[] = [
  {
    category: "SECTION 3 — Operators",
    problems: [
      {
        id: "cpp-s3-q1",
        title: "All arithmetic operations",
        description: "Perform all basic arithmetic operations.",
        statement: "Given two integers, print their sum, difference, product, quotient, and remainder.",
        inputFormat: "Two integers `a` and `b`.",
        outputFormat: "Five lines, each showing the result of an operation.",
        testCases: [{ input: "10 3", output: "13\n7\n30\n3\n1" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << a + b << std::endl;
    std::cout << a - b << std::endl;
    std::cout << a * b << std::endl;
    std::cout << a / b << std::endl; // Integer division
    std::cout << a % b << std::endl;
    return 0;
}`,
        explanation: "This program demonstrates the five basic arithmetic operators in C++. Note that `a / b` performs integer division because both operands are integers."
      },
       {
        id: "cpp-s3-q2",
        title: "Increment/decrement demo",
        description: "Show pre- and post-increment/decrement.",
        statement: "Demonstrate the difference between pre-increment (`++a`) and post-increment (`a++`).",
        inputFormat: "No input.",
        outputFormat: "Demonstration of the operators.",
        testCases: [{ input: "", output: "a=6, b=6\na=6, c=5" }],
        solution: `#include <iostream>

int main() {
    int a = 5, b, c;
    
    // Pre-increment: increments 'a', then assigns to 'b'
    b = ++a; 
    std::cout << "a=" << a << ", b=" << b << std::endl;
    
    // Reset a
    a = 5;
    
    // Post-increment: assigns to 'c', then increments 'a'
    c = a++;
    std::cout << "a=" << a << ", c=" << c << std::endl;
    return 0;
}`,
        explanation: "Pre-increment (`++a`) increases the value of the variable *before* its value is used in the expression. Post-increment (`a++`) increases the value *after* its original value has been used."
      },
       {
        id: "cpp-s3-q3",
        title: "Relational operators demo",
        description: "Demonstrate all relational operators.",
        statement: "Given two integers, demonstrate the `>`, `<`, `==`, and `!=` operators.",
        inputFormat: "Two integers.",
        outputFormat: "The boolean result (true/false) of each comparison on a new line.",
        testCases: [{ input: "10 5", output: "true\nfalse\nfalse\ntrue" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << std::boolalpha; // Print 'true'/'false' instead of 1/0
    std::cout << (a > b) << std::endl;
    std::cout << (a < b) << std::endl;
    std::cout << (a == b) << std::endl;
    std::cout << (a != b) << std::endl;
    return 0;
}`,
        explanation: "Relational operators compare two values and evaluate to a boolean result. Using `std::boolalpha` makes the output more readable."
      },
       {
        id: "cpp-s3-q4",
        title: "Logical operators demo",
        description: "Use `&&`, `||`, `!`.",
        statement: "Demonstrate the logical AND, OR, and NOT operators.",
        inputFormat: "No input.",
        outputFormat: "Results of logical operations.",
        testCases: [{ input: "", output: "true\ntrue\nfalse" }],
        solution: `#include <iostream>

int main() {
    int a = 5, b = 5, c = 10;
    std::cout << std::boolalpha;
    // AND: both must be true
    std::cout << ((a == b) && (c > b)) << std::endl;
    // OR: at least one must be true
    std::cout << ((a == b) || (c < b)) << std::endl;
    // NOT: inverts the boolean value
    std::cout << !(a == b) << std::endl;
    return 0;
}`,
        explanation: "Logical operators are used to combine multiple conditions. `&&` (AND) is true only if both operands are true. `||` (OR) is true if at least one operand is true. `!` (NOT) inverts a true value to false and vice-versa."
      },
      {
        id: "cpp-s3-q5",
        title: "Bitwise AND",
        description: "Perform bitwise AND.",
        statement: "Given two integers, perform a bitwise AND (`&`) operation.",
        inputFormat: "Two integers.",
        outputFormat: "The result of the bitwise AND.",
        testCases: [{ input: "5 3", output: "1" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 & 011 = 001, which is 1
    std::cin >> a >> b;
    std::cout << (a & b);
    return 0;
}`,
        explanation: "The bitwise AND operator `&` compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, it's 0."
      },
      {
        id: "cpp-s3-q6",
        title: "Bitwise OR",
        description: "Perform bitwise OR.",
        statement: "Given two integers, perform a bitwise OR (`|`) operation.",
        inputFormat: "Two integers.",
        outputFormat: "The result of the bitwise OR.",
        testCases: [{ input: "5 3", output: "7" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 | 011 = 111, which is 7
    std::cin >> a >> b;
    std::cout << (a | b);
    return 0;
}`,
        explanation: "The bitwise OR operator `|` compares each bit. If either of the bits is 1, the corresponding result bit is set to 1."
      },
      {
        id: "cpp-s3-q7",
        title: "Bitwise XOR",
        description: "Perform bitwise XOR.",
        statement: "Given two integers, perform a bitwise XOR (`^`) operation.",
        inputFormat: "Two integers.",
        outputFormat: "The result of the bitwise XOR.",
        testCases: [{ input: "5 3", output: "6" }],
        solution: `#include <iostream>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 ^ 011 = 110, which is 6
    std::cin >> a >> b;
    std::cout << (a ^ b);
    return 0;
}`,
        explanation: "The bitwise XOR operator `^` compares each bit. If the bits are different, the corresponding result bit is set to 1. If they are the same, it's 0."
      },
      {
        id: "cpp-s3-q8",
        title: "Left shift",
        description: "Use the left shift operator.",
        statement: "Given an integer, perform a left shift by 2 bits (`<< 2`).",
        inputFormat: "A single integer.",
        outputFormat: "The result of the shift operation.",
        testCases: [{ input: "10", output: "40" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    // 10 in binary is 1010
    // Left shifting by 2 gives 101000, which is 40
    std::cout << (n << 2);
    return 0;
}`,
        explanation: "The left shift operator `<<` shifts the bits of the number to the left by a specified number of positions. It is equivalent to multiplying by 2 for each position shifted."
      },
      {
        id: "cpp-s3-q9",
        title: "Right shift",
        description: "Use the right shift operator.",
        statement: "Given an integer, perform a right shift by 1 bit (`>> 1`).",
        inputFormat: "A single integer.",
        outputFormat: "The result of the shift operation.",
        testCases: [{ input: "10", output: "5" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    // 10 in binary is 1010
    // Right shifting by 1 gives 101, which is 5
    std::cout << (n >> 1);
    return 0;
}`,
        explanation: "The right shift operator `>>` shifts the bits of the number to the right. It is equivalent to integer division by 2 for each position shifted."
      },
      {
        id: "cpp-s3-q10",
        title: "Check odd even using bitwise",
        description: "Use bitwise AND to check for even/odd.",
        statement: "Read an integer. If its least significant bit is 1, it's odd; otherwise, it's even. Check this using the bitwise AND operator.",
        inputFormat: "A single integer.",
        outputFormat: "'Odd' or 'Even'.",
        testCases: [{ input: "7", output: "Odd" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n & 1) {
        std::cout << "Odd";
    } else {
        std::cout << "Even";
    }
    return 0;
}`,
        explanation: "Performing a bitwise AND with 1 (`n & 1`) isolates the least significant bit of the number. If this bit is 1, the result of the operation is 1 (true in a conditional), and the number is odd. Otherwise, the result is 0 (false)."
      },
      {
        id: "cpp-s3-q11",
        title: "Ternary operator example",
        description: "Use C++'s conditional operator.",
        statement: "Read an integer. If it's even, store 'E' in a char variable; otherwise, store 'O'. Use the ternary operator.",
        inputFormat: "A single integer.",
        outputFormat: "'E' or 'O'.",
        testCases: [{ input: "7", output: "O" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    char result = (n % 2 == 0) ? 'E' : 'O';
    std::cout << result;
    return 0;
}`,
        explanation: "The ternary operator `condition ? value_if_true : value_if_false` is a concise way to write a simple if-else statement that assigns a value to a variable."
      },
      {
        id: "cpp-s3-q12",
        title: "Largest of 3 (ternary)",
        description: "Find the largest of three numbers using the ternary operator.",
        statement: "Read three integers and find the largest one using nested ternary operators.",
        inputFormat: "Three integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "15 10 20", output: "20" }],
        solution: `#include <iostream>

int main() {
    int a, b, c, largest;
    std::cin >> a >> b >> c;
    largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    std::cout << largest;
    return 0;
}`,
        explanation: "This nests ternary operators. The outer `(a > b) ? ... : ...` checks if `a` is greater than `b`. If it is, the inner expression `(a > c) ? a : c` finds the max between `a` and `c`. If not, the other inner expression finds the max between `b` and `c`."
      },
      {
        id: "cpp-s3-q13",
        title: "Power of number (without pow())",
        description: "Calculate power using a loop.",
        statement: "Find the power of a number. Given a base and an exponent, calculate `base^exponent` without using the `pow()` function.",
        inputFormat: "Two integers: base and exponent.",
        outputFormat: "The result.",
        testCases: [{ input: "2 5", output: "32" }],
        solution: `#include <iostream>

int main() {
    int base, exp;
    long long result = 1;
    std::cin >> base >> exp;
    while (exp != 0) {
        result *= base;
        --exp;
    }
    std::cout << result;
    return 0;
}`,
        explanation: "We initialize `result` to 1. A `while` loop runs `exp` times, multiplying the `result` by the `base` in each iteration. `long long` is used for the result to handle potentially large numbers."
      },
      {
        id: "cpp-s3-q14",
        title: "Absolute value",
        description: "Find the absolute value of a number.",
        statement: "Read an integer (which can be negative) and print its absolute value without using `abs()`.",
        inputFormat: "A single integer.",
        outputFormat: "The absolute value.",
        testCases: [{ input: "-10", output: "10" }],
        solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n < 0) {
        n = -n;
    }
    std::cout << n;
    return 0;
}`,
        explanation: "If the number is less than 0, we simply multiply it by -1 to get its positive equivalent."
      },
      {
        id: "cpp-s3-q15",
        title: "sizeof() operator",
        description: "Find the size of data types.",
        statement: "Print the size (in bytes) of `int`, `char`, `float`, and `double` data types on your system.",
        inputFormat: "No input.",
        outputFormat: "Sizes of the data types.",
        testCases: [{ input: "", output: "int: 4\nchar: 1\nfloat: 4\ndouble: 8" }],
        solution: `#include <iostream>

int main() {
    std::cout << "int: " << sizeof(int) << std::endl;
    std::cout << "char: " << sizeof(char) << std::endl;
    std::cout << "float: " << sizeof(float) << std::endl;
    std::cout << "double: " << sizeof(double) << std::endl;
    return 0;
}`,
        explanation: "The `sizeof` operator is a compile-time unary operator which can be used to compute the size of its operand. The result of `sizeof` is of an unsigned integral type which is usually `size_t`."
      }
    ]
  },
  {
    category: "SECTION 4 — Conditional Statements",
    problems: [
      {
        id: "cpp-s4-q1",
        title: "Check leap year",
        description: "Check if a year is a leap year.",
        statement: "A year is a leap year if it is divisible by 4, except for century years, which must also be divisible by 400.",
        inputFormat: "A single integer `year`.",
        outputFormat: "Print 'Leap Year' or 'Not a Leap Year'.",
        testCases: [ { input: "2000", output: "Leap Year" }, { input: "1900", output: "Not a Leap Year" } ],
        solution: `#include <iostream>

int main() {
    int year;
    std::cin >> year;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        std::cout << "Leap Year";
    } else {
        std::cout << "Not a Leap Year";
    }
    return 0;
}`,
        explanation: "The logic uses a compound conditional statement. `(year % 4 == 0 && year % 100 != 0)` handles regular leap years. `(year % 400 == 0)` handles century leap years. The `||` (OR) combines these two conditions."
      },
      {
        id: "cpp-s4-q2",
        title: "Vowel or consonant",
        description: "Check if a character is a vowel.",
        statement: "Check if a character is a vowel ('a', 'e', 'i', 'o', 'u'). Handle both uppercase and lowercase.",
        inputFormat: "A single character.",
        outputFormat: "'Vowel' or 'Consonant'.",
        testCases: [{ input: "A", output: "Vowel" }],
        solution: `#include <iostream>
#include <cctype>

int main() {
    char c;
    std::cin >> c;
    c = tolower(c);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        std::cout << "Vowel";
    } else {
        std::cout << "Consonant";
    }
    return 0;
}`,
        explanation: "We use `tolower()` from `<cctype>` to convert the input character to lowercase, so we only need to check for the five lowercase vowels."
      },
       {
        id: "cpp-s4-q3",
        title: "Positive, negative, zero",
        description: "Check a number's sign.",
        statement: "Read an integer and print if it's 'Positive', 'Negative', or 'Zero'.",
        inputFormat: "A single integer.",
        outputFormat: "The sign of the number.",
        testCases: [{ input: "0", output: "Zero" }],
        solution: `#include <iostream>
int main() {
    int num;
    std::cin >> num;
    if (num > 0) std::cout << "Positive";
    else if (num < 0) std::cout << "Negative";
    else std::cout << "Zero";
    return 0;
}`,
        explanation: "An `if-else if-else` ladder is used to check the three possible conditions for an integer's sign."
      },
      {
        id: "cpp-s4-q4",
        title: "Print day of week (switch)",
        description: "Use a switch statement to print the day.",
        statement: "Read an integer from 1 to 7 and print the corresponding day of the week.",
        inputFormat: "An integer.",
        outputFormat: "The day name.",
        testCases: [{ input: "3", output: "Wednesday" }],
        solution: `#include <iostream>

int main() {
    int day;
    std::cin >> day;
    switch (day) {
        case 1: std::cout << "Sunday"; break;
        case 2: std::cout << "Monday"; break;
        case 3: std::cout << "Wednesday"; break;
        case 4: std::cout << "Thursday"; break;
        case 5: std::cout << "Friday"; break;
        case 6: std::cout << "Saturday"; break;
        case 7: std::cout << "Sunday"; break;
        default: std::cout << "Invalid day";
    }
    return 0;
}`,
        explanation: "The `switch` statement provides a clean way to handle multiple fixed choices. The `break` statement is crucial to prevent 'fall-through' to the next case."
      },
      {
        id: "cpp-s4-q5",
        title: "Calculator using switch",
        description: "A simple calculator using switch.",
        statement: "Read two numbers and an operator (+, -, *, /). Perform the calculation using a switch statement.",
        inputFormat: "First number, operator, second number.",
        outputFormat: "The result.",
        testCases: [{ input: "10 * 5", output: "50" }],
        solution: `#include <iostream>

int main() {
    char op;
    double n1, n2;
    std::cin >> n1 >> op >> n2;
    switch (op) {
        case '+': std::cout << n1 + n2; break;
        case '-': std::cout << n1 - n2; break;
        case '*': std::cout << n1 * n2; break;
        case '/': std::cout << n1 / n2; break;
        default: std::cout << "Error! operator is not correct";
    }
    return 0;
}`,
        explanation: "The `switch` statement is used on the operator character. Each `case` handles a different arithmetic operation."
      },
       {
        id: "cpp-s4-q6",
        title: "Marks grading",
        description: "Assign a grade based on marks.",
        statement: "Assign a grade: A (>=90), B (>=80), C (>=70), D (>=60), F (<60).",
        inputFormat: "An integer for marks.",
        outputFormat: "The grade.",
        testCases: [{ input: "85", output: "Grade B" }],
        solution: `#include <iostream>

int main() {
    int marks;
    std::cin >> marks;
    if (marks >= 90) std::cout << "Grade A";
    else if (marks >= 80) std::cout << "Grade B";
    else if (marks >= 70) std::cout << "Grade C";
    else if (marks >= 60) std::cout << "Grade D";
    else std::cout << "Grade F";
    return 0;
}`,
        explanation: "The `if-else if-else` structure is perfect for this. It checks each condition from top to bottom and executes the first one that is true."
      },
      {
        id: "cpp-s4-q7",
        title: "Smallest of 3 numbers",
        description: "Find the smallest of three numbers.",
        statement: "Read three integers and find the smallest one.",
        inputFormat: "Three integers.",
        outputFormat: "The smallest integer.",
        testCases: [{ input: "15 10 20", output: "10" }],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int a, b, c;
    std::cin >> a >> b >> c;
    std::cout << std::min({a, b, c});
    return 0;
}`,
        explanation: "The most idiomatic C++ way is to use `std::min` from the `<algorithm>` header. It can take an initializer list `{a, b, c}` to find the minimum of multiple items."
      },
      {
        id: "cpp-s4-q8",
        title: "Check alphabet, digit, symbol",
        description: "Classify a character.",
        statement: "Check if a given character is an alphabet, a digit, or a special symbol.",
        inputFormat: "A single character.",
        outputFormat: "The character type.",
        testCases: [{ input: "$", output: "Special Character" }],
        solution: `#include <iostream>
#include <cctype>

int main() {
    char ch;
    std::cin >> ch;
    if (isalpha(ch)) {
        std::cout << "Alphabet";
    } else if (isdigit(ch)) {
        std::cout << "Digit";
    } else {
        std::cout << "Special Character";
    }
    return 0;
}`,
        explanation: "The program uses functions from `<cctype>` (`isalpha`, `isdigit`) to classify the character, which is more robust than checking ASCII ranges manually."
      },
       {
        id: "cpp-s4-q9",
        title: "Eligibility based on age",
        description: "Check eligibility for a certain criteria.",
        statement: "Read an age. Check if the person is eligible to vote (age >= 18).",
        inputFormat: "An integer age.",
        outputFormat: "'Eligible' or 'Not Eligible'.",
        testCases: [{ input: "21", output: "Eligible" }],
        solution: `#include <iostream>

int main() {
    int age;
    std::cin >> age;
    if (age >= 18) {
        std::cout << "Eligible";
    } else {
        std::cout << "Not Eligible";
    }
    return 0;
}`,
        explanation: "A simple `if-else` statement checks if the entered age is greater than or equal to 18."
      },
      {
        id: "cpp-s4-q10",
        title: "Triangle type check",
        description: "Check if a triangle is equilateral, isosceles, or scalene.",
        statement: "Given three sides of a triangle, check if it is equilateral, isosceles, or scalene.",
        inputFormat: "Three integers representing the sides.",
        outputFormat: "The type of triangle.",
        testCases: [{ input: "5 5 5", output: "Equilateral" }],
        solution: `#include <iostream>

int main() {
    int a, b, c;
    std::cin >> a >> b >> c;
    if (a == b && b == c) {
        std::cout << "Equilateral";
    } else if (a == b || b == c || c == a) {
        std::cout << "Isosceles";
    } else {
        std::cout << "Scalene";
    }
    return 0;
}`,
        explanation: "The program first checks for the most specific condition (all sides equal), then the next (any two sides equal), and finally defaults to the most general case (no sides equal)."
      },
       {
        id: "cpp-s4-q11",
        title: "Electricity bill calculator",
        description: "Calculate a bill based on tiered rates.",
        statement: "Calculate an electricity bill. First 50 units: Rs. 0.50/unit. Next 100 units: Rs. 0.75/unit. Next 100 units: Rs. 1.20/unit. Above 250 units: Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.",
        inputFormat: "An integer for units consumed.",
        outputFormat: "The total bill.",
        testCases: [{ input: "150", output: "120.00" }],
        solution: `#include <iostream>
#include <iomanip>

int main() {
    int units;
    double bill;
    std::cin >> units;

    if(units <= 50) bill = units * 0.50;
    else if(units <= 150) bill = 25 + (units - 50) * 0.75;
    else if(units <= 250) bill = 100 + (units - 150) * 1.20;
    else bill = 220 + (units - 250) * 1.50;

    bill = bill * 1.20; // Add 20% surcharge
    std::cout << std::fixed << std::setprecision(2) << bill;
    return 0;
}`,
        explanation: "The logic uses an `if-else if` ladder to calculate the bill based on consumption slabs. The final bill is calculated by adding a 20% surcharge."
      },
      {
        id: "cpp-s4-q12",
        title: "Salary calculation (HRA/DA)",
        description: "Calculate gross salary.",
        statement: "Calculate an employee's gross salary based on basic salary. If basic <= 10000, HRA=20%, DA=80%. If basic <= 20000, HRA=25%, DA=90%. If basic > 20000, HRA=30%, DA=95%.",
        inputFormat: "A number for basic salary.",
        outputFormat: "The gross salary.",
        testCases: [{ input: "15000", output: "46500.00" }],
        solution: `#include <iostream>
#include <iomanip>

int main() {
    float basic, gross, da, hra;
    std::cin >> basic;
    if (basic <= 10000) {
        hra = basic * 0.2;
        da = basic * 0.8;
    } else if (basic <= 20000) {
        hra = basic * 0.25;
        da = basic * 0.9;
    } else {
        hra = basic * 0.3;
        da = basic * 0.95;
    }
    gross = basic + hra + da;
    std::cout << std::fixed << std::setprecision(2) << gross;
    return 0;
}`,
        explanation: "The program uses `if-else if` to determine the correct percentages for HRA and DA based on the basic salary slab, then calculates the gross salary."
      },
      {
        id: "cpp-s4-q13",
        title: "Profit or loss",
        description: "Calculate profit or loss from cost and selling price.",
        statement: "Read the cost price and selling price of an item. Determine if it's a profit or a loss and by how much.",
        inputFormat: "Two floats: cost price, selling price.",
        outputFormat: "Profit/Loss amount.",
        testCases: [{ input: "100 120", output: "Profit: 20.00" }],
        solution: `#include <iostream>
#include <iomanip>

int main() {
    float cp, sp;
    std::cin >> cp >> sp;
    std::cout << std::fixed << std::setprecision(2);
    if (sp > cp) {
        std::cout << "Profit: " << sp - cp;
    } else if (cp > sp) {
        std::cout << "Loss: " << cp - sp;
    } else {
        std::cout << "No Profit No Loss.";
    }
    return 0;
}`,
        explanation: "The program compares the selling price (sp) and cost price (cp) to determine the outcome and prints the calculated difference."
      },
      {
        id: "cpp-s4-q14",
        title: "Check triangle validity",
        description: "Check if a triangle is valid from its angles.",
        statement: "A triangle is valid if the sum of all its three angles is equal to 180 degrees. Read three angles and check.",
        inputFormat: "Three integers.",
        outputFormat: "'Valid' or 'Invalid'.",
        testCases: [{ input: "60 60 60", output: "Valid" }],
        solution: `#include <iostream>

int main() {
    int a, b, c;
    std::cin >> a >> b >> c;
    if (a + b + c == 180) {
        std::cout << "Valid";
    } else {
        std::cout << "Invalid";
    }
    return 0;
}`,
        explanation: "The program simply reads the three angles, calculates their sum, and checks if the sum is equal to 180."
      },
      {
        id: "cpp-s4-q15",
        title: "Number of days in month",
        description: "Find the number of days in a given month.",
        statement: "Read a month number (1-12) and print the number of days in it. (Assume a non-leap year for February).",
        inputFormat: "An integer month.",
        outputFormat: "The number of days.",
        testCases: [{ input: "2", output: "28" }, { input: "4", output: "30" }],
        solution: `#include <iostream>

int main() {
    int month;
    std::cin >> month;
    if (month == 2) {
        std::cout << "28";
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        std::cout << "30";
    } else if (month >=1 && month <= 12) {
        std::cout << "31";
    } else {
        std::cout << "Invalid month";
    }
    return 0;
}`,
        explanation: "This solution uses an `if-else if` ladder to check the month number. It handles February, the 30-day months, and the 31-day months in separate conditions."
      }
    ]
  }
];