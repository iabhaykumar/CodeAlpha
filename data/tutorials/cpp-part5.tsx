import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const CPP_PART5_TOPICS: Topic[] = [
  // 6. Advanced Exception Handling
  {
    id: 'cpp-exceptions-advanced',
    title: 'Advanced Exception Handling',
    parent: '6. Advanced Exception Handling',
    content: (
      <>
        <p className="mb-4">
          While basic <code>try-catch</code> blocks handle simple errors, robust C++ applications often require more sophisticated error management using the standard exception hierarchy and custom exception classes.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">The Standard Exception Class</h3>
        <p className="mb-4">
            C++ provides a base class <code>std::exception</code> declared in <code>&lt;exception&gt;</code>. It has a virtual member function <code>what()</code> that returns a null-terminated character sequence (C-string) describing the exception.
        </p>
        <CodeBlock language="cpp" code={`#include <iostream>
#include <exception>
#include <vector>
using namespace std;

int main() {
    try {
        // Attempting to allocate an impossibly large amount of memory
        // This throws a std::bad_alloc exception
        vector<int> myvector(1000000000000); 
    } catch (exception& e) {
        cout << "Standard Exception Caught: " << e.what() << endl;
    }
    return 0;
}`} />
      </>
    )
  },
  {
    id: 'cpp-custom-exceptions',
    title: 'Creating Custom Exceptions',
    parent: '6. Advanced Exception Handling',
    content: (
      <>
        <p className="mb-4">
          You can define your own exceptions by inheriting from <code>std::exception</code>. This is useful when you need to signal specific error conditions unique to your application (e.g., <code>InsufficientFundsException</code> in a banking app).
        </p>
        
        <h3 className="text-xl font-bold mt-4 mb-2">Implementing a Custom Class</h3>
        <p className="mb-4">
            To create a custom exception, derive a class from <code>std::exception</code> and override the <code>what()</code> function. Note the use of <code>noexcept</code> (or <code>throw()</code> in older C++) to promise that the method itself won't throw exceptions.
        </p>
        <CodeBlock language="cpp" code={`#include <iostream>
#include <exception>
using namespace std;

// 1. Define the custom exception class
class InvalidAgeException : public exception {
    public:
        // Override the what() method
        const char* what() const noexcept override {
            return "Invalid Age Exception: Age must be 18 or older.";
        }
};

// 2. Function that throws the custom exception
void checkAge(int age) {
    if (age < 18) {
        // Throw an instance of the custom class
        throw InvalidAgeException();
    } else {
        cout << "Access Granted. Age is " << age << endl;
    }
}

int main() {
    try {
        checkAge(20); // Valid
        checkAge(15); // Will throw exception
    } 
    catch (InvalidAgeException& e) {
        // 3. Catch the specific custom exception
        cout << "Caught Custom Exception: " << e.what() << endl;
    } 
    catch (exception& e) {
        // Fallback for other standard exceptions
        cout << "General Error: " << e.what() << endl;
    }
    return 0;
}`} />
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h4 className="font-bold text-blue-900 mb-1">Why Custom Exceptions?</h4>
            <p className="text-blue-800 text-sm">
                They allow you to catch specific types of errors separately. For example, you might want to handle a <code>NetworkError</code> by retrying the connection, but handle a <code>DatabaseError</code> by logging it and notifying the admin. Generic exceptions don't give you this granular control.
            </p>
        </div>
      </>
    )
  }
];