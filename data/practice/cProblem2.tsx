import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART2: ProblemCategory[] = [
    {
        category: "SECTION 3 — Operators",
        problems: [
            {
                id: "c-s3-q1",
                title: "All arithmetic operations",
                description: "Perform all basic arithmetic operations.",
                statement: "Given two integers, print their sum, difference, product, quotient, and remainder.",
                inputFormat: "Two integers `a` and `b`.",
                outputFormat: "Five lines, each showing the result of an operation.",
                testCases: [{ input: "10 3", output: "13\n7\n30\n3\n1" }],
                solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\\n", a + b);
    printf("%d\\n", a - b);
    printf("%d\\n", a * b);
    printf("%d\\n", a / b); // Integer division
    printf("%d\\n", a % b);
    return 0;
}`,
                explanation: "This program demonstrates the five basic arithmetic operators in C. Note that `a / b` performs integer division because both operands are integers."
            },
            {
                id: "c-s3-q2",
                title: "Bitwise AND",
                description: "Perform bitwise AND.",
                statement: "Given two integers, perform a bitwise AND (`&`) operation.",
                inputFormat: "Two integers.",
                outputFormat: "The result of the bitwise AND.",
                testCases: [{ input: "5 3", output: "1" }],
                solution: `#include <stdio.h>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 & 011 = 001, which is 1
    scanf("%d %d", &a, &b);
    printf("%d", a & b);
    return 0;
}`,
                explanation: "The bitwise AND operator `&` compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, it's 0."
            },
            {
                id: "c-s3-q3",
                title: "Bitwise OR",
                description: "Perform bitwise OR.",
                statement: "Given two integers, perform a bitwise OR (`|`) operation.",
                inputFormat: "Two integers.",
                outputFormat: "The result of the bitwise OR.",
                testCases: [{ input: "5 3", output: "7" }],
                solution: `#include <stdio.h>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 | 011 = 111, which is 7
    scanf("%d %d", &a, &b);
    printf("%d", a | b);
    return 0;
}`,
                explanation: "The bitwise OR operator `|` compares each bit. If either of the bits is 1, the corresponding result bit is set to 1."
            },
            {
                id: "c-s3-q4",
                title: "Bitwise XOR",
                description: "Perform bitwise XOR.",
                statement: "Given two integers, perform a bitwise XOR (`^`) operation.",
                inputFormat: "Two integers.",
                outputFormat: "The result of the bitwise XOR.",
                testCases: [{ input: "5 3", output: "6" }],
                solution: `#include <stdio.h>

int main() {
    int a, b;
    // 5 in binary is 101
    // 3 in binary is 011
    // 101 ^ 011 = 110, which is 6
    scanf("%d %d", &a, &b);
    printf("%d", a ^ b);
    return 0;
}`,
                explanation: "The bitwise XOR operator `^` compares each bit. If the bits are different, the corresponding result bit is set to 1. If they are the same, it's 0."
            },
            {
                id: "c-s3-q5",
                title: "Left shift",
                description: "Use the left shift operator.",
                statement: "Given an integer, perform a left shift by 2 bits (`<< 2`).",
                inputFormat: "A single integer.",
                outputFormat: "The result of the shift operation.",
                testCases: [{ input: "10", output: "40" }],
                solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // 10 in binary is 1010
    // Left shifting by 2 gives 101000, which is 40
    printf("%d", n << 2);
    return 0;
}`,
                explanation: "The left shift operator `<<` shifts the bits of the number to the left by a specified number of positions. It is equivalent to multiplying by 2 for each position shifted."
            },
            {
                id: "c-s3-q6",
                title: "Right shift",
                description: "Use the right shift operator.",
                statement: "Given an integer, perform a right shift by 1 bit (`>> 1`).",
                inputFormat: "A single integer.",
                outputFormat: "The result of the shift operation.",
                testCases: [{ input: "10", output: "5" }],
                solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // 10 in binary is 1010
    // Right shifting by 1 gives 101, which is 5
    printf("%d", n >> 1);
    return 0;
}`,
                explanation: "The right shift operator `>>` shifts the bits of the number to the right. It is equivalent to integer division by 2 for each position shifted."
            },
            {
                id: "c-s3-q7",
                title: "Check odd even using bitwise",
                description: "Use bitwise AND to check for even/odd.",
                statement: "Read an integer. If its least significant bit is 1, it's odd; otherwise, it's even. Check this using the bitwise AND operator.",
                inputFormat: "A single integer.",
                outputFormat: "'Even' or 'Odd'.",
                testCases: [{ input: "7", output: "Odd" }],
                solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n & 1) {
        printf("Odd");
    } else {
        printf("Even");
    }
    return 0;
}`,
                explanation: "Performing a bitwise AND with 1 (`n & 1`) isolates the least significant bit of the number. If this bit is 1, the result of the operation is 1 (true in a conditional), and the number is odd. Otherwise, the result is 0 (false)."
            },
            {
                id: "c-s3-q8",
                title: "Compare two numbers",
                description: "Demonstrate all relational operators.",
                statement: "Given two integers, demonstrate the `>`, `<`, `==`, and `!=` operators.",
                inputFormat: "Two integers.",
                outputFormat: "The boolean result (1 for true, 0 for false) of each comparison on a new line.",
                testCases: [{ input: "10 5", output: "1\n0\n0\n1" }],
                solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\\n", a > b);
    printf("%d\\n", a < b);
    printf("%d\\n", a == b);
    printf("%d\\n", a != b);
    return 0;
}`,
                explanation: "Relational operators compare two values and evaluate to a boolean result. In C, `true` is represented by the integer 1, and `false` is represented by 0."
            },
            {
                id: "c-s3-q9",
                title: "Increment/decrement demo",
                description: "Show pre- and post-increment/decrement.",
                statement: "Demonstrate the difference between pre-increment (`++a`) and post-increment (`a++`).",
                inputFormat: "No input.",
                outputFormat: "Demonstration of the operators.",
                testCases: [{ input: "", output: "a=5, b=5\na=6, c=5" }],
                solution: `#include <stdio.h>

