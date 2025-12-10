import React from 'react';
import { ProblemCategory } from './types';

export const OOP_CPP_PROBLEMS_10: ProblemCategory[] = [
  {
    category: "10.0 File Handling OOP",
    problems: [
      {
        id: "oop-cpp-10-1",
        title: "Student record class with file save/load",
        description: "Serialize an object to a file.",
        statement: "Create a `Student` class with `name` and `roll`. Implement `saveToFile()` and `loadFromFile()` methods that write/read the object's state to/from a text file.",
        inputFormat: "No input.",
        outputFormat: "A file is created and then read from, printing the student's details.",
        testCases: [{ input: "", output: "Name: Alice, Roll: 101" }],
        solution: `#include <iostream>
#include <fstream>
#include <string>

class Student {
public:
    std::string name;
    int roll;

    // Default constructor for reading from file
    Student() : roll(0) {} 
    Student(std::string n, int r) : name(n), roll(r) {}

    void saveToFile() {
        std::ofstream outfile(name + ".txt");
        outfile << name << std::endl << roll << std::endl;
        outfile.close();
    }

    void loadFromFile(std::string student_name) {
        std::ifstream infile(student_name + ".txt");
        if (infile.is_open()) {
            std::getline(infile, name);
            infile >> roll;
            infile.close();
        }
    }

    void display() {
        std::cout << "Name: " << name << ", Roll: " << roll << std::endl;
    }
};

int main() {
    Student s1("Alice", 101);
    s1.saveToFile();

    Student s2;
    s2.loadFromFile("Alice");
    s2.display();
    return 0;
}`,
        explanation: "This solution demonstrates object serialization to a text file. The `saveToFile` method opens an output file stream (`ofstream`) and writes the member variables. The `loadFromFile` method opens an input file stream (`ifstream`) and reads the data back into the object's members. This allows the object's state to be persisted."
      },
      {
        id: "oop-cpp-10-2",
        title: "Bank account statements to file",
        description: "Log transactions to a file.",
        statement: "Enhance a `BankAccount` class. Each time a `deposit` or `withdraw` is made, the transaction (type, amount, new balance, timestamp) should be appended to a log file named after the account number.",
        inputFormat: "No input.",
        outputFormat: "A log file is created with transaction details.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <fstream>
#include <string>
#include <ctime>

class BankAccount {
private:
    std::string accNumber;
    double balance;

public:
    BankAccount(std::string accNum, double b) : accNumber(accNum), balance(b) {}

    void logTransaction(const std::string& type, double amount) {
        std::ofstream logfile(accNumber + "_log.txt", std::ios::app); // Append mode
        if (logfile.is_open()) {
            time_t now = time(0);
            char* dt = ctime(&now);
            // ctime adds a newline, so handle it
            if(dt[strlen(dt) - 1] == '\\n') dt[strlen(dt) - 1] = 0;

            logfile << "Timestamp: " << dt;
            logfile << ", Type: " << type << ", Amount: " << amount << ", New Balance: " << balance << std::endl;
            logfile.close();
        }
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            logTransaction("DEPOSIT", amount);
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            logTransaction("WITHDRAW", amount);
        }
    }
};

int main() {
    BankAccount myAcc("12345", 1000);
    myAcc.deposit(500);
    myAcc.withdraw(200);
    return 0;
}`,
        explanation: "The `logTransaction` method is called by `deposit` and `withdraw`. It opens a log file in append mode (`std::ios::app`) to ensure new transactions are added to the end. It gets the current time using `<ctime>` and writes a formatted string with all transaction details to the file."
      },
      {
        id: "oop-cpp-10-3",
        title: "Book inventory system using file",
        description: "Persistent inventory.",
        statement: "Create `Book` and `Inventory` classes. The `Inventory` class should be able to `addBook` to a CSV file (`inventory.csv`) and `displayInventory` from the file.",
        inputFormat: "No input.",
        outputFormat: "Prints the content of the inventory file.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <sstream>

class Book {
public:
    int id;
    std::string title;
    std::string author;
    Book(int i, std::string t, std::string a) : id(i), title(t), author(a) {}
};

class Inventory {
private:
    std::string filename = "inventory.csv";
public:
    Inventory() {
        std::ofstream file(filename, std::ios::app); // Create if not exists
        if (file.tellp() == 0) { // Check if file is empty
             file << "ID,Title,Author\\n";
        }
    }
    void addBook(const Book& book) {
        std::ofstream file(filename, std::ios::app);
        file << book.id << "," << book.title << "," << book.author << std::endl;
    }
    void displayInventory() {
        std::ifstream file(filename);
        std::string line;
        while (std::getline(file, line)) {
            std::cout << line << std::endl;
        }
    }
};

int main() {
    Inventory inv;
    Book b1(1, "The Hobbit", "Tolkien");
    inv.addBook(b1);
    inv.displayInventory();
    return 0;
}`,
        explanation: "This example shows a simple persistent storage system using a CSV file. The `Inventory` constructor checks if the file is empty and writes a header row if needed. The `addBook` method appends a new record, and `displayInventory` reads and prints all lines."
      },
      {
        id: "oop-cpp-10-4",
        title: "Logging system class",
        description: "Create a file logger class.",
        statement: "Create a `Logger` class that follows the Singleton pattern. It should have a method `log(string message)` that appends a timestamped message to a log file.",
        inputFormat: "No input.",
        outputFormat: "A log file is created and written to.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <fstream>
#include <string>
#include <ctime>

class Logger {
private:
    static Logger* instance;
    std::ofstream logfile;
    
    // Private constructor
    Logger(const std::string& filename) {
        logfile.open(filename, std::ios::app);
    }

public:
    // Delete copy constructor and assignment operator
    Logger(Logger const&) = delete;
    void operator=(Logger const&) = delete;

    static Logger* getInstance() {
        if (instance == nullptr) {
            instance = new Logger("app.log");
        }
        return instance;
    }

    void log(const std::string& message) {
        if (logfile.is_open()) {
            time_t now = time(0);
            char* dt = ctime(&now);
            dt[strlen(dt) - 1] = 0; // Remove newline
            logfile << "[" << dt << "] " << message << std::endl;
        }
    }
};

Logger* Logger::instance = nullptr;

int main() {
    Logger::getInstance()->log("Application starting.");
    Logger::getInstance()->log("Processing task A.");
    return 0;
}`,
        explanation: "This combines the Singleton pattern with file handling. The `Logger` class ensures only one instance exists, preventing multiple parts of an application from trying to write to the same file simultaneously in an uncoordinated way. All logging is done through the globally accessible `getInstance()` method."
      },
      {
        id: "oop-cpp-10-5",
        title: "Contact manager (save as CSV)",
        description: "Save object data to CSV format.",
        statement: "Create a `Contact` class and a `ContactManager` class. The manager should hold a vector of `Contact` objects. Implement a `saveToCsv(filename)` method that writes all contacts to a CSV file.",
        inputFormat: "No input.",
        outputFormat: "A CSV file `contacts.csv` is created.",
        testCases: [{ input: "", output: "" }],
        solution: `#include <iostream>
#include <fstream>
#include <vector>
#include <string>

class Contact {
public:
    std::string name;
    std::string phone;
    Contact(std::string n, std::string p) : name(n), phone(p) {}
};

class ContactManager {
private:
    std::vector<Contact> contacts;
public:
    void addContact(const Contact& c) {
        contacts.push_back(c);
    }
    
    void saveToCsv(const std::string& filename) {
        std::ofstream file(filename);
        if(!file.is_open()) return;

        file << "Name,Phone\\n"; // Header
        for(const auto& contact : contacts) {
            file << contact.name << "," << contact.phone << "\\n";
        }
        file.close();
    }
};

int main() {
    ContactManager cm;
    cm.addContact(Contact("Alice", "111-222"));
    cm.addContact(Contact("Bob", "333-444"));
    cm.saveToCsv("contacts.csv");
    return 0;
}`,
        explanation: "The `ContactManager` class holds the data in memory in a `std::vector`. The `saveToCsv` method is responsible for persisting this in-memory state to a disk file. It iterates through the vector and writes each `Contact` object as a formatted line in the CSV file."
      }
    ]
  }
];