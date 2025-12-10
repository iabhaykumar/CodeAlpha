import React from 'react';
import { ProblemCategory } from './types';

export const JAVA_PROBLEMS_PART4: ProblemCategory[] = [
    {
        category: "SECTION 7 — EXCEPTION HANDLING",
        problems: [
            {
              id: "java-s7-q1",
              title: "Handle Division by Zero",
              description: "Handle an `ArithmeticException` for division by zero.",
              statement: "Write a program that takes two integers and divides them. Use a `try-catch` block to gracefully handle the case where the second number is zero.",
              inputFormat: "Two integers.",
              outputFormat: "The result of the division or an error message.",
              testCases: [{ input: "10 0", output: "Error: Cannot divide by zero!" }],
              solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        try {
            int result = a / b;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        }
        sc.close();
    }
}`,
              explanation: "The division is placed inside a `try` block. If `b` is zero, an `ArithmeticException` is thrown. The `catch` block catches this specific exception and prints a user-friendly error message instead of crashing."
            },
            {
              id: "java-s7-q2",
              title: "Multiple Catch Blocks",
              description: "Handle multiple types of exceptions.",
              statement: "Handle both `ArithmeticException` and `ArrayIndexOutOfBoundsException`.",
              inputFormat: "No input needed for demonstration.",
              outputFormat: "The specific error message for array out of bounds.",
              testCases: [{ input: "", output: "Error: Array index is out of bounds." }],
              solution: `public class Main {
    public static void main(String[] args) {
        try {
            int a[] = new int[5];
            System.out.println(a[10]); // This will cause an error
        } catch (ArithmeticException e) {
            System.out.println("Error: Arithmetic operation failed.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index is out of bounds.");
        }
    }
}`,
              explanation: "You can chain multiple `catch` blocks to handle different types of exceptions. Java will execute the first `catch` block that matches the type of exception thrown."
            },
            {
              id: "java-s7-q3",
              title: "Finally Block Demo",
              description: "Demonstrate the use of the `finally` block.",
              statement: "Use a `try-catch-finally` block. The `finally` block should always execute, whether an exception occurs or not.",
              inputFormat: "No input.",
              outputFormat: "The message from the finally block.",
              testCases: [{ input: "", output: "This block always executes." }],
              solution: `public class Main {
    public static void main(String[] args) {
        try {
            int data = 25 / 5;
            System.out.println(data);
        } catch (NullPointerException e) {
            System.out.println(e);
        } finally {
            System.out.println("This block always executes.");
        }
    }
}`,
              explanation: "The `finally` block is used to execute important code such as closing a file or releasing resources, regardless of whether an exception was thrown or caught."
            },
            {
              id: "java-s7-q4",
              title: "throw keyword example",
              description: "Manually throw an exception.",
              statement: "Create a method that throws an `ArithmeticException` if a person's age is less than 18.",
              inputFormat: "An integer age.",
              outputFormat: "An exception message or 'Access granted'.",
              testCases: [{ input: "15", output: "Access denied" }],
              solution: `public class Main {
    static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Access denied");
        } else {
            System.out.println("Access granted");
        }
    }
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
}`,
              explanation: "The `throw` keyword is used to explicitly create and throw an exception object. This is useful for enforcing business logic rules within your code."
            },
            {
              id: "java-s7-q5",
              title: "throws keyword example",
              description: "Declare an exception with `throws`.",
              statement: "Create a method that might throw an `IOException` and declare it with the `throws` keyword.",
              inputFormat: "No input.",
              outputFormat: "An exception message.",
              testCases: [{ input: "", output: "Exception handled" }],
              solution: `import java.io.IOException;