int main() {
    int a = 5, b, c;
    // Pre-increment: increments 'a', then assigns to 'b'
    b = ++a; 
    // printf("a=%d, b=%d\\n", a, b); // a=6, b=6
    
    // Reset a
    a = 5;
    
    // Post-increment: assigns to 'c', then increments 'a'
    c = a++;
    printf("a=%d, c=%d", a, c);
    return 0;
}`,
                explanation: "Pre-increment (`++a`) increases the value of the variable *before* its value is used in the expression. Post-increment (`a++`) increases the value *after* its original value has been used."
            },
            {
                id: "c-s3-q10",
                title: "Logical operators demo",
                description: "Use `&&`, `||`, `!`.",
                statement: "Demonstrate the logical AND, OR, and NOT operators.",
                inputFormat: "No input.",
                outputFormat: "Results of logical operations.",
                testCases: [{ input: "", output: "1\n1\n0" }],
                solution: `#include <stdio.h>

int main() {
    int a = 5, b = 5, c = 10;
    // AND: both must be true
    printf("%d\\n", (a == b) && (c > b));
    // OR: at least one must be true
    printf("%d\\n", (a == b) || (c < b));
    // NOT: inverts the boolean value
    printf("%d\\n", !(a == b));
    return 0;
}`,
                explanation: "Logical operators are used to combine multiple conditions. `&&` (AND) is true only if both operands are true. `||` (OR) is true if at least one operand is true. `!` (NOT) inverts a true value to false and vice-versa."
            },
            {
                id: "c-s3-q11",
                title: "Ternary operator example",
                description: "Use C's conditional operator.",
                statement: "Read an integer. If it's even, store 'E' in a char variable; otherwise, store 'O'. Use the ternary operator.",
                inputFormat: "A single integer.",
                outputFormat: "'E' or 'O'.",
                testCases: [{ input: "7", output: "O" }],
                solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    char result = (n % 2 == 0) ? 'E' : 'O';
    printf("%c", result);
    return 0;
}`,
                explanation: "The ternary operator `condition ? value_if_true : value_if_false` is a concise way to write a simple if-else statement that assigns a value to a variable."
            },
            {
                id: "c-s3-q12",
                title: "Largest of 3 (ternary)",
                description: "Find the largest of three numbers using the ternary operator.",
                statement: "Read three integers and find the largest one using nested ternary operators.",
                inputFormat: "Three integers.",
                outputFormat: "The largest integer.",
                testCases: [{ input: "15 10 20", output: "20" }],
                solution: `#include <stdio.h>

int main() {
    int a, b, c, largest;
    scanf("%d %d %d", &a, &b, &c);
    largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    printf("%d", largest);
    return 0;
}`,
                explanation: "This nests ternary operators. The outer `(a > b) ? ... : ...` checks if `a` is greater than `b`. If it is, the inner expression `(a > c) ? a : c` finds the max between `a` and `c`. If not, the other inner expression finds the max between `b` and `c`."
            },
            {
                id: "c-s3-q13",
                title: "Power of number (without pow())",
                description: "Calculate power using a loop.",
                statement: "Find the power of a number. Given a base and an exponent, calculate `base^exponent` without using the `pow()` function.",
                inputFormat: "Two integers: base and exponent.",
                outputFormat: "The result.",
                testCases: [{ input: "2 5", output: "32" }],
                solution: `#include <stdio.h>

int main() {
    int base, exp;
    long long result = 1;
    scanf("%d %d", &base, &exp);
    while (exp != 0) {
        result *= base;
        --exp;
    }
    printf("%lld", result);
    return 0;
}`,
                explanation: "We initialize `result` to 1. A `while` loop runs `exp` times, multiplying the `result` by the `base` in each iteration. `long long` is used for the result to handle potentially large numbers."
            },
            {
                id: "c-s3-q14",
                title: "Absolute value",
                description: "Find the absolute value of a number.",
                statement: "Read an integer (which can be negative) and print its absolute value without using `abs()`.",
                inputFormat: "A single integer.",
                outputFormat: "The absolute value.",
                testCases: [{ input: "-10", output: "10" }],
                solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n < 0) {
        n = -n;
    }
    printf("%d", n);
    return 0;
}`,
                explanation: "If the number is less than 0, we simply multiply it by -1 to get its positive equivalent."
            },
            {
                id: "c-s3-q15",
                title: "Check sign of number",
                description: "Check if a number is positive, negative, or zero.",
                statement: "Read an integer and print if it's 'Positive', 'Negative', or 'Zero'.",
                inputFormat: "A single integer.",
                outputFormat: "The sign of the number.",
                testCases: [{ input: "0", output: "Zero" }],
                solution: `#include <stdio.h>

