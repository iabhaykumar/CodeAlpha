import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVASCRIPT_PART2_TOPICS: Topic[] = [
    // 6. DOM (Document Object Model)
    {
        id: 'js-dom-selecting',
        title: 'Selecting Elements',
        parent: '6. DOM (Document Object Model)',
        content: (
            <>
                <p className="mb-4">The DOM represents your HTML document as a tree of objects. JavaScript can interact with this tree to dynamically change the content and structure of a web page.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`<!-- HTML Structure -->
<html>
  <body>
    <h1 id="main-heading">Title</h1>
    <p class="content">First paragraph.</p>
  </body>
</html>

// DOM Tree Representation
[Document]
  - [HTML]
    - [BODY]
      - [H1, id="main-heading"]
        - "Title"
      - [P, class="content"]
        - "First paragraph."`}
                </pre>
                <CodeBlock language="javascript" code={`// Assume the HTML above exists

// Get element by its ID (fastest)
const heading = document.getElementById('main-heading');

// Get the FIRST element that matches a CSS selector
const paragraph = document.querySelector('.content');

// Get ALL elements that match a CSS selector (returns a NodeList)
const allParagraphs = document.querySelectorAll('p');

console.log(heading.textContent); // "Title"`} />
            </>
        )
    },
    {
        id: 'js-dom-changing',
        title: 'Changing HTML/CSS',
        parent: '6. DOM (Document Object Model)',
        content: (
            <>
                <p className="mb-4">Once you select an element, you can change its content, attributes, and styles.</p>
                <CodeBlock language="javascript" code={`const heading = document.getElementById('main-heading');

// Change content
heading.textContent = "New Title!";

// Change styles
heading.style.color = 'blue';
heading.style.fontSize = '24px';

// Add/Remove CSS classes
heading.classList.add('highlight');
heading.classList.remove('old-class');

// Create and add new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added by JS.';
document.body.appendChild(newParagraph);`} />
            </>
        )
    },
    // 7. Events
    {
        id: 'js-events-listeners',
        title: 'Event Listeners',
        parent: '7. Events',
        content: (
            <>
                <p className="mb-4">Events are actions that happen in the browser, such as a user clicking a button, hovering over an element, or pressing a key. An <strong>event listener</strong> is a function that "listens" for a specific event to occur on an HTML element and then executes a callback function.</p>
                <CodeBlock language="javascript" code={`// HTML: <button id="my-button">Click Me</button>

const myButton = document.querySelector('#my-button');

// The function inside addEventListener is a callback.
// It runs ONLY when the event (in this case, 'click') happens.
myButton.addEventListener('click', function(event) {
  // The 'event' object contains information about the event
  console.log('Button was clicked!');
  console.log('Event type:', event.type); // "click"
  console.log('Target element:', event.target); // The button element
});`} />
            </>
        )
    },
    {
        id: 'js-events-common',
        title: 'Common Event Types',
        parent: '7. Events',
        content: (
            <>
                <p className="mb-4">There are many types of events you can listen for. Here are some of the most common ones:</p>
                <ul className="list-disc pl-5 space-y-3 mb-6">
                    <li><strong>Mouse Events:</strong> `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`</li>
                    <li><strong>Keyboard Events:</strong> `keydown`, `keyup`, `keypress`</li>
                    <li><strong>Form Events:</strong> `submit` (on the \`<form>\` element), `input` (when a value changes), `change`</li>
                    <li><strong>Window/Document Events:</strong> `load` (when the page finishes loading), `scroll`, `resize`</li>
                </ul>
                <CodeBlock language="javascript" code={`const inputField = document.querySelector('#username-input');

// Listen for the 'input' event, which fires every time the value changes
inputField.addEventListener('input', (event) => {
  console.log('Current value:', event.target.value);
});

// Listen for the 'keydown' event
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        console.log('Escape key was pressed!');
    }
});`} />
            </>
        )
    },
    // 8. Asynchronous JavaScript
    {
        id: 'js-async-callbacks',
        title: 'Callbacks',
        parent: '8. Asynchronous JavaScript',
        content: (
            <>
                <p className="mb-4">Callbacks are the original way to handle asynchronous operations in JavaScript. A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.</p>
                <p className="mb-4">While powerful, nesting many callbacks can lead to "Callback Hell," making code hard to read and maintain.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// "Callback Hell" or "Pyramid of Doom"
asyncOperation1(data, (result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      // ...and so on, getting deeper and deeper
    });
  });
});`}
                </pre>
                <CodeBlock language="javascript" code={`function fetchData(callback) {
  // Simulate a network request that takes time
  setTimeout(() => {
    const data = { user: "CodeAlpha Student" };
    callback(data); // Execute the callback with the fetched data
  }, 1000); // 1 second delay
}

console.log("Requesting data...");

fetchData((data) => {
  console.log("Data received:", data);
});

console.log("Code continues to run...");`} />
            </>
        )
    },
    {
        id: 'js-async-promises',
        title: 'Promises',
        parent: '8. Asynchronous JavaScript',
        content: (
            <>
                <p className="mb-4">Promises were introduced in ES6 to solve the problems of callbacks. A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.</p>
                <p className="mb-4">A Promise can be in one of three states:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Pending:</strong> The initial state; neither fulfilled nor rejected.</li>
                    <li><strong>Fulfilled (Resolved):</strong> The operation completed successfully.</li>
                    <li><strong>Rejected:</strong> The operation failed.</li>
                </ul>
                <CodeBlock language="javascript" code={`const fetchData = new Promise((resolve, reject) => {
  // Simulate a network request
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ user: "CodeAlpha Student" }); // Fulfill the promise
    } else {
      reject("Failed to fetch data!"); // Reject the promise
    }
  }, 1000);
});

console.log("Requesting data...");

fetchData
  .then(data => {
    // This block runs if the promise is resolved
    console.log("Success:", data);
  })
  .catch(error => {
    // This block runs if the promise is rejected
    console.log("Error:", error);
  })
  .finally(() => {
    // This block runs regardless of success or failure
    console.log("Operation finished.");
  });`} />
            </>
        )
    },
    {
        id: 'js-async-await',
        title: 'async/await',
        parent: '8. Asynchronous JavaScript',
        content: (
            <>
                <p className="mb-4">Introduced in ES2017, `async/await` is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to read and reason about.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>The `async` keyword is placed before a function to signify it will return a Promise.</li>
                    <li>The `await` keyword pauses the function execution until the Promise is resolved, and then resumes with the resolved value. `await` can only be used inside an `async` function.</li>
                </ul>
                <CodeBlock language="javascript" code={`const fetchData = () => new Promise(resolve => {
  setTimeout(() => resolve({ user: "CodeAlpha Student" }), 1000);
});

// We wrap the logic in an async function
async function displayUserData() {
  try {
    console.log("Requesting data...");
    
    // 'await' pauses the function until fetchData resolves
    const data = await fetchData(); 
    
    // This line won't run until the await is complete
    console.log("Data received:", data);
    
    console.log("Code continues to run after await.");
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

displayUserData();`} />
            </>
        )
    },
    // 9. ES6+ (Modern JavaScript)
    {
        id: 'js-es6-let-const',
        title: 'let & const',
        parent: '9. ES6+ (Modern JavaScript)',
        content: <p>Covered in "Basics / Fundamentals". `let` provides block scope for variables that can be reassigned, while `const` provides block scope for constants that cannot be reassigned.</p>
    },
    {
        id: 'js-es6-template-strings',
        title: 'Template Strings',
        parent: '9. ES6+ (Modern JavaScript)',
        content: <p>Covered in "Strings". Template literals use backticks (`` ` ``) to allow for embedded expressions (e.g., {'`${variable}`'}) and multi-line strings, making string creation cleaner and more powerful.</p>
    },
    {
        id: 'js-es6-arrow-functions',
        title: 'Arrow Functions',
        parent: '9. ES6+ (Modern JavaScript)',
        content: (
            <>
                <p className="mb-4">Arrow functions offer a more concise syntax for writing functions. A key difference from traditional functions is that they do not have their own `this` context; they inherit `this` from the parent scope (lexical `this`).</p>
                <CodeBlock language="javascript" code={`// Concise syntax
const square = (x) => x * x;

// Lexical 'this' example
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    // 'this' here refers to the Timer object, not the setInterval function
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}`} />
            </>
        )
    },
    {
        id: 'js-es6-classes',
        title: 'Classes',
        parent: '9. ES6+ (Modern JavaScript)',
        content: <p>Covered in "OOP in JavaScript". ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance, providing a much cleaner and more familiar syntax for creating objects and handling inheritance.</p>
    },
    {
        id: 'js-es6-modules',
        title: 'Modules (import/export)',
        parent: '9. ES6+ (Modern JavaScript)',
        content: <p>Covered in "Modules". ES6 introduced a standardized module system with `import` and `export` keywords, allowing developers to split code into reusable, organized files.</p>
    },
    {
        id: 'js-es6-default-params',
        title: 'Default Parameters',
        parent: '9. ES6+ (Modern JavaScript)',
        content: (
            <>
                <p className="mb-4">Functions can be defined with default values for parameters, which are used if the argument is `undefined` or not provided.</p>
                <CodeBlock language="javascript" code={`function greet(name = "Guest", greeting = "Hello") {
  console.log(\`\${greeting}, \${name}!\`);
}

greet("CodeAlpha"); // "Hello, CodeAlpha!"
greet(); // "Hello, Guest!"
greet("Intern", "Welcome"); // "Welcome, Intern!"`} />
            </>
        )
    },
    {
        id: 'js-es6-spread-rest',
        title: 'Spread/Rest Operator (...)',
        parent: '9. ES6+ (Modern JavaScript)',
        content: (
            <>
                <p className="mb-4">The `...` syntax has two opposite functions: spread and rest.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Spread:</strong> "Spreads out" the elements of an iterable (like an array or string) or properties of an object into another array or object.</li>
                    <li><strong>Rest:</strong> "Gathers" the remaining arguments of a function into an array.</li>
                </ul>
                <CodeBlock language="javascript" code={`// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest operator
function sum(...numbers) {
  // 'numbers' is an array containing all arguments
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`} />
            </>
        )
    },
    {
        id: 'js-es6-destructuring',
        title: 'Destructuring',
        parent: '9. ES6+ (Modern JavaScript)',
        content: (
            <>
                <p className="mb-4">Destructuring assignment is a syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.</p>
                <CodeBlock language="javascript" code={`// Object destructuring
const user = {
  firstName: "Code",
  lastName: "Alpha",
  role: "EdTech"
};

const { firstName, role } = user;
console.log(firstName); // "Code"
console.log(role);      // "EdTech"

// Array destructuring
const coordinates = [10, 20, 30];
const [x, y] = coordinates;
console.log(x); // 10
console.log(y); // 20`} />
            </>
        )
    },
    // 10. Advanced Topics
    {
        id: 'js-advanced-closures',
        title: 'Closures',
        parent: '10. Advanced Topics',
        content: (
            <>
                <p className="mb-4">A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing.</p>
                <CodeBlock language="javascript" code={`function createCounter() {
  let count = 0; // 'count' is a private variable in the outer scope

  // The inner function "closes over" the 'count' variable
  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter(); // 'count' is now 0 for counter1
const counter2 = createCounter(); // 'count' is a separate 0 for counter2

counter1(); // 1
counter1(); // 2
counter2(); // 1 (independent of counter1)`} />
            </>
        )
    },
    {
        id: 'js-advanced-hoisting',
        title: 'Hoisting',
        parent: '10. Advanced Topics',
        content: (
            <>
                <p className="mb-4">Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. Only declarations are hoisted, not initializations.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>`var` declarations are hoisted and initialized with `undefined`.</li>
                    <li>`let` and `const` declarations are hoisted but are not initialized. Accessing them before declaration results in a `ReferenceError` (this is called the Temporal Dead Zone).</li>
                    <li>Function declarations are fully hoisted (both declaration and definition).</li>
                </ul>
                <CodeBlock language="javascript" code={`// 'var' is hoisted and initialized as undefined
console.log(myVar); // undefined
var myVar = 5;

// 'let' is hoisted but not initialized (Temporal Dead Zone)
// console.log(myLet); // ReferenceError
let myLet = 10;

// Function declarations are fully hoisted
sayHi(); // "Hello!"
function sayHi() {
  console.log("Hello!");
}`} />
            </>
        )
    },
    {
        id: 'js-advanced-prototype',
        title: 'Prototype & Prototypal Inheritance',
        parent: '10. Advanced Topics',
        content: (
            <>
                <p className="mb-4">JavaScript objects have a special hidden property `[[Prototype]]` (which can be accessed via `__proto__` or `Object.getPrototypeOf()`) that is either `null` or references another object. This "prototype" object allows JavaScript to implement inheritance. When you try to access a property of an object, if it's not found on the object itself, the JavaScript engine looks at the object's prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain (`null`).</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Prototype Chain
myArray -> Array.prototype -> Object.prototype -> null`}
                </pre>
                <CodeBlock language="javascript" code={`function Animal(name) {
  this.name = name;
}

// Add a method to the Animal's prototype
Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound.\`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up the prototype chain: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // "Rex makes a sound." (Method inherited from Animal)`} />
            </>
        )
    },
    {
        id: 'js-advanced-event-loop',
        title: 'The Event Loop',
        parent: '10. Advanced Topics',
        content: (
            <>
                <p className="mb-4">JavaScript has a single-threaded concurrency model with a call stack, an event loop, a callback queue, and Web APIs. The event loop's job is to look at the call stack and the callback queue. If the call stack is empty, it takes the first event from the queue and pushes it to the call stack, which effectively runs it.</p>
                <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
                    {`// Visualizing the Event Loop

+-----------------+
|   Call Stack    |  <-- Synchronous code runs here
+-----------------+
       ^  |
       |  |
Event  |  | Callback
Loop   |  v
+-----------------+      +-----------------+
| Callback Queue  | <--- |     Web APIs    |
+-----------------+      +-----------------+
                         (setTimeout, fetch, etc.)`}
                </pre>
                <CodeBlock language="javascript" code={`console.log("Start"); // 1. Added to call stack, runs immediately

setTimeout(() => {
  // 3. This callback is added to the Callback Queue after 0ms
  console.log("Timeout Callback"); // 5. Runs after stack is empty
}, 0);

Promise.resolve().then(() => {
  // 4. This is a microtask, runs before the timeout
  console.log("Promise Resolved"); 
});

console.log("End"); // 2. Added to call stack, runs immediately

// Output Order:
// Start
// End
// Promise Resolved (Microtask)
// Timeout Callback (Macrotask)`} />
            </>
        )
    }
];
