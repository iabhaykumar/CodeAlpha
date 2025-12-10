import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVA_PART4_TOPICS: Topic[] = [
  // 16. Java 18–21 (2023–2024)
  { id: 'java21-virtual-threads', title: 'Virtual Threads (Project Loom)', parent: '16. Java 18-21 Features', content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Virtual threads</strong>, finalized in Java 21 as part of Project Loom, are a revolutionary feature for concurrent programming. They are lightweight threads managed by the Java runtime, not the operating system. This allows for creating millions of virtual threads with very little overhead, dramatically simplifying the writing, maintaining, and observing of high-throughput concurrent applications.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 mb-1">Platform Threads vs. Virtual Threads</h4>
          <p className="text-blue-800 text-sm">
            A traditional "platform thread" is a thin wrapper around an OS thread, which is a scarce and heavy resource. A virtual thread is a Java object that runs its code on a platform thread but can be "unmounted" when it's blocked (e.g., waiting for I/O), freeing up the OS thread to do other work. This makes them ideal for high-throughput, I/O-bound applications like web servers and microservices.
          </p>
        </div>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Simplified Model

// Platform Threads (Heavy)
// OS Thread 1 <---> Java Thread 1 (Blocked on I/O)
// OS Thread 2 <---> Java Thread 2 (Running)
// OS Thread 3 <---> Java Thread 3 (Blocked on I/O)
// -> OS threads are stuck waiting.

// Virtual Threads (Lightweight)
// OS Thread 1 (Carrier Thread) <---> [VT 1] [VT 2] [VT 3] [VT 4] ...
// -> If VT 1 blocks, OS Thread 1 picks up VT 2.`}
        </pre>
        <CodeBlock language="java" code={`import java.util.concurrent.Executors;

// Creating and using virtual threads is straightforward.
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    // Submit 10,000 tasks, each running in its own virtual thread.
    // This would be impossible with platform threads.
    for (int i = 0; i < 10_000; i++) {
        int taskNumber = i;
        executor.submit(() -> {
            System.out.println("Running task " + taskNumber + " in thread: " + Thread.currentThread());
            try {
                // Simulate a blocking operation like a network call
                Thread.sleep(1000); 
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
    }
} // The executor is automatically closed here.`} />
      </>
  ) },
  { id: 'java21-structured-concurrency', title: 'Structured Concurrency', parent: '16. Java 18-21 Features', content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Structured Concurrency</strong> (a preview feature in Java 21) simplifies multithreaded programming by treating multiple tasks running in different threads as a single unit of work. If one subtask fails, the entire unit can be canceled. This makes concurrent code more reliable and easier to reason about, similar to how structured programming (if/else, for loops) improved sequential code.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 mb-1">Key Idea: A Family of Tasks</h4>
          <p className="text-yellow-800 text-sm">
            Think of it like a family of tasks. The parent task waits for all its children to finish. If one child task throws an error, the parent task can immediately tell all other sibling tasks to stop, saving resources and ensuring a clear success/fail outcome for the entire operation.
          </p>
        </div>
        <CodeBlock language="java" code={`// This feature is still a preview in JDK 21.
// You must enable preview features to compile and run this.
/*
import java.util.concurrent.Future;
import jdk.incubator.concurrent.StructuredTaskScope;

// Inside a method...
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    // Fork two concurrent subtasks. They run in parallel.
    Future<String> user = scope.fork(() -> findUser());
    Future<Integer> order = scope.fork(() -> fetchOrder());

    scope.join();           // Wait for both subtasks to complete
    scope.throwIfFailed();  // If any subtask failed, this will throw an exception

    // If we reach here, both succeeded. Process the results.
    String userInfo = user.resultNow();
    int orderInfo = order.resultNow();
    System.out.println("User " + userInfo + " has order " + orderInfo);
} catch (Exception e) {
    // Handle failure of the entire operation
    System.err.println("Failed to fetch user and order: " + e.getMessage());
}
*/`} />
      </>
  ) },
  { id: 'java21-pattern-matching-switch', title: 'Pattern Matching for switch', parent: '16. Java 18-21 Features', content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Finalized in Java 21, <strong>Pattern Matching for `switch`</strong> is a major enhancement that allows you to test an object against a number of different "patterns" with specific actions for each. It's far more expressive and safer than traditional `switch` statements or long `if-else if` chains.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Improvements</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Type Patterns:</strong> Switch directly on the type of an object and bind it to a new variable.</li>
            <li><strong>Guarded Patterns:</strong> Add a `when` clause to a case for more complex conditions.</li>
            <li><strong>Null Handling:</strong> You can now have an explicit `case null`.</li>
            <li><strong>Exhaustiveness:</strong> The compiler can check if all possible cases are covered for sealed types and enums, preventing bugs.</li>
        </ul>
        <CodeBlock language="java" code={`// A powerful switch expression that uses pattern matching
static String formatObject(Object obj) {
    return switch (obj) {
        // Type pattern: if obj is an Integer, bind it to i
        case Integer i -> String.format("int %d", i);
        
        // Type pattern: if obj is a Long, bind it to l
        case Long l    -> String.format("long %d", l);
        
        // Type pattern: if obj is a Double, bind it to d
        case Double d  -> String.format("double %f", d);
        
        // Guarded pattern: if obj is a String AND its length is > 5
        case String s when s.length() > 5 -> String.format("Long String: %s", s);
        
        // Standard type pattern for other strings
        case String s  -> String.format("String: %s", s);
        
        // Case for null
        case null      -> "It's null!";
        
        // Default case for any other type
        default        -> obj.toString();
    };
}

public static void main(String[] args) {
    System.out.println(formatObject(123));          // int 123
    System.out.println(formatObject("CodeAlpha"));  // Long String: CodeAlpha
    System.out.println(formatObject("Hi"));         // String: Hi
    System.out.println(formatObject(null));         // It's null!
}`} />
      </>
  ) },
  { id: 'java21-string-templates', title: 'String Templates', parent: '16. Java 18-21 Features', content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>String Templates</strong> (a preview feature in JDK 21) aim to make string interpolation and composition easier, more readable, and safer than simple concatenation or methods like `String.format()` or `MessageFormat`.
        </p>
        <p className="mb-4">They combine literal text with embedded expressions, which are evaluated and combined into a final string. A template processor (like the standard `STR`) controls how the template is processed.</p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 mb-1">Safer than Simple Concatenation</h4>
          <p className="text-green-800 text-sm">
            A key benefit is security. A template processor can validate and sanitize the embedded expressions, preventing injection vulnerabilities (e.g., SQL injection) that can occur with simple string building.
          </p>
        </div>
        <CodeBlock language="java" code={`// This is a preview feature. You must enable preview features to compile and run.
/*
import static java.lang.StringTemplate.STR;

public class Main {
    public static void main(String[] args) {
        String name = "CodeAlpha";
        int studentCount = 10000;

        // Using the STR template processor for simple interpolation
        String info = STR."Welcome to \\{name}! We have over \\{studentCount} students.";
        System.out.println(info);
        
        // Expressions can be more complex
        int x = 10;
        int y = 20;
        String calculation = STR."The sum of \\{x} and \\{y} is \\{x + y}.";
        System.out.println(calculation);
    }
}
*/`} />
      </>
  ) },
  
  // 17. Latest Java 22–23 (2025 Updated)
  { id: 'java-latest-unnamed-classes', title: 'Unnamed Classes & Instance Main Methods', parent: '17. Latest Java (22+)', content: (
      <>
        <p className="mb-4">Introduced as a preview feature to simplify the onboarding process for new Java developers. It allows writing a "Hello, World!" program without the need for `public static void main` and explicit class declarations, making the entry point much simpler.</p>
        <CodeBlock language="java" code={`// Preview feature in recent JDKs
// No need for 'public class Main' or 'public static void main(String[] args)'

void main() {
    System.out.println("Hello, CodeAlpha! This is much simpler.");
}`} />
      </>
  ) },
  { id: 'java-latest-scoped-values', title: 'Scoped Values (Project Loom)', parent: '17. Latest Java (22+)', content: (
      <>
          <p className="mb-4">A preview feature from Project Loom, Scoped Values provide a modern way to share immutable data within and across threads, particularly virtual threads. They are a safer and more performant alternative to thread-local variables, which have design flaws like unbounded lifetime and mutability issues.</p>
          <CodeBlock language="java" code={`/*
// Preview feature, API might change

public final static ScopedValue<User> LOGGED_IN_USER = ScopedValue.newInstance();

// In a web server request handler:
User currentUser = ...;
ScopedValue.where(LOGGED_IN_USER, currentUser)
           .run(() -> handleRequest());

// Later, in some deeply nested method called by handleRequest():
void process() {
    if (LOGGED_IN_USER.isBound()) {
        // We can safely get the user without passing it through all methods
        User user = LOGGED_IN_USER.get();
        System.out.println("Processing for user: " + user.name());
    }
}
*/`} />
      </>
  ) },
  { id: 'java-latest-reactive', title: 'Reactive Programming (Reactor, RxJava)', parent: '17. Latest Java (22+)', content: (
      <>
        <p className="mb-4">Reactive programming is a paradigm for working with asynchronous data streams. Instead of pulling data when you need it, reactive streams push data to you when it becomes available. Frameworks like <strong>Project Reactor</strong> (used by Spring WebFlux) and <strong>RxJava</strong> are popular for building responsive, resilient, and elastic systems.</p>
      </>
  ) },
  { id: 'java-latest-spring-ai', title: 'Spring AI', parent: '17. Latest Java (22+)', content: (
      <p>Spring AI is a new project that aims to simplify the development of applications that incorporate artificial intelligence functionality. It provides a common API to interact with various large language models (LLMs) like OpenAI's GPT and others, making it easy to add AI features to Spring Boot applications.</p>
  ) },
  { id: 'java-latest-graalvm', title: 'GraalVM Native Images', parent: '17. Latest Java (22+)', content: (
      <p>GraalVM is a high-performance JDK that can compile Java applications ahead-of-time (AOT) into a self-contained native executable. This results in near-instant startup times and significantly lower memory consumption, making Java ideal for serverless functions and microservices where startup performance is critical.</p>
  ) },

  // 18. Java Networking
  { id: 'java-networking-sockets', title: 'Sockets', parent: '18. Java Networking', content: (
      <>
          <p className="mb-4">Sockets provide a low-level way to communicate over a network (like the internet). They are the foundation of most network communication, enabling two programs on different computers to exchange data. A server listens on a specific port, and a client connects to that server's IP address and port.</p>
          <h4 className="font-bold mb-2">Simple Server Example:</h4>
          <CodeBlock language="java" code={`import java.net.ServerSocket;
import java.net.Socket;
import java.io.PrintWriter;

public class MyServer {
    public static void main(String[] args) throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(6789)) {
            System.out.println("Server is listening on port 6789");
            try (Socket clientSocket = serverSocket.accept()) { // waits for a client to connect
                System.out.println("Client connected!");
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                out.println("Hello from CodeAlpha Server!");
            }
        }
    }
}`} />
      </>
  ) },
  { id: 'java-networking-httpclient', title: 'HttpClient API', parent: '18. Java Networking', content: (
      <>
        <p className="mb-4">The modern `HttpClient` API (standard since Java 11) provides a flexible and powerful way to make HTTP requests, supporting both synchronous and asynchronous communication.</p>
        <CodeBlock language="java" code={`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://api.publicapis.org/entries"))
      .build();

// Asynchronous request
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
      .thenApply(HttpResponse::body)
      .thenAccept(System.out::println)
      .join();`} />
      </>
  ) },

  // 19. JDBC (Database)
  { id: 'java-jdbc-intro', title: 'JDBC Driver & Connection', parent: '19. JDBC (Database)', content: (
      <>
        <p className="mb-4">JDBC (Java Database Connectivity) is a standard Java API for connecting to relational databases. To connect to a specific database (like MySQL or PostgreSQL), you need a JDBC driver for it.</p>
        <CodeBlock language="java" code={`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

String url = "jdbc:mysql://localhost:3306/mydatabase";
String user = "your_user";
String password = "your_password";

try (Connection conn = DriverManager.getConnection(url, user, password)) {
    if (conn != null) {
        System.out.println("Connected to the database!");
    }
} catch (SQLException e) {
    System.err.println(e.getMessage());
}`} />
      </>
  ) },
  { id: 'java-jdbc-crud', title: 'CRUD with PreparedStatement', parent: '19. JDBC (Database)', content: (
      <>
        <p className="mb-4">`PreparedStatement` is used to execute parameterized SQL queries. It is more secure (prevents SQL injection) and often more efficient than a `Statement`.</p>
        <CodeBlock language="java" code={`// Always use PreparedStatement to prevent SQL injection
String sql = "UPDATE Students SET score = ? WHERE name = ?";

try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
    pstmt.setInt(1, 95); // Set the first parameter (score)
    pstmt.setString(2, "Alice"); // Set the second parameter (name)

    int rowsAffected = pstmt.executeUpdate();
    System.out.println("Rows affected: " + rowsAffected);
}`} />
      </>
  ) },
  { id: 'java-jdbc-transactions', title: 'Transactions', parent: '19. JDBC (Database)', content: (
      <>
        <p className="mb-4">A transaction is a group of one or more SQL statements that are executed as a single unit of work. A transaction is atomic: either all of the statements succeed (`commit`), or none of them do (`rollback`). This ensures data integrity.</p>
        <CodeBlock language="java" code={`Connection conn = null;
try {
    conn = DriverManager.getConnection(url, user, password);
    // Disable auto-commit to start a transaction
    conn.setAutoCommit(false);

    // Statement 1: Debit from one account
    PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
    debit.executeUpdate();

    // Statement 2: Credit another account
    PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
    credit.executeUpdate();

    // If both statements succeed, commit the transaction
    conn.commit();
    System.out.println("Transaction successful!");

} catch (SQLException e) {
    System.err.println("Transaction failed. Rolling back...");
    if (conn != null) {
        try {
            // Roll back the changes if an error occurred
            conn.rollback();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
} finally {
    if (conn != null) {
        try {
            conn.setAutoCommit(true); // Restore default behavior
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`} />
      </>
  ) },

  // 20. Build Tools
  { id: 'java-build-maven', title: 'Maven', parent: '20. Build Tools', content: (
      <p>Maven is a powerful build automation tool that is primarily used for Java projects. It handles dependency management (downloading required libraries) and defines a standard project structure and build lifecycle (e.g., compile, test, package).</p>
  ) },
  { id: 'java-build-gradle', title: 'Gradle', parent: '20. Build Tools', content: (
      <p>Gradle is another modern build automation tool that builds upon the concepts of Maven. It uses a Groovy or Kotlin-based DSL for build scripts, which offers more flexibility and often results in more concise build files compared to Maven's XML.</p>
  ) },
  
  // 21. Testing
  { id: 'java-testing-junit', title: 'JUnit', parent: '21. Testing', content: (
      <p>JUnit is the most popular unit testing framework for Java. It provides annotations like `@Test` to identify test methods and assertion methods (`assertEquals`, `assertTrue`, etc.) to verify expected outcomes.</p>
  ) },
  { id: 'java-testing-mockito', title: 'Mockito', parent: '21. Testing', content: (
      <p>Mockito is a mocking framework that is often used along with JUnit. It lets you create "mock" (or "dummy") objects of your dependencies, allowing you to test a class in isolation.</p>
  ) },

  // 22. Enterprise and Frameworks
  { id: 'java-frameworks-spring-boot', title: 'Spring Boot', parent: '22. Enterprise Frameworks', content: (
      <p>Spring Boot is a framework that makes it easy to create stand-alone, production-grade Spring-based Applications that you can "just run". It takes an opinionated view of the Spring platform, which paves a "happy path" for developers with auto-configuration and sensible defaults.</p>
  ) },
  { id: 'java-frameworks-spring-mvc', title: 'Spring MVC & REST APIs', parent: '22. Enterprise Frameworks', content: (
      <p>Spring MVC provides a framework for building web applications and RESTful APIs. Annotations like `@RestController`, `@GetMapping`, and `@PostMapping` make it incredibly simple to define API endpoints.</p>
  ) },
  { id: 'java-frameworks-spring-data', title: 'Spring Data JPA / Hibernate', parent: '22. Enterprise Frameworks', content: (
      <p>Spring Data JPA makes it easy to implement JPA-based repositories. It simplifies the data access layer by providing a set of generic CRUD operations and the ability to define query methods just by their name, eliminating boilerplate code.</p>
  ) },
  { id: 'java-frameworks-microservices', title: 'Microservices', parent: '22. Enterprise Frameworks', content: (
      <p>Microservices is an architectural style that structures an application as a collection of small, autonomous services. Spring Boot and the wider Spring Cloud ecosystem are extremely popular for building microservice-based systems in Java.</p>
  ) },
  { id: 'java-frameworks-spring-security', title: 'Spring Security', parent: '22. Enterprise Frameworks', content: (
      <p>Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.</p>
  ) },
];
