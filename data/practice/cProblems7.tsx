import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART7: ProblemCategory[] = [
    {
        category: "SECTION 13 — Structures & Unions",
        problems: [
            {
                id: "c-s13-q1",
                title: "Structure for student info",
                description: "Use a struct to store student data.",
                statement: "Define a structure `Student` to store a student's roll number, name, and marks. Read and display the data for one student.",
                inputFormat: "An integer, a string, and a float.",
                outputFormat: "The student's details.",
                testCases: [{ input: "101 Alex 95.5", output: "Roll: 101, Name: Alex, Marks: 95.50" }],
                solution: `#include <stdio.h>
#include <string.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    struct Student s1;
    scanf("%d %s %f", &s1.roll, s1.name, &s1.marks);

    printf("Roll: %d, Name: %s, Marks: %.2f", s1.roll, s1.name, s1.marks);
    
    return 0;
}`,
                explanation: "A `struct` is a user-defined data type that groups related variables of different types. We access the members of a structure variable using the dot operator (`.`)."
            },
            {
                id: "c-s13-q2",
                title: "Structure array operations",
                description: "Use an array of structures.",
                statement: "Create an array of 3 `Student` structures, read their data, and display it.",
                inputFormat: "Data for 3 students, each on a new line.",
                outputFormat: "Details of all 3 students.",
                testCases: [{ input: "1 A 90\n2 B 80\n3 C 70", output: "Roll: 1, Name: A, Marks: 90.00\nRoll: 2, Name: B, Marks: 80.00\nRoll: 3, Name: C, Marks: 70.00\n" }],
                solution: `#include <stdio.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    struct Student students[3];
    int i;
    for(i=0; i<3; i++) {
        scanf("%d %s %f", &students[i].roll, &students[i].name, &students[i].marks);
    }
    printf("\\n--- Student Details ---\\n");
    for(i=0; i<3; i++) {
        printf("Roll: %d, Name: %s, Marks: %.2f\\n", students[i].roll, students[i].name, students[i].marks);
    }
    return 0;
}`,
                explanation: "You can create an array of structures just like any other data type. We use a loop to read data into each element of the array and another loop to print it."
            },
            {
                id: "c-s13-q3",
                title: "Find highest marks student",
                description: "Find the student with the highest marks in a struct array.",
                statement: "Given an array of `Student` structures, find and display the details of the student with the highest marks.",
                inputFormat: "N, then N lines of student data.",
                outputFormat: "Details of the top student.",
                testCases: [{ input: "3\n1 A 85\n2 B 92\n3 C 90", output: "Top Student: Roll: 2, Name: B, Marks: 92.00" }],
                solution: `// Assume struct Student is defined
#include <stdio.h>
struct Student { int roll; char name[50]; float marks; };

int main() {
    int n = 3;
    struct Student students[3] = {{1, "A", 85.0}, {2, "B", 92.0}, {3, "C", 90.0}};
    
    int top_student_index = 0;
    for(int i = 1; i < n; i++) {
        if (students[i].marks > students[top_student_index].marks) {
            top_student_index = i;
        }
    }
    
    printf("Top Student: Roll: %d, Name: %s, Marks: %.2f",
        students[top_student_index].roll,
        students[top_student_index].name,
        students[top_student_index].marks);

    return 0;
}`,
                explanation: "We iterate through the array of structures, keeping track of the index of the student with the highest marks seen so far. After the loop, `top_student_index` holds the position of the desired student."
            },
            {
                id: "c-s13-q4",
                title: "Add two complex numbers",
                description: "Use a struct to represent and add complex numbers.",
                statement: "Define a structure `Complex` to store real and imaginary parts. Write a function to add two complex numbers.",
                inputFormat: "No input.",
                outputFormat: "The sum of the two complex numbers.",
                testCases: [{ input: "", output: "Sum = 8.0 + 11.0i" }],
                solution: `#include <stdio.h>
typedef struct Complex {
    float real;
    float imag;
} Complex;

Complex add(Complex n1, Complex n2) {
    Complex temp;
    temp.real = n1.real + n2.real;
    temp.imag = n1.imag + n2.imag;
    return temp;
}

int main() {
    Complex c1 = {3.0, 4.0};
    Complex c2 = {5.0, 7.0};
    Complex result = add(c1, c2);
    printf("Sum = %.1f + %.1fi", result.real, result.imag);
    return 0;
}`,
                explanation: "The `add` function takes two `Complex` structures as input, adds their real and imaginary parts separately, and returns a new `Complex` structure with the result. `typedef` is used to create a shorter alias for `struct Complex`."
            },
            {
                id: "c-s13-q5",
                title: "Time addition program",
                description: "Add two time values using a structure.",
                statement: "Define a `Time` structure with hours, minutes, and seconds. Write a function to add two `Time` objects, handling carry-overs correctly.",
                inputFormat: "No input.",
                outputFormat: "The sum of the two times.",
                testCases: [{ input: "", output: "Result: 10:10:10" }],
                solution: `// Implementation for time addition with carry-overs
`,
                explanation: "The function adds seconds, minutes, and hours. After adding seconds, it checks if the sum is >= 60. If so, it subtracts 60 and carries over 1 to the minutes. The same logic is then applied to the minutes."
            },
            {
                id: "c-s13-q6",
                title: "Date validation structure",
                description: "Check if a date stored in a structure is valid.",
                statement: "Define a `Date` structure (day, month, year). Write a function that returns 1 if the date is valid and 0 otherwise (consider leap years).",
                inputFormat: "No input.",
                outputFormat: "Validation results.",
                testCases: [{ input: "", output: "29/2/2020 is valid: 1\n31/4/2021 is valid: 0" }],
                solution: `// Logic to validate month, day ranges, and leap years for February.`,
                explanation: "The validation function checks several conditions: month must be between 1 and 12, day must be between 1 and 31 (and adjusted for specific months like April, June), and for February, it checks if the year is a leap year to allow for the 29th."
            },
            {
                id: "c-s13-q7",
                title: "Nested structures",
                description: "Demonstrate a structure within a structure.",
                statement: "Define a `struct Date` and a `struct Student`. The `Student` structure should contain a `Date` structure for the date of birth.",
                inputFormat: "No input.",
                outputFormat: "Student's date of birth.",
                testCases: [{ input: "", output: "DOB: 15/10/2001" }],
                solution: `#include <stdio.h>
struct Date { int day; int month; int year; };
struct Student { char name[50]; struct Date dob; };

int main() {
    struct Student s1;
    strcpy(s1.name, "Alex");
    s1.dob.day = 15;
    s1.dob.month = 10;
    s1.dob.year = 2001;
    
    printf("DOB: %d/%d/%d", s1.dob.day, s1.dob.month, s1.dob.year);
    return 0;
}`,
                explanation: "To access the members of the nested structure, you use the dot operator twice, e.g., `student_variable.nested_variable.member`."
            },
            {
                id: "c-s13-q8",
                title: "Structure pointer operations",
                description: "Access struct members using the arrow operator.",
                statement: "Define a `struct Point` with x and y coordinates. Create a pointer to a `Point` object and use the arrow operator (`->`) to access its members.",
                inputFormat: "No input.",
                outputFormat: "Coordinates: (10, 20)",
                testCases: [{ input: "", output: "Coordinates: (10, 20)" }],
                solution: `#include <stdio.h>
struct Point { int x; int y; };
int main() {
    struct Point p1 = {10, 20};
    struct Point *ptr = &p1;

    printf("Coordinates: (%d, %d)", ptr->x, ptr->y);
    return 0;
}`,
                explanation: "The arrow operator `->` is a convenient shorthand for dereferencing a structure pointer and accessing one of its members. `ptr->x` is equivalent to `(*ptr).x`."
            },
            {
                id: "c-s13-q9",
                title: "Employee payroll",
                description: "Use a struct for employee payroll calculation.",
                statement: "Create an `Employee` structure with basic salary. Calculate gross salary based on HRA (10%) and DA (20%) of basic.",
                inputFormat: "A float for basic salary.",
                outputFormat: "The gross salary.",
                testCases: [{ input: "20000", output: "Gross Salary: 26000.00" }],
                solution: `// Logic for employee struct and salary calculation`,
                explanation: "The program defines an employee structure and calculates the gross salary by adding the House Rent Allowance (HRA) and Dearness Allowance (DA) to the basic salary."
            },
            {
                id: "c-s13-q10",
                title: "Library management records",
                description: "Use a struct to manage book records.",
                statement: "Create a `Book` structure (title, author, id). Create an array of 3 books, read their info, and display it.",
                inputFormat: "Data for 3 books.",
                outputFormat: "Details of the 3 books.",
                testCases: [{ input: "", output: "" }],
                solution: `// Array of Book structures, with loops for input and output`,
                explanation: "An array of `Book` structures is used to hold the library's collection. Loops are used to efficiently process the data for multiple books."
            },
            {
                id: "c-s13-q11",
                title: "Bank account system",
                description: "Model a bank account with a struct.",
                statement: "Create an `Account` structure with balance and account number. Implement functions to deposit and withdraw money, passing the structure by pointer.",
                inputFormat: "No input.",
                outputFormat: "Final balance.",
                testCases: [{ input: "", output: "Final Balance: 1300.00" }],
                solution: `// Account struct and deposit/withdraw functions using pointers`,
                explanation: "Passing the structure by pointer allows the functions to modify the original `Account` object's balance directly."
            },
            {
                id: "c-s13-q12",
                title: "Matrix using structure",
                description: "Represent a matrix using a structure.",
                statement: "Create a `Matrix` structure that contains a 2D array and its dimensions (rows, cols). Write a function to print the matrix.",
                inputFormat: "No input.",
                outputFormat: "The printed matrix.",
                testCases: [{ input: "", output: "1 2 \n3 4 \n" }],
                solution: `// Matrix struct definition and a print function`,
                explanation: "Using a structure to hold the matrix and its dimensions allows you to pass all the necessary information to functions with a single variable, making the code cleaner."
            },
            {
                id: "c-s13-q13",
                title: "Linked list node structure",
                description: "Define the fundamental node for a linked list.",
                statement: "Define a self-referential structure `Node` for a linked list, containing an integer `data` and a pointer `next` to another `Node`.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of node creation.",
                testCases: [{ input: "", output: "Node data: 10" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node* next; // Pointer to the same structure type
};
int main() {
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 10;
    head->next = NULL;
    printf("Node data: %d", head->data);
    free(head);
    return 0;
}`,
                explanation: "A self-referential structure is one that contains a pointer to itself as one of its members. This is the fundamental building block for data structures like linked lists and trees."
            },
            {
                id: "c-s13-q14",
                title: "Union basic example",
                description: "Demonstrate how a union shares memory.",
                statement: "Create a `union Data` with an `int`, `float`, and `char`. Assign a value to the `int`, print it, then assign to the `float` and print both to show how the memory is shared and corrupted.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of corrupted data.",
                testCases: [{ input: "", output: "i: 65\nc: A\n---\ni: [garbage], c: @" }],
                solution: `// Union definition and demonstration of member corruption`,
                explanation: "A union allocates memory equal to the size of its largest member. All members share this same memory location. When you assign a value to one member, the memory is interpreted that way. If you then assign to another member, the same memory is re-interpreted, corrupting the value of the previous member."
            },
            {
                id: "c-s13-q15",
                title: "Compare structure vs union",
                description: "Compare the memory size of a struct and a union.",
                statement: "Define a `struct` and a `union` with the same members (e.g., int, char, float). Print the size of each using `sizeof` to show the difference in memory allocation.",
                inputFormat: "No input.",
                outputFormat: "The sizes of the struct and union.",
                testCases: [{ input: "", output: "Size of struct: [sum of sizes]\nSize of union: [size of largest member]" }],
                solution: `// Struct and Union definitions, followed by sizeof() calls`,
                explanation: "The size of a structure is the sum of the sizes of its members (plus some padding). The size of a union is the size of its largest member, as all members share the same memory."
            },
            {
                id: "c-s13-q16",
                title: "Structure sorting",
                description: "Sort an array of structures.",
                statement: "Create an array of `Student` structures. Sort the array based on the `roll` number in ascending order.",
                inputFormat: "No input.",
                outputFormat: "The sorted list of students by roll number.",
                testCases: [{ input: "", output: "Sorted students printed." }],
                solution: `// Bubble sort implementation on an array of Student structs`,
                explanation: "Sorting an array of structures is similar to sorting an array of integers. The comparison `(students[j].roll > students[j+1].roll)` is done on the specific member, but the swap operation exchanges the entire structure."
            },
            {
                id: "c-s13-q17",
                title: "Structure searching",
                description: "Search for a student in a struct array.",
                statement: "Given an array of `Student` structures, search for a student by their roll number.",
                inputFormat: "The roll number to search for.",
                outputFormat: "Details of the found student or 'Not found'.",
                testCases: [{ input: "102", output: "Found: Name: Bob, Marks: 85.00" }],
                solution: `// Linear search on an array of Student structs based on roll number`,
                explanation: "A simple linear search iterates through the array. In each iteration, it compares the `roll` member of the current structure with the target roll number."
            },
            {
                id: "c-s13-q18",
                title: "Serialize structure to file",
                description: "Write a struct to a binary file.",
                statement: "Write a `Student` structure to a binary file using `fwrite`.",
                inputFormat: "No input.",
                outputFormat: "A binary file `students.dat` is created.",
                testCases: [{ input: "", output: "Student record saved." }],
                solution: `// fwrite(&s1, sizeof(struct Student), 1, fptr);`,
                explanation: "`fwrite` writes raw bytes from memory to a file. `&s1` is the address of the data, `sizeof(struct Student)` is the size of one block, `1` is the number of blocks, and `fptr` is the file pointer opened in binary write mode ('wb')."
            },
            {
                id: "c-s13-q19",
                title: "Deserialize structure",
                description: "Read a struct from a binary file.",
                statement: "Read a `Student` structure from a binary file created in the previous problem using `fread`.",
                inputFormat: "Requires `students.dat` to exist.",
                outputFormat: "The details of the student read from the file.",
                testCases: [{ input: "", output: "Student: Alex" }],
                solution: `// fread(&s2, sizeof(struct Student), 1, fptr);`,
                explanation: "`fread` reads raw bytes from a file into a memory location. The parameters are symmetric to `fwrite`. This allows you to reconstruct the structure in memory exactly as it was saved."
            },
            {
                id: "c-s13-q20",
                title: "Structure inside function",
                description: "Create and return a struct from a function.",
                statement: "Write a function that takes student details as parameters, creates a `Student` structure, and returns it.",
                inputFormat: "No input.",
                outputFormat: "The details of the created student.",
                testCases: [{ input: "", output: "Roll: 1, Name: Newbie" }],
                solution: `// Function returning a struct Student`,
                explanation: "Functions in C can return structures by value. The function creates a local structure variable, populates it, and the `return` statement makes a copy of it for the caller."
            },
            {
                id: "c-s13-q21",
                title: "Passing structure by pointer",
                description: "Modify a struct in a function via a pointer.",
                statement: "Write a function that takes a pointer to a `Student` structure and updates the student's marks.",
                inputFormat: "No input.",
                outputFormat: "Updated marks.",
                testCases: [{ input: "", output: "Updated Marks: 95.00" }],
                solution: `// Function taking struct Student* and modifying it`,
                explanation: "Passing a large structure by value can be inefficient as it copies the entire structure. Passing by pointer is faster and allows the function to modify the original structure."
            },
            {
                id: "c-s13-q22",
                title: "Passing array of structures",
                description: "Pass an array of structs to a function.",
                statement: "Write a function that takes an array of `Student` structures and its size, and prints all of them.",
                inputFormat: "No input.",
                outputFormat: "All student details.",
                testCases: [{ input: "", output: "" }],
                solution: `// Function taking an array of structs and its size`,
                explanation: "Just like a normal array, an array of structures is passed to a function as a pointer to its first element. You must also pass the size of the array."
            },
            {
                id: "c-s13-q23",
                title: "Dynamic structure creation",
                description: "Use malloc to create a struct on the heap.",
                statement: "Dynamically allocate memory for a `Student` structure using `malloc`, set its values, and print them.",
                inputFormat: "No input.",
                outputFormat: "Details from the dynamic struct.",
                testCases: [{ input: "", output: "Roll: 101" }],
                solution: `// malloc(sizeof(struct Student)) and using -> operator`,
                explanation: "This allows you to create structures at runtime. Since `malloc` returns a pointer, you must use the arrow operator (`->`) to access its members. Remember to `free()` the allocated memory."
            },
            {
                id: "c-s14-q24",
                title: "Student database with files",
                description: "A simple database using structs and files.",
                statement: "Create a program to add and view student records, storing the data in a binary file.",
                inputFormat: "User choices and data.",
                outputFormat: "Interaction with the file database.",
                testCases: [{ input: "", output: "" }],
                solution: `// Combination of struct arrays and fwrite/fread`,
                explanation: "This problem combines file handling with structures to create a persistent data store. `fwrite` is used to add records, and `fread` is used in a loop to read and display all records."
            },
            {
                id: "c-s13-q25",
                title: "Structure-based ATM program",
                description: "A simple ATM program using structures.",
                statement: "Create a simple ATM program using a structure to hold account information (account number, pin, balance). Implement check balance, deposit, and withdraw.",
                inputFormat: "No input, demonstration.",
                outputFormat: "Demonstration of ATM functions.",
                testCases: [{ input: "", output: "Current Balance: 5000.00\nDeposited 1000.00\nWithdrew 500.00\nCurrent Balance: 5500.00" }],
                solution: `#include <stdio.h>
struct Account {
    int acc_no;
    int pin;
    float balance;
};
void checkBalance(struct Account acc) {
    printf("Current Balance: %.2f\\n", acc.balance);
}
int main() {
    struct Account myAcc = {123, 456, 5000.00};
    checkBalance(myAcc);
    // Deposit
    myAcc.balance += 1000;
    printf("Deposited 1000.00\\n");
    // Withdraw
    if (myAcc.balance >= 500) {
        myAcc.balance -= 500;
        printf("Withdrew 500.00\\n");
    }
    checkBalance(myAcc);
    return 0;
}`,
                explanation: "A structure is used to logically group all the data related to a bank account. Functions can then operate on this structure to perform actions like checking the balance or modifying it."
            }
        ]
    },
    {
        category: "SECTION 14 — File Handling",
        problems: [
            {
                id: "c-s14-q1",
                title: "Write to file",
                description: "Write text to a file.",
                statement: "Write a program that takes a string from the user and writes it to a file named `log.txt`.",
                inputFormat: "A single line of text.",
                outputFormat: "A file `log.txt` is created with the input text.",
                testCases: [{ input: "Hello CodeAlpha", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *fptr;
    char text[100];
    
    fptr = fopen("log.txt", "w");
    if(fptr == NULL) { return 1; }

    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);

    fprintf(fptr, "%s", text);
    fclose(fptr);

    return 0;
}`,
                explanation: "`fopen()` opens a file. 'w' mode is for writing (creates or overwrites). `fprintf()` writes formatted text to the file. `fclose()` saves changes and closes the file."
            },
            {
                id: "c-s14-q2",
                title: "Read from file",
                description: "Read content from a file.",
                statement: "Write a program to read the content of `log.txt` and print it to the console.",
                inputFormat: "Requires a file `log.txt` to exist.",
                outputFormat: "The content of the file.",
                testCases: [{ input: "", output: "Hello CodeAlpha" }],
                solution: `#include <stdio.h>

int main() {
    FILE *fptr;
    char text[100];

    fptr = fopen("log.txt", "r");
    if(fptr == NULL) { return 1; }

    fgets(text, sizeof(text), fptr);

    printf("%s", text);
    fclose(fptr);
    return 0;
}`,
                explanation: "We open the file in 'r' mode for reading. `fgets()` reads a line of text (or up to the specified size) from the file stream into the character array."
            },
            {
                id: "c-s14-q3",
                title: "Append to file",
                description: "Add content to the end of a file.",
                statement: "Write a program to open `log.txt` in append mode and add a new line of text to it without erasing the existing content.",
                inputFormat: "A new line of text to append.",
                outputFormat: "The file `log.txt` is updated.",
                testCases: [{ input: "New line.", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *fptr;
    char text_to_append[100];

    fptr = fopen("log.txt", "a");
    if(fptr == NULL) return 1;

    printf("Enter text to append: ");
    fgets(text_to_append, sizeof(text_to_append), stdin);

    fprintf(fptr, "%s", text_to_append);
    fclose(fptr);
    
    printf("Appended successfully.\\n");
    return 0;
}`,
                explanation: "The 'a' mode in `fopen()` is for appending. If the file exists, the write cursor is placed at the end of the file. If it doesn't exist, it is created."
            },
            {
                id: "c-s14-q4",
                title: "Count characters",
                description: "Count the total number of characters in a file.",
                statement: "Write a program to count the total number of characters in a file, including spaces and newlines.",
                inputFormat: "Requires a file `data.txt`.",
                outputFormat: "The character count.",
                testCases: [{ input: "", output: "Total characters: 11" }],
                solution: `#include <stdio.h>

int main() {
    FILE *fptr = fopen("data.txt", "r"); // Assume data.txt contains "Hello World"
    if(fptr == NULL) return 1;
    
    int count = 0;
    while(fgetc(fptr) != EOF) {
        count++;
    }
    
    printf("Total characters: %d\\n", count);
    fclose(fptr);
    return 0;
}`,
                explanation: "The logic is simple: we open the file, and then loop, reading one character at a time with `fgetc()`, until we reach the `EOF`. A counter is incremented for each character read."
            },
            {
                id: "c-s14-q5",
                title: "Count lines",
                description: "Count the total number of lines in a file.",
                statement: "Write a program to count the number of lines in a text file.",
                inputFormat: "Requires a file `data.txt`.",
                outputFormat: "The line count.",
                testCases: [{ input: "", output: "Total lines: 3" }],
                solution: `#include <stdio.h>

int main() {
    FILE *fptr = fopen("data.txt", "r");
    if(fptr == NULL) return 1;
    
    int count = 0;
    char ch;
    int has_content = 0;

    while((ch = fgetc(fptr)) != EOF) {
        has_content = 1;
        if (ch == '\\n') {
            count++;
        }
    }
    
    if(has_content > 0) {
       count++;
    }

    printf("Total lines: %d\\n", count);
    fclose(fptr);
    return 0;
}`,
                explanation: "We iterate through the file character by character. Every time we encounter a newline character (`\\n`), we increment our line counter. An additional check is needed to count the last line if it doesn't end with a newline character."
            },
            {
                id: "c-s14-q6",
                title: "Count words",
                description: "Count the total number of words in a file.",
                statement: "Write a program to count the number of words in a file. Assume words are separated by spaces, tabs, or newlines.",
                inputFormat: "Requires a file `data.txt`.",
                outputFormat: "The word count.",
                testCases: [{ input: "", output: "Total words: 5" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    FILE *fptr = fopen("data.txt", "r");
    if(fptr == NULL) return 1;
    
    int word_count = 0;
    int in_word = 0; // State flag
    char ch;

    while((ch = fgetc(fptr)) != EOF) {
        if (isspace(ch)) {
            in_word = 0;
        } else if (in_word == 0) {
            in_word = 1;
            word_count++;
        }
    }
    
    printf("Total words: %d\\n", word_count);
    fclose(fptr);
    return 0;
}`,
                explanation: "This solution uses a state machine. The `in_word` flag tracks if we are currently inside a word. A word is counted only when we encounter a non-space character and we were previously *not* in a word. `isspace()` from `ctype.h` conveniently checks for space, tab, and newline."
            },
            {
                id: "c-s14-q7",
                title: "File copy program",
                description: "Copy the contents of one file to another.",
                statement: "Write a program to copy `source.txt` to `destination.txt`.",
                inputFormat: "A file `source.txt`.",
                outputFormat: "A new file `destination.txt` with the same content.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *source, *dest;
    char ch;
    
    source = fopen("source.txt", "r");
    if (source == NULL) return 1;
    
    dest = fopen("destination.txt", "w");
    if (dest == NULL) { fclose(source); return 1; }
    
    while ((ch = fgetc(source)) != EOF) {
        fputc(ch, dest);
    }
    
    printf("File copied successfully.\\n");
    fclose(source);
    fclose(dest);
    return 0;
}`,
                explanation: "We open the source file in read mode and the destination file in write mode. Then, we read characters from the source one by one using `fgetc()` and write them to the destination using `fputc()` until we reach the end of the source file."
            },
            {
                id: "c-s14-q8",
                title: "Merge two files",
                description: "Merge two files into a third.",
                statement: "Write a program to merge the contents of `file1.txt` and `file2.txt` into `merged.txt`.",
                inputFormat: "Two files, `file1.txt` and `file2.txt`.",
                outputFormat: "`merged.txt` containing content from both.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *f1, *f2, *fm;
    char ch;
    
    f1 = fopen("file1.txt", "r");
    f2 = fopen("file2.txt", "r");
    fm = fopen("merged.txt", "w");

    if(f1 == NULL || f2 == NULL || fm == NULL) return 1;
    
    // Copy file1
    while((ch = fgetc(f1)) != EOF) fputc(ch, fm);
    
    // Copy file2
    while((ch = fgetc(f2)) != EOF) fputc(ch, fm);
    
    printf("Files merged.\\n");
    fclose(f1); fclose(f2); fclose(fm);
    return 0;
}`,
                explanation: "The process is a sequence of two file copy operations. First, copy the entire contents of `file1.txt` into `merged.txt`. Then, copy the entire contents of `file2.txt` to `merged.txt`."
            },
            {
                id: "c-s14-q9",
                title: "Remove blank lines",
                description: "Remove all blank lines from a file.",
                statement: "Write a program that reads a file, removes all empty or whitespace-only lines, and writes the result to a new file.",
                inputFormat: "A source file.",
                outputFormat: "An output file without blank lines.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
#include <string.h>

int is_line_blank(const char *line) {
    while (*line != '\\0') {
        if (!isspace((unsigned char)*line))
            return 0;
        line++;
    }
    return 1;
}

int main() {
    FILE *src = fopen("source.txt", "r");
    FILE *temp = fopen("temp.txt", "w");
    char buffer[256];

    while(fgets(buffer, sizeof(buffer), src) != NULL) {
        if (!is_line_blank(buffer)) {
            fputs(buffer, temp);
        }
    }

    fclose(src);
    fclose(temp);
    
    // remove("source.txt");
    // rename("temp.txt", "source.txt");
    return 0;
}`,
                explanation: "This is a 'read-process-write-rename' pattern. We read from the original file line by line using `fgets`. A helper function checks if the line is blank. If not, we write it to a temporary file. After processing, the original file is replaced by the temporary file."
            },
            {
                id: "c-s14-q10",
                title: "Remove duplicate lines",
                description: "Remove duplicate lines from a file.",
                statement: "Read a file and write only the unique lines to a new file. The order does not need to be preserved.",
                inputFormat: "A source file.",
                outputFormat: "An output file with unique lines.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is very difficult in C without a hash table.
// This O(n^2) solution is inefficient for large files.
#include <stdio.h>
#include <string.h>

int main() {
    FILE *in = fopen("input.txt", "r");
    FILE *out = fopen("output.txt", "w");
    char lines[100][100];
    int line_count = 0;
    
    while(fgets(lines[line_count], 100, in)) {
        int is_duplicate = 0;
        for(int i = 0; i < line_count; i++) {
            if(strcmp(lines[i], lines[line_count]) == 0) {
                is_duplicate = 1;
                break;
            }
        }
        if(!is_duplicate) {
            fputs(lines[line_count], out);
            line_count++;
        }
    }
    // This simple approach is limited by the size of the 'lines' array.
    fclose(in); fclose(out);
    return 0;
}`,
                explanation: "This solution reads lines into a 2D character array (an array of strings). For each new line read, it checks if that line already exists in the array of lines read so far. If not, it writes the line to the output file and adds it to the array. This is very memory-intensive and slow."
            },
            {
                id: "c-s14-q11",
                title: "Replace word in file",
                description: "Replace a specific word in a file.",
                statement: "Read a file, replace all occurrences of a specific word with another, and write to a new file.",
                inputFormat: "A source file.",
                outputFormat: "A destination file with replaced words.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    FILE *in = fopen("source.txt", "r");
    FILE *out = fopen("dest.txt", "w");
    char word[50];
    const char *old_word = "example";
    const char *new_word = "sample";

    while(fscanf(in, "%s", word) == 1) {
        if(strcmp(word, old_word) == 0) {
            fprintf(out, "%s ", new_word);
        } else {
            fprintf(out, "%s ", word);
        }
    }
    fclose(in); fclose(out);
    return 0;
}`,
                explanation: "`fscanf` is used to read the file word by word. For each word, we use `strcmp` to check if it's the word we want to replace. We write either the new word or the original word to the output file, followed by a space."
            },
            {
                id: "c-s14-q12",
                title: "File statistics (size/time)",
                description: "Get file metadata like size and modification time.",
                statement: "Write a program to get and display the size and last modification time of a file. This is OS-dependent and this example uses POSIX.",
                inputFormat: "A filename.",
                outputFormat: "File size and modification time.",
                testCases: [{ input: "log.txt", output: "Size: [size] bytes\nLast modified: [time]" }],
                solution: `#include <stdio.h>
#include <sys/stat.h>
#include <time.h>

int main() {
    struct stat file_stats;
    char filename[] = "log.txt";

    if (stat(filename, &file_stats) == 0) {
        printf("Size: %ld bytes\\n", file_stats.st_size);
        printf("Last modified: %s", ctime(&file_stats.st_mtime));
    } else {
        printf("Could not get file stats.\\n");
    }
    return 0;
}`,
                explanation: "The `stat` function from `<sys/stat.h>` fills a `struct stat` with information about a file. `file_stats.st_size` gives the size in bytes, and `file_stats.st_mtime` gives the modification time, which can be formatted with `ctime()`."
            },
            {
                id: "c-s14-q13",
                title: "Binary file write",
                description: "Write structured data to a binary file.",
                statement: "Define a `struct Point` and write an instance of it to a binary file using `fwrite`.",
                inputFormat: "No input.",
                outputFormat: "A binary file `point.bin` is created.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
struct Point { int x; int y; };
int main() {
    FILE *fptr = fopen("point.bin", "wb"); // 'wb' for write binary
    if(fptr == NULL) return 1;
    
    struct Point p1 = {10, 20};
    
    fwrite(&p1, sizeof(struct Point), 1, fptr);
    
    fclose(fptr);
    return 0;
}`,
                explanation: "`fwrite` writes raw bytes from memory directly to a file. `&p1` is the address of the data, `sizeof(struct Point)` is the size of one data block, `1` is the number of blocks to write, and `fptr` is the file pointer."
            },
            {
                id: "c-s14-q14",
                title: "Binary file read",
                description: "Read structured data from a binary file.",
                statement: "Read the `Point` structure saved in the previous problem from `point.bin` using `fread`.",
                inputFormat: "Requires `point.bin` to exist.",
                outputFormat: "The coordinates of the point.",
                testCases: [{ input: "", output: "Point: (10, 20)" }],
                solution: `#include <stdio.h>
struct Point { int x; int y; };
int main() {
    FILE *fptr = fopen("point.bin", "rb"); // 'rb' for read binary
    if(fptr == NULL) return 1;
    
    struct Point p2;
    
    fread(&p2, sizeof(struct Point), 1, fptr);
    
    printf("Point: (%d, %d)", p2.x, p2.y);
    fclose(fptr);
    return 0;
}`,
                explanation: "`fread` reads raw bytes from a file directly into a memory location (the address of our `p2` struct). This reconstructs the struct in memory exactly as it was saved."
            },
            {
                id: "c-s14-q15",
                title: "Student record file",
                description: "Create a simple database using structs and files.",
                statement: "Create a simple menu-driven program to add and view student records, storing the data in a binary file.",
                inputFormat: "User choices and data.",
                outputFormat: "Interaction with the file database.",
                testCases: [{ input: "", output: "" }],
                solution: `// This combines fwrite, fread, and struct concepts.
// A menu would allow the user to:
// 1. Add record: Open file in 'ab' (append binary), get data, fwrite the struct.
// 2. View records: Open in 'rb', loop with fread until it returns 0, print each struct.`,
                explanation: "This problem combines file handling with structures to create a persistent data store. `fwrite` is used to add records in append mode, and `fread` is used in a loop to read and display all records."
            },
            {
                id: "c-s14-q16",
                title: "Random access file",
                description: "Read a specific record from a binary file.",
                statement: "In a binary file of student records, use `fseek` to jump to the Nth record and read its data.",
                inputFormat: "The record number to read.",
                outputFormat: "The details of that specific record.",
                testCases: [{ input: "2", output: "Details of the 2nd student." }],
                solution: `#include <stdio.h>
// struct Student { ... };
int main() {
    FILE *fptr = fopen("students.dat", "rb");
    int record_num = 2; // Read the 2nd record
    
    // Seek to the beginning of the (record_num - 1)th record
    fseek(fptr, (record_num - 1) * sizeof(struct Student), SEEK_SET);

    struct Student s;
    fread(&s, sizeof(struct Student), 1, fptr);
    // ... print student details ...
    fclose(fptr);
    return 0;
}`,
                explanation: "`fseek(file_pointer, offset, origin)` moves the file cursor. `SEEK_SET` means the offset is relative to the start of the file. By calculating the offset `(n-1) * sizeof(struct)`, we can jump directly to any record without reading the ones before it."
            },
            {
                id: "c-s14-q17",
                title: "Check file exists",
                description: "Check if a file exists before opening.",
                statement: "Write a program that checks if a file exists. If it does, print 'Exists', otherwise print 'Does not exist'.",
                inputFormat: "A filename string.",
                outputFormat: "Existence status.",
                testCases: [{ input: "log.txt", output: "Exists" }],
                solution: `#include <stdio.h>

int main() {
    char filename[] = "log.txt";
    FILE *fptr = fopen(filename, "r");

    if (fptr == NULL) {
        printf("Does not exist");
    } else {
        printf("Exists");
        fclose(fptr);
    }
    return 0;
}`,
                explanation: "A simple way to check for a file's existence is to try opening it in read mode. If `fopen` returns `NULL`, it means the file could not be opened, which usually indicates it doesn't exist (or you don't have permission to read it)."
            },
            {
                id: "c-s14-q18",
                title: "Delete file",
                description: "Delete a file from the disk.",
                statement: "Write a program to delete a specified file.",
                inputFormat: "The name of the file to delete.",
                outputFormat: "A success or failure message.",
                testCases: [{ input: "temp.txt", output: "File deleted successfully." }],
                solution: `#include <stdio.h>

int main() {
    if (remove("temp.txt") == 0) {
        printf("File deleted successfully.");
    } else {
        printf("Error deleting file.");
    }
    return 0;
}`,
                explanation: "The `remove()` function from `stdio.h` is used to delete a file. It returns 0 on success and a non-zero value on failure."
            },
            {
                id: "c-s14-q19",
                title: "Insert text at position",
                description: "Insert text into a file at a specific byte offset.",
                statement: "Write a program to insert a string into a file at a given position without overwriting existing data.",
                inputFormat: "Filename, position, and string to insert.",
                outputFormat: "The modified file.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is very difficult to do in-place. The standard approach:
// 1. Open the original file for reading.
// 2. Create a temporary file for writing.
// 3. Copy the first 'position' bytes from original to temp.
// 4. Write the new string to the temp file.
// 5. Copy the rest of the original file to the temp file.
// 6. Close both files.
// 7. Delete the original file and rename the temp file.
`,
                explanation: "Files are stored sequentially on disk, so you can't just 'insert' data in the middle. The safe and standard way is to construct a new file with the desired content and then replace the original with the new one."
            },
            {
                id: "c-s14-q20",
                title: "Encryption & decryption file",
                description: "Encrypt a file using a simple XOR cipher.",
                statement: "Write a program that encrypts a file by XORing each byte with a secret key. Running the same program on the encrypted file will decrypt it.",
                inputFormat: "An input file.",
                outputFormat: "An encrypted output file.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *in = fopen("source.txt", "rb");
    FILE *out = fopen("encrypted.txt", "wb");
    char key = 'K';
    char ch;

    while((ch = fgetc(in)) != EOF) {
        fputc(ch ^ key, out);
    }
    fclose(in); fclose(out);
    return 0;
}`,
                explanation: "An XOR cipher is a simple symmetric encryption algorithm. It works by applying the bitwise XOR operator to every byte of the data with a secret key. Applying the same XOR operation again with the same key reverses the process and decrypts the data."
            },
            {
                id: "c-s14-q21",
                title: "Reverse file content",
                description: "Reverse the contents of a file.",
                statement: "Write a program that reads a file and writes its contents in reverse order to a new file.",
                inputFormat: "A source file.",
                outputFormat: "A new file with reversed content.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>

int main() {
    FILE *in = fopen("source.txt", "r");
    FILE *out = fopen("reversed.txt", "w");
    
    // Move file pointer to the end
    fseek(in, 0, SEEK_END);
    long size = ftell(in);
    
    // Read backwards from the end
    for (long i = size - 1; i >= 0; i--) {
        fseek(in, i, SEEK_SET);
        fputc(fgetc(in), out);
    }
    
    fclose(in); fclose(out);
    return 0;
}`,
                explanation: "To reverse a file, we first need to find its size by seeking to the end (`SEEK_END`). Then, we loop backwards from `size - 1` down to 0. In each iteration, we `fseek` to that position and read a single character to write to the output file."
            },
             {
                id: "c-s14-q22",
                title: "Compare two files",
                description: "Compare two files character by character.",
                statement: "Write a program that compares two files and prints whether they are identical or at which line and character they first differ.",
                inputFormat: "Requires two files, fileA.txt and fileB.txt.",
                outputFormat: "A message indicating if files are identical or where they differ.",
                testCases: [{ input: "", output: "Files are identical." }],
                solution: `#include <stdio.h>

int main() {
    FILE *fp1, *fp2;
    int ch1, ch2;
    char fname1[] = "fileA.txt";
    char fname2[] = "fileB.txt";
    
    fp1 = fopen(fname1, "r");
    fp2 = fopen(fname2, "r");

    if (fp1 == NULL || fp2 == NULL) {
       printf("Error opening files.");
       return 1;
    }

    ch1 = getc(fp1);
    ch2 = getc(fp2);

    int line = 1, pos = 0;
    while (ch1 != EOF && ch2 != EOF) {
        pos++;
        if (ch1 == '\\n' && ch2 == '\\n') {
            line++;
            pos = 0;
        }
        if (ch1 != ch2) {
            printf("Files differ at line %d, position %d\\n", line, pos);
            fclose(fp1);
            fclose(fp2);
            return 0;
        }
        ch1 = getc(fp1);
        ch2 = getc(fp2);
    }
    
    if (ch1 == EOF && ch2 == EOF) {
        printf("Files are identical.\\n");
    } else {
        printf("Files have different lengths.\\n");
    }

    fclose(fp1);
    fclose(fp2);
    return 0;
}`,
                explanation: "The program opens both files and reads them character by character in a loop. It compares each pair of characters. If a mismatch is found, it reports the line and position of the difference. If one file ends before the other, they have different lengths. If both end at the same time without any mismatches, they are identical."
            },
            {
                id: "c-s14-q23",
                title: "Sort lines of file",
                description: "Read lines from a file, sort them, and write to a new file.",
                statement: "Write a program that reads all lines from a text file, sorts them alphabetically, and writes the sorted lines to a new output file.",
                inputFormat: "A source file with unsorted lines.",
                outputFormat: "An output file with sorted lines.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINES 100
#define MAX_LEN 100

// Comparison function for qsort
int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int main() {
    FILE *in = fopen("input.txt", "r");
    if (in == NULL) return 1;

    char *lines[MAX_LINES];
    char buffer[MAX_LEN];
    int line_count = 0;
    
    // Read lines into an array of strings
    while (fgets(buffer, MAX_LEN, in) && line_count < MAX_LINES) {
        lines[line_count] = malloc(strlen(buffer) + 1);
        strcpy(lines[line_count], buffer);
        line_count++;
    }
    fclose(in);

    // Sort the array of strings
    qsort(lines, line_count, sizeof(char *), compare);

    // Write sorted lines to output file
    FILE *out = fopen("sorted.txt", "w");
    for (int i = 0; i < line_count; i++) {
        fputs(lines[i], out);
        free(lines[i]); // Free the allocated memory
    }
    fclose(out);

    printf("File sorted successfully.");
    return 0;
}`,
                explanation: "This program reads all lines from a file into an array of dynamically allocated strings. It then uses the standard library `qsort` function to sort the array of strings. `qsort` requires a custom comparison function, which we provide using `strcmp`. Finally, it writes the sorted lines to a new file and frees the allocated memory."
            },
            {
                id: "c-s14-q24",
                title: "Word frequency in file",
                description: "Count the frequency of each word in a text file.",
                statement: "Read a text file, and count the frequency of each unique word. This is a very complex problem in C without custom hash map structures.",
                inputFormat: "A text file with content.",
                outputFormat: "Word frequencies.",
                testCases: [{ input: "apple banana apple", output: "apple: 2\nbanana: 1\n" }],
                solution: `// This requires advanced data structures in C, like a hash table or a trie,
// for an efficient solution. A simpler (but inefficient) approach is shown.
#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORDS 100
#define MAX_WORD_LEN 50

int main() {
    FILE *fptr = fopen("data.txt", "r");
    if (fptr == NULL) return 1;

    char words[MAX_WORDS][MAX_WORD_LEN];
    int counts[MAX_WORDS] = {0};
    int word_count = 0;
    char buffer[MAX_WORD_LEN];

    while (fscanf(fptr, "%s", buffer) == 1) {
        // Simple word normalization (lowercase)
        for(int i = 0; buffer[i]; i++){
          buffer[i] = tolower(buffer[i]);
        }
        
        int found = 0;
        for (int i = 0; i < word_count; i++) {
            if (strcmp(words[i], buffer) == 0) {
                counts[i]++;
                found = 1;
                break;
            }
        }
        
        if (!found && word_count < MAX_WORDS) {
            strcpy(words[word_count], buffer);
            counts[word_count]++;
            word_count++;
        }
    }
    
    for (int i = 0; i < word_count; i++) {
        printf("%s: %d\\n", words[i], counts[i]);
    }
    
    fclose(fptr);
    return 0;
}`,
                explanation: "This solution uses a brute-force approach. It maintains an array of unique words found so far and a parallel array of their counts. For each word read from the file, it searches the array of unique words. If found, it increments the count. If not, it adds the new word to the array. This is inefficient (O(n*m) where n is total words and m is unique words) but demonstrates the logic without complex data structures."
            },
            {
                id: "c-s14-q25",
                title: "Logging system program",
                description: "Create a simple logging system.",
                statement: "Create a function `log_message(char *message)` that appends a timestamp followed by the message to a file `app.log`.",
                inputFormat: "No input, demonstration.",
                outputFormat: "A log file with timestamped messages.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
#include <time.h>

void log_message(char *message) {
    FILE *log_file = fopen("app.log", "a");
    if (log_file == NULL) return;
    
    time_t t = time(NULL);
    struct tm *tm_info = localtime(&t);
    char time_buffer[26];
    strftime(time_buffer, 26, "%Y-%m-%d %H:%M:%S", tm_info);
    
    fprintf(log_file, "[%s] %s\\n", time_buffer, message);
    fclose(log_file);
}

int main() {
    log_message("Application started.");
    log_message("Processing data.");
    return 0;
}`,
                explanation: "This function uses the `time.h` library to get the current system time. `strftime` formats the time into a human-readable string. The file is opened in append mode ('a') so that each log message is added to the end of the file without erasing previous logs."
            }
        ]
    }
];
