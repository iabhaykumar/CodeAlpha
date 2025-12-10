
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_4: ProblemCategory[] = [
  {
    category: "4.0 Inheritance Types",
    problems: [
      {
        id: "oop-cpp-4-1",
        title: "Single Inheritance",
        description: "Demonstrate single inheritance.",
        statement: "Create a class `Animal` with a method `eat()`. Create a class `Dog` that inherits from `Animal` and adds a method `bark()`. Create an object of `Dog` and call both methods.",
        inputFormat: "No input.",
        outputFormat: "Output from both methods.",
        testCases: [{ input: "", output: "Eating...\nBarking..." }],
        solution: `#include <iostream>

class Animal {
public:
    void eat() {
        std::cout << "Eating..." << std::endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "Barking..." << std::endl;
    }
};

int main() {
    Dog d;
    d.eat();
    d.bark();
    return 0;
}`,
        explanation: "Single inheritance is when a derived class inherits from only one base class. `Dog` inherits the `eat` method from `Animal`."
      },
      {
        id: "oop-cpp-4-2",
        title: "Multilevel Inheritance",
        description: "Chain of inheritance.",
        statement: "Create a class `Vehicle`. Create `Car` inheriting from `Vehicle`. Create `SportsCar` inheriting from `Car`. Demonstrate that `SportsCar` can access members from `Vehicle`.",
        inputFormat: "No input.",
        outputFormat: "Message from the top-most base class.",
        testCases: [{ input: "", output: "Vehicle started." }],
        solution: `#include <iostream>

class Vehicle {
public:
    void start() {
        std::cout << "Vehicle started." << std::endl;
    }
};

class Car : public Vehicle {};

class SportsCar : public Car {};

int main() {
    SportsCar sc;
    sc.start();
    return 0;
}`,
        explanation: "In multilevel inheritance, a derived class acts as a base class for another class. `SportsCar` inherits from `Car`, which inherits from `Vehicle`. Thus `SportsCar` has access to `Vehicle`'s public members."
      },
      {
        id: "oop-cpp-4-3",
        title: "Multiple Inheritance",
        description: "Inherit from two classes.",
        statement: "Create classes `ClassA` and `ClassB`, each with a unique method. Create `ClassC` that inherits from both. Demonstrate calling methods from both parents.",
        inputFormat: "No input.",
        outputFormat: "Output from both parent methods.",
        testCases: [{ input: "", output: "Method A\nMethod B" }],
        solution: `#include <iostream>

class ClassA {
public:
    void methodA() { std::cout << "Method A" << std::endl; }
};

class ClassB {
public:
    void methodB() { std::cout << "Method B" << std::endl; }
};

class ClassC : public ClassA, public ClassB {};

int main() {
    ClassC obj;
    obj.methodA();
    obj.methodB();
    return 0;
}`,
        explanation: "Multiple inheritance allows a class to inherit from more than one base class. `ClassC` inherits from both `ClassA` and `ClassB`."
      },
      {
        id: "oop-cpp-4-4",
        title: "Hierarchical Inheritance",
        description: "Multiple classes from one base.",
        statement: "Create a base class `Shape`. Derive `Circle` and `Rectangle` from `Shape`. Show that both can use a method defined in `Shape`.",
        inputFormat: "No input.",
        outputFormat: "Output showing inheritance.",
        testCases: [{ input: "", output: "Shape created.\nShape created." }],
        solution: `#include <iostream>

class Shape {
public:
    Shape() { std::cout << "Shape created." << std::endl; }
};

class Circle : public Shape {};
class Rectangle : public Shape {};

int main() {
    Circle c;
    Rectangle r;
    return 0;
}`,
        explanation: "Hierarchical inheritance is when multiple derived classes inherit from a single base class."
      },
      {
        id: "oop-cpp-4-5",
        title: "Hybrid Inheritance (Diamond Problem)",
        description: "Ambiguity in inheritance.",
        statement: "Create a 'Diamond' inheritance structure: `A` is base. `B` and `C` inherit from `A`. `D` inherits from `B` and `C`. Show the ambiguity problem when calling a method from `A` via `D`, and fix it using `virtual` inheritance.",
        inputFormat: "No input.",
        outputFormat: "Method from A called once.",
        testCases: [{ input: "", output: "Base method called." }],
        solution: `#include <iostream>

class A {
public:
    void show() { std::cout << "Base method called." << std::endl; }
};

class B : virtual public A {}; // Virtual inheritance
class C : virtual public A {}; // Virtual inheritance

class D : public B, public C {};

int main() {
    D obj;
    obj.show(); // Without virtual inheritance, this would be ambiguous
    return 0;
}`,
        explanation: "The Diamond Problem occurs in multiple inheritance when a class inherits from two classes that have a common base class. This results in two copies of the base class. Virtual inheritance (`virtual public A`) ensures that only one instance of the base class `A` is present in the hierarchy."
      },
      {
        id: "oop-cpp-4-6",
        title: "Constructor execution order",
        description: "Order of constructors in inheritance.",
        statement: "Create a base class and a derived class, both with constructors. Create an object of the derived class to observe the order of constructor execution.",
        inputFormat: "No input.",
        outputFormat: "Order of construction.",
        testCases: [{ input: "", output: "Base Constructor\nDerived Constructor" }],
        solution: `#include <iostream>

class Base {
public:
    Base() { std::cout << "Base Constructor" << std::endl; }
};

class Derived : public Base {
public:
    Derived() { std::cout << "Derived Constructor" << std::endl; }
};

int main() {
    Derived d;
    return 0;
}`,
        explanation: "When an object of a derived class is created, the base class constructor is called first, followed by the derived class constructor."
      },
      {
        id: "oop-cpp-4-7",
        title: "Passing arguments to base constructor",
        description: "Initialize base class with arguments.",
        statement: "Create a `Person` class with a constructor taking a name. Create a `Student` class inheriting from `Person` that takes name and grade, passing the name to the `Person` constructor.",
        inputFormat: "No input.",
        outputFormat: "Details printed.",
        testCases: [{ input: "", output: "Name: John, Grade: A" }],
        solution: `#include <iostream>
#include <string>

class Person {
protected:
    std::string name;
public:
    Person(std::string n) : name(n) {}
};

class Student : public Person {
private:
    char grade;
public:
    // Pass 'n' to the Person constructor
    Student(std::string n, char g) : Person(n), grade(g) {}
    
    void display() {
        std::cout << "Name: " << name << ", Grade: " << grade << std::endl;
    }
};

int main() {
    Student s("John", 'A');
    s.display();
    return 0;
}`,
        explanation: "To pass arguments to a base class constructor, you use the member initializer list in the derived class's constructor: `Derived(args) : Base(args) { ... }`."
      },
      {
        id: "oop-cpp-4-8",
        title: "Protected access modifier",
        description: "Accessing protected members.",
        statement: "Demonstrate that `protected` members are accessible in derived classes but not outside them.",
        inputFormat: "No input.",
        outputFormat: "Value accessed in derived class.",
        testCases: [{ input: "", output: "Protected value: 10" }],
        solution: `#include <iostream>

class Base {
protected:
    int x = 10;
};

class Derived : public Base {
public:
    void showX() {
        std::cout << "Protected value: " << x << std::endl;
    }
};

int main() {
    Derived d;
    d.showX();
    // d.x = 20; // Error: x is protected
    return 0;
}`,
        explanation: "`protected` members act like `private` members to the outside world (cannot be accessed via object), but they can be accessed by derived classes."
      },
      {
        id: "oop-cpp-4-9",
        title: "Access control in inheritance",
        description: "Public, Protected, Private inheritance.",
        statement: "Create a base class with public, protected, and private members. Inherit it publicly and show which members are accessible in the derived class.",
        inputFormat: "No input.",
        outputFormat: "Accessible members.",
        testCases: [{ input: "", output: "Public: 1\nProtected: 2" }],
        solution: `#include <iostream>

class Base {
public: int pub = 1;
protected: int prot = 2;
private: int priv = 3;
};

class Derived : public Base {
public:
    void show() {
        std::cout << "Public: " << pub << std::endl;
        std::cout << "Protected: " << prot << std::endl;
        // std::cout << priv; // Error: private not accessible
    }
};

int main() {
    Derived d;
    d.show();
    return 0;
}`,
        explanation: "In public inheritance, public members of the base stay public, protected stay protected. Private members are never accessible in the derived class directly."
      },
      {
        id: "oop-cpp-4-10",
        title: "Calling base class method",
        description: "Accessing hidden base methods.",
        statement: "Override a method in a derived class. Inside the overridden method, call the base class's version of the method using the scope resolution operator.",
        inputFormat: "No input.",
        outputFormat: "Base message followed by Derived message.",
        testCases: [{ input: "", output: "Base hello\nDerived hello" }],
        solution: `#include <iostream>

class Base {
public:
    void greet() { std::cout << "Base hello" << std::endl; }
};

class Derived : public Base {
public:
    void greet() {
        Base::greet(); // Call base implementation
        std::cout << "Derived hello" << std::endl;
    }
};

int main() {
    Derived d;
    d.greet();
    return 0;
}`,
        explanation: "When a method is overridden, the base class version is hidden. You can still access it using `BaseClassName::methodName()`."
      }
    ]
  }
];
