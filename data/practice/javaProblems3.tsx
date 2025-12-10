import React from 'react';
import { ProblemCategory } from './types';

export const JAVA_PROBLEMS_PART3: ProblemCategory[] = [
  {
      category: "SECTION 5 — FUNCTIONS / METHODS",
      problems: [
        {
            id: "java-s5-q1",
            title: "Create a Method for Max of 3",
            description: "Create a method to find the largest of three numbers.",
            statement: "Write a static method `maxOfThree(a, b, c)` that returns the largest of the three integers.",
            inputFormat: "Three integers.",
            outputFormat: "The largest integer.",
            testCases: [{ input: "10 50 20", output: "50" }],
            solution: `import java.util.Scanner;
public class Main {
    public static int maxOfThree(int a, int b, int c) {
        return Math.max(a, Math.max(b, c));
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int n3 = sc.nextInt();
        System.out.println(maxOfThree(n1, n2, n3));
        sc.close();
    }
}`,
            explanation: "The method encapsulates the logic for finding the maximum. We use nested `Math.max` calls for a concise solution. The `main` method calls our custom method to get the result."
        },
        {
            id: "java-s5-q2",
            title: "Method to Check Prime",
            description: "Create a method to check if a number is prime.",
            statement: "Write a method `isPrime(int n)` which returns `true` if `n` is prime and `false` otherwise.",
            inputFormat: "A single integer.",
            outputFormat: "`true` or `false`.",
            testCases: [{input: "13", output: "true"}, {input: "12", output: "false"}],
            solution: `import java.util.Scanner;
public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(isPrime(num));
        sc.close();
    }
}`,
            explanation: "The `isPrime` method encapsulates the prime checking logic. The loop is optimized to check only up to the square root of `n`. If any factor is found, it immediately returns `false`. If the loop completes, it returns `true`."
        },
        {
            id: "java-s5-q3",
            title: "Method to Return Factorial",
            description: "Create a method to calculate factorial.",
            statement: "Write a method `factorial(int n)` that returns the factorial of a number.",
            inputFormat: "A single integer.",
            outputFormat: "The factorial.",
            testCases: [{ input: "5", output: "120" }],
            solution: `import java.util.Scanner;
public class Main {
    public static long factorial(int n) {
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(factorial(num));
        sc.close();
    }
}`,
            explanation: "The iterative logic for calculating the factorial is placed inside the `factorial` method, which returns the final `long` result."
        },
        {
            id: "java-s5-q4",
            title: "Method Overloading Example",
            description: "Create overloaded methods.",
            statement: "Create two methods named `add`: one that takes two integers and returns an `int`, and another that takes two doubles and returns a `double`.",
            inputFormat: "No input needed for demonstration.",
            outputFormat: "The results from both `add` methods.",
            testCases: [{ input: "", output: "Sum of ints: 15\nSum of doubles: 10.5" }],
            solution: `public class Main {
    public static int add(int a, int b) {
        return a + b;
    }
    public static double add(double a, double b) {
        return a + b;
    }
    public static void main(String[] args) {
        System.out.println("Sum of ints: " + add(10, 5));
        System.out.println("Sum of doubles: " + add(4.2, 6.3));
    }
}`,
            explanation: "Java supports method overloading, where multiple methods can have the same name as long as their parameter lists are different (in this case, by type). The compiler determines which version to call based on the arguments provided."
        },
        {
            id: "java-s5-q5",
            title: "Recursion – Fibonacci",
            description: "Find the nth Fibonacci number using recursion.",
            statement: "Write a recursive method to find the nth term of the Fibonacci sequence (0th term is 0, 1st is 1).",
            inputFormat: "An integer n.",
            outputFormat: "The nth Fibonacci number.",
            testCases: [{input: "9", output: "34"}],
            solution: `import java.util.Scanner;
public class Main {
    public static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(fib(n));
        sc.close();
    }
}`,
            explanation: "The `fib` method calls itself. The base cases (`n <= 1`) stop the recursion. Otherwise, it returns the sum of the results of calling itself for the two preceding numbers."
        },
        {
            id: "java-s5-q6",
            title: "Recursion – GCD",
            description: "Find the GCD of two numbers using recursion.",
            statement: "Write a recursive method for the Euclidean algorithm to find the GCD.",
            inputFormat: "Two integers.",
            outputFormat: "The GCD.",
            testCases: [{ input: "48 18", output: "6" }],
            solution: `import java.util.Scanner;
public class Main {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        System.out.println(gcd(n1, n2));
        sc.close();
    }
}`,
            explanation: "This is a direct implementation of the Euclidean algorithm. The base case is when `b` is 0. The recursive step calls `gcd` with `b` and the remainder of `a / b`."
        },
        {
            id: "java-s5-q7",
            title: "Recursion – Reverse String",
            description: "Reverse a string using recursion.",
            statement: "Write a recursive method that takes a string and returns its reverse.",
            inputFormat: "A single string.",
            outputFormat: "The reversed string.",
            testCases: [{ input: "hello", output: "olleh" }],
            solution: `import java.util.Scanner;
public class Main {
    public static String reverseString(String str) {
        if (str.isEmpty()) {
            return str;
        }
        return reverseString(str.substring(1)) + str.charAt(0);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(reverseString(s));
        sc.close();
    }
}`,
            explanation: "The base case is an empty string. The recursive step takes the first character (`str.charAt(0)`) and concatenates it to the end of the reversed version of the rest of the string (`str.substring(1)`)."
        },
        {
            id: "java-s5-q8",
            title: "Recursion – Sum of Array",
            description: "Find the sum of array elements using recursion.",
            statement: "Write a recursive method to find the sum of all elements in an integer array.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The sum.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "15" }],
            solution: `import java.util.Scanner;
public class Main {
    public static int sumArray(int[] arr, int n) {
        if (n <= 0) return 0;
        return sumArray(arr, n - 1) + arr[n - 1];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        System.out.println(sumArray(arr, n));
        sc.close();
    }
}`,
            explanation: "The recursive method `sumArray` takes the array and its current effective length `n`. The base case is when `n` is 0. The recursive step adds the last element `arr[n-1]` to the sum of the rest of the array."
        },
        {
            id: "java-s5-q9",
            title: "Recursion – Tower of Hanoi",
            description: "Solve the Tower of Hanoi puzzle.",
            statement: "Write a program to solve the Tower of Hanoi puzzle for N disks.",
            inputFormat: "An integer N for the number of disks.",
            outputFormat: "The sequence of moves.",
            testCases: [{ input: "3", output: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C\n" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + from_rod + " to " + to_rod);
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        System.out.println("Move disk " + n + " from " + from_rod + " to " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        towerOfHanoi(n, 'A', 'C', 'B');
        sc.close();
    }
}`,
            explanation: "This is a classic recursion problem. To move N disks from A to C: 1. Move N-1 disks from A to B (using C as auxiliary). 2. Move the largest disk N from A to C. 3. Move the N-1 disks from B to C (using A as auxiliary)."
        },
        {
            id: "java-s5-q10",
            title: "Recursion – Binary Search Implementation",
            description: "Implement binary search using recursion.",
            statement: "Write a recursive method to perform a binary search on a sorted array.",
            inputFormat: "A sorted array and a key to search.",
            outputFormat: "The index of the key or -1.",
            testCases: [{ input: "", output: "Found at index: 3" }],
            solution: `public class Main {
    public static int binarySearch(int[] arr, int l, int r, int x) {
        if (r >= l) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x) return mid;
            if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16};
        int x = 12;
        int result = binarySearch(arr, 0, arr.length - 1, x);
        if (result == -1) System.out.println("Not found");
        else System.out.println("Found at index: " + result);
    }
}`,
            explanation: "The recursive `binarySearch` method takes the array, left and right bounds, and the key. The base case is when `r < l`, meaning the element is not found. Otherwise, it finds the middle, compares, and then makes a recursive call on the appropriate half of the array."
        }
      ]
  },
  {
      category: "SECTION 6 — OBJECT ORIENTED PROGRAMMING (OOP)",
      problems: [
        {
            id: "java-s6-q1",
            title: "Create a Student Class",
            description: "Create a class to model a student.",
            statement: "Create a `Student` class with `name` and `rollNo`. Include a constructor and a `display` method.",
            inputFormat: "No input.",
            outputFormat: "Details of a sample student.",
            testCases: [{ input: "", output: "Roll No: 1, Name: John" }],
            solution: `class Student {
    String name;
    int rollNo;
    Student(String n, int r) { this.name = n; this.rollNo = r; }
    void display() { System.out.println("Roll No: " + rollNo + ", Name: " + name); }
}
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("John", 1);
        s1.display();
    }
}`,
            explanation: "The `Student` class encapsulates student data. The `this` keyword is used in the constructor to distinguish between the class member and the parameter."
        },
        {
            id: "java-s6-q2",
            title: "Create a Car Class",
            description: "Create a class to model a car.",
            statement: "Create a `Car` class with `make` and `model`. Add a method `startEngine` that prints a message.",
            inputFormat: "No input.",
            outputFormat: "Engine start message.",
            testCases: [{ input: "", output: "Toyota Camry engine started." }],
            solution: `class Car {
    String make, model;
    Car(String make, String model) { this.make = make; this.model = model; }
    void startEngine() { System.out.println(make + " " + model + " engine started."); }
}
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry");
        myCar.startEngine();
    }
}`,
            explanation: "This class models a car. The `startEngine` method uses the object's `make` and `model` attributes to print a specific message."
        },
        {
            id: "java-s6-q3",
            title: "Create a BankAccount Class",
            description: "Create a class for a simple bank account.",
            statement: "Create a `BankAccount` class with `deposit` and `withdraw` methods.",
            inputFormat: "No input.",
            outputFormat: "The final balance.",
            testCases: [{ input: "", output: "Balance: 1300" }],
            solution: `class BankAccount {
    private double balance;
    BankAccount(double b) { this.balance = b; }
    void deposit(double amount) { this.balance += amount; }
    void withdraw(double amount) { if (amount <= balance) this.balance -= amount; }
    double getBalance() { return this.balance; }
}
public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(1000);
        acc.deposit(500);
        acc.withdraw(200);
        System.out.println("Balance: " + acc.getBalance());
    }
}`,
            explanation: "The `balance` is private to protect it. Public methods provide controlled access, for example, preventing withdrawal of more money than is available."
        },
        {
            id: "java-s6-q4",
            title: "Static Variable Counter",
            description: "Use a static member to count class instances.",
            statement: "Create a class with a `static` integer member. Increment it in the constructor. Print the total count.",
            inputFormat: "No input.",
            outputFormat: "Total objects created: 3",
            testCases: [{ input: "", output: "Total objects created: 3" }],
            solution: `class Thing {
    static int count = 0;
    Thing() { count++; }
}
public class Main {
    public static void main(String[] args) {
        new Thing(); new Thing(); new Thing();
        System.out.println("Total objects created: " + Thing.count);
    }
}`,
            explanation: "A `static` variable is shared among all instances of a class. There's only one copy. We access it using the class name `Thing.count`."
        },
        {
            id: "java-s6-q5",
            title: "Inheritance – Person → Student",
            description: "Demonstrate inheritance with `super()`.",
            statement: "Create a `Person` class. Create a `Student` class that inherits from `Person` and adds a `grade` attribute. Use `super()`.",
            inputFormat: "No input.",
            outputFormat: "Name: Bob, Grade: 10",
            testCases: [{ input: "", output: "Name: Bob, Grade: 10" }],
            solution: `class Person {
    String name;
    Person(String name) { this.name = name; }
}
class Student extends Person {
    int grade;
    Student(String name, int grade) {
        super(name); // Call parent's constructor
        this.grade = grade;
    }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student("Bob", 10);
        System.out.println("Name: " + s.name + ", Grade: " + s.grade);
    }
}`,
            explanation: "The `super(name)` call in the `Student` constructor executes the constructor of the parent class (`Person`), which is the proper way to initialize inherited attributes."
        },
        {
            id: "java-s6-q6",
            title: "Method Overriding Example",
            description: "Demonstrate method overriding.",
            statement: "Create an `Animal` class with a `speak` method. Create a `Cat` class that overrides `speak`.",
            inputFormat: "No input.",
            outputFormat: "Meow",
            testCases: [{ input: "", output: "Meow" }],
            solution: `class Animal {
    void speak() { System.out.println("Animal sound"); }
}
class Cat extends Animal {
    @Override
    void speak() { System.out.println("Meow"); }
}
public class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.speak();
    }
}`,
            explanation: "The `Cat` class provides its own specific implementation of the `speak` method. The `@Override` annotation is used to confirm that we are intentionally overriding a method from the parent class."
        },
        {
            id: "java-s6-q7",
            title: "Abstract Class – Shape",
            description: "Use an abstract class and method.",
            statement: "Create an `abstract` class `Shape` with an `abstract` method `getArea()`. Create a `Rectangle` subclass that implements it.",
            inputFormat: "No input.",
            outputFormat: "Area: 50.0",
            testCases: [{ input: "", output: "Area: 50.0" }],
            solution: `abstract class Shape {
    abstract double getArea();
}
class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override
    double getArea() { return w * h; }
}
public class Main {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(10, 5);
        System.out.println("Area: " + r.getArea());
    }
}`,
            explanation: "An `abstract` class cannot be instantiated. It acts as a template. Any class that `extends` it must provide an implementation for all its `abstract` methods."
        },
        {
            id: "java-s6-q8",
            title: "Interface – Animal",
            description: "Implement an interface.",
            statement: "Create an interface `Animal` with a method `eat()`. Create a `Dog` class that implements this interface.",
            inputFormat: "No input.",
            outputFormat: "Dog is eating.",
            testCases: [{ input: "", output: "Dog is eating." }],
            solution: `interface Animal {
    void eat();
}
class Dog implements Animal {
    public void eat() { System.out.println("Dog is eating."); }
}
public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
    }
}`,
            explanation: "An interface is a contract. The `Dog` class uses `implements Animal` to promise it will provide a body for all methods in the `Animal` interface."
        },
        {
            id: "java-s6-q9",
            title: "Polymorphism Example",
            description: "Demonstrate polymorphism.",
            statement: "Demonstrate polymorphism by calling an overridden method through a base class reference.",
            inputFormat: "No input.",
            outputFormat: "Dog is eating.",
            testCases: [{ input: "", output: "Dog is eating." }],
            solution: `interface Animal { void eat(); }
