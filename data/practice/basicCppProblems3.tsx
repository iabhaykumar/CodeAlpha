import React from 'react';
import { ProblemCategory } from './types';

export const BASIC_CPP_PROBLEMS_3: ProblemCategory[] = [
  {
    category: "Basics (41-60)",
    problems: [
        {
            id: "basic-cpp-41",
            title: "Find Second Largest",
            description: "array ka second max find karo.",
            statement: "Write a program to find the second largest unique element in an array (vector).",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The second largest integer, or a message if it doesn't exist.",
            testCases: [{ input: "5\n10 5 8 20 12", output: "12" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    std::set<int> s(arr.begin(), arr.end());
    if (s.size() < 2) {
        std::cout << "No second largest element";
    } else {
        auto it = s.end();
        --it; // Points to the largest
        --it; // Points to the second largest
        std::cout << *it;
    }
    return 0;
}`,
            explanation: "The easiest way to find the second largest unique element is to first find all unique elements. A `std::set` automatically stores unique elements in sorted order. After inserting all elements into the set, the second largest element will be the second element from the end."
        },
        {
            id: "basic-cpp-42",
            title: "Rotate Array Left by One",
            description: "single left rotation.",
            statement: "Rotate the elements of an array (vector) to the left by one position.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The rotated array.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "2 3 4 5 1 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    if (!arr.empty()) {
        std::rotate(arr.begin(), arr.begin() + 1, arr.end());
    }
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "`std::rotate` is a powerful algorithm. `std::rotate(first, middle, last)` performs a left rotation on the range `[first, last)` such that the element at `middle` becomes the new first element."
        },
        {
            id: "basic-cpp-43",
            title: "Rotate Array Right by One",
            description: "single right rotation.",
            statement: "Rotate the elements of an array (vector) to the right by one position.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The rotated array.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "5 1 2 3 4 " }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    if (!arr.empty()) {
        std::rotate(arr.rbegin(), arr.rbegin() + 1, arr.rend());
    }
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "To perform a right rotation using `std::rotate`, we can use reverse iterators (`.rbegin()`, `.rend()`). Rotating the reversed sequence to the left by one is equivalent to rotating the original sequence to the right by one."
        },
        {
            id: "basic-cpp-44",
            title: "Merge Two Arrays",
            description: "do arrays merge karo.",
            statement: "Read two arrays (vectors) and merge them into a single vector.",
            inputFormat: "N1, N1 integers, N2, N2 integers.",
            outputFormat: "The merged vector.",
            testCases: [{ input: "3\n1 2 3\n2\n4 5", output: "1 2 3 4 5 " }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int n1, n2;
    
    std::cin >> n1;
    std::vector<int> v1(n1);
    for(int i=0; i<n1; ++i) std::cin >> v1[i];
    
    std::cin >> n2;
    std::vector<int> v2(n2);
    for(int i=0; i<n2; ++i) std::cin >> v2[i];
    
    v1.insert(v1.end(), v2.begin(), v2.end());
    
    for(int x : v1) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "The `insert` method of a vector can be used to insert a range of elements from another container. `v1.insert(v1.end(), v2.begin(), v2.end())` inserts all elements from `v2` at the end of `v1`."
        },
        {
            id: "basic-cpp-45",
            title: "Check Sorted Array",
            description: "array sorted hai ya nahi.",
            statement: "Check if a given array (vector) of integers is sorted in non-decreasing order.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "5\n10 20 30 40 50", output: "Yes" }, { input: "5\n10 20 15 30 40", output: "No" }],
            solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) {
        std::cin >> arr[i];
    }
    
    if (std::is_sorted(arr.begin(), arr.end())) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "`std::is_sorted` from `<algorithm>` checks if the elements in a range are sorted in non-decreasing order. It returns `true` if they are, and `false` otherwise."
        },
        {
            id: "basic-cpp-46",
            title: "Insert Element in Array",
            description: "given position pe insert karo.",
            statement: "Insert an element into a vector at a specific position.",
            inputFormat: "N, N integers, then the element to insert, then the position.",
            outputFormat: "The new vector.",
            testCases: [{ input: "5\n10 20 30 40 50\n25 2", output: "10 20 25 30 40 50 " }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int n, val, pos;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    std::cin >> val >> pos;
    
    arr.insert(arr.begin() + pos, val);
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "The `insert` method of a vector makes this operation simple. `arr.begin() + pos` calculates an iterator to the desired insertion position, and the vector automatically handles shifting all subsequent elements."
        },
        {
            id: "basic-cpp-47",
            title: "Delete Element from Array",
            description: "kisi index/element ko delete karo.",
            statement: "Delete an element from a vector at a specific position.",
            inputFormat: "N, N integers, then the position to delete.",
            outputFormat: "The new vector.",
            testCases: [{ input: "5\n10 20 30 40 50\n2", output: "10 20 40 50 " }],
            solution: `#include <iostream>
#include <vector>

int main() {
    int n, pos;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int i=0; i<n; ++i) std::cin >> arr[i];
    std::cin >> pos;
    
    if (pos >= 0 && pos < arr.size()) {
        arr.erase(arr.begin() + pos);
    }
    
    for(int x : arr) {
        std::cout << x << " ";
    }
    return 0;
}`,
            explanation: "The `erase` method of a vector removes elements. `arr.erase(arr.begin() + pos)` removes the single element at the specified position. The vector automatically shifts subsequent elements to fill the gap."
        },
        {
            id: "basic-cpp-48",
            title: "Count Vowels in String",
            description: "vowels count karo.",
            statement: "Count the number of vowels (a, e, i, o, u) in a string, case-insensitively.",
            inputFormat: "A single string.",
            outputFormat: "The vowel count.",
            testCases: [{ input: "Programming", output: "3" }],
            solution: `#include <iostream>
#include <string>
#include <cctype>

int main() {
    std::string s;
    std::getline(std::cin, s);
    int count = 0;
    for (char c : s) {
        char lower_c = tolower(c);
        if (lower_c == 'a' || lower_c == 'e' || lower_c == 'i' || lower_c == 'o' || lower_c == 'u') {
            count++;
        }
    }
    std::cout << count;
    return 0;
}`,
            explanation: "We iterate through each character of the string. For each character, we convert it to lowercase using `tolower()` from `<cctype>` and check if it matches any of the five vowels."
        },
        {
            id: "basic-cpp-49",
            title: "Count Words in Sentence",
            description: "space-separated words count karo.",
            statement: "Given a sentence, count the number of words. Words are separated by spaces.",
            inputFormat: "A single line of text.",
            outputFormat: "The word count.",
            testCases: [{ input: "Hello world how are you", output: "5" }],
            solution: `#include <iostream>
#include <string>
#include <sstream>

int main() {
    std::string line;
    std::getline(std::cin, line);
    std::stringstream ss(line);
    std::string word;
    int count = 0;
    while (ss >> word) {
        count++;
    }
    std::cout << count;
    return 0;
}`,
            explanation: "A `std::stringstream` treats a string like an input stream. We can use the extraction operator `>>` to read words from it one by one, which automatically handles spaces. We simply count how many words we can extract."
        },
        {
            id: "basic-cpp-50",
            title: "Reverse a String",
            description: "string reverse karo.",
            statement: "Write a program to reverse a `std::string`.",
            inputFormat: "A single string.",
            outputFormat: "The reversed string.",
            testCases: [{ input: "hello", output: "olleh" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s;
    std::getline(std::cin, s);
    std::reverse(s.begin(), s.end());
    std::cout << s;
    return 0;
}`,
            explanation: "The `std::reverse` algorithm can be used on any container with bidirectional iterators, including `std::string`. It reverses the string in-place."
        },
        {
            id: "basic-cpp-51",
            title: "Check Palindrome String",
            description: "string palindrome check.",
            statement: "Check if a string is a palindrome (reads the same forwards and backwards).",
            inputFormat: "A single string.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "madam", output: "Yes" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s;
    std::cin >> s;
    std::string reversed_s = s;
    std::reverse(reversed_s.begin(), reversed_s.end());
    if (s == reversed_s) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "A simple way to check for a palindrome is to create a reversed copy of the string and then compare it with the original. If they are equal, the string is a palindrome."
        },
        {
            id: "basic-cpp-52",
            title: "Find First Non-Repeating Character",
            description: "pehla unique char nikaalo.",
            statement: "Given a string, find its first non-repeating character.",
            inputFormat: "A string.",
            outputFormat: "The first unique character, or a message if none exists.",
            testCases: [{ input: "swiss", output: "w" }],
            solution: `#include <iostream>
#include <string>
#include <map>

int main() {
    std::string s;
    std::cin >> s;
    std::map<char, int> freq;
    for (char c : s) {
        freq[c]++;
    }
    
    for (char c : s) {
        if (freq[c] == 1) {
            std::cout << c;
            return 0;
        }
    }
    
    std::cout << "No unique character found.";
    return 0;
}`,
            explanation: "This solution uses a two-pass approach. The first pass iterates through the string to build a frequency map of all characters. The second pass iterates through the string again, and for each character, it checks the map. The first character it finds with a frequency of 1 is the answer."
        },
        {
            id: "basic-cpp-53",
            title: "Anagram Check (two strings)",
            description: "anagram hone ki jaanch.",
            statement: "Two strings are anagrams if they contain the same characters with the same frequencies (e.g., 'listen' and 'silent'). Check if two given strings are anagrams.",
            inputFormat: "Two strings.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "listen silent", output: "Yes" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s1, s2;
    std::cin >> s1 >> s2;
    
    std::sort(s1.begin(), s1.end());
    std::sort(s2.begin(), s2.end());
    
    if (s1 == s2) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "The simplest way to check for anagrams is to sort both strings alphabetically. If the sorted versions are identical, the original strings must be anagrams."
        },
        {
            id: "basic-cpp-54",
            title: "Count Character Frequency",
            description: "har char ka count nikaalo.",
            statement: "Count how many times each character appears in a string and print the result.",
            inputFormat: "A single string.",
            outputFormat: "Each character and its frequency.",
            testCases: [{ input: "banana", output: "a: 3\nb: 1\nn: 2\n" }],
            solution: `#include <iostream>
#include <string>
#include <map>

int main() {
    std::string s;
    std::cin >> s;
    std::map<char, int> freq;
    for (char c : s) {
        freq[c]++;
    }
    
    for (auto const& [key, val] : freq) {
        std::cout << key << ": " << val << std::endl;
    }
    return 0;
}`,
            explanation: "A `std::map` is a perfect tool for counting frequencies. We iterate through the string, and for each character, we use it as a key in the map and increment its associated value. The `++` operator on a map's value conveniently initializes it to 0 if the key doesn't exist before incrementing."
        },
        {
            id: "basic-cpp-55",
            title: "Convert String to Uppercase",
            description: "uppercase conversion.",
            statement: "Read a string and convert all its lowercase letters to uppercase.",
            inputFormat: "A string.",
            outputFormat: "The uppercase string.",
            testCases: [{ input: "Hello", output: "HELLO" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

int main() {
    std::string s;
    std::cin >> s;
    std::transform(s.begin(), s.end(), s.begin(), ::toupper);
    std::cout << s;
    return 0;
}`,
            explanation: "`std::transform` applies an operation to a range of elements. Here, we apply the `::toupper` function to every character in the string, modifying it in-place."
        },
        {
            id: "basic-cpp-56",
            title: "Convert String to Lowercase",
            description: "lowercase conversion.",
            statement: "Read a string and convert all its uppercase letters to lowercase.",
            inputFormat: "A string.",
            outputFormat: "The lowercase string.",
            testCases: [{ input: "WORLD", output: "world" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

int main() {
    std::string s;
    std::cin >> s;
    std::transform(s.begin(), s.end(), s.begin(), ::tolower);
    std::cout << s;
    return 0;
}`,
            explanation: "Similar to uppercase conversion, this uses `std::transform` with the `::tolower` function to convert each character to lowercase."
        },
        {
            id: "basic-cpp-57",
            title: "Remove Spaces from String",
            description: "spaces hatao.",
            statement: "Write a program to remove all space characters from a string.",
            inputFormat: "A string with spaces.",
            outputFormat: "The string without spaces.",
            testCases: [{ input: "Hello World", output: "HelloWorld" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s;
    std::getline(std::cin, s);
    s.erase(std::remove(s.begin(), s.end(), ' '), s.end());
    std::cout << s;
    return 0;
}`,
            explanation: "This is the standard 'erase-remove' idiom in C++. `std::remove` shuffles all elements that are not equal to the given value to the beginning of the range and returns an iterator to the new end. `s.erase()` then removes the unwanted elements from the end."
        },
        {
            id: "basic-cpp-58",
            title: "Check Substring",
            description: "substring present hai ya nahi.",
            statement: "Check if a given string contains a specific substring.",
            inputFormat: "Two strings: the main string and the substring to find.",
            outputFormat: "'Found' or 'Not Found'.",
            testCases: [{ input: "CodeAlpha\nAlpha", output: "Found" }],
            solution: `#include <iostream>
#include <string>

int main() {
    std::string main_str, sub_str;
    std::cin >> main_str >> sub_str;
    if (main_str.find(sub_str) != std::string::npos) {
        std::cout << "Found";
    } else {
        std::cout << "Not Found";
    }
    return 0;
}`,
            explanation: "The `std::string::find` method searches for a substring. If the substring is found, it returns the starting index of the first occurrence. If not found, it returns a special value `std::string::npos`."
        },
        {
            id: "basic-cpp-59",
            title: "Replace Character in String",
            description: "char replace karo.",
            statement: "Replace all occurrences of a character 'a' with 'x' in a string.",
            inputFormat: "A single string.",
            outputFormat: "The modified string.",
            testCases: [{ input: "banana", output: "bxnxnx" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s;
    std::cin >> s;
    std::replace(s.begin(), s.end(), 'a', 'x');
    std::cout << s;
    return 0;
}`,
            explanation: "`std::replace` from `<algorithm>` iterates through a range and replaces all occurrences of a specific value with a new value."
        },
        {
            id: "basic-cpp-60",
            title: "String Palindrome (ignoring case & spaces)",
            description: "cleaned palindrome check.",
            statement: "Check if a string is a palindrome after converting it to lowercase and removing all non-alphanumeric characters.",
            inputFormat: "A single string.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "A man, a plan, a canal: Panama", output: "Yes" }],
            solution: `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

int main() {
    std::string line;
    std::getline(std::cin, line);
    
    std::string cleaned_str;
    for (char c : line) {
        if (isalnum(c)) {
            cleaned_str += tolower(c);
        }
    }
    
    std::string reversed_str = cleaned_str;
    std::reverse(reversed_str.begin(), reversed_str.end());
    
    if (cleaned_str == reversed_str) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
            explanation: "This requires a two-step process. First, we create a 'cleaned' version of the string by iterating through the original and keeping only alphanumeric characters, converting them to lowercase. Then, we perform the standard palindrome check on this cleaned string."
        }
    ]
  }
];