int main() {
    int num;
    scanf("%d", &num);
    if (num > 0) {
        printf("Positive");
    } else if (num < 0) {
        printf("Negative");
    } else {
        printf("Zero");
    }
    return 0;
}`,
                explanation: "An `if-else if-else` ladder is used to check the three possible conditions for an integer's sign."
            }
        ]
    },
    {
        category: "SECTION 4 — Conditional Statements",
        problems: [
            {
                id: "c-s4-q1",
                title: "Check leap year",
                description: "Check if a year is a leap year.",
                statement: "A year is a leap year if it is divisible by 4, except for century years, which must also be divisible by 400.",
                inputFormat: "A single integer `year`.",
                outputFormat: "Print 'Leap Year' or 'Not a Leap Year'.",
                testCases: [ { input: "2000", output: "Leap Year" }, { input: "1900", output: "Not a Leap Year" } ],
                solution: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("Leap Year");
    } else {
        printf("Not a Leap Year");
    }
    return 0;
}`,
                explanation: "The logic uses a compound conditional statement. `(year % 4 == 0 && year % 100 != 0)` handles regular leap years. `(year % 400 == 0)` handles century leap years. The `||` (OR) combines these two conditions."
            },
            {
                id: "c-s4-q2",
                title: "Vowel or consonant",
                description: "Check if a character is a vowel.",
                statement: "Check if a character is a vowel ('a', 'e', 'i', 'o', 'u'). Handle both uppercase and lowercase.",
                inputFormat: "A single character.",
                outputFormat: "'Vowel' or 'Consonant'.",
                testCases: [{ input: "A", output: "Vowel" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char c;
    scanf(" %c", &c);
    c = tolower(c);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        printf("Vowel");
    } else {
        printf("Consonant");
    }
    return 0;
}`,
                explanation: "We use `tolower()` from `ctype.h` to convert the input character to lowercase, so we only need to check for the five lowercase vowels."
            },
            {
                id: "c-s4-q3",
                title: "Positive, negative, zero",
                description: "Check a number's sign.",
                statement: "This is a duplicate of a problem in the Operators section.",
                inputFormat: "A single integer.",
                outputFormat: "'Positive', 'Negative' or 'Zero'.",
                testCases: [{ input: "-9", output: "Negative" }],
                solution: `#include <stdio.h>

int main() {
    int num;
    scanf("%d", &num);
    if (num > 0) printf("Positive");
    else if (num < 0) printf("Negative");
    else printf("Zero");
    return 0;
}`,
                explanation: "An `if-else if-else` ladder checks the conditions sequentially."
            },
            {
                id: "c-s4-q4",
                title: "Print day of week (switch)",
                description: "Use a switch statement to print the day.",
                statement: "Read an integer from 1 to 7 and print the corresponding day of the week.",
                inputFormat: "An integer.",
                outputFormat: "The day name.",
                testCases: [{ input: "3", output: "Wednesday" }],
                solution: `#include <stdio.h>

int main() {
    int day;
    scanf("%d", &day);
    switch (day) {
        case 1: printf("Sunday"); break;
        case 2: printf("Monday"); break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thursday"); break;
        case 5: printf("Friday"); break;
        case 6: printf("Saturday"); break;
        case 7: printf("Sunday"); break;
        default: printf("Invalid day");
    }
    return 0;
}`,
                explanation: "The `switch` statement provides a clean way to handle multiple fixed choices. The `break` statement is crucial to prevent 'fall-through' to the next case."
            },
            {
                id: "c-s4-q5",
                title: "Calculator using switch",
                description: "A simple calculator using switch.",
                statement: "Read two numbers and an operator (+, -, *, /). Perform the calculation using a switch statement.",
                inputFormat: "First number, operator, second number.",
                outputFormat: "The result.",
                testCases: [{ input: "10 * 5", output: "50.00" }],
                solution: `#include <stdio.h>

int main() {
    char op;
    double n1, n2;
    scanf("%lf %c %lf", &n1, &op, &n2);
    switch (op) {
        case '+': printf("%.2lf", n1 + n2); break;
        case '-': printf("%.2lf", n1 - n2); break;
        case '*': printf("%.2lf", n1 * n2); break;
        case '/': printf("%.2lf", n1 / n2); break;
        default: printf("Error! operator is not correct");
    }
    return 0;
}`,
                explanation: "The `switch` statement is used on the operator character. Each `case` handles a different arithmetic operation."
            },
            {
                id: "c-s4-q6",
                title: "Marks grading",
                description: "Assign a grade based on marks.",
                statement: "Assign a grade: A (>=90), B (>=80), C (>=70), D (>=60), F (<60).",
                inputFormat: "An integer for marks.",
                outputFormat: "The grade.",
                testCases: [{ input: "85", output: "Grade B" }],
                solution: `#include <stdio.h>

int main() {
    int marks;
    scanf("%d", &marks);
    if (marks >= 90) printf("Grade A");
    else if (marks >= 80) printf("Grade B");
    else if (marks >= 70) printf("Grade C");
    else if (marks >= 60) printf("Grade D");
    else printf("Grade F");
    return 0;
}`,
                explanation: "The `if-else if-else` structure is perfect for this. It checks each condition from top to bottom and executes the first one that is true."
            },
            {
                id: "c-s4-q7",
                title: "Smallest of 3 numbers",
                description: "Find the smallest of three numbers.",
                statement: "Read three integers and find the smallest one.",
                inputFormat: "Three integers.",
                outputFormat: "The smallest integer.",
                testCases: [{ input: "15 10 20", output: "10" }],
                solution: `#include <stdio.h>

int main() {
    int a, b, c, smallest;
    scanf("%d %d %d", &a, &b, &c);
    if (a <= b && a <= c) smallest = a;
    else if (b <= a && b <= c) smallest = b;
    else smallest = c;
    printf("%d", smallest);
    return 0;
}`,
                explanation: "This uses an `if-else if-else` ladder to compare the three numbers and find the one that is smaller than or equal to the other two."
            },
            {
                id: "c-s4-q8",
                title: "Check alphabet, digit, symbol",
                description: "Classify a character.",
                statement: "Check if a given character is an alphabet, a digit, or a special symbol.",
                inputFormat: "A single character.",
                outputFormat: "The character type.",
                testCases: [{ input: "$", output: "Special Character" }],
                solution: `#include <stdio.h>

int main() {
    char ch;
    scanf("%c", &ch);
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        printf("Alphabet");
    } else if (ch >= '0' && ch <= '9') {
        printf("Digit");
    } else {
        printf("Special Character");
    }
    return 0;
}`,
                explanation: "The program checks the character against the ASCII ranges for lowercase letters, uppercase letters, and digits to classify it."
            },
            {
                id: "c-s4-q9",
                title: "Eligibility based on age",
                description: "Check eligibility for a certain criteria.",
                statement: "Read an age. Check if the person is eligible to vote (age >= 18).",
                inputFormat: "An integer age.",
                outputFormat: "'Eligible' or 'Not Eligible'.",
                testCases: [{ input: "21", output: "Eligible" }],
                solution: `#include <stdio.h>

