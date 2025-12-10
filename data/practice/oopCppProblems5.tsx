import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_5: ProblemCategory[] = [
  {
    category: "5.0 Polymorphism",
    problems: [
      {
        id: "oop-cpp-5-1",
        title: "Function overloading demo",
        description: "Compile-time polymorphism.",
        statement: "Demonstrate function overloading by creating two functions with the same name `add`, one that takes two integers and another that takes two doubles.",
        inputFormat: "No input.",
        outputFormat: "Results from both integer and double addition.",
        testCases: [{ input: "", output: "Int sum: 8\nDouble sum: 8.8" }],
        solution: `#include <iostream>

void add(int a, int b) {
    std::cout << "Int sum: " << a + b << std::endl;
}

void add(double a, double b) {
    std::cout << "Double sum: " << a + b << std::endl;
}

int main() {
    add(5, 3);       // Calls the integer version
    add(5.5, 3.3);   // Calls the double version
    return 0;
}`,
        explanation: "Function overloading is a form of **compile-time polymorphism**. The compiler decides which function to call based on the number and types of arguments provided. This allows you to create functions with the same name that perform similar operations on different data types."
      },
      {
        id: "oop-cpp-5-2",
        title: "Operator overloading (+) for complex numbers",
        description: "Custom operator behavior.",
        statement: "Create a `Complex` number class. Overload the `+` operator to perform complex number addition.",
        inputFormat: "No input.",
        outputFormat: "The result of adding two complex numbers.",
        testCases: [{ input: "", output: "Sum: 8 + 11i" }],
        solution: `#include <iostream>

class Complex {
public:
    float real, imag;

    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overload the + operator
    Complex operator+(const Complex& obj) {
        Complex res;
        res.real = real + obj.real;
        res.imag = imag + obj.imag;
        return res;
    }

    void display() {
        std::cout << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    Complex c1(3, 4), c2(5, 7);
    Complex c3 = c1 + c2; // Calls the overloaded operator+
    std::cout << "Sum: ";
    c3.display();
    return 0;
}`,
        explanation: "Operator overloading allows you to define the behavior of operators for your custom classes. We define a member function `operator+` that takes another `Complex` object and returns a new `Complex` object representing the sum. This lets us use the `+` symbol naturally with our objects."
      },
      {
        id: "oop-cpp-5-3",
        title: "Operator overloading (==) for objects",
        description: "Define object equality.",
        statement: "Create a `Point` class. Overload the `==` operator to check if two `Point` objects have the same coordinates.",
        inputFormat: "No input.",
        outputFormat: "Result of equality checks.",
        testCases: [{ input: "", output: "p1 and p2 are equal: No\np1 and p3 are equal: Yes" }],
        solution: `#include <iostream>

class Point {
public:
    int x, y;
    Point(int x = 0, int y = 0) : x(x), y(y) {}

    // Overload the == operator
    bool operator==(const Point& obj) {
        return (x == obj.x && y == obj.y);
    }
};

int main() {
    Point p1(1, 2), p2(3, 4), p3(1, 2);
    std::cout << "p1 and p2 are equal: " << (p1 == p2 ? "Yes" : "No") << std::endl;
    std::cout << "p1 and p3 are equal: " << (p1 == p3 ? "Yes" : "No") << std::endl;
    return 0;
}`,
        explanation: "By default, the `==` operator for objects compares their memory addresses. By overloading `operator==`, we can define what 'equality' means for our class. In this case, two `Point` objects are equal if their `x` and `y` coordinates are the same."
      },
      {
        id: "oop-cpp-5-4",
        title: "Function overriding demo",
        description: "Runtime polymorphism.",
        statement: "Create a base class `Animal` with a method `speak()`. Create a derived class `Dog` that inherits and overrides the `speak()` method.",
        inputFormat: "No input.",
        outputFormat: "Messages from both base and derived class methods.",
        testCases: [{ input: "", output: "Animal makes a sound.\nDog barks." }],
        solution: `#include <iostream>

class Animal {
public:
    void speak() {
        std::cout << "Animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    // This method overrides the base class method
    void speak() {
        std::cout << "Dog barks." << std::endl;
    }
};

int main() {
    Animal a;
    Dog d;
    a.speak();
    d.speak();
    return 0;
}`,
        explanation: "Function overriding occurs when a derived class provides a specific implementation for a method that is already defined in its base class. When `speak()` is called on a `Dog` object, its own version is executed, 'hiding' the parent's version."
      },
      {
        id: "oop-cpp-5-5",
        title: "Runtime polymorphism (virtual function)",
        description: "Using virtual functions.",
        statement: "Demonstrate runtime polymorphism. Create a base class `Shape` with a `virtual` `draw()` method. Create derived classes `Circle` and `Square`. Create a base class pointer that points to derived class objects and call `draw()`.",
        inputFormat: "No input.",
        outputFormat: "Drawing a Circle.\nDrawing a Square.",
        testCases: [{ input: "", output: "Drawing a Circle.\nDrawing a Square." }],
        solution: `#include <iostream>

class Shape {
public:
    virtual void draw() {
        std::cout << "Drawing a shape." << std::endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a Circle." << std::endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a Square." << std::endl;
    }
};

int main() {
    Shape* shape_ptr;
    Circle circle_obj;
    Square square_obj;

    shape_ptr = &circle_obj;
    shape_ptr->draw(); // Calls Circle's draw()

    shape_ptr = &square_obj;
    shape_ptr->draw(); // Calls Square's draw()

    return 0;
}`,
        explanation: "**Runtime polymorphism** is achieved using **virtual functions**. When a base class pointer holds the address of a derived class object, calling a `virtual` function through that pointer will execute the derived class's version of the function. The decision is made at runtime based on the actual type of the object being pointed to."
      },
      {
        id: "oop-cpp-5-6",
        title: "Virtual destructor demo",
        description: "Demonstrate need for virtual destructor.",
        statement: "Show what happens when a derived class object is deleted through a base class pointer without a virtual destructor (memory leak), and then show how a virtual destructor fixes it.",
        inputFormat: "No input.",
        outputFormat: "Messages showing correct destructor order.",
        testCases: [{ input: "", output: "Derived Destructor\nBase Destructor" }],
        solution: `#include <iostream>

class Base {
public:
    Base() { std::cout << "Base Constructor\\n"; }
    // Make the destructor virtual!
    virtual ~Base() { std::cout << "Base Destructor\\n"; }
};

class Derived : public Base {
public:
    Derived() { std::cout << "Derived Constructor\\n"; }
    ~Derived() { std::cout << "Derived Destructor\\n"; }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // Without virtual destructor, only Base's destructor would be called.
    return 0;
}`,
        explanation: "If you `delete` a derived class object using a pointer to its base class, and the base class destructor is not `virtual`, only the base class destructor is called. This can lead to resource leaks. Making the base class destructor `virtual` ensures that when `delete` is called on the base pointer, the derived class's destructor is called first, followed by the base class's destructor, ensuring proper cleanup."
      },
      {
        id: "oop-cpp-5-7",
        title: "Overloading [] operator (array class)",
        description: "Custom array access.",
        statement: "Create a simple `Array` class that wraps an integer array. Overload the `[]` operator to provide array-like access to its elements, including bounds checking.",
        inputFormat: "No input.",
        outputFormat: "Accessing elements and handling an out-of-bounds error.",
        testCases: [{ input: "", output: "arr[1] = 20\nError: Index out of bounds!" }],
        solution: `#include <iostream>
#include <stdexcept>

class Array {
private:
    int* arr;
    int size;
public:
    Array(int s) : size(s) { arr = new int[s](); }
    ~Array() { delete[] arr; }

    int& operator[](int index) {
        if (index >= size || index < 0) {
            throw std::out_of_range("Index out of bounds!");
        }
        return arr[index];
    }
};

int main() {
    Array arr(5);
    arr[1] = 20;
    std::cout << "arr[1] = " << arr[1] << std::endl;
    try {
        arr[10] = 50;
    } catch (const std::out_of_range& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: "Overloading `operator[]` allows an object to be used with array-like syntax. We return a reference (`int&`) to allow both reading (`cout << arr[1]`) and writing (`arr[1] = 20`). This also allows us to add custom logic, like the bounds checking that a raw C++ array does not provide."
      },
      {
        id: "oop-cpp-5-8",
        title: "Overloading << and >> operator",
        description: "Custom stream insertion/extraction.",
        statement: "Overload the stream insertion (`<<`) and stream extraction (`>>`) operators for a `Point` class to allow for easy input and output.",
        inputFormat: "No input for demonstration, but would take '10 20' for `cin`.",
        outputFormat: "The point object printed in a custom format.",
        testCases: [{ input: "", output: "Point is: (10, 20)" }],
        solution: `#include <iostream>

class Point {
public:
    int x, y;
    Point(int x=0, int y=0) : x(x), y(y) {}
};

// Overload << operator
std::ostream& operator<<(std::ostream &out, const Point &p) {
    out << "(" << p.x << ", " << p.y << ")";
    return out;
}

// Overload >> operator
std::istream& operator>>(std::istream &in, Point &p) {
    in >> p.x >> p.y;
    return in;
}

int main() {
    Point p1(10, 20);
    std::cout << "Point is: " << p1 << std::endl;
    // std::cin >> p1; // Would read two numbers into p1.x and p1.y
    return 0;
}`,
        explanation: "Stream operators must be overloaded as non-member functions because the left-hand operand is an ostream/istream object, not our class. They take a reference to the stream and a reference to our object. They must return a reference to the stream to allow for chaining (e.g., `cout << p1 << p2`)."
      },
      {
        id: "oop-cpp-5-9",
        title: "ATM polymorphism – different account types",
        description: "Handle different account types uniformly.",
        statement: "Create an abstract `Account` base class with a `virtual` `withdraw()` method. Derive `SavingsAccount` and `CurrentAccount`. `SavingsAccount` cannot have a negative balance, while `CurrentAccount` can (up to an overdraft limit). Demonstrate polymorphism by processing withdrawals for both account types using a base class pointer.",
        inputFormat: "No input.",
        outputFormat: "Transaction results for both account types.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>

class Account {
public:
    virtual void withdraw(double amount) = 0;
    virtual ~Account() {}
};

class SavingsAccount : public Account {
    // ... balance member and constructor ...
public:
    void withdraw(double amount) override {
        // if (balance >= amount) ...
        std::cout << "Savings withdrawal." << std::endl;
    }
};

class CurrentAccount : public Account {
    // ... balance and overdraft members ...
public:
    void withdraw(double amount) override {
        // if (balance + overdraftLimit >= amount) ...
        std::cout << "Current Account withdrawal." << std::endl;
    }
};

void processTransaction(Account* acc, double amount) {
    acc->withdraw(amount);
}

int main() {
    SavingsAccount sa;
    CurrentAccount ca;
    processTransaction(&sa, 100);
    processTransaction(&ca, 500);
    return 0;
}`,
        explanation: "The `processTransaction` function can work with any object that is an `Account` (or a subclass of it). It doesn't need to know the specific type. When `acc->withdraw(amount)` is called, C++ uses the virtual function mechanism to determine at runtime whether to call the `SavingsAccount` version or the `CurrentAccount` version, demonstrating runtime polymorphism."
      },
      {
        id: "oop-cpp-5-10",
        title: "Shape polymorphism using pointers",
        description: "Using base class pointers.",
        statement: "This is a duplicate of the 'Runtime polymorphism (virtual function)' problem, which already uses `Shape` pointers to demonstrate the concept. See problem 5-5.",
        inputFormat: "No input.",
        outputFormat: "Drawing a Circle.\nDrawing a Square.",
        testCases: [{ input: "", output: "Drawing a Circle.\nDrawing a Square." }],
        solution: `// See solution for "Runtime polymorphism (virtual function)" (ID oop-cpp-5-5).
// The key is to have an array or vector of base class pointers,
// e.g., std::vector<Shape*>, and then loop through it calling the
// virtual 'draw' method on each element.`,
        explanation: "Using a collection of base class pointers (`Shape*`) is a powerful application of polymorphism. It allows you to manage a heterogeneous list of objects (circles, squares, triangles) and process them uniformly. A single loop can call `shape->draw()` on every element, and the correct `draw()` method for each specific shape will be executed at runtime."
      }
    ]
  }
];