class Dog implements Animal {
    public void eat() { System.out.println("Dog is eating."); }
}
public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog(); // Polymorphism
        myAnimal.eat();
    }
}`,
            explanation: "Here, a reference of the interface type `Animal` is holding an object of the class `Dog`. When `myAnimal.eat()` is called, Java determines at runtime that the actual object is a `Dog` and calls the `Dog`'s version of the method."
        },
        {
            id: "java-s6-q10",
            title: "Encapsulation (Getters/Setters)",
            description: "Use private members and public methods.",
            statement: "Create an `Employee` class with a `private` salary. Provide public `getSalary` and `setSalary` methods.",
            inputFormat: "No input.",
            outputFormat: "Salary: 55000.0",
            testCases: [{ input: "", output: "Salary: 55000.0" }],
            solution: `class Employee {
    private double salary;
    public double getSalary() { return salary; }
    public void setSalary(double s) { if(s > 0) this.salary = s; }
}
public class Main {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.setSalary(55000);
        System.out.println("Salary: " + e.getSalary());
    }
}`,
            explanation: "This hides the `salary` field from direct access. The `setSalary` method provides a way to control how the salary is changed, allowing for validation (e.g., ensuring it's a positive number)."
        },
        {
            id: "java-s6-q11",
            title: "Constructor Overloading",
            description: "Create a class with multiple constructors.",
            statement: "Create a `Box` class with two constructors: one that takes no arguments (default 1x1x1) and one that takes width, height, and depth.",
            inputFormat: "No input.",
            outputFormat: "Volume 1: 1\nVolume 2: 60",
            testCases: [{ input: "", output: "Volume 1: 1\nVolume 2: 60" }],
            solution: `class Box {
    int w, h, d;
    Box() { w=1; h=1; d=1; }
    Box(int w, int h, int d) { this.w=w; this.h=h; this.d=d; }
    int volume() { return w * h * d; }
}
public class Main {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box(3, 4, 5);
        System.out.println("Volume 1: " + b1.volume());
        System.out.println("Volume 2: " + b2.volume());
    }
}`,
            explanation: "A class can have multiple constructors as long as their parameter lists are different. Java chooses the correct one based on the arguments provided during object creation."
        },
        {
            id: "java-s6-q12",
            title: "super & this keyword example",
            description: "Demonstrate `super` and `this`.",
            statement: "`this` refers to the current object. `super` refers to the parent class object.",
            inputFormat: "No input.",
            outputFormat: "Dog is eating.\nAnimal is eating.",
            testCases: [{ input: "", output: "Dog is eating.\nAnimal is eating." }],
            solution: `class Animal { void eat() { System.out.println("Animal is eating."); } }