int main() {
    int age;
    scanf("%d", &age);
    if (age >= 18) {
        printf("Eligible");
    } else {
        printf("Not Eligible");
    }
    return 0;
}`,
                explanation: "A simple `if-else` statement checks if the entered age is greater than or equal to 18."
            },
            {
                id: "c-s4-q10",
                title: "Triangle type check",
                description: "Check if a triangle is equilateral, isosceles, or scalene.",
                statement: "Given three sides of a triangle, check if it is equilateral, isosceles, or scalene.",
                inputFormat: "Three integers representing the sides.",
                outputFormat: "The type of triangle.",
                testCases: [{ input: "5 5 5", output: "Equilateral" }],
                solution: `#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    if (a == b && b == c) {
        printf("Equilateral");
    } else if (a == b || b == c || c == a) {
        printf("Isosceles");
    } else {
        printf("Scalene");
    }
    return 0;
}`,
                explanation: "The program first checks for the most specific condition (all sides equal), then the next (any two sides equal), and finally defaults to the most general case (no sides equal)."
            },
            {
                id: "c-s4-q11",
                title: "Electricity bill calculator",
                description: "Calculate a bill based on tiered rates.",
                statement: "Calculate an electricity bill. First 50 units: Rs. 0.50/unit. Next 100 units: Rs. 0.75/unit. Next 100 units: Rs. 1.20/unit. Above 250 units: Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.",
                inputFormat: "An integer for units consumed.",
                outputFormat: "The total bill.",
                testCases: [{ input: "150", output: "120.00" }],
                solution: `#include <stdio.h>

