import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVASCRIPT_PART1_TOPICS: Topic[] = [
  // 1. Basics / Fundamentals
  {
    id: 'js-intro',
    title: 'Introduction to JS',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          JavaScript (JS) is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of modern web applications.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 mb-1">The Trinity of Web Development</h4>
          <p className="text-blue-800 text-sm">
            Websites are built on three core technologies working together:
          </p>
          <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
            {`+-----------------+     +-----------------+     +---------------------+
| HTML            | <-> | CSS             | <-> | JavaScript          |
| (The Skeleton)  |     | (The Style)     |     | (The Brain/Logic)   |
+-----------------+     +-----------------+     +---------------------+`}
          </pre>
        </div>
        <p className="mb-4">
          Originally a client-side language running in the browser, JavaScript's capabilities have expanded significantly. With environments like <strong>Node.js</strong>, it can now run on servers, enabling full-stack development.
        </p>
        <CodeBlock
          language="javascript"
          code={`// A simple "Hello World" in JavaScript
// This line finds an element in the HTML and changes its content.
document.getElementById("greeting").textContent = "Hello from CodeAlpha!";

// This will print a message in the browser's developer console.
console.log("Setup complete!");`}
        />
      </>
    )
  },
  {
    id: 'js-variables',
    title: 'Variables (var, let, const)',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="mb-4">Variables are containers for storing data values. In modern JavaScript (ES6 and later), we have three ways to declare variables: `var`, `let`, and `const`.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">Scope: The Accessibility of Variables</h3>
        <p className="mb-4">Scope determines where variables can be accessed. Understanding scope is crucial for writing bug-free code.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Global Scope:</strong> Variables declared outside any function are accessible from anywhere.</li>
          <li><strong>Function Scope:</strong> Variables are accessible only within the function they are declared in.</li>
          <li><strong>Block Scope:</strong> Variables are accessible only within the block (code between `{}`) they are declared in.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">`var` (The Old Way - Function-Scoped)</h3>
        <p className="mb-2">The original way to declare variables. `var` declarations are function-scoped. They are also <em>hoisted</em>, meaning their declarations are moved to the top of their function scope, which can lead to unexpected behavior. It is generally not recommended in modern JS.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Hoisting Diagram for 'var'

// Your Code:
console.log(myVar); // Outputs: undefined
var myVar = "CodeAlpha";

// How JavaScript engine interprets it:
var myVar; // 1. Declaration is 'hoisted' to the top
console.log(myVar); // 2. Logs the value, which is 'undefined'
myVar = "CodeAlpha"; // 3. Assignment happens here`}
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-2">`let` (The Modern Way - Block-Scoped)</h3>
        <p className="mb-2">Introduced in ES6 (2015), `let` provides <strong>block scope</strong>. This means the variable is confined to the block (e.g., inside an `if` statement or `for` loop) it's defined in. It's the modern, preferred way for variables that will be reassigned.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">`const` (For Constants - Block-Scoped)</h3>
        <p className="mb-2">Also introduced in ES6, `const` is for declaring constants. It is also <strong>block-scoped</strong>. Once a value is assigned to a `const` variable, it cannot be reassigned.</p>

        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Block Scope Diagram for 'let' and 'const'

function scopeTest() {
  // --- Function Scope starts ---
  if (true) {
    // --- Block Scope starts ---
    var functionScoped = "I leak out!";
    let blockScoped = "I'm trapped here!";
    const alsoBlockScoped = "Me too!";
    // --- Block Scope ends ---
  }
  
  console.log(functionScoped);  // "I leak out!"
  // console.log(blockScoped);  // ReferenceError: blockScoped is not defined
  // --- Function Scope ends ---
}`}
        </pre>

        <CodeBlock
          language="javascript"
          code={`// 'let': can be reassigned
let age = 25;
age = 26; // This is fine

// 'const': cannot be reassigned
const birthYear = 1998;
// birthYear = 1999; // This would throw a TypeError!

// Note for 'const' with objects/arrays:
// The variable itself can't be reassigned, but its contents can be changed.
const person = { name: "Alex" };
person.name = "John"; // This is allowed.
// person = { name: "Bob" }; // This is NOT allowed.`}
        />
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 mb-1">Best Practice</h4>
          <p className="text-yellow-800 text-sm">Always use `const` by default. If you know a variable needs to be reassigned, use `let`. Avoid using `var` in modern codebases to prevent scope and hoisting issues.</p>
        </div>
      </>
    )
  },
  {
    id: 'js-data-types',
    title: 'Data Types',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="mb-4">JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. JavaScript has several primitive data types and one complex type (Object).</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Primitive Types (Stored by Value)</h3>
        <p className="mb-4">These are the fundamental data types. When you assign a primitive type to another variable, the value is copied.</p>
        <ul className="list-disc pl-5 space-y-3 mb-6">
          <li><strong>String:</strong> A sequence of characters. E.g., `"Hello"`.</li>
          <li><strong>Number:</strong> Both integer and floating-point numbers. E.g., `42`, `3.14`.</li>
          <li><strong>Boolean:</strong> Represents `true` or `false`.</li>
          <li><strong>Undefined:</strong> A variable that has been declared but not assigned a value. The default value.</li>
          <li><strong>Null:</strong> Represents the intentional absence of any object value. It is a primitive value, but `typeof null` returns `"object"` due to a historical bug.</li>
          <li><strong>Symbol:</strong> A unique and immutable primitive value, often used as an identifier for object properties.</li>
          <li><strong>BigInt:</strong> For integers of arbitrary length, larger than the `Number` type can handle.</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-2">Complex Type (Stored by Reference)</h3>
        <p className="mb-4">When you assign an object to another variable, you are copying the reference (the address in memory), not the object itself. Both variables point to the same object.</p>
        <ul className="list-disc pl-5 space-y-3 mb-6">
          <li><strong>Object:</strong> A collection of key-value pairs. Arrays, Functions, and more are also types of objects in JavaScript.</li>
        </ul>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Value vs. Reference Diagram

// Primitives (Pass by Value)
let a = 10;
let b = a;     // 'b' gets a COPY of the value 10
b = 20;        // 'b' is changed, but 'a' remains 10
console.log(a); // 10

// Objects (Pass by Reference)
let obj1 = { name: "CodeAlpha" };
let obj2 = obj1;   // 'obj2' points to the SAME object in memory as 'obj1'
obj2.name = "Internship";
console.log(obj1.name); // "Internship" - changing obj2 also changed obj1!`}
        </pre>
        <CodeBlock language="javascript" code={`let aString = "CodeAlpha"; // String
let aNumber = 101;         // Number
let isLearning = true;     // Boolean
let notAssigned;           // Undefined
let emptyValue = null;     // Null
const uniqueId = Symbol('id'); // Symbol

// Using the 'typeof' operator to check types
console.log(typeof aString);     // "string"
console.log(typeof aNumber);     // "number"
console.log(typeof isLearning);  // "boolean"
console.log(typeof notAssigned); // "undefined"
console.log(typeof emptyValue);  // "object" (This is a famous JS bug!)`} />
      </>
    )
  },
  {
    id: 'js-operators',
    title: 'Operators',
    parent: '1. Basics / Fundamentals',
    content: (
      <>
        <p className="mb-4">
          Operators are symbols used to perform operations on operands (values and variables).
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Common Operators</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulus), <code>**</code> (exponent)</li>
          <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code></li>
          <li><strong>Comparison:</strong> <code>==</code> (loose equality), <code>===</code> (strict equality), <code>!=</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code></li>
          <li><strong>Logical:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
          <li><strong>Ternary:</strong> <code>condition ? valueIfTrue : valueIfFalse</code></li>
        </ul>
        <h3 className="text-2xl font-bold mt-8 mb-4">Strict vs. Loose Equality (`===` vs `==`)</h3>
        <p className="mb-4">This is a critical concept in JavaScript. Always prefer strict equality (`===`).</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>`==` (Loose Equality): Compares two values for equality <strong>after</strong> converting both values to a common type (type coercion). This can have unpredictable results.</li>
          <li>`===` (Strict Equality): Compares two values for equality <strong>without</strong> type coercion. Both value and type must be the same for it to be true.</li>
        </ul>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// Diagram: == (Loose) vs === (Strict)

// Expression      | Type Coercion? | Result (==) | Result (===)
//-----------------|----------------|-------------|--------------
// 5 == "5"        | Yes ("5"->5)   | true        | false
// 0 == false      | Yes (false->0) | true        | false
// null == undefined | Yes (special)  | true        | false
// [] == false     | Yes            | true        | false`}
        </pre>
        <CodeBlock language="javascript" code={`console.log(5 == "5");   // true (bad!)
console.log(5 === "5");  // false (good!)

console.log(0 == false);   // true (bad!)
console.log(0 === false);  // false (good!)`}
        />
      </>
    )
  },
  // 2. Control Flow
  {
    id: 'js-control-flow-if',
    title: 'if / else / else if',
    parent: '2. Control Flow',
    content: (
      <>
        <p className="mb-4">Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.</p>
        <CodeBlock language="javascript" code={`const hour = new Date().getHours();

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}`} />
      </>
    )
  },
  {
    id: 'js-control-flow-switch',
    title: 'switch',
    parent: '2. Control Flow',
    content: (
      <>
        <p className="mb-4">The `switch` statement is used to perform different actions based on different conditions, providing a cleaner alternative to a long `if/else if` chain.</p>
        <CodeBlock language="javascript" code={`const grade = 'B';

switch (grade) {
  case 'A':
    console.log("Excellent!");
    break;
  case 'B':
    console.log("Very Good!");
    break;
  case 'C':
    console.log("Good, can improve.");
    break;
  default:
    console.log("Grade not recognized.");
}`} />
      </>
    )
  },
  {
    id: 'js-control-flow-loops',
    title: 'Loops (for, while)',
    parent: '2. Control Flow',
    content: (
      <>
        <h3 className="text-xl font-bold mb-2">`for` loop</h3>
        <p className="mb-4">The `for` loop repeats a block of code a known number of times.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">`while` loop</h3>
        <p className="mb-4">The `while` loop repeats a block of code as long as a specified condition is true.</p>
        <CodeBlock language="javascript" code={`// for loop: prints numbers 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(\`The number is \${i}\`);
}

// while loop: prints numbers 0 to 4
let i = 0;
while (i < 5) {
  console.log(\`The number is \${i}\`);
  i++;
}`} />
      </>
    )
  },
  // 3. Functions
  {
    id: 'js-functions-def',
    title: 'Function Definition',
    parent: '3. Functions',
    content: (
      <>
        <p className="mb-4">A function is a reusable block of code that performs a specific task. Functions are defined with the `function` keyword.</p>
        <CodeBlock language="javascript" code={`// Defining a function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Calling the function
const message = greet("CodeAlpha");
console.log(message);`} />
      </>
    )
  },
  {
    id: 'js-functions-arrow',
    title: 'Arrow Functions',
    parent: '3. Functions',
    content: (
      <>
        <p className="mb-4">Arrow functions (introduced in ES6) provide a more concise syntax for writing functions. They are anonymous and are often used for inline functions and callbacks.</p>
        <CodeBlock language="javascript" code={`// Regular function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function (concise body)
const subtract = (a, b) => a - b;

// Arrow function (block body)
const multiply = (a, b) => {
  console.log(\`Multiplying \${a} and \${b}\`);
  return a * b;
};

console.log(subtract(10, 5)); // 5`} />
      </>
    )
  },
  // 4. Arrays
  {
    id: 'js-arrays-intro',
    title: 'Introduction to Arrays',
    parent: '4. Arrays',
    content: (
      <>
        <p className="mb-4">An array is a special variable that can hold more than one value at a time. JavaScript arrays are zero-indexed and can store elements of different data types.</p>
        <CodeBlock language="javascript" code={`// Creating an array
const courses = ["Web Dev", "Data Science", "Python"];

// Accessing elements by index
console.log(courses[0]); // "Web Dev"

// Finding the length
console.log(courses.length); // 3`} />
      </>
    )
  },
  {
    id: 'js-arrays-methods',
    title: 'Common Array Methods',
    parent: '4. Arrays',
    content: (
      <>
        <p className="mb-4">Arrays come with many built-in methods to make working with them easier.</p>
        <CodeBlock language="javascript" code={`const numbers = [1, 2, 3];

// Add to the end
numbers.push(4); // [1, 2, 3, 4]

// Remove from the end
numbers.pop(); // [1, 2, 3]

// Iterate over the array
numbers.forEach(num => {
  console.log(num * 2);
});

// Create a new array by transforming elements
const squares = numbers.map(num => num * num); // [1, 4, 9]

// Create a new array with filtered elements
const evens = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0); // [2, 4, 6]`} />
      </>
    )
  },
  // 5. Strings
  {
    id: 'js-strings-intro',
    title: 'String Methods',
    parent: '5. Strings',
    content: (
      <>
        <p className="mb-4">Strings are used for storing and manipulating text. They are immutable, meaning their value cannot be changed after creation.</p>
        <CodeBlock language="javascript" code={`let text = "CodeAlpha Internship";

// Length of a string
console.log(text.length); // 20

// Changing case
console.log(text.toUpperCase()); // "CODEALPHA INTERNSHIP"
console.log(text.toLowerCase()); // "codealpha internship"

// Finding a substring
console.log(text.indexOf("Alpha")); // 4

// Slicing
console.log(text.slice(0, 4)); // "Code"`} />
      </>
    )
  },
  {
    id: 'js-strings-template-literals',
    title: 'Template Literals',
    parent: '5. Strings',
    content: (
      <>
        <p className="mb-4">Template literals (or template strings) are enclosed by backticks (`` ` ``) instead of single or double quotes. They allow for embedded expressions and multi-line strings.</p>
        <CodeBlock language="javascript" code={`const name = "CodeAlpha";
const courseCount = 10;

// Old way of concatenating strings
const messageOld = "Welcome to " + name + "! We have " + courseCount + " courses.";

// New way with template literals
const messageNew = \`Welcome to \${name}! We have \${courseCount} courses.\`;

console.log(messageNew);`} />
      </>
    )
  },
];
