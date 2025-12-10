
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ALGORITHMS_PART2_TOPICS: Topic[] = [
  // 6. Recursion & Backtracking
  { id: 'algo-rec-basics', title: 'Recursion Basics', parent: '6. Recursion & Backtracking', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Recursion Basics</h1>
      <p className="mb-4">Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. A recursive function calls itself.</p>
      <CodeBlock language="cpp" code={`int factorial(int n) {
    if (n == 0) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Step
}`} />
    </>
  )},
  { id: 'algo-backtrack-nqueens', title: 'N-Queens Problem', parent: '6. Recursion & Backtracking', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">N-Queens Problem</h1>
      <p className="mb-4">Place N queens on an NxN chessboard such that no two queens attack each other. Solved using <strong>Backtracking</strong>: trying to place a queen, and if it leads to a dead end, backtracking to the previous step.</p>
      <div className="my-6 bg-slate-900 p-4 rounded-xl flex justify-center">
        <div className="grid grid-cols-4 gap-1">
            {[0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0].map((cell, i) => (
                <div key={i} className={`w-8 h-8 flex items-center justify-center text-lg ${(Math.floor(i/4)+i)%2===0 ? 'bg-white' : 'bg-slate-400'}`}>
                    {cell === 1 ? '♛' : ''}
                </div>
            ))}
        </div>
      </div>
    </>
  )},
  { id: 'algo-backtrack-maze', title: 'Rat in a Maze', parent: '6. Recursion & Backtracking', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Rat in a Maze</h1>
      <p className="mb-4">Consider a rat in a square matrix. It has to reach the destination from source. It can move in specific directions (e.g., Up, Down, Left, Right). Some cells are blocked.</p>
      <p className="text-sm bg-blue-50 p-2 rounded text-blue-900"><strong>Approach:</strong> Explore a path. If blocked, backtrack. Mark visited cells to avoid cycles.</p>
    </>
  )},

  // 7. Divide & Conquer
  { id: 'algo-dc-intro', title: 'Divide & Conquer Strategy', parent: '7. Divide & Conquer', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Divide & Conquer</h1>
      <p className="mb-4">A paradigm based on multi-branched recursion. A problem is broken into sub-problems of the same or related type, until these become simple enough to be solved directly.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Divide:</strong> Break problem into sub-problems.</li>
          <li><strong>Conquer:</strong> Solve sub-problems recursively.</li>
          <li><strong>Combine:</strong> Combine solutions to get the final answer.</li>
      </ul>
      <p><strong>Examples:</strong> Merge Sort, Quick Sort, Binary Search, Strassen's Matrix Multiplication.</p>
    </>
  )},

  // 8. Greedy Algorithms
  { id: 'algo-greedy-intro', title: 'Greedy Algorithms', parent: '8. Greedy Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Greedy Algorithms</h1>
      <p className="mb-4">A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most immediate and obvious benefit (local optimum), hoping to reach a global optimum.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Standard Problems</h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Activity Selection:</strong> Select max non-overlapping activities. Sort by finish time.</li>
          <li><strong>Fractional Knapsack:</strong> Maximize value in a knapsack. Sort by Value/Weight ratio.</li>
          <li><strong>Huffman Coding:</strong> Lossless data compression.</li>
      </ul>
    </>
  )},

  // 9. Dynamic Programming (DP)
  { id: 'algo-dp-intro', title: 'DP Concepts', parent: '9. Dynamic Programming', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Dynamic Programming</h1>
      <p className="mb-4">DP is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using DP.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 border bg-purple-50 rounded-lg">
              <h4 className="font-bold text-purple-900">Memoization (Top Down)</h4>
              <p className="text-sm">Store result of function call in a table (map/array) before returning.</p>
          </div>
          <div className="p-4 border bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-900">Tabulation (Bottom Up)</h4>
              <p className="text-sm">Solve smallest subproblems first and use them to build up to larger problems.</p>
          </div>
      </div>
    </>
  )},
  { id: 'algo-dp-common', title: 'Common DP Problems', parent: '9. Dynamic Programming', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Common DP Problems</h1>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Longest Increasing Subsequence (LIS):</strong> Find length of longest subsequence where elements are sorted. O(N²) or O(N log N).</li>
          <li><strong>Longest Common Subsequence (LCS):</strong> Find longest subsequence present in both strings.</li>
          <li><strong>0/1 Knapsack:</strong> Pick items with weight/value to maximize value within capacity W.</li>
          <li><strong>Edit Distance:</strong> Min operations (insert, remove, replace) to convert string A to B.</li>
          <li><strong>Coin Change:</strong> Min coins to make a value.</li>
      </ul>
    </>
  )},

  // 10. Tree Algorithms
  { id: 'algo-tree-basics', title: 'Tree Basics & Traversals', parent: '10. Tree Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Tree Traversals</h1>
      <p className="mb-4">Techniques to visit every node in a tree data structure.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Inorder (Left, Root, Right):</strong> Used to get sorted data from BST.</li>
          <li><strong>Preorder (Root, Left, Right):</strong> Used to create a copy of the tree.</li>
          <li><strong>Postorder (Left, Right, Root):</strong> Used to delete the tree.</li>
          <li><strong>Level Order (BFS):</strong> Visit nodes level by level.</li>
      </ul>
    </>
  )},
  { id: 'algo-tree-advanced', title: 'Advanced Tree Structures', parent: '10. Tree Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Advanced Trees</h1>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Segment Tree:</strong> Efficiently answers range queries (e.g., sum, min) and updates. Time: O(log N).</li>
          <li><strong>Fenwick Tree (BIT):</strong> Simpler to code than Segment Tree for prefix sums.</li>
          <li><strong>Trie (Prefix Tree):</strong> Efficient information reTrieval data structure. Used for autocomplete.</li>
          <li><strong>AVL / Red-Black Tree:</strong> Self-balancing BSTs. Ensure O(log N) height.</li>
      </ul>
    </>
  )},
];
