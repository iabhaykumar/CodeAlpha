import React from 'react';
import { ProblemCategory } from './types';

export const BASIC_CPP_PROBLEMS_4: ProblemCategory[] = [
  {
    category: "Basics (61-80)",
    problems: [
        {
            id: "basic-cpp-61",
            title: "Simple Calculator (menu-driven)",
            description: "+, -, *, / operations.",
            statement: "Create a simple calculator. Read two numbers and an operator (+, -, *, /), then perform the calculation.",
            inputFormat: "First number, operator, second number on a single line.",
            outputFormat: "The result of the calculation.",
            testCases: [{ input: "10 * 5", output: "50" }],
            solution: `#include <iostream>

int main() {
    double num1, num2;
    char op;
    std::cin >> num1 >> op >> num2;

    switch (op) {
        case '+':
            std::cout << num1 + num2;
            break;
        case '-':
            std::cout << num1 - num2;
            break;
        case '*':
            std::cout << num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                std::cout << num1 / num2;
            } else {
                std::cout << "Error: Division by zero!";
            }
            break;
        default:
            std::cout << "Error: Invalid operator!";
    }
    return 0;
}`,
            explanation: "A `switch` statement is used to select the correct operation based on the character input for the operator. It also includes a check to prevent division by zero."
        },
        {
            id: "basic-cpp-62",
            title: "Quadratic Equation Roots",
            description: "discriminant se roots compute karo.",
            statement: "Find the roots of a quadratic equation ax² + bx + c = 0. You need to calculate the discriminant (d = b² - 4ac) and then find the roots based on whether d is positive, zero, or negative.",
            inputFormat: "Three numbers: a, b, and c.",
            outputFormat: "The real roots of the equation.",
            testCases: [{ input: "1 -5 6", output: "Roots are real and different.\n3\n2" }],
            solution: `#include <iostream>
#include <cmath>

int main() {
    double a, b, c, discriminant, root1, root2;
    std::cin >> a >> b >> c;
    discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        root1 = (-b + sqrt(discriminant)) / (2*a);
        root2 = (-b - sqrt(discriminant)) / (2*a);
        std::cout << "Roots are real and different." << std::endl;
        std::cout << root1 << std::endl << root2 << std::endl;
    } else if (discriminant == 0) {
        root1 = -b / (2*a);
        std::cout << "Roots are real and same." << std::endl;
        std::cout << root1 << std::endl;
    } else {
        std::cout << "Roots are complex and different." << std::endl;
    }
    return 0;
}`,
            explanation: "The program first calculates the discriminant. If it's positive, there are two distinct real roots. If it's zero, there is one real root. If it's negative, the roots are complex (which this basic version just reports)."
        },
        {
            id: "basic-cpp-63",
            title: "Leap Year Range Count",
            description: "range me leap years count karo.",
            statement: "Count the number of leap years between two given years (inclusive).",
            inputFormat: "Two integers: start year and end year.",
            outputFormat: "The total count of leap years.",
            testCases: [{ input: "1999 2010", output: "3" }],
            solution: `#include <iostream>

bool isLeap(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int main() {
    int start, end, count = 0;
    std::cin >> start >> end;
    for (int y = start; y <= end; ++y) {
        if (isLeap(y)) {
            count++;
        }
    }
    std::cout << count;
    return 0;
}`,
            explanation: "A helper function `isLeap` is created to encapsulate the leap year logic. The main function then loops through the given range of years, calling the helper function for each year and incrementing a counter if it's a leap year."
        },
        {
            id: "basic-cpp-64",
            title: "Sum of Even/Odd Numbers in Range",
            description: "range ka even/odd sum.",
            statement: "Find the sum of all even and all odd numbers in a given range [L, R].",
            inputFormat: "Two integers: L and R.",
            outputFormat: "Two lines: sum of evens, then sum of odds.",
            testCases: [{ input: "1 10", output: "Even Sum: 30\nOdd Sum: 25" }],
            solution: `#include <iostream>

int main() {
    int l, r;
    std::cin >> l >> r;
    long long even_sum = 0, odd_sum = 0;
    for (int i = l; i <= r; ++i) {
        if (i % 2 == 0) {
            even_sum += i;
        } else {
            odd_sum += i;
        }
    }
    std::cout << "Even Sum: " << even_sum << std::endl;
    std::cout << "Odd Sum: " << odd_sum << std::endl;
    return 0;
}`,
            explanation: "The program iterates from the lower bound `L` to the upper bound `R`. In each iteration, it checks if the current number is even or odd using the modulus operator and adds it to the corresponding sum."
        },
        {
            id: "basic-cpp-65",
            title: "Armstrong Numbers in Range",
            description: "list of Armstrong numbers.",
            statement: "Find and print all Armstrong numbers within a given range.",
            inputFormat: "Two integers: start and end of the range.",
            outputFormat: "All Armstrong numbers in the range, separated by spaces.",
            testCases: [{ input: "100 500", output: "153 370 371 407 " }],
            solution: `#include <iostream>
#include <cmath>

int main() {
    int low, high;
    std::cin >> low >> high;
    for (int num = low; num <= high; ++num) {
        int originalNum = num;
        int n = 0;
        int temp = num;
        while(temp != 0) { temp /= 10; ++n; }
        
        int result = 0;
        temp = num;
        while (temp != 0) {
            int remainder = temp % 10;
            result += std::pow(remainder, n);
            temp /= 10;
        }
        
        if (result == num) {
            std::cout << num << " ";
        }
    }
    return 0;
}`,
            explanation: "The outer loop iterates through the range. For each number, the program first counts its number of digits. Then, it calculates the sum of its digits each raised to the power of the number of digits. If this sum equals the original number, it's an Armstrong number and is printed."
        },
        {
            id: "basic-cpp-66",
            title: "Find Factors of Number",
            description: "all divisors print karo.",
            statement: "Find all the factors (divisors) of a given number.",
            inputFormat: "A single integer.",
            outputFormat: "All factors of the number, separated by spaces.",
            testCases: [{ input: "24", output: "1 2 3 4 6 8 12 24 " }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    for (int i = 1; i <= n; ++i) {
        if (n % i == 0) {
            std::cout << i << " ";
        }
    }
    return 0;
}`,
            explanation: "A factor of a number `n` is any number that divides `n` with no remainder. The program iterates from 1 to `n` and uses the modulus operator (`%`) to check for divisibility."
        },
        {
            id: "basic-cpp-67",
            title: "Perfect Number Check",
            description: "sum of proper divisors equals n.",
            statement: "Check if a number is a Perfect Number. A perfect number is a positive integer that is equal to the sum of its proper positive divisors (the sum of its positive divisors, excluding the number itself). E.g., 6 = 1 + 2 + 3.",
            inputFormat: "A single integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "6", output: "Yes" }, { input: "12", output: "No" }],
            solution: `#include <iostream>

int main() {
    int n, sum = 0;
    std::cin >> n;
    for (int i = 1; i < n; ++i) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The program finds all proper divisors by looping from 1 up to `n-1`. It sums these divisors and then compares the sum to the original number."
        },
        {
            id: "basic-cpp-68",
            title: "Strong Number Check",
            description: "factorial of digits sum equals n.",
            statement: "A Strong Number is a number in which the sum of the factorial of its digits is equal to the number itself (e.g., 145 = 1! + 4! + 5!). Check if a number is strong.",
            inputFormat: "An integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "145", output: "Yes" }],
            solution: `#include <iostream>

long long factorial(int n) {
    if (n == 0) return 1;
    long long fact = 1;
    for (int i = 1; i <= n; ++i) fact *= i;
    return fact;
}

int main() {
    int num, originalNum;
    std::cin >> num;
    originalNum = num;
    long long sum_of_facts = 0;
    while (num > 0) {
        sum_of_facts += factorial(num % 10);
        num /= 10;
    }
    if (sum_of_facts == originalNum) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The program iterates through each digit of the number. For each digit, it calculates its factorial using a helper function and adds it to a running total. Finally, it compares this total sum with the original number."
        },
        {
            id: "basic-cpp-69",
            title: "Happy Number (basic)",
            description: "iterate squares of digits check eventually 1.",
            statement: "A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit. If the process results in an endless cycle of numbers containing 4, the number is an unhappy number. Check if a number is happy.",
            inputFormat: "A single integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "19", output: "Yes" }],
            solution: `#include <iostream>

int sum_sq_digits(int n) {
    int sum = 0;
    while(n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}

int main() {
    int n;
    std::cin >> n;
    int slow = n, fast = n;
    do {
        slow = sum_sq_digits(slow);
        fast = sum_sq_digits(sum_sq_digits(fast));
    } while (slow != fast);

    if (slow == 1) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "This problem can be solved by detecting a cycle. We repeatedly calculate the sum of squared digits. If the number becomes 1, it's a happy number. If it enters a cycle, it's not. This solution uses the Floyd's cycle-finding algorithm (the tortoise and the hare) to detect a cycle efficiently without storing all previous numbers."
        },
        {
            id: "basic-cpp-70",
            title: "Convert Decimal to Binary",
            description: "binary representation.",
            statement: "Convert a given decimal integer to its binary representation.",
            inputFormat: "A single integer.",
            outputFormat: "The binary string.",
            testCases: [{ input: "13", output: "1101" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    if (n == 0) {
        std::cout << "0";
        return 0;
    }
    std::string binary;
    while (n > 0) {
        binary += std::to_string(n % 2);
        n /= 2;
    }
    std::reverse(binary.begin(), binary.end());
    std::cout << binary;
    return 0;
}`,
            explanation: "The program repeatedly takes the modulus by 2 (which gives the next binary digit) and then divides the number by 2. The digits are appended to a string, which is then reversed at the end to get the correct binary representation."
        },
        {
            id: "basic-cpp-71",
            title: "Convert Binary to Decimal",
            description: "decimal conversion.",
            statement: "Convert a given binary number (as a string) to its decimal equivalent.",
            inputFormat: "A binary string.",
            outputFormat: "The decimal integer.",
            testCases: [{ input: "1101", output: "13" }],
            solution: `#include <iostream>
#include <string>
#include <cmath>

int main() {
    std::string bin;
    std::cin >> bin;
    int dec = 0;
    int power = 0;
    for (int i = bin.length() - 1; i >= 0; --i) {
        if (bin[i] == '1') {
            dec += std::pow(2, power);
        }
        power++;
    }
    std::cout << dec;
    return 0;
}`,
            explanation: "The program iterates through the binary string from right to left. If a character is '1', it adds the corresponding power of 2 to the decimal total. The power starts at 0 and increments for each digit."
        },
        {
            id: "basic-cpp-72",
            title: "Check Power of Two",
            description: "n power of two?",
            statement: "Check if a given number is a power of two.",
            inputFormat: "A single integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "16", output: "Yes" }, { input: "18", output: "No" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    // A number is a power of two if it's > 0 and has only one bit set.
    // n & (n - 1) clears the least significant bit. If the result is 0,
    // it means there was only one bit set to begin with.
    if (n > 0 && (n & (n - 1)) == 0) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "This solution uses a clever bitwise trick. A power of two in binary is a 1 followed by all 0s (e.g., 8 is 1000). Subtracting 1 from it results in a number with all 0s followed by all 1s (e.g., 7 is 0111). Performing a bitwise AND between these two numbers will always result in 0 if the original number was a power of two."
        },
        {
            id: "basic-cpp-73",
            title: "Sum of Prime Numbers up to N",
            description: "primes ka sum.",
            statement: "Calculate the sum of all prime numbers up to a given integer N.",
            inputFormat: "An integer N.",
            outputFormat: "The sum of primes.",
            testCases: [{ input: "10", output: "17" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;
    std::vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
    long long sum = 0;
    for (int p = 2; p <= n; p++)
        if (is_prime[p])
            sum += p;
    std::cout << sum;
    return 0;
}`,
            explanation: "This program uses the Sieve of Eratosthenes to efficiently find all prime numbers up to N. It creates a boolean array `is_prime` and marks all numbers as prime initially. It then iterates through the numbers, and for each prime it finds, it marks all of its multiples as not prime. Finally, it sums up all the numbers that are still marked as prime."
        },
        {
            id: "basic-cpp-74",
            title: "Sum of Even Fibonacci Numbers up to N",
            description: "specific sum.",
            statement: "Find the sum of all even-valued terms in the Fibonacci sequence whose values do not exceed N.",
            inputFormat: "An integer N.",
            outputFormat: "The sum of even Fibonacci numbers.",
            testCases: [{ input: "100", output: "44" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    long long sum = 0;
    int a = 1, b = 2;
    while (b <= n) {
        if (b % 2 == 0) {
            sum += b;
        }
        int temp = a + b;
        a = b;
        b = temp;
    }
    std::cout << sum;
    return 0;
}`,
            explanation: "The program generates Fibonacci numbers iteratively. In each step, it checks if the current Fibonacci number is even and below the limit N. If it is, it's added to the sum."
        },
        {
            id: "basic-cpp-75",
            title: "Count Set Bits",
            description: "number ke set bits count karo.",
            statement: "Count the number of set bits (1s) in the binary representation of an integer.",
            inputFormat: "A single integer.",
            outputFormat: "The count of set bits.",
            testCases: [{ input: "13", output: "3" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    int count = 0;
    while (n > 0) {
        // This operation clears the least significant bit
        n &= (n - 1);
        count++;
    }
    std::cout << count;
    return 0;
}`,
            explanation: "This uses Brian Kernighan's algorithm. The expression `n & (n - 1)` unsets the rightmost set bit of `n`. The loop continues until `n` becomes 0. The number of times the loop runs is equal to the number of set bits."
        },
        {
            id: "basic-cpp-76",
            title: "Check Palindromic String by Words",
            description: "words reversed sequence check.",
            statement: "Check if a sentence is a palindrome by words (e.g., 'I am am I').",
            inputFormat: "A single line of text.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "you can you", output: "Yes" }],
            solution: `#include <iostream>
#include <string>
#include <vector>
#include <sstream>

int main() {
    std::string line;
    std::getline(std::cin, line);
    std::stringstream ss(line);
    std::string word;
    std::vector<std::string> words;
    while(ss >> word) {
        words.push_back(word);
    }
    
    int i = 0, j = words.size() - 1;
    bool is_palindrome = true;
    while(i < j) {
        if(words[i] != words[j]) {
            is_palindrome = false;
            break;
        }
        i++;
        j--;
    }
    
    if(is_palindrome) std::cout << "Yes";
    else std::cout << "No";
    
    return 0;
}`,
            explanation: "The program first splits the sentence into a vector of words. Then, it uses a two-pointer approach to check if the sequence of words is palindromic by comparing words from the beginning and the end."
        },
        {
            id: "basic-cpp-77",
            title: "Simple Interest Table",
            description: "multiple years interest table.",
            statement: "Given Principal and Rate, generate a table of simple interest for years 1 through 10.",
            inputFormat: "Principal and Rate.",
            outputFormat: "A table of interest for 10 years.",
            testCases: [{ input: "1000 5", output: "Year 1: 50.00\nYear 2: 100.00\n..." }],
            solution: `#include <iostream>
#include <iomanip>

int main() {
    double p, r;
    std::cin >> p >> r;
    std::cout << std::fixed << std::setprecision(2);
    for (int t = 1; t <= 10; ++t) {
        double si = (p * r * t) / 100;
        std::cout << "Year " << t << ": " << si << std::endl;
    }
    return 0;
}`,
            explanation: "A `for` loop iterates from year 1 to 10. In each iteration, it calculates and prints the simple interest for that specific number of years."
        },
        {
            id: "basic-cpp-78",
            title: "ASCII Value of Character",
            description: "print ASCII code.",
            statement: "Read a character and print its ASCII value.",
            inputFormat: "A single character.",
            outputFormat: "The integer ASCII value.",
            testCases: [{ input: "a", output: "97" }],
            solution: `#include <iostream>

int main() {
    char c;
    std::cin >> c;
    std::cout << static_cast<int>(c);
    return 0;
}`,
            explanation: "A `char` is an integral type. To explicitly print its integer value instead of the character representation, we cast it to an `int` using `static_cast`."
        },
        {
            id: "basic-cpp-79",
            title: "Character is Alphabet or Not",
            description: "alpha check.",
            statement: "Check if a given character is an alphabet (a-z, A-Z).",
            inputFormat: "A single character.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "A", output: "Yes" }, { input: "%", output: "No" }],
            solution: `#include <iostream>
#include <cctype>

int main() {
    char c;
    std::cin >> c;
    if (isalpha(c)) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The `<cctype>` header provides the `isalpha()` function, which returns a non-zero value (true) if the character is an alphabet, and 0 (false) otherwise."
        },
        {
            id: "basic-cpp-80",
            title: "Vowel or Consonant",
            description: "single-char vowel check.",
            statement: "Check if a character is a vowel ('a', 'e', 'i', 'o', 'u'), case-insensitively.",
            inputFormat: "A single character.",
            outputFormat: "'Vowel' or 'Consonant'.",
            testCases: [{ input: "E", output: "Vowel" }],
            solution: `#include <iostream>
#include <cctype>

int main() {
    char c;
    std::cin >> c;
    char lower_c = tolower(c);
    if (isalpha(lower_c)) {
        if (lower_c == 'a' || lower_c == 'e' || lower_c == 'i' || lower_c == 'o' || lower_c == 'u') {
            std::cout << "Vowel";
        } else {
            std::cout << "Consonant";
        }
    } else {
        std::cout << "Not an alphabet";
    }
    return 0;
}`,
            explanation: "The program first converts the character to lowercase. It then checks if it's one of the five vowels. It also includes a check to ensure the character is an alphabet first."
        }
    ]
  }
];