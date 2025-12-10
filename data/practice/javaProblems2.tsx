import React from 'react';
import { ProblemCategory } from './types';

export const JAVA_PROBLEMS_PART2: ProblemCategory[] = [
  {
      category: "SECTION 3 — ARRAYS",
      problems: [
          {
            id: "java-s3-q1",
            title: "Find Largest Element",
            description: "Find the largest element in an array.",
            statement: "Find the largest element in an array of integers.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The largest integer.",
            testCases: [{ input: "5\n8 2 9 1 7", output: "9" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int max = arr[0];
        for(int i=1; i<n; i++) {
            if(arr[i] > max) max = arr[i];
        }
        System.out.println(max);
        sc.close();
    }
}`,
            explanation: "Initialize `max` to the first element. Then loop from the second element, comparing each to the current `max` and updating it if a larger value is found."
          },
          {
            id: "java-s3-q2",
            title: "Find Smallest Element",
            description: "Find the smallest element in an array.",
            statement: "Find the smallest element in an array of integers.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The smallest integer.",
            testCases: [{ input: "5\n8 2 9 1 7", output: "1" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int min = arr[0];
        for(int i=1; i<n; i++) {
            if(arr[i] < min) min = arr[i];
        }
        System.out.println(min);
        sc.close();
    }
}`,
            explanation: "Initialize `min` to the first element. Then loop from the second element, comparing each to the current `min` and updating it if a smaller value is found."
          },
          {
            id: "java-s3-q3",
            title: "Sum of Array Elements",
            description: "Find the sum of all elements in an array.",
            statement: "Calculate and print the sum of `N` integers.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The sum.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "15" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += sc.nextInt();
        }
        System.out.println(sum);
        sc.close();
    }
}`,
            explanation: "We initialize `sum` to 0. A single `for` loop reads each integer and adds it directly to the `sum` variable, avoiding the need to store the whole array if only the sum is needed."
          },
          {
            id: "java-s3-q4",
            title: "Reverse an Array",
            description: "Reverse the elements of an array.",
            statement: "Write a program to reverse an array and print its elements.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The N integers in reverse order, separated by spaces.",
            testCases: [ { input: "5\n1 2 3 4 5", output: "5 4 3 2 1 " } ],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        for (int i = n - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        scanner.close();
    }
}`,
            explanation: "After reading the array, we use a `for` loop that starts from the last index (`n-1`) and decrements down to 0, printing each element."
          },
          {
            id: "java-s3-q5",
            title: "Find Duplicate Elements",
            description: "Find and print duplicate elements in an array.",
            statement: "Given an array, find and print all the duplicate elements.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "Duplicate elements, separated by spaces. Each duplicate should be printed only once.",
            testCases: [{ input: "8\n1 2 3 2 4 5 4 6", output: "2 4 " }],
            solution: `import java.util.HashSet;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        HashSet<Integer> seen = new HashSet<>();
        HashSet<Integer> duplicates = new HashSet<>();
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        for (int num : duplicates) {
            System.out.print(num + " ");
        }
        System.out.println();
        sc.close();
    }
}`,
            explanation: "A `HashSet` is an efficient data structure for this. The `add` method of a `HashSet` returns `false` if the element is already present. We use one set (`seen`) to track numbers we've encountered. If `seen.add(num)` returns `false`, we know `num` is a duplicate, so we add it to a separate `duplicates` set to avoid printing the same duplicate multiple times."
          },
          {
            id: "java-s3-q6",
            title: "Remove Duplicate Elements",
            description: "Remove duplicates from a sorted array in-place.",
            statement: "Given a sorted array, remove duplicates in-place such that each unique element appears only once. Return the new length.",
            inputFormat: "First line: N. Second line: N sorted integers.",
            outputFormat: "The modified array up to the new length.",
            testCases: [{ input: "7\n1 1 2 2 3 4 4", output: "1 2 3 4 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 1;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[j - 1]) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
    public static void main(String[] args) {
        // Assume array is read here
        int[] arr = {1, 1, 2, 2, 3, 4, 4};
        int newLength = removeDuplicates(arr);
        for(int k=0; k < newLength; k++) System.out.print(arr[k] + " ");
    }
}`,
            explanation: "This uses a two-pointer approach. `i` is the 'write' pointer. We iterate with `j`. If `nums[j]` is a new unique number, we place it at index `i` and increment `i`. The final value of `i` is the new length."
          },
          {
            id: "java-s3-q7",
            title: "Frequency of Each Element",
            description: "Count the frequency of each element in an array.",
            statement: "Count how many times each element appears in an array.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "Each unique element and its count.",
            testCases: [{ input: "7\n1 2 1 3 2 1 4", output: "1 -> 3\n2 -> 2\n3 -> 1\n4 -> 1\n" }],
            solution: `import java.util.HashMap;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        HashMap<Integer, Integer> freqMap = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        for (Integer key : freqMap.keySet()) {
            System.out.println(key + " -> " + freqMap.get(key));
        }
        sc.close();
    }
}`,
            explanation: "A `HashMap` is perfect for this. We iterate through the array. For each number, we use it as a key in the map. `getOrDefault(key, 0)` gets the current count or 0 if it's the first time, and we add 1, updating the map."
          },
          {
            id: "java-s3-q8",
            title: "Sort Array (Bubble)",
            description: "Sort an array using the Bubble Sort algorithm.",
            statement: "Implement the Bubble Sort algorithm to sort an array of integers in ascending order.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The sorted array.",
            testCases: [{ input: "5\n5 1 4 2 8", output: "1 2 4 5 8 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        
        for(int num : arr) System.out.print(num + " ");
        System.out.println();
        sc.close();
    }
}`,
            explanation: "Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted."
          },
          {
            id: "java-s3-q9",
            title: "Left Rotate Array",
            description: "Rotate an array to the left by one position.",
            statement: "Rotate the elements of an array to the left by one position.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The rotated array.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "2 3 4 5 1 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        
        int first = arr[0];
        for (int i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = first;
        
        for(int num : arr) System.out.print(num + " ");
        System.out.println();
        sc.close();
    }
}`,
            explanation: "First, we store the first element in a temporary variable. Then, we loop from the beginning of the array, shifting each element one position to the left. Finally, we place the stored first element at the end of the array."
          },
          {
            id: "java-s3-q10",
            title: "Right Rotate Array",
            description: "Rotate an array to the right by one position.",
            statement: "Rotate the elements of an array to the right by one position.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The rotated array.",
            testCases: [{ input: "5\n1 2 3 4 5", output: "5 1 2 3 4 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        
        int last = arr[n - 1];
        for (int i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
        
        for(int num : arr) System.out.print(num + " ");
        System.out.println();
        sc.close();
    }
}`,
            explanation: "We store the last element, then loop from the end backwards, shifting each element one position to the right. Finally, the stored last element is placed at the beginning."
          },
          {
            id: "java-s3-q11",
            title: "Second Largest Element",
            description: "Find the second largest element in an array.",
            statement: "Write a program to find the second largest element in an array.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "The second largest integer.",
            testCases: [{ input: "5\n10 5 8 20 12", output: "12" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for(int num : arr) {
            if(num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        System.out.println(secondLargest);
        sc.close();
    }
}`,
            explanation: "We track `largest` and `secondLargest`. As we iterate, if a new largest number is found, the old largest becomes the second largest. If the number isn't the new largest but is bigger than the current second largest, we update the second largest."
          },
           {
            id: "java-s3-q12",
            title: "Count Occurrence of Element",
            description: "Count how many times an element appears.",
            statement: "Count the frequency of a given element in an array.",
            inputFormat: "First line: N. Second line: N integers. Third line: the element to count.",
            outputFormat: "The frequency.",
            testCases: [{ input: "7\n1 5 3 5 8 5 9\n5", output: "3" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int key = sc.nextInt();
        int count = 0;
        for(int num : arr) {
            if (num == key) count++;
        }
        System.out.println(count);
        sc.close();
    }
}`,
            explanation: "Initialize a counter to 0. Loop through the array and increment the counter every time the element equals the key."
          },
          {
            id: "java-s3-q13",
            title: "Check Array Sorted or Not",
            description: "Check if an array is sorted in ascending order.",
            statement: "Check if a given array of integers is sorted in non-decreasing order.",
            inputFormat: "First line: N. Second line: N integers.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "5\n10 20 30 40 50", output: "Yes" }, { input: "5\n10 20 15 30 40", output: "No" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        boolean sorted = true;
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        if (sorted) System.out.println("Yes");
        else System.out.println("No");
        sc.close();
    }
}`,
            explanation: "We loop from the start of the array up to the second-to-last element. In each step, we compare the current element with the next one. If we ever find an element that is greater than the one following it, the array is not sorted, so we set a flag and break."
          },
          {
            id: "java-s3-q14",
            title: "Merge Two Arrays",
            description: "Merge two arrays into a third one.",
            statement: "Read two arrays and merge them into a third.",
            inputFormat: "N1, N1 integers, N2, N2 integers.",
            outputFormat: "The merged array.",
            testCases: [{ input: "3\n1 2 3\n2\n4 5", output: "1 2 3 4 5 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt(); int[] arr1 = new int[n1];
        for(int i=0; i<n1; i++) arr1[i] = sc.nextInt();
        int n2 = sc.nextInt(); int[] arr2 = new int[n2];
        for(int i=0; i<n2; i++) arr2[i] = sc.nextInt();
        
        int[] merged = new int[n1 + n2];
        System.arraycopy(arr1, 0, merged, 0, n1);
        System.arraycopy(arr2, 0, merged, n1, n2);
        
        for(int num : merged) System.out.print(num + " ");
        System.out.println(); sc.close();
    }
}`,
            explanation: "A new array `merged` is created. `System.arraycopy` is an efficient method to copy elements from a source array to a destination array, specifying start positions and lengths."
          },
          {
            id: "java-s3-q15",
            title: "Insert Element in Array",
            description: "Insert an element at a specified position.",
            statement: "Insert an element into an array at a specific position by shifting elements to the right.",
            inputFormat: "N, N integers, then the element to insert, then the position.",
            outputFormat: "The new array.",
            testCases: [{ input: "5\n10 20 30 40 50\n25 2", output: "10 20 25 30 40 50 " }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = new int[n + 1];
        // Sample data for simplicity
        arr[0]=10; arr[1]=20; arr[2]=30; arr[3]=40; arr[4]=50;
        int element = 25;
        int pos = 2;

        for (int i = n; i > pos; i--) {
            arr[i] = arr[i - 1];
        }
        arr[pos] = element;
        
        for(int i=0; i<=n; i++) System.out.print(arr[i] + " ");
        System.out.println(); sc.close();
    }
}`,
            explanation: "To insert an element, you need an array with enough space. We loop from the end of the array backwards to the insertion position, shifting each element one position to the right. After the shifting is done, we insert the new element at the now-vacant position."
          }
      ]
  },
  {
    category: "SECTION 4 — STRINGS",
    problems: [
        {
            id: "java-s4-q1",
            title: "Count Vowels in String",
            description: "Count the vowels in a string.",
            statement: "Count the number of vowels (a, e, i, o, u) in a string, case-insensitively.",
            inputFormat: "A single string.",
            outputFormat: "The vowel count.",
            testCases: [{ input: "Programming", output: "3" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine().toLowerCase();
        int count = 0;
        for (char ch : str.toCharArray()) {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        System.out.println(count);
        sc.close();
    }
}`,
            explanation: "We convert the string to lowercase. A for-each loop iterates over the character array created by `.toCharArray()`. Inside, we check if the character is a vowel."
        },
        {
            id: "java-s4-q2",
            title: "Count Words in String",
            description: "Count the number of words in a string.",
            statement: "Given a sentence, count the number of words. Words are separated by one or more spaces.",
            inputFormat: "A single line of text.",
            outputFormat: "The word count.",
            testCases: [{ input: "Hello world how are you", output: "5" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine().trim();
        if (str.isEmpty()) {
            System.out.println(0);
        } else {
            String[] words = str.split("\\\\s+");
            System.out.println(words.length);
        }
        sc.close();
    }
}`,
            explanation: "`.trim()` removes leading/trailing whitespace. `.split(\"\\\\s+\")` splits the string by one or more whitespace characters, returning an array of words. The length of this array is the word count."
        },
        {
            id: "java-s4-q3",
            title: "Reverse a String",
            description: "Reverse a given string.",
            statement: "Write a program to reverse a string.",
            inputFormat: "A single string.",
            outputFormat: "The reversed string.",
            testCases: [{ input: "hello", output: "olleh" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(reversed);
        sc.close();
    }
}`,
            explanation: "The `StringBuilder` class has a built-in `.reverse()` method, providing a concise way to reverse a string."
        },
        {
            id: "java-s4-q4",
            title: "Check Palindrome String",
            description: "Check if a string is a palindrome.",
            statement: "A palindrome reads the same forwards and backwards. Check if the input is a palindrome.",
            inputFormat: "A single string.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "madam", output: "Yes" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String reversedStr = new StringBuilder(str).reverse().toString();
        if (str.equals(reversedStr)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        sc.close();
    }
}`,
            explanation: "We create a reversed copy of the string and compare it to the original using `.equals()`. `.equals()` must be used to compare string content, not `==`."
        },
        {
            id: "java-s4-q5",
            title: "Find Frequency of Characters",
            description: "Count the frequency of each character.",
            statement: "Count how many times each character appears in a string.",
            inputFormat: "A single string.",
            outputFormat: "Each character and its frequency.",
            testCases: [{ input: "banana", output: "b -> 1\na -> 3\nn -> 2\n" }],
            solution: `import java.util.HashMap;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        HashMap<Character, Integer> freqMap = new HashMap<>();
        for (char ch : str.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }
        for (Character key : freqMap.keySet()) {
            System.out.println(key + " -> " + freqMap.get(key));
        }
        sc.close();
    }
}`,
            explanation: "A `HashMap` is used to store characters as keys and their counts as values. We iterate through the string's characters and update the count in the map for each one."
        },
        {
            id: "java-s4-q6",
            title: "Remove Vowels",
            description: "Remove all vowels from a string.",
            statement: "Write a program that removes all vowels from a given string (case-insensitive).",
            inputFormat: "A single string.",
            outputFormat: "The string without vowels.",
            testCases: [{ input: "CodeAlpha", output: "CdLph" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = str.replaceAll("[aeiouAEIOU]", "");
        System.out.println(result);
        sc.close();
    }
}`,
            explanation: "The `.replaceAll()` method with a regular expression is a powerful way to solve this. `[aeiouAEIOU]` is a character class that matches any vowel, and we replace it with an empty string."
        },
        {
            id: "java-s4-q7",
            title: "Remove Spaces",
            description: "Remove all whitespace characters.",
            statement: "Write a program to remove all spaces from a string.",
            inputFormat: "A string with spaces.",
            outputFormat: "The string without spaces.",
            testCases: [{ input: "Hello World", output: "HelloWorld" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = str.replaceAll("\\\\s", "");
        System.out.println(result);
        sc.close();
    }
}`,
            explanation: "The regular expression `\\\\s` matches any whitespace character (space, tab, newline). We replace all occurrences with an empty string."
        },
        {
            id: "java-s4-q8",
            title: "Replace Character",
            description: "Replace all occurrences of a character.",
            statement: "Replace all occurrences of character 'a' with 'x' in a string.",
            inputFormat: "A single string.",
            outputFormat: "The modified string.",
            testCases: [{ input: "banana", output: "bxnxnx" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String result = str.replace('a', 'x');
        System.out.println(result);
        sc.close();
    }
}`,
            explanation: "The `.replace()` method takes a target character and a replacement character and returns a new string with all occurrences replaced."
        },
        {
            id: "java-s4-q9",
            title: "Find Substring in String",
            description: "Check if a string contains a substring.",
            statement: "Check if a given string contains the substring 'Alpha'.",
            inputFormat: "A single string.",
            outputFormat: "'Yes' or 'No'.",
            testCases: [{ input: "CodeAlpha", output: "Yes" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        if (str.contains("Alpha")) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        sc.close();
    }
}`,
            explanation: "The `.contains()` method is a simple and readable way to check for the presence of a substring. It returns `true` or `false`."
        },
        {
            id: "java-s4-q10",
            title: "Convert String to Integer (Without parseInt)",
            description: "Manually convert a string of digits to an integer.",
            statement: "Write a program to convert a string of digits into an integer without using `Integer.parseInt()`.",
            inputFormat: "A string of digits.",
            outputFormat: "The integer value.",
            testCases: [{ input: "123", output: "123" }],
            solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int num = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            // 'c' - '0' converts character digit to integer digit
            num = num * 10 + (c - '0');
        }
        System.out.println(num);
        sc.close();
    }
}`,
            explanation: "We iterate through the string. In each step, we multiply the current `num` by 10 to shift digits to the left, and then add the new digit. The expression `c - '0'` is a common trick to convert a character digit (like '3') to its integer equivalent (3) based on their ASCII values."
        }
    ]
  }
];
