import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART14: ProblemCategory[] = [
    {
        category: "SECTION 21 — Algorithms / Data Structures / DSA in C",
        problems: [
            // Problems 96-112 (17 problems total)
            {
                id: "c-s21-q1",
                title: "Radix Sort",
                description: "Implement Radix Sort for 32-bit integers.",
                statement: "Implement Radix Sort, a non-comparative sorting algorithm. It sorts integers by processing individual digits. For 32-bit integers, you can process the number 8 bits (one byte) at a time, requiring 4 passes.",
                inputFormat: "An array of integers.",
                outputFormat: "The sorted array.",
                testCases: [{ input: "", output: "" }],
                solution: `// Helper function for counting sort based on a specific byte
// void countingSort(int arr[], int n, int exp) { ... }

// Main radix sort function
// void radixsort(int arr[], int n) {
//     // For 32-bit integers, we can do 4 passes of counting sort (by byte)
//     for (int exp = 0; exp < 32; exp += 8) {
//         countingSort(arr, n, exp);
//     }
// }`,
                explanation: "Radix sort is efficient for integers. It avoids comparisons by distributing elements into buckets based on their digits. By using Counting Sort as a subroutine for each digit (or byte), it can achieve linear time complexity O(d*(n+k)) where d is the number of digits."
            },
            {
                id: "c-s21-q2",
                title: "Suffix Array and LCP Array",
                description: "Build suffix and LCP arrays for substring queries.",
                statement: "Implement an O(n log^2 n) algorithm to build a suffix array. Then, implement Kasai's algorithm to build the LCP (Longest Common Prefix) array in O(n) time. These are fundamental for advanced string problems.",
                inputFormat: "A string.",
                outputFormat: "The suffix array and LCP array.",
                testCases: [{ input: "", output: "" }],
                solution: `// O(n log^2 n) Suffix Array construction is complex.
// It involves repeatedly sorting cyclic shifts of increasing lengths (1, 2, 4, ...).

// Kasai's Algorithm for LCP (conceptual):
// 1. Build an 'rank' array: rank[i] is the position of suffix i in the sorted suffix array.
// 2. Iterate through the original string i from 0 to n-1.
// 3. For each i, find the previous suffix in the sorted order (using the rank array).
// 4. Compute the LCP of suffix i and the previous suffix.
// 5. A key observation allows this to be done in amortized O(1) time per step.`,
                explanation: "A Suffix Array is a sorted array of all suffixes of a string. An LCP array stores the length of the longest common prefix between adjacent suffixes in the sorted suffix array. Together, they allow for very fast substring searching and other complex string queries."
            },
            {
                id: "c-s21-q3",
                title: "Radix Tree (Compressed Trie)",
                description: "Implement a Radix Tree.",
                statement: "Implement a Radix Tree (or Patricia Trie). This is a memory-optimized trie where nodes with only one child are merged with their parent, creating edges that can represent sequences of characters instead of single characters.",
                inputFormat: "Implementation-based.",
                outputFormat: "A memory-efficient trie.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a complex data structure.
// Each node has an array of child pointers.
// Each edge is labeled with a string, not just a character.
// Insertion involves:
// - Finding the longest common prefix of the new word and an existing edge.
// - If there's a mismatch, the edge's node must be split into two.`,
                explanation: "A Radix Tree compresses a standard trie. For example, the words 'romane' and 'romanus' would be stored as a node for 'roman' which then branches to 'e' and 'us'. This saves memory by eliminating nodes that don't represent a branching point."
            },
            {
                id: "c-s21-q4",
                title: "Dijkstra with Binary Heap",
                description: "Implement Dijkstra's algorithm for shortest paths.",
                statement: "Implement Dijkstra's algorithm using a binary min-heap as the priority queue. The graph is represented by an adjacency list.",
                inputFormat: "A weighted graph and a source vertex.",
                outputFormat: "Shortest distances from the source to all other vertices.",
                testCases: [{ input: "", output: "" }],
                solution: `// Requires a Min-Heap implementation (priority queue).
//
// dijkstra(graph, start):
//   dist[all] = infinity; dist[start] = 0;
//   pq.add(start, 0);
//
//   while (!pq.isEmpty()):
//     u = pq.extract_min();
//     for each neighbor v of u:
//       if dist[u] + weight(u,v) < dist[v]:
//         dist[v] = dist[u] + weight(u,v);
//         pq.decrease_key(v, dist[v]); // or just add, letting duplicates exist
`,
                explanation: "Dijkstra's algorithm finds the shortest paths from a source to all other nodes in a graph with non-negative weights. Using a min-heap to store unvisited nodes (prioritized by distance) makes the algorithm efficient, with a time complexity of O(E log V)."
            },
            {
                id: "c-s21-q5",
                title: "Tarjan's Algorithm for SCCs",
                description: "Find Strongly Connected Components.",
                statement: "Implement Tarjan's algorithm to find the Strongly Connected Components (SCCs) of a directed graph. This algorithm uses a single DFS traversal, keeping track of discovery times and 'low-link' values for each node.",
                inputFormat: "A directed graph.",
                outputFormat: "A list of SCCs.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Tarjan's Algorithm
// dfs(u):
//   discovery_time[u] = low_link[u] = time++;
//   stack.push(u); on_stack[u] = true;
//
//   for each neighbor v of u:
//     if v is not visited:
//       dfs(v);
//       low_link[u] = min(low_link[u], low_link[v]);
//     else if v is on_stack:
//       low_link[u] = min(low_link[u], discovery_time[v]);
//
//   if low_link[u] == discovery_time[u]: // u is the root of an SCC
//     // Pop from stack until u is popped. These nodes form an SCC.
`,
                explanation: "Tarjan's algorithm is an efficient single-pass DFS method. The 'low-link' value of a node is the lowest discovery time reachable from that node (including itself) through its DFS subtree. If a node's low-link value is equal to its own discovery time, it is the root of an SCC."
            },
            {
                id: "c-s21-q6",
                title: "Dynamic Segment Tree",
                description: "Implement a segment tree with pointer-based nodes.",
                statement: "Implement a dynamic or 'sparse' segment tree. Instead of using an array, use pointers for child nodes. Nodes are created only when they are needed (during an update). This is memory-efficient for very large ranges with few updates.",
                inputFormat: "Implementation-based.",
                outputFormat: "A memory-efficient segment tree.",
                testCases: [{ input: "", output: "" }],
                solution: `// struct Node { int sum; Node *left, *right; };
//
// update(node, range_start, range_end, index, value):
//   if range is a single point: update node->sum
//   mid = ...
//   if index <= mid:
//     if node->left is NULL: node->left = create_node();
//     update(node->left, ...);
//   else:
//     if node->right is NULL: node->right = create_node();
//     update(node->right, ...);
//   node->sum = node->left->sum + node->right->sum;`,
                explanation: "A standard segment tree uses an array and wastes space for large, sparse ranges. A dynamic segment tree uses a pointer-based structure where child nodes are only allocated when a value in their corresponding range is updated. This makes it suitable for problems with huge coordinate ranges but a manageable number of points."
            },
            {
                id: "c-s21-q7",
                title: "Persistent Segment Tree",
                description: "Implement a functional, immutable segment tree.",
                statement: "Implement a persistent segment tree. Each update operation should not modify the existing tree but instead create a new version of the tree with the update applied. This is achieved by creating a new path of nodes from the root to the updated leaf, while reusing all other unchanged nodes.",
                inputFormat: "Implementation-based.",
                outputFormat: "A data structure that can query any previous version.",
                testCases: [{ input: "", output: "" }],
                solution: `// update function returns a pointer to the NEW root
// Node* update(old_node, ...):
//   // Create a copy of the current node
//   Node* new_node = new Node(*old_node);
//
//   if leaf:
//     new_node->sum = new_value;
//     return new_node;
//
//   // Recurse, and link the returned new child to our new node
//   if updating left side:
//     new_node->left = update(old_node->left, ...);
//   else:
//     new_node->right = update(old_node->right, ...);
//
//   // Recalculate sum and return the new node
//   new_node->sum = ...;
//   return new_node;`,
                explanation: "Persistence in data structures means that previous versions are preserved after an update. In a persistent segment tree, an update creates O(log n) new nodes (a path from the root to the leaf) while sharing the rest of the nodes with the previous version. This allows you to efficiently query the state of the data at any point in time."
            },
            {
                id: "c-s21-q8",
                title: "Bloom Filter",
                description: "Implement a Bloom filter with multiple hash functions.",
                statement: "Implement a Bloom filter, a probabilistic data structure to test set membership. Use a bit array and multiple hash functions (e.g., MurmurHash, or simple multiplicative hashes).",
                inputFormat: "Implementation-based.",
                outputFormat: "A space-efficient set-like structure.",
                testCases: [{ input: "", output: "" }],
                solution: `// See Python solution for c-s21-q18 for a detailed explanation.
// The C implementation would involve:
// 1. A bit array (unsigned char*).
// 2. Functions to set, clear, and check bits.
// 3. A set of k hash functions.
//
// add(item):
//   for i=0 to k:
//     hash_val = hash_i(item);
//     set_bit(bit_array, hash_val % size);
//
// check(item):
//   for i=0 to k:
//     hash_val = hash_i(item);
//     if (!check_bit(bit_array, hash_val % size)):
//       return false; // Definitely not present
//   return true; // Probably present`,
                explanation: "A Bloom filter trades accuracy for space. It can tell you if an item is *definitely not* in a set, or if it *might be* in the set. False negatives are impossible, but false positives can occur. They are useful for applications like checking if a username is already taken before hitting the database."
            },
            {
                id: "c-s21-q9",
                title: "A* Search",
                description: "Implement A* for grid shortest path.",
                statement: "Implement the A* search algorithm to find the shortest path on a grid with obstacles. A* is an extension of Dijkstra's that uses a heuristic to guide its search towards the goal.",
                inputFormat: "A 2D grid, a start point, and an end point.",
                outputFormat: "The shortest path.",
                testCases: [{ input: "", output: "" }],
                solution: `// A* uses a priority queue.
// Priority = g_score + h_score
//
// g_score: The known cost from the start to the current node.
// h_score: The estimated (heuristic) cost from the current node to the end.
//          (e.g., Manhattan distance on a grid).
//
// while (open_set is not empty):
//   current = node in open_set with lowest f_score (g+h)
//   if current is goal: return path
//   
//   for each neighbor of current:
//     tentative_g_score = g_score[current] + dist(current, neighbor)
//     if tentative_g_score < g_score[neighbor]:
//       // Found a better path to this neighbor
//       g_score[neighbor] = tentative_g_score
//       f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)
//       add neighbor to open_set
`,
                explanation: "A* is an informed search algorithm. The heuristic function (`h_score`) makes it 'smarter' than Dijkstra's. A good heuristic (one that never overestimates the true cost) allows A* to explore promising paths first, making it significantly faster for finding a single destination."
            },
            {
                id: "c-s21-q10",
                title: "k-d Tree",
                description: "Build a k-d tree for 2D nearest neighbor queries.",
                statement: "Implement a k-d tree, a space-partitioning data structure for organizing points in a k-dimensional space. Implement the build process and a function to find the nearest neighbor to a given query point.",
                inputFormat: "A list of 2D points.",
                outputFormat: "The nearest neighbor to a query point.",
                testCases: [{ input: "", output: "" }],
                solution: `// Build(points, depth):
//   - Find median of points along axis = depth % k
//   - Create node with median point
//   - node->left = Build(points < median, depth + 1)
//   - node->right = Build(points > median, depth + 1)

// Search(node, query, depth):
//   - If node is null, return.
//   - Check distance from query to current node's point. Update best if needed.
//   - Determine which subtree to search first based on query point's coordinate at current axis.
//   - Recurse into that subtree.
//   - **Crucial step:** Check if the other subtree could possibly contain a closer point.
//     (i.e., if distance from query to splitting plane is less than current best distance).
//     If so, recurse into the other subtree as well.
`,
                explanation: "A k-d tree recursively partitions the space. At each level, it splits the points along a different dimension using the median point. This creates a binary tree structure. The search algorithm prunes large parts of the search space, making it much faster than a linear scan on average."
            },
            {
                id: "c-s21-q11",
                title: "Union-Find",
                description: "Implement with path compression and union by rank.",
                statement: "Implement a Disjoint Set Union (DSU) data structure. It should support `find` (with path compression) and `union` (with union by rank/size) operations.",
                inputFormat: "Implementation-based.",
                outputFormat: "Efficient `find` and `union` operations.",
                testCases: [{ input: "", output: "" }],
                solution: `// parent array: parent[i] stores the parent of element i.
// find(i):
//   if parent[i] == i: return i
//   parent[i] = find(parent[i]); // Path compression
//   return parent[i];

// union(i, j):
//   root_i = find(i);
//   root_j = find(j);
//   if root_i != root_j:
//     // Union by rank/size: attach smaller tree to root of larger tree
//     if rank[root_i] < rank[root_j]: parent[root_i] = root_j;
//     else if rank[root_i] > rank[root_j]: parent[root_j] = root_i;
//     else { parent[root_j] = root_i; rank[root_i]++; }`,
                explanation: "DSU is used to track a set of elements partitioned into disjoint subsets. **Path Compression** flattens the tree structure during `find` operations, making future lookups faster. **Union by Rank/Size** keeps the trees shallow by always attaching the smaller tree to the root of the larger tree. Together, these optimizations make the amortized time complexity nearly constant."
            },
            {
                id: "c-s21-q12",
                title: "Order-Statistics Tree",
                description: "Augment a BST to find the k-th smallest element.",
                statement: "Augment a balanced Binary Search Tree (like a Red-Black Tree) to create an Order-Statistics Tree. Each node should store an additional piece of information: the size of its subtree. Use this to implement an O(log n) `find_kth_smallest` function.",
                inputFormat: "Implementation-based.",
                outputFormat: "An O(log n) k-th smallest query.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual find_kth(k):
//   size_of_left_subtree = node->left ? node->left->size : 0;
//   if k == size_of_left_subtree + 1:
//     return node; // This is the k-th element
//   if k <= size_of_left_subtree:
//     return find_kth(node->left, k);
//   else:
//     return find_kth(node->right, k - (size_of_left_subtree + 1));
`,
                explanation: "By storing the size of the subtree at each node, we can quickly determine the rank of the root of any subtree. The `find_kth_smallest` function uses this information to decide whether to go into the left or right subtree at each step, achieving O(log n) performance."
            },
            {
                id: "c-s21-q13",
                title: "Suffix Automaton",
                description: "Implement for substring count queries.",
                statement: "This is a duplicate of a problem in this section. See c-s21-q2.",
                inputFormat: "N/A",
                outputFormat: "N/A",
                testCases: [{ input: "", output: "" }],
                solution: "// See solution for c-s21-q2.",
                explanation: "A Suffix Automaton is a minimal DFA that accepts all substrings of a string. It can be built in O(n) time and can be used to answer many substring-related queries, such as counting distinct substrings, in linear time."
            },
            {
                id: "c-s21-q14",
                title: "Fenwick Tree (BIT)",
                description: "Implement for prefix sums and point updates.",
                statement: "Implement a Fenwick Tree (or Binary Indexed Tree). It should support two operations in O(log n) time: `update(index, delta)` to add a value to an element, and `query(index)` to get the sum of elements up to that index.",
                inputFormat: "Implementation-based.",
                outputFormat: "Efficient prefix sum queries and updates.",
                testCases: [{ input: "", output: "" }],
                solution: `// update(index, delta):
//   while index <= size:
//     tree[index] += delta;
//     index += index & -index; // Move to parent

// query(index):
//   sum = 0;
//   while index > 0:
//     sum += tree[index];
//     index -= index & -index; // Move to next relevant node
//   return sum;`,
                explanation: "A Fenwick Tree is a data structure that cleverly uses the bit representation of indices to achieve O(log n) updates and prefix sum queries. The expression `index & -index` isolates the least significant bit, which is used to navigate the implicit tree structure within the array."
            },
            {
                id: "c-s21-q15",
                title: "KMP for Pattern Matching",
                description: "Implement KMP with streaming search.",
                statement: "This is a duplicate of a problem in this section. See c-s19-q4.",
                inputFormat: "N/A",
                outputFormat: "N/A",
                testCases: [{ input: "", output: "" }],
                solution: "// See solution for c-s19-q4.",
                explanation: "The Knuth-Morris-Pratt algorithm achieves O(n+m) time complexity for string searching by pre-computing a 'prefix function' (or LPS array) for the pattern. This array allows the algorithm to avoid redundant comparisons by making smart shifts when a mismatch occurs."
            },
            {
                id: "c-s21-q16",
                title: "Rolling Hash (Rabin-Karp)",
                description: "Implement Rabin-Karp and handle collisions.",
                statement: "Implement the Rabin-Karp algorithm for substring searching. Use a rolling hash function to efficiently calculate the hash of each window in the text. Handle hash collisions by performing a character-by-character comparison when hashes match.",
                inputFormat: "A text string and a pattern.",
                outputFormat: "Index of the match or -1.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual rolling hash for next window
// new_hash = ((old_hash - old_char_val) / base) + new_char_val * base^(M-1)
// All operations are done modulo a large prime to prevent overflow.
`,
                explanation: "Rabin-Karp works by comparing the hash of the pattern with the hash of a 'rolling' window in the text. The key is that the hash for the next window can be calculated in O(1) time from the hash of the previous window. A full string comparison is only needed when a hash collision occurs, making it fast on average."
            },
            {
                id: "c-s21-q17",
                title: "Convex Hull (Graham Scan)",
                description: "Implement Graham Scan for finding the convex hull.",
                statement: "Implement the Graham Scan algorithm to find the convex hull of a set of 2D points. This involves finding the point with the lowest y-coordinate, sorting all other points by the polar angle they make with this point, and then iterating through the sorted points, maintaining a stack of points that form the hull.",
                inputFormat: "A list of 2D points.",
                outputFormat: "The points forming the convex hull.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Graham Scan
// 1. Find the bottom-most point (pivot).
// 2. Sort all other points based on the angle they make with the pivot.
// 3. Initialize a stack with the pivot and the first sorted point.
// 4. For each remaining point 'p':
//    - While the stack has at least 2 points and the turn formed by
//      (top-1, top, p) is not a left turn (use cross product):
//      - Pop from the stack.
//    - Push 'p' onto the stack.
// 5. The stack now contains the convex hull vertices.
`,
                explanation: "Graham Scan is an efficient O(n log n) algorithm for finding the convex hull. The sorting step is the most expensive part. The core of the algorithm is the loop that maintains the hull on a stack. It removes points that would create a 'concave' or right turn, ensuring the final shape is convex."
            },
        ]
    }
];