int main() {
    int units;
    double bill;
    scanf("%d", &units);

    if(units <= 50) bill = units * 0.50;
    else if(units <= 150) bill = 25 + (units - 50) * 0.75;
    else if(units <= 250) bill = 100 + (units - 150) * 1.20;
    else bill = 220 + (units - 250) * 1.50;

    bill = bill * 1.20; // Add 20% surcharge
    printf("%.2lf", bill);
    return 0;
}`,
                explanation: "The logic uses an `if-else if` ladder to calculate the bill based on consumption slabs. The final bill is calculated by adding a 20% surcharge."
            },
            {
                id: "c-s4-q12",
                title: "Salary calculation (HRA/DA)",
                description: "Calculate gross salary.",
                statement: "Calculate an employee's gross salary based on basic salary. If basic <= 10000, HRA=20%, DA=80%. If basic <= 20000, HRA=25%, DA=90%. If basic > 20000, HRA=30%, DA=95%.",
                inputFormat: "An integer for basic salary.",
                outputFormat: "The gross salary.",
                testCases: [{ input: "15000", output: "46500.00" }],
                solution: `#include <stdio.h>

int main() {
    float basic, gross, da, hra;
    scanf("%f", &basic);
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
    printf("%.2f", gross);
    return 0;
}`,
                explanation: "The program uses `if-else if` to determine the correct percentages for HRA and DA based on the basic salary slab, then calculates the gross salary."
            },
            {
                id: "c-s4-q13",
                title: "Profit or loss",
                description: "Calculate profit or loss from cost and selling price.",
                statement: "Read the cost price and selling price of an item. Determine if it's a profit or a loss and by how much.",
                inputFormat: "Two floats: cost price, selling price.",
                outputFormat: "Profit/Loss amount.",
                testCases: [{ input: "100 120", output: "Profit: 20.00" }],
                solution: `#include <stdio.h>

