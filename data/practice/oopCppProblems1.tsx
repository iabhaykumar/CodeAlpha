import React from 'react';
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_1: ProblemCategory[] = [
  {
    category: "1.0 Classes & Objects",
    problems: [
      {
        id: "oop-cpp-1-1",
        title: "Create Student class",
        description: "Create a Student class with basic attributes.",
        statement: "Define a class `Student` with three public member variables: `name` (string), `roll` (int), and `marks` (float). Create an object of this class, set its values, and print them.",
        inputFormat: "No input.",
        outputFormat: "The student's details printed on separate lines.",
        testCases: [{ input: "", output: "Name: Alex\nRoll No: 101\nMarks: 88.5" }],
        solution: `#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int roll;
    float marks;
};

int main() {
    Student s1;
    s1.name = "Alex";
    s1.roll = 101;
    s1.marks = 88.5;

    std::cout << "Name: " << s1.name << std::endl;
    std::cout << "Roll No: " << s1.roll << std::endl;
    std::cout << "Marks: " << s1.marks << std::endl;

    return 0;
}`,
        explanation: "A `class` is a blueprint for creating objects. Here, `Student` is the blueprint. `s1` is an object (an instance) of the `Student` class. We use the dot operator (`.`) to access the public members of the object."
      },
      {
        id: "oop-cpp-1-2",
        title: "Create Employee class",
        description: "Model an employee with salary details.",
        statement: "Define an `Employee` class with public members `salary` (float) and `bonus` (float). Create a public method `calculateTotalSalary()` that returns the sum of salary and bonus. Create an object and print its total salary.",
        inputFormat: "No input.",
        outputFormat: "The total salary.",
        testCases: [{ input: "", output: "Total Salary: 55000" }],
        solution: `#include <iostream>

class Employee {
public:
    float salary;
    float bonus;

    float calculateTotalSalary() {
        return salary + bonus;
    }
};

int main() {
    Employee e1;
    e1.salary = 50000;
    e1.bonus = 5000;

    std::cout << "Total Salary: " << e1.calculateTotalSalary() << std::endl;

    return 0;
}`,
        explanation: "A class can contain both data (attributes like `salary`) and functions that operate on that data (methods like `calculateTotalSalary`). Methods are functions that belong to a class."
      },
      {
        id: "oop-cpp-1-3",
        title: "Create Car class",
        description: "Model a car with basic behaviors.",
        statement: "Define a `Car` class with methods `start()`, `stop()`, and `changeGear()`. Each method should print a message indicating the action. Create an object and call these methods.",
        inputFormat: "No input.",
        outputFormat: "Messages from each method call.",
        testCases: [{ input: "", output: "Car started.\nGear changed to 3.\nCar stopped." }],
        solution: `#include <iostream>

class Car {
public:
    void start() {
        std::cout << "Car started." << std::endl;
    }
    void stop() {
        std::cout << "Car stopped." << std::endl;
    }
    void changeGear(int gear) {
        std::cout << "Gear changed to " << gear << "." << std::endl;
    }
};

int main() {
    Car myCar;
    myCar.start();
    myCar.changeGear(3);
    myCar.stop();

    return 0;
}`,
        explanation: "This example focuses on the behavioral aspect of objects. The `Car` class defines actions (methods) that a car object can perform. The `changeGear` method also demonstrates how to pass parameters to a method."
      },
      {
        id: "oop-cpp-1-4",
        title: "Create BankAccount",
        description: "Model a bank account with transactions.",
        statement: "Define a `BankAccount` class with a private member `balance`. Include public methods `deposit(amount)` and `withdraw(amount)`. The `withdraw` method should check for sufficient funds. Also include a `getBalance()` method.",
        inputFormat: "No input.",
        outputFormat: "The final balance and any error messages.",
        testCases: [{ input: "", output: "Insufficient funds!\nFinal Balance: 1300" }],
        solution: `#include <iostream>

class BankAccount {
private:
    double balance;

public:
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            std::cout << "Insufficient funds!" << std::endl;
        }
    }

    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount myAccount(1000);
    myAccount.deposit(500);
    myAccount.withdraw(200);
    myAccount.withdraw(1500); // This will fail
    std::cout << "Final Balance: " << myAccount.getBalance() << std::endl;

    return 0;
}`,
        explanation: "This introduces the concept of **encapsulation**. The `balance` is `private`, meaning it cannot be accessed directly from outside the class. This protects the data. Public methods provide a controlled interface, allowing for validation (e.g., checking for sufficient funds before withdrawal)."
      },
      {
        id: "oop-cpp-1-5",
        title: "Create Rectangle class",
        description: "Calculate geometric properties.",
        statement: "Define a `Rectangle` class with `length` and `width`. Include methods `area()` and `perimeter()`.",
        inputFormat: "No input.",
        outputFormat: "The area and perimeter.",
        testCases: [{ input: "", output: "Area: 50\nPerimeter: 30" }],
        solution: `#include <iostream>

class Rectangle {
public:
    double length;
    double width;

    double area() {
        return length * width;
    }

    double perimeter() {
        return 2 * (length + width);
    }
};

int main() {
    Rectangle r1;
    r1.length = 10;
    r1.width = 5;

    std::cout << "Area: " << r1.area() << std::endl;
    std::cout << "Perimeter: " << r1.perimeter() << std::endl;

    return 0;
}`,
        explanation: "The `Rectangle` class bundles data (length, width) and related operations (area, perimeter) together. The methods use the object's own data members to perform calculations."
      },
      {
        id: "oop-cpp-1-6",
        title: "Create Circle class",
        description: "Calculate geometric properties.",
        statement: "Define a `Circle` class with `radius`. Include methods `area()` and `circumference()`.",
        inputFormat: "No input.",
        outputFormat: "The area and circumference.",
        testCases: [{ input: "", output: "Area: 78.5397\nCircumference: 31.4159" }],
        solution: `#include <iostream>
#include <cmath>

class Circle {
public:
    double radius;
    const double PI = 3.14159;

    double area() {
        return PI * radius * radius;
    }

    double circumference() {
        return 2 * PI * radius;
    }
};

int main() {
    Circle c1;
    c1.radius = 5;

    std::cout << "Area: " << c1.area() << std::endl;
    std::cout << "Circumference: " << c1.circumference() << std::endl;

    return 0;
}`,
        explanation: "Similar to the Rectangle class, this class encapsulates the properties and behaviors of a circle. It also shows how a constant like PI can be a member of a class."
      },
      {
        id: "oop-cpp-1-7",
        title: "Create Book class",
        description: "Model a book for an inventory.",
        statement: "Define a `Book` class with members `title`, `author`, and `price`. Create a method `display()` to print the book's details.",
        inputFormat: "No input.",
        outputFormat: "The book's details.",
        testCases: [{ input: "", output: "Title: 1984, Author: George Orwell, Price: 15.99" }],
        solution: `#include <iostream>
#include <string>

class Book {
public:
    std::string title;
    std::string author;
    float price;

    void display() {
        std::cout << "Title: " << title << ", Author: " << author << ", Price: " << price << std::endl;
    }
};

int main() {
    Book b1;
    b1.title = "1984";
    b1.author = "George Orwell";
    b1.price = 15.99;
    b1.display();

    return 0;
}`,
        explanation: "This is another example of modeling a real-world entity. The `Book` class groups all relevant information about a book, and the `display` method provides a consistent way to format and show that information."
      },
      {
        id: "oop-cpp-1-8",
        title: "Create Laptop class",
        description: "Model a laptop with specifications.",
        statement: "Define a `Laptop` class with private members `RAM` (int, in GB) and `storage` (int, in GB). Provide a public method `displaySpecs()` to print them.",
        inputFormat: "No input.",
        outputFormat: "The laptop's specifications.",
        testCases: [{ input: "", output: "RAM: 16 GB, Storage: 512 GB" }],
        solution: `#include <iostream>

class Laptop {
private:
    int RAM;
    int storage;

public:
    Laptop(int r, int s) {
        RAM = r;
        storage = s;
    }

    void displaySpecs() {
        std::cout << "RAM: " << RAM << " GB, Storage: " << storage << " GB" << std::endl;
    }
};

int main() {
    Laptop myLaptop(16, 512);
    myLaptop.displaySpecs();

    return 0;
}`,
        explanation: "The `Laptop` class uses a **constructor** (`Laptop(int r, int s)`) to initialize its private members. A constructor is a special method that is automatically called when an object is created. This ensures that a `Laptop` object is always created with valid initial specifications."
      },
      {
        id: "oop-cpp-1-9",
        title: "Create Product class (GST)",
        description: "Calculate net price from a base price and GST.",
        statement: "Define a `Product` class with `basePrice` and `gstRate`. Create a method `getNetPrice()` that calculates and returns the final price (basePrice + basePrice * gstRate / 100).",
        inputFormat: "No input.",
        outputFormat: "The net price.",
        testCases: [{ input: "", output: "Net Price: 118" }],
        solution: `#include <iostream>

class Product {
public:
    double basePrice;
    double gstRate; // in percent

    double getNetPrice() {
        return basePrice + (basePrice * gstRate / 100);
    }
};

int main() {
    Product p;
    p.basePrice = 100;
    p.gstRate = 18;
    std::cout << "Net Price: " << p.getNetPrice() << std::endl;

    return 0;
}`,
        explanation: "This example shows how methods can encapsulate business logic. The `getNetPrice` method contains the formula for calculating the final price, hiding the calculation details from the user of the class."
      },
      {
        id: "oop-cpp-1-10",
        title: "Create Time class (add times)",
        description: "Add two time objects, handling carry-overs.",
        statement: "Define a `Time` class with `hours` and `minutes`. Create a method `addTime(Time t2)` that adds another `Time` object to the current one and correctly handles the minutes carrying over to hours.",
        inputFormat: "No input.",
        outputFormat: "The sum of the two times.",
        testCases: [{ input: "", output: "Total time: 4 hours and 10 minutes" }],
        solution: `#include <iostream>

class Time {
public:
    int hours;
    int minutes;

    void addTime(Time t2) {
        this->minutes += t2.minutes;
        this->hours += t2.hours;
        
        if (this->minutes >= 60) {
            this->hours += this->minutes / 60;
            this->minutes = this->minutes % 60;
        }
    }
};

int main() {
    Time t1;
    t1.hours = 2;
    t1.minutes = 40;
    
    Time t2;
    t2.hours = 1;
    t2.minutes = 30;

    t1.addTime(t2); // t1 becomes the sum

    std::cout << "Total time: " << t1.hours << " hours and " << t1.minutes << " minutes" << std::endl;
    return 0;
}`,
        explanation: "The `addTime` method demonstrates object interaction. It modifies its own state (`this->minutes`, `this->hours`) based on the state of another object of the same class. It also includes the logic for handling carry-overs, where excess minutes are converted into hours."
      },
      {
        id: "oop-cpp-1-11",
        title: "Create Complex number class",
        description: "Perform arithmetic on complex numbers.",
        statement: "Define a `Complex` class with `real` and `imag` parts. Create methods `add(Complex c2)` and `subtract(Complex c2)`.",
        inputFormat: "No input.",
        outputFormat: "Results of addition and subtraction.",
        testCases: [{ input: "", output: "Sum: 8 + 11i\nDiff: -2 + -3i" }],
        solution: `#include <iostream>

class Complex {
public:
    float real, imag;

    Complex add(Complex c2) {
        Complex temp;
        temp.real = this->real + c2.real;
        temp.imag = this->imag + c2.imag;
        return temp;
    }
    
    Complex subtract(Complex c2) {
        Complex temp;
        temp.real = this->real - c2.real;
        temp.imag = this->imag - c2.imag;
        return temp;
    }

    void display() {
        std::cout << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    Complex c1, c2, sum, diff;
    c1.real = 3; c1.imag = 4;
    c2.real = 5; c2.imag = 7;
    
    sum = c1.add(c2);
    diff = c1.subtract(c2);

    std::cout << "Sum: "; sum.display();
    std::cout << "Diff: "; diff.display();

    return 0;
}`,
        explanation: "This demonstrates methods that return new objects. The `add` method doesn't modify the current object (`c1`); instead, it creates and returns a new `Complex` object `temp` that represents the sum."
      },
      {
        id: "oop-cpp-1-12",
        title: "Create Fraction class",
        description: "Perform arithmetic on fractions.",
        statement: "Define a `Fraction` class with `numerator` and `denominator`. Create an `add(Fraction f2)` method. The addition formula is (n1*d2 + n2*d1) / (d1*d2). Also create a `simplify()` method using GCD.",
        inputFormat: "No input.",
        outputFormat: "The simplified sum of two fractions.",
        testCases: [{ input: "", output: "Sum: 7/6" }],
        solution: `#include <iostream>
#include <numeric> // For std::gcd in C++17

class Fraction {
public:
    int num, den;

    void simplify() {
        int common = std::gcd(num, den);
        num /= common;
        den /= common;
    }

    Fraction add(Fraction f2) {
        Fraction result;
        result.num = this->num * f2.den + f2.num * this->den;
        result.den = this->den * f2.den;
        result.simplify();
        return result;
    }
};

int main() {
    Fraction f1, f2, res;
    f1.num = 1; f1.den = 2;
    f2.num = 2; f2.den = 3;
    
    res = f1.add(f2);
    
    std::cout << "Sum: " << res.num << "/" << res.den << std::endl;

    return 0;
}`,
        explanation: "The `Fraction` class encapsulates the logic for fraction arithmetic. The `add` method implements the cross-multiplication formula. An important part is the `simplify` method, which uses the Greatest Common Divisor (GCD) to reduce the fraction to its simplest form."
      },
      {
        id: "oop-cpp-1-13",
        title: "Create Temperature class",
        description: "Convert between Celsius and Fahrenheit.",
        statement: "Define a `Temperature` class that can store a temperature value in Celsius. Provide methods `getFahrenheit()` and `setFahrenheit(tempF)`. The class should always store the value internally as Celsius.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of conversions.",
        testCases: [{ input: "", output: "Celsius: 100, Fahrenheit: 212\nAfter setting F to 32, C is: 0" }],
        solution: `#include <iostream>

class Temperature {
private:
    double celsius;
public:
    Temperature(double c) { celsius = c; }
    
    double getCelsius() { return celsius; }
    void setCelsius(double c) { celsius = c; }

    double getFahrenheit() {
        return (celsius * 9.0/5.0) + 32;
    }

    void setFahrenheit(double f) {
        celsius = (f - 32) * 5.0/9.0;
    }
};

int main() {
    Temperature temp(100);
    std::cout << "Celsius: " << temp.getCelsius() << ", Fahrenheit: " << temp.getFahrenheit() << std::endl;
    
    temp.setFahrenheit(32);
    std::cout << "After setting F to 32, C is: " << temp.getCelsius() << std::endl;
    
    return 0;
}`,
        explanation: "This is a good example of abstraction. The user of the class can think in terms of either Celsius or Fahrenheit using the getter/setter methods, but the internal representation is always consistently Celsius. The methods handle the conversion logic automatically."
      },
      {
        id: "oop-cpp-1-14",
        title: "Create Currency converter class",
        description: "Convert between different currencies.",
        statement: "Define a `Currency` class that stores an amount in a base currency (e.g., USD). Provide methods to get the amount in other currencies (e.g., `getInEUR()`, `getInINR()`), using fixed conversion rates.",
        inputFormat: "No input.",
        outputFormat: "Converted currency amounts.",
        testCases: [{ input: "", output: "USD: 100, EUR: 92, INR: 8300" }],
        solution: `#include <iostream>

class Currency {
private:
    double amountUSD;
public:
    Currency(double usd) { amountUSD = usd; }

    double getInEUR() { return amountUSD * 0.92; } // 1 USD = 0.92 EUR
    double getInINR() { return amountUSD * 83.0; } // 1 USD = 83 INR
    double getInUSD() { return amountUSD; }
};

int main() {
    Currency wallet(100); // 100 USD
    std::cout << "USD: " << wallet.getInUSD() << ", EUR: " << wallet.getInEUR() << ", INR: " << wallet.getInINR() << std::endl;

    return 0;
}`,
        explanation: "This class abstracts away the conversion rates. It stores the value in a single, canonical format (USD) and provides methods to present that value in different formats on demand. This prevents inconsistencies and centralizes the conversion logic."
      },
      {
        id: "oop-cpp-1-15",
        title: "Create Date class (validate)",
        description: "Validate a date and find the next one.",
        statement: "Define a `Date` class with day, month, year. Create a method `isValid()` that checks if the date is valid (considering months and basic leap years).",
        inputFormat: "No input.",
        outputFormat: "Validation results.",
        testCases: [{ input: "", output: "Date 29/2/2020 is valid: Yes\nDate 31/4/2021 is valid: No" }],
        solution: `#include <iostream>

class Date {
public:
    int day, month, year;

    bool isLeap() {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    bool isValid() {
        if (month < 1 || month > 12) return false;
        if (day < 1) return false;
        
        if (month == 2) {
            return isLeap() ? day <= 29 : day <= 28;
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return day <= 30;
        }
        return day <= 31;
    }
};

int main() {
    Date d1 = {29, 2, 2020};
    Date d2 = {31, 4, 2021};
    std::cout << "Date 29/2/2020 is valid: " << (d1.isValid() ? "Yes" : "No") << std::endl;
    std::cout << "Date 31/4/2021 is valid: " << (d2.isValid() ? "Yes" : "No") << std::endl;

    return 0;
}`,
        explanation: "The `isValid` method encapsulates the complex logic for date validation. It checks the month range, day range, and handles the special cases for months with 30 days and February in a leap year. This makes the code for checking dates much cleaner."
      }
    ]
  }
];