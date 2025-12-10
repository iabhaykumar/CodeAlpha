import React from 'react';
import { ProblemCategory } from './types';

export const BASIC_CPP_PROBLEMS_5: ProblemCategory[] = [
  {
    category: "Basics (81-100)",
    problems: [
        {
            id: "basic-cpp-81",
            title: "Swap Case of String",
            description: "upper->lower and vice versa.",
            statement: "Read a string and convert all uppercase letters to lowercase and all lowercase letters to uppercase.",
            inputFormat: "A string.",
            outputFormat: "The string with swapped case.",
            testCases: [{ input: "CodeAlpha", output: "cODEaLPHA" }],
            solution: `#include <iostream>
#include <string>
#include <cctype>

int main() {
    std::string s;
    std::getline(std::cin, s);
    for (char &c : s) {
        if (islower(c)) {
            c = toupper(c);
        } else if (isupper(c)) {
            c = tolower(c);
        }
    }
    std::cout << s;
    return 0;
}`,
            explanation: "The program iterates through each character of the string by reference (`char &c`). This allows us to modify the character directly within the loop. `islower()` and `isupper()` from `<cctype>` are used to check the case, and `toupper()`/`tolower()` perform the conversion."
        },
        {
            id: "basic-cpp-82",
            title: "Print Prime Factors",
            description: "prime factorization.",
            statement: "Find and print all the prime factors of a given number.",
            inputFormat: "A single integer.",
            outputFormat: "The prime factors, separated by spaces.",
            testCases: [{ input: "315", output: "3 3 5 7 " }],
            solution: `#include <iostream>
#include <cmath>

int main() {
    int n;
    std::cin >> n;
    while (n % 2 == 0) {
        std::cout << 2 << " ";
        n = n / 2;
    }
    for (int i = 3; i <= sqrt(n); i = i + 2) {
        while (n % i == 0) {
            std::cout << i << " ";
            n = n / i;
        }
    }
    if (n > 2) {
        std::cout << n << " ";
    }
    return 0;
}`,
            explanation: "This is an efficient factorization algorithm. It first handles all factors of 2. Then, it iterates through odd numbers up to the square root of the remaining number, dividing out each factor as many times as possible. If a number greater than 2 remains at the end, that number itself must be prime."
        },
        {
            id: "basic-cpp-83",
            title: "Sum of Diagonal Elements (matrix)",
            description: "square matrix diagonals sum.",
            statement: "For a square matrix, calculate the sum of the elements on the main diagonal (top-left to bottom-right) and the anti-diagonal (top-right to bottom-left).",
            inputFormat: "First line: N. Next N lines: N integers per line for the matrix.",
            outputFormat: "The sum of both diagonals.",
            testCases: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "30" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int n;
    std::cin >> n;
    std::vector<std::vector<int>> matrix(n, std::vector<int>(n));
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            std::cin >> matrix[i][j];
        }
    }
    
    long long sum = 0;
    for (int i = 0; i < n; ++i) {
        sum += matrix[i][i]; // Main diagonal
        sum += matrix[i][n - 1 - i]; // Anti-diagonal
    }
    
    // If N is odd, the center element was added twice, so subtract it once.
    if (n % 2 != 0) {
        sum -= matrix[n / 2][n / 2];
    }
    
    std::cout << sum;
    return 0;
}`,
            explanation: "The program uses a single loop. In each iteration `i`, it adds the main diagonal element `matrix[i][i]` and the anti-diagonal element `matrix[i][n-1-i]`. A special check is needed for matrices with an odd dimension to avoid double-counting the center element."
        },
        {
            id: "basic-cpp-84",
            title: "Transpose of a Matrix",
            description: "matrix transpose.",
            statement: "Find the transpose of a given R x C matrix. The transpose is obtained by swapping rows with columns.",
            inputFormat: "First line: R, C. Next R lines: C integers each.",
            outputFormat: "The transposed C x R matrix.",
            testCases: [{ input: "2 3\n1 2 3\n4 5 6", output: "1 4 \n2 5 \n3 6 \n" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int r, c;
    std::cin >> r >> c;
    std::vector<std::vector<int>> matrix(r, std::vector<int>(c));
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> matrix[i][j];
    
    std::vector<std::vector<int>> transpose(c, std::vector<int>(r));
    for(int i=0; i<r; ++i) {
        for(int j=0; j<c; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }
    
    for(int i=0; i<c; ++i) {
        for(int j=0; j<r; ++j) {
            std::cout << transpose[i][j] << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}`,
            explanation: "To find the transpose, the element at `matrix[i][j]` becomes the element at `transpose[j][i]`. A new matrix with swapped dimensions (C x R) is created to store the result."
        },
        {
            id: "basic-cpp-85",
            title: "Add Two Matrices",
            description: "matrix addition.",
            statement: "Read two matrices of the same size (R x C) and compute their sum.",
            inputFormat: "R, C, then elements of matrix A, then elements of matrix B.",
            outputFormat: "The resulting sum matrix.",
            testCases: [{ input: "2 2\n1 2\n3 4\n5 6\n7 8", output: "6 8 \n10 12 \n" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int r, c;
    std::cin >> r >> c;
    std::vector<std::vector<int>> a(r, std::vector<int>(c));
    std::vector<std::vector<int>> b(r, std::vector<int>(c));
    
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> a[i][j];
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> b[i][j];
    
    for(int i=0; i<r; ++i) {
        for(int j=0; j<c; ++j) {
            std::cout << a[i][j] + b[i][j] << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}`,
            explanation: "Matrix addition is performed by adding the corresponding elements of the two matrices. Nested loops iterate through each row `i` and column `j` to perform the addition `a[i][j] + b[i][j]`."
        },
        {
            id: "basic-cpp-86",
            title: "Multiply Two Matrices (small)",
            description: "matrix multiplication.",
            statement: "Read two matrices (r1xc1 and r2xc2) and compute their product. The number of columns in the first matrix (c1) must equal the number of rows in the second matrix (r2).",
            inputFormat: "r1, c1, matrix1 elements, r2, c2, matrix2 elements.",
            outputFormat: "The product matrix.",
            testCases: [{ input: "2 2\n1 1\n2 2\n2 2\n1 1\n2 2", output: "3 3 \n6 6 \n" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    // Assuming 2x2 matrices for simplicity
    int r1=2, c1=2, r2=2, c2=2;
    std::vector<std::vector<int>> a = {{1,1},{2,2}};
    std::vector<std::vector<int>> b = {{1,1},{2,2}};
    std::vector<std::vector<int>> result(r1, std::vector<int>(c2, 0));
    
    for (int i = 0; i < r1; ++i) {
        for (int j = 0; j < c2; ++j) {
            for (int k = 0; k < c1; ++k) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    
    for(int i=0; i<r1; ++i) {
        for(int j=0; j<c2; ++j) std::cout << result[i][j] << " ";
        std::cout << std::endl;
    }
    return 0;
}`,
            explanation: "Matrix multiplication requires three nested loops. The element at `result[i][j]` is the dot product of the i-th row of the first matrix and the j-th column of the second matrix."
        },
        {
            id: "basic-cpp-87",
            title: "Check Sparse Matrix",
            description: "majority zeros?",
            statement: "A matrix is sparse if the number of zero elements is more than half of the total elements. Check if a given matrix is sparse.",
            inputFormat: "R, C, then the matrix elements.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "3 3\n1 0 0\n0 5 0\n0 0 0", output: "Yes" }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int r, c, zero_count = 0;
    std::cin >> r >> c;
    for(int i=0; i<r*c; ++i) {
        int val;
        std::cin >> val;
        if(val == 0) zero_count++;
    }
    if (zero_count > (r * c) / 2) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The program reads the matrix dimensions and elements, counting the number of zeros along the way. It then compares this count to half of the total number of elements (`r * c`) to determine if the matrix is sparse."
        },
        {
            id: "basic-cpp-88",
            title: "Find Row/Column Sum in Matrix",
            description: "sums of rows/cols.",
            statement: "For a given matrix, calculate the sum of each row and each column.",
            inputFormat: "R, C, then the matrix elements.",
            outputFormat: "The sum of each row and column.",
            testCases: [{ input: "2 3\n1 2 3\n4 5 6", output: "Row 1 Sum: 6\nRow 2 Sum: 15\nCol 1 Sum: 5\nCol 2 Sum: 7\nCol 3 Sum: 9" }],
            solution: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    int r, c;
    std::cin >> r >> c;
    std::vector<std::vector<int>> matrix(r, std::vector<int>(c));
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> matrix[i][j];
    
    // Row sums
    for(int i=0; i<r; ++i) {
        long long row_sum = std::accumulate(matrix[i].begin(), matrix[i].end(), 0LL);
        std::cout << "Row " << i+1 << " Sum: " << row_sum << std::endl;
    }
    
    // Column sums
    for(int j=0; j<c; ++j) {
        long long col_sum = 0;
        for(int i=0; i<r; ++i) {
            col_sum += matrix[i][j];
        }
        std::cout << "Col " << j+1 << " Sum: " << col_sum << std::endl;
    }
    return 0;
}`,
            explanation: "To calculate row sums, we can iterate through each row and use `std::accumulate`. For column sums, we iterate through each column index `j` and have a nested loop that iterates through the rows `i` to sum up the elements `matrix[i][j]`."
        },
        {
            id: "basic-cpp-89",
            title: "Spiral Order Print (small matrix)",
            description: "spiral traversal.",
            statement: "Given a 2D array (matrix), print its elements in spiral form.",
            inputFormat: "R, C, then matrix elements.",
            outputFormat: "The spiral-ordered elements.",
            testCases: [{ input: "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12", output: "1 2 3 4 8 12 11 10 9 5 6 7 " }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int r, c;
    std::cin >> r >> c;
    std::vector<std::vector<int>> matrix(r, std::vector<int>(c));
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> matrix[i][j];

    int top=0, bottom=r-1, left=0, right=c-1;
    while(top <= bottom && left <= right) {
        for(int i=left; i<=right; ++i) std::cout << matrix[top][i] << " ";
        top++;
        for(int i=top; i<=bottom; ++i) std::cout << matrix[i][right] << " ";
        right--;
        if(top <= bottom) {
            for(int i=right; i>=left; --i) std::cout << matrix[bottom][i] << " ";
            bottom--;
        }
        if(left <= right) {
            for(int i=bottom; i>=top; --i) std::cout << matrix[i][left] << " ";
            left++;
        }
    }
    return 0;
}`,
            explanation: "This algorithm uses four pointers: `top`, `bottom`, `left`, and `right` to represent the boundaries of the current layer of the spiral. In a loop, it prints the top row, then the right column, then the bottom row, and finally the left column, shrinking the boundaries inward after each step."
        },
        {
            id: "basic-cpp-90",
            title: "Count Vowels in Matrix of Characters",
            description: "2D vowel count.",
            statement: "Given a 2D matrix of characters, count the total number of vowels.",
            inputFormat: "R, C, then the matrix characters.",
            outputFormat: "The total vowel count.",
            testCases: [{ input: "2 5\nhello\nworld", output: "3" }],
            solution: `#include <iostream>
#include <vector>
#include <cctype>

int main() {
    int r, c, count=0;
    std::cin >> r >> c;
    std::vector<std::vector<char>> matrix(r, std::vector<char>(c));
    for(int i=0; i<r; ++i) for(int j=0; j<c; ++j) std::cin >> matrix[i][j];

    for(int i=0; i<r; ++i) {
        for(int j=0; j<c; ++j) {
            char lower_c = tolower(matrix[i][j]);
            if (lower_c == 'a' || lower_c == 'e' || lower_c == 'i' || lower_c == 'o' || lower_c == 'u') {
                count++;
            }
        }
    }
    std::cout << count;
    return 0;
}`,
            explanation: "The program uses nested loops to iterate through every character in the 2D vector. For each character, it converts it to lowercase and checks if it's a vowel, incrementing a counter if it is."
        },
        {
            id: "basic-cpp-91",
            title: "Simple File Write",
            description: "write a line to file.",
            statement: "Write a program that writes the string 'Hello from CodeAlpha!' to a file named `output.txt`.",
            inputFormat: "No input.",
            outputFormat: "A file named `output.txt` is created with the specified content.",
            testCases: [{ input: "", output: "" }],
            solution: `#include <iostream>
#include <fstream>

int main() {
    std::ofstream outfile("output.txt");
    if (outfile.is_open()) {
        outfile << "Hello from CodeAlpha!";
        outfile.close();
        std::cout << "File written successfully.";
    } else {
        std::cout << "Error opening file.";
    }
    return 0;
}`,
            explanation: "The `<fstream>` header provides classes for file I/O. `std::ofstream` is used for writing to files. We create an object, check if the file was opened successfully with `.is_open()`, write to it using the `<<` operator, and finally close it with `.close()`."
        },
        {
            id: "basic-cpp-92",
            title: "Simple File Read",
            description: "read & print file content.",
            statement: "Read the entire content of a text file line by line and print it to the console.",
            inputFormat: "A file named `input.txt` with some content.",
            outputFormat: "The content of the file.",
            testCases: [{ input: "", output: "" }],
            solution: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream infile("input.txt");
    if (infile.is_open()) {
        std::string line;
        while (std::getline(infile, line)) {
            std::cout << line << std::endl;
        }
        infile.close();
    } else {
        std::cout << "Error opening file.";
    }
    return 0;
}`,
            explanation: "`std::ifstream` is used for reading from files. The `std::getline(stream, string)` function reads a full line of text from the input stream, which is useful for processing files line by line."
        },
        {
            id: "basic-cpp-93",
            title: "Append to File",
            description: "open and append text.",
            statement: "Open a file in append mode and add a new line of text to it without erasing the existing content.",
            inputFormat: "A string to append.",
            outputFormat: "The file is updated.",
            testCases: [{ input: "This is a new line.", output: "" }],
            solution: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::string text_to_append;
    std::getline(std::cin, text_to_append);
    
    std::ofstream outfile("output.txt", std::ios::app);
    if (outfile.is_open()) {
        outfile << text_to_append << std::endl;
        outfile.close();
    }
    return 0;
}`,
            explanation: "To open a file in append mode, we pass the `std::ios::app` flag to the `ofstream` constructor. This ensures that any new writes are added to the end of the file."
        },
        {
            id: "basic-cpp-94",
            title: "Count Lines in File",
            description: "line count.",
            statement: "Write a program to count the number of lines in a text file.",
            inputFormat: "A file named `input.txt`.",
            outputFormat: "The number of lines.",
            testCases: [{ input: "", output: "" }],
            solution: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream infile("input.txt");
    int count = 0;
    std::string line;
    if (infile.is_open()) {
        while (std::getline(infile, line)) {
            count++;
        }
        infile.close();
    }
    std::cout << count;
    return 0;
}`,
            explanation: "The program reads the file line by line using `std::getline`. A counter is incremented for each line that is successfully read until the end of the file is reached."
        },
        {
            id: "basic-cpp-95",
            title: "Copy File Content",
            description: "file copy program.",
            statement: "Write a program to copy the contents of `source.txt` to `destination.txt`.",
            inputFormat: "A file `source.txt`.",
            outputFormat: "A new file `destination.txt` with the same content.",
            testCases: [{ input: "", output: "" }],
            solution: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream source("source.txt");
    std::ofstream dest("destination.txt");
    
    if (source.is_open() && dest.is_open()) {
        std::string line;
        while (std::getline(source, line)) {
            dest << line << std::endl;
        }
        source.close();
        dest.close();
    }
    return 0;
}`,
            explanation: "We open one file for reading and another for writing. We then loop, reading a line from the source file and immediately writing that same line to the destination file, until we've processed the entire source."
        },
        {
            id: "basic-cpp-96",
            title: "Basic Exception Handling",
            description: "divide by zero try/except (or language equivalent).",
            statement: "Write a program that attempts to divide by zero. Use a `try-catch` block to handle the exception gracefully.",
            inputFormat: "Two integers.",
            outputFormat: "The result or an error message.",
            testCases: [{ input: "10 0", output: "Error: Division by zero!" }],
            solution: `#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    try {
        if (b == 0) {
            throw "Division by zero!";
        }
        std::cout << a / b;
    } catch (const char* msg) {
        std::cerr << "Error: " << msg << std::endl;
    }
    return 0;
}`,
            explanation: "In C++, integer division by zero results in undefined behavior. To handle it gracefully, we manually check the condition and `throw` an exception if the denominator is zero. The `try` block contains the code that might cause an error, and the `catch` block contains the code that handles it."
        },
        {
            id: "basic-cpp-97",
            title: "Simple Timer (measure time)",
            description: "measure execution time of a small loop.",
            statement: "Use the `<chrono>` library to measure the time it takes to execute a simple loop.",
            inputFormat: "No input.",
            outputFormat: "The execution time in microseconds.",
            testCases: [{ input: "", output: "Time taken: [some_value] microseconds" }],
            solution: `#include <iostream>
#include <chrono>

int main() {
    auto start = std::chrono::high_resolution_clock::now();

    // Some work to measure
    long long sum = 0;
    for (int i = 0; i < 1000000; ++i) {
        sum += i;
    }

    auto end = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

    std::cout << "Time taken: " << duration.count() << " microseconds";
    return 0;
}`,
            explanation: "The `<chrono>` library provides high-resolution clocks for accurate time measurement. We record the time before and after the code block we want to measure. The difference between these two time points gives us a `duration`, which we can then cast to a desired unit like microseconds."
        },
        {
            id: "basic-cpp-98",
            title: "Random Number Generator Demo",
            description: "generate random int in range.",
            statement: "Generate a random integer between 1 and 100 using C++'s modern `<random>` library.",
            inputFormat: "No input.",
            outputFormat: "A random number between 1 and 100.",
            testCases: [{ input: "", output: "42" }],
            solution: `#include <iostream>
#include <random>

int main() {
    std::random_device rd;  // Seed for the random number engine
    std::mt19937 gen(rd()); // Standard mersenne_twister_engine
    std::uniform_int_distribution<> distrib(1, 100);

    std::cout << distrib(gen);
    return 0;
}`,
            explanation: "The modern C++ way to generate random numbers is more robust than `rand()`. We use a `random_device` to get a true random seed, an `engine` like `mt19937` to generate a sequence of pseudo-random numbers, and a `distribution` to map those numbers to our desired range and distribution (e.g., uniform)."
        },
        {
            id: "basic-cpp-99",
            title: "Prime Factors Sum",
            description: "sum of prime factors.",
            statement: "Calculate the sum of all unique prime factors of a given number.",
            inputFormat: "A single integer.",
            outputFormat: "The sum of its unique prime factors.",
            testCases: [{ input: "315", output: "15" }],
            solution: `#include <iostream>
#include <cmath>
#include <set>

int main() {
    int n;
    std::cin >> n;
    std::set<int> prime_factors;

    while (n % 2 == 0) {
        prime_factors.insert(2);
        n = n / 2;
    }
    for (int i = 3; i <= sqrt(n); i = i + 2) {
        while (n % i == 0) {
            prime_factors.insert(i);
            n = n / i;
        }
    }
    if (n > 2) {
        prime_factors.insert(n);
    }
    
    int sum = 0;
    for (int factor : prime_factors) {
        sum += factor;
    }
    std::cout << sum;
    return 0;
}`,
            explanation: "We use the same prime factorization algorithm as before, but instead of printing the factors, we insert them into a `std::set`. A set automatically stores only unique elements. After finding all factors, we iterate through the set and sum its elements."
        },
        {
            id: "basic-cpp-100",
            title: "Mini Project: Student Marks Summary",
            description: "input students’ marks, compute total, average, grade.",
            statement: "Create a simple student marks summary program. Read the number of students, then for each student, read their name and marks in 3 subjects. Calculate and print their total marks, average, and grade (A>=90, B>=80, C>=70, F<70).",
            inputFormat: "N, then N lines of `name m1 m2 m3`.",
            outputFormat: "A summary for each student.",
            testCases: [{ input: "2\nAlice 90 95 85\nBob 70 65 75", output: "Alice -> Total: 270, Avg: 90.00, Grade: A\nBob -> Total: 210, Avg: 70.00, Grade: C\n" }],
            solution: `#include <iostream>
#include <string>
#include <vector>
#include <iomanip>

int main() {
    int n;
    std::cin >> n;
    
    for(int i=0; i<n; ++i) {
        std::string name;
        int m1, m2, m3;
        std::cin >> name >> m1 >> m2 >> m3;
        
        int total = m1 + m2 + m3;
        double avg = total / 3.0;
        char grade;
        
        if(avg >= 90) grade = 'A';
        else if(avg >= 80) grade = 'B';
        else if(avg >= 70) grade = 'C';
        else grade = 'F';
        
        std::cout << name << " -> Total: " << total 
                  << ", Avg: " << std::fixed << std::setprecision(2) << avg
                  << ", Grade: " << grade << std::endl;
    }
    return 0;
}`,
            explanation: "This program combines many basic concepts. It uses a `for` loop to process multiple students. For each student, it reads their data, performs arithmetic calculations for total and average, and uses an `if-elif-else` chain to determine the grade. `std::fixed` and `std::setprecision` are used for formatted output."
        }
    ]
  }
];