import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVA_PART1_TOPICS: Topic[] = [
  // 1. Basics
  {
    id: 'java-what-is-java',
    title: 'What is Java?',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers <strong>"write once, run anywhere"</strong> (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Platform Independent:</strong> Java code is compiled into bytecode, which can be run on any machine that has a Java Virtual Machine (JVM).</li>
          <li><strong>Object-Oriented:</strong> In Java, everything is an object, which helps in building modular programs and reusable code.</li>
          <li><strong>Robust and Secure:</strong> Java provides extensive compile-time and run-time checking, and its memory management model eliminates many common programming errors.</li>
          <li><strong>Multi-threaded:</strong> Java supports multi-threaded programming, which allows you to write programs that can do many things simultaneously.</li>
        </ul>
      </>
    )
  },
  {
    id: 'java-jdk-jvm',
    title: 'JDK, JRE, and JVM',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="mb-4">Understanding the difference between the JDK, JRE, and JVM is fundamental to Java development.</p>
        <div className="bg-slate-100 p-6 rounded-lg text-sm text-slate-800 my-6 font-mono border border-slate-200">
          <h4 className="font-bold text-center mb-4 text-base">The Java Platform Architecture</h4>
          <div className="border-4 border-blue-600 p-4 rounded-lg bg-blue-50">
            <p className="font-bold text-center text-blue-800">JDK (Java Development Kit)</p>
            <p className="text-center text-xs text-blue-600 mb-2">(For Developers: To Write & Run Java code)</p>
            <div className="flex justify-center text-xs mb-2 flex-wrap gap-1">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Compiler</span>
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Debugger</span>
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Javadoc</span>
            </div>

            <div className="border-4 border-green-600 p-4 rounded-lg bg-green-50 mt-4">
              <p className="font-bold text-center text-green-800">JRE (Java Runtime Environment)</p>
              <p className="text-center text-xs text-green-600 mb-2">(For Users: To Only Run Java code)</p>
              <div className="flex justify-center text-xs mb-2 flex-wrap gap-1">
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">Libraries (JARs)</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">Integration Libs</span>
              </div>

              <div className="border-4 border-orange-600 p-4 rounded-lg bg-orange-50 mt-4">
                <p className="font-bold text-center text-orange-800">JVM (Java Virtual Machine)</p>
                <p className="text-center text-xs text-orange-600 mb-2">(The "Heart": Executes Bytecode)</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-3 mb-6">
          <li><strong>JVM (Java Virtual Machine):</strong> It's an abstract machine. It provides a runtime environment in which Java bytecode can be executed. It's what makes Java platform-independent.</li>
          <li><strong>JRE (Java Runtime Environment):</strong> This is the set of software tools required to run Java applications. It physically exists. It contains the JVM and a set of libraries that the JVM uses at runtime.</li>
          <li><strong>JDK (Java Development Kit):</strong> This is a software development environment used for making Java applications. It physically exists and contains the JRE + development tools (like a compiler and debugger).</li>
        </ul>
      </>
    )
  },
  {
    id: 'java-installation',
    title: 'Java Installation',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="mb-4">To start writing Java code, you need to install the <strong>Java Development Kit (JDK)</strong>. The JDK includes the JRE (to run code) and development tools (like the compiler).</p>
        <h3 className="text-xl font-bold mt-6 mb-2">1. Download the JDK</h3>
        <p className="mb-4">You can download a JDK from several sources. Oracle provides the official JDK, but other open-source versions like OpenJDK are also very popular.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oracle JDK</a> (Free for personal and development use)</li>
          <li><a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Eclipse Temurin (OpenJDK)</a> (Completely open source)</li>
        </ul>
        <p className="mb-4">Download the installer appropriate for your operating system (Windows, macOS, or Linux) and follow the installation instructions.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">2. Set up Environment Variables</h3>
        <p className="mb-4">After installation, you need to tell your operating system where to find the Java compiler (`javac`) and launcher (`java`). This is done by setting the `JAVA_HOME` and `PATH` environment variables.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>JAVA_HOME</strong>: Should point to the directory where the JDK was installed (e.g., `C:\Program Files\Java\jdk-17`).</li>
          <li><strong>PATH</strong>: You should add the JDK's `bin` directory to your system's PATH (e.g., `%JAVA_HOME%\bin` on Windows or `$JAVA_HOME/bin` on Linux/macOS).</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-800 text-sm">Most modern installers offer to set the PATH for you automatically. Check that option during installation if available.</p>
        </div>
        <h3 className="text-xl font-bold mt-6 mb-2">3. Verify Installation</h3>
        <p>Open a new terminal or command prompt and type the following commands:</p>
        <CodeBlock language="bash" code={`# Check the Java runtime version
java -version

# Check the Java compiler version
javac -version`} />
        <p>If both commands show a version number, your installation is successful!</p>
      </>
    )
  },
  {
    id: 'java-syntax', title: 'Syntax', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">Java has a specific syntax that must be followed. Every Java application begins with a class definition, and the main execution point is the `public static void main(String[] args)` method.</p>
        <CodeBlock language="java" code={`// Every Java program must have at least one class.
// The class name must match the filename (e.g., Main.java).
public class Main {
    
    // This is the main method, the entry point of the program.
    // JVM looks for this exact signature to start execution.
    public static void main(String[] args) {
        
        // System.out.println() is used to print a line of text to the console.
        System.out.println("Hello, CodeAlpha!");
        
        // Each statement in Java must end with a semicolon (;).
        int number = 10; 
    }
} // Curly braces define a block of code.`} />
      </>
    )
  },
  {
    id: 'java-variables', title: 'Variables', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">Variables are containers for storing data. In Java, you must declare the type of a variable before you can use it.</p>
        <CodeBlock language="java" code={`// Declaration: <type> <variableName>;
int score;

// Initialization: <variableName> = <value>;
score = 95;

// Declaration and Initialization together
String playerName = "Alex";
boolean isActive = true;`} />
        <h3 className="text-xl font-bold mt-6 mb-2">Memory Allocation Diagram</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Primitive vs. Reference Types in Memory

// Stack Memory (Fast, fixed size, for primitives & references)
// +----------------+
// | int score = 95 |  <-- The actual value is stored on the stack.
// +----------------+
// | String pName   |  <-- A reference (memory address) is stored here.
// +----------------+       |
//                          | points to
//                          v
// Heap Memory (Slower, dynamic size, for objects)
// +---------------------------------+
// | "Alex" (String Object)          |
// +---------------------------------+`}
        </pre>
      </>
    )
  },
  {
    id: 'java-data-types', title: 'Data Types', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">Java has two categories of data types: Primitive Types and Reference Types.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Primitive Types</h3>
        <p className="mb-4">These are the most basic data types and are not objects. There are 8 primitive types:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>byte:</strong> 1 byte, stores whole numbers from -128 to 127</li>
          <li><strong>short:</strong> 2 bytes, stores whole numbers from -32,768 to 32,767</li>
          <li><strong>int:</strong> 4 bytes, stores whole numbers (most common for integers)</li>
          <li><strong>long:</strong> 8 bytes, stores large whole numbers (use `L` suffix, e.g., `100L`)</li>
          <li><strong>float:</strong> 4 bytes, stores fractional numbers. Sufficient for 6-7 decimal digits (use `f` suffix, e.g., `3.14f`)</li>
          <li><strong>double:</strong> 8 bytes, stores fractional numbers. Sufficient for 15 decimal digits (most common for decimals)</li>
          <li><strong>boolean:</strong> 1 bit, stores `true` or `false` values</li>
          <li><strong>char:</strong> 2 bytes, stores a single character/letter or ASCII values (use single quotes, e.g., `'A'`)</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Reference Types</h3>
        <p className="mb-4">These refer to objects. They are created using defined classes. Examples include `String`, `Array`, and any custom class you create.</p>
      </>
    )
  },
  {
    id: 'java-type-casting', title: 'Type Casting', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">Type casting is when you assign a value of one primitive data type to another type.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Widening Casting (Implicit)</h3>
        <p className="mb-4">Converting a smaller type to a larger type size. This is done automatically by Java.</p>
        <pre className="bg-slate-100 p-2 rounded-lg text-sm text-slate-600 my-4 font-mono">
          byte → short → char → int → long → float → double
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-2">Narrowing Casting (Explicit)</h3>
        <p className="mb-4">Converting a larger type to a smaller size type. This must be done manually by placing the type in parentheses. Data loss is possible.</p>
        <CodeBlock language="java" code={`// Widening (automatic)
int myInt = 9;
double myDouble = myInt; // int is converted to double
System.out.println(myDouble); // 9.0

// Narrowing (manual)
double anotherDouble = 9.78;
int anotherInt = (int) anotherDouble; // double is converted to int
System.out.println(anotherInt); // 9 (data lost)`} />
      </>
    )
  },
  {
    id: 'java-operators', title: 'Operators', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">Operators are symbols that perform operations on variables and values.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Arithmetic:</strong>
            <code> + </code>, <code> - </code>, <code> * </code>, <code> / </code>,
            <code> % </code> (modulus), <code> ++ </code> (increment), <code> -- </code> (decrement)
          </li>

          <li>
            <strong>Assignment:</strong>
            <code> = </code>, <code> += </code>, <code> -= </code>
          </li>

          <li>
            <strong>Comparison:</strong>
            <code> == </code>, <code> != </code>, <code> &gt; </code>, <code> &lt; </code>,
            <code> &gt;= </code>, <code> &lt;= </code>
          </li>

          <li>
            <strong>Logical:</strong>
            <code> && </code> (AND), <code> || </code> (OR), <code> ! </code> (NOT)
          </li>
        </ul>

      </>
    )
  },
  {
    id: 'java-io', title: 'Input/Output', parent: '1. Basics / Fundamentals', content: (
      <>
        <p className="mb-4">`System.out.println()` is used for output. For user input, one common way is to use the `Scanner` class.</p>
        <CodeBlock language="java" code={`import java.util.Scanner; // Import the Scanner class

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String userName = myObj.nextLine(); // Read user input
    System.out.println("Username is: " + userName);
    myObj.close();
  }
}`} />
      </>
    )
  },
  {
    id: 'java-comments', title: 'Comments', parent: '1. Basics / Fundamentals', content: (
      <CodeBlock language="java" code={`// This is a single-line comment

/*
This is a
multi-line comment.
*/

/**
 * This is a Javadoc comment.
 * It's used to generate documentation.
 * @param args Command line arguments
 */
public static void main(String[] args) { /*...*/ }`} />
    )
  },

  // 2. Control Flow
  {
    id: 'java-if-else', title: 'if / else', parent: '2. Control Flow', content: (
      <>
        <p>Use `if` to specify a block of code to be executed if a specified condition is true. Use `else` to specify a block of code to be executed if the same condition is false. Use `else if` to specify a new condition to test, if the first condition is false.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Flowchart for if-else
       +-----------------+
       |      Start      |
       +-----------------+
              |
              v
       +-----------------+
       |   Condition?    | <>
       +-----------------+
              |
      +-------+----------+
      | (true)           | (false)
      v                  v
+--------------+   +--------------+
|   if block   |   |  else block  |
+--------------+   +--------------+
      |                  |
      +--------+---------+
               |
               v
       +-----------------+
       |       End       |
       +-----------------+`}
        </pre>
        <CodeBlock language="java" code={`int score = 85;
if (score >= 90) {
  System.out.println("Excellent!");
} else if (score >= 75) {
  System.out.println("Very good.");
} else {
  System.out.println("Good, but keep practicing.");
}`} />
      </>
    )
  },
  {
    id: 'java-switch', title: 'switch', parent: '2. Control Flow', content: (
      <>
        <p>The `switch` statement selects one of many code blocks to be executed. It provides a cleaner alternative to a long `if-else if-else` chain for certain scenarios.</p>
        <CodeBlock language="java" code={`int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  // ... cases for 4, 5
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
  default:
    System.out.println("Invalid day");
    break; // The 'break' keyword is essential to prevent "fall-through"
}`} />
      </>
    )
  },
  {
    id: 'java-loops', title: 'loops (for, while, do-while)', parent: '2. Control Flow', content: (
      <>
        <p>Loops can execute a block of code as long as a specified condition is reached.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">For Loop</h3>
        <p className="mb-4">Best used when you know exactly how many times you want to loop through a block of code.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">While Loop</h3>
        <p className="mb-4">Loops through a block of code as long as a specified condition is true.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Do-While Loop</h3>
        <p className="mb-4">Similar to a `while` loop, but the code block is executed at least once before the condition is tested.</p>
        <CodeBlock language="java" code={`// For Loop
for (int i = 0; i < 5; i++) {
  System.out.println("For loop iteration: " + i);
}

// While Loop
int i = 0;
while (i < 5) {
  System.out.println("While loop iteration: " + i);
  i++;
}

// Do-While Loop
int j = 0;
do {
  System.out.println("Do-while iteration: " + j);
  j++;
} while (j < 5);`} />
      </>
    )
  },
  {
    id: 'java-break-continue', title: 'break / continue', parent: '2. Control Flow', content: (
      <>
        <p>The `break` statement is used to jump out of a loop or a `switch` statement. The `continue` statement breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration.</p>
        <CodeBlock language="java" code={`// Using break
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break; // Exits the loop when i is 4
  }
  System.out.println(i); // Prints 0, 1, 2, 3
}

