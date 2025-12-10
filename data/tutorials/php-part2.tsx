import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PHP_PART2_TOPICS: Topic[] = [
  // 6. Forms & User Input
  {
    id: 'php-forms-get-post',
    title: 'GET & POST Methods',
    parent: '6. Forms & User Input',
    content: (
      <>
        <p className="mb-4">PHP is excellent at collecting form data. The two main methods are GET and POST.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>GET:</strong> Form data is sent in the URL. Visible to everyone, has limits on the amount of data. Good for search forms.</li>
          <li><strong>POST:</strong> Form data is sent in the HTTP request body. Invisible to others, no limits on data amount. Good for login forms or sensitive data.</li>
        </ul>
        <h4 className="font-bold mb-2">Example HTML Form:</h4>
        <CodeBlock language="html" code={`<form action="welcome.php" method="post">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    <input type="submit">
</form>`} />
      </>
    )
  },
  {
    id: 'php-forms-handling',
    title: 'Form Handling & Validation',
    parent: '6. Forms & User Input',
    content: (
      <>
        <p className="mb-4">When a form is submitted, the data is available in the `$_GET` or `$_POST` superglobal arrays. It is CRITICAL to validate and sanitize user input to prevent security vulnerabilities like XSS.</p>
        <h4 className="font-bold mb-2">Example `welcome.php`:</h4>
        <CodeBlock language="php" code={`<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo "Welcome, " . $name . "<br>";
    }

    if (empty($email)) {
        echo "Email is empty";
    } else {
        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format";
        } else {
            echo "Your email is: " . $email;
        }
    }
}
?>`} />
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
          <h4 className="font-bold text-red-900 mb-1">Security Warning</h4>
          <p className="text-red-800 text-sm">Always use functions like `htmlspecialchars()` to prevent Cross-Site Scripting (XSS) attacks by converting special characters to HTML entities.</p>
        </div>
      </>
    )
  },
  // 7. Superglobals
  {
    id: 'php-superglobals',
    title: 'Superglobals',
    parent: '7. Superglobals',
    content: (
      <>
        <p className="mb-4">Superglobals are built-in variables that are always available in all scopes. You don't need to declare them.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>`$GLOBALS`: References all variables available in global scope.</li>
          <li>`$_SERVER`: Information about the server and execution environment.</li>
          <li>`$_GET`: Variables passed to the current script via the URL parameters.</li>
          <li>`$_POST`: Variables passed via the HTTP POST method.</li>
          <li>`$_FILES`: Information about uploaded files.</li>
          <li>`$_COOKIE`: Variables passed via HTTP Cookies.</li>
          <li>`$_SESSION`: Session variables.</li>
        </ul>
        <CodeBlock language="php" code={`// Example of using $_SERVER
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
echo "Script Filename: " . $_SERVER['SCRIPT_FILENAME'];`} />
      </>
    )
  },
  // 8. Cookies & Sessions
  {
    id: 'php-cookies-sessions',
    title: 'Cookies & Sessions',
    parent: '8. Cookies & Sessions',
    content: (
      <>
        <p className="mb-4">Cookies and Sessions are used to store information about the user across multiple pages.</p>
        <h4 className="font-bold mb-2">Cookies</h4>
        <p className="mb-2">A cookie is a small file that the server embeds on the user's computer. Each time the same computer requests a page with a browser, it will send the cookie too.</p>
        <h4 className="font-bold mt-4 mb-2">Sessions</h4>
        <p className="mb-2">A session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the user's computer, but on the server.</p>
        <CodeBlock language="php" code={`<?php
// Note: session_start() must be the very first thing in your document.
session_start();

// Setting session variables
$_SESSION["favcolor"] = "green";
$_SESSION["username"] = "CodeAlphaUser";

echo "Session variables are set.";

// To retrieve:
// echo "Favorite color is " . $_SESSION["favcolor"];

// To destroy the session:
// session_unset();
// session_destroy();
?>`} />
      </>
    )
  },
  // 9. File Handling
  {
    id: 'php-file-handling',
    title: 'File Read/Write',
    parent: '9. File Handling',
    content: (
      <>
        <p className="mb-4">PHP has several functions for creating, reading, uploading, and editing files.</p>
        <CodeBlock language="php" code={`$filename = "codealpha.txt";

// file_put_contents is a simple way to write to a file (overwrites)
file_put_contents($filename, "Hello from CodeAlpha!");

// Append content to the file
file_put_contents($filename, "\\nWelcome to our course.", FILE_APPEND);

// file_get_contents is a simple way to read the entire file into a string
$content = file_get_contents($filename);
echo $content;

// More advanced way using fopen, fread, fclose
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);`} />
      </>
    )
  },
  // 10. PHP with Databases
  {
    id: 'php-db-pdo',
    title: 'PDO (PHP Data Objects)',
    parent: '10. Databases',
    content: (
      <>
        <p className="mb-4">PDO is the recommended, modern way to connect to databases in PHP. It provides a data-access abstraction layer, which means that, regardless of which database you're using, you use the same functions to issue queries and fetch data. PDO also helps prevent SQL injection using prepared statements.</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 mb-1">Why PDO over mysqli?</h4>
          <p className="text-yellow-800 text-sm">PDO supports 12 different database drivers, whereas MySQLi only supports MySQL. If you ever need to switch your project to another database, PDO makes it easier. Both offer object-oriented and procedural APIs and support prepared statements.</p>
        </div>
      </>
    )
  },
  {
    id: 'php-db-crud',
    title: 'CRUD with PDO',
    parent: '10. Databases',
    content: (
      <>
        <p className="mb-4">CRUD stands for Create, Read, Update, Delete. Here's a full example using PDO and prepared statements for security.</p>
        <CodeBlock language="php" code={`<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // --- CREATE ---
    $sql = "INSERT INTO Students (name, email) VALUES (:name, :email)";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['name' => 'John Doe', 'email' => 'john@example.com']);
    echo "New record created successfully<br>";

    // --- READ ---
    $stmt = $conn->prepare("SELECT id, name, email FROM Students");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach($result as $row) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
    }

    // --- UPDATE ---
    $sql = "UPDATE Students SET email = :email WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['email' => 'john.doe@new.com', 'id' => 1]);
    echo "Record updated successfully<br>";

    // --- DELETE ---
    $sql = "DELETE FROM Students WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['id' => 1]);
    echo "Record deleted successfully<br>";

} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$conn = null; // Close the connection
?>`} />
      </>
    )
  },
];
