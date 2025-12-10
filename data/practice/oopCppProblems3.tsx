import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_3: ProblemCategory[] = [
  {
    category: "3.0 Encapsulation & Abstraction",
    problems: [
      {
        id: "oop-cpp-3-1",
        title: "Private variables + getters/setters",
        description: "Demonstrate basic encapsulation.",
        statement: "Create a class `Person` with a private member `age`. Provide a public `setAge` method that only allows positive values and a public `getAge` method to retrieve the age.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of setting a valid and an invalid age.",
        testCases: [{ input: "", output: "Invalid age!\nAge is: 25" }],
        solution: `#include <iostream>

class Person {
private:
    int age;

public:
    void setAge(int a) {
        if (a > 0) {
            age = a;
        } else {
            std::cout << "Invalid age!" << std::endl;
        }
    }

    int getAge() {
        return age;
    }
};

int main() {
    Person p1;
    p1.setAge(-5); // This will be rejected
    p1.setAge(25);
    std::cout << "Age is: " << p1.getAge() << std::endl;
    return 0;
}`,
        explanation: "**Encapsulation** is the bundling of data (attributes) with the methods that operate on that data. By making `age` `private`, we prevent direct modification. The `public` methods (`setAge`, `getAge`) provide a controlled interface. `setAge` acts as a gatekeeper, enforcing the rule that age must be positive."
      },
      {
        id: "oop-cpp-3-2",
        title: "Encapsulated bank ATM system",
        description: "Protect the balance with private access.",
        statement: "Create a `BankAccount` class with a private `balance`. Implement public `deposit` and `withdraw` methods. Ensure a user cannot withdraw more than the available balance.",
        inputFormat: "No input.",
        outputFormat: "Sequence of transactions and final balance.",
        testCases: [{ input: "", output: "Deposit successful.\nWithdrawal successful.\nInsufficient funds.\nFinal Balance: 1300" }],
        solution: `#include <iostream>

class BankAccount {
private:
    double balance;
public:
    BankAccount(double b) : balance(b) {}
    
    void deposit(double amount) {
        balance += amount;
        std::cout << "Deposit successful." << std::endl;
    }
    
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            std::cout << "Withdrawal successful." << std::endl;
        } else {
            std::cout << "Insufficient funds." << std::endl;
        }
    }
    
    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount acc(1000);
    acc.deposit(500);
    acc.withdraw(200);
    acc.withdraw(1500);
    std::cout << "Final Balance: " << acc.getBalance() << std::endl;
    return 0;
}`,
        explanation: "This is a classic example of encapsulation. The `balance` is the critical data, and it's protected. The only way to change it is through the `deposit` and `withdraw` methods, which contain the business logic to ensure the account state remains valid (e.g., balance cannot go negative from a withdrawal)."
      },
      {
        id: "oop-cpp-3-3",
        title: "Abstract class Shape with virtual area()",
        description: "Create an abstract Shape class.",
        statement: "Create an abstract class `Shape` with a pure virtual function `area()`. Create two derived classes, `Circle` and `Rectangle`, that implement the `area()` method.",
        inputFormat: "No input.",
        outputFormat: "Area of the circle and rectangle.",
        testCases: [{ input: "", output: "Circle Area: 78.5\nRectangle Area: 50" }],
        solution: `#include <iostream>

// Abstract Base Class
class Shape {
public:
    // Pure virtual function
    virtual double area() const = 0;
    // Virtual destructor (good practice for base classes)
    virtual ~Shape() {}
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override {
        return 3.14 * radius * radius;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const override {
        return width * height;
    }
};

int main() {
    Circle c(5);
    Rectangle r(10, 5);
    std::cout << "Circle Area: " << c.area() << std::endl;
    std::cout << "Rectangle Area: " << r.area() << std::endl;
    return 0;
}`,
        explanation: "**Abstraction** is about hiding complex implementation details and showing only essential features. An **abstract class** is a class that cannot be instantiated on its own. A **pure virtual function** (`= 0`) is a method that the base class declares but does not implement. It forces any concrete derived class to provide its own implementation. This defines a 'contract' that all shapes must have an `area` method."
      },
      {
        id: "oop-cpp-3-4",
        title: "Abstract class Animal with speak()",
        description: "Create an abstract Animal class.",
        statement: "Create an abstract class `Animal` with a pure virtual function `speak()`. Create `Dog` and `Cat` classes that derive from `Animal` and implement `speak()`.",
        inputFormat: "No input.",
        outputFormat: "Woof!\nMeow!",
        testCases: [{ input: "", output: "Woof!\nMeow!" }],
        solution: `#include <iostream>

class Animal {
public:
    virtual void speak() const = 0;
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void speak() const override {
        std::cout << "Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void speak() const override {
        std::cout << "Meow!" << std::endl;
    }
};

int main() {
    Dog d;
    Cat c;
    d.speak();
    c.speak();
    return 0;
}`,
        explanation: "This demonstrates abstraction by defining a common interface (`speak`) for all animals. Any class that inherits from `Animal` is guaranteed to have a `speak` method, but each can implement it differently. The `override` keyword is a safety check to ensure you are correctly overriding a base class method."
      },
      {
        id: "oop-cpp-3-5",
        title: "Abstract employee payroll class",
        description: "Define a base for different employee types.",
        statement: "Create an abstract `Employee` class with a pure virtual `calculatePay()` method. Implement `SalariedEmployee` and `HourlyEmployee` classes that calculate pay differently.",
        inputFormat: "No input.",
        outputFormat: "Pay for salaried and hourly employees.",
        testCases: [{ input: "", output: "Salaried Pay: 4000\nHourly Pay: 6000" }],
        solution: `#include <iostream>

class Employee {
public:
    virtual double calculatePay() const = 0;
    virtual ~Employee() {}
};

class SalariedEmployee : public Employee {
private:
    double salary;
public:
    SalariedEmployee(double s) : salary(s) {}
    double calculatePay() const override {
        return salary;
    }
};

class HourlyEmployee : public Employee {
private:
    double hourlyRate;
    int hoursWorked;
public:
    HourlyEmployee(double rate, int hours) : hourlyRate(rate), hoursWorked(hours) {}
    double calculatePay() const override {
        return hourlyRate * hoursWorked;
    }
};

int main() {
    SalariedEmployee se(4000);
    HourlyEmployee he(150, 40);
    std::cout << "Salaried Pay: " << se.calculatePay() << std::endl;
    std::cout << "Hourly Pay: " << he.calculatePay() << std::endl;
    return 0;
}`,
        explanation: "The `Employee` class provides an abstract concept of 'calculating pay'. The concrete classes `SalariedEmployee` and `HourlyEmployee` provide the specific implementations, hiding the different calculation logic behind the same method name. This allows you to treat all employee types uniformly."
      },
      {
        id: "oop-cpp-3-6",
        title: "Abstract transport class",
        description: "Define a base for transport types.",
        statement: "Create an abstract `Transport` class with a pure virtual `move()` method. Implement `Car` and `Bicycle` classes.",
        inputFormat: "No input.",
        outputFormat: "Movement messages.",
        testCases: [{ input: "", output: "Car is driving.\nBicycle is pedaling." }],
        solution: `#include <iostream>

class Transport {
public:
    virtual void move() const = 0;
    virtual ~Transport() {}
};

class Car : public Transport {
public:
    void move() const override {
        std::cout << "Car is driving." << std::endl;
    }
};

class Bicycle : public Transport {
public:
    void move() const override {
        std::cout << "Bicycle is pedaling." << std::endl;
    }
};

int main() {
    Car car;
    Bicycle bike;
    car.move();
    bike.move();
    return 0;
}`,
        explanation: "This example abstracts the concept of 'movement'. Both a car and a bicycle can move, but they do so differently. The abstract base class enforces that any `Transport` type must define how it moves."
      },
      {
        id: "oop-cpp-3-7",
        title: "Secure student record",
        description: "Protect student data.",
        statement: "Create a `StudentRecord` class with private members for name and GPA. Provide a public method to get the name, but make the GPA accessible only through a password-protected method `getGpa(string password)`.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of accessing data.",
        testCases: [{ input: "", output: "Wrong password!\nGPA: 3.8" }],
        solution: `#include <iostream>
#include <string>

class StudentRecord {
private:
    std::string name;
    double gpa;
public:
    StudentRecord(std::string n, double g) : name(n), gpa(g) {}

    std::string getName() {
        return name;
    }
    
    double getGpa(std::string password) {
        if (password == "admin123") {
            return gpa;
        }
        std::cout << "Wrong password!" << std::endl;
        return -1.0;
    }
};

int main() {
    StudentRecord sr("Alice", 3.8);
    sr.getGpa("wrongpass");
    std::cout << "GPA: " << sr.getGpa("admin123") << std::endl;
    return 0;
}`,
        explanation: "Encapsulation allows for fine-grained control over data access. Here, we completely hide the `gpa` and only expose it through a method that requires authentication. This demonstrates how methods can enforce complex access rules."
      },
      {
        id: "oop-cpp-3-8",
        title: "Abstract Payment class",
        description: "Model different payment methods.",
        statement: "Create an abstract `PaymentMethod` class with a pure virtual `pay(double amount)` method. Implement `CreditCardPayment` and `UpiPayment` classes.",
        inputFormat: "No input.",
        outputFormat: "Payment processing messages.",
        testCases: [{ input: "", output: "Paying 100 via Credit Card.\nPaying 50 via UPI." }],
        solution: `#include <iostream>

class PaymentMethod {
public:
    virtual void pay(double amount) const = 0;
    virtual ~PaymentMethod() {}
};

class CreditCardPayment : public PaymentMethod {
public:
    void pay(double amount) const override {
        std::cout << "Paying " << amount << " via Credit Card." << std::endl;
    }
};

class UpiPayment : public PaymentMethod {
public:
    void pay(double amount) const override {
        std::cout << "Paying " << amount << " via UPI." << std::endl;
    }
};

int main() {
    CreditCardPayment cc;
    UpiPayment upi;
    cc.pay(100);
    upi.pay(50);
    return 0;
}`,
        explanation: "This abstracts the process of payment. A system can work with any `PaymentMethod` object without needing to know the specific details of how credit cards or UPI are processed. This makes the system extensible; adding a new payment method (e.g., `PayPalPayment`) is easy."
      },
      {
        id: "oop-cpp-3-9",
        title: "Abstract appliance class",
        description: "Model household appliances.",
        statement: "Create an abstract `Appliance` class with pure virtual `turnOn()` and `turnOff()` methods. Implement `Television` and `AirConditioner` classes.",
        inputFormat: "No input.",
        outputFormat: "Messages for turning appliances on and off.",
        testCases: [{ input: "", output: "TV is ON.\nAC is ON.\nAC is OFF." }],
        solution: `#include <iostream>

class Appliance {
public:
    virtual void turnOn() = 0;
    virtual void turnOff() = 0;
    virtual ~Appliance() {}
};

class Television : public Appliance {
public:
    void turnOn() override { std::cout << "TV is ON." << std::endl; }
    void turnOff() override { std::cout << "TV is OFF." << std::endl; }
};

class AirConditioner : public Appliance {
public:
    void turnOn() override { std::cout << "AC is ON." << std::endl; }
    void turnOff() override { std::cout << "AC is OFF." << std::endl; }
};

int main() {
    Television tv;
    AirConditioner ac;
    tv.turnOn();
    ac.turnOn();
    ac.turnOff();
    return 0;
}`,
        explanation: "This creates a common interface for all appliances. A smart home system, for example, could have a list of `Appliance*` pointers and turn them all off with a single loop, without caring whether each object is a TV or an AC."
      },
      {
        id: "oop-cpp-3-10",
        title: "Personal info class",
        description: "Protect sensitive user information.",
        statement: "Create a `UserInfo` class. Store the full `socialSecurityNumber` privately. Provide a public method `getMaskedSSN()` that returns only the last 4 digits (e.g., '***-**-1234').",
        inputFormat: "No input.",
        outputFormat: "The masked SSN.",
        testCases: [{ input: "", output: "SSN: ***-**-5678" }],
        solution: `#include <iostream>
#include <string>

class UserInfo {
private:
    std::string socialSecurityNumber;
public:
    UserInfo(std::string ssn) : socialSecurityNumber(ssn) {}

    std::string getMaskedSSN() {
        if (socialSecurityNumber.length() > 4) {
            return "***-**-" + socialSecurityNumber.substr(socialSecurityNumber.length() - 4);
        }
        return "Invalid SSN";
    }
};

int main() {
    UserInfo user("123-45-5678");
    std::cout << "SSN: " << user.getMaskedSSN() << std::endl;
    return 0;
}`,
        explanation: "This is a form of data abstraction and encapsulation. The raw, sensitive data (`socialSecurityNumber`) is kept private. The class only exposes a 'view' of the data (`getMaskedSSN`) that is safe for display, hiding the full value."
      }
    ]
  }
];