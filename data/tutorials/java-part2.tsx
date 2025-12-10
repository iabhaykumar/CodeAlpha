import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVA_PART2_TOPICS: Topic[] = [
  // 7. Java OOP Advanced
  { id: 'java-final-keyword', title: 'final keyword', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">The `final` keyword is a non-access modifier used for classes, methods, and variables. Once declared `final`, an entity cannot be changed.</p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>final variable:</strong> Creates a constant. Its value cannot be changed.</li>
          <li><strong>final method:</strong> Prevents method overriding in a subclass.</li>
          <li><strong>final class:</strong> Prevents inheritance. No other class can extend it. (e.g., `String` class is `final`)</li>
        </ul>
        <CodeBlock language="java" code={`public class FinalExample {
    final double PI = 3.14159; // A final variable (constant)

    public final void showInfo() {
        System.out.println("This is a final method.");
    }
}

final class ImmutableClass {
    // This class cannot be extended
}

// class SubClass extends ImmutableClass {} // This would cause a compile error.`} />
      </>
  ) },
  { id: 'java-static-keyword', title: 'static keyword', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">The `static` keyword is used for memory management mainly. It can be applied to variables, methods, blocks, and nested classes. A static member belongs to the class itself rather than an instance of the class.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Memory Diagram: Static vs. Instance

// Class Memory (loaded once)
// +-----------------------------+
// | class Student {             |
// |   static String schoolName; | <-- One copy for all objects
// | }                           |
// +-----------------------------+

// Heap Memory (for each object)
// +-----------------------------+      +-----------------------------+
// | student1 (Object)           |      | student2 (Object)           |
// | - String name = "Alice";    |      | - String name = "Bob";      |
// +-----------------------------+      +-----------------------------+`}
        </pre>
        <CodeBlock language="java" code={`public class Student {
    // Static variable: shared among all instances of the class
    static String schoolName = "CodeAlpha University";
    
    // Instance variable
    String studentName;
    
    public Student(String name) {
        this.studentName = name;
    }
    
    // Static method: can be called without creating an object
    public static void getSchoolInfo() {
        System.out.println("School: " + schoolName);
        // System.out.println(this.studentName); // Error! Static methods cannot use 'this'
    }
    
    public void getStudentInfo() {
        System.out.println("Student: " + studentName + ", School: " + schoolName);
    }
}

// In main method:
Student.getSchoolInfo(); // Call static method on the class
Student s1 = new Student("Alice");
s1.getStudentInfo();`} />
      </>
  ) },
  { id: 'java-inner-classes', title: 'inner classes', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">Java allows you to define a class within another class. Such a class is called a nested class. They are used to group classes that belong together, increase encapsulation, and create more readable and maintainable code.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Member Inner Class:</strong> A non-static class created inside another class but outside a method. It can access all members (including private) of the outer class.</li>
            <li><strong>Static Nested Class:</strong> A static class created inside another class. It cannot access non-static members of the outer class.</li>
            <li><strong>Local Inner Class:</strong> A class created inside a method.</li>
        </ul>
        <CodeBlock language="java" code={`class OuterClass {
    int x = 10;
    
    // Member Inner Class
    class InnerClass {
        public int myInnerMethod() {
            return x; // Can access outer class's private members
        }
    }
    
    // Static Nested Class
    static class StaticNestedClass {
        public int myStaticMethod() {
            // return x; // Error! Cannot access non-static member x
            return 5;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass myOuter = new OuterClass();
        OuterClass.InnerClass myInner = myOuter.new InnerClass();
        System.out.println(myInner.myInnerMethod()); // 10

        OuterClass.StaticNestedClass myStatic = new OuterClass.StaticNestedClass();
        System.out.println(myStatic.myStaticMethod()); // 5
    }
}`} />
      </>
  ) },
  { id: 'java-anonymous-inner-class', title: 'anonymous inner class', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">An anonymous inner class is a class without a name. It is used to override a method of a class or an interface on the fly. It's useful for one-time use objects.</p>
        <p className="mb-4">While still used in older codebases, they have largely been replaced by more concise <strong>Lambda Expressions</strong> since Java 8.</p>
        <CodeBlock language="java" code={`interface Greeter {
    void greet();
}

public class Main {
    public static void main(String[] args) {
        // Create an anonymous inner class that implements the Greeter interface
        Greeter englishGreeter = new Greeter() {
            @Override
            public void greet() {
                System.out.println("Hello!");
            }
        };
        
        englishGreeter.greet(); // Hello!

        // The modern Java 8+ way using a lambda:
        Greeter spanishGreeter = () -> System.out.println("Hola!");
        spanishGreeter.greet(); // Hola!
    }
}`} />
      </>
  ) },
  { id: 'java-enums', title: 'enums', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">An `enum` is a special "class" that represents a group of constants (unchangeable variables, like `final` variables). They are much more powerful and type-safe than using `static final int` constants.</p>
        <CodeBlock language="java" code={`// Define an enum for different levels
enum Level {
    LOW,
    MEDIUM,
    HIGH
}

public class Main {
    public static void main(String[] args) {
        Level myVar = Level.MEDIUM; 
        
        switch(myVar) {
            case LOW:
                System.out.println("Low level");
                break;
            case MEDIUM:
                System.out.println("Medium level");
                break;
            case HIGH:
                System.out.println("High level");
                break;
        }
        
        // Enums can have methods and constructors too!
        for (Level level : Level.values()) {
            System.out.println(level); // Iterating through all enum constants
        }
    }
}`} />
      </>
  ) },
  { id: 'java-annotations', title: 'annotations', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">Annotations are a form of metadata, they provide data about a program that is not part of the program itself. Annotations have no direct effect on the operation of the code they annotate.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>`@Override`</strong>: Informs the compiler that the element is meant to override an element declared in a superclass.</li>
            <li><strong>`@Deprecated`</strong>: Marks that the element is deprecated and should no longer be used.</li>
            <li><strong>`@SuppressWarnings`</strong>: Instructs the compiler to suppress specific warnings it would otherwise generate.</li>
        </ul>
        <p>Frameworks like Spring and Hibernate make extensive use of annotations for configuration and functionality.</p>
        <CodeBlock language="java" code={`class Animal {
    public void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    @Override // This annotation ensures we are correctly overriding the parent method.
    public void eat() {
        System.out.println("Dog eats food.");
    }
}`} />
      </>
  ) },
  { id: 'java-object-class-methods', title: 'Object class methods', parent: '7. Java OOP Advanced', content: (
      <>
        <p className="mb-4">The `Object` class is the root of the class hierarchy. Every class has `Object` as a superclass. All objects, including arrays, implement the methods of this class.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Key Methods to Override</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>`toString()`</strong>: Returns a string representation of the object. By default, it returns the class name and hash code. You should override it to provide a meaningful output.</li>
          <li><strong>`equals(Object obj)`</strong>: Indicates whether some other object is "equal to" this one. By default, it checks for reference equality (`==`). You should override it to check for content equality.</li>
          <li><strong>`hashCode()`</strong>: Returns a hash code value for the object. It's essential for performance in collections like `HashMap` and `HashSet`.</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 mb-1">Equals & HashCode Contract</h4>
          <p className="text-yellow-800 text-sm">If you override `equals()`, you <strong>MUST</strong> also override `hashCode()`. The rule is: if two objects are equal according to `equals()`, they must have the same `hashCode()`.</p>
        </div>
      </>
  ) },

  // 8. Exception Handling
  { id: 'java-try-catch-finally', title: 'try / catch / finally', parent: '8. Exception Handling', content: (
      <>
        <p className="mb-4">Exception handling in Java is used to handle runtime errors, allowing the program to continue execution instead of crashing. </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Execution Flow
//
//   +-----------+
//   |   try     | --> If error occurs --> +-----------+
//   | (code)    |                         |  catch    |
//   +-----------+                         | (handle)  |
//        | (no error)                     +-----------+
//        |                                     |
//        +-------------------------------------+
//                                              |
//                                              v
//                                        +-----------+
//                                        |  finally  | (always runs)
//                                        +-----------+`}
        </pre>
        <CodeBlock language="java" code={`public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]); // This will cause an error
    } catch (ArrayIndexOutOfBoundsException e) {
      // This block runs because the error occurred
      System.out.println("Error: Array index is out of bounds.");
      System.out.println("Exception message: " + e.getMessage());
    } finally {
      // This block runs regardless of whether an exception occurred
      System.out.println("The 'try catch' is finished.");
    }
  }
}`} />
      </>
  ) },
  { id: 'java-throw-throws', title: 'throw / throws', parent: '8. Exception Handling', content: (
      <>
        <p className="mb-4">The `throw` and `throws` keywords are part of exception handling, but serve different purposes.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>`throw`</strong>: Used to manually throw an exception within a method or block of code. You throw an *object* of an exception class.</li>
            <li><strong>`throws`</strong>: Used in a method signature to declare that the method might throw one or more exceptions. It tells the caller of the method that they need to handle the potential exception.</li>
        </ul>
        <CodeBlock language="java" code={`// 'throws' declares that this method can cause an exception
public static void checkAge(int age) throws ArithmeticException {
    if (age < 18) {
        // 'throw' is used to create and fire the exception
        throw new ArithmeticException("Access denied - You must be at least 18 years old.");
    } else {
        System.out.println("Access granted - You are old enough!");
    }
}

public static void main(String[] args) {
    try {
        checkAge(15); // This call needs to be in a try-catch block
    } catch (ArithmeticException e) {
        System.out.println("Caught an exception: " + e.getMessage());
    }
}`} />
      </>
  ) },
  { id: 'java-custom-exceptions', title: 'Custom Exceptions', parent: '8. Exception Handling', content: (
      <>
        <p className="mb-4">You can create your own exception classes by extending the `Exception` class (for checked exceptions) or `RuntimeException` (for unchecked exceptions). This makes your code more readable and specific to your application's domain.</p>
        <CodeBlock language="java" code={`// 1. Create a custom exception class
class InvalidCourseException extends Exception {
    public InvalidCourseException(String message) {
        super(message);
    }
}

// 2. Use the custom exception in your code
public class Course {
    public void enroll(String courseName) throws InvalidCourseException {
        if (!courseName.equals("Java")) {
            throw new InvalidCourseException(courseName + " is not a valid course.");
        }
        System.out.println("Successfully enrolled in Java!");
    }
}

// 3. Handle it
public class Main {
    public static void main(String[] args) {
        Course course = new Course();
        try {
            course.enroll("Python");
        } catch (InvalidCourseException e) {
            System.err.println(e.getMessage());
        }
    }
}`} />
      </>
  ) },
  { id: 'java-exception-hierarchy', title: 'Exception Hierarchy', parent: '8. Exception Handling', content: (
      <>
        <p className="mb-4">All exception and error types are subclasses of the `Throwable` class. Understanding this hierarchy helps you catch exceptions effectively.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`                       +-----------+
                       | Throwable |
                       +-----------+
                           /      \\
                +---------+        +---------+
                |   Error   |        | Exception |
                +---------+        +---------+
                     |                  /      \\
(System Errors, e.g.     +---------------+      +-------------------+
OutOfMemoryError)        | RuntimeException|      | Other Exceptions  |
                         +---------------+      +-------------------+
                                |                      |
              (Unchecked Exceptions, e.g.  (Checked Exceptions, e.g.
               NullPointerException,        IOException,
               ArrayIndexOutOfBounds)       SQLException)`}
        </pre>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Checked Exceptions:</strong> Exceptions that are checked at compile-time (e.g., `IOException`). You are forced to handle them with a `try-catch` block or declare them with `throws`.</li>
            <li><strong>Unchecked (Runtime) Exceptions:</strong> Exceptions that are not checked at compile-time (e.g., `NullPointerException`). You are not required to handle them, but it's good practice.</li>
            <li><strong>Errors:</strong> Problems that arise beyond the control of the user or the programmer (e.g., `OutOfMemoryError`). They should not be caught.</li>
        </ul>
      </>
  ) },

  // 9. Collections Framework
  { id: 'java-collections-list-set-map', title: 'List, Set, Map', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">The Java Collections Framework is a set of classes and interfaces that implement commonly reusable collection data structures.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Core Interfaces
//
// Collection
//  |
//  +-- List (Ordered, allows duplicates)
//  |    |-- ArrayList, LinkedList
//  |
//  +-- Set (Unordered, no duplicates)
//  |    |-- HashSet, LinkedHashSet, TreeSet
//  |
//  +-- Queue (Ordered for processing, FIFO)
//       |-- PriorityQueue, ArrayDeque

// Map (Key-Value pairs, keys are unique)
//  |-- HashMap, LinkedHashMap, TreeMap`}
        </pre>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>List:</strong> An ordered collection (a sequence). Elements can be accessed by their integer index. Duplicates are allowed.</li>
          <li><strong>Set:</strong> A collection that contains no duplicate elements. Most implementations are unordered.</li>
          <li><strong>Map:</strong> An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value.</li>
        </ul>
      </>
  ) },
  { id: 'java-arraylist', title: 'ArrayList', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">`ArrayList` is the most popular implementation of the `List` interface. It uses a dynamic array to store the elements. It is fast for random access (getting an element by index) but can be slow for adding/removing elements from the middle of the list.</p>
        <CodeBlock language="java" code={`import java.util.ArrayList;

ArrayList<String> courses = new ArrayList<>();
// Add elements
courses.add("Java");
courses.add("Python");
courses.add("Web Dev");

// Access an element
System.out.println(courses.get(1)); // Python

// Remove an element
courses.remove(0); // Removes "Java"

// Iterate over the list
for (String course : courses) {
    System.out.println(course);
}`} />
      </>
  ) },
  { id: 'java-linkedlist', title: 'LinkedList', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">`LinkedList` implements the `List` and `Queue` interfaces. It uses a doubly-linked list to store elements. It is fast for adding and removing elements from the beginning or end, but slow for random access.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`ArrayList vs. LinkedList

// ArrayList (Array-based)
// [ E1 | E2 | E3 | E4 ]
// + Fast get(index)
// - Slow remove/add from middle (shifts elements)

// LinkedList (Node-based)
// [E1] <-> [E2] <-> [E3] <-> [E4]
// - Slow get(index) (must traverse)
// + Fast remove/add from ends or middle (if iterator is at position)`}
        </pre>
        <CodeBlock language="java" code={`import java.util.LinkedList;

LinkedList<String> names = new LinkedList<>();
names.add("Alice");
names.add("Bob");
names.addFirst("Zack"); // Add to the beginning
names.removeLast(); // Remove from the end`} />
      </>
  ) },
  { id: 'java-hashset', title: 'HashSet, LinkedHashSet', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">`HashSet` is the most common `Set` implementation. It makes no guarantees concerning the iteration order; it may even change over time. It offers constant time performance O(1) for basic operations (add, remove, contains).</p>
        <p className="mb-4">`LinkedHashSet` is a subclass of `HashSet` that maintains the insertion order of elements.</p>
        <CodeBlock language="java" code={`import java.util.HashSet;
import java.util.LinkedHashSet;

HashSet<String> uniqueNames = new HashSet<>();
uniqueNames.add("Java");
uniqueNames.add("Python");
uniqueNames.add("Java"); // This is ignored, no duplicates allowed
System.out.println(uniqueNames); // [Python, Java] (order not guaranteed)

LinkedHashSet<String> orderedUniqueNames = new LinkedHashSet<>();
orderedUniqueNames.add("Java");
orderedUniqueNames.add("Python");
orderedUniqueNames.add("C++");
System.out.println(orderedUniqueNames); // [Java, Python, C++] (insertion order)`} />
      </>
  ) },
  { id: 'java-hashmap', title: 'HashMap, LinkedHashMap', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">`HashMap` is the most common `Map` implementation. It stores key-value pairs and provides O(1) performance for get/put operations. It makes no guarantees about iteration order.</p>
        <p className="mb-4">`LinkedHashMap` maintains the insertion order of keys.</p>
        <CodeBlock language="java" code={`import java.util.HashMap;

HashMap<String, Integer> studentScores = new HashMap<>();
studentScores.put("Alice", 95);
studentScores.put("Bob", 88);

System.out.println(studentScores.get("Alice")); // 95

// Iterate over a map
for (String name : studentScores.keySet()) {
    System.out.println(name + ": " + studentScores.get(name));
}`} />
      </>
  ) },
  { id: 'java-treeset-treemap', title: 'TreeSet, TreeMap', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">`TreeSet` and `TreeMap` are implementations that keep the elements sorted. `TreeSet` stores elements in a sorted order, and `TreeMap` stores key-value pairs sorted by key. This sorting comes at a performance cost, with O(log n) for basic operations.</p>
        <CodeBlock language="java" code={`import java.util.TreeMap;

TreeMap<Integer, String> errorCodes = new TreeMap<>();
errorCodes.put(500, "Server Error");
errorCodes.put(404, "Not Found");
errorCodes.put(200, "OK");

System.out.println(errorCodes); // {200=OK, 404=Not Found, 500=Server Error} (sorted by key)`} />
      </>
  ) },
  { id: 'java-queue', title: 'Queue, PriorityQueue', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">A `Queue` is a collection for holding elements prior to processing. Besides basic Collection operations, queues provide additional insertion, extraction, and inspection operations. Queues typically order elements in a FIFO (first-in-first-out) manner.</p>
        <p className="mb-4">A `PriorityQueue` is a special type of queue that orders elements according to their natural order, or by a `Comparator` provided at construction time.</p>
        <CodeBlock language="java" code={`import java.util.PriorityQueue;

PriorityQueue<Integer> pq = new PriorityQueue<>(); // Min-heap by default
pq.add(30);
pq.add(10);
pq.add(20);

System.out.println(pq.peek()); // 10 (the smallest element)
pq.poll(); // Removes 10
System.out.println(pq.peek()); // 20`} />
      </>
  ) },
  { id: 'java-iterator', title: 'Iterator', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">An `Iterator` is an object that can be used to loop through collections, like `ArrayList` and `HashSet`. It is the universal way to traverse a collection.</p>
        <CodeBlock language="java" code={`import java.util.ArrayList;
import java.util.Iterator;

ArrayList<String> cars = new ArrayList<>();
cars.add("Volvo");
cars.add("BMW");

Iterator<String> it = cars.iterator();

while(it.hasNext()) {
  String car = it.next();
  if (car.equals("BMW")) {
      it.remove(); // Safely remove elements during iteration
  }
}
System.out.println(cars); // [Volvo]`} />
      </>
  ) },
  { id: 'java-comparable-comparator', title: 'Comparable vs Comparator', parent: '9. Collections Framework', content: (
      <>
        <p className="mb-4">These two interfaces are used to sort objects in Java.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>`Comparable`</strong>: Provides a single, "natural" sorting sequence. The class itself must implement this interface and the `compareTo()` method.</li>
          <li><strong>`Comparator`</strong>: Provides multiple, external sorting sequences. You create a separate class that implements this interface and the `compare()` method.</li>
        </ul>
        <CodeBlock language="java" code={`class Student implements Comparable<Student> {
    String name;
    int score;
    // constructor ...
    
    // Natural ordering by score (Comparable)
    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.score, other.score);
    }
}

// External sorting by name (Comparator)
class NameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.name.compareTo(s2.name);
    }
}

// Usage:
// Collections.sort(studentList); // Sorts by score (natural order)
// Collections.sort(studentList, new NameComparator()); // Sorts by name`} />
      </>
  ) },
];