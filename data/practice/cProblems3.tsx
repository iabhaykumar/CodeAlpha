import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART3: ProblemCategory[] = [
    {
        category: "SECTION 5 — Loops",
        problems: [
            {
                id: "c-s5-q1",
                title: "Print numbers from 1 to N",
                description: "Use a for loop to print a sequence.",
                statement: "Read an integer N and print all numbers from 1 to N, each on a new line.",
                inputFormat: "A single integer N.",
                outputFormat: "N lines, each with a number from 1 to N.",
                testCases: [{ input: "5", output: "1\n2\n3\n4\n5" }],
                solution: `#include <stdio.h>

int main() {
    int n, i;
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
                explanation: "A `for` loop is used to iterate from 1 up to and including N, printing the loop counter `i` in each iteration."
            },
            {
                id: "c-s5-q2",
                title: "Sum of first N natural numbers",
                description: "Find the sum of numbers from 1 to N.",
                statement: "Write a program to find the sum of all natural numbers from 1 to a given integer N.",
                inputFormat: "A single integer N.",
                outputFormat: "The sum.",
                testCases: [{ input: "100", output: "5050" }],
                solution: `#include <stdio.h>

int main() {
    int n, i, sum = 0;
    scanf("%d", &n);
    for (i = 1; i <= n; ++i) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "We initialize a `sum` variable to 0. Then, a `for` loop iterates from 1 to `n`. In each iteration, the current number `i` is added to the `sum`."
            },
            {
                id: "c-s5-q3",
                title: "Factorial",
                description: "Calculate the factorial of a number.",
                statement: "Write a program to find the factorial of a non-negative integer `N`.",
                inputFormat: "A single integer.",
                outputFormat: "The factorial value.",
                testCases: [{ input: "5", output: "120" }],
                solution: `#include <stdio.h>

int main() {
    int n, i;
    long long factorial = 1;
    scanf("%d", &n);
    for (i = 1; i <= n; ++i) {
        factorial *= i;
    }
    printf("%lld", factorial);
    return 0;
}`,
                explanation: "A `for` loop iterates from 1 to `n`. In each step, the `factorial` variable is multiplied by the loop counter `i`. A `long long` is used for `factorial` to handle large results."
            },
            {
                id: "c-s5-q4",
                title: "Count digits",
                description: "Count the number of digits in an integer.",
                statement: "Count the total number of digits in an integer.",
                inputFormat: "A single integer.",
                outputFormat: "The number of digits.",
                testCases: [{ input: "12345", output: "5" }],
                solution: `#include <stdio.h>

int main() {
    int n, count = 0;
    scanf("%d", &n);
    if (n == 0) {
        count = 1;
    } else {
        while (n != 0) {
            n /= 10;
            ++count;
        }
    }
    printf("%d", count);
    return 0;
}`,
                explanation: "We handle the edge case of 0 separately. For other numbers, a `while` loop runs, performing integer division by 10 in each iteration (which removes the last digit) and incrementing a counter."
            },
            {
                id: "c-s5-q5",
                title: "Reverse a number",
                description: "Reverse the digits of an integer.",
                statement: "Write a program to reverse the digits of a given integer.",
                inputFormat: "A single integer.",
                outputFormat: "The reversed integer.",
                testCases: [{ input: "12345", output: "54321" }],
                solution: `#include <stdio.h>

int main() {
    int n, reversed = 0, remainder;
    scanf("%d", &n);
    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }
    printf("%d", reversed);
    return 0;
}`,
                explanation: "This program uses a `while` loop. In each step, it gets the last digit using `% 10`, builds up the `reversed` number, and then removes the last digit from the original number using `/ 10`."
            },
            {
                id: "c-s5-q6",
                title: "Palindrome number",
                description: "Check if a number is a palindrome.",
                statement: "Check if a number is a palindrome (reads the same forwards and backwards).",
                inputFormat: "A single integer.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "121", output: "Yes" }, { input: "123", output: "No" }],
                solution: `#include <stdio.h>

int main() {
    int n, reversed = 0, remainder, original;
    scanf("%d", &n);
    original = n;
    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }
    if (original == reversed)
        printf("Yes");
    else
        printf("No");
    return 0;
}`,
                explanation: "We first reverse the number using the standard algorithm and then compare the reversed number with the original number that we saved before the loop."
            },
            {
                id: "c-s5-q7",
                title: "Armstrong number",
                description: "Check if a number is an Armstrong number.",
                statement: "An Armstrong number of n digits is an integer such that the sum of the nth powers of its digits is equal to the number itself. Check if a given number is an Armstrong number.",
                inputFormat: "An integer.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "153", output: "Yes" }, { input: "123", output: "No" }],
                solution: `#include <stdio.h>
#include <math.h>

int main() {
    int num, originalNum, remainder, n = 0, result = 0;
    scanf("%d", &num);
    originalNum = num;
    // count number of digits
    for (originalNum = num; originalNum != 0; ++n) {
        originalNum /= 10;
    }
    originalNum = num;
    // calculate sum of nth power of digits
    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += pow(remainder, n);
        originalNum /= 10;
    }
    if (result == num)
        printf("Yes");
    else
        printf("No");
    return 0;
}`,
                explanation: "The program first counts the number of digits. Then, it iterates through each digit, calculates its power, and adds it to a `result` sum. Finally, it compares this `result` with the original number."
            },
            {
                id: "c-s5-q8",
                title: "Strong number",
                description: "Check if a number is a Strong number.",
                statement: "A Strong Number is a number in which the sum of the factorial of the digits is equal to the number itself. (e.g., 145 = 1! + 4! + 5!)",
                inputFormat: "An integer.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "145", output: "Yes" }],
                solution: `#include <stdio.h>

int main() {
    int num, originalNum, remainder, sum = 0;
    scanf("%d", &num);
    originalNum = num;
    while (originalNum > 0) {
        remainder = originalNum % 10;
        int fact = 1;
        for (int i = 1; i <= remainder; i++) {
            fact *= i;
        }
        sum += fact;
        originalNum /= 10;
    }
    if (sum == num) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "The program iterates through each digit. For each digit, it calculates its factorial using a nested loop and adds it to the total sum. Finally, it compares the sum with the original number."
            },
            {
                id: "c-s5-q9",
                title: "Sum of digits",
                description: "Find the sum of the digits of a number.",
                statement: "Calculate the sum of the digits of an integer.",
                inputFormat: "A single integer.",
                outputFormat: "The sum of digits.",
                testCases: [{ input: "12345", output: "15" }],
                solution: `#include <stdio.h>

int main() {
    int n, sum = 0, remainder;
    scanf("%d", &n);
    while (n != 0) {
        remainder = n % 10;
        sum += remainder;
        n /= 10;
    }
    printf("%d", sum);
    return 0;
}`,
                explanation: "The `while` loop extracts the last digit using `n % 10` and adds it to `sum`. Then it removes the last digit using `n / 10`. This continues until the number becomes 0."
            },
            {
                id: "c-s5-q10",
                title: "Product of digits",
                description: "Find the product of the digits of a number.",
                statement: "Calculate the product of the digits of an integer.",
                inputFormat: "A single integer.",
                outputFormat: "The product of digits.",
                testCases: [{ input: "123", output: "6" }],
                solution: `#include <stdio.h>

int main() {
    int n, product = 1, remainder;
    scanf("%d", &n);
    if (n == 0) {
        product = 0;
    } else {
        while (n != 0) {
            remainder = n % 10;
            product *= remainder;
            n /= 10;
        }
    }
    printf("%d", product);
    return 0;
}`,
                explanation: "Initialize `product` to 1. Loop through each digit, multiplying it with the `product`. An edge case for an input of 0 is handled."
            },
            {
                id: "c-s5-q11",
                title: "Fibonacci series",
                description: "Generate the Fibonacci series up to n terms.",
                statement: "Write a program to generate the Fibonacci series up to `n` terms.",
                inputFormat: "An integer `n`.",
                outputFormat: "The first `n` Fibonacci numbers, separated by spaces.",
                testCases: [{ input: "10", output: "0 1 1 2 3 5 8 13 21 34" }],
                solution: `#include <stdio.h>

int main() {
    int i, n, t1 = 0, t2 = 1, nextTerm;
    scanf("%d", &n);
    for (i = 1; i <= n; ++i) {
        printf("%d ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    return 0;
}`,
                explanation: "We start with `t1=0` and `t2=1`. The `for` loop runs `n` times. In each iteration, we print `t1`, then calculate the next term, and update `t1` and `t2` for the next iteration."
            },
            {
                id: "c-s5-q12",
                title: "Print even numbers in range",
                description: "Print all even numbers in a given range.",
                statement: "Print all even numbers between 1 and N (inclusive).",
                inputFormat: "An integer N.",
                outputFormat: "Even numbers separated by spaces.",
                testCases: [{ input: "10", output: "2 4 6 8 10" }],
                solution: `#include <stdio.h>

int main() {
    int n, i;
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            printf("%d ", i);
        }
    }
    return 0;
}`,
                explanation: "The loop iterates from 1 to N. An `if` statement inside the loop checks if the current number `i` is divisible by 2. If it is, the number is printed."
            },
            {
                id: "c-s5-q13",
                title: "Print odd numbers in range",
                description: "Print all odd numbers in a given range.",
                statement: "Print all odd numbers between 1 and N (inclusive).",
                inputFormat: "An integer N.",
                outputFormat: "Odd numbers separated by spaces.",
                testCases: [{ input: "10", output: "1 3 5 7 9" }],
                solution: `#include <stdio.h>

int main() {
    int n, i;
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            printf("%d ", i);
        }
    }
    return 0;
}`,
                explanation: "The loop iterates from 1 to N. An `if` statement checks if the current number `i` is NOT divisible by 2. If the condition is true, the number is printed."
            },
            {
                id: "c-s5-q14",
                title: "Power calculation using loop",
                description: "Calculate power using a loop.",
                statement: "This is a duplicate of a problem in the Operators section.",
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
                explanation: "We initialize `result` to 1. A `while` loop runs `exp` times, multiplying the `result` by the `base` in each iteration."
            },
            {
                id: "c-s5-q15",
                title: "Prime number check",
                description: "Check if a number is prime.",
                statement: "A prime number is greater than 1 and has no divisors other than 1 and itself.",
                inputFormat: "A single integer.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "7", output: "Yes" }, { input: "10", output: "No" }],
                solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n, i, flag = 0;
    scanf("%d", &n);
    if (n == 0 || n == 1) flag = 1;
    for (i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "This is an optimized version of the prime check. The loop only needs to check for factors up to the square root of the number. A flag is used to track if a factor is found."
            },
            {
                id: "c-s5-q16",
                title: "Print all primes in range",
                description: "Find all prime numbers between two numbers.",
                statement: "Print all prime numbers between two given integers.",
                inputFormat: "Two integers, low and high.",
                outputFormat: "Prime numbers in the range, separated by spaces.",
                testCases: [{ input: "10 30", output: "11 13 17 19 23 29" }],
                solution: `#include <stdio.h>
#include <math.h>

int main() {
    int low, high, i, flag;
    scanf("%d %d", &low, &high);
    while (low < high) {
        flag = 0;
        if (low <= 1) {
            ++low;
            continue;
        }
        for (i = 2; i <= sqrt(low); ++i) {
            if (low % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) printf("%d ", low);
        ++low;
    }
    return 0;
}`,
                explanation: "The outer `while` loop iterates through every number from `low` to `high`. Inside this loop, we have the logic to check if the current number is prime. If it is, we print it."
            },
            {
                id: "c-s5-q17",
                title: "GCD of two numbers",
                description: "Find the Greatest Common Divisor.",
                statement: "Find the GCD of two numbers using the Euclidean algorithm.",
                inputFormat: "Two integers.",
                outputFormat: "The GCD.",
                testCases: [{ input: "48 18", output: "6" }],
                solution: `#include <stdio.h>

int main() {
    int n1, n2;
    scanf("%d %d", &n1, &n2);
    while(n1 != n2) {
        if(n1 > n2) n1 -= n2;
        else n2 -= n1;
    }
    printf("%d", n1);
    return 0;
}`,
                explanation: "This is a simple iterative implementation of the Euclidean algorithm by subtraction. The loop continues until both numbers are equal, which will be their GCD."
            },
            {
                id: "c-s5-q18",
                title: "LCM of two numbers",
                description: "Find the Least Common Multiple.",
                statement: "Find the LCM of two integers. Formula: `(a * b) / gcd(a, b)`.",
                inputFormat: "Two integers.",
                outputFormat: "The LCM.",
                testCases: [{ input: "15 20", output: "60" }],
                solution: `#include <stdio.h>

int main() {
    int n1, n2, i, gcd, lcm;
    scanf("%d %d", &n1, &n2);
    for(i=1; i <= n1 && i <= n2; ++i) {
        if(n1%i==0 && n2%i==0) gcd = i;
    }
    lcm = (n1 * n2) / gcd;
    printf("%d", lcm);
    return 0;
}`,
                explanation: "We first calculate the GCD of the two numbers by iterating up to the smaller of the two numbers. Then, we apply the formula `lcm = (a * b) / gcd`."
            },
            {
                id: "c-s5-q19",
                title: "Decimal to binary",
                description: "Convert a decimal number to binary.",
                statement: "Convert a given decimal integer to its binary representation.",
                inputFormat: "A single integer.",
                outputFormat: "The binary string.",
                testCases: [{ input: "13", output: "1101" }],
                solution: `#include <stdio.h>

int main() {
    int n, binaryNum[32], i = 0;
    scanf("%d", &n);
    if (n == 0) {
        printf("0");
        return 0;
    }
    while (n > 0) {
        binaryNum[i] = n % 2;
        n = n / 2;
        i++;
    }
    for (int j = i - 1; j >= 0; j--)
        printf("%d", binaryNum[j]);
    return 0;
}`,
                explanation: "The program repeatedly takes the modulus by 2 (which gives the next binary digit) and then divides the number by 2. The digits are stored in an array and then printed in reverse order to get the correct binary representation."
            },
            {
                id: "c-s5-q20",
                title: "Binary to decimal",
                description: "Convert a binary number to decimal.",
                statement: "Convert a given binary number (as an integer) to its decimal equivalent.",
                inputFormat: "A single binary number (e.g., 1101).",
                outputFormat: "The decimal integer.",
                testCases: [{ input: "1101", output: "13" }],
                solution: `#include <stdio.h>
#include <math.h>

int main() {
    long long n;
    int dec = 0, i = 0, rem;
    scanf("%lld", &n);
    while (n != 0) {
        rem = n % 10;
        n /= 10;
        dec += rem * pow(2, i);
        ++i;
    }
    printf("%d", dec);
    return 0;
}`,
                explanation: "The program iterates through each digit of the binary number from right to left. If a digit is 1, it adds the corresponding power of 2 (2^i) to the decimal total."
            }
        ]
    },
    {
        category: "SECTION 6 — Pattern Printing",
        problems: [
            {
                id: "c-s6-q1",
                title: "Square star pattern",
                description: "Print a square of stars.",
                statement: "Print a square of stars of size N x N.",
                inputFormat: "A single integer N.",
                outputFormat: "An N x N square of stars.",
                testCases: [{ input: "5", output: "*****\n*****\n*****\n*****\n*****" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Nested loops are used. The outer loop handles rows, and the inner loop handles columns. For each row, the inner loop prints `n` stars."
            },
            {
                id: "c-s6-q2",
                title: "Rectangle star pattern",
                description: "Print a rectangle of stars.",
                statement: "Print a rectangle of stars of size R x C.",
                inputFormat: "Two integers: rows R and columns C.",
                outputFormat: "An R x C rectangle of stars.",
                testCases: [{ input: "4 6", output: "******\n******\n******\n******" }],
                solution: `#include <stdio.h>
int main() {
    int rows, cols;
    scanf("%d %d", &rows, &cols);
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Similar to the square, but the outer loop runs `rows` times and the inner loop runs `cols` times."
            },
            {
                id: "c-s6-q3",
                title: "Right triangle star pattern",
                description: "Print a right-angled triangle.",
                statement: "Print a right-angled triangle of stars with height N.",
                inputFormat: "An integer N.",
                outputFormat: "A star pattern.",
                testCases: [{ input: "5", output: "*\n**\n***\n****\n*****" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The key is the inner loop's condition `j <= i`. For the first row (i=1), it runs once. For the second row (i=2), it runs twice, creating the triangle shape."
            },
            {
                id: "c-s6-q4",
                title: "Inverted right triangle pattern",
                description: "Print an inverted right triangle.",
                statement: "Print an inverted right-angled triangle of stars with height N.",
                inputFormat: "An integer N.",
                outputFormat: "A star pattern.",
                testCases: [{ input: "5", output: "*****\n****\n***\n**\n*" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The outer loop runs in reverse, from `n` down to 1, causing the number of stars printed by the inner loop to decrease with each row."
            },
            {
                id: "c-s6-q5",
                title: "Mirrored right triangle pattern",
                description: "Print a right-aligned right triangle.",
                statement: "Print a right-angled triangle that is aligned to the right.",
                inputFormat: "An integer N.",
                outputFormat: "A star pattern.",
                testCases: [{ input: "5", output: "    *\n   **\n  ***\n ****\n*****" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        for (int k = 1; k <= i; k++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This requires two inner loops. The first inner loop prints the leading spaces (`n - i` spaces for row `i`), and the second inner loop prints the stars."
            },
            {
                id: "c-s6-q6",
                title: "Floyd's Triangle",
                description: "Print Floyd's Triangle.",
                statement: "Print Floyd's Triangle, a right-angled triangle using consecutive natural numbers.",
                inputFormat: "An integer N for the number of rows.",
                outputFormat: "Floyd's Triangle.",
                testCases: [{ input: "4", output: "1 \n2 3 \n4 5 6 \n7 8 9 10 \n" }],
                solution: `#include <stdio.h>
int main() {
    int n, number = 1;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", number);
            number++;
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "A separate counter variable `number` is initialized to 1. Inside the inner loop, this counter is printed and then incremented, ensuring the numbers continue sequentially across all rows."
            },
            {
                id: "c-s6-q7",
                title: "Pascal's Triangle",
                description: "Print Pascal's triangle.",
                statement: "Print Pascal's triangle up to N rows.",
                inputFormat: "An integer N.",
                outputFormat: "Pascal's triangle.",
                testCases: [{ input: "5", output: "1 \n1 1 \n1 2 1 \n1 3 3 1 \n1 4 6 4 1 \n" }],
                solution: `#include <stdio.h>
int main() {
    int rows, coef = 1, space, i, j;
    scanf("%d", &rows);
    for (i = 0; i < rows; i++) {
        for (space = 1; space <= rows - i; space++)
            printf("  ");
        for (j = 0; j <= i; j++) {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef * (i - j + 1) / j;
            printf("%4d", coef);
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This solution calculates the coefficients for each row using the combination formula C(n,k) = C(n, k-1) * (n-k+1)/k. It iterates through rows and columns, calculating and printing each coefficient."
            },
            {
                id: "c-s6-q8",
                title: "Number pyramid",
                description: "Print a pyramid of numbers.",
                statement: "Print a pyramid pattern where each row `i` contains the number `i` repeated.",
                inputFormat: "An integer N.",
                outputFormat: "A number pyramid pattern.",
                testCases: [{ input: "5", output: "    1\n   2 2\n  3 3 3\n 4 4 4 4\n5 5 5 5 5" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        for (int k = 1; k <= i; k++) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This uses two inner loops: one for printing leading spaces and another for printing the row number `i`, `i` times."
            },
            {
                id: "c-s6-q9",
                title: "Inverted number pyramid",
                description: "Print an inverted pyramid of numbers.",
                statement: "Print an inverted pyramid pattern of numbers.",
                inputFormat: "An integer N.",
                outputFormat: "An inverted number pyramid.",
                testCases: [{ input: "5", output: "5 5 5 5 5\n 4 4 4 4\n  3 3 3\n   2 2\n    1" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        for (int k = 1; k <= i; k++) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Similar to the number pyramid, but the outer loop runs in reverse from `n` down to 1."
            },
            {
                id: "c-s6-q10",
                title: "Diamond star pattern",
                description: "Print a diamond shape made of stars.",
                statement: "Print a star diamond pattern of a given size N (rows in top half).",
                inputFormat: "An integer N.",
                outputFormat: "A diamond pattern.",
                testCases: [{ input: "4", output: "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n" }],
                solution: `#include <stdio.h>
int main() {
    int n, i, j;
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i; j++) printf(" ");
        for (j = 1; j <= 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    for (i = n - 1; i >= 1; i--) {
        for (j = 1; j <= n - i; j++) printf(" ");
        for (j = 1; j <= 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The diamond is made of two parts: an upper pyramid and a lower, inverted pyramid. Two separate sets of loops are used to print each part."
            },
            {
                id: "c-s6-q11",
                title: "Alphabet increasing pattern",
                description: "Print a triangle with increasing alphabets.",
                statement: "Print a right-angled triangle with increasing alphabets in each row.",
                inputFormat: "An integer N.",
                outputFormat: "An alphabet pattern.",
                testCases: [{ input: "5", output: "A\nA B\nA B C\nA B C D\nA B C D E" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%c ", 'A' + j - 1);
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "We use character arithmetic. The ASCII value of `'A'` is used as a base, and we add the inner loop counter `j` to get the subsequent characters."
            },
            {
                id: "c-s6-q12",
                title: "Alphabet pyramid",
                description: "Print a pyramid of alphabets.",
                statement: "Print a pyramid pattern where each row `i` contains the `i`-th alphabet repeated.",
                inputFormat: "An integer N.",
                outputFormat: "An alphabet pyramid.",
                testCases: [{ input: "5", output: "    A\n   B B\n  C C C\n D D D D\nE E E E E" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        for (int k = 1; k <= i; k++) {
            printf("%c ", 'A' + i - 1);
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Similar to the number pyramid, but instead of printing the number `i`, we print the character corresponding to `'A' + i - 1`."
            },
            {
                id: "c-s6-q13",
                title: "Hollow square pattern",
                description: "Print a hollow square.",
                statement: "Print a hollow square of stars of size N x N.",
                inputFormat: "An integer N.",
                outputFormat: "A hollow square.",
                testCases: [{ input: "5", output: "*****\n*   *\n*   *\n*   *\n*****" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n)
                printf("*");
            else
                printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The inner loop checks if the current position is on the border (first/last row or first/last column). If it is, it prints a star; otherwise, a space."
            },
            {
                id: "c-s6-q14",
                title: "Hollow diamond pattern",
                description: "Print a hollow diamond.",
                statement: "Print a hollow diamond pattern of stars.",
                inputFormat: "An integer N.",
                outputFormat: "A hollow diamond.",
                testCases: [{ input: "5", output: "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        printf("*");
        if (i > 1) {
            for (int k = 1; k <= 2 * i - 3; k++) printf(" ");
            printf("*");
        }
        printf("\\n");
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        printf("*");
        if (i > 1) {
            for (int k = 1; k <= 2 * i - 3; k++) printf(" ");
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This pattern prints two stars per row, with an increasing number of spaces between them. The logic is split into an upper and lower half."
            },
            {
                id: "c-s6-q15",
                title: "Butterfly pattern",
                description: "Print a butterfly shape of stars.",
                statement: "Print a butterfly star pattern of size N.",
                inputFormat: "An integer N.",
                outputFormat: "A butterfly pattern.",
                testCases: [{ input: "4", output: "*      *\n**    **\n***  ***\n********\n********\n***  ***\n**    **\n*      *" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    // Upper part
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("*");
        for (int j = 1; j <= 2 * (n - i); j++) printf(" ");
        for (int j = 1; j <= i; j++) printf("*");
        printf("\\n");
    }
    // Lower part
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) printf("*");
        for (int j = 1; j <= 2 * (n - i); j++) printf(" ");
        for (int j = 1; j <= i; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The butterfly is symmetric. Each half (upper and lower) consists of a left triangle of stars, a middle triangle of spaces, and a right triangle of stars."
            },
            {
                id: "c-s6-q16",
                title: "Zig-zag pattern",
                description: "Print a zig-zag star pattern.",
                statement: "Print a zig-zag star pattern with N rows.",
                inputFormat: "An integer N.",
                outputFormat: "A zig-zag pattern.",
                testCases: [{ input: "3", output: "  *   *  \n * * * * \n*   *   *" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= n; j++) {
            if (((i + j) % 4 == 0) || (i == 2 && j % 4 == 0))
                printf("* ");
            else
                printf("  ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This specific zig-zag pattern is created by printing stars at positions where the sum of row and column indices follows a certain modular arithmetic rule, creating diagonal lines."
            },
            {
                id: "c-s6-q17",
                title: "Sandglass pattern",
                description: "Print a sandglass shape of stars.",
                statement: "Print a sandglass star pattern of size N.",
                inputFormat: "An integer N.",
                outputFormat: "A sandglass pattern.",
                testCases: [{ input: "5", output: "*********\n *******\n  *****\n   ***\n    *\n   ***\n  *****\n *******\n*********" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\\n");
    }
    for (int i = 2; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
                explanation: "A sandglass is an inverted pyramid followed by a regular pyramid, starting from the second row."
            },
            {
                id: "c-s6-q18",
                title: "Binary triangle",
                description: "Print a triangle of 0s and 1s.",
                statement: "Print a right-angled triangle using alternating 0s and 1s.",
                inputFormat: "An integer N.",
                outputFormat: "A binary triangle.",
                testCases: [{ input: "5", output: "1\n0 1\n1 0 1\n0 1 0 1\n1 0 1 0 1" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if ((i + j) % 2 == 0)
                printf("1 ");
            else
                printf("0 ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The value (0 or 1) at each position is determined by the sum of its row and column indices. If the sum is even, print 1; if odd, print 0."
            },
            {
                id: "c-s6-q19",
                title: "Hollow pyramid pattern",
                description: "Print a hollow pyramid.",
                statement: "Print a hollow pyramid of stars.",
                inputFormat: "An integer N.",
                outputFormat: "A hollow pyramid.",
                testCases: [{ input: "5", output: "    *\n   * *\n  *   *\n *     *\n*********" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1 || i == n)
                printf("*");
            else
                printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This modifies the pyramid pattern. An `if` statement checks if the current position is the first star of the row, the last star of the row, or if it's the last row of the pyramid."
            },
            {
                id: "c-s6-q20",
                title: "Heart pattern",
                description: "Print a heart shape using stars.",
                statement: "Print a heart shape made of stars. The size can be fixed.",
                inputFormat: "No input, fixed size.",
                outputFormat: "A heart pattern.",
                testCases: [{ input: "", output: "  ***   ***  \n ******* ******* \n***************\n ************* \n  ***********  \n   *********   \n    *******    \n     *****     \n      ***      \n       *       " }],
                solution: `#include <stdio.h>
int main() {
    int n = 6; // Controls the size
    for (int i = n / 2; i <= n; i += 2) {
        for (int j = 1; j < n - i; j += 2) printf(" ");
        for (int j = 1; j <= i; j++) printf("*");
        for (int j = 1; j <= n - i; j++) printf(" ");
        for (int j = 1; j <= i; j++) printf("*");
        printf("\\n");
    }
    for (int i = n; i >= 1; i--) {
        for (int j = i; j < n; j++) printf(" ");
        for (int j = 1; j <= (i * 2) - 1; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
                explanation: "The heart shape is complex and is typically constructed in two parts: the top two curves (made from two small pyramids) and the bottom triangle (an inverted pyramid)."
            },
            {
                id: "c-s6-q21",
                title: "Palindromic number triangle",
                description: "Print a pyramid with palindromic numbers.",
                statement: "Print a pyramid where each row is a number palindrome.",
                inputFormat: "An integer N.",
                outputFormat: "A palindromic number pyramid.",
                testCases: [{ input: "5", output: "        1\n      1 2 1\n    1 2 3 2 1\n  1 2 3 4 3 2 1\n1 2 3 4 5 4 3 2 1" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= 2 * (n - i); j++) printf(" ");
        for (int k = 1; k <= i; k++) printf("%d ", k);
        for (int l = i - 1; l >= 1; l--) printf("%d ", l);
        printf("\\n");
    }
    return 0;
}`,
                explanation: "Each row requires three loops after the initial space loop: one to print numbers increasing up to the row number, and another to print numbers decreasing back to 1."
            },
            {
                id: "c-s6-q22",
                title: "Double triangle pattern",
                description: "Print two triangles.",
                statement: "Print a pattern of two right-angled triangles.",
                inputFormat: "An integer N.",
                outputFormat: "The pattern.",
                testCases: [{ input: "5", output: "*         *\n**       **\n***     ***\n****   ****\n***** *****" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("*");
        for (int j = 1; j <= 2 * (n - i); j++) printf(" ");
        for (int j = 1; j <= i; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This is the upper half of the Butterfly pattern. It consists of a left triangle of stars, a middle inverted triangle of spaces, and a right triangle of stars."
            },
            {
                id: "c-s6-q23",
                title: "X pattern",
                description: "Print an X shape of stars.",
                statement: "Print an X shape of stars of size N.",
                inputFormat: "An odd integer N.",
                outputFormat: "An X pattern.",
                testCases: [{ input: "5", output: "*   *\n * * \n  *  \n * * \n*   *" }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j || i + j == n - 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "A star is printed if the current position is on the main diagonal (`i == j`) or the anti-diagonal (`i + j == n - 1`)."
            },
            {
                id: "c-s6-q24",
                title: "Plus pattern",
                description: "Print a plus shape of stars.",
                statement: "Print a plus (+) shape of stars of size N.",
                inputFormat: "An odd integer N.",
                outputFormat: "A plus pattern.",
                testCases: [{ input: "5", output: "  *  \n  *  \n*****\n  *  \n  *  " }],
                solution: `#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    int mid = n / 2;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == mid || j == mid)
                printf("*");
            else
                printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "A star is printed if the current row or column is the middle row/column."
            },
            {
                id: "c-s6-q25",
                title: "Hollow rectangle pattern",
                description: "Print a hollow rectangle.",
                statement: "Print a hollow rectangle of stars of size R x C.",
                inputFormat: "Two integers: rows R and columns C.",
                outputFormat: "A hollow rectangle.",
                testCases: [{ input: "4 6", output: "******\n*    *\n*    *\n******" }],
                solution: `#include <stdio.h>
int main() {
    int rows, cols;
    scanf("%d %d", &rows, &cols);
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= cols; j++) {
            if (i == 1 || i == rows || j == 1 || j == cols)
                printf("*");
            else
                printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
                explanation: "This is the same logic as the hollow square, but applied to a rectangle with different dimensions for rows and columns."
            }
        ]
    }
]