// Using continue
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue; // Skips the iteration when i is 4
  }
  System.out.println(i); // Prints 0, 1, 2, 3, 5, 6, 7, 8, 9
}`} />
      </>
    )
  },
  {
    id: 'java-nested-loops', title: 'nested loops', parent: '2. Control Flow', content: (
      <>
        <p>It is possible to place a loop inside another loop. This is called a nested loop. The "inner loop" will be executed one time for each iteration of the "outer loop". This is commonly used for working with 2D arrays or printing patterns.</p>
        <CodeBlock language="java" code={`// Printing a simple 3x3 grid
for (int i = 1; i <= 3; i++) {      // Outer loop (for rows)
  for (int j = 1; j <= 3; j++) {  // Inner loop (for columns)
    System.out.print("(" + i + "," + j + ") ");
  }
  System.out.println(); // New line after each row
}`} />
      </>
    )
  },

  // 3. Arrays
  {
    id: 'java-1d-arrays', title: '1D Arrays', parent: '3. Arrays', content: (
      <>
        <p>Arrays are used to store multiple values of the same type in a single variable. They have a fixed size which must be specified at the time of creation.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Memory diagram for an array
// String[] cars = {"Volvo", "BMW", "Ford"};

// Stack                Heap
// +------+             +--------------------------+
// | cars | --ref------> | "Volvo" | "BMW" | "Ford" |
// +------+             +--------------------------+
//                        Index 0   Index 1  Index 2`}
        </pre>
        <CodeBlock language="java" code={`// Declare and initialize an array
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

System.out.println(cars[0]); // Access element at index 0
cars[0] = "Opel"; // Change an element
System.out.println(cars.length); // Find the size

// Loop through an array
for (int i = 0; i < cars.length; i++) {
  System.out.println(cars[i]);
}`} />
      </>
    )
  },
  {
    id: 'java-2d-arrays', title: '2D Arrays', parent: '3. Arrays', content: (
      <>
        <p>A 2D array is an array of arrays. It can be used to represent a grid or matrix of values. You can think of it as a table with rows and columns.</p>
        <CodeBlock language="java" code={`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
int x = myNumbers[1][2]; // Access the element at row 1, column 2
System.out.println(x); // Outputs 7

// Loop through a 2D array
for (int i = 0; i < myNumbers.length; ++i) {
  for(int j = 0; j < myNumbers[i].length; ++j) {
    System.out.println(myNumbers[i][j]);
  }
}`} />
      </>
    )
  },
  {
    id: 'java-array-methods', title: 'Array Methods', parent: '3. Arrays', content: (
      <>
        <p>The `java.util.Arrays` class is a utility class that provides various static methods for working with arrays, such as sorting, searching, and filling.</p>
        <CodeBlock language="java" code={`import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 9};

// Sort the array
Arrays.sort(numbers);

// Print the array
System.out.println(Arrays.toString(numbers)); // [1, 2, 5, 8, 9]

// Search for an element (array must be sorted first)
int index = Arrays.binarySearch(numbers, 8);
System.out.println("Element 8 is at index: " + index);`} />
      </>
    )
  },
  {
    id: 'java-sorting', title: 'Sorting', parent: '3. Arrays', content: (
      <>
        <p>Sorting an array means arranging its elements in a specific order (ascending or descending). The `Arrays.sort()` method is the easiest way to sort an array of primitives or objects that implement the `Comparable` interface.</p>
        <CodeBlock language="java" code={`import java.util.Arrays;
import java.util.Collections;

Integer[] myNumbers = {5, 2, 8, 1, 9};

// Sort in ascending order
Arrays.sort(myNumbers);
System.out.println("Ascending: " + Arrays.toString(myNumbers));

// Sort in descending order
Arrays.sort(myNumbers, Collections.reverseOrder());
System.out.println("Descending: " + Arrays.toString(myNumbers));`} />
      </>
    )
  },
  {
    id: 'java-searching', title: 'Searching', parent: '3. Arrays', content: (
      <>
        <p>Searching is the process of finding a specific element within an array. A linear search checks every element, while a binary search is much faster but requires the array to be sorted first.</p>
        <CodeBlock language="java" code={`import java.util.Arrays;

int[] sortedNumbers = {1, 2, 5, 8, 9};

// Binary Search (efficient, requires sorted array)
int key = 5;
int result = Arrays.binarySearch(sortedNumbers, key);

if (result < 0) {
    System.out.println("Element not found!");
} else {
    System.out.println("Element found at index: " + result);
}`} />
      </>
    )
  },

  // 4. Strings
  {
    id: 'java-string-class', title: 'String class', parent: '4. Strings', content: (
      <p>In Java, a `String` is an object that represents a sequence of characters. Strings are immutable, meaning that once a String object is created, it cannot be changed. Any operation that seems to modify a string actually creates a new one.</p>
    )
  },
  {
    id: 'java-stringbuilder', title: 'StringBuilder', parent: '4. Strings', content: (
      <p>Because `String` is immutable, performing many modifications can be inefficient. `StringBuilder` provides a mutable sequence of characters. It is the recommended choice for single-threaded applications where you need to build or modify strings frequently.</p>
    )
  },
  {
    id: 'java-stringbuffer', title: 'StringBuffer', parent: '4. Strings', content: (
      <p>`StringBuffer` is similar to `StringBuilder` but its methods are synchronized, making it thread-safe. This means it's suitable for multi-threaded environments, but it comes with a performance overhead compared to `StringBuilder`.</p>
    )
  },
  {
    id: 'java-string-methods', title: 'String Methods', parent: '4. Strings', content: (
      <>
        <p>The String class has many useful built-in methods for manipulation and inspection.</p>
        <CodeBlock language="java" code={`String greeting = "  Hello CodeAlpha!  ";

System.out.println("Length: " + greeting.length());
System.out.println("Uppercase: " + greeting.toUpperCase());
System.out.println("Trimmed: " + greeting.trim()); // Removes whitespace from both ends
System.out.println("Starts with Hello: " + greeting.trim().startsWith("Hello"));
System.out.println("Substring: " + greeting.substring(8, 17)); // "CodeAlpha"
`} />
      </>
    )
  },
  {
    id: 'java-immutable-mutable', title: 'Immutable vs Mutable', parent: '4. Strings', content: (
      <>
        <p>A key concept is that `String` objects are immutable. This means once a String object is created, it cannot be changed. Any modification creates a new String object. `StringBuilder` and `StringBuffer` are mutable.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`String s = "Hello";
s = s.concat(" World");

// Memory Diagram:
//
// Heap:
// +----------------+
// | "Hello"        | <-- s initially points here
// +----------------+
//
// +----------------+
// | " World"       |
// +----------------+
//
// +----------------+
// | "Hello World"  | <-- A NEW object is created.
// +----------------+       s now points here.

// The original "Hello" object is now eligible for garbage collection.`}
        </pre>
      </>
    )
  },

  // 5. Functions / Methods
  {
    id: 'java-method-declaration', title: 'Method Declaration', parent: '5. Functions / Methods', content: (
      <>
        <p>A method is a block of code that performs a specific task. It runs only when it is called. Defining methods allows you to reuse code without retyping it.</p>
        <CodeBlock language="java" code={`// A method is a block of code that runs when it's called.
// Signature: <access_modifier> <static?> <return_type> <methodName>(<parameters>)
public class MyClass {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod(); // Calling the method
  }
}`} />
      </>
    )
  },
  {
    id: 'java-parameters', title: 'Parameters / Arguments', parent: '5. Functions / Methods', content: (
      <>
        <p>Information can be passed to methods as parameters. Parameters act as variables inside the method. When a method is called, you pass along values called arguments.</p>
        <CodeBlock language="java" code={`static void greet(String name) { // 'name' is a parameter
  System.out.println("Hello, " + name);
}

public static void main(String[] args) {
  greet("CodeAlpha"); // "CodeAlpha" is an argument
}`} />
      </>
    )
  },
  {
    id: 'java-method-overloading', title: 'Method Overloading', parent: '5. Functions / Methods', content: (
      <>
        <p>With method overloading, multiple methods can have the same name as long as they have different parameters (different number, different type, or different order of parameters). This improves code readability.</p>
        <CodeBlock language="java" code={`static int plusMethod(int x, int y) {
  return x + y;
}

static double plusMethod(double x, double y) {
  return x + y;
}

public static void main(String[] args) {
  int myNum1 = plusMethod(8, 5);
  double myNum2 = plusMethod(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}`} />
      </>
    )
  },
  {
    id: 'java-return-types', title: 'Return Types', parent: '5. Functions / Methods', content: (
      <p>The `void` keyword, as used in the examples above, indicates that the method should not return a value. If you want the method to return a value, you can use a primitive data type (like `int`) or a reference type (like `String`) instead of `void`, and use the `return` keyword inside the method.</p>
    )
  },
  {
    id: 'java-static-methods', title: 'Static vs Non-Static Methods', parent: '5. Functions / Methods', content: (
      <p>A `static` method belongs to the class itself rather than an instance (object) of the class. It can be called without creating an object of the class. A non-static (instance) method can only be called on an object of the class.</p>
    )
  },
  {
    id: 'java-recursion', title: 'Recursion', parent: '5. Functions / Methods', content: (
      <>
        <p>Recursion is the technique of making a function call itself. This technique provides a way to break down complex problems into simple problems which are easier to solve. A classic example is calculating a factorial.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Recursion Call Stack for factorial(3)
//
// 1. main() calls factorial(3)
// 2. factorial(3) calls factorial(2)  [Returns 3 * result of factorial(2)]
// 3. factorial(2) calls factorial(1)  [Returns 2 * result of factorial(1)]
// 4. factorial(1) is the base case, returns 1
// 5. factorial(2) receives 1, returns 2 * 1 = 2
// 6. factorial(3) receives 2, returns 3 * 2 = 6
//
// | factorial(1) | -> returns 1
// | factorial(2) |
// | factorial(3) |
// | main()       |
// +--------------+
//      STACK`}
        </pre>
        <CodeBlock language="java" code={`public static int factorial(int n) {
  // Base case: to stop the recursion
  if (n == 1) {
    return 1;
  } else {
    // Recursive step: call itself with a smaller input
    return n * factorial(n - 1);
  }
}`} />
      </>
    )
  },

  // 6. Object-Oriented Programming (OOP)
  {
    id: 'java-classes-objects', title: 'Classes & Objects', parent: '6. OOP', content: (
      <>
        <p className="mb-4">Java is an object-oriented language. A <strong>class</strong> is a blueprint or template for creating objects. An <strong>object</strong> is a real-world entity that is an instance of a class, with its own state (attributes) and behavior (methods).</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Blueprint (Class) vs. Instance (Object)

+---------------------+     Creates     +--------------------+
|  class Car {        |   ---------->   |  myCar (Object)    |
|   - String color;   |                 |   - color = "Red"  |
|   - void drive();   |                 +--------------------+
|  }                  |                 +--------------------+
+---------------------+   ---------->   |  yourCar (Object)  |
                                        |   - color = "Blue" |
                                        +--------------------+`}
        </pre>
        <CodeBlock language="java" code={`// Define the Car class (blueprint) in Car.java
public class Car {
    String color = "red";
    
    public void drive() {
        System.out.println("The car is driving.");
    }
}

// In your main method (e.g., in Main.java)
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Create an object (instance) of Car
        System.out.println(myCar.color); // Access the object's attribute
        myCar.drive(); // Call the object's method
    }
}`} />
      </>
    )
  },
  {
    id: 'java-constructors', title: 'Constructors', parent: '6. OOP', content: (
      <>
        <p>A constructor is a special method that is automatically called when an object of a class is created. It is used to initialize the object's attributes. A constructor has the same name as the class and does not have a return type.</p>
        <CodeBlock language="java" code={`public class Student {
  String name;
  int age;

  // Constructor with parameters
  public Student(String studentName, int studentAge) {
    name = studentName;
    age = studentAge;
  }

  public static void main(String[] args) {
    Student myStudent = new Student("Alice", 20); // The constructor is called here
    System.out.println(myStudent.name + " is " + myStudent.age + " years old.");
  }
}`} />
      </>
    )
  },
  {
    id: 'java-inheritance', title: 'Inheritance', parent: '6. OOP', content: (
      <>
        <p>Inheritance is a fundamental OOP principle where one class (the subclass or child class) can inherit attributes and methods from another class (the superclass or parent class). This is achieved using the `extends` keyword and promotes code reusability.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`  +--------------+
  | Animal       | (Parent/Superclass)
  +--------------+
  | - String name|
  | - eat()      |
  +--------------+
         ^
         | (extends)
  +--------------+
  | Dog          | (Child/Subclass)
  +--------------+
  | - bark()     |
  +--------------+`}
        </pre>
        <CodeBlock language="java" code={`class Animal { // Parent class
  public void eat() {
    System.out.println("This animal eats food.");
  }
}

