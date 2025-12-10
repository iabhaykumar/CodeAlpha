import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_9: ProblemCategory[] = [
  {
    category: "9.0 Exception Handling",
    problems: [
      {
        id: "oop-cpp-9-1",
        title: "Divide by zero exception",
        description: "Handle arithmetic exceptions.",
        statement: "Write a function that divides two numbers. It should `throw` an exception if the denominator is zero. The calling function should use a `try-catch` block to handle this exception.",
        inputFormat: "No input.",
        outputFormat: "Result of a valid division and the caught error message.",
        testCases: [{ input: "", output: "Result: 5\nError: Cannot divide by zero!" }],
        solution: `#include <iostream>
#include <stdexcept> // For standard exception classes

double divide(double num, double den) {
    if (den == 0) {
        throw std::runtime_error("Cannot divide by zero!");
    }
    return num / den;
}

int main() {
    try {
        std::cout << "Result: " << divide(10, 2) << std::endl;
        divide(5, 0); // This will throw an exception
    } catch (const std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "Exception handling allows you to manage runtime errors gracefully. The `try` block contains code that might throw an exception. If an exception is thrown, the program's control immediately jumps to the `catch` block that matches the exception's type. The `e.what()` method returns the message associated with the exception."
      },
      {
        id: "oop-cpp-9-2",
        title: "Custom exception for age verification",
        description: "Create a custom exception class.",
        statement: "Create a custom exception class `InvalidAgeException` that inherits from `std::exception`. Write a function that throws this exception if an age is less than 18.",
        inputFormat: "No input.",
        outputFormat: "The caught custom exception message.",
        testCases: [{ input: "", output: "Age verification failed: Age must be 18 or older." }],
        solution: `#include <iostream>
#include <exception>

class InvalidAgeException : public std::exception {
public:
    const char* what() const noexcept override {
        return "Age must be 18 or older.";
    }
};

void verifyAge(int age) {
    if (age < 18) {
        throw InvalidAgeException();
    }
    std::cout << "Age is valid." << std::endl;
}

int main() {
    try {
        verifyAge(15);
    } catch (const InvalidAgeException& e) {
        std::cout << "Age verification failed: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "You can create your own exception types by inheriting from `std::exception` and overriding the `what()` method. This makes your error handling more specific and your code more readable, as you can `catch` your custom exception type explicitly."
      },
      {
        id: "oop-cpp-9-3",
        title: "Custom exception for insufficient balance",
        description: "Custom exception for a bank account.",
        statement: "Create a custom exception `InsufficientFundsException`. In a `BankAccount` class, throw this exception in the `withdraw` method if the withdrawal amount is greater than the balance.",
        inputFormat: "No input.",
        outputFormat: "Message indicating the caught error.",
        testCases: [{ input: "", output: "Withdrawal Error: Not enough funds available." }],
        solution: `#include <iostream>
#include <exception>

class InsufficientFundsException : public std::exception {
public:
    const char* what() const noexcept override {
        return "Not enough funds available.";
    }
};

class BankAccount {
private: double balance;
public:
    BankAccount(double b) : balance(b) {}
    void withdraw(double amount) {
        if (amount > balance) {
            throw InsufficientFundsException();
        }
        balance -= amount;
    }
};

int main() {
    BankAccount acc(100);
    try {
        acc.withdraw(500);
    } catch (const InsufficientFundsException& e) {
        std::cout << "Withdrawal Error: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "This example shows how custom exceptions can be used to enforce business logic. The `withdraw` method throws a specific, descriptive exception when a rule is violated, allowing the calling code to handle that specific error scenario."
      },
      {
        id: "oop-cpp-9-4",
        title: "RAII instead of `finally`",
        description: "Demonstrate resource cleanup with RAII.",
        statement: "C++ does not have a `finally` block like Java or Python. The standard C++ way to guarantee resource cleanup (like closing a file) is to use the RAII (Resource Acquisition Is Initialization) pattern. Demonstrate this by creating a wrapper class for a file pointer.",
        inputFormat: "No input.",
        outputFormat: "Messages showing the file being opened and automatically closed.",
        testCases: [{ input: "", output: "File opened.\nProcessing file...\nFile closed." }],
        solution: `#include <iostream>
#include <cstdio>

class FileWrapper {
private:
    FILE* pFile;
public:
    FileWrapper(const char* filename, const char* mode) {
        pFile = fopen(filename, mode);
        if (pFile == nullptr) throw std::runtime_error("File could not be opened");
        std::cout << "File opened." << std::endl;
    }

    // The destructor is automatically called when the object goes out of scope.
    ~FileWrapper() {
        if (pFile) {
            fclose(pFile);
            std::cout << "File closed." << std::endl;
        }
    }
};

int main() {
    try {
        FileWrapper file("test.txt", "w");
        std::cout << "Processing file..." << std::endl;
        // If an exception happened here, the destructor would still be called.
    } catch(const std::exception& e) {
        std::cerr << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "RAII is a core C++ concept. We create a class (`FileWrapper`) whose constructor acquires a resource (opens the file) and whose destructor releases it (closes the file). When we create an object of this class on the stack, the destructor is *guaranteed* to be called when the object goes out of scope, whether by normal execution or by an exception being thrown. This ensures resources are never leaked."
      },
      {
        id: "oop-cpp-9-5",
        title: "Multiple exception handling",
        description: "Catching multiple exception types.",
        statement: "Demonstrate a `try` block that can throw different types of exceptions, and show how to catch them with multiple `catch` blocks.",
        inputFormat: "No input.",
        outputFormat: "Messages from different catch blocks.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>

void process(int code) {
    if (code == 1) throw std::runtime_error("Runtime error!");
    if (code == 2) throw 404; // throw an integer
    if (code == 3) throw "A C-style string error";
}

int main() {
    try {
        process(1); // Change to 2 or 3 to test other blocks
    } catch (const std::runtime_error& e) {
        std::cout << "Caught a runtime_error: " << e.what() << std::endl;
    } catch (int e) {
        std::cout << "Caught an int exception: " << e << std::endl;
    } catch (...) { // Catch-all block
        std::cout << "Caught an unknown exception!" << std::endl;
    }
    return 0;
}`,
        explanation: "You can chain multiple `catch` blocks after a `try` block. The first `catch` block whose type matches the thrown exception will be executed. It's important to catch more specific exceptions before more general ones. The `catch(...)` block is a catch-all that will handle any type of exception not previously caught."
      },
      {
        id: "oop-cpp-9-6",
        title: "File not found exception",
        description: "Handle file I/O exceptions.",
        statement: "Attempt to open a non-existent file for reading using `ifstream`. Show that this does not throw an exception by default, but sets an error state that can be checked.",
        inputFormat: "No input.",
        outputFormat: "Error message for file opening failure.",
        testCases: [{ input: "", output: "Error opening file!" }],
        solution: `#include <iostream>
#include <fstream>

int main() {
    std::ifstream file;
    // By default, fstream doesn't throw. We check its state after opening.
    file.open("nonexistent.txt");

    if (!file.is_open()) {
        std::cout << "Error opening file!" << std::endl;
        return 1;
    }

    // To make it throw exceptions:
    // file.exceptions(std::ifstream::failbit | std::ifstream::badbit);
    // try {
    //     file.open("nonexistent.txt");
    // } catch (const std::ifstream::failure& e) {
    //     std::cout << "Exception opening file: " << e.what() << std::endl;
    // }

    return 0;
}`,
        explanation: "By default, C++ iostreams use an error state model rather than exceptions for I/O errors. After an operation like `open`, you should check the state of the stream (e.g., with `.is_open()`, `.fail()`, or by simply `if (file)`). You can optionally configure a stream to throw exceptions on failure using the `.exceptions()` method."
      },
      {
        id: "oop-cpp-9-7",
        title: "Password validation exception",
        description: "Custom exception for password rules.",
        statement: "Create custom exceptions `PasswordTooShort` and `PasswordNoNumber`. Write a function that validates a password and throws the appropriate exception.",
        inputFormat: "No input.",
        outputFormat: "Handling a specific password validation error.",
        testCases: [{ input: "", output: "Password error: Password is too short." }],
        solution: `#include <iostream>
#include <string>
#include <exception>

class PasswordTooShort : public std::exception {
public: const char* what() const noexcept override { return "Password is too short."; }
};
class PasswordNoNumber : public std::exception {
public: const char* what() const noexcept override { return "Password must contain a number."; }
};

void validatePassword(std::string pass) {
    if (pass.length() < 8) throw PasswordTooShort();
    if (pass.find_first_of("0123456789") == std::string::npos) throw PasswordNoNumber();
}

int main() {
    try {
        validatePassword("weak");
    } catch (const PasswordTooShort& e) {
        std::cout << "Password error: " << e.what() << std::endl;
    } catch (const PasswordNoNumber& e) {
        std::cout << "Password error: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "This demonstrates creating a small hierarchy of custom exceptions. By having distinct exception types for different validation failures, the calling code can provide more specific feedback to the user by catching each type of error separately."
      }
    ]
  }
];
