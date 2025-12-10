import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_6: ProblemCategory[] = [
  {
    category: "6.0 Interfaces / Abstract + Pure Virtual (C++)",
    problems: [
      {
        id: "oop-cpp-6-1",
        title: "Interface Shape with area()",
        description: "Define a contract for shapes.",
        statement: "Create an abstract class `IShape` that acts as an interface. It should have a pure virtual function `calculateArea()`. Implement this interface in `Circle` and `Rectangle` classes.",
        inputFormat: "No input.",
        outputFormat: "Areas of the circle and rectangle.",
        testCases: [{ input: "", output: "Circle Area: 78.5\nRectangle Area: 50" }],
        solution: `#include <iostream>

// An abstract class with only pure virtual functions serves as an interface.
class IShape {
public:
    virtual double calculateArea() const = 0;
    virtual ~IShape() {} // Virtual destructor is important for base classes.
};

class Circle : public IShape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double calculateArea() const override {
        return 3.14 * radius * radius;
    }
};

class Rectangle : public IShape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double calculateArea() const override {
        return width * height;
    }
};

int main() {
    IShape* shape1 = new Circle(5);
    IShape* shape2 = new Rectangle(10, 5);

    std::cout << "Circle Area: " << shape1->calculateArea() << std::endl;
    std::cout << "Rectangle Area: " << shape2->calculateArea() << std::endl;
    
    delete shape1;
    delete shape2;
    return 0;
}`,
        explanation: "In C++, an 'interface' is created by defining an abstract class that has only pure virtual functions. A pure virtual function (`= 0`) is a function that must be implemented by any concrete derived class. This creates a contract, ensuring that any class inheriting from `IShape` will have a `calculateArea` method."
      },
      {
        id: "oop-cpp-6-2",
        title: "Interface Playable with play()",
        description: "Define a contract for playable media.",
        statement: "Create an `IPlayable` interface with a `play()` method. Implement this interface in `MusicTrack` and `VideoClip` classes.",
        inputFormat: "No input.",
        outputFormat: "Messages indicating that different media types are playing.",
        testCases: [{ input: "", output: "Playing music: 'Symphony No. 5'\nPlaying video: 'Introduction to C++'" }],
        solution: `#include <iostream>
#include <string>
#include <vector>

class IPlayable {
public:
    virtual void play() const = 0;
    virtual ~IPlayable() {}
};

class MusicTrack : public IPlayable {
    std::string title;
public:
    MusicTrack(std::string t) : title(t) {}
    void play() const override {
        std::cout << "Playing music: '" << title << "'" << std::endl;
    }
};

class VideoClip : public IPlayable {
    std::string title;
public:
    VideoClip(std::string t) : title(t) {}
    void play() const override {
        std::cout << "Playing video: '" << title << "'" << std::endl;
    }
};

int main() {
    std::vector<IPlayable*> playlist;
    playlist.push_back(new MusicTrack("Symphony No. 5"));
    playlist.push_back(new VideoClip("Introduction to C++"));

    for(IPlayable* item : playlist) {
        item->play();
    }
    
    // Cleanup
    for(IPlayable* item : playlist) {
        delete item;
    }
    return 0;
}`,
        explanation: "The `IPlayable` interface defines a common behavior (`play`) for different types of media. This allows us to treat `MusicTrack` and `VideoClip` objects uniformly, for example, by putting them in the same `playlist` vector of `IPlayable*` pointers and calling `play()` on each one without needing to know its specific type."
      },
      {
        id: "oop-cpp-6-3",
        title: "Interface PaymentMethod",
        description: "Define a contract for payments.",
        statement: "Create an interface `IPaymentMethod` with a method `processPayment(double amount)`. Implement it with `CreditCard` and `PayPal` classes.",
        inputFormat: "No input.",
        outputFormat: "Payment processing messages.",
        testCases: [{ input: "", output: "Processing $100.50 via Credit Card.\nProcessing $50.25 via PayPal." }],
        solution: `#include <iostream>

class IPaymentMethod {
public:
    virtual bool processPayment(double amount) const = 0;
    virtual ~IPaymentMethod() {}
};

class CreditCard : public IPaymentMethod {
public:
    bool processPayment(double amount) const override {
        std::cout << "Processing $" << amount << " via Credit Card." << std::endl;
        return true; // Simulate success
    }
};

class PayPal : public IPaymentMethod {
public:
    bool processPayment(double amount) const override {
        std::cout << "Processing $" << amount << " via PayPal." << std::endl;
        return true; // Simulate success
    }
};

void execute_payment(const IPaymentMethod& method, double amount) {
    method.processPayment(amount);
}

int main() {
    CreditCard cc;
    PayPal pp;
    execute_payment(cc, 100.50);
    execute_payment(pp, 50.25);
    return 0;
}`,
        explanation: "The `IPaymentMethod` interface abstracts the concept of making a payment. A higher-level function like `execute_payment` can accept any object that implements this interface. This makes the system flexible and extensible, as new payment methods can be added without changing the `execute_payment` function."
      },
      {
        id: "oop-cpp-6-4",
        title: "Multiple interfaces in a class",
        description: "Implement multiple interfaces.",
        statement: "Create two interfaces, `ILoggable` (with `log()`) and `ISerializable` (with `serialize()`). Create a class `Message` that implements both interfaces.",
        inputFormat: "No input.",
        outputFormat: "Messages from both interface methods.",
        testCases: [{ input: "", output: "Logging message...\nSerializing to JSON..." }],
        solution: `#include <iostream>
#include <string>

class ILoggable {
public:
    virtual void log(const std::string& msg) const = 0;
    virtual ~ILoggable() {}
};

class ISerializable {
public:
    virtual std::string serialize() const = 0;
    virtual ~ISerializable() {}
};

class Message : public ILoggable, public ISerializable {
private:
    std::string content;
public:
    Message(std::string c) : content(c) {}

    void log(const std::string& msg) const override {
        std::cout << "Logging message..." << std::endl;
    }
    
    std::string serialize() const override {
        return "{\\"content\\": \\"" + content + "\\"}" ;
    }
};

int main() {
    Message msg("Hello");
    msg.log("test");
    std::cout << "Serializing to JSON..." << std::endl;
    return 0;
}`,
        explanation: "A class in C++ can inherit from multiple base classes. By inheriting from multiple abstract classes (interfaces), a single class can promise to fulfill multiple contracts. Here, the `Message` class can be treated as an `ILoggable` object *and* as an `ISerializable` object."
      },
      {
        id: "oop-cpp-6-5",
        title: "Interface for database operations (CRUD)",
        description: "Define a data access contract.",
        statement: "Create a generic `IRepository` interface for basic database CRUD (Create, Read, Update, Delete) operations. The interface should be a template to work with any data type.",
        inputFormat: "No input.",
        outputFormat: "Conceptual demonstration of usage.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>

template <typename T>
class IRepository {
public:
    virtual void add(const T& item) = 0;
    virtual T getById(int id) = 0;
    virtual std::vector<T> getAll() = 0;
    virtual void update(const T& item) = 0;
    virtual void remove(int id) = 0;
    virtual ~IRepository() {}
};

// Example usage (conceptual)
// class User { /* ... */ };
// class UserRepository : public IRepository<User> {
//     // Implement all methods to interact with a user database
// };
//
// int main() {
//     UserRepository userRepo;
//     User newUser;
//     userRepo.add(newUser);
// }
`,
        explanation: "This defines a generic contract for data access. Using a template (`template <typename T>`) makes the interface reusable for any entity type (e.g., `User`, `Product`, `Order`). A concrete class like `UserRepository` would implement this interface to provide the specific SQL queries for interacting with the `users` table. This decouples the business logic from the specific database implementation."
      },
      {
        id: "oop-cpp-6-6",
        title: "Interface for notification service",
        description: "Define a notification contract.",
        statement: "Create an `INotificationService` interface with a `send(string to, string message)` method. Implement `EmailService` and `SmsService` classes.",
        inputFormat: "No input.",
        outputFormat: "Messages from both notification services.",
        testCases: [{ input: "", output: "Sending Email to user@example.com\nSending SMS to 1234567890" }],
        solution: `#include <iostream>
#include <string>

class INotificationService {
public:
    virtual void send(const std::string& to, const std::string& message) const = 0;
    virtual ~INotificationService() {}
};

class EmailService : public INotificationService {
public:
    void send(const std::string& to, const std::string& message) const override {
        std::cout << "Sending Email to " << to << std::endl;
    }
};

class SmsService : public INotificationService {
public:
    void send(const std::string& to, const std::string& message) const override {
        std::cout << "Sending SMS to " << to << std::endl;
    }
};

int main() {
    EmailService emailer;
    SmsService texter;
    emailer.send("user@example.com", "Hello");
    texter.send("1234567890", "Hi");
    return 0;
}`,
        explanation: "The `INotificationService` interface abstracts the act of sending a notification. This allows a high-level module (e.g., an order processing system) to send a notification without needing to know the details of how emails or SMS messages are technically sent. It makes the system easy to extend with new notification types like push notifications."
      },
      {
        id: "oop-cpp-6-7",
        title: "Pure virtual class for graph algorithms",
        description: "Define a contract for graph algorithms.",
        statement: "Create an interface `IGraphAlgorithm` with a method `run(Graph& g)`. Implement `BfsAlgorithm` and `DfsAlgorithm` classes that perform their respective traversals on a graph object.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of running different algorithms.",
        testCases: [{ input: "", output: "Running BFS...\nRunning DFS..." }],
        solution: `// Assuming a basic Graph class exists
// class Graph { /* ... */ };

class IGraphAlgorithm {
public:
    virtual void run(Graph& g) const = 0;
    virtual ~IGraphAlgorithm() {}
};

class BfsAlgorithm : public IGraphAlgorithm {
public:
    void run(Graph& g) const override {
        std::cout << "Running BFS..." << std::endl;
        // BFS implementation here
    }
};

class DfsAlgorithm : public IGraphAlgorithm {
public:
    void run(Graph& g) const override {
        std::cout << "Running DFS..." << std::endl;
        // DFS implementation here
    }
};

int main() {
    Graph g;
    BfsAlgorithm bfs;
    DfsAlgorithm dfs;
    
    bfs.run(g);
    dfs.run(g);
    return 0;
}`,
        explanation: "This is an example of the **Strategy** design pattern. We encapsulate each algorithm in its own class, all implementing a common interface. This allows the client to choose which algorithm (strategy) to use at runtime and treat them interchangeably."
      },
      {
        id: "oop-cpp-6-8",
        title: "Interface for encryption/decryption",
        description: "Define a cryptography contract.",
        statement: "Create an `ICrypto` interface with `encrypt(string data)` and `decrypt(string data)` methods. Create a simple `XorCipher` class that implements this interface.",
        inputFormat: "No input.",
        outputFormat: "Original, encrypted, and decrypted data.",
        testCases: [{ input: "", output: "Original: Hello\nEncrypted: [gibberish]\nDecrypted: Hello" }],
        solution: `#include <iostream>
#include <string>

class ICrypto {
public:
    virtual std::string encrypt(const std::string& data) const = 0;
    virtual std::string decrypt(const std::string& data) const = 0;
    virtual ~ICrypto() {}
};

class XorCipher : public ICrypto {
private:
    char key;
public:
    XorCipher(char k) : key(k) {}

    std::string encrypt(const std::string& data) const override {
        std::string result = data;
        for(char& c : result) {
            c ^= key;
        }
        return result;
    }

    std::string decrypt(const std::string& data) const override {
        // XOR is symmetric, so encryption and decryption are the same
        return encrypt(data);
    }
};

int main() {
    XorCipher cipher('K');
    std::string original = "Hello";
    std::string encrypted = cipher.encrypt(original);
    std::string decrypted = cipher.decrypt(encrypted);

    std::cout << "Original: " << original << std::endl;
    std::cout << "Encrypted: " << encrypted << std::endl;
    std::cout << "Decrypted: " << decrypted << std::endl;
    return 0;
}`,
        explanation: "The `ICrypto` interface defines a standard contract for any encryption algorithm. A simple `XorCipher` implements this by XORing each character with a key. This design allows you to easily swap out the encryption algorithm (e.g., to a more secure AES implementation) without changing the code that uses the `ICrypto` interface."
      }
    ]
  }
];
