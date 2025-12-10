import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_2: ProblemCategory[] = [
  {
    category: "2.0 Constructors & Destructor",
    problems: [
      {
        id: "oop-cpp-2-1",
        title: "Default constructor demo",
        description: "Demonstrate a default constructor.",
        statement: "Create a class `Cube` with a default constructor that initializes its `side` to 10. The class should have a `volume()` method.",
        inputFormat: "No input.",
        outputFormat: "The volume of the default cube.",
        testCases: [{ input: "", output: "Volume: 1000" }],
        solution: `#include <iostream>

class Cube {
public:
    int side;

    // Default constructor
    Cube() {
        side = 10;
        std::cout << "Default constructor called." << std::endl;
    }

    int volume() {
        return side * side * side;
    }
};

int main() {
    Cube c; // Object created, default constructor is called automatically
    std::cout << "Volume: " << c.volume() << std::endl;
    return 0;
}`,
        explanation: "A default constructor is a constructor that takes no arguments. It's automatically called when an object is created without any arguments. It's useful for setting up default initial values for the object's members."
      },
      {
        id: "oop-cpp-2-2",
        title: "Parameterized constructor demo",
        description: "Demonstrate a constructor with parameters.",
        statement: "Create a class `Car` with members `brand` and `year`. Create a parameterized constructor that takes the brand and year as arguments to initialize the object.",
        inputFormat: "No input.",
        outputFormat: "The details of the created car.",
        testCases: [{ input: "", output: "Car: Ford from 2021" }],
        solution: `#include <iostream>
#include <string>

class Car {
public:
    std::string brand;
    int year;

    // Parameterized constructor
    Car(std::string b, int y) {
        brand = b;
        year = y;
        std::cout << "Parameterized constructor called." << std::endl;
    }

    void display() {
        std::cout << "Car: " << brand << " from " << year << std::endl;
    }
};

int main() {
    Car myCar("Ford", 2021); // Arguments are passed to the constructor
    myCar.display();
    return 0;
}`,
        explanation: "A parameterized constructor allows you to initialize an object with specific values at the time of its creation. This is the most common type of constructor."
      },
      {
        id: "oop-cpp-2-3",
        title: "Copy constructor demo",
        description: "Demonstrate a copy constructor.",
        statement: "Create a class `Point` with members `x` and `y`. Implement a copy constructor that creates a new object by copying values from an existing object. Show that changing the original object does not affect the copied one.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of original and copied objects.",
        testCases: [{ input: "", output: "Original: (10, 20)\nCopied: (10, 20)\nAfter change -> Original: (100, 20)" }],
        solution: `#include <iostream>

class Point {
public:
    int x, y;

    Point(int x1, int y1) { x = x1; y = y1; }

    // Copy constructor
    Point(const Point &p2) {
        x = p2.x;
        y = p2.y;
        std::cout << "Copy constructor called." << std::endl;
    }

    void display() {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }
};

int main() {
    Point p1(10, 20);
    Point p2 = p1; // Copy constructor is called here

    std::cout << "Original: "; p1.display();
    std::cout << "Copied: "; p2.display();
    
    p1.x = 100; // Change original
    std::cout << "After change -> Original: "; p1.display();
    
    return 0;
}`,
        explanation: "A copy constructor is used to initialize a new object from an existing object. The compiler provides a default one, but you can define your own. Its parameter is a constant reference to an object of the same class. It's essential for classes that manage dynamic memory to avoid issues like shallow copies."
      },
      {
        id: "oop-cpp-2-4",
        title: "Constructor overloading",
        description: "Create a class with multiple constructors.",
        statement: "Create a `Box` class with `width`, `height`, and `depth`. Implement three constructors: a default constructor (1x1x1), a constructor for a cube (one argument), and a constructor for a cuboid (three arguments).",
        inputFormat: "No input.",
        outputFormat: "Volumes of the three different boxes.",
        testCases: [{ input: "", output: "Default Box Volume: 1\nCube Volume: 1000\nCuboid Volume: 60" }],
        solution: `#include <iostream>

class Box {
public:
    int width, height, depth;

    // Default
    Box() : width(1), height(1), depth(1) {}

    // Cube
    Box(int side) : width(side), height(side), depth(side) {}

    // Cuboid
    Box(int w, int h, int d) : width(w), height(h), depth(d) {}

    int volume() {
        return width * height * depth;
    }
};

int main() {
    Box b1;
    Box b2(10);
    Box b3(3, 4, 5);
    std::cout << "Default Box Volume: " << b1.volume() << std::endl;
    std::cout << "Cube Volume: " << b2.volume() << std::endl;
    std::cout << "Cuboid Volume: " << b3.volume() << std::endl;
    return 0;
}`,
        explanation: "A class can have multiple constructors as long as they have different parameter lists (different number or types of arguments). This is called constructor overloading. The compiler chooses the correct one to call based on the arguments you provide when creating an object. The code uses member initializer lists (`: width(1), ...`) which is the preferred way to initialize members."
      },
      {
        id: "oop-cpp-2-5",
        title: "Private constructor (singleton)",
        description: "Implement a singleton using a private constructor.",
        statement: "The Singleton Pattern ensures a class has only one instance and provides a global point of access to it. Implement this by making the constructor private and providing a public static method `getInstance()`.",
        inputFormat: "No input.",
        outputFormat: "Messages showing that the same instance is returned.",
        testCases: [{ input: "", output: "New instance created.\nSame instance returned." }],
        solution: `#include <iostream>

class Singleton {
private:
    static Singleton* instance;
    // Private constructor
    Singleton() {
        std::cout << "New instance created." << std::endl;
    }

public:
    static Singleton* getInstance() {
        if (instance == nullptr) {
            instance = new Singleton();
        } else {
            std::cout << "Same instance returned." << std::endl;
        }
        return instance;
    }
};

Singleton* Singleton::instance = nullptr;

int main() {
    Singleton* s1 = Singleton::getInstance();
    Singleton* s2 = Singleton::getInstance();
    return 0;
}`,
        explanation: "By making the constructor `private`, we prevent anyone from creating an instance of the class using `new Singleton()`. The only way to get an instance is through the public `static` method `getInstance()`. This method creates the single instance the first time it's called and returns that same instance on all subsequent calls."
      },
      {
        id: "oop-cpp-2-6",
        title: "Static factory constructor",
        description: "Use a static method to create objects.",
        statement: "Use static factory methods instead of public constructors to create objects. For a `Point` class, create two static methods: `Point::createCartesian(x, y)` and `Point::createPolar(rho, theta)`.",
        inputFormat: "No input.",
        outputFormat: "Points created from different coordinate systems.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <cmath>

class Point {
private:
    double x, y;
    // Private constructor
    Point(double x, double y) : x(x), y(y) {}

public:
    static Point createCartesian(double x, double y) {
        return Point(x, y);
    }

    static Point createPolar(double rho, double theta) {
        return Point(rho * cos(theta), rho * sin(theta));
    }
    
    void display() {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }
};

int main() {
    Point p1 = Point::createCartesian(3, 4);
    Point p2 = Point::createPolar(5, 0.927); // 5 at angle ~53 degrees
    p1.display();
    p2.display();
    return 0;
}`,
        explanation: "Static factory methods are an alternative to constructors. They have names, which can make the code more readable (`createPolar` is clearer than `new Point(5, 0.927)`). They can also return a subtype of the class, or return a cached instance, which a normal constructor cannot do."
      },
      {
        id: "oop-cpp-2-7",
        title: "Destructor demonstration",
        description: "Show when a destructor is called.",
        statement: "Create a class with a constructor and a destructor. Both should print a message. Create an object inside `main` and another one inside a separate function to show when each is destroyed.",
        inputFormat: "No input.",
        outputFormat: "Sequence of constructor and destructor calls.",
        testCases: [{ input: "", output: "Creating m1\nEntering function\nCreating f1\nLeaving function\nDestroying f1\nDestroying m1" }],
        solution: `#include <iostream>
#include <string>

class MyClass {
    std::string id;
public:
    MyClass(std::string name) : id(name) { std::cout << "Creating " << id << std::endl; }
    ~MyClass() { std::cout << "Destroying " << id << std::endl; }
};

void func() {
    std::cout << "Entering function" << std::endl;
    MyClass f1("f1");
    std::cout << "Leaving function" << std::endl;
}

int main() {
    MyClass m1("m1");
    func();
    return 0;
}`,
        explanation: "A destructor (`~ClassName()`) is automatically called when an object goes out of scope. `f1` is destroyed when `func()` ends. `m1` is destroyed when `main()` ends. This automatic cleanup is a key principle of RAII (Resource Acquisition Is Initialization)."
      },
      {
        id: "oop-cpp-2-8",
        title: "Object creation counter",
        description: "Count instances of a class.",
        statement: "Use a `static` member variable to count how many objects of a class are currently active. The constructor should increment the count, and the destructor should decrement it.",
        inputFormat: "No input.",
        outputFormat: "The number of active objects at different points.",
        testCases: [{ input: "", output: "Active: 1\nActive: 2\nActive: 1\nActive: 0" }],
        solution: `#include <iostream>

class Counter {
public:
    static int active_objects;
    Counter() { active_objects++; std::cout << "Active: " << active_objects << std::endl; }
    ~Counter() { active_objects--; std::cout << "Active: " << active_objects << std::endl; }
};

int Counter::active_objects = 0;

void some_scope() {
    Counter c2;
}

int main() {
    Counter c1;
    some_scope();
    return 0;
}`,
        explanation: "A `static` member is shared among all objects of the class. By incrementing it in the constructor and decrementing in the destructor, we can maintain an accurate count of how many instances are currently alive."
      },
      {
        id: "oop-cpp-2-9",
        title: "Resource allocation (RAII)",
        description: "Allocate memory in constructor, free in destructor.",
        statement: "Create a class `MemoryBlock` that allocates an integer array on the heap in its constructor and frees the memory in its destructor. This pattern is known as RAII (Resource Acquisition Is Initialization).",
        inputFormat: "No input.",
        outputFormat: "Messages showing allocation and deallocation.",
        testCases: [{ input: "", output: "Allocating memory.\nFreeing memory." }],
        solution: `#include <iostream>

class MemoryBlock {
private:
    int* data;
public:
    MemoryBlock(int size) {
        data = new int[size];
        std::cout << "Allocating memory." << std::endl;
    }
    ~MemoryBlock() {
        delete[] data;
        std::cout << "Freeing memory." << std::endl;
    }
};

int main() {
    MemoryBlock block(100);
    // No need to manually call delete.
    // The destructor is called automatically when 'block' goes out of scope.
    return 0;
}`,
        explanation: "RAII is a fundamental C++ concept. By tying the lifetime of a resource (like heap memory) to the lifetime of an object, we guarantee that the resource is properly released when the object is destroyed. This prevents memory leaks and makes code much safer."
      },
      {
        id: "oop-cpp-2-10",
        title: "Deep copy vs shallow copy",
        description: "Demonstrate the difference with pointers.",
        statement: "Create a class `Holder` that contains a pointer to an integer. First, show a shallow copy (default behavior). Then, implement a proper copy constructor and copy assignment operator to perform a deep copy.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of shallow vs deep copy effects.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>

class Holder {
public:
    int* data;
    Holder(int val) { data = new int(val); }
    ~Holder() { delete data; }

    // Custom Copy Constructor (Deep Copy)
    Holder(const Holder& other) {
        data = new int(*other.data); // Allocate new memory and copy value
        std::cout << "Deep copy constructor called." << std::endl;
    }
    
    // Custom Copy Assignment Operator (Deep Copy)
    Holder& operator=(const Holder& other) {
        if (this != &other) { // Protect against self-assignment
            *data = *other.data; // Just copy the value, no new allocation needed if already exists
        }
        std::cout << "Deep copy assignment called." << std::endl;
        return *this;
    }
};

int main() {
    Holder h1(10);
    Holder h2 = h1; // Deep copy constructor
    
    *h1.data = 20; // Change h1's data
    std::cout << "h1 data: " << *h1.data << std::endl; // 20
    std::cout << "h2 data: " << *h2.data << std::endl; // 10 (unaffected)

    // A shallow copy would have both pointers pointing to the same memory,
    // leading to a double-free error when destructors are called.
    return 0;
}`,
        explanation: "A **shallow copy** (the default for pointers) just copies the memory address. Both objects end up pointing to the same data, which is dangerous. A **deep copy** allocates new memory for the copied object and copies the *value* from the original object's data. This ensures the two objects are independent. The 'Rule of Three' (or Five) in C++ states that if you need a custom destructor, copy constructor, or copy assignment operator, you likely need all of them."
      }
    ]
  }
];