int main() {
    float cp, sp;
    scanf("%f %f", &cp, &sp);
    if (sp > cp) {
        printf("Profit: %.2f", sp - cp);
    } else if (cp > sp) {
        printf("Loss: %.2f", cp - sp);
    } else {
        printf("No Profit No Loss.");
    }
    return 0;
}`,
                explanation: "The program compares the selling price (sp) and cost price (cp) to determine the outcome and prints the calculated difference."
            },
            {
                id: "c-s4-q14",
                title: "Library fine calculator",
                description: "Calculate library fine based on days overdue.",
                statement: "Calculate a library fine. 0-5 days: 50 paise/day. 6-10 days: Re 1/day. >10 days: Rs 5/day. If member, 50% discount.",
                inputFormat: "Days overdue (int), is member (char 'y' or 'n').",
                outputFormat: "Total fine.",
                testCases: [{ input: "12 y", output: "12.50" }],
                solution: `#include <stdio.h>

int main() {
    int days;
    char member;
    float fine = 0.0;
    scanf("%d %c", &days, &member);

    if (days > 10) {
        fine = (5 * 0.50) + (5 * 1.00) + ((days - 10) * 5.00);
    } else if (days > 5) {
        fine = (5 * 0.50) + ((days - 5) * 1.00);
    } else {
        fine = days * 0.50;
    }
    
    if (member == 'y') {
        fine = fine / 2;
    }

    printf("%.2f", fine);
    return 0;
}`,
                explanation: "The program calculates the fine based on slabs of overdue days and then applies a discount if the user is a member."
            },
            {
                id: "c-s4-q15",
                title: "Water consumption billing",
                description: "Calculate water bill with tiered rates.",
                statement: "Calculate a water bill. First 100L: Rs 15/L. Next 150L: Rs 14/L. Above 250L: Rs 12/L.",
                inputFormat: "An integer for liters consumed.",
                outputFormat: "Total bill.",
                testCases: [{ input: "200", output: "2900" }],
                solution: `#include <stdio.h>

int main() {
    int liters;
    int bill = 0;
    scanf("%d", &liters);

    if (liters > 250) {
        bill += (liters - 250) * 12;
        liters = 250;
    }
    if (liters > 100) {
        bill += (liters - 100) * 14;
        liters = 100;
    }
    bill += liters * 15;

    printf("%d", bill);
    return 0;
}`,
                explanation: "The logic calculates the bill for the highest consumption tier first, then works its way down. This avoids complex `elif` conditions and makes the calculation for each tier straightforward."
            }
        ]
    }
]
