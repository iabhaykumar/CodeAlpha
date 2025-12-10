import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_7: ProblemCategory[] = [
  {
    category: "7.0 Static Members (C++)",
    problems: [
      {
        id: "oop-cpp-7-1",
        title: "Class instance counter using static variable",
        description: "Count object creations.",
        statement: "Use a `static` member variable to count how many objects of a class are currently active. The constructor should increment the count, and the destructor should decrement it.",
        inputFormat: "No input.",
        outputFormat: "The number of active objects at different points.",
        testCases: [{ input: "", output: "Active Objects: 1\nActive Objects: 2\nActive Objects: 1\nActive Objects: 0" }],
        solution: `#include <iostream>

class Widget {
public:
    static int count; // Declaration of static member

    Widget() {
        count++;
        std::cout << "Active Objects: " << count << std::endl;
    }
    ~Widget() {
        count--;
        std::cout << "Active Objects: " << count << std::endl;
    }
};

// Definition and initialization of static member
int Widget::count = 0;

void createWidget() {
    Widget w2;
}

int main() {
    Widget w1;
    createWidget();
    return 0;
}`,
        explanation: "A `static` member variable is shared by all instances of a class. There is only one copy of it. It must be declared inside the class and defined (and initialized) outside the class. We increment this shared counter in the constructor and decrement it in the destructor to keep track of the number of live objects."
      },
      {
        id: "oop-cpp-7-2",
        title: "Static calculator utility",
        description: "Create a utility class with static methods.",
        statement: "Create a `MathUtils` class that acts as a utility library. It should have static methods like `add(a, b)`, `subtract(a, b)`, and `PI()`. These methods should be callable without creating an object of the class.",
        inputFormat: "No input.",
        outputFormat: "Results from calling the static methods.",
        testCases: [{ input: "", output: "Sum: 8\nPI: 3.14159" }],
        solution: `#include <iostream>

class MathUtils {
public:
    // Static methods don't operate on a specific object instance.
    static int add(int a, int b) {
        return a + b;
    }
    static int subtract(int a, int b) {
        return a - b;
    }
    static double PI() {
        return 3.14159;
    }
};

int main() {
    // Call static methods using the class name and scope resolution operator ::
    int sum = MathUtils::add(5, 3);
    std::cout << "Sum: " << sum << std::endl;
    std::cout << "PI: " << MathUtils::PI() << std::endl;
    return 0;
}`,
        explanation: "A `static` method belongs to the class itself, not to any specific object. It cannot access non-static member variables (like `this->some_var`). They are perfect for creating utility or helper functions that are logically grouped within a class but don't need an object's state."
      },
      {
        id: "oop-cpp-7-3",
        title: "Static member initialization",
        description: "Initialize static members.",
        statement: "Demonstrate how to initialize a `static const int` inside a class (C++11 and later) and a regular `static int` outside the class.",
        inputFormat: "No input.",
        outputFormat: "The values of the static members.",
        testCases: [{ input: "", output: "VERSION: 1\nCOUNTER: 100" }],
        solution: `#include <iostream>

class Config {
public:
    // C++11 onwards allows in-class initialization for static const integral types
    static const int VERSION = 1;
    
    // Regular static members must be defined outside the class
    static int COUNTER;
};

// Definition and initialization outside the class
int Config::COUNTER = 100;

int main() {
    std::cout << "VERSION: " << Config::VERSION << std::endl;
    std::cout << "COUNTER: " << Config::COUNTER << std::endl;
    return 0;
}`,
        explanation: "Static members must have a single definition in a source file, which is where they are allocated memory. While `static const int` (and other integral types) can be initialized directly in the class definition as a convenience, all other static members must be defined in one `.cpp` file."
      },
      {
        id: "oop-cpp-7-4",
        title: "Final class demo",
        description: "Using `final` specifier for classes.",
        statement: "Demonstrate the use of the `final` specifier to prevent a class from being inherited.",
        inputFormat: "No input.",
        outputFormat: "This code will produce a compile-time error if the commented-out line is enabled.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>

// The 'final' keyword prevents this class from being used as a base class.
class Base final {
public:
    void show() { std::cout << "I am final!" << std::endl; }
};

// class Derived : public Base {}; // This would cause a compile-time error.

int main() {
    Base b;
    b.show();
    return 0;
}`,
        explanation: "The `final` specifier, when used on a class, indicates that it cannot be derived from. This is useful for design reasons, for example, to ensure that a class's behavior cannot be altered through inheritance, or for performance optimizations as the compiler knows no virtual functions will be overridden."
      },
      {
        id: "oop-cpp-7-5",
        title: "Final method restriction demo",
        description: "Using `final` specifier for methods.",
        statement: "Demonstrate the use of the `final` specifier on a virtual method to prevent it from being overridden in further derived classes.",
        inputFormat: "No input.",
        outputFormat: "This code will produce a compile-time error if the commented-out section is enabled.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>

class Base {
public:
    virtual void doSomething() { std::cout << "Base action" << std::endl; }
};

class Derived : public Base {
public:
    // 'final' here prevents any class inheriting from Derived from overriding doSomething()
    void doSomething() final override {
        std::cout << "Derived action (final)" << std::endl;
    }
};

/*
class GrandChild : public Derived {
public:
    // This would cause a compile-time error because doSomething is final in Derived.
    void doSomething() override {
        std::cout << "GrandChild action" << std::endl;
    }
};
*/

int main() {
    Derived d;
    d.doSomething();
    return 0;
}`,
        explanation: "The `final` specifier on a `virtual` function prevents it from being overridden in any further derived classes. This is useful when you want to allow a class to be extended, but want to lock down the behavior of a specific method."
      },
      {
        id: "oop-cpp-7-6",
        title: "Static employee ID generator",
        description: "Generate unique IDs using a static counter.",
        statement: "Create an `Employee` class. Each time a new employee object is created, it should be assigned a unique, sequential ID. Use a static member to track the next available ID.",
        inputFormat: "No input.",
        outputFormat: "The unique IDs of three created employees.",
        testCases: [{ input: "", output: "ID: 1001\nID: 1002\nID: 1003" }],
        solution: `#include <iostream>

class Employee {
private:
    static int next_id;
    int id;
public:
    Employee() {
        id = next_id++;
    }
    void displayId() {
        std::cout << "ID: " << id << std::endl;
    }
};

int Employee::next_id = 1001;

int main() {
    Employee e1, e2, e3;
    e1.displayId();
    e2.displayId();
    e3.displayId();
    return 0;
}`,
        explanation: "A `static` member `next_id` is used to hold the next ID to be assigned. Since it's shared by all objects, each time the constructor is called, it assigns the current value of `next_id` to the new object's personal `id` and then increments the static counter for the next object."
      },
      {
        id: "oop-cpp-7-7",
        title: "Global settings class using static",
        description: "Manage global settings with a static class.",
        statement: "Create a `Settings` class to manage global application settings. It should have only static members and methods, making it a utility class that doesn't need to be instantiated.",
        inputFormat: "No input.",
        outputFormat: "The initial and updated logging status.",
        testCases: [{ input: "", output: "Logging enabled: Yes\nLogging enabled: No" }],
        solution: `#include <iostream>

class Settings {
public:
    static bool loggingEnabled;

    static void enableLogging() {
        loggingEnabled = true;
    }

    static void disableLogging() {
        loggingEnabled = false;
    }

    static void displayStatus() {
        std::cout << "Logging enabled: " << (loggingEnabled ? "Yes" : "No") << std::endl;
    }
};

bool Settings::loggingEnabled = true;

int main() {
    Settings::displayStatus();
    Settings::disableLogging();
    Settings::displayStatus();
    return 0;
}`,
        explanation: "A class with only static members can be used as a namespace to group related global data and functions. Since all members are `static`, they can be accessed directly using the class name (e.g., `Settings::disableLogging()`) without creating an object of the `Settings` class."
      }
    ]
  }
];
