
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ALGORITHMS_PART1_TOPICS: Topic[] = [
  // 1. Algorithm Basics
  { id: 'algo-basics-what', title: 'What is an Algorithm', parent: '1. Algorithm Basics', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an Algorithm?</h1>
      <p className="mb-4 text-lg text-slate-700">An algorithm is a well-defined, step-by-step procedure to solve a specific problem. It takes a set of inputs and produces a desired output.</p>
      
      <div className="flex items-center justify-center my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-slate-300 shadow-sm text-center">
                <span className="block text-xs font-bold text-slate-400 uppercase">Input</span>
                <span className="font-mono text-slate-800">Raw Data</span>
            </div>
            <div className="text-slate-400">➜</div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500 shadow-md text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Logic</div>
                <span className="font-bold text-blue-900">ALGORITHM</span>
                <div className="text-xs text-blue-700 mt-1">Step 1 ➜ Step 2 ➜ ...</div>
            </div>
            <div className="text-slate-400">➜</div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500 shadow-sm text-center">
                <span className="block text-xs font-bold text-green-600 uppercase">Output</span>
                <span className="font-mono text-slate-800">Solution</span>
            </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Pseudocode</h3>
      <p className="mb-4">Pseudocode is a high-level description of an algorithm that uses structural conventions of programming languages but is intended for human reading.</p>
      <CodeBlock language="text" code={`ALGORITHM FindMax(arr):
    max_val = arr[0]
    FOR i FROM 1 TO length(arr) - 1:
        IF arr[i] > max_val:
            max_val = arr[i]
    RETURN max_val`} />
    </>
  )},
  { id: 'algo-basics-complexity', title: 'Time & Space Complexity', parent: '1. Algorithm Basics', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Complexity Analysis</h1>
      <p className="mb-4">Complexity analysis helps us predict the resources (time and memory) an algorithm requires.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
            <h4 className="font-bold text-green-800 mb-2">Time Complexity</h4>
            <p className="text-sm text-slate-600">The computational complexity that describes the amount of time it takes to run an algorithm.</p>
            <ul className="list-disc pl-5 mt-2 text-xs text-green-900">
                <li>O(1): Constant</li>
                <li>O(log n): Logarithmic</li>
                <li>O(n): Linear</li>
                <li>O(n²): Quadratic</li>
            </ul>
        </div>
        <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl">
            <h4 className="font-bold text-blue-800 mb-2">Space Complexity</h4>
            <p className="text-sm text-slate-600">The total amount of memory space used by an algorithm, including input values and auxiliary memory.</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Asymptotic Notations</h3>
      <div className="space-y-4 my-6">
            <div className="flex items-center gap-4 p-4 border rounded-xl bg-red-50 border-red-100">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-lg font-bold text-red-600 shadow-sm">O</div>
                <div>
                    <h3 className="font-bold text-red-900">Big-O (Upper Bound)</h3>
                    <p className="text-sm text-red-800">Worst-case scenario. The algorithm will never take longer than this.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-xl bg-green-50 border-green-100">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-lg font-bold text-green-600 shadow-sm">Ω</div>
                <div>
                    <h3 className="font-bold text-green-900">Omega (Lower Bound)</h3>
                    <p className="text-sm text-green-800">Best-case scenario.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-xl bg-yellow-50 border-yellow-100">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-lg font-bold text-yellow-600 shadow-sm">Θ</div>
                <div>
                    <h3 className="font-bold text-yellow-900">Theta (Tight Bound)</h3>
                    <p className="text-sm text-yellow-800">Average case behavior.</p>
                </div>
            </div>
        </div>
    </>
  )},

  // 2. Mathematics for Algorithms
  { id: 'algo-math-prime', title: 'Prime Numbers & Sieve', parent: '2. Mathematics for Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Prime Numbers</h1>
      <p className="mb-4">A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.</p>
      
      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Sieve of Eratosthenes</h3>
      <p className="mb-4">An efficient algorithm to find all prime numbers up to a specified integer <em>n</em>. Complexity: <strong>O(n log log n)</strong>.</p>
      
      <CodeBlock language="cpp" code={`void sieve(int n) {
    vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
}`} />
    </>
  )},
  { id: 'algo-math-gcd', title: 'GCD & LCM', parent: '2. Mathematics for Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">GCD & LCM</h1>
      <p className="mb-4"><strong>GCD (Greatest Common Divisor)</strong> is the largest positive integer that divides two numbers without a remainder. <strong>Euclidean Algorithm</strong> is an efficient method to compute it.</p>
      <CodeBlock language="cpp" code={`// Euclidean Algorithm
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// LCM (Least Common Multiple)
int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}`} />
    </>
  )},
  { id: 'algo-math-modular', title: 'Modular Arithmetic', parent: '2. Mathematics for Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Modular Arithmetic</h1>
      <p className="mb-4">Calculations "wrapping around" a certain value (the modulus). Fundamental in cryptography and CP.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><code>(a + b) % m = ((a % m) + (b % m)) % m</code></li>
          <li><code>(a * b) % m = ((a % m) * (b % m)) % m</code></li>
          <li><code>(a - b) % m = ((a % m) - (b % m) + m) % m</code></li>
      </ul>
      <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Fast Exponentiation (Modular)</h3>
      <CodeBlock language="cpp" code={`long long power(long long base, long long exp) {
    long long res = 1;
    base = base % 1000000007;
    while (exp > 0) {
        if (exp % 2 == 1) res = (res * base) % 1000000007;
        base = (base * base) % 1000000007;
        exp = exp / 2;
    }
    return res;
}`} />
    </>
  )},

  // 3. Arrays & Strings Algorithms
  { id: 'algo-arr-two-pointer', title: 'Two Pointer Technique', parent: '3. Arrays & Strings Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Two Pointer Technique</h1>
      <p className="mb-4">Used to search for pairs in a sorted array or to merge two sorted arrays. It reduces time complexity typically from O(N²) to O(N).</p>
      <CodeBlock language="cpp" code={`// Find if pair exists with sum target
bool hasPair(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}`} />
    </>
  )},
  { id: 'algo-arr-sliding', title: 'Sliding Window', parent: '3. Arrays & Strings Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Sliding Window</h1>
      <p className="mb-4">Used to perform an operation on a specific window size of an array or string. It converts nested loops into a single loop.</p>
      <CodeBlock language="cpp" code={`// Max sum of subarray of size k
int maxSum(int arr[], int n, int k) {
    int max_sum = 0, window_sum = 0;
    for (int i=0; i<k; i++) window_sum += arr[i];
    max_sum = window_sum;
    
    for (int i=k; i<n; i++) {
        window_sum += arr[i] - arr[i-k];
        max_sum = max(max_sum, window_sum);
    }
    return max_sum;
}`} />
    </>
  )},
  { id: 'algo-arr-kadane', title: 'Kadane’s Algorithm', parent: '3. Arrays & Strings Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Kadane’s Algorithm</h1>
      <p className="mb-4">Efficiently finds the <strong>Maximum Subarray Sum</strong> in O(n) time.</p>
      <CodeBlock language="cpp" code={`int maxSubArraySum(int a[], int size) {
    int max_so_far = INT_MIN, max_ending_here = 0;
    for (int i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}`} />
    </>
  )},
  { id: 'algo-str-kmp', title: 'KMP Algorithm', parent: '3. Arrays & Strings Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">KMP Algorithm</h1>
      <p className="mb-4">Knuth-Morris-Pratt searches for occurrences of a pattern within a main text by employing the observation that when a mismatch occurs, the pattern itself embodies sufficient information to determine where the next match could begin.</p>
      <p className="mb-2"><strong>Time Complexity:</strong> O(N + M)</p>
    </>
  )},
  { id: 'algo-arr-dnf', title: 'Dutch National Flag', parent: '3. Arrays & Strings Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Dutch National Flag Algorithm</h1>
      <p className="mb-4">Used to sort an array of 0s, 1s, and 2s in linear time O(N) and O(1) space.</p>
      <CodeBlock language="cpp" code={`void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) swap(nums[low++], nums[mid++]);
        else if (nums[mid] == 1) mid++;
        else swap(nums[mid], nums[high--]);
    }
}`} />
    </>
  )},

  // 4. Searching Algorithms
  { id: 'algo-search-linear-binary', title: 'Linear & Binary Search', parent: '4. Searching Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Linear & Binary Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="p-4 border bg-white rounded-xl">
            <h3 className="font-bold text-lg mb-2">Linear Search</h3>
            <p className="text-sm mb-2">Iterate through every element. Works on unsorted data.</p>
            <p className="font-mono text-xs bg-slate-100 p-1 rounded">O(N)</p>
        </div>
        <div className="p-4 border bg-white rounded-xl">
            <h3 className="font-bold text-lg mb-2">Binary Search</h3>
            <p className="text-sm mb-2">Divide and conquer on sorted data.</p>
            <p className="font-mono text-xs bg-slate-100 p-1 rounded">O(log N)</p>
        </div>
      </div>
      <CodeBlock language="cpp" code={`int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`} />
    </>
  )},
  { id: 'algo-search-ternary', title: 'Ternary Search', parent: '4. Searching Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Ternary Search</h1>
      <p className="mb-4">Similar to binary search, but divides the array into three parts. Used to find the maximum or minimum of a <strong>unimodal function</strong>.</p>
      <CodeBlock language="cpp" code={`int ternarySearch(int l, int r, int key, int ar[]) {
    if (r >= l) {
        int mid1 = l + (r - l) / 3;
        int mid2 = r - (r - l) / 3;
        if (ar[mid1] == key) return mid1;
        if (ar[mid2] == key) return mid2;
        if (key < ar[mid1]) return ternarySearch(l, mid1 - 1, key, ar);
        else if (key > ar[mid2]) return ternarySearch(mid2 + 1, r, key, ar);
        else return ternarySearch(mid1 + 1, mid2 - 1, key, ar);
    }
    return -1;
}`} />
    </>
  )},

  // 5. Sorting Algorithms
  { id: 'algo-sort-basic', title: 'Basic Sorts (Bubble, Insertion, Selection)', parent: '5. Sorting Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Basic Sorting Algorithms</h1>
      <p className="mb-4">Simple algorithms with O(N²) complexity. Good for small datasets or learning purposes.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Bubble Sort:</strong> Repeatedly swap adjacent elements if they are in the wrong order.</li>
          <li><strong>Selection Sort:</strong> Find the minimum element and move it to the beginning.</li>
          <li><strong>Insertion Sort:</strong> Build the sorted array one item at a time. Efficient for small or nearly sorted data.</li>
      </ul>
    </>
  )},
  { id: 'algo-sort-advanced', title: 'Advanced Sorts (Merge, Quick)', parent: '5. Sorting Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Advanced Sorting</h1>
      <p className="mb-4">Divide and Conquer algorithms with O(N log N) complexity.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Merge Sort</h3>
      <p>Stable sort. Divides array into halves, sorts them, and merges them.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Quick Sort</h3>
      <p>Unstable sort. Picks a pivot, partitions array around pivot. Faster in practice (average case).</p>
    </>
  )},
  { id: 'algo-sort-linear', title: 'Linear Sorts (Counting, Radix)', parent: '5. Sorting Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Linear Sorting</h1>
      <p className="mb-4">Algorithms that run in O(N) or near-linear time by avoiding comparisons.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Counting Sort:</strong> Counts occurrences of each element. Efficient when range of input (k) is not significantly larger than N.</li>
          <li><strong>Radix Sort:</strong> Sorts digit by digit from least significant to most significant. Uses Counting Sort as a subroutine.</li>
          <li><strong>Bucket Sort:</strong> Distributes elements into buckets, then sorts buckets individually.</li>
      </ul>
    </>
  )},
];
