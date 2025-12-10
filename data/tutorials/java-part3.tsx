import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVA_PART3_TOPICS: Topic[] = [
  // 10. Generics
  { id: 'java-generic-classes', title: 'Generic Classes', parent: '10. Generics', content: (
      <>
        <p className="mb-4">Generics allow you to define classes, interfaces, and methods with a placeholder for the type of data they will operate on. This enables stronger type checking at compile time and reduces the need for explicit type casting.</p>
        <CodeBlock language="java" code={`// A generic Box class that can hold any type of object
public class Box<T> { // T is a type parameter
    private T content;

    public void set(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

// Usage:
Box<String> stringBox = new Box<>();
stringBox.set("Hello from CodeAlpha");
String message = stringBox.get(); // No cast needed

Box<Integer> integerBox = new Box<>();
integerBox.set(123);
int number = integerBox.get(); // No cast needed`} />
      </>
  ) },
  { id: 'java-generic-methods', title: 'Generic Methods', parent: '10. Generics', content: (
      <>
        <p className="mb-4">You can also write generic methods that can be called with arguments of different types. The type parameter's scope is limited to the method where it is declared.</p>
        <CodeBlock language="java" code={`public class Util {
    // A generic method to print an array of any type
    public static <E> void printArray(E[] inputArray) {
        for (E element : inputArray) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }
}

// Usage in main:
Integer[] intArray = { 1, 2, 3, 4, 5 };
String[] stringArray = { "Hello", "World" };

Util.printArray(intArray);
Util.printArray(stringArray);`} />
      </>
  ) },
  { id: 'java-bounded-types', title: 'Bounded Types', parent: '10. Generics', content: (
      <>
        <p className="mb-4">Bounded types restrict the types that can be used as type arguments in a generic class or method. This is done using the `extends` keyword.</p>
        <CodeBlock language="java" code={`// This generic method accepts any type that is a subclass of Number
// This allows us to call methods of the Number class, like doubleValue()
public static <T extends Number> double getSum(T[] numbers) {
    double sum = 0.0;
    for(T num : numbers) {
        sum += num.doubleValue();
    }
    return sum;
}

// Usage:
Integer[] intArray = {1, 2, 3};
System.out.println(getSum(intArray)); // Works

Double[] doubleArray = {1.1, 2.2, 3.3};
System.out.println(getSum(doubleArray)); // Works

// String[] stringArray = {"a", "b"};
// System.out.println(getSum(stringArray)); // Compile error! String is not a Number.`} />
      </>
  ) },
  { id: 'java-wildcards', title: 'Wildcards', parent: '10. Generics', content: (
      <>
        <p className="mb-4">The wildcard `?` represents an unknown type. It can be used in a variety of situations, such as the type of a parameter, field, or local variable.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Upper Bounded Wildcard (`? extends Type`):</strong> The unknown type is a subtype of `Type`. Used for "read-only" scenarios (Producer).</li>
            <li><strong>Lower Bounded Wildcard (`? super Type`):</strong> The unknown type is a supertype of `Type`. Used for "write-only" scenarios (Consumer).</li>
            <li><strong>Unbounded Wildcard (`?`):</strong> The unknown type can be anything.</li>
        </ul>
        <CodeBlock language="java" code={`import java.util.List;
import java.util.ArrayList;

// PECS: Producer Extends, Consumer Super

// This method can take a List of Number or any of its subtypes (Integer, Double).
// It's a "producer" because we are only reading from the list.
public static void printNumbers(List<? extends Number> list) {
    for (Number n : list) {
        System.out.print(n + " ");
    }
}

// This method can take a List of Integer or any of its supertypes (Number, Object).
// It's a "consumer" because we are adding to the list.
public static void addIntegers(List<? super Integer> list) {
    list.add(10);
    list.add(20);
}`} />
      </>
  ) },

  // 11. File Handling
  { id: 'java-file-class', title: 'File Class', parent: '11. File Handling', content: (
      <>
        <p className="mb-4">The `java.io.File` class is an abstract representation of file and directory pathnames. It's used for file and directory metadata operations, such as checking for existence, renaming, and deleting.</p>
        <CodeBlock language="java" code={`import java.io.File;

File myFile = new File("codealpha.txt");
if (myFile.exists()) {
    System.out.println("File name: " + myFile.getName());
    System.out.println("Absolute path: " + myFile.getAbsolutePath());
    System.out.println("File size in bytes: " + myFile.length());
} else {
    System.out.println("The file does not exist.");
}`} />
      </>
  ) },
  { id: 'java-filereader-writer', title: 'FileReader / FileWriter', parent: '11. File Handling', content: (
      <>
        <p className="mb-4">`FileReader` and `FileWriter` are used for reading and writing character-based data from files. They are convenient for plain text files.</p>
        <CodeBlock language="java" code={`import java.io.FileWriter;
import java.io.IOException;

// Using try-with-resources to automatically close the writer
try (FileWriter writer = new FileWriter("output.txt")) {
    writer.write("Hello from CodeAlpha using FileWriter!");
} catch (IOException e) {
    e.printStackTrace();
}`} />
      </>
  ) },
  { id: 'java-bufferedreader-writer', title: 'BufferedReader / BufferedWriter', parent: '11. File Handling', content: (
      <>
        <p className="mb-4">`BufferedReader` and `BufferedWriter` are more efficient than `FileReader`/`FileWriter`. They read/write larger chunks of data from/to a buffer, reducing the number of I/O operations on the disk.</p>
        <CodeBlock language="java" code={`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}`} />
      </>
  ) },
  { id: 'java-streams', title: 'InputStream / OutputStream', parent: '11. File Handling', content: (
      <>
        <p className="mb-4">`InputStream` and `OutputStream` are abstract classes for reading and writing byte-based data (e.g., images, audio, video). `FileInputStream` and `FileOutputStream` are common implementations.</p>
      </>
  ) },
  { id: 'java-serialization', title: 'Serialization & Deserialization', parent: '11. File Handling', content: (
      <>
        <p className="mb-4">Serialization is the process of converting an object's state into a byte stream, which can then be saved to a file or sent over a network. Deserialization is the reverse process. A class must implement the `java.io.Serializable` marker interface to be serializable.</p>
        <CodeBlock language="java" code={`import java.io.Serializable;

class Student implements Serializable {
    // A unique ID for the class version
    private static final long serialVersionUID = 1L;
    
    String name;
    transient int score; // 'transient' keyword prevents this field from being serialized
}

// To serialize:
// ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("student.ser"));
// out.writeObject(new Student());

// To deserialize:
// ObjectInputStream in = new ObjectInputStream(new FileInputStream("student.ser"));
// Student s = (Student) in.readObject();`} />
      </>
  ) },

  // 12. Multi-threading
  { id: 'java-thread-class', title: 'Thread class & Runnable interface', parent: '12. Multi-threading', content: (
      <>
        <p className="mb-4">Java supports concurrent execution of code through threads. There are two ways to create a thread:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Extending `Thread` class:</strong> Create a new class that extends `Thread` and override its `run()` method.</li>
            <li><strong>Implementing `Runnable` interface:</strong> Create a new class that implements `Runnable` and its `run()` method. Then, pass an instance of this class to the `Thread`'s constructor. This is the preferred method.</li>
        </ul>
        <CodeBlock language="java" code={`// Preferred Way: Implementing Runnable
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task is running in a separate thread.");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread myThread = new Thread(new MyTask());
        myThread.start(); // Start the new thread
        System.out.println("Main thread is running.");
    }
}`} />
      </>
  ) },
  { id: 'java-thread-states', title: 'Thread States', parent: '12. Multi-threading', content: (
      <>
        <p className="mb-4">A thread can be in one of several states during its lifetime.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Thread Lifecycle

[ NEW ] --.start()--> [ RUNNABLE ] <--.yield()/scheduler---
    ^                       |  ^
    |                       |  | I/O, lock, etc.
    |                       v  |
    +----.run() ends---- [ TERMINATED ]   [ BLOCKED/WAITING ]`}
        </pre>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>NEW:</strong> A thread that has not yet started.</li>
          <li><strong>RUNNABLE:</strong> A thread executing in the JVM.</li>
          <li><strong>BLOCKED:</strong> A thread that is blocked waiting for a monitor lock.</li>
          <li><strong>WAITING:</strong> A thread that is waiting indefinitely for another thread to perform a particular action.</li>
          <li><strong>TIMED_WAITING:</strong> A thread that is waiting for a specified waiting time.</li>
          <li><strong>TERMINATED:</strong> A thread that has finished its execution.</li>
        </ul>
      </>
  ) },
  { id: 'java-synchronization', title: 'Synchronization', parent: '12. Multi-threading', content: (
      <>
        <p className="mb-4">When multiple threads access shared resources, you can get unexpected results due to a "race condition". The `synchronized` keyword can be applied to methods or blocks of code to ensure that only one thread can execute that code at a time.</p>
        <CodeBlock language="java" code={`class Counter {
    private int count = 0;

    // This method is synchronized to prevent race conditions
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}`} />
      </>
  ) },
  { id: 'java-thread-pool', title: 'Thread Pool (ExecutorService)', parent: '12. Multi-threading', content: (
      <>
        <p className="mb-4">Creating a new thread for every task is expensive. A thread pool is a collection of pre-started, idle threads that stand ready to be given work. The `ExecutorService` is the modern, high-level way to manage thread pools in Java.</p>
        <CodeBlock language="java" code={`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// Create a thread pool with 5 threads
ExecutorService executor = Executors.newFixedThreadPool(5);

for (int i = 0; i < 10; i++) {
    Runnable worker = new WorkerThread("" + i);
    executor.execute(worker); // Submit task to the pool
}

executor.shutdown(); // Initiates an orderly shutdown
while (!executor.isTerminated()) {
    // Wait for all tasks to finish
}`} />
      </>
  ) },
  { id: 'java-callable-future', title: 'Callable & Future', parent: '12. Multi-threading', content: (
      <>
        <p className="mb-4">The `Callable` interface is similar to `Runnable`, but it can return a result and can throw a checked exception. The `Future` object represents the result of an asynchronous computation. You can use it to check if the computation is complete, wait for its completion, and retrieve the result.</p>
        <CodeBlock language="java" code={`import java.util.concurrent.*;

Callable<Integer> task = () -> {
    TimeUnit.SECONDS.sleep(1);
    return 123; // Return a value
};

ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(task);

System.out.println("Waiting for the result...");
Integer result = future.get(); // This blocks until the result is available

System.out.println("Result is: " + result);
executor.shutdown();`} />
      </>
  ) },
  
  // 13. Java 8 (MOST IMPORTANT)
  { id: 'java8-lambda', title: 'Lambda Expressions', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">Lambda expressions provide a clear and concise way to represent a method interface using an expression. They are a way to implement the `run()` method of `Runnable` or other single-method interfaces on the fly.</p>
        <CodeBlock language="java" code={`// Old way (Anonymous Inner Class)
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Running in a separate thread!");
    }
}).start();