class Dog extends Animal {
    void eat() { System.out.println("Dog is eating."); }
    void work() {
        this.eat(); // Calls current class's eat()
        super.eat(); // Calls parent class's eat()
    }
}
public class Main {
    public static void main(String[] args) { new Dog().work(); }
}`,
            explanation: "`this.eat()` calls the `eat` method of the `Dog` class. `super.eat()` explicitly calls the `eat` method from the parent `Animal` class."
        },
        {
            id: "java-s6-q13",
            title: "Final Class & Final Method Example",
            description: "Use the `final` keyword.",
            statement: "A `final` class cannot be inherited. A `final` method cannot be overridden.",
            inputFormat: "No input.",
            outputFormat: "Code demonstrates the concept; compile error if violated.",
            testCases: [{ input: "", output: "" }],
            solution: `final class Parent { // Cannot be inherited
    public final void show() { // Cannot be overridden
        System.out.println("This is a final method.");
    }
}
// class Child extends Parent {} // This would cause a compile error.
public class Main {
    public static void main(String[] args) {
        new Parent().show();
    }
}`,
            explanation: "The `final` keyword is used to restrict the user. It can be applied to variables (constants), methods (cannot be overridden), and classes (cannot be inherited)."
        },
        {
            id: "java-s6-q14",
            title: "Upcasting and Downcasting",
            description: "Demonstrate casting between parent and child classes.",
            statement: "Show upcasting (child to parent) and downcasting (parent to child).",
            inputFormat: "No input.",
            outputFormat: "Dog is barking.",
            testCases: [{ input: "", output: "Dog is barking." }],
            solution: `class Animal {}
