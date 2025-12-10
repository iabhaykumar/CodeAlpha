import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_8: ProblemCategory[] = [
  {
    category: "8.0 Composition & Aggregation",
    problems: [
      {
        id: "oop-cpp-8-1",
        title: "Car HAS-A Engine (Composition)",
        description: "Demonstrate composition.",
        statement: "Model a 'HAS-A' relationship using composition. Create an `Engine` class. Create a `Car` class that has an `Engine` object as a member. The `Engine`'s lifetime should be managed by the `Car`.",
        inputFormat: "No input.",
        outputFormat: "Messages showing the engine and car being created and destroyed in the correct order.",
        testCases: [{ input: "", output: "Engine created.\nCar created.\nCar is starting.\nCar destroyed.\nEngine destroyed." }],
        solution: `#include <iostream>

class Engine {
public:
    Engine() { std::cout << "Engine created." << std::endl; }
    ~Engine() { std::cout << "Engine destroyed." << std::endl; }
    void start() { std::cout << "Engine starting..." << std::endl; }
};

class Car {
private:
    Engine engine; // The Engine object is a part of the Car
public:
    Car() { std::cout << "Car created." << std::endl; }
    ~Car() { std::cout << "Car destroyed." << std::endl; }
    void start() {
        std::cout << "Car is starting." << std::endl;
        engine.start();
    }
};

int main() {
    Car myCar;
    myCar.start();
    return 0;
}`,
        explanation: "**Composition** is a strong 'has-a' relationship where the contained object (`Engine`) is an integral part of the container object (`Car`). The lifetime of the `Engine` is tied to the `Car`; when the `Car` is created, the `Engine` is created, and when the `Car` is destroyed, the `Engine` is destroyed."
      },
      {
        id: "oop-cpp-8-2",
        title: "Library HAS-A Book (Aggregation)",
        description: "Demonstrate aggregation.",
        statement: "Model a 'has-a' relationship using aggregation. Create a `Book` class. Create a `Library` class that holds pointers to `Book` objects. The `Book` objects should exist independently of the `Library`.",
        inputFormat: "No input.",
        outputFormat: "Messages showing objects can exist independently.",
        testCases: [{ input: "", output: "Book created.\nLibrary created.\nLibrary destroyed.\nBook still exists.\nBook destroyed." }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Book {
public:
    std::string title;
    Book(std::string t) : title(t) { std::cout << "Book created." << std::endl; }
    ~Book() { std::cout << "Book destroyed." << std::endl; }
};

class Library {
private:
    std::vector<Book*> books;
public:
    Library() { std::cout << "Library created." << std::endl; }
    ~Library() { std::cout << "Library destroyed." << std::endl; }
    void addBook(Book* b) { books.push_back(b); }
};

int main() {
    Book* b1 = new Book("1984");
    {
        Library lib;
        lib.addBook(b1);
    } // lib is destroyed here
    
    std::cout << "Book still exists." << std::endl;
    delete b1; // b1 must be deleted manually
    return 0;
}`,
        explanation: "**Aggregation** is a weaker 'has-a' relationship. The `Library` 'has' `Book`s, but does not own them. It holds pointers or references to `Book` objects that exist elsewhere. The lifetime of the `Book`s is not tied to the `Library`. If the `Library` is destroyed, the `Book`s can still exist."
      },
      {
        id: "oop-cpp-8-3",
        title: "Company HAS-A Employee",
        description: "Model a company with employees using aggregation.",
        statement: "Create an `Employee` class. Create a `Company` class that maintains a list of pointers to its `Employee` objects. Implement methods to hire (add) and display employees.",
        inputFormat: "No input.",
        outputFormat: "List of employees in the company.",
        testCases: [{ input: "", output: "Company Employees:\n- Alice\n- Bob" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Employee {
public:
    std::string name;
    Employee(std::string n) : name(n) {}
};

class Company {
private:
    std::vector<Employee*> employees;
public:
    void hire(Employee* e) { employees.push_back(e); }
    void displayEmployees() {
        std::cout << "Company Employees:" << std::endl;
        for (Employee* e : employees) {
            std::cout << "- " << e->name << std::endl;
        }
    }
};

int main() {
    Employee e1("Alice"), e2("Bob");
    Company myCompany;
    myCompany.hire(&e1);
    myCompany.hire(&e2);
    myCompany.displayEmployees();
    return 0;
}`,
        explanation: "This is an example of aggregation. The `Company` object holds references (pointers) to `Employee` objects, but it does not control their lifetime. The `Employee` objects `e1` and `e2` are created and destroyed in the `main` function's scope."
      },
      {
        id: "oop-cpp-8-4",
        title: "School HAS-A Student",
        description: "Model a school with students.",
        statement: "Create a `Student` class. Create a `School` class that contains a `std::vector<Student>` objects. When a student is added to the school, a copy of the student object is stored.",
        inputFormat: "No input.",
        outputFormat: "List of students in the school.",
        testCases: [{ input: "", output: "School Roster:\n- Charlie\n- Diana" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Student {
public:
    std::string name;
    Student(std::string n) : name(n) {}
};

class School {
private:
    std::vector<Student> students; // Stores Student objects directly
public:
    void enroll(const Student& s) { students.push_back(s); }
    void displayRoster() {
        std::cout << "School Roster:" << std::endl;
        for (const auto& s : students) {
            std::cout << "- " << s.name << std::endl;
        }
    }
};

int main() {
    Student s1("Charlie"), s2("Diana");
    School mySchool;
    mySchool.enroll(s1);
    mySchool.enroll(s2);
    mySchool.displayRoster();
    return 0;
}`,
        explanation: "This demonstrates a stronger relationship than aggregation but is not full composition because the original `Student` objects still exist outside. When `enroll` is called, the `vector`'s `push_back` method creates a *copy* of the `Student` object and stores it. The `School` manages the lifetime of these copies, but not the originals."
      },
      {
        id: "oop-cpp-8-5",
        title: "Laptop HAS-A Battery (Composition)",
        description: "Model a laptop with its components.",
        statement: "Create a `Battery` class. Create a `Laptop` class that contains a `Battery` object. The `Laptop`'s constructor should initialize the `Battery`.",
        inputFormat: "No input.",
        outputFormat: "Messages showing the creation order and usage.",
        testCases: [{ input: "", output: "Battery with 5000 mAh created.\nLaptop is now ON." }],
        solution: `#include <iostream>

class Battery {
private:
    int capacity;
public:
    Battery(int cap) : capacity(cap) {
        std::cout << "Battery with " << capacity << " mAh created." << std::endl;
    }
};

class Laptop {
private:
    Battery battery; // Composition
public:
    // Member initializer list is used to construct the 'battery' member
    Laptop() : battery(5000) {}

    void turnOn() {
        std::cout << "Laptop is now ON." << std::endl;
    }
};

int main() {
    Laptop myLaptop;
    myLaptop.turnOn();
    return 0;
}`,
        explanation: "This is another example of composition. The `Battery` is created as part of the `Laptop`'s construction. We use a **member initializer list** (`: battery(5000)`) in the `Laptop` constructor to call the `Battery`'s constructor and initialize it."
      },
      {
        id: "oop-cpp-8-6",
        title: "Human HAS-A Heart (Composition)",
        description: "Strong ownership relationship.",
        statement: "Model the relationship between a `Human` and a `Heart`. The `Heart` cannot exist without the `Human`. Show that when the `Human` object is destroyed, the `Heart` is also destroyed.",
        inputFormat: "No input.",
        outputFormat: "Messages showing creation and destruction.",
        testCases: [{ input: "", output: "Heart created.\nHuman born.\nHuman died.\nHeart stopped." }],
        solution: `#include <iostream>

class Heart {
public:
    Heart() { std::cout << "Heart created." << std::endl; }
    ~Heart() { std::cout << "Heart stopped." << std::endl; }
};

class Human {
private:
    Heart heart;
public:
    Human() { std::cout << "Human born." << std::endl; }
    ~Human() { std::cout << "Human died." << std::endl; }
};

int main() {
    Human person;
    return 0; // 'person' goes out of scope and is destroyed
}`,
        explanation: "This is the strongest form of composition. A `Heart` is an intrinsic part of a `Human`. Because the `heart` object is a direct member of the `Human` class, its lifetime is automatically managed. When the `person` object is destroyed, its `heart` member is also destroyed."
      },
      {
        id: "oop-cpp-8-7",
        title: "Order HAS-A Product (Aggregation)",
        description: "Model an order containing products.",
        statement: "Create `Product` and `Order` classes. An `Order` should contain a list of pointers to `Product`s. The `Product`s should be managed separately.",
        inputFormat: "No input.",
        outputFormat: "List of products in an order.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Product {
public:
    std::string name;
    Product(std::string n) : name(n) {}
};

class Order {
private:
    std::vector<Product*> products;
public:
    void addProduct(Product* p) { products.push_back(p); }
};

int main() {
    Product p1("Laptop"), p2("Mouse");
    Order order1;
    order1.addProduct(&p1);
    order1.addProduct(&p2);
    // p1 and p2 still exist even if order1 is destroyed
    return 0;
}`,
        explanation: "An `Order` has products, but it doesn't own them. The actual `Product` objects exist in a larger inventory. The `Order` simply references which products are part of it. This is a clear case of aggregation."
      },
      {
        id: "oop-cpp-8-8",
        title: "Team HAS-A Player list",
        description: "Model a team with a list of players.",
        statement: "Create `Player` and `Team` classes. The `Team` class should have a `std::vector` to store `Player` objects. Demonstrate adding players to a team.",
        inputFormat: "No input.",
        outputFormat: "Team roster.",
        testCases: [{ input: "", output: "Team Alpha:\n- Player John\n- Player Jane" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Player {
public:
    std::string name;
    Player(std::string n) : name(n) {}
};

class Team {
private:
    std::string teamName;
    std::vector<Player> players;
public:
    Team(std::string name) : teamName(name) {}
    void addPlayer(const Player& p) { players.push_back(p); }
    void displayRoster() {
        std::cout << "Team " << teamName << ":" << std::endl;
        for (const auto& p : players) {
            std::cout << "- Player " << p.name << std::endl;
        }
    }
};

int main() {
    Player p1("John"), p2("Jane");
    Team t("Alpha");
    t.addPlayer(p1);
    t.addPlayer(p2);
    t.displayRoster();
    return 0;
}`,
        explanation: "Similar to the School/Student example, this `Team` class stores copies of the `Player` objects. The `Team` object manages the lifetime of its own internal list of players. This represents a strong 'has-a' relationship."
      }
    ]
  }
];
