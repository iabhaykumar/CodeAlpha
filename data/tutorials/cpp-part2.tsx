
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const CPP_PART2_TOPICS: Topic[] = [
  // 3. Object-Oriented Programming
  {
    id: 'cpp-oop-classes',
    title: 'Classes & Objects',
    parent: '3. OOP',
    content: (
      <>
        <p className="mb-4">C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects, along with its attributes and methods.</p>
        <CodeBlock language="cpp" code={`class Car {
  public:
    string brand;
    string model;
    int year;
    
    // Constructor
    Car(string x, string y, int z) {
      brand = x;
      model = y;
      year = z;
    }
    
    // Method to display info
    void displayInfo() {
        cout << brand << " " << model << " (" << year << ")" << endl;
    }
    
    void honk() {
        cout << "Beep beep!" << endl;
    }
};

int main() {
  Car myCar("BMW", "X5", 1999);
  myCar.displayInfo();
  myCar.honk();
  return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-encapsulation',
    title: 'Encapsulation',
    parent: '3. OOP',
    content: (
      <>
        <p className="mb-4">Encapsulation is ensuring sensitive data is hidden from users. This is achieved by declaring class variables as <code>private</code> and providing public <code>get</code> and <code>set</code> methods.</p>
        <CodeBlock language="cpp" code={`class Employee {
  private:
    int salary; // Private attribute

  public:
    // Setter
    void setSalary(int s) {
      if(s > 0) { // Add validation logic
        salary = s;
      }
    }
    // Getter
    int getSalary() {
      return salary;
    }
};`} />
      </>
    )
  },
  {
    id: 'cpp-inheritance',
    title: 'Inheritance',
    parent: '3. OOP',
    content: (
      <>
        <p className="mb-4">Inheritance allows us to inherit attributes and methods from one class to another. C++ supports <strong>Multiple Inheritance</strong> (inheriting from more than one class), which Java/C# do not.</p>
        <CodeBlock language="cpp" code={`// Base class
class Vehicle {
  public:
    string brand = "Ford";
    void honk() { cout << "Tuut, tuut! \\n"; }
};

// Derived class
class Car : public Vehicle {
  public:
    string model = "Mustang";
    
    void showDetails() {
        cout << brand << " " << model << endl;
    }
};

int main() {
  Car myCar;
  myCar.honk(); // Inherited method
  myCar.showDetails();
  return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-polymorphism',
    title: 'Polymorphism (Virtual Functions)',
    parent: '3. OOP',
    content: (
      <>
        <p className="mb-4">Polymorphism means "many forms". In C++, we use <strong>Virtual Functions</strong> to achieve runtime polymorphism (overriding).</p>
        <CodeBlock language="cpp" code={`#include <iostream>
using namespace std;

class Animal {
  public:
    // 'virtual' allows derived classes to override this method
    virtual void animalSound() {
      cout << "The animal makes a sound \\n";
    }
};

class Pig : public Animal {
  public:
    void animalSound() override {
      cout << "The pig says: wee wee \\n";
    }
};

class Dog : public Animal {
  public:
    void animalSound() override {
      cout << "The dog says: bow wow \\n";
    }
};

// Reusable function that works for ANY Animal
void playSound(Animal* animal) {
    animal->animalSound(); // Calls the correct method based on object type
}

int main() {
  Animal* a1 = new Pig();
  Animal* a2 = new Dog();
  
  playSound(a1); // Outputs: The pig says: wee wee
  playSound(a2); // Outputs: The dog says: bow wow
  
  return 0;
}`} />
      </>
    )
  }
];