class Dog extends Animal { void bark() { System.out.println("Dog is barking."); } }
public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        // Upcasting (implicit and safe)
        Animal a = d; 
        
        // Downcasting (explicit and must be checked)
        if (a instanceof Dog) {
            Dog d2 = (Dog) a;
            d2.bark();
        }
    }
}`,
            explanation: "Upcasting (assigning a child object to a parent reference) is always safe. Downcasting (casting a parent reference back to a child type) is risky and must be checked with `instanceof` to avoid a `ClassCastException`."
        },
        {
            id: "java-s6-q15",
            title: "Use of toString() Method",
            description: "Override the `toString()` method for a custom object.",
            statement: "Create a `Student` class and override `toString()` to provide a meaningful string representation.",
            inputFormat: "No input.",
            outputFormat: "Student{name='John', rollNo=1}",
            testCases: [{ input: "", output: "Student{name='John', rollNo=1}" }],
            solution: `class Student {
    String name; int rollNo;
    Student(String n, int r) { this.name = n; this.rollNo = r; }
    @Override
    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo + "}";
    }
}
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("John", 1);
        System.out.println(s1); // Automatically calls toString()
    }
}`,
            explanation: "By default, printing an object prints its class name and hash code. By overriding the `toString()` method from the `Object` class, you can define a custom, human-readable string representation for your objects."
        }
      ]
  }
];
