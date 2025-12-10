import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_C: ProblemCategory[] = [
    {
        category: "3. Strings",
        problems: [
            {
                id: "dsa-cpp-c1",
                title: "Reverse a String",
                description: "Reverse the characters of a given string.",
                statement: "Write a function that takes a string and reverses it in-place.",
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
                explanation: "The C++ Standard Library's `<algorithm>` header provides the `std::reverse` function. It takes two iterators (in this case, the beginning and end of the string) and reverses the elements within that range in-place. This is the most concise and idiomatic way to reverse a string in C++."
            },
            {
                id: "dsa-cpp-c2",
                title: "Check Palindrome",
                description: "Check if a string is a palindrome.",
                statement: "A palindrome is a string that reads the same forwards and backwards. Write a function to check if a given string is a palindrome.",
                inputFormat: "A single string.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "madam", output: "Yes" }, { input: "hello", output: "No" }],
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
                explanation: "An easy way to check for a palindrome is to create a copy of the original string, reverse the copy, and then compare the two. If the original string and its reversed version are identical, it's a palindrome."
            },
            {
                id: "dsa-cpp-c3",
                title: "Check Anagram",
                description: "Check if two strings are anagrams.",
                statement: "Two strings are anagrams if they contain the same characters with the same frequencies (e.g., 'listen' and 'silent'). Check if two strings are anagrams.",
                inputFormat: "Two strings separated by a space.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "listen silent", output: "Yes" }, { input: "hello world", output: "No" }],
                solution: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string s1, s2;
    std::cin >> s1 >> s2;
    
    if (s1.length() != s2.length()) {
        std::cout << "No";
        return 0;
    }
    
    std::sort(s1.begin(), s1.end());
    std::sort(s2.begin(), s2.end());
    
    if (s1 == s2) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
                explanation: "The most straightforward way to check for anagrams is to sort both strings alphabetically. If the sorted versions of the two strings are identical, it means they were composed of the same characters, and thus are anagrams. We first check if the lengths are different as a quick optimization."
            },
            {
                id: "dsa-cpp-c4",
                title: "Count Vowels & Consonants",
                description: "Count the number of vowels and consonants.",
                statement: "Given a string, count the total number of vowels and consonants in it. Consider vowels as 'a', 'e', 'i', 'o', 'u' (case-insensitive).",
                inputFormat: "A single string.",
                outputFormat: "Two lines: 'Vowels: [count]' and 'Consonants: [count]'.",
                testCases: [{ input: "CodeAlpha", output: "Vowels: 4\nConsonants: 5" }],
                solution: `#include <iostream>
#include <string>
#include <cctype>

int main() {
    std::string s;
    std::getline(std::cin, s);
    
    int vowels = 0, consonants = 0;
    
    for (char c : s) {
        char lower_c = tolower(c);
        if (isalpha(lower_c)) {
            if (lower_c == 'a' || lower_c == 'e' || lower_c == 'i' || lower_c == 'o' || lower_c == 'u') {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    
    std::cout << "Vowels: " << vowels << std::endl;
    std::cout << "Consonants: " << consonants << std::endl;
    
    return 0;
}`,
                explanation: "The program iterates through each character of the string. It first checks if the character is an alphabet using `isalpha()`. If it is, it converts the character to lowercase and checks if it's one of the five vowels. If it is a vowel, the vowel counter is incremented; otherwise, the consonant counter is incremented."
            },
            {
                id: "dsa-cpp-c5",
                title: "Longest Common Prefix",
                description: "Find the longest common prefix among an array of strings.",
                statement: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
                inputFormat: "N, then N strings on new lines.",
                outputFormat: "The longest common prefix.",
                testCases: [{ input: "3\nflower\nflow\nflight", output: "fl" }],
                solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

std::string longestCommonPrefix(std::vector<std::string>& strs) {
    if (strs.empty()) return "";
    
    std::sort(strs.begin(), strs.end());
    
    std::string first = strs[0];
    std::string last = strs.back();
    std::string result = "";
    
    for (int i = 0; i < first.length(); ++i) {
        if (first[i] == last[i]) {
            result += first[i];
        } else {
            break;
        }
    }
    return result;
}

int main() {
    // ... read vector of strings ...
    return 0;
}`,
                explanation: "A clever approach is to sort the array of strings alphabetically. The longest common prefix of all strings will then be the common prefix between the very first and the very last string in the sorted array. We can simply iterate through these two strings and find how many characters they share from the beginning."
            },
            {
                id: "dsa-cpp-c6",
                title: "First Non-Repeating Character",
                description: "Find the first unique character in a string.",
                statement: "Given a string, find its first non-repeating character and return it. If it does not exist, return a special character like '$'.",
                inputFormat: "A single string.",
                outputFormat: "The first non-repeating character.",
                testCases: [{ input: "swiss", output: "w" }, { input: "aabb", output: "$" }],
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
    
    std::cout << "$";
    return 0;
}`,
                explanation: "This solution uses a two-pass approach. The first pass iterates through the string to build a frequency map (`std::map`) of all characters. The second pass iterates through the string again from the beginning. The first character it encounters that has a frequency of 1 in the map is the answer."
            },
            {
                id: "dsa-cpp-c7",
                title: "Remove Adjacent Duplicates",
                description: "Remove all adjacent duplicates from a string.",
                statement: "Given a string, repeatedly remove adjacent duplicate characters until no more removals can be made. For example, 'abbaca' -> 'aaca' -> 'ca'.",
                inputFormat: "A single string.",
                outputFormat: "The final string after all duplicates are removed.",
                testCases: [{ input: "abbaca", output: "ca" }],
                solution: `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string s;
    std::cin >> s;
    
    std::string result = "";
    for (char c : s) {
        if (!result.empty() && result.back() == c) {
            result.pop_back();
        } else {
            result.push_back(c);
        }
    }
    
    std::cout << result;
    return 0;
}`,
                explanation: "This problem can be efficiently solved using a stack-like approach. We build a `result` string. For each character from the input, we check if it's the same as the last character in our `result`. If it is, we pop the last character from `result` (simulating a stack pop). If it's not, we push the new character onto `result`."
            },
            {
                id: "dsa-cpp-c8",
                title: "Longest Substring Without Repeating Characters",
                description: "Find the length of the longest substring with unique characters.",
                statement: "Given a string, find the length of the longest substring without repeating characters.",
                inputFormat: "A single string.",
                outputFormat: "The length of the longest substring.",
                testCases: [{ input: "abcabcbb", output: "3" }],
                solution: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

int main() {
    std::string s;
    std::cin >> s;
    
    std::unordered_map<char, int> char_map;
    int max_len = 0;
    int start = 0;
    
    for (int end = 0; end < s.length(); ++end) {
        char right_char = s[end];
        if (char_map.count(right_char)) {
            start = std::max(start, char_map[right_char] + 1);
        }
        char_map[right_char] = end;
        max_len = std::max(max_len, end - start + 1);
    }
    
    std::cout << max_len;
    return 0;
}`,
                explanation: "This is a classic sliding window problem. We use a hash map (`std::unordered_map`) to store the most recent index of each character we've seen. As we expand our window from the right (`end` pointer), if we encounter a character that is already in our map, it means we have a repeat. We then need to shrink our window from the left (`start` pointer) to a position right after the last time we saw that character."
            },
            {
                id: "dsa-cpp-c9",
                title: "Check Rotation",
                description: "Check if one string is a rotation of another.",
                statement: "Given two strings, `s1` and `s2`, check if `s2` is a rotation of `s1`. Example: 'abcde' is a rotation of 'cdeab'.",
                inputFormat: "Two strings, s1 and s2.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "cdeab abcde", output: "Yes" }],
                solution: `#include <iostream>
#include <string>

int main() {
    std::string s1, s2;
    std::cin >> s1 >> s2;
    
    if (s1.length() != s2.length()) {
        std::cout << "No";
        return 0;
    }
    
    std::string temp = s1 + s1;
    
    if (temp.find(s2) != std::string::npos) {
        std::cout << "Yes";
    } else {
        std::cout << "No";
    }
    return 0;
}`,
                explanation: "A clever trick for this problem is to create a new string by concatenating the first string with itself (e.g., 'abcde' becomes 'abcdeabcde'). The second string is a rotation of the first if and only if it is a substring of this new concatenated string. We use `string::find` to check for the substring."
            },
            {
                id: "dsa-cpp-c10",
                title: "String Compression (Basic RLE)",
                description: "Perform Run-Length Encoding.",
                statement: "Implement basic string compression using counts of repeated characters. For example, the string 'aaabbc' would become 'a3b2c1'.",
                inputFormat: "A string.",
                outputFormat: "The compressed string.",
                testCases: [{ input: "aaabbcccc", output: "a3b2c4" }],
                solution: `#include <iostream>
#include <string>

int main() {
    std::string s;
    std::cin >> s;
    
    if (s.empty()) return 0;
    
    std::string compressed = "";
    int count = 1;
    
    for (int i = 1; i <= s.length(); ++i) {
        if (i < s.length() && s[i] == s[i-1]) {
            count++;
        } else {
            compressed += s[i-1];
            compressed += std::to_string(count);
            count = 1;
        }
    }
    
    std::cout << compressed;
    return 0;
}`,
                explanation: "The program iterates through the string, keeping a count of consecutive identical characters. When the character changes (or the end of the string is reached), it appends the previous character and its count to the result string, then resets the counter."
            }
        ]
    }
];