class Dog extends Animal { // Child class
  public void bark() {
    System.out.println("The dog barks.");
  }
}

// In main:
Dog myDog = new Dog();
myDog.eat(); // Method inherited from Animal
myDog.bark(); // Method from Dog class`} />
      </>
    )
  },
  {
    id: 'java-polymorphism', title: 'Polymorphism', parent: '6. OOP', content: (
      <>
        <p>Polymorphism means "many forms". In OOP, it's the ability of an object to take on many forms. The most common use of polymorphism in Java is when a parent class reference is used to refer to a child class object. This allows for method overriding, where a child class can provide a specific implementation of a method that is already provided by its parent class.</p>
        <CodeBlock language="java" code={`class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() { // Method overriding
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() { // Method overriding
    System.out.println("The dog says: bow wow");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Animal();
    Animal myPig = new Pig(); // A Pig is an Animal
    Animal myDog = new Dog(); // A Dog is an Animal
    
    myAnimal.animalSound();
    myPig.animalSound(); // Calls the Pig's method
    myDog.animalSound(); // Calls the Dog's method
  }
}`} />
      </>
    )
  },
  {
    id: 'java-encapsulation', title: 'Encapsulation', parent: '6. OOP', content: (
      <>
        <p>Encapsulation is the bundling of data (attributes) and methods that work on that data within one unit (a class). It's used to hide sensitive data from users. This is achieved by declaring class variables as `private` and providing public `get` and `set` methods to access and update their values.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`+--------------------------+
|  Employee (Object)       |
|                          |
|  +--------------------+  |
|  | private salary;    |  |  <-- Data is hidden
|  +--------------------+  |
|                          |
|  +--------------------+  |
|  | public getSalary() |  |  <-- Public methods provide access
|  +--------------------+  |
+--------------------------+`}
        </pre>
        <CodeBlock language="java" code={`public class Person {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName; // 'this' is used to refer to the current object
  }
}`} />
      </>
    )
  },
  {
    id: 'java-abstraction', title: 'Abstraction', parent: '6. OOP', content: (
      <p>Data abstraction is the process of hiding certain details and showing only essential information to the user. Abstraction can be achieved with either `abstract` classes or `interfaces`.</p>
    )
  },
  {
    id: 'java-access-modifiers', title: 'Access Modifiers', parent: '6. OOP', content: (
      <>
        <p>Access modifiers are keywords used to set the accessibility (visibility) of classes, interfaces, variables, methods, and constructors.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>public:</strong> The code is accessible for all classes.</li>
          <li><strong>private:</strong> The code is only accessible within the declared class.</li>
          <li><strong>protected:</strong> The code is accessible in the same package and subclasses.</li>
          <li><strong>default (no modifier):</strong> The code is only accessible in the same package.</li>
        </ul>
      </>
    )
  },
  {
    id: 'java-this-super', title: 'this & super', parent: '6. OOP', content: (
      <p>The `this` keyword refers to the current object in a method or constructor. The `super` keyword refers to superclass (parent) objects. It is used to call superclass methods and to access the superclass constructor.</p>
    )
  },
  {
    id: 'java-packages', title: 'Packages', parent: '6. OOP', content: (
      <p>A package in Java is used to group related classes. Think of it as a folder in a file directory. We use packages to avoid name conflicts and to write a better-organized code. Packages are divided into two categories: built-in packages (from the Java API) and user-defined packages.</p>
    )
  },
  {
    id: 'java-interfaces', title: 'Interfaces', parent: '6. OOP', content: (
      <p>An interface is a completely "abstract class" that is used to group related methods with empty bodies. A class can `implement` an interface, inheriting its abstract methods and providing the implementation for them. A class can implement multiple interfaces, which allows for a form of multiple inheritance.</p>
    )
  },
  {
    id: 'java-abstract-classes', title: 'Abstract Classes', parent: '6. OOP', content: (
      <p>An abstract class is a restricted class that cannot be used to create objects (to instantiate it, you must inherit from it). An abstract method can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (`extends`). A class can only extend one abstract class.</p>
    )
  },
];