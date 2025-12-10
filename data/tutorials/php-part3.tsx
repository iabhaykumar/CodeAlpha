import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const PHP_PART3_TOPICS: Topic[] = [
  // 11. PHP OOP (Object-Oriented Programming)
  {
    id: 'php-oop-classes',
    title: 'Classes & Objects',
    parent: '11. PHP OOP',
    content: (
      <>
        <p className="mb-4">A class is a template for objects, and an object is an instance of a class. A class defines properties (variables) and methods (functions) that the objects will have.</p>
        <CodeBlock language="php" code={`class Course {
    // Properties
    public $title;
    public $duration;

    // Constructor (called when an object is created)
    public function __construct($title, $duration) {
        $this->title = $title;
        $this->duration = $duration;
    }

    // Method
    public function getDescription() {
        return $this->title . " lasts for " . $this->duration . " weeks.";
    }
}

// Create an object (instance) of the Course class
$php_course = new Course("PHP Development", 4);
echo $php_course->getDescription(); // Output: PHP Development lasts for 4 weeks.`} />
      </>
    )
  },
  {
    id: 'php-oop-inheritance',
    title: 'Inheritance',
    parent: '11. PHP OOP',
    content: (
      <>
        <p className="mb-4">Inheritance is a core OOP principle where a class (the child) derives properties and methods from another class (the parent). This promotes code reuse. The child class can override or extend the functionality of the parent.</p>
        <CodeBlock language="php" code={`class Animal {
    public function speak() {
        return "Animal makes a sound";
    }
}

// Dog class inherits from Animal using 'extends'
class Dog extends Animal {
    // Overriding the parent's speak method
    public function speak() {
        return "Woof!";
    }
}

$animal = new Animal();
$dog = new Dog();

echo $animal->speak(); // Animal makes a sound
echo $dog->speak();    // Woof!`} />
      </>
    )
  },
  {
    id: 'php-oop-encapsulation',
    title: 'Encapsulation (Access Modifiers)',
    parent: '11. PHP OOP',
    content: (
      <>
        <p className="mb-4">Encapsulation is the bundling of data (properties) and methods that operate on the data into a single unit (a class), and restricting access to some of the object's components. This is done using access modifiers.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>public:</strong> The property or method can be accessed from anywhere. This is the default.</li>
          <li><strong>protected:</strong> The property or method can be accessed within the class and by classes derived from that class.</li>
          <li><strong>private:</strong> The property or method can ONLY be accessed within the class that defines it.</li>
        </ul>
        <CodeBlock language="php" code={`class BankAccount {
    private $balance; // Can't be accessed directly from outside

    public function __construct($initialAmount) {
        $this->balance = $initialAmount;
    }

    public function getBalance() {
        return $this->balance;
    }

    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }
}

$myAccount = new BankAccount(100);
// echo $myAccount->balance; // This would cause a fatal error
echo $myAccount->getBalance(); // Correct way to access the data`} />
      </>
    )
  },
  {
    id: 'php-oop-abstraction-interfaces',
    title: 'Abstraction & Interfaces',
    parent: '11. PHP OOP',
    content: (
      <>
        <h3 className="text-xl font-bold mb-2">Abstract Classes</h3>
        <p className="mb-4">An abstract class is a class that cannot be instantiated on its own and must be inherited by another class. It can contain abstract methods (methods with a name and parameters but no implementation) that the child class must implement.</p>
        <h3 className="text-xl font-bold mt-4 mb-2">Interfaces</h3>
        <p className="mb-4">An interface is a contract that specifies which methods a class must implement. It allows you to program to an interface, not an implementation, which is a key principle of SOLID design.</p>
        <CodeBlock language="php" code={`// Interface defines a contract
interface Shape {
    public function calculateArea();
}

// Classes implement the interface
class Circle implements Shape {
    private $radius;
    public function __construct($radius) { $this->radius = $radius; }
    public function calculateArea() {
        return pi() * $this->radius * $this->radius;
    }
}

class Rectangle implements Shape {
    private $width, $height;
    public function __construct($width, $height) { $this->width = $width; $this->height = $height; }
    public function calculateArea() {
        return $this->width * $this->height;
    }
}

function printArea(Shape $shape) {
    echo "Area: " . $shape->calculateArea();
}

printArea(new Circle(5));`} />
      </>
    )
  },
  {
    id: 'php-oop-namespaces',
    title: 'Namespaces & Autoloading',
    parent: '11. PHP OOP',
    content: (
      <>
        <p className="mb-4">Namespaces are a way of encapsulating items to avoid name collisions. Imagine two different libraries both have a class named `Database`. Namespaces solve this problem.</p>
        <p className="mb-4">Autoloading is the process of automatically loading classes when they are needed, instead of including all files at the start. The modern standard for this is PSR-4, which is managed by Composer.</p>
        <CodeBlock language="php" code={`// file: App/Services/Logger.php
namespace App\\Services;

class Logger {
    public function log($message) { /* ... */ }
}

// file: index.php
use App\\Services\\Logger;

// Assuming Composer's autoloader is included
// require 'vendor/autoload.php';

$logger = new Logger();
$logger->log("This is so organized!");`} />
      </>
    )
  },
  // 12. Advanced PHP Concepts
  {
    id: 'php-adv-composer',
    title: 'Composer (Package Manager)',
    parent: '12. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Composer is the dependency manager for PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. It's the equivalent of `npm` for Node.js or `pip` for Python.</p>
        <h4 className="font-bold mb-2">Example `composer.json` file:</h4>
        <CodeBlock language="json" code={`{
    "name": "codealpha/my-project",
    "description": "A sample CodeAlpha project.",
    "require": {
        "monolog/monolog": "2.0.*"
    },
    "autoload": {
        "psr-4": {
            "App\\\": "src/"
        }
    }
}`} />
        <h4 className="font-bold mt-4 mb-2">Common Commands:</h4>
        <CodeBlock language="bash" code={`# Install dependencies from composer.json
composer install

# Add a new dependency
composer require guzzlehttp/guzzle

# Update dependencies
composer update`} />
      </>
    )
  },
  {
    id: 'php-adv-design-patterns',
    title: 'Design Patterns (MVC)',
    parent: '12. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Design patterns are reusable solutions to commonly occurring problems in software design. The most famous pattern in web development is MVC (Model-View-Controller).</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`// Model-View-Controller (MVC) Flow
//
//   User Action
//       |
//       v
//  +------------+   Updates   +---------+
//  | Controller |-----------> |  Model  |
//  | (Logic)    |             | (Data)  |
//  +------------+   <-----------+---------+
//       |             Notifies
//       |
//       | Renders
//       v
//   +--------+
//   |  View  |
//   | (UI)   |
//   +--------+`}
        </pre>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Model:</strong> Represents the data and business logic. Interacts with the database.</li>
          <li><strong>View:</strong> The user interface (HTML, CSS). Displays the data provided by the controller.</li>
          <li><strong>Controller:</strong> Handles user input, interacts with the Model, and selects a View to render.</li>
        </ul>
      </>
    )
  },
  {
    id: 'php-adv-exceptions',
    title: 'Error Handling & Exceptions',
    parent: '12. Advanced Concepts',
    content: (
      <>
        <p className="mb-4">Modern PHP uses exceptions for error handling. This allows you to "try" a block of code and "catch" errors that may occur, preventing your script from halting abruptly.</p>
        <CodeBlock language="php" code={`function divide($numerator, $denominator) {
    if ($denominator === 0) {
        throw new Exception("Cannot divide by zero!");
    }
    return $numerator / $denominator;
}

try {
    echo divide(10, 2); // 5
    echo divide(5, 0);  // This will throw an exception
} catch (Exception $e) {
    // Catch the error and handle it gracefully
    echo "Caught exception: " . $e->getMessage();
} finally {
    echo "\\nExecution finished.";
}`} />
      </>
    )
  },
];
