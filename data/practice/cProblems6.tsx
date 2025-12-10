import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART6: ProblemCategory[] = [
    {
        category: "SECTION 11 — Pointers",
        problems: [
            {
                id: "c-s11-q1",
                title: "Pointer basics",
                description: "Demonstrate basic pointer usage.",
                statement: "Declare an integer, a pointer to it, and print the value and address using both the variable and the pointer.",
                inputFormat: "No input.",
                outputFormat: "Value and address printed twice.",
                testCases: [{ input: "", output: "Value: 42\nAddress: [some_address]\nValue via pointer: 42\nAddress stored in pointer: [some_address]" }],
                solution: `#include <stdio.h>

int main() {
    int val = 42;
    int *ptr = &val;

    printf("Value: %d\\n", val);
    printf("Address: %p\\n", (void *)&val);
    printf("Value via pointer: %d\\n", *ptr);
    printf("Address stored in pointer: %p\\n", (void *)ptr);

    return 0;
}`,
                explanation: "`&val` gets the memory address of `val`. `ptr` stores this address. `*ptr` (dereferencing) retrieves the value stored at the address `ptr` is pointing to. It's good practice to cast pointers to `(void *)` when printing with `%p`."
            },
            {
                id: "c-s11-q2",
                title: "Pointer arithmetic",
                description: "Demonstrate pointer arithmetic.",
                statement: "Create a pointer to the first element of an integer array. Use pointer arithmetic to access the third element.",
                inputFormat: "No input.",
                outputFormat: "The value of the third element.",
                testCases: [{ input: "", output: "30" }],
                solution: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40};
    int *ptr = arr; // Array name points to the first element

    // Move pointer two positions forward
    ptr = ptr + 2; 

    printf("%d", *ptr);

    return 0;
}`,
                explanation: "When you add an integer `n` to a pointer, it moves the pointer forward by `n * sizeof(data_type)` bytes. So, `ptr + 2` moves the pointer to the address of the third integer in the array."
            },
            {
                id: "c-s11-q3",
                title: "Pointer to array",
                description: "Iterate through an array using a pointer.",
                statement: "Declare an integer array and a pointer to its first element. Use a loop and the pointer to print all elements of the array.",
                inputFormat: "No input.",
                outputFormat: "The elements of the array separated by spaces.",
                testCases: [{ input: "", output: "1 2 3 4 5 " }],
                solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    int i;

    for (i = 0; i < 5; i++) {
        printf("%d ", *(ptr + i));
    }
    return 0;
}`,
                explanation: "The expression `*(ptr + i)` is equivalent to `arr[i]`. It accesses the value at the memory address `i` elements away from the starting address stored in `ptr`."
            },
            {
                id: "c-s11-q4",
                title: "Pointer to function",
                description: "Call a function using a function pointer.",
                statement: "Create a function that adds two integers. In `main`, declare a pointer to this function, assign the function's address to it, and call the function through the pointer.",
                inputFormat: "No input.",
                outputFormat: "The sum of two numbers.",
                testCases: [{ input: "", output: "Sum: 15" }],
                solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    // Declare a function pointer
    int (*fun_ptr)(int, int);
    
    // Assign the address of the 'add' function
    fun_ptr = &add;
    
    // Call the function using the pointer
    int result = (*fun_ptr)(10, 5);
    
    printf("Sum: %d", result);
    return 0;
}`,
                explanation: "A function pointer stores the address of a function. The syntax for declaration is `return_type (*pointer_name)(parameter_types)`. You can then call the function it points to using `(*pointer_name)(arguments)`."
            },
            {
                id: "c-s11-q5",
                title: "Returning pointer from function",
                description: "Return a pointer to a static variable.",
                statement: "Create a function that returns a pointer to a `static` local variable. Call it and print the value.",
                inputFormat: "No input.",
                outputFormat: "The value of the static variable.",
                testCases: [{ input: "", output: "Value is: 100" }],
                solution: `#include <stdio.h>

int* getStaticValue() {
    static int val = 100;
    return &val;
}

int main() {
    int* ptr = getStaticValue();
    printf("Value is: %d", *ptr);
    return 0;
}`,
                explanation: "You should never return a pointer to a regular local variable, as it will be destroyed when the function exits. However, `static` variables persist for the entire program's lifetime, so it is safe to return a pointer to them."
            },
            {
                id: "c-s11-q6",
                title: "Swap using pointers",
                description: "Swap two numbers using call-by-reference.",
                statement: "Write a function `void swap(int *a, int *b)` that swaps the values of two integers.",
                inputFormat: "Two integers.",
                outputFormat: "The swapped integers.",
                testCases: [{ input: "10 20", output: "20 10" }],
                solution: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y); // Pass addresses
    printf("%d %d", x, y);
    return 0;
}`,
                explanation: "To modify variables from another function, we must pass their addresses (call-by-reference). The `swap` function takes pointers and uses the dereference operator `*` to access and change the values at those addresses."
            },
            {
                id: "c-s11-q7",
                title: "Reverse array using pointers",
                description: "Reverse an array in-place using pointers.",
                statement: "Write a function that reverses an array in-place using two pointers, one at the start and one at the end.",
                inputFormat: "No input.",
                outputFormat: "The reversed array.",
                testCases: [{ input: "", output: "5 4 3 2 1 " }],
                solution: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    int *start = arr;
    int *end = arr + n - 1;
    int temp;

    while (start < end) {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }

    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "This is a classic in-place reversal algorithm. A `start` pointer points to the first element and an `end` pointer to the last. We swap the values they point to, then move `start` forward and `end` backward until they meet in the middle."
            },
            {
                id: "c-s11-q8",
                title: "Copy array using pointers",
                description: "Copy an array using pointer notation.",
                statement: "Write a function that copies the contents of one array into another using pointer arithmetic.",
                inputFormat: "No input.",
                outputFormat: "The copied array.",
                testCases: [{ input: "", output: "10 20 30 " }],
                solution: `#include <stdio.h>

void copyArray(int *dest, int *src, int size) {
    for (int i = 0; i < size; i++) {
        *(dest + i) = *(src + i);
    }
}

int main() {
    int src[] = {10, 20, 30};
    int dest[3];
    copyArray(dest, src, 3);
    for(int i = 0; i < 3; i++) printf("%d ", dest[i]);
    return 0;
}`,
                explanation: "The function iterates from 0 to `size - 1`. In each iteration, it dereferences the source pointer at offset `i` (`*(src + i)`) and assigns its value to the dereferenced destination pointer at the same offset."
            },
            {
                id: "c-s11-q9",
                title: "String length using pointers",
                description: "Find string length without using strlen().",
                statement: "Write a function that calculates the length of a string using a pointer.",
                inputFormat: "A single string.",
                outputFormat: "The length of the string.",
                testCases: [{ input: "CodeAlpha", output: "Length: 9" }],
                solution: `#include <stdio.h>

int stringLength(char *s) {
    int length = 0;
    while (*s != '\\0') {
        length++;
        s++;
    }
    return length;
}

int main() {
    char str[] = "CodeAlpha";
    printf("Length: %d", stringLength(str));
    return 0;
}`,
                explanation: "The function takes a pointer to the first character. It loops, incrementing a counter and the pointer itself (`s++`), until the pointer points to the null terminator `\\0`."
            },
            {
                id: "c-s11-q10",
                title: "String reverse using pointers",
                description: "Reverse a string in-place using pointers.",
                statement: "Write a function to reverse a string in-place using pointers.",
                inputFormat: "A string.",
                outputFormat: "The reversed string.",
                testCases: [{ input: "hello", output: "olleh" }],
                solution: `#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    char *start = str;
    char *end = str + strlen(str) - 1;
    char temp;
    while (start < end) {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

int main() {
    char myStr[] = "hello";
    reverseString(myStr);
    printf("%s", myStr);
    return 0;
}`,
                explanation: "This is the same two-pointer logic used for reversing an integer array, but applied to a character array (string)."
            },
            {
                id: "c-s11-q11",
                title: "Double pointer usage",
                description: "Modify a pointer from within a function.",
                statement: "Write a function that allocates memory for an integer and makes an external pointer point to it. This requires a pointer to a pointer.",
                inputFormat: "No input.",
                outputFormat: "Value: 100",
                testCases: [{ input: "", output: "Value: 100" }],
                solution: `#include <stdio.h>
#include <stdlib.h>

void allocate(int **p) {
    *p = (int*) malloc(sizeof(int));
    **p = 100;
}

int main() {
    int *ptr = NULL;
    allocate(&ptr);
    if(ptr != NULL) {
        printf("Value: %d", *ptr);
        free(ptr);
    }
    return 0;
}`,
                explanation: "If you want a function to change where a pointer points (not just the value it points to), you must pass the address of the pointer itself. `int **p` is a pointer to a pointer to an int. `*p` gives us the original pointer (`ptr`), which we can then modify to point to the newly allocated memory."
            },
            {
                id: "c-s11-q12",
                title: "Pointer to structure",
                description: "Access struct members using the arrow operator.",
                statement: "Define a `struct Point` with x and y coordinates. Create a pointer to a `Point` object and use the arrow operator (`->`) to access its members.",
                inputFormat: "No input.",
                outputFormat: "Coordinates: (10, 20)",
                testCases: [{ input: "", output: "Coordinates: (10, 20)" }],
                solution: `#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    struct Point *ptr = &p1;

    printf("Coordinates: (%d, %d)", ptr->x, ptr->y);
    return 0;
}`,
                explanation: "The arrow operator `->` is a convenient shorthand. `ptr->x` is equivalent to `(*ptr).x`. It dereferences the structure pointer and accesses the specified member."
            },
            {
                id: "c-s11-q13",
                title: "Pointer to pointer",
                description: "Demonstrate a pointer to a pointer.",
                statement: "Declare an integer, a pointer to it, and a pointer to the first pointer. Print the value using all three.",
                inputFormat: "No input.",
                outputFormat: "42\n42\n42",
                testCases: [{ input: "", output: "42\n42\n42" }],
                solution: `#include <stdio.h>

int main() {
    int var = 42;
    int *ptr1 = &var;
    int **ptr2 = &ptr1; // Pointer to a pointer

    printf("%d\\n", var);      // Direct access
    printf("%d\\n", *ptr1);     // Access via single pointer
    printf("%d\\n", **ptr2);    // Access via double pointer
    return 0;
}`,
                explanation: "A pointer to a pointer stores the memory address of another pointer. To get to the final value, you must dereference twice. `*ptr2` gives you `ptr1`, and `**ptr2` gives you `var`."
            },
            {
                id: "c-s11-q14",
                title: "Allocate array dynamically",
                description: "Use malloc with a pointer.",
                statement: "This is a duplicate concept from 'Dynamic Memory' section but is fundamental to pointers. Read N, allocate an array for N ints, and fill it.",
                inputFormat: "Integer N, then N integers.",
                outputFormat: "The N integers.",
                testCases: [{ input: "3\n10 20 30", output: "10 20 30 " }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    scanf("%d", &n);
    int *arr = (int*) malloc(n * sizeof(int));
    if (arr == NULL) return 1;
    for(i=0; i<n; i++) scanf("%d", &arr[i]);
    for(i=0; i<n; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,
                explanation: "The `malloc` function reserves a block of memory on the heap and returns a pointer to the beginning of that block. This allows you to create arrays whose size is determined at runtime."
            },
            {
                id: "c-s11-q15",
                title: "Free allocated memory",
                description: "Use free() to prevent memory leaks.",
                statement: "Allocate memory for an integer, use it, and then explicitly free it using `free()`.",
                inputFormat: "No input.",
                outputFormat: "Memory freed.",
                testCases: [{ input: "", output: "Memory freed." }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int*) malloc(sizeof(int));
    *p = 100;
    // ... use p ...
    free(p);
    printf("Memory freed.");
    return 0;
}`,
                explanation: "Any memory you allocate with `malloc`, `calloc`, or `realloc` must be manually deallocated with `free()`. Failing to do so causes a memory leak."
            },
            {
                id: "c-s11-q16",
                title: "Dangling pointer demo",
                description: "Show what a dangling pointer is.",
                statement: "Demonstrate a dangling pointer by accessing memory after it has been freed.",
                inputFormat: "No input.",
                outputFormat: "Unpredictable behavior (e.g., garbage value, crash).",
                testCases: [{ input: "", output: "Value (undefined): [garbage]" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int*) malloc(sizeof(int));
    *p = 10;
    free(p); // Memory is now deallocated
    // 'p' is now a dangling pointer
    printf("Value (undefined): %d", *p); // Accessing freed memory
    return 0;
}`,
                explanation: "A dangling pointer is a pointer that points to a memory location that has been deallocated. Accessing it is undefined behavior and can lead to crashes or unpredictable results."
            },
            {
                id: "c-s11-q17",
                title: "Null pointer handling",
                description: "Check for NULL before using a pointer.",
                statement: "Demonstrate checking if a pointer is `NULL` before dereferencing it.",
                inputFormat: "No input.",
                outputFormat: "Pointer is NULL.",
                testCases: [{ input: "", output: "Pointer is NULL." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = NULL;
    if (p == NULL) {
        printf("Pointer is NULL.");
    } else {
        printf("%d", *p);
    }
    return 0;
}`,
                explanation: "`NULL` is a special value indicating that a pointer does not point to any valid memory location. Attempting to dereference a `NULL` pointer will crash your program. Always check for `NULL` before using a pointer, especially one returned from `malloc`."
            },
            {
                id: "c-s11-q18",
                title: "Array of pointers",
                description: "Use an array of pointers to strings.",
                statement: "Create an array of character pointers, where each pointer points to a string literal. Print all the strings.",
                inputFormat: "No input.",
                outputFormat: "Apple\nBanana\nCherry",
                testCases: [{ input: "", output: "Apple\nBanana\nCherry" }],
                solution: `#include <stdio.h>
int main() {
    char *fruits[] = {"Apple", "Banana", "Cherry"};
    int i;
    for (i = 0; i < 3; i++) {
        printf("%s\\n", fruits[i]);
    }
    return 0;
}`,
                explanation: "This creates an array where each element is a `char*`. Each pointer stores the starting address of a string literal stored in a read-only section of memory. This is an efficient way to handle a list of constant strings."
            },
            {
                id: "c-s11-q19",
                title: "Function pointer array",
                description: "Create a simple menu using an array of function pointers.",
                statement: "Create functions for add and subtract. Store their pointers in an array. Ask the user for a choice (0 or 1) and call the corresponding function from the array.",
                inputFormat: "Choice (0 or 1), then two numbers.",
                outputFormat: "The result.",
                testCases: [{ input: "1 10 5", output: "Result: 5" }],
                solution: `#include <stdio.h>
int add(int a, int b){ return a+b; }
int sub(int a, int b){ return a-b; }
int main() {
    int (*fun_ptr_arr[])(int, int) = {add, sub};
    int choice, a, b;
    scanf("%d %d %d", &choice, &a, &b);
    if(choice >= 0 && choice < 2) {
        int result = (*fun_ptr_arr[choice])(a, b);
        printf("Result: %d", result);
    }
    return 0;
}`,
                explanation: "An array of function pointers allows you to select a function to call at runtime using an index. This is useful for implementing state machines, callback systems, or simple command dispatchers."
            },
            {
                id: "c-s11-q20",
                title: "Generic pointer usage",
                description: "Use a void pointer for generic functions.",
                statement: "Write a generic `swap` function that can swap any data type using `void*` and `memcpy`.",
                inputFormat: "No input.",
                outputFormat: "a=20, b=10",
                testCases: [{ input: "", output: "a=20, b=10" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void generic_swap(void *a, void *b, size_t size) {
    void *temp = malloc(size);
    memcpy(temp, a, size);
    memcpy(a, b, size);
    memcpy(b, temp, size);
    free(temp);
}
int main() {
    int a = 10, b = 20;
    generic_swap(&a, &b, sizeof(int));
    printf("a=%d, b=%d", a, b);
    return 0;
}`,
                explanation: "A `void*` is a generic pointer that can point to any data type. Since the compiler doesn't know the size of the data it points to, we must explicitly provide the size. `memcpy` is used to copy raw bytes of memory from one location to another."
            },
            {
                id: "c-s11-q21",
                title: "Pointer to constant",
                description: "Use `const` to prevent modifying a value via a pointer.",
                statement: "Declare a pointer to a constant integer. Try to modify the value through the pointer and observe the compiler error.",
                inputFormat: "No input (code demonstrates concept).",
                outputFormat: "Compiler error message.",
                testCases: [{ input: "", output: "error: assignment of read-only location" }],
                solution: `#include <stdio.h>
int main() {
    int val = 10;
    const int *ptr = &val; // Pointer to a constant integer
    // *ptr = 20; // This line will cause a compile-time error.
    val = 20; // The original variable can still be changed.
    printf("%d", *ptr);
    return 0;
}`,
                explanation: "`const int *ptr` means '`ptr` is a pointer to an integer which is constant'. You cannot change the integer's value *through this pointer*. However, you can change where the pointer points (`ptr = &another_var;`), and the original variable can be changed directly."
            },
            {
                id: "c-s11-q22",
                title: "Constant pointer",
                description: "Use `const` to make the pointer itself constant.",
                statement: "Declare a constant pointer to an integer. Try to make it point to another variable and observe the compiler error.",
                inputFormat: "No input (code demonstrates concept).",
                outputFormat: "Compiler error message.",
                testCases: [{ input: "", output: "error: assignment of read-only variable 'ptr'" }],
                solution: `#include <stdio.h>
int main() {
    int val1 = 10, val2 = 20;
    int * const ptr = &val1; // Constant pointer to an integer
    *ptr = 15; // This is allowed.
    // ptr = &val2; // This line will cause a compile-time error.
    printf("%d", *ptr);
    return 0;
}`,
                explanation: "`int * const ptr` means '`ptr` is a constant pointer to an integer'. You cannot change the address stored in the pointer, but you can change the value at the address it points to."
            },
            {
                id: "c-s11-q23",
                title: "Pointer to const pointer",
                description: "Use `const` for both pointer and value.",
                statement: "Declare a constant pointer to a constant integer and try to modify both.",
                inputFormat: "No input.",
                outputFormat: "Compiler errors for both attempts.",
                testCases: [{ input: "", output: "Two compile errors." }],
                solution: `#include <stdio.h>
int main() {
    int val1 = 10, val2 = 20;
    const int * const ptr = &val1;
    // *ptr = 15;    // Error: cannot change value
    // ptr = &val2;  // Error: cannot change pointer
    printf("%d", *ptr);
    return 0;
}`,
                explanation: "`const int * const ptr` means '`ptr` is a constant pointer to an integer which is also constant'. Neither the pointer nor the value it points to can be changed."
            },
            {
                id: "c-s11-q24",
                title: "Pointer to 2D array",
                description: "Pass a 2D array to a function using pointers.",
                statement: "Write a function that takes a pointer to a 2D array and its dimensions, and prints the elements.",
                inputFormat: "No input.",
                outputFormat: "The elements of the 2D array.",
                testCases: [{ input: "", output: "1 2 3 4 5 6 " }],
                solution: `#include <stdio.h>

void print2D(int (*arr)[3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
    }
}
int main() {
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    print2D(matrix, 2);
    return 0;
}`,
                explanation: "When passing a 2D array, you must specify the size of the inner dimension (columns). The syntax `int (*arr)[3]` declares a pointer `arr` that points to an array of 3 integers."
            },
            {
                id: "c-s11-q25",
                title: "Pointer to void",
                description: "Demonstrate the use of a generic `void` pointer.",
                statement: "Create a `void` pointer, point it to an integer, then to a float, and print the values by casting.",
                inputFormat: "No input.",
                outputFormat: "The integer and float values.",
                testCases: [{ input: "", output: "10\n3.140000" }],
                solution: `#include <stdio.h>
int main() {
    void *ptr;
    int i = 10;
    float f = 3.14;

    ptr = &i;
    printf("%d\\n", *(int*)ptr);

    ptr = &f;
    printf("%f\\n", *(float*)ptr);

    return 0;
}`,
                explanation: "A `void*` can point to any data type, but you cannot dereference it directly. You must first cast it to the correct pointer type (e.g., `(int*)ptr`) before you can use the `*` operator."
            },
            {
                id: "c-s11-q26",
                title: "Compare pointers",
                description: "Compare the addresses stored in two pointers.",
                statement: "Create two pointers pointing to different elements in an array and compare them using relational operators.",
                inputFormat: "No input.",
                outputFormat: "Comparison results (1 for true, 0 for false).",
                testCases: [{ input: "", output: "p1 is before p2: 1" }],
                solution: `#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30};
    int *p1 = &arr[0];
    int *p2 = &arr[2];

    if (p1 < p2) {
        printf("p1 is before p2: 1");
    }
    return 0;
}`,
                explanation: "You can compare pointers that point to elements of the same array. The comparison checks which pointer points to a higher memory address."
            },
            {
                id: "c-s11-q27",
                title: "Pointer-based sorting",
                description: "Bubble sort using pointer notation.",
                statement: "Implement bubble sort for an integer array using only pointer notation, not array `[]` syntax.",
                inputFormat: "No input.",
                outputFormat: "The sorted array.",
                testCases: [{ input: "", output: "1 4 5 8 " }],
                solution: `#include <stdio.h>
void bubbleSort(int *arr, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (*(arr + j) > *(arr + j + 1)) {
                int temp = *(arr + j);
                *(arr + j) = *(arr + j + 1);
                *(arr + j + 1) = temp;
            }
        }
    }
}
int main() {
    int arr[] = {5, 1, 8, 4};
    bubbleSort(arr, 4);
    for(int i=0; i<4; i++) printf("%d ", arr[i]);
    return 0;
}`,
                explanation: "This is a standard bubble sort, but all array access is done through pointer arithmetic. `*(arr + j)` is equivalent to `arr[j]`."
            },
            {
                id: "c-s11-q28",
                title: "Pointer-based searching",
                description: "Linear search using pointer notation.",
                statement: "Implement linear search for an integer array using only pointer notation.",
                inputFormat: "No input.",
                outputFormat: "Index of the found element.",
                testCases: [{ input: "", output: "Found at index 2" }],
                solution: `#include <stdio.h>
int linearSearch(int *arr, int n, int key) {
    for (int i = 0; i < n; i++) {
        if (*(arr + i) == key) {
            return i;
        }
    }
    return -1;
}
int main() {
    int arr[] = {10, 20, 30, 40};
    int index = linearSearch(arr, 4, 30);
    printf("Found at index %d", index);
    return 0;
}`,
                explanation: "The search function iterates through the array using an index `i`, but accesses the element's value using pointer arithmetic `*(arr + i)`."
            },
            {
                id: "c-s11-q29",
                title: "Pointer linked list node creation",
                description: "Create a linked list node using malloc.",
                statement: "Write a function that creates a new linked list node, allocates memory for it, sets its data, and returns a pointer to it.",
                inputFormat: "No input.",
                outputFormat: "Node created with data: 10",
                testCases: [{ input: "", output: "Node created with data: 10" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
struct Node { int data; struct Node* next; };
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*) malloc(sizeof(struct Node));
    if (newNode == NULL) return NULL;
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}
int main() {
    struct Node* myNode = createNode(10);
    if(myNode) printf("Node created with data: %d", myNode->data);
    free(myNode);
    return 0;
}`,
                explanation: "This function encapsulates the creation of a node. It allocates memory, initializes the node's fields, and returns the pointer to the new node, which can then be linked into a list."
            },
            {
                id: "c-s11-q30",
                title: "Dynamic string creation",
                description: "Create a string dynamically.",
                statement: "Read an integer N, then dynamically allocate a character array of size N+1. Read a string into it and print.",
                inputFormat: "An integer N, then a string.",
                outputFormat: "The dynamically allocated string.",
                testCases: [{ input: "10\nCodeAlpha", output: "CodeAlpha" }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    
    // Allocate n for characters + 1 for null terminator
    char *str = (char*) malloc((n + 1) * sizeof(char));
    
    if (str == NULL) return 1;

    scanf("%s", str);
    printf("%s", str);
    
    free(str);
    return 0;
}`,
                explanation: "We use `malloc` to allocate enough space on the heap for the string characters plus one extra byte for the null terminator `\\0`. The memory must be freed after use."
            }
        ]
    },
    {
        category: "SECTION 12 — Dynamic Memory",
        problems: [
            {
                id: "c-s12-q1",
                title: "malloc usage",
                description: "Dynamically allocate an array.",
                statement: "Read an integer N, dynamically allocate an array of N integers using `malloc`, read N integers into it, and print them.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The N integers.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "1 2 3 4 5 " }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    int *arr;
    scanf("%d", &n);

    arr = (int*) malloc(n * sizeof(int));
    
    if(arr == NULL) return 1; // Allocation failed

    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    free(arr); // Don't forget to free memory
    return 0;
}`,
                explanation: "`malloc` allocates a block of memory of a specified size in bytes from the heap. It returns a void pointer to the beginning of the block, which we cast to the desired type (`int*`). `free` deallocates the memory, preventing a memory leak."
            },
            {
                id: "c-s12-q2",
                title: "calloc usage",
                description: "Use calloc for zero-initialized memory.",
                statement: "Use `calloc` to allocate an array for N integers and verify that it is initialized to zero.",
                inputFormat: "An integer N.",
                outputFormat: "N zeros.",
                testCases: [{ input: "5", output: "0 0 0 0 0 " }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    int *arr;
    scanf("%d", &n);

    arr = (int*) calloc(n, sizeof(int));

    if(arr == NULL) return 1;

    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    free(arr);
    return 0;
}`,
                explanation: "`calloc` takes two arguments: the number of elements and the size of each element. A key difference from `malloc` is that `calloc` initializes the allocated memory to zero."
            },
            {
                id: "c-s12-q3",
                title: "realloc usage",
                description: "Resize a dynamic array.",
                statement: "Allocate an array for N integers, then use `realloc` to resize it to M integers.",
                inputFormat: "N, M, then N integers.",
                outputFormat: "The resized array (content may be undefined).",
                testCases: [{ input: "3 5\n1 2 3", output: "" }],
                solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3, m = 5, i;
    int *arr;
    
    arr = (int*) malloc(n * sizeof(int));
    // ... use arr ...

    int *new_arr = (int*) realloc(arr, m * sizeof(int));

    if (new_arr == NULL) {
        printf("Reallocation failed");
        free(arr);
        return 1;
    }
    
    arr = new_arr;
    printf("Resized successfully");

    free(arr);
    return 0;
}`,
                explanation: "`realloc` changes the size of a previously allocated memory block. It may move the memory block to a new location. If the new size is larger, the old content is preserved and the new memory is uninitialized."
            },
            {
                id: "c-s12-q4",
                title: "Dynamic 1D array input",
                description: "A complete program for a dynamic array.",
                statement: "This is a duplicate of `malloc usage`.",
                inputFormat: "First line: N. Second line: N integers.",
                outputFormat: "The N integers.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "1 2 3 4 5 " }],
                solution: "// See 'malloc usage' problem.",
                explanation: "This problem covers the fundamental pattern of using `malloc` to create an array whose size is determined by user input at runtime."
            },
            {
                id: "c-s12-q5",
                title: "Dynamic 2D allocation",
                description: "Allocate a 2D array dynamically.",
                statement: "Read dimensions R and C, then dynamically allocate a 2D array (matrix) of that size.",
                inputFormat: "Two integers: R and C.",
                outputFormat: "Success message.",
                testCases: [{ input: "3 4", output: "Allocated 3x4 matrix." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int r = 3, c = 4, i;
    int **arr = (int **)malloc(r * sizeof(int *));
    for (i=0; i<r; i++)
         arr[i] = (int *)malloc(c * sizeof(int));
    printf("Allocated %dx%d matrix.", r, c);
    // Remember to free it later
    return 0;
}`,
                explanation: "To create a 2D array dynamically, we first allocate an array of pointers (one pointer for each row). Then, we loop through this array and allocate memory for each individual row."
            },
            {
                id: "c-s12-q6",
                title: "Free 2D dynamic array",
                description: "Correctly free a dynamically allocated 2D array.",
                statement: "Write the code to correctly deallocate the memory for a 2D array created in the previous problem.",
                inputFormat: "No input.",
                outputFormat: "Memory freed.",
                testCases: [{ input: "", output: "Memory freed." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int r = 3, i;
    int **arr = (int **)malloc(r * sizeof(int *));
    for (i=0; i<r; i++) arr[i] = (int *)malloc(4 * sizeof(int));

    // Free each row
    for (i = 0; i < r; i++) {
        free(arr[i]);
    }
    // Free the array of pointers
    free(arr);
    printf("Memory freed.");
    return 0;
}`,
                explanation: "You must free the memory in the reverse order of allocation. First, loop through and free each individual row, then free the array of row pointers."
            },
            {
                id: "c-s12-q7",
                title: "Dynamic string reading",
                description: "Read a string into a dynamic buffer.",
                statement: "Read a string of up to 100 characters into a dynamically allocated buffer.",
                inputFormat: "A single string.",
                outputFormat: "The string read.",
                testCases: [{ input: "CodeAlpha", output: "Read: CodeAlpha" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    char *str = (char*) malloc(101 * sizeof(char));
    if (str == NULL) return 1;
    scanf("%100s", str);
    printf("Read: %s", str);
    free(str);
    return 0;
}`,
                explanation: "We allocate memory for the string on the heap. We use a width specifier in `scanf` (`%100s`) to prevent buffer overflows by ensuring it reads at most 100 characters."
            },
            {
                id: "c-s12-q8",
                title: "Dynamic matrix multiplication",
                description: "Multiply two dynamically allocated matrices.",
                statement: "Dynamically allocate two matrices, fill them with values, multiply them, and store the result in a third dynamically allocated matrix.",
                inputFormat: "No input.",
                outputFormat: "The result matrix.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a combination of dynamic 2D allocation and matrix multiplication logic.
// 1. Allocate matrix A (r1 x c1)
// 2. Allocate matrix B (c1 x c2)
// 3. Allocate matrix Result (r1 x c2)
// 4. Fill A and B with values.
// 5. Use three nested loops to perform multiplication.
// 6. Print Result.
// 7. Free all three matrices.
`,
                explanation: "This problem combines several concepts: allocating multiple 2D arrays, using the standard three-loop matrix multiplication algorithm, and then correctly freeing all allocated memory for all three matrices."
            },
            {
                id: "c-s12-q9",
                title: "Dynamic structure array",
                description: "Allocate an array of structures dynamically.",
                statement: "Define a `struct Student`. Read an integer N, then dynamically allocate an array of N `Student` structures and read their data.",
                inputFormat: "N, then N lines of student data.",
                outputFormat: "The data of the first student.",
                testCases: [{ input: "2\n1 Alex\n2 Bob", output: "Roll: 1, Name: Alex" }],
                solution: `#include <stdio.h>
#include <stdlib.h>
struct Student { int roll; char name[50]; };
int main() {
    int n, i;
    scanf("%d", &n);
    struct Student *students = (struct Student*) malloc(n * sizeof(struct Student));
    if(students == NULL) return 1;
    for(i=0; i<n; i++) {
        scanf("%d %s", &students[i].roll, students[i].name);
    }
    printf("Roll: %d, Name: %s", students[0].roll, students[0].name);
    free(students);
    return 0;
}`,
                explanation: "The process is the same as allocating an array of `int`. We just use `sizeof(struct Student)` to calculate the correct amount of memory needed for the entire array."
            },
            {
                id: "c-s12-q10",
                title: "Resize dynamic array",
                description: "Add more elements to a dynamic array.",
                statement: "Create a dynamic array of size 3. Add 3 elements. Then, `realloc` it to size 5 and add two more elements.",
                inputFormat: "No input.",
                outputFormat: "The final array.",
                testCases: [{ input: "", output: "10 20 30 40 50 " }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *arr = (int*) malloc(3 * sizeof(int));
    arr[0]=10; arr[1]=20; arr[2]=30;

    arr = (int*) realloc(arr, 5 * sizeof(int));
    arr[3]=40; arr[4]=50;

    for(int i=0; i<5; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,
                explanation: "`realloc` can be used to expand a memory block. It's important to assign the return value of `realloc` back to the pointer, as the memory may have been moved."
            },
            {
                id: "c-s12-q11",
                title: "Memory leak demo",
                description: "Intentionally create a memory leak.",
                statement: "Write a loop that allocates memory but never frees it to demonstrate a memory leak.",
                inputFormat: "No input.",
                outputFormat: "Memory allocated in loop.",
                testCases: [{ input: "", output: "Leaking memory..." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    printf("Leaking memory...\\n");
    while(1) { // Infinite loop
        int *p = (int*) malloc(1000 * sizeof(int));
        // We don't free 'p', and in the next iteration,
        // we lose the pointer to the old memory block.
    }
    return 0;
}`,
                explanation: "A memory leak occurs when you allocate memory on the heap but lose the pointer to it without freeing it first. This memory becomes inaccessible but remains allocated, eventually causing the program to run out of memory."
            },
            {
                id: "c-s12-q12",
                title: "Dangling pointer fix",
                description: "Fix a dangling pointer by setting it to NULL.",
                statement: "After freeing a pointer, set it to `NULL` to prevent it from being a dangling pointer.",
                inputFormat: "No input.",
                outputFormat: "Pointer is now NULL.",
                testCases: [{ input: "", output: "Pointer is now NULL." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int*) malloc(sizeof(int));
    free(p);
    p = NULL; // Set to NULL after freeing
    if(p == NULL) {
        printf("Pointer is now NULL.");
    }
    return 0;
}`,
                explanation: "Setting a pointer to `NULL` after freeing it is a good practice. It ensures that any accidental use of the pointer later can be caught with a simple `if (p == NULL)` check, preventing a crash from dereferencing a dangling pointer."
            },
            {
                id: "c-s12-q13",
                title: "Garbage-free code writing",
                description: "Demonstrate good memory management.",
                statement: "Write a function that allocates memory, uses it, and correctly frees it before returning, demonstrating responsible memory management.",
                inputFormat: "No input.",
                outputFormat: "Task complete. Memory freed.",
                testCases: [{ input: "", output: "Task complete. Memory freed." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
void processData() {
    int *data = (int*) malloc(100 * sizeof(int));
    if(data == NULL) return; // Always check allocation
    // ... do some work with 'data' ...
    free(data); // Free memory before function exits
    printf("Task complete. Memory freed.");
}
int main() { processData(); return 0; }`,
                explanation: "The fundamental rule of manual memory management in C is that for every `malloc`, there must be a corresponding `free`. Responsible functions clean up the memory they allocate."
            },
            {
                id: "c-s12-q14",
                title: "Memory pool implementation",
                description: "A very simple memory pool concept.",
                statement: "Simulate a very simple memory pool. Pre-allocate a large block of memory. Create functions to 'allocate' a chunk from this pool and 'free' it by marking it as available again.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of pool allocation.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a very advanced topic. A conceptual implementation:
// 1. Allocate a large block of memory (the pool).
// 2. Maintain a data structure (e.g., a linked list of free blocks)
//    that keeps track of which parts of the pool are in use and which are free.
// 3. When an 'allocation' is requested, search the free list for a block of
//    the required size.
// 4. When memory is 'freed', add the block back to the free list, possibly
//    merging it with adjacent free blocks.`,
                explanation: "A memory pool is used to improve performance in applications that frequently allocate and deallocate memory of similar sizes. By pre-allocating a large chunk and managing it manually, you can avoid the overhead of calling `malloc` and `free` repeatedly, which can be slow."
            },
            {
                id: "c-s12-q15",
                title: "Dynamic queue/stack",
                description: "Implement a stack or queue with dynamic resizing.",
                statement: "Implement a stack using a dynamic array. When the stack is full, use `realloc` to double its capacity.",
                inputFormat: "No input.",
                outputFormat: "Demonstration of a resizing stack.",
                testCases: [{ input: "", output: "Capacity doubled. Pushed 6." }],
                solution: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int *items;
    int top;
    int capacity;
} Stack;
void push(Stack *s, int val) {
    if (s->top == s->capacity - 1) {
        s->capacity *= 2;
        s->items = (int*) realloc(s->items, s->capacity * sizeof(int));
        printf("Capacity doubled.\\n");
    }
    s->items[++(s->top)] = val;
}
int main() {
    Stack s;
    s.capacity = 5;
    s.top = -1;
    s.items = (int*) malloc(s.capacity * sizeof(int));
    push(&s, 1); push(&s, 2); push(&s, 3); push(&s, 4); push(&s, 5);
    push(&s, 6); // This will trigger realloc
    printf("Pushed 6.\\n");
    free(s.items);
    return 0;
}`,
                explanation: "By using a dynamic array, our data structure is no longer limited by a fixed size. The `push` function checks if the stack is full. If it is, it doubles the capacity and calls `realloc` to get a larger memory block before pushing the new element."
            }
        ]
    }
]
