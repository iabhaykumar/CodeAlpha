import React from 'react';
import { ProblemCategory } from './types';

export const JAVA_PROBLEMS_PART1: ProblemCategory[] = [
  {
    category: "SECTION 1 — BASICS (BEGINNER)",
    problems: [
      {
        id: "java-s1-q1",
        title: "Print “Hello World”",
        description: "The classic first program.",
        statement: "Write a Java program to print the exact string 'Hello, World!' to the standard output.",
        inputFormat: "No input.",
        outputFormat: "A single line: `Hello, World!`",
        testCases: [{ input: "", output: "Hello, World!" }],
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        explanation: "Every Java application has an entry point, which is the `main` method. `System.out.println()` is used to print output to the standard output stream, followed by a newline."
      },
      {
        id: "java-s1-q2",
        title: "Add Two Numbers",
        description: "Read two integers and print their sum.",
        statement: "Write a Java program that reads two integers from the standard input and prints their sum.",
        inputFormat: "Two integers separated by a space.",
        outputFormat: "A single integer representing the sum.",
        testCases: [{ input: "5 10", output: "15" }],
        solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int sum = num1 + num2;
        System.out.println(sum);
        scanner.close();
    }
}`,
        explanation: "To read input in Java, we use the `Scanner` class from the `java.util` package. The `nextInt()` method reads the next integer from the input."
      },
      {
        id: "java-s1-q3",
        title: "Multiply Two Numbers",
        description: "Read two integers and print their product.",
        statement: "Write a program that takes two integers and prints their product.",
        inputFormat: "Two integers.",
        outputFormat: "The integer product.",
        testCases: [{ input: "4 5", output: "20" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a * b);
        sc.close();
    }
}`,
        explanation: "The program reads two integers and prints the result of their multiplication using the `*` operator."
      },
       {
        id: "java-s1-q4",
        title: "Compute Simple Interest",
        description: "Calculate simple interest from P, R, and T.",
        statement: "Calculate simple interest given Principal, Rate, and Time. Formula: (P * R * T) / 100.",
        inputFormat: "Integer P, float R, integer T.",
        outputFormat: "The simple interest as a float.",
        testCases: [{ input: "1000 5.5 2", output: "110.0" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p = sc.nextInt();
        double r = sc.nextDouble();
        int t = sc.nextInt();
        double si = (p * r * t) / 100;
        System.out.println(si);
        sc.close();
    }
}`,
        explanation: "We use `double` for the rate and result to handle decimal values accurately. The standard formula is applied to calculate the simple interest."
      },
      {
        id: "java-s1-q5",
        title: "Area of a Rectangle",
        description: "Calculate the area of a rectangle.",
        statement: "Write a program to take two integers, length and width, and calculate the area (length * width).",
        inputFormat: "Two integers, length and width.",
        outputFormat: "The integer area.",
        testCases: [{ input: "7 8", output: "56" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int width = sc.nextInt();
        System.out.println(length * width);
        sc.close();
    }
}`,
        explanation: "The program reads two integers and prints their product, which represents the rectangle's area."
      },
      {
        id: "java-s1-q6",
        title: "Area of a Circle",
        description: "Calculate the area of a circle.",
        statement: "Calculate the area of a circle given its radius. Formula: π * r².",
        inputFormat: "A number (can be double) for the radius.",
        outputFormat: "The area.",
        testCases: [{ input: "5", output: "78.53981633974483" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double radius = sc.nextDouble();
        double area = Math.PI * radius * radius;
        System.out.println(area);
        sc.close();
    }
}`,
        explanation: "We use the `Math.PI` constant for an accurate value of π. The radius is read as a `double` to allow for decimal inputs."
      },
       {
        id: "java-s1-q7",
        title: "Perimeter of a Square",
        description: "Calculate the perimeter of a square.",
        statement: "Calculate the perimeter of a square given one side. Formula: 4 * side.",
        inputFormat: "A single integer for the side length.",
        outputFormat: "The perimeter.",
        testCases: [{ input: "10", output: "40" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int side = sc.nextInt();
        System.out.println(4 * side);
        sc.close();
    }
}`,
        explanation: "The program reads the side length and multiplies it by 4 to get the perimeter of the square."
      },
      {
        id: "java-s1-q8",
        title: "Swap Two Numbers (Temp variable)",
        description: "Swap two numbers using a third variable.",
        statement: "Write a program to swap the values of two integer variables using a third temporary variable.",
        inputFormat: "Two integers.",
        outputFormat: "The two integers after swapping.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int temp = a;
        a = b;
        b = temp;
        System.out.println(a + " " + b);
        sc.close();
    }
}`,
        explanation: "A temporary variable `temp` is used to hold the value of `a` while `a` is overwritten with `b`'s value. Then `b` is assigned the value from `temp`."
      },
       {
        id: "java-s1-q9",
        title: "Swap Numbers (Without temp)",
        description: "Swap two numbers without a temp variable.",
        statement: "Swap two integers without using a third variable, using arithmetic operators.",
        inputFormat: "Two integers.",
        outputFormat: "The swapped integers.",
        testCases: [{ input: "10 20", output: "20 10" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        a = a + b;
        b = a - b; // b becomes original a
        a = a - b; // a becomes original b
        System.out.println(a + " " + b);
        sc.close();
    }
}`,
        explanation: "This is a classic trick using arithmetic. After `a = a + b`, `a` holds the sum. Then `b = a - b` is equivalent to `b = (original_a + original_b) - original_b`, which leaves `b` with `original_a`. The final step does the same to isolate `original_b` in `a`."
      },
      {
        id: "java-s1-q10",
        title: "Check Even or Odd",
        description: "Check if a number is even or odd.",
        statement: "Write a program to check if an integer is even or odd.",
        inputFormat: "A single integer.",
        outputFormat: "'Even' or 'Odd'.",
        testCases: [{ input: "4", output: "Even" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
        sc.close();
    }
}`,
        explanation: "The modulus operator `% 2` returns 0 if a number is even and 1 if it is odd. An `if-else` statement is used to check this condition."
      },
      {
        id: "java-s1-q11",
        title: "Positive, Negative, or Zero",
        description: "Check a number's sign.",
        statement: "Write a program to check if a number is positive, negative or zero.",
        inputFormat: "A single integer.",
        outputFormat: "'Positive', 'Negative' or 'Zero'.",
        testCases: [{ input: "-9", output: "Negative" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if (num > 0)
            System.out.println("Positive");
        else if (num < 0)
            System.out.println("Negative");
        else
            System.out.println("Zero");
        sc.close();
    }
}`,
        explanation: "An `if-else if-else` ladder checks the conditions sequentially: first for positive, then for negative, and the final `else` covers the zero case."
      },
       {
        id: "java-s1-q12",
        title: "Largest of Two Numbers",
        description: "Find the largest of two numbers.",
        statement: "Find the largest of two integers.",
        inputFormat: "Two integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "10 45", output: "45" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        System.out.println(Math.max(n1, n2));
        sc.close();
    }
}`,
        explanation: "The `Math.max()` method is a convenient built-in function that returns the larger of two given numbers."
      },
      {
        id: "java-s1-q13",
        title: "Largest of Three Numbers",
        description: "Find the largest of three numbers.",
        statement: "Write a program to find the largest among three given integers.",
        inputFormat: "Three integers.",
        outputFormat: "The largest integer.",
        testCases: [{ input: "10 45 20", output: "45" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int n3 = sc.nextInt();
        int largest = Math.max(n1, Math.max(n2, n3));
        System.out.println(largest);
        sc.close();
    }
}`,
        explanation: "We can nest `Math.max()` calls to find the largest of three or more numbers efficiently."
      },
      {
        id: "java-s1-q14",
        title: "Check Leap Year",
        description: "Check if a year is a leap year.",
        statement: "A year is a leap year if it is divisible by 4, except for century years, which must be divisible by 400.",
        inputFormat: "A single integer `year`.",
        outputFormat: "Print 'Yes' or 'No'.",
        testCases: [ { input: "2000", output: "Yes" }, { input: "1900", output: "No" } ],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int year = scanner.nextInt();
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        scanner.close();
    }
}`,
        explanation: "The logic uses a compound conditional statement. `(year % 4 == 0 && year % 100 != 0)` handles regular leap years. `(year % 400 == 0)` handles century leap years. The `||` (OR) combines these two conditions."
      },
      {
        id: "java-s1-q15",
        title: "ASCII Value of Character",
        description: "Find the ASCII value of a character.",
        statement: "Write a program that reads a character and prints its ASCII value.",
        inputFormat: "A single character.",
        outputFormat: "The integer ASCII value.",
        testCases: [{ input: "A", output: "65" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().charAt(0);
        System.out.println((int) c);
        sc.close();
    }
}`,
        explanation: "Casting the `char` to `(int)` tells `println` to display its integer ASCII value instead of the character itself."
      },
      {
        id: "java-s1-q16",
        title: "Character is Vowel or Consonant",
        description: "Check if a character is a vowel.",
        statement: "Check if a lowercase character is a vowel ('a', 'e', 'i', 'o', 'u').",
        inputFormat: "A single lowercase character.",
        outputFormat: "'Vowel' or 'Consonant'.",
        testCases: [{ input: "a", output: "Vowel" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().toLowerCase().charAt(0);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            System.out.println("Vowel");
        } else {
            System.out.println("Consonant");
        }
        sc.close();
    }
}`,
        explanation: "The program checks if the input character is equal to any of the five vowels using the logical OR `||` operator."
      },
      {
        id: "java-s1-q17",
        title: "Convert Celsius to Fahrenheit",
        description: "Convert temperature from Celsius to Fahrenheit.",
        statement: "Formula: F = (C * 9/5) + 32.",
        inputFormat: "A double value (Celsius).",
        outputFormat: "The temperature in Fahrenheit.",
        testCases: [{ input: "37", output: "98.6" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double celsius = sc.nextDouble();
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.println(fahrenheit);
        sc.close();
    }
}`,
        explanation: "The input is read as a `double` to handle decimal temperatures. The formula is applied directly."
      },
       {
        id: "java-s1-q18",
        title: "Convert Days to Years/Months",
        description: "Convert a given number of days into years, months, and days.",
        statement: "Convert total days into a format of Years, Months, and Days. Assume 1 year = 365 days and 1 month = 30 days.",
        inputFormat: "A single integer for total days.",
        outputFormat: "Years: Y, Months: M, Days: D",
        testCases: [{ input: "396", output: "Years: 1, Months: 1, Days: 1" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int totalDays = sc.nextInt();
        int years = totalDays / 365;
        int remainingDays = totalDays % 365;
        int months = remainingDays / 30;
        int days = remainingDays % 30;
        System.out.println("Years: " + years + ", Months: " + months + ", Days: " + days);
        sc.close();
    }
}`,
        explanation: "We use integer division and the modulus operator. `totalDays / 365` gives the number of full years. The remainder `totalDays % 365` is then used to calculate the months and remaining days in the same way."
      },
      {
        id: "java-s1-q19",
        title: "Check if Character is Alphabet or Not",
        description: "Check if a character is an alphabet.",
        statement: "Check if a given character is an alphabet (a-z, A-Z).",
        inputFormat: "A single character.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "a", output: "Yes" }, { input: "7", output: "No" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().charAt(0);
        if (Character.isLetter(c)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        sc.close();
    }
}`,
        explanation: "The `Character.isLetter()` method is a convenient built-in way to check if a character is in the alphabet. It handles both uppercase and lowercase letters."
      },
      {
        id: "java-s1-q20",
        title: "Print Table of N",
        description: "Print the multiplication table for a number N.",
        statement: "Print the multiplication table of `N` from 1 to 10.",
        inputFormat: "A single integer.",
        outputFormat: "10 lines in the format 'N x i = result'.",
        testCases: [{ input: "5", output: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i = 1; i <= 10; ++i) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
        sc.close();
    }
}`,
        explanation: "A `for` loop iterates from 1 to 10. Inside the loop, `System.out.println` is used with string concatenation to print each line of the table in the required format."
      }
    ]
  },
  {
    category: "SECTION 2 — LOOPS (PATTERNS + LOGIC)",
    problems: [
        {
        id: "java-s2-q1",
        title: "Sum of First N Natural Numbers",
        description: "Find the sum of numbers from 1 to N.",
        statement: "Write a program to find the sum of all natural numbers from 1 to a given integer N.",
        inputFormat: "A single integer N.",
        outputFormat: "The sum.",
        testCases: [{ input: "100", output: "5050" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; ++i) {
            sum += i;
        }
        System.out.println(sum);
        sc.close();
    }
}`,
        explanation: "We initialize a `sum` variable to 0. Then, a `for` loop iterates from 1 to `n`. In each iteration, the current number `i` is added to the `sum`."
      },
      {
        id: "java-s2-q2",
        title: "Factorial of a Number",
        description: "Calculate the factorial of a number.",
        statement: "Write a program to find the factorial of a non-negative integer `N`.",
        inputFormat: "A single integer.",
        outputFormat: "The factorial value.",
        testCases: [{ input: "5", output: "120" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long factorial = 1;
        for(int i = 1; i <= n; ++i) {
            factorial *= i;
        }
        System.out.println(factorial);
        sc.close();
    }
}`,
        explanation: "A `for` loop iterates from 1 to `n`. In each step, the `factorial` variable is multiplied by the loop counter `i`. A `long` is used for `factorial` to handle large results."
      },
      {
        id: "java-s2-q3",
        title: "Reverse a Number",
        description: "Reverse the digits of an integer.",
        statement: "Write a program to reverse the digits of a given integer.",
        inputFormat: "A single integer.",
        outputFormat: "The reversed integer.",
        testCases: [{ input: "12345", output: "54321" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int reversed = 0;
        while(num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        System.out.println(reversed);
        sc.close();
    }
}`,
        explanation: "This program uses a `while` loop. In each step, it gets the last digit using `% 10`, builds up the `reversed` number, and then removes the last digit from the original number using `/ 10`."
      },
      {
        id: "java-s2-q4",
        title: "Palindrome Number",
        description: "Check if a number is a palindrome.",
        statement: "Check if a number is a palindrome (reads the same forwards and backwards).",
        inputFormat: "A single integer.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "121", output: "Yes" }, { input: "123", output: "No" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int originalNum = num;
        int reversed = 0;
        while(num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        if (originalNum == reversed) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        sc.close();
    }
}`,
        explanation: "We first reverse the number using the standard algorithm and then compare the reversed number with the original number that we saved before the loop."
      },
      {
        id: "java-s2-q5",
        title: "Armstrong Number",
        description: "Check if a number is an Armstrong number.",
        statement: "An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Check if a given 3-digit number is an Armstrong number.",
        inputFormat: "A three-digit integer.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "153", output: "Yes" }, { input: "123", output: "No" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int originalNum = num;
        int result = 0;
        while (originalNum != 0) {
            int digit = originalNum % 10;
            result += digit * digit * digit;
            originalNum /= 10;
        }
        if (result == num) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        sc.close();
    }
}`,
        explanation: "The program iterates through each digit of the number, calculates its cube, and adds it to a `result` sum. Finally, it compares this `result` with the original number."
      },
      {
        id: "java-s2-q6",
        title: "Sum of Digits",
        description: "Find the sum of the digits of a number.",
        statement: "Calculate the sum of the digits of an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The sum of digits.",
        testCases: [{ input: "12345", output: "15" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println(sum);
        sc.close();
    }
}`,
        explanation: "The `while` loop extracts the last digit using `num % 10` and adds it to `sum`. Then it removes the last digit using `num / 10`. This continues until the number becomes 0."
      },
      {
        id: "java-s2-q7",
        title: "Count Digits",
        description: "Count the number of digits in an integer.",
        statement: "Count the total number of digits in an integer.",
        inputFormat: "A single integer.",
        outputFormat: "The number of digits.",
        testCases: [{ input: "12345", output: "5" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int count = 0;
        if (num == 0) {
            count = 1;
        } else {
            while (num != 0) {
                num /= 10;
                count++;
            }
        }
        System.out.println(count);
        sc.close();
    }
}`,
        explanation: "We handle the edge case of 0 separately. For other numbers, a `while` loop runs, dividing the number by 10 in each iteration (which removes the last digit) and incrementing a counter."
      },
      {
        id: "java-s2-q8",
        title: "Fibonacci Series",
        description: "Generate the Fibonacci series up to n terms.",
        statement: "Write a program to generate the Fibonacci series up to `n` terms.",
        inputFormat: "An integer `n`.",
        outputFormat: "The first `n` Fibonacci numbers, separated by spaces.",
        testCases: [{ input: "10", output: "0 1 1 2 3 5 8 13 21 34 " }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int t1 = 0, t2 = 1;
        for (int i = 1; i <= n; ++i) {
            System.out.print(t1 + " ");
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        System.out.println();
        sc.close();
    }
}`,
        explanation: "We start with `t1=0` and `t2=1`. The `for` loop runs `n` times. In each iteration, we print `t1`, then calculate the next term, and update `t1` and `t2` for the next iteration."
      },
      {
        id: "java-s2-q9",
        title: "GCD of Two Numbers",
        description: "Find the Greatest Common Divisor.",
        statement: "Find the GCD of two numbers using the Euclidean algorithm.",
        inputFormat: "Two integers.",
        outputFormat: "The GCD.",
        testCases: [{ input: "48 18", output: "6" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        while(n2 != 0) {
            int temp = n2;
            n2 = n1 % n2;
            n1 = temp;
        }
        System.out.println(n1);
        sc.close();
    }
}`,
        explanation: "This is an iterative implementation of the Euclidean algorithm. The `while` loop continues as long as the second number is not zero. Inside the loop, the remainder is calculated and the numbers are updated until the GCD is found."
      },
      {
        id: "java-s2-q10",
        title: "LCM of Two Numbers",
        description: "Find the Least Common Multiple.",
        statement: "Find the LCM of two integers. Formula: `(a * b) / gcd(a, b)`.",
        inputFormat: "Two integers.",
        outputFormat: "The LCM.",
        testCases: [{ input: "15 20", output: "60" }],
        solution: `import java.util.Scanner;
public class Main {
    public static int gcd(int a, int b) {
        while(b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int hcf = gcd(n1, n2);
        long lcm = (long) n1 * n2 / hcf;
        System.out.println(lcm);
        sc.close();
    }
}`,
        explanation: "We first calculate the GCD (or HCF) of the two numbers. Then, we apply the formula `lcm = (a * b) / gcd`. We cast one of the numbers to `long` during multiplication to prevent potential integer overflow before the division."
      },
      {
        id: "java-s2-q11",
        title: "Print All Prime Numbers in Range",
        description: "Find all prime numbers between two numbers.",
        statement: "Print all prime numbers between two given integers.",
        inputFormat: "Two integers, low and high.",
        outputFormat: "Prime numbers in the range, separated by spaces.",
        testCases: [{ input: "10 30", output: "11 13 17 19 23 29 " }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int low = sc.nextInt();
        int high = sc.nextInt();
        while (low < high) {
            boolean isPrime = true;
            if (low <= 1) {
                isPrime = false;
            } else {
                for (int i = 2; i <= low / 2; ++i) {
                    if (low % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            if (isPrime)
                System.out.print(low + " ");
            ++low;
        }
        System.out.println();
        sc.close();
    }
}`,
        explanation: "The outer `while` loop iterates through every number from `low` to `high`. Inside this loop, we have the logic to check if the current number (`low`) is prime. If it is, we print it."
      },
      {
        id: "java-s2-q12",
        title: "Check Prime Number",
        description: "Check if a number is prime.",
        statement: "A prime number is greater than 1 and has no divisors other than 1 and itself.",
        inputFormat: "A single integer.",
        outputFormat: "'Yes' or 'No'.",
        testCases: [{ input: "7", output: "Yes" }, { input: "10", output: "No" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        boolean isPrime = true;
        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i * i <= num; ++i) { // Optimized loop
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) System.out.println("Yes");
        else System.out.println("No");
        sc.close();
    }
}`,
        explanation: "This is an optimized version of the prime check. The loop only needs to check for factors up to the square root of the number."
      },
      {
        id: "java-s2-q13",
        title: "Pattern 1: Square",
        description: "Print a square of stars.",
        statement: "Print a square of stars of size N x N.",
        inputFormat: "A single integer N.",
        outputFormat: "An N x N square of stars.",
        testCases: [{ input: "4", output: "****\n****\n****\n****" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "Nested loops are used. The outer loop handles the rows, and the inner loop handles the columns. For each row, the inner loop prints `n` stars."
      },
      {
        id: "java-s2-q14",
        title: "Pattern 2: Right Triangle",
        description: "Print a right-angled triangle of stars.",
        statement: "Print a right-angled triangle of stars with height N.",
        inputFormat: "An integer N.",
        outputFormat: "A star pattern.",
        testCases: [{ input: "5", output: "*\n**\n***\n****\n*****" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "The key is the inner loop's condition `j <= i`. For the first row (i=1), it runs once. For the second row (i=2), it runs twice, creating the triangle shape."
      },
      {
        id: "java-s2-q15",
        title: "Pattern 3: Inverted Triangle",
        description: "Print an inverted right-angled triangle.",
        statement: "Print an inverted right-angled triangle of stars with height N.",
        inputFormat: "An integer N.",
        outputFormat: "A star pattern.",
        testCases: [{ input: "5", output: "*****\n****\n***\n**\n*" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "The outer loop runs in reverse, from `n` down to 1, causing the number of stars printed by the inner loop to decrease with each row."
      },
      {
        id: "java-s2-q16",
        title: "Pattern 4: Pyramid",
        description: "Print a pyramid of stars.",
        statement: "Print a pyramid pattern of stars with N rows.",
        inputFormat: "An integer N.",
        outputFormat: "A pyramid pattern.",
        testCases: [{ input: "5", output: "    *\n   ***\n  *****\n *******\n*********" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "This requires three loops. The outer loop for rows, a first inner loop for printing leading spaces (`n-i`), and a second inner loop for printing stars (`2*i - 1`)."
      },
      {
        id: "java-s2-q17",
        title: "Pattern 5: Diamond Pattern",
        description: "Print a diamond shape made of stars.",
        statement: "Print a star diamond pattern of a given size N (rows in top half).",
        inputFormat: "An integer N.",
        outputFormat: "A diamond pattern.",
        testCases: [{ input: "4", output: "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
            System.out.println();
        }
        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= 2 * i - 1; k++) System.out.print("*");
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "The diamond is made of two parts: an upper pyramid and a lower, inverted pyramid. Two separate sets of loops are used to print each part."
      },
      {
        id: "java-s2-q18",
        title: "Number Pattern – Floyd’s Triangle",
        description: "Print Floyd's Triangle.",
        statement: "Print Floyd's Triangle, a right-angled triangle using consecutive natural numbers.",
        inputFormat: "An integer N for the number of rows.",
        outputFormat: "Floyd's Triangle.",
        testCases: [{ input: "4", output: "1 \n2 3 \n4 5 6 \n7 8 9 10 \n" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int number = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(number + " ");
                number++;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        explanation: "A separate counter variable `number` is initialized to 1. Inside the inner loop, this counter is printed and then incremented, ensuring the numbers continue sequentially across all rows."
      },
      {
        id: "java-s2-q19",
        title: "Count Even and Odd Digits",
        description: "Count even and odd digits in a number.",
        statement: "Count the total number of even and odd digits in an integer.",
        inputFormat: "A single integer.",
        outputFormat: "Two lines: 'Even: [count]' and 'Odd: [count]'.",
        testCases: [{ input: "12345", output: "Even: 2\nOdd: 3" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int even = 0, odd = 0;
        while (num > 0) {
            int digit = num % 10;
            if (digit % 2 == 0) {
                even++;
            } else {
                odd++;
            }
            num /= 10;
        }
        System.out.println("Even: " + even);
        System.out.println("Odd: " + odd);
        sc.close();
    }
}`,
        explanation: "The program iterates through each digit of the number using a `while` loop. In each step, it checks if the extracted digit is even or odd and increments the respective counter."
      },
       {
        id: "java-s2-q20",
        title: "Power of Number (Loop)",
        description: "Calculate the power of a number using a loop.",
        statement: "Find the power of a number. Given a base and an exponent.",
        inputFormat: "Two integers: base and exponent.",
        outputFormat: "The result.",
        testCases: [{ input: "2 5", output: "32" }],
        solution: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int base = sc.nextInt();
        int exp = sc.nextInt();
        long result = 1;
        for (int i = 0; i < exp; i++) {
            result *= base;
        }
        System.out.println(result);
        sc.close();
    }
}`,
        explanation: "We initialize `result` to 1. A `for` loop runs `exp` times, multiplying the `result` by the `base` in each iteration."
      }
    ]
  }
];