class Test {
    void method() throws IOException {
        throw new IOException("device error");
    }
}
public class Main {
    public static void main(String args[]) {
        try {
            Test m = new Test();
            m.method();
        } catch (Exception e) {
            System.out.println("Exception handled");
        }
    }
}`,
              explanation: "The `throws` keyword is used in a method signature to indicate that the method might throw a checked exception. This forces any code calling the method to either handle the exception with a `try-catch` block or declare that it also `throws` the exception."
            },
            {
              id: "java-s7-q6",
              title: "Create Custom Exception",
              description: "Define and use your own exception class.",
              statement: "Create a custom exception `InvalidProductException`. Throw this exception if a product ID is negative.",
              inputFormat: "No input.",
              outputFormat: "The custom exception message.",
              testCases: [{ input: "", output: "InvalidProductException: Product ID cannot be negative." }],
              solution: `class InvalidProductException extends Exception {
    public InvalidProductException(String s) {
        super(s);
    }
}
public class Main {
    void productCheck(int id) throws InvalidProductException {
        if (id < 0) {
            throw new InvalidProductException("Product ID cannot be negative.");
        }
    }
    public static void main(String args[]) {
        Main obj = new Main();
        try {
            obj.productCheck(-5);
        } catch (InvalidProductException ex) {
            System.out.println(ex.getClass().getSimpleName() + ": " + ex.getMessage());
        }
    }
}`,
              explanation: "You can create your own exception types by extending the `Exception` class. This makes your error handling more specific and your code more readable."
            }
        ]
    },
    {
        category: "SECTION 8 — FILE HANDLING",
        problems: [
            {
              id: "java-s8-q1",
              title: "Write to a Text File",
              description: "Write a string to a file.",
              statement: "Write a program to create a file named `output.txt` and write 'Hello from CodeAlpha' into it.",
              inputFormat: "No input.",
              outputFormat: "A file named `output.txt` with the content.",
              testCases: [{ input: "", output: "" }],
              solution: `import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello from CodeAlpha");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
              explanation: "This solution uses a 'try-with-resources' block, which automatically closes the `FileWriter` for you. This is the modern, recommended way to handle file resources."
            },
            {
              id: "java-s8-q2",
              title: "Read From a Text File",
              description: "Read the content of a file.",
              statement: "Write a program to read from `output.txt` and print its content.",
              inputFormat: "A file `output.txt` with content.",
              outputFormat: "The content of the file.",
              testCases: [{ input: "", output: "Hello from CodeAlpha" }],
              solution: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            File file = new File("output.txt");
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}`,
              explanation: "The `Scanner` class can be used to read from a `File` object. The `hasNextLine()` and `nextLine()` methods are used to read the file line by line."
            },
            {
              id: "java-s8-q3",
              title: "Append Data to File",
              description: "Append new content to the end of an existing file.",
              statement: "Open `output.txt` in append mode and add a new line 'This is a new line.' to it.",
              inputFormat: "A file `output.txt`.",
              outputFormat: "The file is modified; no console output.",
              testCases: [{ input: "", output: "" }],
              solution: `import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt", true)) { // true for append mode
            writer.write("\\nThis is a new line.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
              explanation: "To open a `FileWriter` in append mode, you pass `true` as the second argument to its constructor. This will add new content to the end of the file instead of overwriting it."
            },
            {
              id: "java-s8-q4",
              title: "Count Words in a File",
              description: "Count the total number of words in a file.",
              statement: "Write a program that reads `output.txt` and counts the number of words in it. Assume words are separated by spaces.",
              inputFormat: "A file `output.txt`.",
              outputFormat: "The word count.",
              testCases: [{ input: "", output: "Word count: 8" }],
              solution: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            File file = new File("output.txt");
            Scanner scanner = new Scanner(file);
            int count = 0;
            while (scanner.hasNext()) {
                scanner.next(); // Read the next word
                count++;
            }
            System.out.println("Word count: " + count);
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}`,
              explanation: "The `Scanner`'s `hasNext()` and `next()` methods work with tokens (words by default). We can simply loop while there is a next word and increment a counter."
            }
        ]
    }
];
