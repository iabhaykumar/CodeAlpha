
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVASCRIPT_PART3_TOPICS: Topic[] = [
    // 11. Error Handling
    {
        id: 'js-error-try-catch',
        title: 'try / catch / finally',
        parent: '11. Error Handling',
        content: (
            <>
                <p className="mb-4">Error handling is crucial for writing robust applications. The `try...catch...finally` statement allows you to test a block of code for errors (`try`), handle the error if one occurs (`catch`), and execute code regardless of the outcome (`finally`).</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Execution Flow Diagram
//
//   Start -> [ try block ] --(Error Occurs)--> [ catch block ]
//      |                                            |
//      | (No Error)                                 |
//      +---------------------+----------------------+
//                            |
//                            v
//                      [ finally block ] (Always runs)
//                            |
//                            v
//                           End`}
                </pre>
                <CodeBlock language="javascript" code={`try {
  console.log("Starting the try block...");
  // Let's cause an error on purpose
  let user = undefined;
  console.log(user.name); // This will throw a TypeError
  console.log("This line will not run.");
} catch (error) {
  // The 'error' object contains details about what went wrong.
  console.error("An error was caught!");
  console.error("Error name:", error.name);     // "TypeError"
  console.error("Error message:", error.message); // "Cannot read properties of undefined..."
} finally {
  console.log("The finally block runs no matter what.");
}

console.log("Program continues after the try...catch block.");`} />
            </>
        )
    },
    {
        id: 'js-error-throw',
        title: 'Throw Statement',
        parent: '11. Error Handling',
        content: (
            <>
                <p className="mb-4">The `throw` statement allows you to create a custom error. You can throw a string, number, boolean, or (most commonly) an `Error` object.</p>
                <CodeBlock language="javascript" code={`function checkAge(age) {
  if (age < 18) {
    throw new Error("Access denied - You must be at least 18 years old.");
  }
  return "Access granted.";
}

try {
  console.log(checkAge(15));
} catch(error) {
  console.error(error.message);
}`} />
            </>
        )
    },
    {
        id: 'js-error-custom',
        title: 'Custom Errors',
        parent: '11. Error Handling',
        content: (
            <>
                <p className="mb-4">It's best practice to create your own error classes that inherit from the built-in `Error` class. This makes your error handling more specific and descriptive.</p>
                <CodeBlock language="javascript" code={`// Creating a custom Error class
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent constructor
    this.name = "ValidationError";
  }
}

function validateUsername(username) {
  if (username.length < 3) {
    // Throw our custom error
    throw new ValidationError("Username must be at least 3 characters long.");
  }
  return true;
}

try {
  validateUsername("Al");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error.name + ": " + error.message);
  } else {
    console.error("An unexpected error occurred:", error);
  }
}`} />
            </>
        )
    },
    {
        id: 'js-error-types',
        title: 'Common Error Types',
        parent: '11. Error Handling',
        content: (
            <>
                <p className="mb-4">JavaScript has several built-in error types that are thrown in different situations.</p>
                <ul className="list-disc pl-5 space-y-3 mb-4">
                    <li><strong>`SyntaxError`</strong>: Thrown when the JavaScript engine encounters code that violates the language's syntax rules. This error cannot be caught with `try...catch` because it occurs during parsing, before the code is executed.</li>
                    <li><strong>`ReferenceError`</strong>: Thrown when you try to use a variable that has not been declared.</li>
                    <li><strong>`TypeError`</strong>: Thrown when an operation is performed on a value of an inappropriate type, such as calling a non-function or accessing properties on `null` or `undefined`.</li>
                </ul>
                <CodeBlock language="javascript" code={`// ReferenceError
try {
  console.log(nonExistentVariable);
} catch (e) {
  console.error(e.name); // "ReferenceError"
}

// TypeError
try {
  const user = null;
  console.log(user.name);
} catch (e) {
  console.error(e.name); // "TypeError"
}

// SyntaxError (This code block itself will prevent the script from running)
// let x =;`} />
            </>
        )
    },
    // 12. OOP in JavaScript
    {
        id: 'js-oop-classes',
        title: 'Classes & Constructors',
        parent: '12. OOP in JavaScript',
        content: (
            <>
                <p className="mb-4">ES6 introduced `class` syntax, which is syntactic sugar over JavaScript's existing prototype-based inheritance. A `class` is a blueprint for creating objects. The `constructor` method is a special method for creating and initializing an object created with a class.</p>
                <CodeBlock language="javascript" code={`class Course {
  // The constructor is called when a new object is created
  constructor(title, duration) {
    // 'this' refers to the instance of the object being created
    this.title = title;
    this.duration = duration;
    this.isEnrolled = false;
  }

  // Method
  enroll() {
    this.isEnrolled = true;
    console.log(\`Enrolled in \${this.title}!\`);
  }
}

// Create an instance (an object) of the Course class
const jsCourse = new Course("JavaScript Masterclass", 8);
jsCourse.enroll(); // "Enrolled in JavaScript Masterclass!"
console.log(jsCourse.title); // "JavaScript Masterclass"`} />
            </>
        )
    },
    {
        id: 'js-oop-inheritance',
        title: 'Inheritance',
        parent: '12. OOP in JavaScript',
        content: (
            <>
                <p className="mb-4">Inheritance allows a class (child) to inherit properties and methods from another class (parent). The `extends` keyword is used to create a subclass, and the `super` keyword is used to call the parent class's constructor.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Inheritance Chain Diagram

+----------------------+
| Vehicle (Parent)     |
| - speed              |
| - move()             |
+----------------------+
          ^
          | (extends)
+----------------------+
| Car (Child)          |
| - wheels = 4         |
| - honk()             |
+----------------------+`}
                </pre>
                <CodeBlock language="javascript" code={`class Vehicle { // Parent class
  constructor(speed) {
    this.speed = speed;
  }
  move() {
    console.log(\`Moving at \${this.speed} mph.\`);
  }
}

class Car extends Vehicle { // Child class
  constructor(speed, brand) {
    // 'super' calls the parent's constructor
    super(speed); 
    this.brand = brand;
  }
  honk() {
    console.log("Beep beep!");
  }
}

const myCar = new Car(100, "Tesla");
myCar.move(); // "Moving at 100 mph." (Inherited method)
myCar.honk(); // "Beep beep!"`} />
            </>
        )
    },
    {
        id: 'js-oop-polymorphism',
        title: 'Polymorphism',
        parent: '12. OOP in JavaScript',
        content: (
            <p>Polymorphism means "many forms". It allows objects of different classes to be treated as objects of a common superclass. The most common use is method overriding, where a child class provides its own implementation of a method that it inherited from a parent class.</p>
        )
    },
    {
        id: 'js-oop-encapsulation',
        title: 'Encapsulation',
        parent: '12. OOP in JavaScript',
        content: (
            <>
                <p className="mb-4">Encapsulation is the bundling of data with the methods that operate on that data. Modern JavaScript allows for truly private class fields using a hash `#` prefix. These private fields cannot be accessed from outside the class.</p>
                <CodeBlock language="javascript" code={`class BankAccount {
  // '#' makes this a private field
  #balance = 0;

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  // A "getter" method to provide controlled read-only access
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150

// console.log(myAccount.#balance); // This would throw a SyntaxError!`} />
            </>
        )
    },
    {
        id: 'js-oop-abstraction',
        title: 'Abstraction',
        parent: '12. OOP in JavaScript',
        content: (
            <p>Abstraction is the concept of hiding complex implementation details and showing only the essential features of the object. For example, when you use a method on an object, you don't need to know how it works internally, you just need to know what it does.</p>
        )
    },
    {
        id: 'js-oop-prototype-inheritance',
        title: 'Prototype Inheritance',
        parent: '12. OOP in JavaScript',
        content: (
            <p>Before `class` syntax, inheritance was done directly using prototypes. Every JavaScript object has a prototype, which is also an object. All JavaScript objects inherit their properties and methods from their prototype. This is an advanced topic that underpins how classes work.</p>
        )
    },
    // 13. Modules
    {
        id: 'js-modules-es',
        title: 'ES Modules (import/export)',
        parent: '13. Modules',
        content: (
            <>
                <p className="mb-4">Modules allow you to split your code into separate, reusable files. This makes code more organized and maintainable. ES Modules (ESM) are the standard module format in modern JavaScript.</p>
                <h3 className="text-xl font-bold mt-6 mb-2">Named Exports</h3>
                <p>You can export multiple variables or functions from a single file.</p>
                <CodeBlock language="javascript" code={`// file: utils.js
export const PI = 3.14;

export function greet(name) {
  return \`Hello, \${name}\`;
}

// file: main.js
import { PI, greet } from './utils.js';

console.log(greet("CodeAlpha"));
console.log("Value of PI:", PI);`} />
                <h3 className="text-xl font-bold mt-6 mb-2">Default Export</h3>
                <p>A file can have only one default export. It's often used for the primary "thing" a module exports, like a class or main function.</p>
                <CodeBlock language="javascript" code={`// file: User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// file: main.js
import User from './User.js'; // Note the lack of curly braces
const user = new User("Alice");`} />
            </>
        )
    },
    {
        id: 'js-modules-dynamic',
        title: 'Dynamic Imports',
        parent: '13. Modules',
        content: (
            <>
                <p className="mb-4">Dynamic `import()` is a function-like expression that allows you to load a module asynchronously, only when it's needed. This is useful for code-splitting and improving performance by not loading all code upfront.</p>
                <CodeBlock language="javascript" code={`const button = document.getElementById('load-module-btn');

button.addEventListener('click', async () => {
  try {
    // The module is only fetched and executed when the button is clicked
    const { someFunction } = await import('./heavy-module.js');
    someFunction();
  } catch (error) {
    console.error("Failed to load module:", error);
  }
});`} />
            </>
        )
    },
    {
        id: 'js-modules-cjs-esm',
        title: 'CJS vs ESM (Node.js)',
        parent: '13. Modules',
        content: (
            <>
                <p className="mb-4">While browsers use ES Modules, Node.js traditionally used a different system called CommonJS (CJS). Modern Node.js supports both, which can be confusing.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// CommonJS (CJS) vs. ES Modules (ESM)

//         | CommonJS (Older, Synchronous)   | ES Modules (Modern, Asynchronous)
//---------|---------------------------------|---------------------------------
// Export  | module.exports = myFunc;        | export default myFunc;
//         | exports.myVar = 10;             | export const myVar = 10;
//---------|---------------------------------|---------------------------------
// Import  | const myFunc = require('./mod');| import myFunc from './mod.js';
//         | const {myVar} = require('./mod');| import { myVar } from './mod.js';`}
                </pre>
                <p>To use ESM in Node.js, you can either name your files with a `.mjs` extension or add `"type": "module"` to your `package.json` file.</p>
            </>
        )
    },
    // 14. Fetching Data & APIs
    {
        id: 'js-fetch-api',
        title: 'Fetch API',
        parent: '14. Fetching Data & APIs',
        content: (
            <>
                <p className="mb-4">The `fetch()` API is the modern, built-in way to make network requests (e.g., to get data from a server). It is promise-based.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Fetch API Flow Diagram

// 1. fetch(url)
//    - Sends HTTP Request to server
//    - Returns a Promise that resolves to a 'Response' object.
//
// 2. response.json()
//    - Reads the response body and parses it as JSON.
//    - Returns another Promise that resolves to the actual JavaScript object.
//
// 3. .then(data => { ... })
//    - This is where you can finally work with your data.`}
                </pre>
                <CodeBlock language="javascript" code={`const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const data = await response.json(); // Parse JSON body
    console.log(data);
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
}

fetchData();`} />
            </>
        )
    },
    {
        id: 'js-fetch-json',
        title: 'JSON',
        parent: '14. Fetching Data & APIs',
        content: (
            <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It has become the de facto standard for data transfer on the web.</p>
        )
    },
    {
        id: 'js-fetch-rest-crud',
        title: 'REST API & CRUD Operations',
        parent: '14. Fetching Data & APIs',
        content: (
            <>
                <p className="mb-4">A REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Mapping HTTP Methods to CRUD Operations

// CRUD        | HTTP Method | Action
//-------------|-------------|------------------------------------
// Create      | POST        | Create a new resource (e.g., a new user)
// Read        | GET         | Retrieve a resource (e.g., get user details)
// Update      | PUT / PATCH | Update an existing resource
// Delete      | DELETE      | Remove a resource`}
                </pre>
                <CodeBlock language="javascript" code={`// Example of a POST request to create a new post
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'CodeAlpha Post',
      body: 'This is a new post.',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();
  console.log("Created post:", data);
}`} />
            </>
        )
    },
    {
        id: 'js-fetch-headers-status',
        title: 'Headers, Status Codes, CORS',
        parent: '14. Fetching Data & APIs',
        content: (
            <>
                <p className="mb-4">
                    <strong>Headers</strong> provide metadata about the request (e.g., authentication tokens, content type). <strong>Status Codes</strong> indicate the result of the request. <strong>CORS</strong> is a browser security feature.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">Checking Status & Setting Headers</h3>
                <p className="mb-4">The `fetch` API does <strong>not</strong> automatically throw an error for 404 or 500 status codes. You must check `response.ok` manually.</p>
                <CodeBlock language="javascript" code={`async function fetchSecureData() {
  try {
    const response = await fetch('https://api.example.com/private-data', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer my_secret_token',
        'Content-Type': 'application/json'
      }
    });

    // Custom Error Handling based on Status Codes
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Please log in.');
      } else if (response.status === 404) {
        throw new Error('Resource not found.');
      } else {
        throw new Error(\`Server Error: \${response.status}\`);
      }
    }

    const data = await response.json();
    console.log('Secure Data:', data);

  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
}`} />

                <h3 className="text-xl font-bold mt-6 mb-2">CORS (Cross-Origin Resource Sharing)</h3>
                <p className="mb-4">
                    Browsers block requests made from one domain (e.g., `localhost:3000`) to a different domain (e.g., `api.google.com`) for security reasons. This is called the Same-Origin Policy.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                    <h4 className="font-bold text-yellow-900 mb-1">How to fix CORS errors?</h4>
                    <p className="text-yellow-800 text-sm">
                        You cannot fix CORS in your frontend JavaScript code. The <strong>Server</strong> must allow your domain by sending specific headers like `Access-Control-Allow-Origin`.
                    </p>
                </div>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Preflight Request Flow (Browser Automatic)

// 1. Browser -> Server (OPTIONS Request)
//    "I am sending a request from localhost:3000. Do you allow this?"

// 2. Server -> Browser
//    "Yes, I allow localhost:3000." (Header: Access-Control-Allow-Origin)

// 3. Browser -> Server (Actual GET/POST Request)
//    "Okay, here is the real request."`}
                </pre>
            </>
        )
    },
    {
        id: 'js-fetch-postman',
        title: 'Postman Basics',
        parent: '14. Fetching Data & APIs',
        content: (
            <p>Postman is a popular API client that makes it easy to create, share, test, and document APIs. It allows you to send HTTP requests with custom headers, bodies, and parameters, and view the response without writing any code.</p>
        )
    },
];
