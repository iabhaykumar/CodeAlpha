import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PHP_PART1_TOPICS: Topic[] = [
  // 1. PHP Basics / Fundamentals
  {
    id: 'php-what-is-php',
    title: 'What is PHP?',
    parent: '1. PHP Basics',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          PHP stands for <strong>Hypertext Preprocessor</strong>. It is a widely-used, open-source server-side scripting language especially suited for web development. This means PHP code is executed on the server, and the result is sent to the browser as plain HTML.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 mb-1">Client-Side vs. Server-Side</h4>
          <p className="text-blue-800 text-sm">JavaScript runs on the user's browser (client-side), while PHP runs on the web server. This allows PHP to interact with databases, manage sessions, and handle files on the server before the page is even sent to the user.</p>
        </div>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`// How PHP Works: A Simple Diagram
// 1. Client (Browser)      2. Web Server         3. PHP Engine          4. Database
// +----------------+      +---------------+      +-------------+      +-------------+
// | Requests page  |----->| Receives req. |----->| Executes    |----->| Fetches data|
// | (e.g., .php)   |      | (Apache/Nginx)|      | PHP script  |      | (MySQL/etc.)|
// +----------------+      +---------------+      +-------------+      +-------------+
//       ^                                               |                    |
//       |                                               v                    v
//       |      +-------------------------------------------------------------+
//       +------| 5. Generates HTML and sends it back to the client           |
//              +-------------------------------------------------------------+`}
        </pre>
        <CodeBlock language="php" code={`<!DOCTYPE html>
<html>
<head>
    <title>My First PHP Page</title>
</head>
<body>
    <h1><?php echo "Hello from CodeAlpha!"; ?></h1>
    <p>The current time is <?php echo date('H:i:s'); ?>.</p>
</body>
</html>`} />
      </>
    )
  },
  {
    id: 'php-install',
    title: 'Installation (XAMPP/WAMP)',
    parent: '1. PHP Basics',
    content: (
      <>
        <p className="mb-4">To run PHP on your local machine, you need a web server (like Apache), PHP itself, and a database (like MySQL). The easiest way to get all of these is by installing a package like XAMPP or WAMP.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>XAMPP:</strong> Cross-platform (Windows, macOS, Linux).</li>
          <li><strong>WAMP:</strong> Windows only.</li>
          <li><strong>MAMP:</strong> macOS only.</li>
        </ul>
        <p>After installing, start the Apache and MySQL services from the control panel. Place your `.php` files in the `htdocs` (for XAMPP) or `www` (for WAMP) folder and access them in your browser via `http://localhost/your_file.php`.</p>
      </>
    )
  },
  {
    id: 'php-syntax-tags',
    title: 'Syntax & PHP Tags',
    parent: '1. PHP Basics',
    content: (
      <>
        <p className="mb-4">
          A PHP script can be placed anywhere in the document. It starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>.
        </p>

        <CodeBlock language="php" code={`<?php
// This is a single-line comment
# This is also a single-line comment

/*
This is a
multi-line comment
*/

// PHP statements end with a semicolon
echo "Hello World";

// PHP is case-sensitive for variable names
$color = "red";
// echo $COLOR; // This would cause an error
?>`} />
      </>
    )
  },
  {
    id: 'php-variables-types',
    title: 'Variables & Data Types',
    parent: '1. PHP Basics',
    content: (
      <>
        <p className="mb-4">In PHP, a variable starts with the `$` sign, followed by the name of the variable. PHP is a loosely typed language, so you don't need to declare the data type of a variable in advance.</p>
        <CodeBlock language="php" code={`$text = "CodeAlpha"; // String
$student_count = 5000;  // Integer
$rating = 4.9;          // Float
$is_online = true;      // Boolean
$topics = array("PHP", "Java", "Python"); // Array
$course = null;         // Null`} />
      </>
    )
  },
  {
    id: 'php-echo-print',
    title: 'Echo vs. Print',
    parent: '1. PHP Basics',
    content: (
      <>
        <p className="mb-4">`echo` and `print` are very similar. They are both used to output data to the screen. The differences are small:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>`echo` has no return value while `print` has a return value of 1 so it can be used in expressions.</li>
          <li>`echo` can take multiple parameters (though this is rarely used), while `print` can take only one argument.</li>
          <li>`echo` is marginally faster than `print`.</li>
        </ul>
        <p>In practice, `echo` is used almost exclusively by the community.</p>
        <CodeBlock language="php" code={`$name = "CodeAlpha";
echo "Hello, " . $name . "!"; // Concatenation with .
echo "<h2>Welcome</h2>";
print "You can use print too.";`} />
      </>
    )
  },
  // 2. Control Flow
  {
    id: 'php-if-else',
    title: 'if / else / elseif',
    parent: '2. Control Flow',
    content: (
      <CodeBlock language="php" code={`$score = 85;

if ($score >= 90) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B";
} else {
    echo "Grade: C or below";
}`} />
    )
  },
  {
    id: 'php-switch',
    title: 'switch',
    parent: '2. Control Flow',
    content: (
      <CodeBlock language="php" code={`$favorite_language = "PHP";

switch ($favorite_language) {
    case "Java":
        echo "You like Java!";
        break;
    case "PHP":
        echo "You like PHP!";
        break;
    default:
        echo "Your favorite language is something else.";
}`} />
    )
  },
  {
    id: 'php-loops',
    title: 'Loops (for, while, do-while)',
    parent: '2. Control Flow',
    content: (
      <CodeBlock language="php" code={`// For loop
for ($i = 0; $i < 5; $i++) {
    echo "The number is $i <br>";
}

// While loop
$i = 0;
while ($i < 5) {
    echo "Number: $i <br>";
    $i++;
}

// Foreach loop (for arrays)
$colors = array("red", "green", "blue");
foreach ($colors as $value) {
    echo "$value <br>";
}`} />
    )
  },
  // 3. Functions
  {
    id: 'php-functions-user',
    title: 'User-Defined Functions',
    parent: '3. Functions',
    content: (
      <CodeBlock language="php" code={`function greet($name) {
    echo "Hello, $name!";
}
greet("CodeAlpha Student"); // Calls the function

function add($x, $y) {
    return $x + $y;
}
$sum = add(5, 10);
echo "Sum: " . $sum; // Sum: 15`} />
    )
  },
  // 4. Arrays
  {
    id: 'php-arrays-indexed',
    title: 'Indexed & Associative Arrays',
    parent: '4. Arrays',
    content: (
      <CodeBlock language="php" code={`// Indexed array (numeric keys)
$cars = array("Volvo", "BMW", "Toyota");
// or shorthand: $cars = ["Volvo", "BMW", "Toyota"];
echo "I like " . $cars[0] . ".";

// Associative array (named keys)
$age = array("Peter" => 35, "Ben" => 37, "Joe" => 43);
// or shorthand: $age = ["Peter" => 35, ...];
echo "Peter is " . $age['Peter'] . " years old.";

// Looping through an associative array
foreach($age as $name => $years) {
    echo "Key=" . $name . ", Value=" . $years;
    echo "<br>";
}`} />
    )
  },
  // 5. Strings
  {
    id: 'php-strings-functions',
    title: 'String Functions',
    parent: '5. Strings',
    content: (
      <>
        <p className="mb-4">PHP provides a rich set of functions for string manipulation.</p>
        <CodeBlock language="php" code={`$my_string = "Hello CodeAlpha";

// Get string length
echo strlen($my_string); // 15

// Count words
echo str_word_count($my_string); // 2

// Reverse a string
echo strrev($my_string); // ahplAedoC olleH

// Replace text
echo str_replace("Alpha", "Beta", $my_string); // Hello CodeBeta`} />
      </>
    )
  },
  {
    id: 'php-strings-interpolation',
    title: 'String Interpolation',
    parent: '5. Strings',
    content: (
      <>
        <p className="mb-4">PHP parses variables inside double-quoted strings (`"`), but not single-quoted strings (`'`). This is known as interpolation.</p>
        <CodeBlock language="php" code={`$name = "CodeAlpha";

// Double quotes: variable is parsed
echo "Hello, $name!"; // Output: Hello, CodeAlpha!

// Single quotes: variable is treated as literal text
echo 'Hello, $name!'; // Output: Hello, $name!`} />
      </>
    )
  },
];
