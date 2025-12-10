import React from 'react';
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_13: ProblemCategory[] = [
  {
    category: "13.0 OOP Mini Projects",
    problems: [
      {
        id: "oop-cpp-13-1",
        title: "Library Management System",
        description: "A mini project for a library.",
        statement: "Design a simple command-line Library Management System. Create `Book` and `Library` classes. The library should allow adding books, borrowing books (and marking them as unavailable), returning books, and displaying the inventory.",
        inputFormat: "No input, demonstration.",
        outputFormat: "A sequence of operations demonstrating the library's functionality.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Book {
public:
    std::string title;
    bool isAvailable;
    Book(std::string t) : title(t), isAvailable(true) {}
};

class Library {
private:
    std::vector<Book> books;
public:
    void addBook(const Book& book) {
        books.push_back(book);
    }
    void displayBooks() {
        for(const auto& book : books) {
            std::cout << book.title << " [" << (book.isAvailable ? "Available" : "Borrowed") << "]" << std::endl;
        }
    }
    // ... more methods like borrowBook, returnBook ...
};

int main() {
    Library lib;
    lib.addBook(Book("The Lord of the Rings"));
    lib.addBook(Book("Pride and Prejudice"));
    lib.displayBooks();
    return 0;
}`,
        explanation: "This project combines several OOP concepts. The `Book` class encapsulates the data for a single book. The `Library` class uses composition, holding a `vector` of `Book` objects. It provides a public interface (`addBook`, `displayBooks`) to manage its internal collection, hiding the implementation details."
      },
      {
        id: "oop-cpp-13-2",
        title: "Banking System",
        description: "A mini project for a bank.",
        statement: "Design a simple command-line banking system. Create an `Account` class with private `balance` and public `deposit`, `withdraw`, and `getBalance` methods. Create a `Bank` class that manages a collection of accounts.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of creating accounts and performing transactions.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>
#include <map>

class Account { /* ... as implemented before ... */ };

class Bank {
private:
    std::map<int, Account> accounts; // Map account number to Account object
    int nextAccountNumber = 1001;
public:
    int createAccount(double initialDeposit) {
        int newAccNum = nextAccountNumber++;
        accounts.emplace(newAccNum, Account(initialDeposit));
        return newAccNum;
    }
    Account* findAccount(int accNum) {
        if (accounts.count(accNum)) {
            return &accounts.at(accNum);
        }
        return nullptr;
    }
};

int main() {
    Bank myBank;
    int alicesAccount = myBank.createAccount(500);
    Account* acc = myBank.findAccount(alicesAccount);
    if(acc) {
        acc->deposit(200);
        // ...
    }
    return 0;
}`,
        explanation: "The `Bank` class acts as a manager for `Account` objects. It uses a `map` to easily find accounts by their account number. The `createAccount` method encapsulates the logic for generating a new account number and adding the new `Account` object to the map."
      },
      {
        id: "oop-cpp-13-3",
        title: "Student Result Management",
        description: "Manage student results.",
        statement: "Design a system to manage student results. Create a `Student` class that stores a name and a map of subject names to marks. Implement methods to add a mark, calculate the total, and determine if the student has passed (e.g., avg > 40).",
        inputFormat: "No input.",
        outputFormat: "Student's final report.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <string>
#include <map>
#include <numeric>

class Student {
private:
    std::string name;
    std::map<std::string, int> marks;
public:
    Student(std::string n) : name(n) {}
    void addMark(std::string subject, int score) {
        marks[subject] = score;
    }
    double getAverage() {
        if (marks.empty()) return 0;
        double sum = 0;
        for(const auto& pair : marks) {
            sum += pair.second;
        }
        return sum / marks.size();
    }
    bool hasPassed() {
        return getAverage() >= 40;
    }
};`,
        explanation: "The `Student` class uses a `map` to flexibly store marks for any number of subjects. Methods like `getAverage` and `hasPassed` encapsulate the business logic for calculating results, making the class a self-contained unit for managing a student's academic record."
      },
      {
        id: "oop-cpp-13-4",
        title: "Online Shopping Cart",
        description: "Simulate a shopping cart.",
        statement: "Design an online shopping cart. Create a `Product` class (name, price). Create a `ShoppingCart` class with methods to `addItem`, `removeItem`, and `getTotalCost`. The cart should store products and their quantities.",
        inputFormat: "No input.",
        outputFormat: "The final cost in the cart.",
        testCases: [{ input: "", output: "Total Cost: 80.5" }],
        solution: `#include <iostream>
#include <map>
#include <string>

class Product {
public:
    std::string name;
    double price;
};

class ShoppingCart {
private:
    std::map<std::string, std::pair<Product, int>> items; // name -> {Product, quantity}
public:
    void addItem(const Product& p) {
        if (items.count(p.name)) {
            items[p.name].second++;
        } else {
            items[p.name] = {p, 1};
        }
    }
    double getTotalCost() {
        double total = 0;
        for (const auto& pair : items) {
            total += pair.second.first.price * pair.second.second;
        }
        return total;
    }
};

int main() {
    Product p1 = {"Apple", 0.5};
    Product p2 = {"Banana", 0.3};
    ShoppingCart cart;
    cart.addItem(p1); cart.addItem(p1); cart.addItem(p2);
    // std::cout << "Total Cost: " << cart.getTotalCost() << std::endl;
    return 0;
}`,
        explanation: "The `ShoppingCart` uses a map to store products and their quantities. This is efficient because it allows quick updates to the quantity if the same product is added multiple times. The `getTotalCost` method iterates through the map, multiplying the price of each product by its quantity and adding it to the total."
      },
      {
        id: "oop-cpp-13-5",
        title: "Hospital Management",
        description: "Manage patient records.",
        statement: "Design a simple hospital management system. Create a `Patient` class (name, id, illness). Create a `Hospital` class to manage a list of patients, with methods to `admitPatient` and `dischargePatient`.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of admitting and discharging a patient.",
        testCases: [{ input: "", output: "" }],
        solution: `// See Banking System or Library System for similar structure.
// Hospital class would manage a map or vector of Patient objects.
// admitPatient would add a patient to the collection.
// dischargePatient would remove a patient.`,
        explanation: "This project follows the manager pattern. The `Hospital` class manages a collection of `Patient` objects, providing a high-level interface to interact with the patient roster. Using a `map` with patient ID as the key would allow for efficient lookups."
      },
      {
        id: "oop-cpp-13-6",
        title: "Railway Reservation System",
        description: "Simulate ticket reservations.",
        statement: "Design a simple railway reservation system. Create a `Train` class (train number, total seats, booked seats). Create methods `bookTicket(num_tickets)` and `getAvailability()`. The `bookTicket` method should check for availability before booking.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of booking tickets.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>

class Train {
private:
    int totalSeats;
    int bookedSeats;
public:
    Train(int total) : totalSeats(total), bookedSeats(0) {}
    
    int getAvailability() {
        return totalSeats - bookedSeats;
    }

    bool bookTicket(int num) {
        if (getAvailability() >= num) {
            bookedSeats += num;
            std::cout << "Booking successful." << std::endl;
            return true;
        }
        std::cout << "Booking failed: Not enough seats." << std::endl;
        return false;
    }
};

int main() {
    Train express(100);
    express.bookTicket(50);
    express.bookTicket(60);
    return 0;
}`,
        explanation: "The `Train` class encapsulates the state of a single train's reservations. The `bookTicket` method contains the crucial business logic: it first checks for availability using the `getAvailability` method before modifying the `bookedSeats` count. This ensures the number of booked seats never exceeds the total."
      },
      {
        id: "oop-cpp-13-7",
        title: "University Admission System",
        description: "Manage admissions.",
        statement: "Design a system for university admissions. Create an `Applicant` class with `name` and `score`. Create a `Course` class with `courseName`, `capacity`, and a list of admitted students. Implement an `admitStudent(Applicant)` method in the `Course` class that only admits students if there is capacity.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of admission process.",
        testCases: [{ input: "", output: "" }],
        solution: `// Similar structure to Railway Reservation.
// The Course class would have a capacity and a vector of Applicant objects.
// The admitStudent method would check if vector.size() < capacity before adding.`,
        explanation: "This project demonstrates managing a collection with a capacity constraint. The `Course` class encapsulates the list of students and the logic for admission, ensuring that the course capacity is not exceeded."
      },
      {
        id: "oop-cpp-13-8",
        title: "Contact Management App",
        description: "A simple contact manager.",
        statement: "This is a duplicate of a problem from a previous section. See problem 10-5 for a version that saves to CSV.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of contact management.",
        testCases: [{ input: "", output: "" }],
        solution: `// See solution for oop-cpp-10-5.`,
        explanation: "A contact management app is a great example of using classes to model real-world entities (`Contact`) and a manager class (`ContactManager`) to handle a collection of those entities, providing a clean API for operations like adding, searching, and saving."
      },
      {
        id: "oop-cpp-13-9",
        title: "Car Rental System",
        description: "Manage car rentals.",
        statement: "Design a car rental system. Create a `Car` class (model, isRented). Create a `RentalSystem` class to manage a fleet of cars. Implement `rentCar(model)` and `returnCar(model)` methods.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of renting and returning a car.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <vector>
#include <string>

class Car {
public:
    std::string model;
    bool isRented = false;
    Car(std::string m) : model(m) {}
};

class RentalSystem {
private:
    std::vector<Car> cars;
public:
    void addCar(const Car& c) { cars.push_back(c); }

    void rentCar(std::string model) {
        for(auto& car : cars) {
            if (car.model == model && !car.isRented) {
                car.isRented = true;
                std::cout << model << " rented." << std::endl;
                return;
            }
        }
        std::cout << "Sorry, " << model << " not available." << std::endl;
    }
};

int main() {
    RentalSystem rs;
    rs.addCar(Car("Sedan"));
    rs.rentCar("Sedan");
    rs.rentCar("Sedan"); // Will fail
    return 0;
}`,
        explanation: "The `RentalSystem` manages a collection of `Car` objects. The `rentCar` method iterates through the fleet to find an available car of the requested model. It then updates the `isRented` status of that specific car object. This demonstrates managing the state of objects within a collection."
      },
      {
        id: "oop-cpp-13-10",
        title: "Hostel Room Allocation System",
        description: "Allocate rooms in a hostel.",
        statement: "Design a simple hostel room allocation system. Create a `Room` class (room number, isOccupied). Create a `Hostel` class to manage a list of rooms. Implement a method `allocateRoom()` that finds the first available room and marks it as occupied.",
        inputFormat: "No input.",
        outputFormat: "Demonstration of room allocation.",
        testCases: [{ input: "", output: "Room 101 allocated.\nRoom 102 allocated.\nNo rooms available." }],
        solution: `#include <iostream>
#include <vector>

class Room {
public:
    int roomNumber;
    bool isOccupied = false;
    Room(int num) : roomNumber(num) {}
};

class Hostel {
private:
    std::vector<Room> rooms;
public:
    void addRoom(int roomNum) { rooms.push_back(Room(roomNum)); }

    void allocateRoom() {
        for(auto& room : rooms) {
            if (!room.isOccupied) {
                room.isOccupied = true;
                std::cout << "Room " << room.roomNumber << " allocated." << std::endl;
                return;
            }
        }
        std::cout << "No rooms available." << std::endl;
    }
};

int main() {
    Hostel h;
    h.addRoom(101);
    h.addRoom(102);
    h.allocateRoom();
    h.allocateRoom();
    h.allocateRoom();
    return 0;
}`,
        explanation: "The `Hostel` class manages a vector of `Room` objects. The `allocateRoom` method implements a simple linear search to find the first available room. It iterates through the `rooms` vector and stops at the first `Room` object where `isOccupied` is false, updates its state, and then returns."
      }
    ]
  }
];