import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PHP_PART4_TOPICS: Topic[] = [
  // 13. PHP 8+ Modern Features
  {
    id: 'php-modern-80',
    title: 'PHP 8.0 Features',
    parent: '13. Modern PHP 8+',
    content: (
      <>
        <p className="mb-4">PHP 8.0 was a major update with significant performance improvements and new features.</p>
        <h4 className="font-bold mt-4 mb-2">Constructor Property Promotion</h4>
        <p className="mb-2">Reduces boilerplate in classes by declaring properties directly in the constructor.</p>
        <CodeBlock language="php" code={`// Before PHP 8.0
class Point {
    public float $x;
    public float $y;
    public function __construct(float $x, float $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

// With PHP 8.0
class Point {
    public function __construct(
        public float $x,
        public float $y
    ) {}
}`} />
        <h4 className="font-bold mt-4 mb-2">Match Expression</h4>
        <p className="mb-2">A safer, more concise alternative to `switch` that uses strict comparisons and can return a value.</p>
        <CodeBlock language="php" code={`$statusCode = 200;
$message = match ($statusCode) {
    200, 201 => 'Success',
    404 => 'Not Found',
    default => 'Unknown status',
};
echo $message;`} />
      </>
    )
  },
  {
    id: 'php-modern-81',
    title: 'PHP 8.1 Features',
    parent: '13. Modern PHP 8+',
    content: (
      <>
        <h4 className="font-bold mb-2">Enums</h4>
        <p className="mb-2">Enums (Enumerations) allow a developer to define a custom type that is limited to one of a discrete number of possible values.</p>
        <CodeBlock language="php" code={`enum Status {
    case Pending;
    case Active;
    case Archived;
}

function setStatus(Status $status) { /* ... */ }
setStatus(Status::Active);`} />
        <h4 className="font-bold mt-4 mb-2">readonly Properties</h4>
        <p className="mb-2">Properties declared with `readonly` can only be initialized once, from within the class, and cannot be changed afterwards.</p>
        <CodeBlock language="php" code={`class User {
    public function __construct(
        public readonly string $username
    ) {}
}

$user = new User("codealpha");
// $user->username = "new_name"; // This would cause a fatal error.`} />
      </>
    )
  },
  {
    id: 'php-modern-82-84',
    title: 'PHP 8.2+ Features',
    parent: '13. Modern PHP 8+',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>PHP 8.2:</strong> Introduced `readonly` classes, where all properties are automatically readonly.</li>
          <li><strong>PHP 8.3:</strong> Added typed class constants and a new `json_validate()` function.</li>
          <li><strong>PHP 8.4 (Upcoming):</strong> Expected to bring further performance improvements with the JIT compiler, and enhancements to the type system.</li>
        </ul>
      </>
    )
  },
  // 14. PHP Security
  {
    id: 'php-security-sql-injection',
    title: 'SQL Injection Prevention',
    parent: '14. PHP Security',
    content: (
      <>
        <p className="mb-4">SQL Injection occurs when malicious SQL code is inserted into input fields. The #1 way to prevent this is to <strong>always use prepared statements</strong>.</p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
          <h4 className="font-bold text-red-900 mb-1">INSECURE Code (Do NOT do this!)</h4>
          <CodeBlock language="php" code={`// User input from a form
$user_id = $_POST['id'];
// The query is built by concatenating strings. This is VULNERABLE!
$sql = "SELECT * FROM users WHERE id = " . $user_id;`} />
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 mb-1">SECURE Code (Use Prepared Statements)</h4>
          <CodeBlock language="php" code={`$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_POST['id']]);
$user = $stmt->fetch();`} />
        </div>
      </>
    )
  },
  {
    id: 'php-security-xss',
    title: 'XSS Protection',
    parent: '14. PHP Security',
    content: (
      <>
        <p className="mb-4">Cross-Site Scripting (XSS) occurs when malicious scripts are injected into trusted websites. To prevent this, always escape user-provided output using `htmlspecialchars()`.</p>
        <CodeBlock language="php" code={`// User submits a comment: <script>alert('XSS Attack!')</script>
$comment = $_POST['comment'];

// Without escaping, the script would run in the browser.
// echo "<div>" . $comment . "</div>";

// WITH escaping, the script is rendered as harmless text.
echo "<div>" . htmlspecialchars($comment, ENT_QUOTES, 'UTF-8') . "</div>";`} />
      </>
    )
  },
  {
    id: 'php-security-passwords',
    title: 'Password Hashing',
    parent: '14. PHP Security',
    content: (
      <>
        <p className="mb-4">Never store passwords in plain text. Use PHP's built-in functions `password_hash()` and `password_verify()` which use a strong, modern hashing algorithm (BCRYPT).</p>
        <CodeBlock language="php" code={`// Hashing a password during user registration
$password = "my_secret_password";
$hash = password_hash($password, PASSWORD_DEFAULT);
// Store $hash in your database

// Verifying a password during login
$submitted_password = $_POST['password'];
$hash_from_db = "get_hash_from_database";

if (password_verify($submitted_password, $hash_from_db)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}`} />
      </>
    )
  },
  // 15. Frameworks
  {
    id: 'php-frameworks-laravel',
    title: 'Laravel (Most Important)',
    parent: '15. Frameworks',
    content: (
      <>
        <p className="mb-4">Laravel is the most popular PHP framework today. It provides an elegant, expressive syntax and a huge ecosystem of tools that make common web development tasks like routing, authentication, sessions, and caching incredibly simple.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Eloquent ORM:</strong> Beautiful, simple ActiveRecord implementation for working with your database.</li>
          <li><strong>Blade Templating Engine:</strong> Simple, yet powerful templating engine.</li>
          <li><strong>Artisan CLI:</strong> Built-in command-line interface for scaffolding and automation.</li>
          <li><strong>Vibrant Ecosystem:</strong> Tools like Vapor (serverless), Forge (server management), and a huge library of packages.</li>
        </ul>
      </>
    )
  },
  // 16. APIs
  {
    id: 'php-api-rest',
    title: 'REST API in PHP',
    parent: '16. APIs',
    content: (
      <>
        <p className="mb-4">A REST API allows different systems to communicate over HTTP. A basic PHP API involves reading the request method (`GET`, `POST`, etc.), processing data, and returning a JSON response.</p>
        <CodeBlock language="php" code={`<?php
header("Content-Type: application/json");

// A simple in-memory "database"
$courses = [
    1 => ['title' => 'PHP Basics', 'weeks' => 4],
    2 => ['title' => 'Laravel', 'weeks' => 8]
];

$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id']) && array_key_exists($_GET['id'], $courses)) {
        $response = $courses[$_GET['id']];
    } else {
        $response = $courses;
    }
} else {
    http_response_code(405); // Method Not Allowed
    $response = ['error' => 'Method Not Allowed'];
}

echo json_encode($response);
?>`} />
      </>
    )
  },
  // 17. PHP + JS
  {
    id: 'php-ajax',
    title: 'PHP with AJAX (Fetch API)',
    parent: '17. PHP + AJAX/JS',
    content: (
      <>
        <p className="mb-4">You can use JavaScript's Fetch API to make background requests to a PHP script without reloading the page. The PHP script processes the request and returns data (usually JSON), which the JavaScript then uses to update the page.</p>
        <h4 className="font-bold mb-2">JavaScript (Client-Side)</h4>
        <CodeBlock language="javascript" code={`document.getElementById('myButton').addEventListener('click', () => {
    fetch('api.php?id=1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = data.title;
        })
        .catch(error => console.error('Error:', error));
});`} />
        <h4 className="font-bold mt-4 mb-2">PHP (api.php on Server-Side)</h4>
        <p>The PHP script would be similar to the REST API example, processing `$_GET['id']` and echoing a JSON response.</p>
      </>
    )
  },
  // 19. PHP Testing
  {
    id: 'php-testing-phpunit',
    title: 'PHPUnit',
    parent: '19. PHP Testing',
    content: (
      <>
        <p className="mb-4">PHPUnit is the standard framework for unit testing in PHP. Writing tests ensures your code works as expected and helps prevent regressions when you make changes.</p>
        <CodeBlock language="php" code={`// file: src/Calculator.php
namespace App;
class Calculator {
    public function add(int $a, int $b): int { return $a + $b; }
}

// file: tests/CalculatorTest.php
use App\\Calculator;
use PHPUnit\\Framework\\TestCase;

class CalculatorTest extends TestCase {
    public function testAdd() {
        $calculator = new Calculator();
        $result = $calculator->add(5, 10);
        $this->assertSame(15, $result);
    }
}`} />
      </>
    )
  },
  // 20. Latest & Trending
  {
    id: 'php-trending-2025',
    title: 'Trending Topics (2024-2025)',
    parent: '20. Latest & Trending',
    content: (
      <>
        <p className="mb-4">The PHP ecosystem is more vibrant than ever. To be a top developer in 2025, focus on these areas:</p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Laravel 11+:</strong> Master the latest version of the most popular framework.</li>
          <li><strong>Asynchronous PHP (Swoole, ReactPHP):</strong> Learn how to build high-performance, non-blocking applications for real-time services like chats and notifications.</li>
          <li><strong>Serverless PHP (Bref):</strong> Deploy PHP applications on AWS Lambda for infinite scalability and cost-efficiency.</li>
          <li><strong>Docker & Containers:</strong> Essential for consistent development and deployment environments.</li>
          <li><strong>Microservices Architecture:</strong> Understand how to break down large applications into smaller, independent services using PHP.</li>
          <li><strong>API Development:</strong> Deepen your knowledge of REST and GraphQL APIs, including security practices like JWT and OAuth2.</li>
          <li><strong>Clean Architecture & DDD:</strong> Adopt advanced software design principles to build maintainable and scalable enterprise applications.</li>
        </ul>
      </>
    )
  },
];
