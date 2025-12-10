import React from 'react';
import { ProblemCategory } from './types';

export const BASIC_CPP_PROBLEMS_2: ProblemCategory[] = [
  {
    category: "Basics (21-40)",
    problems: [
        // This is a continuation, so no new category object is needed.
        // It will be merged in index.ts
        {
            id: "basic-cpp-21",
            title: "Calculate Power (a^b)",
            description: "exponentiation (loop).",
            statement: "Calculate the power of a number. Given a base and an exponent, calculate `base^exponent` without using the `pow()` function.",
            inputFormat: "Two integers: base and exponent.",
            outputFormat: "The result.",
            testCases: [{ input: "2 5", output: "32" }],
            solution: `#include <iostream>

int main() {
    int base, exp;
    long long result = 1;
    std::cin >> base >> exp;
    for (int i = 0; i < exp; ++i) {
        result *= base;
    }
    std::cout << result;
    return 0;
}`,
            explanation: "We initialize `result` to 1. A `for` loop runs `exp` times, multiplying the `result` by the `base` in each iteration. `long long` is used for the result to handle potentially large numbers."
        },
        {
            id: "basic-cpp-22",
            title: "Check Prime Number",
            description: "given n prime hai ya nahi.",
            statement: "Check if a given number is a prime number. A prime number is greater than 1 and has no positive divisors other than 1 and itself.",
            inputFormat: "A single integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "13", output: "Yes" }, { input: "12", output: "No" }],
            solution: `#include <iostream>
#include <cmath>

int main() {
    int n;
    std::cin >> n;
    bool is_prime = true;

    if (n <= 1) {
        is_prime = false;
    } else {
        for (int i = 2; i <= sqrt(n); ++i) {
            if (n % i == 0) {
                is_prime = false;
                break;
            }
        }
    }

    if (is_prime) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The program first handles the edge cases (numbers <= 1). Then, it iterates from 2 up to the square root of the number. If it finds any factor that divides the number perfectly, it sets a flag and breaks the loop. This is an efficient way to check for primality."
        },
        {
            id: "basic-cpp-23",
            title: "List Primes in Range",
            description: "[L,R] ke primes print karo.",
            statement: "Print all prime numbers between two given integers (inclusive).",
            inputFormat: "Two integers, `low` and `high`.",
            outputFormat: "Prime numbers in the range, separated by spaces.",
            testCases: [{ input: "10 30", output: "11 13 17 19 23 29 " }],
            solution: `#include <iostream>
#include <cmath>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int low, high;
    std::cin >> low >> high;
    for (int i = low; i <= high; ++i) {
        if (isPrime(i)) {
            std::cout << i << " ";
        }
    }
    return 0;
}`,
            explanation: "This solution uses a helper function `isPrime` to check each number. The main function then iterates through the range from `low` to `high` and calls the `isPrime` function for each number. If it returns true, the number is printed."
        },
        {
            id: "basic-cpp-24",
            title: "Reverse a Number",
            description: "integer digits reverse karo.",
            statement: "Write a program to reverse the digits of a given integer.",
            inputFormat: "A single integer.",
            outputFormat: "The reversed integer.",
            testCases: [{ input: "12345", output: "54321" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    int reversed_number = 0, remainder;
    while(n != 0) {
        remainder = n % 10;
        reversed_number = reversed_number * 10 + remainder;
        n /= 10;
    }
    std::cout << reversed_number;
    return 0;
}`,
            explanation: "The program uses a `while` loop. In each step, it gets the last digit using the modulus operator (`% 10`), adds it to the end of the `reversed_number`, and then removes the last digit from the original number using integer division (`/ 10`)."
        },
        {
            id: "basic-cpp-25",
            title: "Palindrome Number",
            description: "number palindrome hai ya nahi.",
            statement: "Check if a number is a palindrome (reads the same forwards and backwards).",
            inputFormat: "A single integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "121", output: "Yes" }, { input: "123", output: "No" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    int original_number = n;
    int reversed_number = 0, remainder;
    while(n != 0) {
        remainder = n % 10;
        reversed_number = reversed_number * 10 + remainder;
        n /= 10;
    }
    if (original_number == reversed_number) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "First, we save the original number. Then, we reverse the number using the standard algorithm. Finally, we compare the reversed number with the saved original number."
        },
        {
            id: "basic-cpp-26",
            title: "Sum of Digits",
            description: "digits ka sum nikaalo.",
            statement: "Calculate the sum of the digits of an integer.",
            inputFormat: "A single integer.",
            outputFormat: "The sum of the digits.",
            testCases: [{ input: "12345", output: "15" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    int sum = 0;
    while (n != 0) {
        sum += n % 10;
        n /= 10;
    }
    std::cout << sum;
    return 0;
}`,
            explanation: "The `while` loop extracts the last digit using `n % 10` and adds it to the `sum`. Then it removes the last digit using `n / 10`. This process continues until the number becomes 0."
        },
        {
            id: "basic-cpp-27",
            title: "Count Digits",
            description: "kitne digits hain batao.",
            statement: "Count the total number of digits in an integer.",
            inputFormat: "A single integer.",
            outputFormat: "The number of digits.",
            testCases: [{ input: "12345", output: "5" }, { input: "0", output: "1" }],
            solution: `#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n == 0) {
        std::cout << 1;
        return 0;
    }
    int count = 0;
    int temp = n > 0 ? n : -n; // Handle negative numbers
    while (temp != 0) {
        temp /= 10;
        count++;
    }
    std::cout << count;
    return 0;
}`,
            explanation: "We handle the edge case of 0 separately. For other numbers, a `while` loop runs, performing integer division by 10 in each iteration (which removes the last digit) and incrementing a counter. We use a temporary variable to handle negative numbers correctly."
        },
        {
            id: "basic-cpp-28",
            title: "Armstrong Number (3-digit)",
            description: "Armstrong check.",
            statement: "An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Check if a given 3-digit number is an Armstrong number.",
            inputFormat: "A three-digit integer.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "153", output: "Yes" }, { input: "123", output: "No" }],
            solution: `#include <iostream>

int main() {
    int num, originalNum, remainder, result = 0;
    std::cin >> num;
    originalNum = num;

    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += remainder * remainder * remainder;
        originalNum /= 10;
    }

    if (result == num)
        std::cout << "Yes";
    else
        std::cout << "No";
    return 0;
}`,
            explanation: "The program iterates through each digit of the number, calculates its cube, and adds it to a `result` sum. Finally, it compares this `result` with the original number."
        },
        {
            id: "basic-cpp-29",
            title: "Fibonacci Series (N terms)",
            description: "first N Fibonacci numbers print karo.",
            statement: "Write a program to generate and print the Fibonacci series up to `N` terms.",
            inputFormat: "An integer `N`.",
            outputFormat: "The first `N` Fibonacci numbers, separated by spaces.",
            testCases: [{ input: "10", output: "0 1 1 2 3 5 8 13 21 34 " }],
            solution: `#include <iostream>

int main() {
    int n, t1 = 0, t2 = 1, nextTerm = 0;
    std::cin >> n;
    for (int i = 1; i <= n; ++i) {
        if(i == 1) {
            std::cout << t1 << " ";
            continue;
        }
        if(i == 2) {
            std::cout << t2 << " ";
            continue;
        }
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        std::cout << nextTerm << " ";
    }
    return 0;
}`,
            explanation: "We start with `t1=0` and `t2=1`. The `for` loop runs `N` times. In each iteration, we calculate the next term as the sum of the previous two, print it, and then update the previous two terms for the next iteration."
        },
        {
            id: "basic-cpp-30",
            title: "GCD of Two Numbers",
            description: "Euclidean algorithm se GCD nikaalo.",
            statement: "Find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.",
            inputFormat: "Two integers.",
            outputFormat: "The GCD.",
            testCases: [{ input: "48 18", output: "6" }],
            solution: `#include <iostream>

int main() {
    int n1, n2;
    std::cin >> n1 >> n2;
    while(n2 != 0) {
        int temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    std::cout << n1;
    return 0;
}`,
            explanation: "This is an iterative implementation of the Euclidean algorithm. The `while` loop continues as long as the second number is not zero. Inside the loop, the remainder is calculated and the numbers are updated until the GCD is found in `n1`."
        },
        {
            id: "basic-cpp-31",
            title: "LCM of Two Numbers",
            description: "LCM compute karo.",
            statement: "Find the Least Common Multiple (LCM) of two integers using the formula: `lcm(a, b) = (a * b) / gcd(a, b)`.",
            inputFormat: "Two integers.",
            outputFormat: "The LCM.",
            testCases: [{ input: "15 20", output: "60" }],
            solution: `#include <iostream>

int gcd(int a, int b) {
    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int n1, n2;
    std::cin >> n1 >> n2;
    long long lcm = (long long)n1 * n2 / gcd(n1, n2);
    std::cout << lcm;
    return 0;
}`,
            explanation: "We first calculate the GCD of the two numbers using a helper function. Then, we apply the formula. We cast one of the numbers to `long long` during multiplication to prevent potential integer overflow before the division."
        },
        {
            id: "basic-cpp-32",
            title: "Swap using Functions",
            description: "swap ko function me implement karo.",
            statement: "Write a function `void swap(int &a, int &b)` that swaps the values of two integers using pass-by-reference.",
            inputFormat: "Two integers.",
            outputFormat: "The swapped integers.",
            testCases: [{ input: "10 20", output: "20 10" }],
            solution: `#include <iostream>
#include <utility>

void swap_nums(int &a, int &b) {
    std::swap(a, b);
}

int main() {
    int x, y;
    std::cin >> x >> y;
    swap_nums(x, y);
    std::cout << x << " " << y;
    return 0;
}`,
            explanation: "In C++, we can pass arguments by reference by adding an `&` to the type in the function signature. This means the function receives a reference to the original variable, not a copy. Any changes made to the reference inside the function will modify the original variable."
        },
        {
            id: "basic-cpp-33",
            title: "Max in Array",
            description: "array ka maximum element find karo.",
            statement: "Find the largest element in an array (vector) of integers.",
            inputFormat: "First line: an integer N. Second line: N integers.",
            outputFormat: "The largest integer.",
            testCases: [{ input: "5\n8 2 9 1 7", output: "9" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    std::cout << *std::max_element(arr.begin(), arr.end());
    return 0;
}`,
            explanation: "The C++ Standard Library's `<algorithm>` header provides `std::max_element`. It takes two iterators (start and end) and returns an iterator to the largest element in that range. The `*` operator is used to dereference the iterator and get the actual value."
        },
        {
            id: "basic-cpp-34",
            title: "Min in Array",
            description: "array ka minimum element find karo.",
            statement: "Find the smallest element in an array (vector) of integers.",
            inputFormat: "First line: an integer N. Second line: N integers.",
            outputFormat: "The smallest integer.",
            testCases: [{ input: "5\n8 2 9 1 7", output: "1" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    std::cout << *std::min_element(arr.begin(), arr.end());
    return 0;
}`,
            explanation: "Similar to `std::max_element`, `std::min_element` returns an iterator to the smallest element in a given range. We dereference it with `*` to get the value."
        },
        {
            id: "basic-cpp-35",
            title: "Sum of Array Elements",
            description: "array ka total sum.",
            statement: "Calculate and print the sum of all elements in an array (vector) of N integers.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The sum.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "15" }],
            solution: `#include <iostream>
#include <vector>
#include <numeric> // Required for std::accumulate

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    long long sum = std::accumulate(arr.begin(), arr.end(), 0LL);
    std::cout << sum;
    return 0;
}`,
            explanation: "`std::accumulate` from the `<numeric>` header is the standard way to sum elements in a range. It takes a start iterator, an end iterator, and an initial value for the sum. We use `0LL` as the initial value to ensure the sum is calculated using `long long` to prevent overflow."
        },
        {
            id: "basic-cpp-36",
            title: "Average of Array",
            description: "average calculate karo.",
            statement: "Calculate the average of the elements in an array (vector).",
            inputFormat: "First line: N. Second line: N numbers.",
            outputFormat: "The average.",
            testCases: [{ input: "4\n10 20 30 40", output: "25" }],
            solution: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    int n;
    std::cin >> n;
    std::vector<double> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    double sum = std::accumulate(arr.begin(), arr.end(), 0.0);
    std::cout << sum / n;
    return 0;
}`,
            explanation: "We first calculate the sum of all elements using `std::accumulate`. The average is then simply the sum divided by the number of elements `n`."
        },
        {
            id: "basic-cpp-37",
            title: "Reverse an Array",
            description: "array elements reverse karo.",
            statement: "Write a program to reverse an array (vector) and print its elements.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The N integers in reverse order, separated by spaces.",
            testCases: [ { input: "5\n1 2 3 4 5", output: "5 4 3 2 1 " } ],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    std::reverse(arr.begin(), arr.end());
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "`std::reverse` from `<algorithm>` is the standard function to reverse a range of elements in-place. It takes two iterators, a beginning and an end."
        },
        {
            id: "basic-cpp-38",
            title: "Linear Search",
            description: "element linear search karo.",
            statement: "Given an array (vector) and a key, find the first index of the key in the array. If not found, print -1.",
            inputFormat: "First line: N, Key. Second line: N integers.",
            outputFormat: "The index or -1.",
            testCases: [{ input: "5 40\n10 20 30 40 50", output: "3" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    auto it = std::find(arr.begin(), arr.end(), key);
    
    if (it != arr.end()) {
        std::cout << std::distance(arr.begin(), it);
    } else {
        std::cout << -1;
    }
    return 0;
}`,
            explanation: "`std::find` searches for a value in a range. It returns an iterator to the first occurrence of the value, or the `end()` iterator if the value is not found. `std::distance` calculates the number of elements between two iterators, giving us the index."
        },
        {
            id: "basic-cpp-39",
            title: "Count Occurrences",
            description: "kisi value ki frequency nikaalo.",
            statement: "Count the number of times a specific element appears in an array (vector).",
            inputFormat: "First line: N, Key. Second line: N integers.",
            outputFormat: "The frequency count.",
            testCases: [{ input: "7 5\n1 5 3 5 8 5 9", output: "3" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, key;
    std::cin >> n >> key;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    int count = std::count(arr.begin(), arr.end(), key);
    std::cout << count;
    return 0;
}`,
            explanation: "`std::count` from `<algorithm>` iterates through the given range and returns the number of elements that are equal to the provided value."
        },
        {
            id: "basic-cpp-40",
            title: "Remove Duplicates (simple)",
            description: "array se duplicates hatao.",
            statement: "Given a sorted array (vector), remove duplicates in-place.",
            inputFormat: "First line: N. Second line: N sorted integers.",
            outputFormat: "The modified vector with unique elements.",
            testCases: [{ input: "7\n1 1 2 2 3 4 4", output: "1 2 3 4 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    auto last = std::unique(arr.begin(), arr.end());
    arr.erase(last, arr.end());
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "`std::unique` reorders the input range so that each unique element appears once at the beginning, and it returns an iterator to the end of this unique range. It doesn't actually remove the elements, so we must call `arr.erase()` to remove the unwanted elements from the end of the vector."
        }
    ]
  }
];