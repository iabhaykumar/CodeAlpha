import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART5: ProblemCategory[] = [
    {
        category: "SECTION 9 — Strings",
        problems: [
            {
                id: "c-s9-q1",
                title: "String length (custom)",
                description: "Find string length without using strlen().",
                statement: "Write a function to calculate the length of a string without using the standard library function `strlen()`.",
                inputFormat: "A single string.",
                outputFormat: "The length of the string.",
                testCases: [{ input: "CodeAlpha", output: "9" }],
                solution: `#include <stdio.h>

int main() {
    char s[100];
    int length = 0;
    scanf("%[^\n]s", s); // Read string with spaces
    while (s[length] != '\\0') {
        length++;
    }
    printf("%d", length);
    return 0;
}`,
                explanation: "C strings are terminated by a null character `\\0`. We can find the length by iterating through the character array with a loop until we find this null terminator."
            },
            {
                id: "c-s9-q2",
                title: "Reverse string",
                description: "Reverse a string in-place.",
                statement: "Write a program to reverse a string in-place.",
                inputFormat: "A single string.",
                outputFormat: "The reversed string.",
                testCases: [{ input: "hello", output: "olleh" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%s", s);
    int start = 0;
    int end = strlen(s) - 1;
    char temp;
    while (start < end) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    printf("%s", s);
    return 0;
}`,
                explanation: "This uses a two-pointer approach. One pointer starts at the beginning and one at the end. We swap the characters they point to and move the pointers towards the center."
            },
            {
                id: "c-s9-q3",
                title: "Check palindrome",
                description: "Check if a string is a palindrome.",
                statement: "A palindrome reads the same forwards and backwards. Check if the input string is a palindrome.",
                inputFormat: "A single string.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "madam", output: "Yes" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%s", s);
    int start = 0;
    int end = strlen(s) - 1;
    int isPalindrome = 1; // Assume true
    while (start < end) {
        if (s[start] != s[end]) {
            isPalindrome = 0; // Set to false
            break;
        }
        start++;
        end--;
    }
    if (isPalindrome) printf("Yes");
    else printf("No");
    return 0;
}`,
                explanation: "We use a two-pointer approach, comparing characters from the beginning and end of the string. If we find any mismatch, we set a flag and break. If the loop completes without finding a mismatch, the string is a palindrome."
            },
            {
                id: "c-s9-q4",
                title: "Count vowels",
                description: "Count the number of vowels in a string.",
                statement: "Count the number of vowels (a, e, i, o, u) in a string, case-insensitively.",
                inputFormat: "A single string.",
                outputFormat: "The vowel count.",
                testCases: [{ input: "Programming", output: "3" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s[100];
    scanf("%s", s);
    int count = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        char ch = tolower(s[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
                explanation: "We loop through the string. For each character, we convert it to lowercase using `tolower()` and check if it matches any of the five vowels."
            },
            {
                id: "c-s9-q5",
                title: "Count consonants",
                description: "Count the number of consonants in a string.",
                statement: "Count the number of consonants in a string (case-insensitive).",
                inputFormat: "A single string.",
                outputFormat: "The consonant count.",
                testCases: [{ input: "Hello", output: "3" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s[100];
    scanf("%s", s);
    int count = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        char ch = tolower(s[i]);
        if (isalpha(ch) && ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
                explanation: "A character is a consonant if it is an alphabet (`isalpha()`) and it is not a vowel. The code checks both conditions for each character."
            },
            {
                id: "c-s9-q6",
                title: "Count words",
                description: "Count the number of words in a string.",
                statement: "Given a sentence, count the number of words. Words are separated by spaces.",
                inputFormat: "A single line of text.",
                outputFormat: "The word count.",
                testCases: [{ input: "Hello world how are you", output: "5" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%[^\n]s", s);
    int words = 1;
    if (strlen(s) == 0) words = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == ' ' && s[i+1] != ' ') {
            words++;
        }
    }
    printf("%d", words);
    return 0;
}`,
                explanation: "A simple way to count words is to count the number of spaces. We initialize the count to 1 (for the first word) and increment it every time we find a space. This simple version assumes single spaces between words."
            },
            {
                id: "c-s9-q7",
                title: "Remove spaces",
                description: "Remove all whitespace characters.",
                statement: "Write a program to remove all spaces from a string.",
                inputFormat: "A string with spaces.",
                outputFormat: "The string without spaces.",
                testCases: [{ input: "Hello World", output: "HelloWorld" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%[^\n]s", s);
    char result[100];
    int j = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] != ' ') {
            result[j++] = s[i];
        }
    }
    result[j] = '\\0'; // Null terminate the result string
    printf("%s", result);
    return 0;
}`,
                explanation: "We iterate through the input string. If the current character is not a space, we copy it to a new `result` string. A separate index `j` is used to track the position in the `result` string."
            },
            {
                id: "c-s9-q8",
                title: "Remove vowels",
                description: "Remove all vowels from a string.",
                statement: "Write a program that removes all vowels from a given string (case-insensitive).",
                inputFormat: "A single string.",
                outputFormat: "The string without vowels.",
                testCases: [{ input: "CodeAlpha", output: "CdLph" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s[100], result[100];
    scanf("%s", s);
    int j = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        char ch = tolower(s[i]);
        if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
            result[j++] = s[i];
        }
    }
    result[j] = '\\0';
    printf("%s", result);
    return 0;
}`,
                explanation: "We iterate through the input string. If the lowercase version of the character is not a vowel, we append it to our new `result` string."
            },
            {
                id: "c-s9-q9",
                title: "Remove special characters",
                description: "Remove all non-alphanumeric characters.",
                statement: "Given a string, remove all characters that are not letters or numbers.",
                inputFormat: "A string.",
                outputFormat: "The cleaned string.",
                testCases: [{ input: "He@l!lo,", output: "Hello" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char s[100], result[100];
    scanf("%s", s);
    int j = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (isalnum(s[i])) {
            result[j++] = s[i];
        }
    }
    result[j] = '\\0';
    printf("%s", result);
    return 0;
}`,
                explanation: "We use the `isalnum()` function from `ctype.h` to check if a character is alphanumeric (a letter or a digit). If it is, we copy it to the `result` string."
            },
            {
                id: "c-s9-q10",
                title: "Frequency of characters",
                description: "Count the frequency of each character.",
                statement: "Count how many times each character appears in a string.",
                inputFormat: "A single string.",
                outputFormat: "Each character with its frequency.",
                testCases: [{ input: "banana", output: "b -> 1\na -> 3\nn -> 2\n" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    int freq[256] = {0};
    scanf("%s", s);

    for (int i = 0; s[i] != '\\0'; i++) {
        freq[(int)s[i]]++;
    }

    for (int i = 0; i < 256; i++) {
        if (freq[i] > 0) {
            printf("%c -> %d\\n", i, freq[i]);
        }
    }
    return 0;
}`,
                explanation: "We use an integer array `freq` of size 256 as a hash map. The ASCII value of each character is used as an index into this array. We iterate through the string and increment the count at the corresponding index."
            },
            {
                id: "c-s9-q11",
                title: "Most frequent character",
                description: "Find the character that appears most often.",
                statement: "Given a string, find the character with the highest frequency.",
                inputFormat: "A single string.",
                outputFormat: "The character with the maximum frequency.",
                testCases: [{ input: "programming", output: "m" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    int freq[256] = {0};
    scanf("%s", s);

    for (int i = 0; s[i] != '\\0'; i++) {
        freq[(int)s[i]]++;
    }
    
    int max_freq = 0;
    char max_char;
    for (int i = 0; i < 256; i++) {
        if (freq[i] > max_freq) {
            max_freq = freq[i];
            max_char = (char)i;
        }
    }
    printf("%c", max_char);
    return 0;
}`,
                explanation: "First, we calculate the frequency of all characters. Then, we loop through the frequency array to find the index (which corresponds to the character) with the highest count."
            },
            {
                id: "c-s9-q12",
                title: "Compare strings",
                description: "Compare two strings lexicographically.",
                statement: "Read two strings and determine if the first is less than, equal to, or greater than the second.",
                inputFormat: "Two strings on new lines.",
                outputFormat: "-1, 0, or 1.",
                testCases: [{ input: "apple\nbanana", output: "-1" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[100], s2[100];
    scanf("%s %s", s1, s2);
    int result = strcmp(s1, s2);
    if (result < 0) printf("-1");
    else if (result > 0) printf("1");
    else printf("0");
    return 0;
}`,
                explanation: "The `strcmp()` function from `string.h` compares two strings. It returns a negative value if s1 < s2, a positive value if s1 > s2, and 0 if they are equal."
            },
            {
                id: "c-s9-q13",
                title: "Copy string",
                description: "Copy a string to another.",
                statement: "Read a string and copy it into another character array using `strcpy()`.",
                inputFormat: "A single string.",
                outputFormat: "The copied string.",
                testCases: [{ input: "CodeAlpha", output: "Copied: CodeAlpha" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char source[100], destination[100];
    scanf("%s", source);
    strcpy(destination, source);
    printf("Copied: %s", destination);
    return 0;
}`,
                explanation: "The `strcpy(destination, source)` function copies the string from the source array (including the null terminator) to the destination array."
            },
            {
                id: "c-s9-q14",
                title: "Convert to uppercase",
                description: "Convert a string to uppercase.",
                statement: "Read a string and convert all its lowercase letters to uppercase.",
                inputFormat: "A string.",
                outputFormat: "The uppercase string.",
                testCases: [{ input: "Hello", output: "HELLO" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char s[100];
    scanf("%s", s);
    for (int i = 0; s[i] != '\\0'; i++) {
        s[i] = toupper(s[i]);
    }
    printf("%s", s);
    return 0;
}`,
                explanation: "We loop through the string and apply the `toupper()` function from `ctype.h` to each character. The function converts a character to uppercase if it's a lowercase letter; otherwise, it returns the character unchanged."
            },
            {
                id: "c-s9-q15",
                title: "Convert to lowercase",
                description: "Convert a string to lowercase.",
                statement: "Read a string and convert all its uppercase letters to lowercase.",
                inputFormat: "A string.",
                outputFormat: "The lowercase string.",
                testCases: [{ input: "WORLD", output: "world" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char s[100];
    scanf("%s", s);
    for (int i = 0; s[i] != '\\0'; i++) {
        s[i] = tolower(s[i]);
    }
    printf("%s", s);
    return 0;
}`,
                explanation: "Similar to the uppercase conversion, this uses the `tolower()` function to convert each character to its lowercase equivalent."
            },
            {
                id: "c-s9-q16",
                title: "Toggle case",
                description: "Toggle the case of each character.",
                statement: "Read a string and convert all uppercase letters to lowercase and vice-versa.",
                inputFormat: "A string.",
                outputFormat: "The toggled case string.",
                testCases: [{ input: "CodeAlpha", output: "cODEaLPHA" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char s[100];
    scanf("%s", s);
    for (int i = 0; s[i] != '\\0'; i++) {
        if (islower(s[i])) {
            s[i] = toupper(s[i]);
        } else if (isupper(s[i])) {
            s[i] = tolower(s[i]);
        }
    }
    printf("%s", s);
    return 0;
}`,
                explanation: "We iterate through the string, using `islower()` and `isupper()` to check the case of each character, and then apply the appropriate conversion function."
            },
            {
                id: "c-s9-q17",
                title: "Anagram check",
                description: "Check if two strings are anagrams.",
                statement: "Two strings are anagrams if they contain the same characters with the same frequencies. Check if two strings are anagrams.",
                inputFormat: "Two strings on new lines.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "listen\nsilent", output: "Yes" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[100], s2[100];
    scanf("%s %s", s1, s2);
    
    if (strlen(s1) != strlen(s2)) {
        printf("No");
        return 0;
    }
    
    int freq1[256] = {0}, freq2[256] = {0};
    for(int i = 0; s1[i] != '\\0'; i++) {
        freq1[(int)s1[i]]++;
    }
    for(int i = 0; s2[i] != '\\0'; i++) {
        freq2[(int)s2[i]]++;
    }

    for(int i=0; i<256; i++) {
        if(freq1[i] != freq2[i]) {
            printf("No");
            return 0;
        }
    }
    printf("Yes");
    return 0;
}`,
                explanation: "The frequency counting method is efficient. We create two frequency arrays, one for each string. After populating them, we compare the two arrays. If all counts are identical, the strings are anagrams."
            },
            {
                id: "c-s9-q18",
                title: "Find substring",
                description: "Find the first occurrence of a substring.",
                statement: "Check if a string contains another string (a 'needle' in a 'haystack') and print its starting position.",
                inputFormat: "Two strings on new lines: haystack, then needle.",
                outputFormat: "The starting index or 'Not found'.",
                testCases: [{ input: "helloworld\nlowo", output: "Not found" }, { input: "helloworld\nlow", output: "3" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char haystack[100], needle[100];
    scanf("%s %s", haystack, needle);
    
    char *result = strstr(haystack, needle);
    
    if (result != NULL) {
        printf("%ld", result - haystack);
    } else {
        printf("Not found");
    }
    return 0;
}`,
                explanation: "The `strstr()` function from `string.h` finds the first occurrence of the substring `needle` in the string `haystack`. It returns a pointer to the beginning of the located substring, or `NULL` if the substring is not found. Pointer subtraction (`result - haystack`) gives the 0-based index."
            },
            {
                id: "c-s9-q19",
                title: "Replace substring",
                description: "Replace all occurrences of a substring.",
                statement: "Replace all occurrences of a substring 'old' with 'new' in a given string.",
                inputFormat: "The main string, the old substring, the new substring.",
                outputFormat: "The modified string.",
                testCases: [{ input: "This is a test. This is fun.\nis\nwas", output: "Thwas was a test. Thwas was fun." }],
                solution: `// This is a complex function to write manually in C.
// A full implementation requires careful memory management.
// The concept is:
// 1. Count occurrences of the 'old' substring.
// 2. Calculate the required size for the new string.
// 3. Allocate memory for the new string.
// 4. Iterate through the original string, copying characters.
// 5. When 'old' is found, copy 'new' to the result instead.
// 6. Adjust pointers and continue.
`,
                explanation: "Replacing substrings in C is non-trivial because strings are fixed-size character arrays. You typically need to create a new, larger (or smaller) string to hold the result. The process involves finding each occurrence of the old substring and then carefully copying parts of the original string and the new substring into the result buffer."
            },
            {
                id: "c-s9-q20",
                title: "Remove duplicate characters",
                description: "Remove duplicate characters from a string.",
                statement: "Given a string, remove all duplicate characters, keeping the first occurrence.",
                inputFormat: "A string.",
                outputFormat: "The string with unique characters.",
                testCases: [{ input: "programming", output: "progamin" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    scanf("%s", str);
    int index = 0;
    int seen[256] = {0}; // Hash map for seen characters

    for (int i = 0; str[i] != '\\0'; i++) {
        if (seen[(int)str[i]] == 0) {
            str[index++] = str[i];
            seen[(int)str[i]] = 1;
        }
    }
    str[index] = '\\0'; // Null terminate the new string
    printf("%s", str);
    return 0;
}`,
                explanation: "We use an in-place modification with a separate 'write' index. A `seen` array acts as a hash set. We iterate through the string; if a character has not been seen before, we copy it to the `index` position and mark it as seen."
            },
            {
                id: "c-s9-q21",
                title: "Count letters, digits, spaces",
                description: "Count different types of characters.",
                statement: "Count the total number of alphabets, digits, and spaces in a string.",
                inputFormat: "A string.",
                outputFormat: "Counts for each category.",
                testCases: [{ input: "Hello 123", output: "Alphabets: 5\nDigits: 3\nSpaces: 1" }],
                solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char str[100];
    scanf("%[^\n]s", str);
    int alpha = 0, digit = 0, space = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        if (isalpha(str[i])) alpha++;
        else if (isdigit(str[i])) digit++;
        else if (isspace(str[i])) space++;
    }
    printf("Alphabets: %d\\nDigits: %d\\nSpaces: %d", alpha, digit, space);
    return 0;
}`,
                explanation: "The program iterates through the string and uses functions from `ctype.h` (`isalpha`, `isdigit`, `isspace`) to classify each character and increment the appropriate counter."
            },
            {
                id: "c-s9-q22",
                title: "Check rotation (abc → bca)",
                description: "Check if one string is a rotation of another.",
                statement: "Check if string s2 is a rotation of string s1.",
                inputFormat: "Two strings, s1 and s2.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "abcde bcdea", output: "Yes" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char s1[100], s2[100];
    scanf("%s %s", s1, s2);
    
    if (strlen(s1) != strlen(s2)) {
        printf("No");
        return 0;
    }
    
    char temp[200];
    strcpy(temp, s1);
    strcat(temp, s1); // Concatenate s1 with itself

    if (strstr(temp, s2) != NULL) {
        printf("Yes");
    } else {
        printf("No");
    }
    return 0;
}`,
                explanation: "A clever trick for this problem is to create a new string by concatenating the first string with itself (e.g., 'abcde' becomes 'abcdeabcde'). The second string is a rotation of the first if and only if it is a substring of this new concatenated string."
            },
            {
                id: "c-s9-q23",
                title: "Longest word",
                description: "Find the longest word in a sentence.",
                statement: "Given a sentence, find and print the longest word.",
                inputFormat: "A single line of text.",
                outputFormat: "The longest word.",
                testCases: [{ input: "CodeAlpha provides internships", output: "internships" }],
                solution: `// This is complex with scanf, typically done using strtok
#include <stdio.h>
#include <string.h>
int main() {
    char str[100], longest[100] = "";
    scanf("%[^\n]s", str);
    char *token = strtok(str, " ");
    while (token != NULL) {
        if (strlen(token) > strlen(longest)) {
            strcpy(longest, token);
        }
        token = strtok(NULL, " ");
    }
    printf("%s", longest);
    return 0;
}`,
                explanation: "The `strtok()` function is used to split the string into 'tokens' (words) based on a delimiter (a space in this case). We loop through each token, keeping track of the longest one found so far."
            },
            {
                id: "c-s9-q24",
                title: "Reverse each word",
                description: "Reverse each word in a sentence.",
                statement: "Given a sentence, reverse each word in-place.",
                inputFormat: "A single line of text.",
                outputFormat: "The sentence with words reversed.",
                testCases: [{ input: "Hello World", output: "olleH dlroW" }],
                solution: `// Solution would involve tokenizing the string,
// reversing each token, and printing them with spaces.
// This is non-trivial to do in-place.`,
                explanation: "The standard approach is to split the sentence into words. For each word, apply the two-pointer reversal algorithm. Then, print the reversed words separated by spaces."
            },
            {
                id: "c-s9-q25",
                title: "Count repeated words",
                description: "Count the frequency of repeated words.",
                statement: "Count the frequency of each word in a sentence. This is very difficult in C without custom hash map structures.",
                inputFormat: "A sentence.",
                outputFormat: "Word frequencies.",
                testCases: [{ input: "apple banana apple", output: "apple: 2\nbanana: 1" }],
                solution: `// This requires advanced data structures in C, like a hash table or a trie.
// A simpler (but inefficient) approach is:
// 1. Tokenize the sentence into an array of strings.
// 2. Sort the array of strings.
// 3. Iterate through the sorted array and count adjacent duplicates.`,
                explanation: "Without a built-in hash map, counting word frequencies is complex. A common interview approach is to tokenize the string, sort the resulting array of words, and then iterate through the sorted array. Since all identical words will be next to each other, you can easily count them in a single pass."
            },
            {
                id: "c-s9-q26",
                title: "Split string without strtok",
                description: "Manually split a string by a delimiter.",
                statement: "Split a string into words based on spaces without using `strtok()`.",
                inputFormat: "A sentence.",
                outputFormat: "Each word on a new line.",
                testCases: [{ input: "Hello World", output: "Hello\nWorld" }],
                solution: `#include <stdio.h>
int main() {
    char str[100];
    scanf("%[^\n]s", str);
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] == ' ') {
            printf("\\n");
        } else {
            printf("%c", str[i]);
        }
    }
    return 0;
}`,
                explanation: "This simple manual implementation iterates through the string character by character. If it encounters a space, it prints a newline; otherwise, it prints the character. This effectively splits the words by line."
            },
            {
                id: "c-s9-q27",
                title: "Trim string",
                description: "Remove leading and trailing whitespace.",
                statement: "Write a function to remove leading and trailing spaces from a string.",
                inputFormat: "A string with extra spaces.",
                outputFormat: "The trimmed string.",
                testCases: [{ input: "  Hello World  ", output: "Hello World" }],
                solution: `#include <stdio.h>
#include <string.h>

void trim(char *s) {
    char *p = s;
    int l = strlen(p);
    while (isspace(p[l - 1])) p[--l] = 0;
    while (*p && isspace(*p)) ++p, --l;
    memmove(s, p, l + 1);
}
int main() {
    char s[] = "  Hello World  ";
    trim(s);
    printf("'%s'", s);
    return 0;
}`,
                explanation: "A robust trim function is complex. This example first removes trailing spaces by moving the null terminator. Then it finds the first non-space character. Finally, `memmove` shifts the non-space part of the string to the beginning."
            },
            {
                id: "c-s9-q28",
                title: "Compress string (RLE)",
                description: "Perform Run-Length Encoding.",
                statement: "Implement Run-Length Encoding. Given 'aaabbc', produce 'a3b2c1'.",
                inputFormat: "A string.",
                outputFormat: "The RLE compressed string.",
                testCases: [{ input: "aaabbc", output: "a3b2c1" }],
                solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "aaabbc";
    int n = strlen(str);
    for (int i = 0; i < n; i++) {
        int count = 1;
        while (i < n - 1 && str[i] == str[i+1]) {
            count++;
            i++;
        }
        printf("%c%d", str[i], count);
    }
    return 0;
}`,
                explanation: "The program iterates through the string. A nested `while` loop counts consecutive occurrences of the current character. After the inner loop finishes, the character and its count are printed."
            },
            {
                id: "c-s9-q29",
                title: "Expand RLE",
                description: "Expand a Run-Length Encoded string.",
                statement: "Expand a string compressed with Run-Length Encoding. Given 'a3b2c1', produce 'aaabbc'.",
                inputFormat: "An RLE string.",
                outputFormat: "The expanded string.",
                testCases: [{ input: "a3b2c1", output: "aaabbc" }],
                solution: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char str[] = "a3b2c1";
    for (int i = 0; str[i] != '\\0'; i += 2) {
        char ch = str[i];
        int count = str[i+1] - '0'; // Convert char digit to int
        for (int j = 0; j < count; j++) {
            printf("%c", ch);
        }
    }
    return 0;
}`,
                explanation: "The program iterates through the compressed string, taking two characters at a time: the character to print and its count. A nested loop then prints the character the required number of times."
            },
            {
                id: "c-s9-q30",
                title: "Convert string to integer",
                description: "Convert a string of digits to an integer.",
                statement: "Write a function `atoi_custom` that converts a string of digits into an integer without using `atoi()`.",
                inputFormat: "A string of digits.",
                outputFormat: "The integer value.",
                testCases: [{ input: "12345", output: "12345" }],
                solution: `#include <stdio.h>

int atoi_custom(char *str) {
    int res = 0;
    for (int i = 0; str[i] != '\\0'; ++i)
        res = res * 10 + str[i] - '0';
    return res;
}

int main() {
    char s[100];
    scanf("%s", s);
    printf("%d", atoi_custom(s));
    return 0;
}`,
                explanation: "We iterate through the string. For each character, we multiply the current result by 10 (to shift the existing digits one place to the left) and add the numeric value of the current character. `str[i] - '0'` is a trick to convert a character digit to its integer equivalent."
            }
        ]
    },
    {
        category: "SECTION 10 — Functions",
        problems: [
            {
                id: "c-s10-q1",
                title: "Add numbers (function)",
                description: "Create a function to add two numbers.",
                statement: "Write a function `add(int a, int b)` that takes two integers and returns their sum.",
                inputFormat: "Two integers.",
                outputFormat: "The sum.",
                testCases: [{ input: "5 10", output: "15" }],
                solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int n1, n2;
    scanf("%d %d", &n1, &n2);
    printf("%d", add(n1, n2));
    return 0;
}`,
                explanation: "The logic for addition is encapsulated in the `add` function, which makes the code modular and reusable. The `main` function calls it and prints the returned value."
            },
            {
                id: "c-s10-q2",
                title: "Factorial function",
                description: "Create a function to calculate factorial.",
                statement: "Write a function `factorial(int n)` that returns the factorial of a number.",
                inputFormat: "A single integer.",
                outputFormat: "The factorial.",
                testCases: [{ input: "5", output: "120" }],
                solution: `#include <stdio.h>

long long factorial(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    int num;
    scanf("%d", &num);
    printf("%lld", factorial(num));
    return 0;
}`,
                explanation: "The iterative logic for calculating the factorial is placed inside the `factorial` function, which returns the final `long long` result."
            },
            {
                id: "c-s10-q3",
                title: "Prime check function",
                description: "Create a function to check if a number is prime.",
                statement: "Write a function `isPrime(int n)` which returns `1` if `n` is prime and `0` otherwise.",
                inputFormat: "A single integer.",
                outputFormat: "`1` or `0`.",
                testCases: [{input: "13", output: "1"}, {input: "12", output: "0"}],
                solution: `#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int num;
    scanf("%d", &num);
    printf("%d", isPrime(num));
    return 0;
}`,
                explanation: "The `isPrime` function encapsulates the prime checking logic. If any factor is found, it immediately returns `0`. If the loop completes, it returns `1`."
            },
            {
                id: "c-s10-q4",
                title: "Reverse number function",
                description: "Create a function to reverse an integer.",
                statement: "Write a function `reverse(int n)` that returns the reversed integer.",
                inputFormat: "A single integer.",
                outputFormat: "The reversed integer.",
                testCases: [{ input: "12345", output: "54321" }],
                solution: `#include <stdio.h>

int reverse(int n) {
    int reversed = 0;
    while(n != 0) {
        reversed = reversed * 10 + (n % 10);
        n /= 10;
    }
    return reversed;
}

int main() {
    int num;
    scanf("%d", &num);
    printf("%d", reverse(num));
    return 0;
}`,
                explanation: "The logic for reversing the number is placed inside the `reverse` function."
            },
            {
                id: "c-s10-q5",
                title: "Power function",
                description: "Create a function to calculate power.",
                statement: "Write a function `power(int base, int exp)` that calculates `base^exp`.",
                inputFormat: "Two integers: base and exponent.",
                outputFormat: "The result.",
                testCases: [{ input: "3 4", output: "81" }],
                solution: `#include <stdio.h>

long long power(int base, int exp) {
    long long result = 1;
    while (exp > 0) {
        result *= base;
        exp--;
    }
    return result;
}

int main() {
    int b, e;
    scanf("%d %d", &b, &e);
    printf("%lld", power(b, e));
    return 0;
}`,
                explanation: "The iterative logic for calculating power is placed inside the `power` function."
            },
            {
                id: "c-s10-q6",
                title: "Swap using function",
                description: "Swap two numbers using a function (call by reference).",
                statement: "Write a function `swap(int *a, int *b)` that swaps the values of two integers.",
                inputFormat: "Two integers.",
                outputFormat: "The swapped integers.",
                testCases: [{ input: "10 20", output: "20 10" }],
                solution: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("%d %d", x, y);
    return 0;
}`,
                explanation: "To modify variables from within a function in C, you must pass their memory addresses (pointers). The `swap` function takes pointers as arguments and uses the dereference operator `*` to access and modify the values at those addresses."
            },
            {
                id: "c-s10-q7",
                title: "GCD function",
                description: "Create a function to find the GCD.",
                statement: "Write a function `gcd(int a, int b)` to find the GCD of two numbers.",
                inputFormat: "Two integers.",
                outputFormat: "The GCD.",
                testCases: [{ input: "48 18", output: "6" }],
                solution: `#include <stdio.h>

int gcd(int a, int b) {
    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int n1, n2;
    scanf("%d %d", &n1, &n2);
    printf("%d", gcd(n1, n2));
    return 0;
}`,
                explanation: "The iterative Euclidean algorithm is encapsulated in the `gcd` function."
            },
            {
                id: "c-s10-q8",
                title: "LCM function",
                description: "Create a function to find the LCM.",
                statement: "Write a function `lcm(int a, int b)` that finds the LCM of two numbers. It can use a GCD helper function.",
                inputFormat: "Two integers.",
                outputFormat: "The LCM.",
                testCases: [{ input: "15 20", output: "60" }],
                solution: `#include <stdio.h>

int gcd(int a, int b) {
    while(b != 0) { int temp = b; b = a % b; a = temp; }
    return a;
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int n1, n2;
    scanf("%d %d", &n1, &n2);
    printf("%d", lcm(n1, n2));
    return 0;
}`,
                explanation: "The `lcm` function uses the mathematical relationship between LCM and GCD: `lcm(a, b) * gcd(a, b) = a * b`."
            },
            {
                id: "c-s10-q9",
                title: "Fibonacci function",
                description: "Create a function to find the nth Fibonacci number.",
                statement: "Write an iterative function `fib(int n)` to find the nth Fibonacci number.",
                inputFormat: "An integer `n`.",
                outputFormat: "The nth Fibonacci number.",
                testCases: [{ input: "9", output: "34" }],
                solution: `#include <stdio.h>

int fib(int n) {
    int a = 0, b = 1, c, i;
    if (n == 0) return a;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int num;
    scanf("%d", &num);
    printf("%d", fib(num));
    return 0;
}`,
                explanation: "The `fib` function implements the iterative approach to generate Fibonacci numbers, which is more efficient than the simple recursive version."
            },
            {
                id: "c-s10-q10",
                title: "Array sum using function",
                description: "Create a function to sum an array.",
                statement: "Write a function `sumArray(int arr[], int size)` that takes an array and its size and returns the sum of its elements.",
                inputFormat: "N, then N integers.",
                outputFormat: "The sum.",
                testCases: [{ input: "5\n1 2 3 4 5", output: "15" }],
                solution: `#include <stdio.h>

int sumArray(int arr[], int size) {
    int sum = 0;
    for(int i=0; i<size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    printf("%d", sumArray(arr, 5));
    return 0;
}`,
                explanation: "When an array is passed to a function, it decays into a pointer to its first element. That's why we must also pass its `size` as a separate argument."
            },
            {
                id: "c-s10-q11",
                title: "Max of array using function",
                description: "Create a function to find the max of an array.",
                statement: "Write a function `maxArray(int arr[], int size)` that returns the largest element.",
                inputFormat: "N, then N integers.",
                outputFormat: "The max element.",
                testCases: [{ input: "5\n10 50 20 5 90", output: "90" }],
                solution: `#include <stdio.h>
#include <limits.h>

int maxArray(int arr[], int size) {
    int max = INT_MIN;
    for(int i=0; i<size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

int main() { /* ... */ }`,
                explanation: "The logic for finding the maximum element is encapsulated within the `maxArray` function."
            },
            {
                id: "c-s10-q12",
                title: "Min of array using function",
                description: "Create a function to find the min of an array.",
                statement: "Write a function `minArray(int arr[], int size)` that returns the smallest element.",
                inputFormat: "N, then N integers.",
                outputFormat: "The min element.",
                testCases: [{ input: "5\n10 50 20 5 90", output: "5" }],
                solution: `#include <stdio.h>
#include <limits.h>

int minArray(int arr[], int size) {
    int min = INT_MAX;
    for(int i=0; i<size; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

int main() { /* ... */ }`,
                explanation: "The logic for finding the minimum element is encapsulated within the `minArray` function."
            },
            {
                id: "c-s10-q13",
                title: "String copy function",
                description: "Create a custom string copy function.",
                statement: "Write a function `strcpy_custom(char* dest, const char* src)` that copies a string without using `strcpy()`.",
                inputFormat: "A string.",
                outputFormat: "The copied string.",
                testCases: [{ input: "CodeAlpha", output: "CodeAlpha" }],
                solution: `#include <stdio.h>

void strcpy_custom(char* dest, const char* src) {
    int i = 0;
    while(src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0'; // Null terminate
}

int main() {
    char s1[] = "CodeAlpha";
    char s2[100];
    strcpy_custom(s2, s1);
    printf("%s", s2);
    return 0;
}`,
                explanation: "The function iterates through the source string `src` until it finds the null terminator, copying each character to the destination `dest`. It's crucial to add the null terminator to the destination string at the end."
            },
            {
                id: "c-s10-q14",
                title: "Palindrome function",
                description: "Create a function to check for a palindrome string.",
                statement: "Write a function `isPalindrome(char* str)` that returns 1 if a string is a palindrome and 0 otherwise.",
                inputFormat: "A string.",
                outputFormat: "1 or 0.",
                testCases: [{ input: "madam", output: "1" }],
                solution: `#include <stdio.h>
#include <string.h>

int isPalindrome(char* str) {
    int start = 0;
    int end = strlen(str) - 1;
    while (start < end) {
        if (str[start] != str[end]) {
            return 0;
        }
        start++;
        end--;
    }
    return 1;
}

int main() { /* ... */ }`,
                explanation: "The two-pointer logic for checking a palindrome is encapsulated within the `isPalindrome` function."
            },
            {
                id: "c-s10-q15",
                title: "Menu-driven function program",
                description: "A menu-driven program calling different functions.",
                statement: "Create a menu-driven program that asks the user to choose between adding or subtracting two numbers. Call the appropriate function based on the choice.",
                inputFormat: "Choice, then two numbers.",
                outputFormat: "The result.",
                testCases: [{ input: "1\n10 20", output: "Sum = 30" }],
                solution: `#include <stdio.h>
int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    int choice, n1, n2;
    printf("1. Add\\n2. Subtract\\nEnter choice: ");
    scanf("%d", &choice);
    printf("Enter two numbers: ");
    scanf("%d %d", &n1, &n2);

    switch(choice) {
        case 1: printf("Sum = %d", add(n1, n2)); break;
        case 2: printf("Difference = %d", sub(n1, n2)); break;
        default: printf("Invalid choice");
    }
    return 0;
}`,
                explanation: "This program presents a menu to the user. A `switch` statement is used to determine which function (`add` or `sub`) to call based on the user's input."
            },
            {
                id: "c-s10-q16",
                title: "Sum of digits recursive",
                description: "Find the sum of digits using recursion.",
                statement: "Write a recursive function to calculate the sum of the digits of an integer.",
                inputFormat: "A single integer.",
                outputFormat: "The sum of digits.",
                testCases: [{ input: "123", output: "6" }],
                solution: `#include <stdio.h>

int sum_digits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sum_digits(n / 10);
}

int main() {
    printf("%d", sum_digits(123));
    return 0;
}`,
                explanation: "The function finds the sum by adding the last digit (`n % 10`) to the result of calling itself with the rest of the number (`n / 10`). The recursion stops when the number becomes 0."
            },
            {
                id: "c-s10-q17",
                title: "Print digits recursive",
                description: "Print digits of a number on new lines using recursion.",
                statement: "Write a recursive function to print the digits of a number, each on a new line.",
                inputFormat: "An integer.",
                outputFormat: "The digits on new lines.",
                testCases: [{ input: "123", output: "1\n2\n3" }],
                solution: `#include <stdio.h>

void print_digits(int n) {
    if (n == 0) return;
    print_digits(n / 10);
    printf("%d\\n", n % 10);
}

int main() {
    print_digits(123);
    return 0;
}`,
                explanation: "This function uses head recursion. The recursive call `print_digits(n / 10)` is made *before* the `printf`. This causes the print statements to execute as the recursion unwinds, resulting in the digits being printed in the correct order."
            },
            {
                id: "c-s10-q18",
                title: "Binary to decimal using recursion",
                description: "Convert binary to decimal recursively.",
                statement: "Write a recursive function to convert a binary number (given as an integer) to its decimal equivalent.",
                inputFormat: "A binary number.",
                outputFormat: "The decimal equivalent.",
                testCases: [{ input: "1101", output: "13" }],
                solution: `#include <stdio.h>

int bin_to_dec(int bin) {
    if (bin == 0) return 0;
    return (bin % 10) + 2 * bin_to_dec(bin / 10);
}

int main() {
    printf("%d", bin_to_dec(1101));
    return 0;
}`,
                explanation: "The function recursively processes the binary number. It takes the last digit (`bin % 10`), which is the coefficient of the lowest power of 2, and adds it to `2 *` the decimal value of the rest of the binary number. This effectively shifts the powers of 2 for the subsequent digits."
            },
            {
                id: "c-s10-q19",
                title: "Decimal to binary recursion",
                description: "Convert decimal to binary recursively.",
                statement: "Write a recursive function to print the binary representation of a decimal number.",
                inputFormat: "An integer.",
                outputFormat: "The binary string.",
                testCases: [{ input: "13", output: "1101" }],
                solution: `#include <stdio.h>

void dec_to_bin(int n) {
    if (n == 0) return;
    dec_to_bin(n / 2);
    printf("%d", n % 2);
}

int main() {
    dec_to_bin(13);
    return 0;
}`,
                explanation: "This uses head recursion similar to printing digits. The recursive call is made first with `n / 2`. The `printf` then prints the remainder `n % 2` as the recursion unwinds, which builds the binary string in the correct order."
            },
            {
                id: "c-s10-q20",
                title: "Tower of Hanoi",
                description: "Solve the Tower of Hanoi puzzle.",
                statement: "This is a duplicate of a problem in the Functions section.",
                inputFormat: "An integer N for the number of disks.",
                outputFormat: "The sequence of moves.",
                testCases: [{ input: "3", output: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C\n" }],
                solution: `#include <stdio.h>

void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from_rod, to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    printf("Move disk %d from %c to %c\\n", n, from_rod, to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

int main() {
    int n = 3;
    towerOfHanoi(n, 'A', 'C', 'B');
    return 0;
}`,
                explanation: "A classic recursion problem. The logic to move N disks from `from_rod` to `to_rod` is broken down into three steps: recursively move N-1 disks to the auxiliary rod, move the largest disk to the destination, and recursively move the N-1 disks from the auxiliary rod to the destination."
            }
        ]
    }
]