// New way with Lambda Expression
new Thread(() -> System.out.println("Running with a lambda!")).start();

// Lambda syntax: (parameters) -> { body }
// If the body is a single expression, you can omit the curly braces.
// (a, b) -> a + b`} />
      </>
  ) },
  { id: 'java8-functional-interfaces', title: 'Functional Interfaces', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">A functional interface is an interface that contains exactly one abstract method. They are also known as Single Abstract Method (SAM) interfaces. Lambda expressions can be used to represent an instance of a functional interface.</p>
        <p>Java provides predefined functional interfaces in `java.util.function` like `Predicate`, `Consumer`, `Function`, and `Supplier`.</p>
        <CodeBlock language="java" code={`@FunctionalInterface // This annotation is optional but good practice
interface MyFunctionalInterface {
    void execute();
}

// Common built-in functional interfaces
Predicate<String> isLong = (str) -> str.length() > 10;
Function<Integer, String> toString = (num) -> "Number: " + num;
Consumer<String> printMessage = (msg) -> System.out.println(msg);`} />
      </>
  ) },
  { id: 'java8-stream-api', title: 'Stream API', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">The Stream API is used to process collections of objects in a functional style. A stream is not a data structure but takes input from Collections, Arrays or I/O channels.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Stream Pipeline
// +------------+     +-----------+     +-----------+     +-----------+
// |  Source    | --> | filter()  | --> |   map()   | --> | collect() |
// |(Collection)|     |(Interm.)  |     |(Interm.)  |     |(Terminal) |
// +------------+     +-----------+     +-----------+     +-----------+`}
        </pre>
        <CodeBlock language="java" code={`import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// Example: find all names starting with 'A', convert to uppercase, and collect to a list.
List<String> result = names.stream() // 1. Create a stream from the source list
    .filter(name -> name.startsWith("A")) // 2. Intermediate operation: filter
    .map(String::toUpperCase) // 3. Intermediate operation: transform
    .collect(Collectors.toList()); // 4. Terminal operation: collect results

System.out.println(result); // [ALICE, ANNA]`} />
      </>
  ) },
  { id: 'java8-optional', title: 'Optional Class', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">`Optional` is a container object which may or may not contain a non-null value. It's a way to represent an optional value instead of using `null`, helping to avoid `NullPointerException`.</p>
        <CodeBlock language="java" code={`Optional<String> findUser(int id) {
    if (id == 1) {
        return Optional.of("Alice");
    }
    return Optional.empty(); // Represents an absent value
}

// Usage
Optional<String> userOpt = findUser(1);
userOpt.ifPresent(name -> System.out.println("User found: " + name));

String userName = findUser(2).orElse("Guest"); // Provide a default value
System.out.println("User: " + userName);`} />
      </>
  ) },
  { id: 'java8-method-references', title: 'Method References', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">Method references are a shorthand syntax for a lambda expression that executes just ONE method. They are often used to make code more readable.</p>
        <CodeBlock language="java" code={`List<String> names = Arrays.asList("alice", "bob");

// Using a lambda
names.forEach(name -> System.out.println(name));

// Using a method reference (shorter and clearer)
names.forEach(System.out::println);

// Types of method references:
// 1. Reference to a static method: ContainingClass::staticMethodName
// 2. Reference to an instance method of a particular object: object::instanceMethodName
// 3. Reference to an instance method of an arbitrary object of a particular type: ContainingType::methodName
// 4. Reference to a constructor: ClassName::new`} />
      </>
  ) },
  { id: 'java8-date-time', title: 'Date & Time API', parent: '13. Java 8 Features', content: (
      <>
        <p className="mb-4">Java 8 introduced a new, immutable Date and Time API in the `java.time` package to address the shortcomings of the old `java.util.Date` and `java.util.Calendar`.</p>
        <CodeBlock language="java" code={`import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// Get the current date
LocalDate today = LocalDate.now();
System.out.println("Today's date: " + today);

// Create a specific date
LocalDate codealphaLaunch = LocalDate.of(2020, 5, 20);

// Perform calculations
LocalDate nextWeek = today.plusWeeks(1);

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String formattedDate = today.format(formatter);
System.out.println("Formatted date: " + formattedDate);`} />
      </>
  ) },

  // 14. Java 9–11 Features
  { id: 'java9-modules', title: 'Modular System (Java Modules)', parent: '14. Java 9-11 Features', content: (
      <>
        <p className="mb-4">Java 9 introduced the module system (Project Jigsaw) to organize code into modules. A module is a collection of related packages. It improves encapsulation and reliability by explicitly declaring which packages it `exports` (makes public) and which modules it `requires` (depends on).</p>
        <h4 className="font-bold mt-4 mb-2">Example `module-info.java`:</h4>
        <CodeBlock language="java" code={`module com.codealpha.app {
    // This module depends on the java.sql module to use JDBC
    requires java.sql;
    
    // This module makes its com.codealpha.service package available to other modules
    exports com.codealpha.service;
}`} />
      </>
  ) },
  { id: 'java9-jshell', title: 'JShell', parent: '14. Java 9-11 Features', content: (
      <>
        <p className="mb-4">JShell is Java's first official Read-Eval-Print Loop (REPL), an interactive tool for learning the Java language and prototyping Java code. You can run it from your terminal by simply typing `jshell`.</p>
        <CodeBlock language="bash" code={`$ jshell
|  Welcome to JShell -- Version 17.0.1
|  For an introduction type: /help intro

jshell> int x = 10;
x ==> 10

jshell> String greeting = "Hello"
greeting ==> "Hello"

jshell> System.out.println(greeting + ", CodeAlpha!")
Hello, CodeAlpha!

jshell> /exit
|  Goodbye`} />
      </>
  ) },
  { id: 'java11-http-client', title: 'HTTP Client API', parent: '14. Java 9-11 Features', content: (
      <>
        <p className="mb-4">Java 11 standardized a new, modern, and fluent API for making HTTP requests, replacing the old `HttpURLConnection`. It supports HTTP/1.1, HTTP/2, and both synchronous and asynchronous programming models.</p>
        <CodeBlock language="java" code={`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

// 1. Create an HttpClient
HttpClient client = HttpClient.newHttpClient();

// 2. Build an HttpRequest
HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://jsonplaceholder.typicode.com/todos/1"))
      .build();

// 3. Send the request and get the HttpResponse (synchronously)
try {
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println("Status Code: " + response.statusCode());
    System.out.println("Body: " + response.body());
} catch (Exception e) {
    e.printStackTrace();
}`} />
      </>
  ) },
  { id: 'java10-var', title: 'Local-Variable Syntax (var)', parent: '14. Java 9-11 Features', content: (
      <>
        <p className="mb-4">Java 10 introduced the `var` keyword for local variable type inference. The compiler infers the type of the variable from the right-hand side of the initialization. It can only be used for local variables inside a method.</p>
        <CodeBlock language="java" code={`// Old way
String message = "Hello, CodeAlpha!";
ArrayList<String> list = new ArrayList<String>();

// New way with var
var messageVar = "Hello, CodeAlpha!"; // Inferred as String
var listVar = new ArrayList<String>(); // Inferred as ArrayList<String>`} />
      </>
  ) },

  // 15. Java 12–17 (LTS) Features
  { id: 'java12-switch-expressions', title: 'Switch Expressions', parent: '15. Java 12-17 Features', content: (
      <>
        <p className="mb-4">Switch can now be used as an expression that returns a value. It's more concise and less error-prone (no accidental fall-through). It uses arrow syntax `->`.</p>
        <CodeBlock language="java" code={`int day = 4;

// Old switch statement
String dayNameOld;
switch (day) {
    case 1: dayNameOld = "Monday"; break;
    case 2: dayNameOld = "Tuesday"; break;
    // ...
    default: dayNameOld = "Invalid day"; break;
}

// New switch expression (cleaner and safer)
String dayNameNew = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid day";
};

System.out.println(dayNameNew);`} />
      </>
  ) },
  { id: 'java15-text-blocks', title: 'Text Blocks', parent: '15. Java 12-17 Features', content: (
      <>
        <p className="mb-4">Text blocks make it easy to work with multi-line string literals, like JSON or HTML snippets, without needing lots of concatenation and escape characters. A text block is enclosed in triple double-quotes `"""`.</p>
        <CodeBlock language="java" code={`// Old way with escaping and concatenation
String jsonOld = "{\\n" +
               "  \\"name\\": \\"CodeAlpha\\",\\n" +
               "  \\"website\\": \\"codealpha.tech\\"\\n" +
               "}";

// New way with Text Blocks
String jsonNew = """
               {
                 "name": "CodeAlpha",
                 "website": "codealpha.tech"
               }
               """;

System.out.println(jsonNew);`} />
      </>
  ) },
  { id: 'java16-records', title: 'Records', parent: '15. Java 12-17 Features', content: (
      <>
        <p className="mb-4">Records provide a compact syntax for declaring classes that are transparent holders for immutable data. The compiler automatically generates the constructor, getters, `equals()`, `hashCode()`, and `toString()` methods, significantly reducing boilerplate code for data classes.</p>
        <CodeBlock language="java" code={`// A simple record for a Point
public record Point(int x, int y) {}

// Using the record in main
public static void main(String[] args) {
    Point p1 = new Point(10, 20);

    // Accessors are automatically created (e.g., p1.x())
    System.out.println("X: " + p1.x());
    System.out.println("Y: " + p1.y());

    // toString() is automatically generated
    System.out.println(p1); // Output: Point[x=10, y=20]
}`} />
      </>
  ) },
  { id: 'java17-sealed-classes', title: 'Sealed Classes', parent: '15. Java 12-17 Features', content: (
      <>
        <p className="mb-4">Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them. This gives you more control over your inheritance hierarchies, which is very useful in combination with pattern matching.</p>
        <CodeBlock language="java" code={`// This sealed Shape class can ONLY be extended by Circle and Rectangle
public abstract sealed class Shape permits Circle, Rectangle {
    // ...
}

public final class Circle extends Shape {
    // ...
}

public final class Rectangle extends Shape {
    // ...
}

// public final class Triangle extends Shape {} // This would cause a compile error`} />
      </>
  ) },
  { id: 'java16-pattern-matching', title: 'Pattern Matching for instanceof', parent: '15. Java 12-17 Features', content: (
      <>
        <p className="mb-4">This feature simplifies the common pattern of checking an object's type with `instanceof` and then casting it. It combines the check and the cast into a single step.</p>
        <CodeBlock language="java" code={`public void processObject(Object obj) {
    // Old way
    if (obj instanceof String) {
        String s = (String) obj;
        System.out.println("String length: " + s.length());
    }

    // New way with Pattern Matching
    if (obj instanceof String s) { // check and cast in one go
        System.out.println("String length: " + s.length());
    }
}`} />
      </>
  ) },
];